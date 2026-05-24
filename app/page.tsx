import type { Metadata } from "next";
import Link from "next/link";

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

/* ─── Inline SVG sub-components ─── */
const ScanIcon = () => (
  <svg
    className="scan-icon"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="11" r="2.1" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M8.4 16c.7-1.3 2-2.1 3.6-2.1s2.9.8 3.6 2.1"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

/* ─── Page ─── */
export default function HomePage() {
  return (
    <>
      {/* Page-level JSON-LD — server-rendered for crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow reveal" style={{ "--rd": "0s" } as React.CSSProperties}>
              — Biometric payments for physical commerce
            </p>
            <h1 className="display-1 reveal" style={{ "--rd": ".07s" } as React.CSSProperties}>
              Pay by <span className="accent">face</span>. End card fraud and chargebacks.
            </h1>
            <p className="body-1 hero-lede reveal" style={{ "--rd": ".14s" } as React.CSSProperties}>
              Verix is a biometric payment credential — the cardholder&apos;s face replaces
              the card at the point of sale. There&apos;s nothing to steal or clone, and
              every charge carries proof the real account holder approved it. Card
              fraud and chargeback fraud both stop.
            </p>
            <div className="hero-cta reveal" style={{ "--rd": ".21s" } as React.CSSProperties}>
              <Link className="btn btn-violet" href="#pricing">Talk to sales</Link>
              <Link className="btn btn-outline" href="#how">See how it works</Link>
            </div>
          </div>

          <aside className="stats-card reveal" style={{ "--rd": ".28s" } as React.CSSProperties} aria-label="Verix at a glance">
            <dl className="stats">
              <div className="stat">
                <dt className="caps-label">Median verify</dt>
                <dd className="mono-amount accent" data-count="380">
                  380<span className="unit">ms</span>
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
                <dd className="mono-amount" data-count="100">
                  100<span className="unit">%</span>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="strip" aria-label="Standards and certifications">
        <div className="container" data-sr="fade">
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
          <header className="section-head" data-sr>
            <p className="eyebrow">— How it works</p>
            <h2 className="display-2">How does paying with your face work?</h2>
            <p className="body-1 section-sub">
              Verix binds a shopper&apos;s payment credential to a face template during a
              one-time enrollment. At checkout, the terminal captures a live face scan,
              confirms liveness, and matches it to the credential in under 400&nbsp;ms —
              then authorizes the charge with cryptographic, biometric proof the real
              account holder approved it.
            </p>
          </header>

          <ol className="step-grid">
            {[
              { n: "01", title: "Enroll once", rd: "0s", body: "The shopper links a card or bank account to their face in the app or at a kiosk. Verix keeps a one-way face template — never a photo or card number." },
              { n: "02", title: "Verify at checkout", rd: ".1s", body: "The terminal scans the shopper's face, checks liveness to block photos and masks, and matches the template in under 400 ms." },
              { n: "03", title: "Authorize with proof", rd: ".2s", body: "Verix authorizes the charge and attaches signed biometric proof of consent — the record that defeats chargeback fraud." },
              { n: "04", title: "Settle and reconcile", rd: ".3s", body: "Funds settle through your existing processor. Any dispute arrives with the proof already attached." },
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
          <header className="section-head" data-sr>
            <p className="eyebrow">— Why Verix</p>
            <h2 className="display-2">Take out the card. Take out the fraud.</h2>
            <p className="body-1 section-sub">
              The card is the thing that gets stolen, skimmed, and disputed. Replace it
              with a face, and the most expensive fraud at the counter has nothing left
              to attack.
            </p>
          </header>

          <div className="feature-grid">
            {[
              { n: "01", title: "No card to steal", rd: "0s", body: "No card number, magstripe, or token sits at the counter. Skimming, cloning, and lost-or-stolen card fraud have nothing to work with." },
              { n: "02", title: "No chargeback fraud", rd: ".08s", body: "Every charge carries biometric proof the account holder was present and approved it. \"I didn't buy this\" disputes don't hold up." },
              { n: "03", title: "Faster lines", rd: ".16s", body: "A face scan clears in under 400 ms. No card tap, no PIN, no phone — the shopper looks at the terminal and goes." },
              { n: "04", title: "Nothing to breach", rd: ".24s", body: "Verix stores one-way face templates, not photos or card data. A breach of your terminals yields nothing an attacker can use or sell." },
            ].map(({ n, title, rd, body }) => (
              <article key={n} className="feature-card" data-sr style={{ "--rd": rd } as React.CSSProperties}>
                <span className="feature-index mono">{n}</span>
                <h3 className="heading-1">{title}</h3>
                <p className="body-2">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="section" id="industries">
        <div className="container">
          <header className="section-head" data-sr>
            <p className="eyebrow">— Industries</p>
            <h2 className="display-2">Built for the counters that don&apos;t stop.</h2>
            <p className="body-1 section-sub">
              One credential, tuned to how each venue takes money and where each one
              loses it — from a single register to forty concession stands behind a gate.
            </p>
          </header>

          <ul className="industry-grid">
            {[
              { code: "in_retail",      name: "Retail",      rd: "0s",    body: "Stop lost-and-stolen card fraud at the register and self-serve kiosk. Returns verify against the same face that paid." },
              { code: "in_gaming",      name: "Gaming",      rd: ".07s",  body: "Tie every cage, table, and kiosk transaction to a verified identity — and clear KYC and age checks in the same scan." },
              { code: "in_restaurants", name: "Restaurants", rd: ".14s",  body: "Close tabs with a glance. Tips and adjustments carry proof, so \"I never authorized that\" chargebacks end." },
              { code: "in_healthcare",  name: "Healthcare",  rd: ".21s",  body: "Match every co-pay and patient balance to the right person. No card, no shared terminal, no identity mix-ups." },
              { code: "in_stadiums",    name: "Stadiums",    rd: ".28s",  body: "Move tens of thousands through gates and concessions face-first. No wallet, no fraud at the stand." },
              { code: "in_hospitality", name: "Hospitality", rd: ".35s",  body: "Bind room charges and incidentals to the guest's face at check-in. Disputes arrive with proof attached." },
            ].map(({ code, name, rd, body }) => (
              <li key={code} className="industry-card" data-sr style={{ "--rd": rd } as React.CSSProperties}>
                <span className="mono industry-code">{code}</span>
                <h3 className="industry-name">{name}</h3>
                <p className="body-2">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── TERMINALS ── */}
      <section className="section section-surfaces" id="surfaces">
        <div className="container">
          <header className="section-head" data-sr>
            <p className="eyebrow">— Verification, two modes</p>
            <h2 className="display-2">Same scan. Two surfaces.</h2>
            <p className="body-1 section-sub">
              Retail counter on Ghost White; back-of-house terminal on Ink Black. The
              violet verify action is identical on both — the brand signal stays
              constant while the shell adapts to the environment.
            </p>
          </header>

          <div className="terminal-grid">
            {/* Light terminal */}
            <figure className="terminal terminal-light" data-sr="left">
              <figcaption className="terminal-tag">
                <span className="mono">Retail counter</span>
                <span className="mono muted">Light · Ghost White</span>
              </figcaption>
              <div className="terminal-body">
                <div className="terminal-status mono">
                  <span><span className="dot" />verix · t_29C · live</span>
                  <span className="muted">14:08:11</span>
                </div>
                <p className="caps-label">Merchant</p>
                <p className="heading-1 terminal-merchant">Northcap Outfitters · Store 014</p>
                <p className="caps-label">Amount due</p>
                <p className="mono-amount terminal-amount"><span className="unit pre">$</span>84.20</p>
                <div className="terminal-rule" />
                <dl className="line-items mono">
                  <div><dt>2 × Trail shell · L</dt><dd>72.00</dd></div>
                  <div><dt>Tax · 8.5%</dt><dd>6.12</dd></div>
                  <div><dt>Tip</dt><dd>6.08</dd></div>
                </dl>
                <div className="verify-row mono">
                  <span className="verify-label"><ScanIcon />Face match</span>
                  <span className="verify-val">0.992 · liveness ✓</span>
                </div>
                <div className="terminal-actions" aria-hidden="true">
                  <button className="btn btn-outline" type="button" tabIndex={-1}>Cancel</button>
                  <button className="btn btn-violet" type="button" tabIndex={-1}>Verify&nbsp;·&nbsp;$&nbsp;84.20</button>
                </div>
                <p className="terminal-foot mono">verix · enroll → verify → authorize · matched in 380 ms</p>
              </div>
            </figure>

            {/* Dark terminal */}
            <figure className="terminal terminal-dark" data-sr="right" style={{ "--rd": ".08s" } as React.CSSProperties}>
              <figcaption className="terminal-tag">
                <span className="mono">Back-of-house terminal</span>
                <span className="mono muted">Dark · Ink Black</span>
              </figcaption>
              <div className="terminal-body">
                <div className="terminal-status mono">
                  <span><span className="dot" />verix · t_07A · live</span>
                  <span className="muted">14:08:11</span>
                </div>
                <p className="caps-label">Merchant</p>
                <p className="heading-1 terminal-merchant">Saint Marin Hotel · F&amp;B / Bar</p>
                <p className="caps-label">Amount due</p>
                <p className="mono-amount terminal-amount"><span className="unit pre">$</span>84.20</p>
                <div className="terminal-rule" />
                <dl className="line-items mono">
                  <div><dt>Tab 022 · 4 items</dt><dd>72.00</dd></div>
                  <div><dt>Service · 8.5%</dt><dd>6.12</dd></div>
                  <div><dt>Tip</dt><dd>6.08</dd></div>
                </dl>
                <div className="verify-row mono">
                  <span className="verify-label"><ScanIcon />Face match</span>
                  <span className="verify-val">0.994 · liveness ✓</span>
                </div>
                <div className="terminal-actions" aria-hidden="true">
                  <button className="btn btn-outline btn-outline-dark" type="button" tabIndex={-1}>Cancel</button>
                  <button className="btn btn-violet" type="button" tabIndex={-1}>Verify&nbsp;·&nbsp;$&nbsp;84.20</button>
                </div>
                <p className="terminal-foot mono">verix · enroll → verify → authorize · matched in 380 ms</p>
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* ── DEVELOPERS ── */}
      <section className="section section-dev" id="developers">
        <div className="container dev-grid">
          <div className="dev-copy" data-sr>
            <p className="eyebrow eyebrow-on-dark">— Developers</p>
            <h2 className="display-2 on-dark">One SDK for every counter you run.</h2>
            <p className="body-1 on-dark-muted">
              A single API and SDKs for enrollment, liveness, and verification. Drop
              Verix into your existing POS — the shopper verifies with a face, and you
              get an authorization plus a signed consent proof on every charge.
            </p>
            <div className="hero-cta">
              <Link className="btn btn-violet" href="#pricing">Read the docs</Link>
              <Link className="btn btn-outline btn-outline-dark" href="#pricing">Get API keys</Link>
            </div>
          </div>

          <div
            className="code-window"
            role="img"
            aria-label="Example Verix face-verification API response"
            data-sr="scale"
            style={{ "--rd": ".12s" } as React.CSSProperties}
          >
            <div className="code-bar mono">
              <span><span className="dot" />verix-cli · verify</span>
              <span className="muted">380ms</span>
            </div>
            <pre className="code-block mono">
              <span className="c-com"># verify a charge with the shopper&apos;s face</span>{"\n"}
              <span className="c-cmd">$</span>{" verix verify create \\\n    --endpoint "}
              <span className="c-str">ep_handheld</span>{" \\\n    --amount "}
              <span className="c-num">8420</span>{" --currency "}
              <span className="c-str">usd</span>{"\n\n"}
              <span className="c-key">{"{"}</span>{"\n"}
              {"  "}<span className="c-prop">&quot;id&quot;</span>{"            : "}
              <span className="c-str">&quot;txn_01HZQ4K9P3F7D8&quot;</span>{",\n  "}
              <span className="c-prop">&quot;status&quot;</span>{"        : "}
              <span className="c-acc">&quot;approved&quot;</span>{",\n  "}
              <span className="c-prop">&quot;method&quot;</span>{"        : "}
              <span className="c-str">&quot;face&quot;</span>{",\n  "}
              <span className="c-prop">&quot;match_score&quot;</span>{"   : "}
              <span className="c-num">0.992</span>{",\n  "}
              <span className="c-prop">&quot;liveness&quot;</span>{"      : "}
              <span className="c-acc">&quot;pass&quot;</span>{",\n  "}
              <span className="c-prop">&quot;consent_proof&quot;</span>{" : "}
              <span className="c-str">&quot;cp_3F7D8K9P3&quot;</span>{",\n  "}
              <span className="c-prop">&quot;latency_ms&quot;</span>{"    : "}
              <span className="c-num">380</span>{"\n"}
              <span className="c-key">{"}"}</span>
            </pre>
          </div>
        </div>
      </section>

      {/* ── FAQ (AEO) ── */}
      <section className="section" id="faq">
        <div className="container">
          <header className="section-head" data-sr>
            <p className="eyebrow">— FAQ</p>
            <h2 className="display-2">Questions operators ask.</h2>
          </header>
          <div className="faq-list">
            {faqSchema.mainEntity.map((q, i) => (
              <article
                key={i}
                className="faq-item"
                data-sr="fade"
                style={{ "--rd": `${i * 0.07}s` } as React.CSSProperties}
              >
                <h3 className="faq-q">{q.name}</h3>
                <p className="faq-a">{q.acceptedAnswer.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section-cta" id="pricing">
        <div className="container cta-inner" data-sr>
          <p className="eyebrow">— Talk to sales</p>
          <h2 className="display-2">Take the card out of the equation.</h2>
          <p className="body-1 section-sub centered">
            See Verix verify a live payment at your counter. Volume-based pricing,
            billed by settlement. Talk to our team about retail, gaming, restaurants,
            and beyond.
          </p>
          <div className="hero-cta centered" id="contact">
            <Link className="btn btn-violet" href="#contact">Talk to sales</Link>
            <Link className="btn btn-outline" href="#how">See how it works</Link>
          </div>
        </div>
      </section>
    </>
  );
}
