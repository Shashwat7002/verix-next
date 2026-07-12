import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// DELETE THIS FILE to restore the full site.
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Already on the coming-soon page — let it through
  if (pathname === "/coming-soon") return NextResponse.next();

  // Rewrite internally so the URL in the browser doesn't change
  const url = request.nextUrl.clone();
  url.pathname = "/coming-soon";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    // Match all routes except Next.js internals and static assets
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)).*)",
  ],
};
