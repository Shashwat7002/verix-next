import type { Metadata } from "next";
import Link from "next/link";

/* ─── SEO ─── */
export const metadata: Metadata = {
  title: "Partners & Investors — Verix",
  description:
    "Verix is the biometric infrastructure layer replacing card credentials at the physical point of sale. $620B market. $35B problem. Active pilots. Seeking strategic partners.",
  alternates: { canonical: "/partners" },
  openGraph: {
    url: "/partners",
    title: "Partners & Investors — Verix",
    description:
      "The infrastructure replacing card payments at the POS. $620B market by 2030. Strategic partnership and investment inquiries welcome.",
  },
};

/* ─── JSON-LD ─── */
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://verix.example/partners",
  name: "Partners & Investors — Verix",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".partners-hero h1", ".partners-lede"],
  },
};

/* ─── Data ─── */
const marketNumbers = [
  {
    num: "$620",
    sup: "B",
    label: "Projected biometric payments market by 2030",
    delay: "0s",
  },
  {
    num: "$35",
    sup: "B",
    label: "Annual global card fraud losses — a structural problem, not a cyclical one",
    delay: ".08s",
  },
  {
    num: "50",
    sup: "yrs",
    label: "The card infrastructure has not fundamentally changed in half a century",
    delay: ".16s",
  },
];

const bizModel = [
  {
    num: "0.6",
    sup: "%",
    label: "Per-transaction fee — versus ~3% standard card interchange",
    delay: "0s",
  },
  {
    num: "40",
    sup: "%",
    label: "Revenue share of verified fraud savings returned to the operator partner",
    delay: ".09s",
  },
  {
    num: "$0",
    sup: "",
    label: "Implementation fees during the 90-day pilot — zero barrier to first deployment",
    delay: ".18s",
  },
];

const thesisPoints = [
  "The card is the attack surface. Remove it, and both fraud vectors — stolen-card and chargeback — collapse simultaneously.",
  "Biometric infrastructure is not a consumer app. It is a protocol layer — closer to a payment network than a SaaS product.",
  "Edge-first architecture means raw biometrics never leave the terminal. Privacy compliance is structural, not a policy.",
  "Verix injects into existing hardware (Ingenico, Verifone) via software only — no hardware rip-and-replace barrier to adoption.",
];

export default function PartnersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* ─── Hero ─── */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="container">
          <div style={{ maxWidth: "860px" }}>
            <p className="eyebrow reveal" style={{ "--rd": "0s" } as React.CSSProperties}>
              — Investors & Strategic Partners
            </p>
            <h1 className="display-1 reveal partners-hero" style={{ "--rd": ".07s" } as React.CSSProperties}>
              The infrastructure<br />replacing card payments.
            </h1>
            <p className="body-1 hero-lede reveal partners-lede" style={{ "--rd": ".14s" } as React.CSSProperties}>
              Verix is not a card replacement app. It is the credential layer that makes the
              card obsolete at the physical point of sale — biometric verification tied
              directly to a payment token, processed in under two seconds, with zero stored
              card data on the merchant side.
            </p>
            <div className="hero-cta reveal" style={{ "--rd": ".21s" } as React.CSSProperties}>
              <Link className="btn btn-violet" href="/#pricing">Request a briefing</Link>
              <Link className="btn btn-outline" href="/team">Meet the team</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Market numbers ─── */}
      <section className="section">
        <div className="container">
          <header className="section-head" data-sr="">
            <p className="eyebrow">— Market opportunity</p>
            <h2 className="display-2">A $620B market built on broken infrastructure.</h2>
            <p className="body-1 section-sub">
              Card payments have processed trillions of dollars on a credential designed
              in the 1960s. The 16-digit card number is a shared secret — and shared
              secrets get stolen. Verix eliminates the credential, not just the fraud.
            </p>
          </header>

          <div className="market-grid">
            {marketNumbers.map((m) => (
              <div
                key={m.label}
                className="market-card"
                data-sr=""
                style={{ "--rd": m.delay } as React.CSSProperties}
              >
                <div className="market-num">
                  {m.num}<sup>{m.sup}</sup>
                </div>
                <p className="market-label">{m.label}</p>
              </div>
            ))}
          </div>

          {/* Investment thesis */}
          <div className="feature-grid" style={{ marginTop: "0" }}>
            {thesisPoints.map((point, i) => (
              <div
                key={i}
                className="feature-card"
                data-sr=""
                style={{ "--rd": `${i * 0.07}s` } as React.CSSProperties}
              >
                <span className="feature-index mono">0{i + 1}</span>
                <p className="body-1" style={{ lineHeight: "1.6" }}>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Traction ─── */}
      <section className="section" style={{ background: "var(--ghost)" }}>
        <div className="container">
          <header className="section-head" data-sr="">
            <p className="eyebrow">— Active deployment</p>
            <h2 className="display-2">Early traction at scale.</h2>
            <p className="body-1 section-sub">
              Verix is not a prototype. The system has been benchmarked under real commercial
              load conditions and is entering structured deployment with enterprise partners
              across hospitality and retail.
            </p>
          </header>

          <div className="traction-grid">
            {/* Casino pilot */}
            <div className="traction-card" data-sr="left">
              <div className="traction-tag">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor" aria-hidden="true">
                  <circle cx="4" cy="4" r="4" />
                </svg>
                Flagship Pilot
              </div>
              <h3 className="traction-title">Las Vegas casino & resort — 90-day deployment</h3>
              <p className="traction-body">
                Structured pilot across casino floor bars, hotel reception, signature dining, and
                on-site retail. Full identity-native payment integration across four distinct
                revenue channels under one guest identity — enrolled once at check-in or via the
                existing loyalty app.
              </p>
              <div className="traction-stats">
                <div>
                  <p className="traction-stat-num">4</p>
                  <p className="traction-stat-label">Revenue channels</p>
                </div>
                <div>
                  <p className="traction-stat-num">3,600<span style={{ fontSize: "0.65em", color: "var(--slate)" }}>+</span></p>
                  <p className="traction-stat-label">Target txns / day</p>
                </div>
                <div>
                  <p className="traction-stat-num">0.6%</p>
                  <p className="traction-stat-label">Processing fee</p>
                </div>
              </div>
            </div>

            {/* SE Asia pipeline */}
            <div className="traction-card" data-sr="right">
              <div className="traction-tag">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor" aria-hidden="true">
                  <circle cx="4" cy="4" r="4" />
                </svg>
                Enterprise Pipeline
              </div>
              <h3 className="traction-title">Southeast Asia retail conglomerate — software-only rollout</h3>
              <p className="traction-body">
                Active enterprise discussions for a software-only architecture deployment across a
                major Southeast Asian retail group spanning global brands across fashion, food &
                beverage, and sport. Zero hardware replacement required — Verix injects via the
                Terminal API into existing infrastructure.
              </p>
              <div className="traction-stats">
                <div>
                  <p className="traction-stat-num">2,500<span style={{ fontSize: "0.65em", color: "var(--slate)" }}>+</span></p>
                  <p className="traction-stat-label">Physical locations</p>
                </div>
                <div>
                  <p className="traction-stat-num">5M</p>
                  <p className="traction-stat-label">Target enrollments</p>
                </div>
                <div>
                  <p className="traction-stat-num">Software</p>
                  <p className="traction-stat-label">Only deployment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Business model ─── */}
      <section className="section section-dev">
        <div className="container">
          <header className="section-head" data-sr="">
            <p className="eyebrow eyebrow-on-dark">— Revenue model</p>
            <h2 className="display-2 on-dark" style={{ marginTop: "18px" }}>
              Transaction-level revenue. At every checkout.
            </h2>
            <p className="on-dark-muted body-1">
              Verix charges per verified transaction — a model that scales linearly with
              merchant volume and creates no adoption ceiling. The pilot commercial
              framework is designed to remove every barrier to a first deployment.
            </p>
          </header>

          <div className="biz-grid">
            {bizModel.map((b) => (
              <div
                key={b.label}
                className="biz-card"
                data-sr=""
                style={{ "--rd": b.delay } as React.CSSProperties}
              >
                <div className="biz-num">
                  {b.num}<sup>{b.sup}</sup>
                </div>
                <p className="biz-label">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Team callout ─── */}
      <section className="section">
        <div className="container">
          <div
            data-sr=""
            style={{
              background: "var(--white)",
              border: "1px solid var(--hairline)",
              borderRadius: "var(--radius)",
              padding: "clamp(32px, 4vw, 56px)",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "32px",
              alignItems: "center",
            } as React.CSSProperties}
          >
            <div>
              <p className="eyebrow" style={{ marginBottom: "16px" }}>— The founding team</p>
              <h2 className="display-2" style={{ fontSize: "clamp(28px, 3vw, 40px)" }}>
                Built by operators and engineers.
              </h2>
              <p className="body-1" style={{ marginTop: "16px", maxWidth: "52ch" }}>
                Aryan Bhardwaj (CEO), Marcelo Long (CMO), Baibhav Das (COO), Anirudh Jaiswal
                (CTO), and Joshua Carson (CSO) — five specialists who saw the same structural
                problem from different disciplines and built the only credential that solves it
                at the root.
              </p>
            </div>
            <Link className="btn btn-ink" href="/team" style={{ whiteSpace: "nowrap" }}>
              Meet the team
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section section-cta">
        <div className="container cta-inner">
          <p className="eyebrow">— Get in touch</p>
          <h2 className="display-2">Interested in partnering?</h2>
          <p className="body-1 section-sub centered">
            We are building strategic relationships with fintech investors, payment
            network partners, and enterprise distribution channels. If the thesis resonates,
            let&apos;s talk.
          </p>
          <div className="hero-cta centered">
            <Link className="btn btn-violet" href="/#pricing">Request a briefing</Link>
            <Link className="btn btn-outline" href="/merchants">For operators</Link>
          </div>
        </div>
      </section>
    </>
  );
}
