"use client";

import { useState } from "react";
import Link from "next/link";

const VMark = () => (
  <svg className="vmark" viewBox="0 0 40 36" fill="none" aria-hidden="true">
    <path
      d="M5 6 L20 30 L35 6"
      stroke="currentColor"
      strokeWidth="4.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <Link className="wordmark" href="/" aria-label="Verix home">
          <VMark />
          <span className="wordmark-rule" aria-hidden="true" />
          <span className="wordmark-text">VERIX</span>
        </Link>

        <nav className="primary-nav" aria-label="Primary">
          <Link href="/#how">How it works</Link>
          <Link href="/consumers">For Consumers</Link>
          <Link href="/merchants">For Merchants</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/team">Team</Link>
        </nav>

        <div className="header-actions">
          <Link className="link-signin" href="/#signin">
            Sign in
          </Link>
          <Link className="btn btn-ink" href="/#pricing">
            Talk to sales
          </Link>
          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav
        className={`mobile-nav${open ? " open" : ""}`}
        id="mobile-nav"
        aria-label="Mobile"
      >
        <Link href="/#how" onClick={close}>How it works</Link>
        <Link href="/consumers" onClick={close}>For Consumers</Link>
        <Link href="/merchants" onClick={close}>For Merchants</Link>
        <Link href="/partners" onClick={close}>Partners</Link>
        <Link href="/team" onClick={close}>Team</Link>
        <Link href="/#signin" onClick={close}>
          Sign in
        </Link>
        <Link className="btn btn-violet" href="/#pricing" onClick={close}>
          Talk to sales
        </Link>
      </nav>
    </header>
  );
}
