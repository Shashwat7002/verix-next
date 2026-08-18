/**
 * POST /api/auth/logout — clear the session cookie.
 *
 * Local only: it drops the browser's copy of the token but does not revoke it
 * backend-side. The backend has revocation (every customer token carries a jti
 * and decode_token consults the blacklist), so a real "sign out everywhere"
 * is a small follow-up rather than a redesign. See ACCOUNT_LOGIN.md.
 */
import { NextResponse } from "next/server";
import { clearSession } from "@/lib/session";

export async function POST() {
  await clearSession();
  return NextResponse.json({ ok: true });
}
