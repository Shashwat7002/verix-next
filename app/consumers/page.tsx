import type { Metadata } from "next";
import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";
import Reveal from "@/components/motion/Reveal";
import { StaggerContainer, StaggerCard, StaggerItem } from "@/components/motion/StaggerGrid";
import AnimatedStat from "@/components/motion/AnimatedStat";

/* ─── SEO ─── */
export const metadata: Metadata = {
  title: "Pay with Your Face — Verix for Consumers",
  description:
    "Enroll once. Pay everywhere. Verix turns your face into your payment credential — no card, no phone, no friction. Your biometric never leaves the terminal.",
  alternates: { canonical: "/consumers" },
  openGraph: {
    url: "/consumers",
    title: "Pay with Your Face — Verix for Consumers",
    description:
      "One enrollment. Every checkout. Your face replaces your card — with biometric proof on every transaction.",
  },
};

/* ─── JSON-LD ─── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What happens to my face data when I enroll with Verix?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Verix never stores a photo of your face. During enrollment, a one-way mathematical template is created on-device. Only that encrypted token — which cannot be reversed into an image — is stored. Raw biometric data never leaves the terminal.",
      },
    },
    {
      "@type": "Question",
      name: "Can I delete my Verix enrollment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can delete your biometric enrollment at any time through the Verix app. Deletion is immediate and permanent — your template is removed from every node it was enrolled on.",
      },
    },
    {
      "@type": "Question",
      name: "What if Verix doesn't recognize my face at checkout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If the biometric match fails or falls below the confidence threshold, the terminal falls back to standard card-present payment automatically. You are never stuck at checkout.",
      },
    },
    {
      "@type": "Question",
      name: "Which stores and locations support Verix?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Verix is actively deploying across retail, restaurants, gaming, hospitality, and healthcare verticals. Check the Verix app for participating locations near you.",
      },
    },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://verix.example/consumers",
  name: "Pay with Your Face — Verix for Consumers",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".consumer-hero h1", ".consumer-answer"],
  },
};

/* ─── Trust points data ─── */
const trustPoints = [
  {
    title: "No photo, ever.",
    body: "Enrollment creates a one-way mathematical template — not an image. It cannot be reversed into a picture of your face.",
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M9 2 L15 5 L15 9 C15 13 9 16 9 16 C9 16 3 13 3 9 L3 5 Z" />
        <path d="M6 9 L8 11 L12 7" />
      </svg>
    ),
  },
  {
    title: "Your data stays on-device.",
    body: "Raw biometric data never travels over a network. Processing happens locally on the terminal's edge hardware.",
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="2" y="3" width="14" height="10" rx="2" />
        <path d="M6 16 H12 M9 13 V16" />
        <path d="M5 7 H7 M5 9.5 H10" />
      </svg>
    ),
  },
  {
    title: "Delete anytime — instantly.",
    body: "One tap in the Verix app removes your enrollment permanently across every location. No waiting, no support ticket.",
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M9 2 A7 7 0 1 1 9 16 A7 7 0 0 1 9 2" />
        <path d="M6 9 L8 11 L13 6" />
      </svg>
    ),
  },
  {
    title: "Compliance baked in.",
    body: "Verix enrollment flows are designed with BIPA consent requirements, GDPR data minimisation rules, and PCI DSS tokenisation standards in mind.",
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M4 4 H14 V11 C14 14 9 16 9 16 C9 16 4 14 4 11 Z" />
        <path d="M7 9 L8.5 10.5 L11 7.5" />
      </svg>
    ),
  },
];

const enrollSteps = [
  {
    num: "01",
    title: "Enroll once.",
    body: "Link your payment method to your face in the Verix app or at an in-store kiosk. Takes under two minutes.",
    delay: "0s",
  },
  {
    num: "02",
    title: "Look at the terminal.",
    body: "At any Verix-enabled checkout, glance at the camera. Liveness detection blocks photos and spoofs in real time.",
    delay: ".09s",
  },
  {
    num: "03",
    title: "Authorised in under two seconds.",
    body: "Your face matches your token, the charge is authorised, and a receipt lands in your app — card never needed.",
    delay: ".18s",
  },
];

const faqItems = faqSchema.mainEntity;

export default function ConsumersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* ─── Hero ─── */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="container hero-grid">
          <div>
            <p className="eyebrow reveal" style={{ "--rd": "0s" } as React.CSSProperties}>
              — For Shoppers
            </p>
            <h1 className="display-1 reveal" style={{ "--rd": ".07s" } as React.CSSProperties}>
              Your face is<br />your wallet.
            </h1>
            <p className="body-1 hero-lede reveal consumer-answer" style={{ "--rd": ".14s" } as React.CSSProperties}>
              No card. No phone. No friction. Enroll once and pay at any Verix-enabled
              checkout with a glance — every charge backed by biometric proof only you
              could authorise.
            </p>
            <div className="hero-cta reveal" style={{ "--rd": ".21s" } as React.CSSProperties}>
              <Link className="btn btn-violet" href="#waitlist">Join the waitlist</Link>
              <Link className="btn btn-outline" href="#how">How it works</Link>
            </div>
          </div>

          {/* Trust stats */}
          <Reveal direction="scale" delay={0.28} tag="div" className="stats-card">
            <div className="stat">
              <span className="caps-label">Checkout time</span>
              <span className="mono-amount">
                {"<"}<AnimatedStat value={2} /><span className="unit">sec</span>
              </span>
            </div>
            <div className="stat">
              <span className="caps-label">False accept rate</span>
              <span className="mono-amount">
                1<span className="unit">/ 1M</span>
              </span>
            </div>
            <div className="stat">
              <span className="caps-label">Biometric stored</span>
              <span className="mono-amount">
                0<span className="unit">photos</span>
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Industries strip ─── */}
      <section className="strip" aria-label="Where Verix works">
        <div className="container">
          <ul className="strip-list">
            <li>Retail</li>
            <li>Restaurants</li>
            <li>Gaming & Casinos</li>
            <li>Hotels</li>
            <li>Healthcare</li>
            <li>Stadiums</li>
          </ul>
        </div>
      </section>

      {/* ─── How it works ─── */}
      <section className="section" id="how">
        <div className="container">
          <Reveal tag="header" className="section-head">
            <p className="eyebrow">— How it works</p>
            <h2 className="display-2">Three steps. No card required.</h2>
            <p className="body-1 section-sub">
              Verix replaces the card at the point of sale. Your face becomes a
              cryptographic credential tied to your payment method — nothing physical
              to carry, lose, or steal.
            </p>
          </Reveal>
          <StaggerContainer tag="div" className="enroll-grid">
            {enrollSteps.map((step) => (
              <StaggerCard key={step.num} tag="div" className="enroll-card">
                <div className="enroll-num">{step.num}</div>
                <h3 className="enroll-title">{step.title}</h3>
                <p className="enroll-body">{step.body}</p>
              </StaggerCard>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Privacy / dark section ─── */}
      <section className="section section-dark">
        <div className="container privacy-split">
          <Reveal direction="left">
            <p className="eyebrow eyebrow-on-dark">— Privacy by design</p>
            <h2 className="display-2 on-dark" style={{ marginTop: "18px" }}>
              Your biometric is yours. Full stop.
            </h2>
            <p className="body-1 on-dark-muted">
              Verix was engineered with a single data principle: raw biometrics never
              leave the device they were captured on. Only an encrypted token moves —
              and that token contains zero personally identifiable information.
            </p>
            <div className="badge-row">
              {["BIPA Aligned", "GDPR Aligned", "PCI DSS", "AES-256 Encryption", "TLS 1.3"].map((b) => (
                <span key={b} className="compliance-badge dark">{b}</span>
              ))}
            </div>
          </Reveal>

          <StaggerContainer tag="div" className="trust-points" stagger={0.1}>
            {trustPoints.map((point) => (
              <StaggerItem key={point.title} tag="div" className="trust-point">
                <div className="trust-icon">{point.icon}</div>
                <div>
                  <p className="trust-point-title">{point.title}</p>
                  <p className="trust-point-body">{point.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="section" id="faq">
        <div className="container">
          <Reveal tag="header" className="section-head">
            <p className="eyebrow">— Questions</p>
            <h2 className="display-2">What shoppers ask.</h2>
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

      {/* ─── Waitlist form ─── */}
      <section className="section" id="waitlist">
        <div className="container">
          <Reveal tag="header" className="section-head">
            <p className="eyebrow">— Join the waitlist</p>
            <h2 className="display-2">Leave your card at home.</h2>
            <p className="body-1 section-sub">
              Fill in your details below. We&apos;ll follow up with the location
              of your nearest Verix kiosk to complete face enrollment — takes
              under two minutes in store.
            </p>
          </Reveal>

          <div className="waitlist-split">
            {/* Form */}
            <Reveal direction="left" tag="div" className="waitlist-card">
              <WaitlistForm />
            </Reveal>

            {/* What happens next */}
            <Reveal direction="right">
              <p className="eyebrow" style={{ marginBottom: "28px" }}>— What happens next</p>
              <div className="next-steps">
                <div className="next-step">
                  <div className="next-step-num">1</div>
                  <div>
                    <p className="next-step-title">We confirm your spot.</p>
                    <p className="next-step-body">
                      You&apos;ll receive an email confirming your place on the
                      waitlist and the nearest active kiosk location.
                    </p>
                  </div>
                </div>
                <div className="next-step">
                  <div className="next-step-num">2</div>
                  <div>
                    <p className="next-step-title">Visit a Verix kiosk.</p>
                    <p className="next-step-body">
                      At the kiosk, link your payment method and complete your
                      one-time face scan. The whole process takes under two minutes.
                    </p>
                  </div>
                </div>
                <div className="next-step">
                  <div className="next-step-num">3</div>
                  <div>
                    <p className="next-step-title">Pay with your face, everywhere.</p>
                    <p className="next-step-body">
                      Your credential is active. At any Verix-enabled checkout,
                      just glance at the camera — no card, no phone, no PIN.
                    </p>
                  </div>
                </div>
              </div>

              <div className="badge-row" style={{ marginTop: "36px" }}>
                {["BIPA Aligned", "GDPR Aligned", "AES-256 Encrypted", "Delete anytime"].map((b) => (
                  <span key={b} className="compliance-badge light">{b}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section section-cta" style={{ paddingTop: "0" }}>
        <Reveal className="container cta-inner">
          <p className="eyebrow">— For operators</p>
          <h2 className="display-2">Want Verix at your store?</h2>
          <p className="body-1 section-sub centered">
            Verix deploys as software-only on your existing terminals.
            Zero implementation fees for the 90-day pilot.
          </p>
          <div className="hero-cta centered">
            <Link className="btn btn-violet" href="/merchants">For merchants</Link>
            <Link className="btn btn-outline" href="/partners">For investors</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
