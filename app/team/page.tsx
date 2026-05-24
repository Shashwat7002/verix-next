import type { Metadata } from "next";
import Link from "next/link";

/* ─── Page-level SEO metadata ─── */
export const metadata: Metadata = {
  title: "The Verix Team",
  description:
    "Meet the five leaders behind Verix — the biometric credential replacing cards at the POS to end card fraud and chargebacks. CEO, CMO, COO, CTO, and CSO.",
  alternates: { canonical: "/team" },
  openGraph: {
    url: "/team",
    title: "The Verix Team — Biometric Payment Infrastructure Leadership",
    description:
      "Five specialists building the biometric credential that ends card fraud and chargebacks at every point of sale. Meet the Verix leadership.",
  },
  twitter: {
    title: "The Verix Team — Biometric Payment Infrastructure Leadership",
    description:
      "Five specialists. One mandate: make biometric verification the new standard at every POS.",
  },
};

/* ─── Page-level JSON-LD schemas ─── */
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Verix",
  url: "https://verix.example/",
  logo: "https://verix.example/logo.svg",
  description:
    "Verix is a biometric payment credential that replaces cards at the point of sale to eliminate card fraud and chargeback fraud.",
  sameAs: [
    "https://www.linkedin.com/company/verix",
    "https://x.com/verix",
  ],
  member: [
    {
      "@type": "OrganizationRole",
      member: { "@type": "Person", name: "Aryan Bhardwaj", jobTitle: "CEO & Co-Founder" },
      roleName: "CEO & Co-Founder",
      startDate: "2024",
    },
    {
      "@type": "OrganizationRole",
      member: { "@type": "Person", name: "Marcelo Long", jobTitle: "CMO & Founder" },
      roleName: "CMO & Founder",
      startDate: "2024",
    },
    {
      "@type": "OrganizationRole",
      member: { "@type": "Person", name: "Baibhav Das", jobTitle: "COO & Founder" },
      roleName: "COO & Founder",
      startDate: "2024",
    },
    {
      "@type": "OrganizationRole",
      member: { "@type": "Person", name: "Anirudh Jaiswal", jobTitle: "CTO & Co-Founder" },
      roleName: "CTO & Co-Founder",
      startDate: "2024",
    },
    {
      "@type": "OrganizationRole",
      member: { "@type": "Person", name: "Joshua Carson", jobTitle: "CSO" },
      roleName: "CSO",
      startDate: "2024",
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://verix.example/" },
    { "@type": "ListItem", position: 2, name: "Team", item: "https://verix.example/team" },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://verix.example/team",
  name: "The Verix Team — Biometric Payment Infrastructure Leadership",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://verix.example/" },
      { "@type": "ListItem", position: 2, name: "Team", item: "https://verix.example/team" },
    ],
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".team-hero h1", ".team-answer"],
  },
};

/* ─── Team member data ─── */
const team = [
  {
    initials: "AB",
    name: "Aryan Bhardwaj",
    role: "CEO & Co-Founder",
    bio: "Aryan leads Verix's strategy and execution across product, operations, and growth. He built Verix on a single conviction: physical commerce deserves the same fraud immunity as digital identity. Under his leadership, Verix is deploying biometric credential infrastructure at scale across retail, gaming, and hospitality.",
    delay: "0s",
  },
  {
    initials: "ML",
    name: "Marcelo Long",
    role: "CMO & Founder",
    bio: "Marcelo drives market positioning and operator adoption for Verix. He translates the complexity of biometric infrastructure into clear operator value — faster throughput, zero chargebacks, and verifiable compliance. His work ensures every operator understands exactly what they're getting before they sign.",
    delay: ".06s",
  },
  {
    initials: "BD",
    name: "Baibhav Das",
    role: "COO & Founder",
    bio: "Baibhav runs the operational engine behind Verix: deployment pipelines, operator onboarding, and cross-vertical partnerships. His background in high-throughput operations means Verix scales without losing precision — whether that's 10 terminals or 10,000.",
    delay: ".12s",
  },
  {
    initials: "AJ",
    name: "Anirudh Jaiswal",
    role: "CTO & Co-Founder",
    bio: "Anirudh architects the biometric matching pipeline at the core of Verix — 380 ms end-to-end, 1-in-1,000,000 false acceptance rate, ISO 30107, NIST FRVT, and FIDO2 compliant. He leads the engineering team building the credential layer that replaces physical cards at the point of sale.",
    delay: ".18s",
  },
  {
    initials: "JC",
    name: "Joshua Carson",
    role: "CSO",
    bio: "Joshua leads Verix's security posture — from liveness detection and anti-spoofing protocols to PCI DSS and GDPR+BIPA compliance frameworks. He ensures every credential Verix issues and every transaction it authorizes meets the highest global security standards.",
    delay: ".24s",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* ─── JSON-LD ─── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* ─── Hero ─── */}
      <section className="hero team-hero">
        <div className="container">
          <div className="team-hero-inner">
            <p
              className="eyebrow reveal"
              style={{ "--rd": "0s" } as React.CSSProperties}
            >
              — Leadership
            </p>
            <h1
              className="display-1 reveal"
              style={{ "--rd": ".07s" } as React.CSSProperties}
            >
              Built by the people
              <br />
              who ended fraud.
            </h1>
            <p
              className="body-1 hero-lede reveal team-answer"
              style={{ "--rd": ".14s" } as React.CSSProperties}
            >
              Verix was co-founded by Aryan Bhardwaj, Marcelo Long, Baibhav
              Das, and Anirudh Jaiswal — with Joshua Carson as CSO — to build
              the biometric credential that replaces cards at the point of sale
              and eliminates both card fraud and chargeback fraud.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Roles strip ─── */}
      <section className="strip" aria-label="Leadership roles">
        <div className="container">
          <ul className="strip-list">
            <li>Chief Executive Officer</li>
            <li>Chief Marketing Officer</li>
            <li>Chief Operating Officer</li>
            <li>Chief Technology Officer</li>
            <li>Chief Security Officer</li>
          </ul>
        </div>
      </section>

      {/* ─── Team section ─── */}
      <section className="section" id="team">
        <div className="container">
          <header className="section-head" data-sr="">
            <p className="eyebrow">— The team</p>
            <h2 className="display-2">Who is behind Verix?</h2>
            <p className="body-1 section-sub">
              Five operators and engineers who saw the same problem from
              different angles: the card is the attack surface. Remove the
              card, and both fraud vectors collapse.
            </p>
          </header>

          <ul className="team-grid">
            {team.map((member) => (
              <li
                key={member.initials}
                className="team-card"
                data-sr=""
                style={{ "--rd": member.delay } as React.CSSProperties}
              >
                <div className="team-avatar" aria-hidden="true">
                  {member.initials}
                </div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section section-cta" id="contact">
        <div className="container cta-inner">
          <p className="eyebrow">— Talk to sales</p>
          <h2 className="display-2">Deploy Verix at your terminals.</h2>
          <p className="body-1 section-sub centered">
            Volume-based pricing, billed by settlement. Talk to the team about
            retail, gaming, restaurants, and beyond.
          </p>
          <div className="hero-cta centered">
            <Link className="btn btn-violet" href="/#pricing">
              Talk to sales
            </Link>
            <Link className="btn btn-outline" href="/#how">
              See how it works
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
