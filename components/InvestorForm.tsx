"use client";

import { useState, useTransition } from "react";
import { submitInvestor } from "@/app/actions/investor";

export default function InvestorForm() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus]   = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isPending) return;
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const result = await submitInvestor(formData);
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
        <h3>Request received.</h3>
        <p>
          A member of the Verix founding team will be in touch
          to schedule a briefing.
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
      aria-label="Request an investor briefing"
    >
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="iv-name">Your full name</label>
          <input
            id="iv-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Smith"
            disabled={isPending}
          />
        </div>

        <div className="form-field">
          <label htmlFor="iv-email">Work email</label>
          <input
            id="iv-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@sequoia.com"
            disabled={isPending}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="iv-organization">Fund or organization</label>
          <input
            id="iv-organization"
            name="organization"
            type="text"
            required
            autoComplete="organization"
            placeholder="Sequoia Capital"
            disabled={isPending}
          />
        </div>

        <div className="form-field">
          <label htmlFor="iv-role">Your role</label>
          <input
            id="iv-role"
            name="role"
            type="text"
            required
            autoComplete="organization-title"
            placeholder="Partner, Principal, Corp Dev…"
            disabled={isPending}
          />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="iv-inquiry">Nature of inquiry</label>
        <select
          id="iv-inquiry"
          name="inquiryType"
          required
          disabled={isPending}
          defaultValue=""
        >
          <option value="" disabled>Select one…</option>
          <option value="Equity Investment">Equity Investment</option>
          <option value="Strategic Partnership">Strategic Partnership</option>
          <option value="Distribution / Channel">Distribution / Channel</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="iv-message">What would you like to discuss?</label>
        <textarea
          id="iv-message"
          name="message"
          required
          rows={4}
          placeholder="Investment thesis alignment, portfolio fit, partnership structure, data room access — anything that helps us prepare a relevant briefing."
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
        {isPending ? "Sending…" : "Request a briefing"}
      </button>

      <p className="form-fine">
        All inquiries are treated in strict confidence. Your details are handled
        in accordance with our{" "}
        <a href="/privacy" className="form-fine-link">Privacy Policy</a>.
      </p>
    </form>
  );
}
