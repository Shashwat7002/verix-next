import type { Metadata } from "next";
import Link from "next/link";
import MerchantForm from "@/components/MerchantForm";
import Reveal from "@/components/motion/Reveal";
import { StaggerContainer, StaggerCard, StaggerItem } from "@/components/motion/StaggerGrid";

/* ─── SEO ─── */
export const metadata: Metadata = {
  title: "Verix for Merchants — Cut Card Fees. Eliminate Chargebacks.",
  description:
    "Software-only biometric payments on your existing Ingenico and Verifone terminals. Zero chargebacks. No hardware replacement. Start a structured 90-day pilot.",
  alternates: { canonical: "/merchants" },
  openGraph: {
    url: "/merchants",
    title: "Verix for Merchants — Cut Card Fees. Eliminate Chargebacks.",
    description:
      "Zero chargebacks. No hardware rip-and-replace. Biometric payments on your existing terminals. Start a structured 90-day pilot.",
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
  { strong: "No hardware replacement", rest: " — software-only on your existing terminals." },
  { strong: "Biometric proof on every transaction", rest: " — the record that defeats every friendly fraud dispute." },
  { strong: "Structured 90-day deployment", rest: " — assessment, integration, training, and live launch." },
  { strong: "No long-term commitment", rest: " required to start a pilot." },
  { strong: "Pricing on request", rest: " — contact the team to discuss your volume and structure." },
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
              — For Merchants
            </p>
            <h1 className="display-1 reveal merchants-hero" style={{ "--rd": ".07s" } as React.CSSProperties}>
              Checkout in under<br />
              <span className="accent">two seconds.</span>
            </h1>
            <p className="body-1 hero-lede reveal merchants-lede" style={{ "--rd": ".14s" } as React.CSSProperties}>
              Verix is a software-only biometric payment layer for your existing
              Ingenico and Verifone terminals. Shoppers pay with a glance — verified
              in under 400&nbsp;ms, no card required. Eliminated chargebacks
              and competitive processing rates come with it.
            </p>
            <div className="hero-cta reveal" style={{ "--rd": ".21s" } as React.CSSProperties}>
              <Link className="btn btn-violet" href="#contact">Start a pilot</Link>
              <Link className="btn btn-outline" href="#integrations">See integrations</Link>
            </div>
          </div>

          {/* Value bar */}
          <div className="value-bar reveal" data-sr="scale" style={{ "--rd": ".28s" } as React.CSSProperties}>
            <div className="value-bar-item">
              <div className="value-bar-num"><span className="accent">0</span></div>
              <p className="value-bar-label">Card data stored on merchant systems</p>
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
          <Reveal tag="header" className="section-head">
            <p className="eyebrow">— The operator case</p>
            <h2 className="display-2">A better checkout — built into your existing stack.</h2>
            <p className="body-1 section-sub">
              Verix replaces the card with a face at the point of sale. Shoppers move
              faster, your fees drop, and the fraud and chargeback liability that card
              infrastructure puts on merchants disappears with the card itself.
            </p>
          </Reveal>

          <StaggerContainer tag="div" className="feature-grid">
            {[
              { n: "01", h: "Sub-2-second checkout.", b: "Biometric verification completes in under 400 ms. Shoppers look at the terminal and go — no card, no PIN, no phone. Lines move faster." },
              { n: "02", h: "No hardware replacement.", b: "Verix is a software-only injection into your existing Ingenico or Verifone terminals. Your acquiring relationships, your network. Nothing to rip out." },
              { n: "03", h: "Significantly lower processing cost.", b: "Verix replaces card interchange with a competitive per-transaction fee — a material difference at any meaningful volume. Contact us for pricing." },
              { n: "04", h: "Chargebacks eliminated at source.", b: "Every transaction carries biometric proof of presence and consent. Friendly fraud disputes arrive with evidence already attached." },
            ].map((f) => (
              <StaggerCard key={f.n} tag="div" className="feature-card">
                <span className="feature-index mono">{f.n}</span>
                <h3 className="heading-1">{f.h}</h3>
                <p className="body-2">{f.b}</p>
              </StaggerCard>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Deployment timeline ─── */}
      <section className="section" style={{ background: "var(--ghost)" }}>
        <div className="container">
          <Reveal tag="header" className="section-head">
            <p className="eyebrow">— Deployment</p>
            <h2 className="display-2">Live in 90 days.</h2>
            <p className="body-1 section-sub">
              Verix fits into your existing infrastructure. The deployment timeline is
              fixed — assessment, integration, training, launch — with implementation
              structure available — contact the team for pilot terms.
            </p>
          </Reveal>
          <StaggerContainer tag="div" className="deploy-grid">
            {deploySteps.map((step) => (
              <StaggerItem key={step.phase} tag="div" className="deploy-step">
                <p className="deploy-phase">{step.phase}</p>
                <p className="deploy-title">{step.title}</p>
                <p className="deploy-desc">{step.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Integration table ─── */}
      <section className="section" id="integrations">
        <div className="container">
          <Reveal tag="header" className="section-head">
            <p className="eyebrow">— Integrations</p>
            <h2 className="display-2">Works with your stack.</h2>
            <p className="body-1 section-sub">
              Verix deploys as a software-only layer on top of the terminal hardware and
              POS platforms already in your estate.
            </p>
          </Reveal>
          <Reveal tag="div" delay={0.1}>
          <table className="integration-table">
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

          </Reveal>
          {/* Compliance badges */}
          <Reveal style={{ marginTop: "40px" }} delay={0.15}>
            <p className="eyebrow" style={{ marginBottom: "20px" }}>— Compliance</p>
            <div className="badge-row">
              {[
                "PCI DSS Scope Reduction",
                "BIPA Aligned",
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
          </Reveal>
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
                We offer a structured 90-day pilot across assessment, integration,
                and live deployment. Talk to the team about pilot terms and pricing
                for your volume.
              </p>
              <Link className="btn btn-violet" href="#contact">
                Talk to the team
              </Link>
              <p className="pilot-fine">
                No long-term commitment required to start.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="section" style={{ background: "var(--ghost)" }}>
        <div className="container">
          <Reveal tag="header" className="section-head">
            <p className="eyebrow">— Questions</p>
            <h2 className="display-2">What operators ask.</h2>
          </Reveal>
          <StaggerContainer tag="div" className="faq-list" stagger={0.06}>
            {faqItems.map((item) => (
              <StaggerItem key={item.name} tag="div" className="faq-item">
                <p className="faq-q">{item.name}</p>
                <p className="faq-a">{item.acceptedAnswer.text}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Contact / Sales form ─── */}
      <section className="section" id="contact">
        <div className="container">
          <Reveal tag="header" className="section-head">
            <p className="eyebrow">— Start a pilot</p>
            <h2 className="display-2">Let&apos;s talk about your estate.</h2>
            <p className="body-1 section-sub">
              Tell us about your setup and we&apos;ll come back with a tailored
              pilot proposal — no long-term commitment required.
            </p>
          </Reveal>

          <div className="waitlist-split">
            <Reveal direction="left" tag="div" className="waitlist-card">
              <MerchantForm />
            </Reveal>

            <Reveal direction="right">
              <p className="eyebrow" style={{ marginBottom: "28px" }}>— What to expect</p>
              <div className="next-steps">
                <div className="next-step">
                  <div className="next-step-num">1</div>
                  <div>
                    <p className="next-step-title">We review your submission.</p>
                    <p className="next-step-body">
                      A member of the Verix team reviews your estate details
                      and follows up to discuss fit.
                    </p>
                  </div>
                </div>
                <div className="next-step">
                  <div className="next-step-num">2</div>
                  <div>
                    <p className="next-step-title">Intro call.</p>
                    <p className="next-step-body">
                      We walk through your terminal estate, transaction volume, and
                      fraud baseline to scope the engagement accurately.
                    </p>
                  </div>
                </div>
                <div className="next-step">
                  <div className="next-step-num">3</div>
                  <div>
                    <p className="next-step-title">Structured deployment.</p>
                    <p className="next-step-body">
                      From signed agreement to guest-facing deployment —
                      scoped and structured to your estate.
                    </p>
                  </div>
                </div>
              </div>

              <div className="badge-row" style={{ marginTop: "36px" }}>
                {["Software-Only Deployment", "No Hardware Swap", "BIPA Aligned", "PCI DSS"].map((b) => (
                  <span key={b} className="compliance-badge light">{b}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section section-cta">
        <div className="container cta-inner">
          <p className="eyebrow">— For investors</p>
          <h2 className="display-2">Interested in the opportunity?</h2>
          <p className="body-1 section-sub centered">
            Learn about the market, the traction, and the investment thesis behind Verix.
          </p>
          <div className="hero-cta centered">
            <Link className="btn btn-violet" href="/partners">For investors</Link>
            <Link className="btn btn-outline" href="/consumers">For consumers</Link>
          </div>
        </div>
      </section>
    </>
  );
}
