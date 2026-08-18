# Account login — what shipped, and what is deliberately missing

Customer-facing sign-in for verixcredential.com. Enrolled customers sign in with
their face and see their profile and recent activity.

## Shape

```
browser ──frames──▶ /api/auth/face-login ──▶ Verix backend /login-face
                            │                        │
                            │                   session token
                            ▼                        │
                    httpOnly cookie ◀────────────────┘
```

The browser never holds the session token, never learns the backend's address,
and never calls it directly. Three consequences worth keeping:

- **No CORS grant needed.** Server-to-server fetches are not subject to the
  browser's origin checks, so this shipped without touching `CORS_ORIGINS` on
  the Code Engine app.
- **The token is not reachable from JavaScript.** It carries payment history,
  an enrolment photograph and consent state. `localStorage` is readable by any
  script that gets into the page; the mobile app keeps the same token in memory
  only, and httpOnly is the web equivalent of that decision.
- **The backend can move** without a client change.

Cookie lifetime (24h) is kept in step with the backend's
`customer_session_hours`. A cookie outliving its token produces a signed-in
shell whose every request 401s, which reads as breakage rather than expiry.

## What the capture does and does not prove

`FaceCapture` has no file input and no drag-and-drop. Sign-in requires an
actual camera and a short head-turn sequence.

**That raises the effort of an attack. It does not verify anything.** The frames
are posted exactly as an uploaded file would be; devtools or a virtual camera
produce an identical request. Client-side capture is a UX control, not a
security control.

Liveness can only be established server-side, and only across multiple frames —
the decisive planarity test is impossible on a single image, as
`config.py` already notes. So today, **a still photograph of an enrolled
customer would sign in as them.**

Bounded for now by: `PAYMENTS_ENABLED=false`, a gallery of a handful of test
subjects, and `/login-face`'s 60/minute limit. **All three stop being true
before real customers.**

## The gap this is built to close

`lib/verix.ts:loginFace` accepts an array of frames and currently forwards one,
because the backend's `/login-face` takes a single `photo`. The capture is a
sequence anyway, because the fix needs it.

**`POST /web/login-face`** — the hardened endpoint. Multi-frame, PAD enforced
regardless of the global `pad_enforce` flag, `challenge`-mode motion required.
When it lands, only `loginFace` changes.

Two backend prerequisites, both contained:

1. `pad.analyse()` currently **fails open** — any exception returns
   `is_live=True`. Fine while observe-only, a silent bypass once enforcing.
   Must fail closed on this path.
2. The PAD appearance anchors are **unfitted**, so single-frame PAD is
   "near-inert by construction". Fitting them needs real capture data.

## Deferred: email one-time-code fallback

**Not built.** Requested to be deferred; recorded here so it is not lost.

Needed because a device with no camera currently cannot sign in at all — the UI
says so rather than pretending otherwise.

What it takes:

| Piece | Detail |
|---|---|
| Backend | `POST /auth/customer/otp/request` + `/verify` |
| Migration | `0016` — `customer_id`, `code_hash`, `expires_at`, `attempts`, `consumed_at` |
| Rules | 10-min TTL, single use, max 5 attempts, constant-time compare, strict rate limit |
| Email | Resend — free tier 3,000/mo, 100/day |
| Domain | Sender must pass SPF/DKIM/DMARC, or codes land in spam. An OTP in spam is a broken login, not a degraded one. |

Note it is **possession of the inbox** that is the factor. The existing
`/login-email` proves only *knowledge* of an address, is disabled by default,
and its own docstring says in capitals that it is not authentication. It is not
the fallback and must not become it.

## Also not built

- **Sign-out is local only.** It drops the cookie without revoking the token
  backend-side. Every customer token carries a `jti` and `decode_token`
  consults the blacklist, so "sign out everywhere" is a small follow-up.
- **Profile is what login returned** — name, email, id. A real profile page
  wants enrolment state and consent scopes: `GET /me/{customer_id}`.
- **No consent controls.** `PATCH /me/{customer_id}/consent` for per-scope
  withdrawal is a pre-deploy blocker in the backend's own audit (B.28), and
  this page is where it belongs: granular consent that can be given but not
  withdrawn is the shape regulators treat as a dark pattern.

## Configuration

| Variable | Default |
|---|---|
| `VERIX_API_BASE` | the production Code Engine URL (server-only — no `NEXT_PUBLIC_`) |

Add it in Vercel → Project → Settings → Environment Variables to point at
`verix-dev` instead.
