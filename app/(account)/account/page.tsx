import type { Metadata } from "next";
import { redirect } from "next/navigation";
import SignOutButton from "@/components/account/SignOutButton";
import { getSession } from "@/lib/session";
import { getMyTransactions } from "@/lib/verix";

export const metadata: Metadata = {
  title: "Your account",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

function money(cents: number, currency: string) {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency.toUpperCase(),
    }).format(cents / 100);
  } catch {
    // An unrecognised currency code must not take the page down over formatting.
    return `${(cents / 100).toFixed(2)} ${currency.toUpperCase()}`;
  }
}

export default async function AccountPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  const result = await getMyTransactions(session.customerId, session.token);

  // An expired or revoked token means the cookie outlived the credential.
  // Send them back to sign in rather than rendering an empty activity list,
  // which would claim they have no transactions when we simply could not ask.
  if (!result.ok && result.error === "SESSION_EXPIRED") redirect("/login");

  const transactions = result.ok ? result.data : [];

  return (
    <main className="account-shell">
      <header className="account-head">
        <h1>Your account</h1>
        <p className="account-sub">Signed in as {session.name}</p>
      </header>

      <section className="account-card" aria-labelledby="profile-h">
        <h2 id="profile-h">Profile</h2>
        <dl className="account-dl">
          <div>
            <dt>Name</dt>
            <dd>{session.name}</dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>{session.email}</dd>
          </div>
          <div>
            <dt>Customer ID</dt>
            <dd className="mono">{session.customerId}</dd>
          </div>
        </dl>
      </section>

      <section className="account-card" aria-labelledby="activity-h">
        <h2 id="activity-h">Recent activity</h2>

        {!result.ok && (
          <p className="form-error" role="alert">
            {result.error}
          </p>
        )}

        {result.ok && transactions.length === 0 && (
          <p className="account-empty">No transactions yet.</p>
        )}

        {transactions.length > 0 && (
          <ul className="account-txns">
            {transactions.map((t) => (
              <li key={t.id}>
                <span className="txn-amount">{money(t.amount_cents, t.currency)}</span>
                <span className="txn-meta">
                  {t.created_at
                    ? new Date(t.created_at).toLocaleString("en-US", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })
                    : "—"}
                  {t.venue_id ? ` · ${t.venue_id}` : ""}
                </span>
                <span className="txn-status" data-status={t.status}>
                  {t.status}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <SignOutButton />
    </main>
  );
}
