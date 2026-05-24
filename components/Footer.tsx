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
          <Link href="/#why">Why Verix</Link>
          <Link href="/#developers">Developers</Link>
          <Link href="/#pricing">Pricing</Link>
        </nav>

        <nav className="footer-col" aria-label="Industries">
          <p className="caps-label">Industries</p>
          <Link href="/#industries">Retail</Link>
          <Link href="/#industries">Gaming</Link>
          <Link href="/#industries">Restaurants</Link>
          <Link href="/#industries">Healthcare</Link>
        </nav>

        <nav className="footer-col" aria-label="Company">
          <p className="caps-label">Company</p>
          <Link href="/team">Team</Link>
          <Link href="/#faq">FAQ</Link>
          <Link href="/#pricing">Talk to sales</Link>
          <Link href="/#signin">Sign in</Link>
        </nav>
      </div>

      <div className="container footer-meta mono">
        <span>VERIX · BIOMETRIC PAYMENTS · © {new Date().getFullYear()}</span>
        <span className="muted">
          PLUS JAKARTA SANS · JETBRAINS MONO · DEEP VIOLET #5B47E0
        </span>
      </div>
    </footer>
  );
}
