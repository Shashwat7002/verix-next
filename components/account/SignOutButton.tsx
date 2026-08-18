"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [busy, setBusy] = useState(false);

  function signOut() {
    setBusy(true);
    startTransition(async () => {
      await fetch("/api/auth/logout", { method: "POST" });
      router.replace("/login");
      router.refresh();
    });
  }

  return (
    <button
      type="button"
      className="btn btn-outline account-signout"
      onClick={signOut}
      disabled={busy || isPending}
    >
      {busy || isPending ? "Signing out…" : "Sign out"}
    </button>
  );
}
