import type { Metadata } from "next";
import Link from "next/link";

/* ─── SEO ─── */
export const metadata: Metadata = {
  title: "Verix for Merchants — Cut Card Fees. Eliminate Chargebacks.",
  description:
    "Verix processes at 0.6% — versus 3–5% card interchange. Software-only on your existing Ingenico and Verifone terminals. Zero chargebacks. 90-day pilot with no implementation fees.",
  alternates: { canonical: "/merchants" },
  openGraph: {
    url: "/merchants",
    title: "Verix for Merchants — Cut Card Fees. Eliminate Chargebacks.",
    description:
      "0.6% processing. Zero chargebacks. No hardware rip-and-replace. Start a 90-day pilot with zero implementation fees.",
  },
};

/* ─── JSON-LD ─── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need to replace my existing POS terminals to deploy Verix?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Verix deploys as a software-only injection on Ingenico and Verifone terminals via the Terminal API layer. No hardware replacement is required. Existing acquiring relationships are preserved.",
      },
    },
    {
      "@type": "Question",
      name: "How does Verix eliminate chargeback fraud?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every Verix transaction is authorised by a biometric match — proof that the account holder was physically present and consented. This biometric proof record is attached to every settlement, making 'I didn't make this purchase' disputes unwinnable.",
      },
    },
    {
      "@type": "Question",
      name: "What compliance frameworks does Verix satisfy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Verix's tokenisation architecture supports PCI DSS scope reduction. The enrollment flow natively satisfies BIPA consent requirements. Data minimisation and right-to-deletion workflows are built to meet GDPR and UK GDPR standards.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a Verix deployment take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard 90-day pilot runs from infrastructure assessment (weeks 1–2) through SDK integration and kiosk rollout (month 2) to a live guest-facing deployment by day 90. Implementation fees are waived for the initial pilot cycle.",
      },
    },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://verix.example/merchants",
  name: "Verix for Merchants — Cut Card Fees. Eliminate Chargebacks.",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".merchants-hero h1", ".merchants-lede"],
  },
};

/* ─── Data ─── */
const deploySteps = [
  {
    phase: "Weeks 1–2",
    title: "Infrastructure audit",
    desc: "On-site assessment of existing POS terminals, camera infrastructure, and network topology.",
  },
  {
    phase: "Weeks 3–4",
    title: "Integration mapping",
    desc: "Engineering scopes the SDK injection into your POS platform and finalises the commercial agreement.",
  },
  {
    phase: "Month 2",
    title: "SDK deployment",
    desc: "Terminal API injection, enrollment kiosk rollout, and staff training across pilot locations.",
  },
  {
    phase: "Day 90",
    title: "Live launch",
    desc: "Full guest-facing identity-native payment deployment with real-time fraud scoring active.",
  },
];

const integrations = [
  { platform: "Ingenico Terminals",    method: "Terminal API Layer",   status: "live",    label: "Live" },
  { platform: "Verifone Terminals",    method: "Terminal API Layer",   status: "live",    label: "Live" },
  { platform: "Stripe",               method: "Payment Intent API",    status: "sandbox", label: "Sandbox Complete" },
  { platform: "Oracle Retail Xstore", method: "Java SDK Plugin",       status: "dev",     label: "In Development" },
  { platform: "SAP Customer Checkout",method: "REST API Connector",    status: "planned", label: "Coming Q3 2026" },
  { platform: "PAX Technology",       method: "SDK Core Integration",  status: "planned", label: "Planned" },
];

const pilotPerks = [
  { strong: "Zero implementation fees", rest: " for the full 90-day pilot cycle." },
  { strong: "0.6% per transaction", rest: " — versus ~3% standard card interchange." },
  { strong: "40% revenue share", rest: " of verified fraud savings against your historical baseline." },
  { strong: "No hardware replacement", rest: " — software-only on your existing terminals." },
  { strong: "Biometric proof on every transaction", rest: " — the record that defeats every friendly fraud dispute." },
];

const faqItems = faqSchema.mainEntity;

export default function MerchantsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* ─── Hero ─── */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="container">
          <div style={{ maxWidth: "780px" }}>
            <p className="eyebrow reveal" style={{ "--rd": "0s" } as React.CSSProperties}>
              — For Operators
            </p>
            <h1 className="display-1 reveal merchants-hero" style={{ "--rd": ".07s" } as React.CSSProperties}>
              Cut card fees by 80%.<br />
              <span className="accent">Zero chargebacks.</span>
            </h1>
            <p className="body-1 hero-lede reveal merchants-lede" style={{ "--rd": ".14s" } as React.CSSProperties}>
              Verix processes at 0.6% — software-only, on your existing Ingenico and
              Verifone terminals. Every transaction carries biometric proof of consent.
              Chargebacks stop at the source.
            </p>
            <div className="hero-cta reveal" style={{ "--rd": ".21s" } as React.CSSProperties}>
              <Link className="btn btn-violet" href="/#pricing">Start a pilot</Link>
              <Link className="btn btn-outline" href="#integrations">See integrations</Link>
            </div>
          </div>

          {/* Value bar */}
          <div className="value-bar reveal" data-sr="scale" style={{ "--rd": ".28s" } as React.CSSProperties}>
            <div className="value-bar-item">
              <div className="value-bar-num"><span className="accent">0.6</span>%</div>
              <p className="value-bar-label">Processing fee — vs ~3% card interchange</p>
            </div>
            <div className="value-bar-item">
              <div className="value-bar-num">$0</div>
              <p className="value-bar-label">Chargebacks — biometric proof blocks disputes</p>
            </div>
            <div className="value-bar-item">
              <div className="value-bar-num">{"<"}2<span style={{ fontSize: "0.55em", color: "var(--slate)", marginLeft: "4px" }}>sec</span></div>
              <p className="value-bar-label">End-to-end checkout cycle</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Strip ─── */}
      <section className="strip" aria-label="Supported verticals">
        <div className="container">
          <ul className="strip-list">
            <li>Retail Chains</li>
            <li>Gaming & Casinos</li>
            <li>Restaurants</li>
            <li>Hotels & Hospitality</li>
            <li>Healthcare</li>
            <li>Stadiums</li>
          </ul>
        </div>
      </section>

      {/* ─── Why Verix ─── */}
      <section className="section">
        <div className="container">
          <header className="section-head" data-sr="">
            <p className="eyebrow">— The operator case</p>
            <h2 className="display-2">Card infrastructure was never built for you.</h2>
            <p className="body-1 section-sub">
              Merchants absorb 3–5% interchange on every transaction, bear the liability
              for card-not-present fraud, and spend thousands disputing chargebacks that
              the card networks systematically side against them. Verix flips all three.
            </p>
          </header>

          <div className="feature-grid">
            {[
              { n: "01", h: "80% lower processing cost", b: "At 0.6% per transaction, a merchant processing $1M monthly saves roughly $24,000 against a standard 3% interchange rate." },
              { n: "02", h: "Chargebacks eliminated, not disputed.", b: "Every Verix transaction is tied to a biometric match. Friendly fraud — 'I didn't make this charge' — becomes legally unwinnable when you have biometric proof of presence." },
              { n: "03", h: "No hardware replacement.", b: "Verix is a software-only injection into your existing Ingenico or Verifone terminals. Your acquiring relationships, your network. Just lower fees and better proof." },
              { n: "04", h: "Compliance overhead reduced.", b: "Verix tokenisation keeps your core infrastructure out of PCI cardholder data scope. BIPA, GDPR, and PCI DSS requirements are satisfied at the architecture level." },
            ].map((f, i) => (
              <div key={f.n} className="feature-card" data-sr="" style={{ "--rd": `${i * 0.07}s` } as React.CSSProperties}>
                <span className="feature-index mono">{f.n}</span>
                <h3 className="heading-1">{f.h}</h3>
                <p className="body-2">{f.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Deployment timeline ─── */}
      <section className="section" style={{ background: "var(--ghost)" }}>
        <div className="container">
          <header className="section-head" data-sr="">
            <p className="eyebrow">— Deployment</p>
            <h2 className="display-2">Live in 90 days.</h2>
            <p className="body-1 section-sub">
              Verix fits into your existing infrastructure. The deployment timeline is
              fixed — assessment, integration, training, launch — with implementation
              fees entirely waived for the pilot cycle.
            </p>
          </header>
          <div className="deploy-grid" data-sr="">
            {deploySteps.map((step) => (
              <div key={step.phase} className="deploy-step">
                <p className="deploy-phase">{step.phase}</p>
                <p className="deploy-title">{step.title}</p>
                <p className="deploy-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Integration table ─── */}
      <section className="section" id="integrations">
        <div className="container">
          <header className="section-head" data-sr="">
            <p className="eyebrow">— Integrations</p>
            <h2 className="display-2">Works with your stack.</h2>
            <p className="body-1 section-sub">
              Verix deploys as a software-only layer on top of the terminal hardware and
              POS platforms already in your estate.
            </p>
          </header>
          <table className="integration-table" data-sr="">
            <thead>
              <tr>
                <th>Platform</th>
                <th>Integration method</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {integrations.map((row) => (
                <tr key={row.platform}>
                  <td>{row.platform}</td>
                  <td style={{ color: "var(--slate)" }}>{row.method}</td>
                  <td>
                    <span className={`status-badge status-${row.status}`}>
                      {row.label}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Compliance badges */}
          <div style={{ marginTop: "40px" }} data-sr="">
            <p className="eyebrow" style={{ marginBottom: "20px" }}>— Compliance</p>
            <div className="badge-row">
              {[
                "PCI DSS Scope Reduction",
                "BIPA Compliant",
                "GDPR Aligned",
                "UK GDPR",
                "Indonesia UU PDP",
                "AES-256 at Rest",
                "TLS 1.3 in Transit",
                "SOC 2 Type II (Underway)",
              ].map((b) => (
                <span key={b} className="compliance-badge light">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Pilot card ─── */}
      <section className="section" style={{ paddingTop: "0" }}>
        <div className="container">
          <div className="pilot-card" data-sr="scale">
            <div>
              <p className="eyebrow eyebrow-on-dark">— 90-day pilot</p>
              <h2
                className="display-2 on-dark"
                style={{ marginTop: "18px", fontSize: "clamp(28px, 3.5vw, 44px)" }}
              >
                Start with zero risk.
              </h2>
              <div className="pilot-perks">
                {pilotPerks.map((p) => (
                  <div key={p.strong} className="pilot-perk">
                    <div className="perk-check">✓</div>
                    <p className="perk-text">
                      <strong>{p.strong}</strong>{p.rest}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="pilot-cta-col">
              <p className="body-1 on-dark" style={{ maxWidth: "32ch", lineHeight: "1.55" }}>
                We offer a structured 90-day pilot with implementation fees waived. The
                only variable is transaction volume — and you keep 40% of every fraud
                saving we prove against your baseline.
              </p>
              <Link className="btn btn-violet" href="/#pricing">
                Talk to the team
              </Link>
              <p className="pilot-fine">
                Pilot contracts convert to a standard SaaS + per-transaction model.
                No long-term commitment required to start.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="section" style={{ background: "var(--ghost)" }}>
        <div className="container">
          <header className="section-head" data-sr="">
            <p className="eyebrow">— Questions</p>
            <h2 className="display-2">What operators ask.</h2>
          </header>
          <div className="faq-list">
            {faqItems.map((item) => (
              <div key={item.name} className="faq-item" data-sr="fade">
                <p className="faq-q">{item.name}</p>
                <p className="faq-a">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section section-cta">
        <div className="container cta-inner">
          <p className="eyebrow">— Talk to sales</p>
          <h2 className="display-2">Ready to cut your card costs?</h2>
          <p className="body-1 section-sub centered">
            Volume-based pricing, billed by settlement. Implementation fees waived for
            the 90-day pilot. Talk to the team about your estate.
          </p>
          <div className="hero-cta centered">
            <Link className="btn btn-violet" href="/#pricing">Start a pilot</Link>
            <Link className="btn btn-outline" href="/partners">For investors</Link>
          </div>
        </div>
      </section>
    </>
  );
}
