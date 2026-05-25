"use client";

import { useState, useTransition } from "react";
import { submitWaitlist } from "@/app/actions/waitlist";

export default function WaitlistForm() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus]     = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isPending) return;
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const result = await submitWaitlist(formData);
      if (result.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(result.error);
      }
    });
  }

  /* ── Success state ── */
  if (status === "success") {
    return (
      <div className="waitlist-success" role="status" aria-live="polite">
        <div className="waitlist-check" aria-hidden="true">✓</div>
        <h3>You&apos;re on the list.</h3>
        <p>
          We&apos;ll reach out with next steps — including where to find
          your nearest Verix kiosk to complete face enrollment.
        </p>
      </div>
    );
  }

  /* ── Form ── */
  return (
    <form
      onSubmit={handleSubmit}
      className="waitlist-form"
      noValidate
      aria-label="Join the Verix waitlist"
    >
      <div className="form-field">
        <label htmlFor="wl-name">Full name</label>
        <input
          id="wl-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Jane Smith"
          disabled={isPending}
        />
      </div>

      <div className="form-field">
        <label htmlFor="wl-email">Email address</label>
        <input
          id="wl-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="jane@example.com"
          disabled={isPending}
        />
      </div>

      <div className="form-field">
        <label htmlFor="wl-phone">
          Phone number{" "}
          <span className="optional">(optional)</span>
        </label>
        <input
          id="wl-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+1 555 000 0000"
          disabled={isPending}
        />
      </div>

      {status === "error" && (
        <p className="form-error" role="alert">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        className="btn btn-violet"
        disabled={isPending}
        aria-busy={isPending}
      >
        {isPending ? "Joining…" : "Join the waitlist"}
      </button>

      <p className="form-fine">
        By submitting you agree to be contacted about your Verix enrollment.
        We&apos;ll never share your details with third parties.
      </p>
    </form>
  );
}
