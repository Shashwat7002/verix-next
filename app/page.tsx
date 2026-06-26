import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { StaggerContainer, StaggerCard, StaggerItem } from "@/components/motion/StaggerGrid";
import AnimatedStat from "@/components/motion/AnimatedStat";

/* ─── Page-level SEO metadata ─── */
export const metadata: Metadata = {
  title: "Verix — Biometric Payments That End Card & Chargeback Fraud",
  description:
    "Verix turns a shopper's face into their payment credential at the POS — ending stolen-card fraud and chargeback fraud for retail, gaming, restaurants, and more.",
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

/* ─── Page-level JSON-LD schemas ─── */
const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Verix",
  applicationCategory: "FinanceApplication",
  operatingSystem: "POS terminals, iOS, Android",
  description:
    "A face-bound payment credential for POS systems that eliminates card fraud and chargeback fraud across retail, gaming, restaurants, healthcare, stadiums, and hospitality.",
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to pay with your face using Verix",
  step: [
    {
      "@type": "HowToStep",
      name: "Enroll once",
      text: "The shopper links a card or bank account to their face in the Verix app or at an in-store kiosk. Verix stores a one-way face template, never a photo or card number.",
    },
    {
      "@type": "HowToStep",
      name: "Verify at checkout",
      text: "The terminal scans the shopper's face, checks liveness to block spoofs, and matches the template in under 400 milliseconds.",
    },
    {
      "@type": "HowToStep",
      name: "Authorize with proof",
      text: "Verix authorizes the charge and attaches biometric proof of consent — the record that defeats chargeback fraud.",
    },
    {
      "@type": "HowToStep",
      name: "Settle and reconcile",
      text: "Funds settle through your existing processor. Any dispute arrives with the proof already attached.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does Verix stop chargeback fraud?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every Verix payment includes a signed biometric proof that the real account holder was physically present and approved the charge. When a friendly-fraud dispute comes in, that proof is attached to the transaction, so issuers reverse far fewer of them.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to card data with Verix?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no card data at the counter. Verix replaces the card with a face-bound credential and stores a one-way biometric template, not photos or card numbers. A breach of the terminal yields nothing usable.",
      },
    },
    {
      "@type": "Question",
      name: "Can someone spoof a face to pay with Verix?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Verix runs presentation-attack detection (liveness) tested to ISO/IEC 30107 and matches against NIST-evaluated models, with a false-accept rate near 1 in 1,000,000. Photos, masks, and screens are rejected.",
      },
    },
    {
      "@type": "Question",
      name: "How fast is checkout with Verix?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A face scan verifies in under 400 milliseconds — faster than a chip insert. There is no tap, PIN, or phone to fumble with.",
      },
    },
    {
      "@type": "Question",
      name: "Do shoppers have to enroll first?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, once. Shoppers link a card or bank account to their face in the Verix app or at an in-store kiosk. After that, they pay by looking at the terminal.",
      },
    },
    {
      "@type": "Question",
      name: "Is biometric data private and compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Verix is built for GDPR and U.S. biometric laws like Illinois BIPA: explicit consent, one-way templates, no raw images retained, and shopper-controlled deletion.",
      },
    },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://verix.example/",
  name: "Verix — Biometric Payments That End Card & Chargeback Fraud",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".hero h1", ".hero-lede"],
  },
};

const featureCards = [
  { n: "01", title: "Under 400 ms, every time.", rd: "0s",   body: "A face scan clears in under 400 ms. No card tap, no PIN, no phone — the shopper looks at the terminal and walks away." },
  { n: "02", title: "Enroll once. Pay everywhere.", rd: ".08s", body: "One enrollment links a shopper's face to their payment method. Every Verix-enabled checkout after that requires nothing from them." },
  { n: "03", title: "No card to steal.", rd: ".16s",          body: "No card number, magstripe, or token sits at the counter. Skimming, cloning, and fraud have nothing to work with." },
  { n: "04", title: "Every charge carries proof.", rd: ".24s", body: "Biometric consent is attached to every transaction. Friendly fraud disputes arrive with evidence already on file." },
];

const industryCards = [
  { code: "in_retail",      name: "Retail",      rd: "0s",   body: "Stop lost-and-stolen card fraud at the register and self-serve kiosk. Returns verify against the same face that paid." },
  { code: "in_gaming",      name: "Gaming",      rd: ".07s", body: "Tie every cage, table, and kiosk transaction to a verified identity — and clear KYC and age checks in the same scan." },
  { code: "in_restaurants", name: "Restaurants", rd: ".14s", body: "Close tabs with a glance. Tips and adjustments carry proof, so \"I never authorized that\" chargebacks end." },
  { code: "in_healthcare",  name: "Healthcare",  rd: ".21s", body: "Match every co-pay and patient balance to the right person. No card, no shared terminal, no identity mix-ups." },
  { code: "in_stadiums",    name: "Stadiums",    rd: ".28s", body: "Move tens of thousands through gates and concessions face-first. No wallet, no fraud at the stand." },
  { code: "in_hospitality", name: "Hospitality", rd: ".35s", body: "Bind room charges and incidentals to the guest's face at check-in. Disputes arrive with proof attached." },
];

const proofStats = [
  { num: 380,  unit: "ms",   label: "Median face verification time" },
  { num: 1,    unit: "/ 1M", label: "False accept rate — industry-leading accuracy" },
  { num: 0,    unit: "",     label: "Photos or card numbers stored at the terminal" },
  { num: 100,  unit: "%",    label: "Of transactions with biometric consent proof attached" },
];


/* ─── Page ─── */
export default function HomePage() {
  return (
    <>
      {/* Page-level JSON-LD — server-rendered for crawlers */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow reveal" style={{ "--rd": "0s" } as React.CSSProperties}>
              — Biometric payments for physical commerce
            </p>
            <h1 className="display-1 reveal" style={{ "--rd": ".07s" } as React.CSSProperties}>
              Pay by <span className="accent">face</span>. Checkout in seconds.
            </h1>
            <p className="body-1 hero-lede reveal" style={{ "--rd": ".14s" } as React.CSSProperties}>
              Verix replaces the card at the point of sale with a face. Shoppers
              enroll once, then pay anywhere with a glance — verified in under
              400&nbsp;ms, no card, no phone, no friction. Fraud protection is
              built in at the architecture level.
            </p>
            <div className="hero-cta reveal" style={{ "--rd": ".21s" } as React.CSSProperties}>
              <Link className="btn btn-violet" href="/merchants#contact">Talk to sales</Link>
              <Link className="btn btn-outline" href="#how">See how it works</Link>
            </div>
          </div>

          <Reveal direction="scale" delay={0.28} tag="aside" className="stats-card" aria-label="Verix at a glance">
            <dl className="stats">
              <div className="stat">
                <dt className="caps-label">Median verify</dt>
                <dd className="mono-amount accent">
                  <AnimatedStat value={380} /><span className="unit">ms</span>
                </dd>
              </div>
              <div className="stat">
                <dt className="caps-label">False accept rate</dt>
                <dd className="mono-amount">
                  1<span className="unit">/ 1M</span>
                </dd>
              </div>
              <div className="stat">
                <dt className="caps-label">Card data stored</dt>
                <dd className="mono-amount">0</dd>
              </div>
              <div className="stat">
                <dt className="caps-label">Charges with proof</dt>
                <dd className="mono-amount">
                  <AnimatedStat value={100} /><span className="unit">%</span>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="strip" aria-label="Standards and certifications">
        <div className="container">
          <ul className="strip-list">
            <li>PCI DSS Level 1</li>
            <li>ISO/IEC 30107 PAD</li>
            <li>NIST FRVT</li>
            <li>FIDO2</li>
            <li>SOC 2 Type II</li>
            <li>GDPR · BIPA</li>
          </ul>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section" id="how">
        <div className="container">
          <Reveal tag="header" className="section-head">
            <p className="eyebrow">— How it works</p>
            <h2 className="display-2">How does paying with your face work?</h2>
            <p className="body-1 section-sub">
              Verix binds a shopper&apos;s payment credential to a face template during a
              one-time enrollment. At checkout, the terminal captures a live face scan,
              confirms liveness, and matches it to the credential in under 400&nbsp;ms —
              then authorizes the charge with cryptographic, biometric proof the real
              account holder approved it.
            </p>
          </Reveal>

          {/* Steps keep data-sr for the ::before border animation */}
          <ol className="step-grid">
            {[
              { n: "01", title: "Under 400 ms, every time.", rd: "0s",   body: "A face scan clears in under 400 ms. No card tap, no PIN, no phone — the shopper looks at the terminal and walks away." },
              { n: "02", title: "Enroll once. Pay everywhere.", rd: ".08s", body: "One enrollment links a shopper's face to their payment method. Every Verix-enabled checkout after that requires nothing from them." },
              { n: "03", title: "No card to steal.", rd: ".16s",           body: "No card number, magstripe, or token sits at the counter. Skimming, cloning, and fraud have nothing to work with." },
              { n: "04", title: "Every charge carries proof.", rd: ".24s", body: "Biometric consent is attached to every transaction. Friendly fraud disputes arrive with evidence already on file." },
            ].map(({ n, title, rd, body }) => (
              <li key={n} className="step" data-sr style={{ "--rd": rd } as React.CSSProperties}>
                <span className="step-num mono">{n}</span>
                <h3 className="step-title">{title}</h3>
                <p className="body-2">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── VALUE PROPS ── */}
      <section className="section section-why" id="why">
        <div className="container">
          <Reveal tag="header" className="section-head">
            <p className="eyebrow">— Why Verix</p>
            <h2 className="display-2">The fastest checkout is the one that disappears.</h2>
            <p className="body-1 section-sub">
              No card to reach for, no PIN to type, no phone to unlock. Shoppers
              look at the terminal and they&apos;re done — in under 400&nbsp;ms. The
              security and fraud protection come with it, at the architecture level.
            </p>
          </Reveal>

          <StaggerContainer tag="div" className="feature-grid">
            {featureCards.map(({ n, title, body }) => (
              <StaggerCard key={n} tag="article" className="feature-card">
                <span className="feature-index mono">{n}</span>
                <h3 className="heading-1">{title}</h3>
                <p className="body-2">{body}</p>
              </StaggerCard>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="section" id="industries">
        <div className="container">
          <Reveal tag="header" className="section-head">
            <p className="eyebrow">— Industries</p>
            <h2 className="display-2">Built for the counters that don&apos;t stop.</h2>
            <p className="body-1 section-sub">
              One credential, tuned to how each venue takes money and where each one
              loses it — from a single register to forty concession stands behind a gate.
            </p>
          </Reveal>

          <StaggerContainer tag="ul" className="industry-grid">
            {industryCards.map(({ code, name, body }) => (
              <StaggerCard key={code} tag="li" className="industry-card">
                <span className="mono industry-code">{code}</span>
                <h3 className="industry-name">{name}</h3>
                <p className="body-2">{body}</p>
              </StaggerCard>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── PROOF NUMBERS ── */}
      <section className="section section-dark">
        <div className="container">
          <Reveal tag="header" className="section-head">
            <p className="eyebrow eyebrow-on-dark">— By the numbers</p>
            <h2 className="display-2 on-dark">Built to perform at every counter.</h2>
            <p className="body-1 on-dark-muted">
              Verix is engineered for the physical world — high-volume, real-time,
              with no tolerance for false accepts or slow checkouts.
            </p>
          </Reveal>

          <StaggerContainer tag="div" className="proof-grid">
            {proofStats.map((s) => (
              <StaggerCard key={s.label} tag="div" className="proof-card" darkBg liftY={4}>
                <div className="proof-num mono">
                  <AnimatedStat value={s.num} /><span className="proof-unit">{s.unit}</span>
                </div>
                <p className="proof-label">{s.label}</p>
              </StaggerCard>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── FAQ (AEO) ── */}
      <section className="section" id="faq">
        <div className="container">
          <Reveal tag="header" className="section-head">
            <p className="eyebrow">— FAQ</p>
            <h2 className="display-2">Questions operators ask.</h2>
          </Reveal>

          <StaggerContainer tag="div" className="faq-list" stagger={0.06}>
            {faqSchema.mainEntity.map((q, i) => (
              <StaggerItem key={i} tag="article" className="faq-item">
                <h3 className="faq-q">{q.name}</h3>
                <p className="faq-a">{q.acceptedAnswer.text}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section-cta" id="pricing">
        <Reveal className="container cta-inner">
          <p className="eyebrow">— Talk to sales</p>
          <h2 className="display-2">Take the card out of the equation.</h2>
          <p className="body-1 section-sub centered">
            See Verix verify a live payment at your counter. Talk to our team about
            retail, gaming, restaurants, and beyond.
          </p>
          <div className="hero-cta centered">
            <Link className="btn btn-violet" href="/merchants#contact">Talk to sales</Link>
            <Link className="btn btn-outline" href="#how">See how it works</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
