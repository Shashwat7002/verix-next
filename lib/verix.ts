/**
 * verix.ts — server-side client for the Verix Credential backend.
 *
 * SERVER ONLY. Nothing here may be imported into a client component: the
 * session token this returns is the customer's credential for their own
 * records, and the whole point of proxying through route handlers is that it
 * never reaches browser JavaScript.
 *
 * Calling the backend from the server also sidesteps CORS entirely — a
 * server-to-server fetch is not subject to the browser's origin checks, so
 * shipping this does not require CORS_ORIGINS on the Code Engine app to be
 * updated first.
 */

const API_BASE =
  process.env.VERIX_API_BASE ??
  "https://verix-api.2di98upecmbh.us-south.codeengine.appdomain.cloud";

/* ─── Types ─── */

/** Shape returned by the backend's /login-face. */
export type LoginFaceResponse =
  | {
      identified: true;
      customer_id: number;
      name: string;
      email: string;
      similarity: number;
      security_gap: number | null;
      threshold: number;
      session_token: string;
    }
  | {
      identified: false;
      reason: "no_match" | "ambiguous";
      similarity?: number;
      threshold?: number;
    };

export type Transaction = {
  id: number;
  amount_cents: number;
  currency: string;
  status: string;
  created_at: string | null;
  similarity_score: number | null;
  venue_id: string | null;
};

export type ApiResult<T> = { ok: true; data: T } | { ok: false; error: string };

/* ─── Helpers ─── */

const TIMEOUT_MS = 30_000; // recognition loads models; 30s is not generous

async function withTimeout(
  input: string,
  init: RequestInit
): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    return await fetch(input, { ...init, signal: controller.signal, cache: "no-store" });
  } finally {
    clearTimeout(timer);
  }
}

/* ─── Calls ─── */

/**
 * Identify a face and, on a match, receive the customer session token.
 *
 * Takes every frame the challenge capture produced but currently forwards ONE
 * to the backend, because /login-face accepts a single `photo`. The frames are
 * plumbed through as an array deliberately: the hardened multi-frame endpoint
 * (/web/login-face, with PAD enforced across frames) is the reason this capture
 * is multi-frame at all, and when it lands only this function changes.
 *
 * See ACCOUNT_LOGIN.md — until that endpoint exists, the server cannot tell a
 * live capture from a still photograph, whatever the client did.
 */
export async function loginFace(frames: Blob[]): Promise<ApiResult<LoginFaceResponse>> {
  if (frames.length === 0) return { ok: false, error: "No frames captured." };

  // The last frame is the one taken after the head-turn prompt completes, so it
  // is the most likely to be a settled, forward-facing pose.
  const frame = frames[frames.length - 1];

  const body = new FormData();
  body.append("photo", frame, "capture.jpg");

  try {
    const res = await withTimeout(`${API_BASE}/login-face`, { method: "POST", body });

    if (res.status === 429) {
      return { ok: false, error: "Too many attempts. Please wait a moment and try again." };
    }
    if (!res.ok) {
      console.error("[verix] /login-face returned", res.status);
      return { ok: false, error: "Sign-in is temporarily unavailable. Please try again." };
    }
    return { ok: true, data: (await res.json()) as LoginFaceResponse };
  } catch (err) {
    console.error("[verix] /login-face failed:", err);
    return { ok: false, error: "Could not reach Verix. Please try again." };
  }
}

/** A customer's own transactions. Requires their session token. */
export async function getMyTransactions(
  customerId: number,
  token: string,
  limit = 20
): Promise<ApiResult<Transaction[]>> {
  try {
    const res = await withTimeout(
      `${API_BASE}/me/${customerId}/transactions?limit=${limit}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    // 401 here means the token expired or was revoked — the caller signs the
    // user out rather than rendering an empty history, which would read as
    // "you have no transactions" when the truth is "we could not ask".
    if (res.status === 401) return { ok: false, error: "SESSION_EXPIRED" };
    if (!res.ok) {
      console.error("[verix] /me/transactions returned", res.status);
      return { ok: false, error: "Could not load your activity." };
    }
    return { ok: true, data: (await res.json()) as Transaction[] };
  } catch (err) {
    console.error("[verix] /me/transactions failed:", err);
    return { ok: false, error: "Could not load your activity." };
  }
}
