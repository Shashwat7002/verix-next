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

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="wordmark wordmark-footer" href="/" aria-label="Verix home">
            <VMark />
            <span className="wordmark-rule" aria-hidden="true" />
            <span className="wordmark-text">VERIX</span>
          </Link>
          <p className="body-2 footer-tagline">
            Biometric payment credentials for physical commerce.
          </p>
        </div>

        <nav className="footer-col" aria-label="Product">
          <p className="caps-label">Product</p>
          <Link href="/#how">How it works</Link>
          <Link href="/#industries">Industries</Link>
          <Link href="/#faq">FAQ</Link>
          <Link href="/merchants#contact">Pricing</Link>
        </nav>

        <nav className="footer-col" aria-label="Use Cases">
          <p className="caps-label">Use Cases</p>
          <Link href="/consumers">For Consumers</Link>
          <Link href="/merchants">For Merchants</Link>
          <Link href="/partners">For Investors</Link>
          <Link href="/team">Team</Link>
        </nav>

        <nav className="footer-col" aria-label="Company">
          <p className="caps-label">Company</p>
          <Link href="/merchants#contact">Talk to sales</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </nav>
      </div>

      <div className="container footer-meta mono">
        <span>VERIX · BIOMETRIC PAYMENTS · © {new Date().getFullYear()}</span>
        <span className="footer-legal-links">
          <Link href="/privacy" className="footer-legal-link">Privacy Policy</Link>
          <span className="muted" aria-hidden="true">·</span>
          <Link href="/terms" className="footer-legal-link">Terms of Service</Link>
        </span>
      </div>
    </footer>
  );
}
