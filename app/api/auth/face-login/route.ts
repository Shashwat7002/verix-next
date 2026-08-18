/**
 * POST /api/auth/face-login
 *
 * The capture UI posts its frames here; this handler talks to the Verix
 * backend and sets the session cookie. It exists so the browser never holds
 * the session token, never learns the backend's address, and never needs a
 * CORS grant from it.
 *
 * A Route Handler rather than a Server Action because cookies must be set on a
 * real response, and because the payload is binary frames rather than a form.
 */
import { NextResponse } from "next/server";
import { loginFace } from "@/lib/verix";
import { setSession } from "@/lib/session";

/* Frames are ~40-80KB each; five of them plus overhead. Anything materially
   larger is not our capture UI and is rejected before it reaches the backend. */
const MAX_TOTAL_BYTES = 8 * 1024 * 1024;
const MAX_FRAMES = 8;

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, error: "Malformed request." }, { status: 400 });
  }

  const frames = form
    .getAll("frames")
    .filter((f): f is File => f instanceof File && f.size > 0);

  if (frames.length === 0) {
    return NextResponse.json(
      { ok: false, error: "No frames were captured. Please try again." },
      { status: 400 }
    );
  }
  if (frames.length > MAX_FRAMES) {
    return NextResponse.json({ ok: false, error: "Too many frames." }, { status: 400 });
  }

  const total = frames.reduce((n, f) => n + f.size, 0);
  if (total > MAX_TOTAL_BYTES) {
    return NextResponse.json({ ok: false, error: "Capture too large." }, { status: 413 });
  }

  const result = await loginFace(frames);
  if (!result.ok) {
    return NextResponse.json({ ok: false, error: result.error }, { status: 502 });
  }

  const body = result.data;

  if (!body.identified) {
    // The backend distinguishes "nobody matched" from "two enrolled people were
    // too close to call". They need different advice, so they stay distinct
    // rather than collapsing into one failure — the ambiguous case is fixed by
    // retrying, the no-match case usually is not.
    const message =
      body.reason === "ambiguous"
        ? "We could not tell you apart from another enrolled customer. Please try again."
        : "We did not recognise you. Make sure your face is well lit and centred.";
    return NextResponse.json({ ok: false, reason: body.reason, error: message }, { status: 401 });
  }

  await setSession({
    token: body.session_token,
    customerId: body.customer_id,
    name: body.name,
    email: body.email,
  });

  // Deliberately returns nothing about the match — no score, no gap, no
  // threshold. Those are useful to an operator and useful to someone probing
  // the gallery, and only the first of those is standing at this page.
  return NextResponse.json({ ok: true });
}
