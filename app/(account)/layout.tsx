/**
 * Layout for the signed-in area.
 *
 * Kept as its own route group so the account pages do not inherit anything the
 * marketing site adds to its own sections, and so `noindex` and the
 * force-dynamic rendering live in one place rather than being remembered per
 * page.
 */
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false, nocache: true },
};

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return <div className="account-area">{children}</div>;
}
