import type { Metadata } from "next";
import { redirect } from "next/navigation";
import FaceCapture from "@/components/account/FaceCapture";
import { getSession } from "@/lib/session";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your Verix account with your face.",
  robots: { index: false, follow: false },
};

/* Reads a cookie, so it must render per-request rather than at build time. */
export const dynamic = "force-dynamic";

export default async function LoginPage() {
  if (await getSession()) redirect("/account");

  return (
    <main className="account-shell">
      <header className="account-head">
        <h1>Sign in</h1>
        <p className="account-sub">
          Your face is your credential. Look at the camera and follow the prompt.
        </p>
      </header>

      <FaceCapture />

      <p className="form-fine">
        Not enrolled yet? Verix enrolment happens in person at a kiosk —{" "}
        <a href="/consumers" className="form-fine-link">find out how it works</a>.
      </p>
    </main>
  );
}
