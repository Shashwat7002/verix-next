/**
 * session.ts — the browser's half of the customer session.
 *
 * The backend issues a 24h JWT (purpose="customer", bound to one customer_id).
 * It is held in an httpOnly cookie and never handed to client JavaScript.
 *
 * WHY httpOnly RATHER THAN localStorage. Behind this token sits payment
 * history, an enrolment photograph and consent state. localStorage is readable
 * by any script that gets into the page, and this site loads third-party
 * analytics on the marketing routes. The mobile app keeps the same token in
 * memory only, so it dies with the session; httpOnly is the web equivalent of
 * that decision rather than a weaker version of it.
 *
 * The cookie lifetime deliberately matches the backend's customer_session_hours
 * (24h). A cookie outliving the token it carries produces a signed-in shell
 * whose every request 401s, which reads as breakage rather than as expiry.
 */
import { cookies } from "next/headers";

const COOKIE = "verix_session";
const MAX_AGE_SECONDS = 24 * 60 * 60; // keep in step with customer_session_hours

export type Session = {
  token: string;
  customerId: number;
  name: string;
  email: string;
};

/* ─── Read ─── */

/** The current session, or null. `cookies()` is async in Next 16. */
export async function getSession(): Promise<Session | null> {
  const store = await cookies();
  const raw = store.get(COOKIE)?.value;
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as Partial<Session>;
    if (
      typeof parsed.token !== "string" ||
      typeof parsed.customerId !== "number" ||
      typeof parsed.name !== "string" ||
      typeof parsed.email !== "string"
    ) {
      return null;
    }
    return parsed as Session;
  } catch {
    // A malformed cookie is treated as signed-out rather than thrown: the only
    // ways to get one are tampering or a format change, and both should land
    // the user on the login page instead of an error screen.
    return null;
  }
}

/* ─── Write ─── */

/** Set the session cookie. Route Handlers / Server Functions only. */
export async function setSession(session: Session): Promise<void> {
  const store = await cookies();
  store.set(COOKIE, JSON.stringify(session), {
    httpOnly: true,
    // Off on plain-HTTP localhost, where a Secure cookie is silently dropped.
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE_SECONDS,
  });
}

/** Clear the session cookie. Route Handlers / Server Functions only. */
export async function clearSession(): Promise<void> {
  const store = await cookies();
  store.delete(COOKIE);
}
