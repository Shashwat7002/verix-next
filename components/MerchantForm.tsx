"use client";

import { useState, useTransition } from "react";
import { submitMerchant } from "@/app/actions/merchant";

export default function MerchantForm() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus]   = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isPending) return;
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const result = await submitMerchant(formData);
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
        <h3>We&apos;ll be in touch.</h3>
        <p>
          Someone from the Verix team will review your submission and
          reach out to discuss your estate.
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
      aria-label="Contact the Verix sales team"
    >
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="mc-name">Your full name</label>
          <input
            id="mc-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Smith"
            disabled={isPending}
          />
        </div>

        <div className="form-field">
          <label htmlFor="mc-email">Work email</label>
          <input
            id="mc-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@yourcompany.com"
            disabled={isPending}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="mc-role">Your role</label>
          <input
            id="mc-role"
            name="role"
            type="text"
            required
            autoComplete="organization-title"
            placeholder="Head of Payments, CFO, CTO…"
            disabled={isPending}
          />
        </div>

        <div className="form-field">
          <label htmlFor="mc-company">Company name</label>
          <input
            id="mc-company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            placeholder="Acme Retail Group"
            disabled={isPending}
          />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="mc-message">Tell us about your setup</label>
        <textarea
          id="mc-message"
          name="message"
          required
          rows={4}
          placeholder="How many locations, which terminals, monthly transaction volume, biggest pain point — anything that helps us tailor the pilot to your estate."
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
        {isPending ? "Sending…" : "Request a pilot"}
      </button>

      <p className="form-fine">
        No commitment required. A member of the Verix team will be in touch
        to discuss your estate.
      </p>
    </form>
  );
}
