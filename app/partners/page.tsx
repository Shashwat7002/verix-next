import type { Metadata } from "next";
import Link from "next/link";
import InvestorForm from "@/components/InvestorForm";
import Reveal from "@/components/motion/Reveal";
import { StaggerContainer, StaggerCard, StaggerItem } from "@/components/motion/StaggerGrid";

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
              <Link className="btn btn-violet" href="#contact">Request a briefing</Link>
              <Link className="btn btn-outline" href="/team">Meet the team</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Market numbers ─── */}
      <section className="section">
        <div className="container">
          <Reveal tag="header" className="section-head">
            <p className="eyebrow">— Market opportunity</p>
            <h2 className="display-2">A $620B market built on broken infrastructure.</h2>
            <p className="body-1 section-sub">
              Card payments have processed trillions of dollars on a credential designed
              in the 1960s. The 16-digit card number is a shared secret — and shared
              secrets get stolen. Verix eliminates the credential, not just the fraud.
            </p>
          </Reveal>

          <StaggerContainer tag="div" className="market-grid">
            {marketNumbers.map((m) => (
              <StaggerCard key={m.label} tag="div" className="market-card">
                <div className="market-num">
                  {m.num}<sup>{m.sup}</sup>
                </div>
                <p className="market-label">{m.label}</p>
              </StaggerCard>
            ))}
          </StaggerContainer>

          <p className="disclaimer-note">
            Market size estimates are based on third-party industry research and are provided for informational purposes only. Forward-looking statements involve risks and uncertainties — actual results may differ materially. Nothing on this page constitutes an offer of securities or investment advice.
          </p>

          {/* Investment thesis */}
          <StaggerContainer tag="div" className="feature-grid" style={{ marginTop: "0" }}>
            {thesisPoints.map((point, i) => (
              <StaggerCard key={i} tag="div" className="feature-card">
                <span className="feature-index mono">0{i + 1}</span>
                <p className="body-1" style={{ lineHeight: "1.6" }}>{point}</p>
              </StaggerCard>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Traction ─── */}
      <section className="section" style={{ background: "var(--ghost)" }}>
        <div className="container">
          <Reveal tag="header" className="section-head">
            <p className="eyebrow">— Active deployment</p>
            <h2 className="display-2">Early traction at scale.</h2>
            <p className="body-1 section-sub">
              Verix is not a prototype. The system has been benchmarked under real commercial
              load conditions and is entering structured deployment with enterprise partners
              across hospitality and retail.
            </p>
          </Reveal>

          <div className="traction-grid">
            {/* Casino pilot */}
            <StaggerCard tag="div" className="traction-card" liftY={5} liftShadow="0 20px 56px rgba(91,71,224,0.1)">
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
                  <p className="traction-stat-num">{"<"}2s</p>
                  <p className="traction-stat-label">End-to-end checkout</p>
                </div>
              </div>
            </StaggerCard>

            {/* SE Asia pipeline */}
            <StaggerCard tag="div" className="traction-card" liftY={5} liftShadow="0 20px 56px rgba(91,71,224,0.1)">
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
            </StaggerCard>
          </div>
        </div>
      </section>


      {/* ─── Team callout ─── */}
      <section className="section">
        <div className="container">
          <Reveal
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
          </Reveal>
        </div>
      </section>

      {/* ─── Investor contact form ─── */}
      <section className="section" id="contact">
        <div className="container">
          <Reveal tag="header" className="section-head">
            <p className="eyebrow">— Get in touch</p>
            <h2 className="display-2">Request a briefing.</h2>
            <p className="body-1 section-sub">
              We respond to every serious inquiry within two business days.
              Tell us about your interest and we&apos;ll prepare a relevant briefing —
              data room access available under NDA.
            </p>
          </Reveal>

          <div className="waitlist-split">
            <Reveal direction="left" tag="div" className="waitlist-card">
              <InvestorForm />
            </Reveal>

            <Reveal direction="right">
              <p className="eyebrow" style={{ marginBottom: "28px" }}>— What to expect</p>
              <div className="next-steps">
                <div className="next-step">
                  <div className="next-step-num">1</div>
                  <div>
                    <p className="next-step-title">We review your inquiry.</p>
                    <p className="next-step-body">
                      Every submission is read by the founding team. We follow
                      up with a relevant briefing pack.
                    </p>
                  </div>
                </div>
                <div className="next-step">
                  <div className="next-step-num">2</div>
                  <div>
                    <p className="next-step-title">Intro call.</p>
                    <p className="next-step-body">
                      A direct conversation with the founding team covering the
                      thesis, traction, technology, and go-to-market plan.
                    </p>
                  </div>
                </div>
                <div className="next-step">
                  <div className="next-step-num">3</div>
                  <div>
                    <p className="next-step-title">Data room access under NDA.</p>
                    <p className="next-step-body">
                      Full financials, technical architecture, and pilot performance
                      data available to qualified investors and strategic partners.
                    </p>
                  </div>
                </div>
              </div>

              <div className="badge-row" style={{ marginTop: "36px" }}>
                {["$620B Market", "$35B Problem", "Active Pilots", "NDA Available"].map((b) => (
                  <span key={b} className="compliance-badge light">{b}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section section-cta">
        <Reveal className="container cta-inner">
          <p className="eyebrow">— For operators</p>
          <h2 className="display-2">Want Verix at your store?</h2>
          <p className="body-1 section-sub centered">
            See how Verix deploys on your existing terminals and what the 90-day pilot looks like.
          </p>
          <div className="hero-cta centered">
            <Link className="btn btn-violet" href="/merchants">For merchants</Link>
            <Link className="btn btn-outline" href="/consumers">For consumers</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
