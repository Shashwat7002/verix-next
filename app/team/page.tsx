import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { StaggerContainer, StaggerCard } from "@/components/motion/StaggerGrid";

/* ─── Page-level SEO metadata ─── */
export const metadata: Metadata = {
  title: "The Verix Team",
  description:
    "Meet the leadership team behind Verix — the biometric credential replacing cards at the POS to end card fraud and chargebacks. CEO, Presidents, CMO, COO, CPTO, and CSO.",
  alternates: { canonical: "/team" },
  openGraph: {
    url: "/team",
    title: "The Verix Team — Biometric Payment Infrastructure Leadership",
    description:
      "Eight specialists building the biometric credential that ends card fraud and chargebacks at every point of sale. Meet the Verix leadership.",
  },
  twitter: {
    title: "The Verix Team — Biometric Payment Infrastructure Leadership",
    description:
      "Eight specialists. One mandate: make biometric verification the new standard at every POS.",
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
      member: { "@type": "Person", name: "Anirudh Jaiswal", jobTitle: "CPTO & Co-Founder" },
      roleName: "CPTO & Co-Founder",
      startDate: "2024",
    },
    {
      "@type": "OrganizationRole",
      member: { "@type": "Person", name: "Shashwat Choudhary", jobTitle: "President, Technology" },
      roleName: "President, Technology",
      startDate: "2024",
    },
    {
      "@type": "OrganizationRole",
      member: { "@type": "Person", name: "Hrittik Chatterjee", jobTitle: "President, Product" },
      roleName: "President, Product",
      startDate: "2024",
    },
    {
      "@type": "OrganizationRole",
      member: { "@type": "Person", name: "Rahul Sundhar", jobTitle: "President, Partnership Alliances" },
      roleName: "President, Partnership Alliances",
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
    role: "CPTO & Co-Founder",
    bio: "Anirudh architects the biometric matching pipeline at the core of Verix — 380 ms end-to-end, 1-in-1,000,000 false acceptance rate, ISO 30107, NIST FRVT, and FIDO2 compliant. He leads the engineering team building the credential layer that replaces physical cards at the point of sale.",
    delay: ".18s",
  },
  {
    initials: "SC",
    name: "Shashwat Choudhary",
    role: "President, Technology",
    bio: "Shashwat oversees Verix's commercial and strategic direction — from pilot deployments to investor relations and market expansion. He works across every vertical Verix enters, ensuring the business scales with the same precision as the technology.",
    delay: ".24s",
  },
  {
    initials: "HC",
    name: "Hrittik Chatterjee",
    role: "President, Product",
    bio: "Hrittik leads product strategy and roadmap at Verix — defining how biometric infrastructure translates into operator and consumer experiences. He bridges the gap between engineering and market, ensuring every product decision is grounded in real deployment data.",
    delay: ".30s",
  },
  {
    initials: "RS",
    name: "Rahul Sundhar",
    role: "President, Partnership Alliances",
    bio: "Rahul drives strategic alliances and partnership ecosystems across Verix’s target verticals — from payments processors and terminal manufacturers to enterprise retail and hospitality groups. His work builds the commercial infrastructure that enables Verix to scale through channel and co-go-to-market partnerships.",
    delay: ".36s",
  },
  {
    initials: "JC",
    name: "Joshua Carson",
    role: "CSO",
    bio: "Joshua leads Verix's security posture — from liveness detection and anti-spoofing protocols to PCI DSS and GDPR+BIPA compliance frameworks. He ensures every credential Verix issues and every transaction it authorizes meets the highest global security standards.",
    delay: ".42s",
  },
];


/* ─── Board member data ─── */
const boardMembers = [
  {
    initials: "BD",
    name: "Bibek Das",
    role: "Board Member",
    company: "Visa",
    companyTitle: "Senior Director, Product Management, Strategy & Commercialization",
    bio: "Bibek brings over 25 years of product leadership at Visa, where he has driven strategy and commercialization across payment infrastructure at global scale. His background spans dispute resolution product development and go-to-market execution in payments — making him a naturally positioned advisor as Verix scales its credential layer across enterprise operators.",
  },
  {
    initials: "AB",
    name: "Arun Bhardwaj",
    role: "Board Member",
    company: "Victoria’s Secret & Co",
    companyTitle: "President, International",
    bio: "Arun leads international operations at Victoria’s Secret & Co., with nearly three decades of retail expansion experience across Asia Pacific — including senior roles at Levi Strauss & Co. and Starbucks Coffee Company. His expertise in scaling consumer-facing retail operations across global markets brings strategic depth to Verix as the company pursues enterprise deployment across hospitality, fashion, and multi-location retail verticals.",
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
              who will end fraud.
            </h1>
            <p
              className="body-1 hero-lede reveal team-answer"
              style={{ "--rd": ".14s" } as React.CSSProperties}
            >
              Verix was co-founded by Aryan Bhardwaj and Anirudh Jaiswal
              — with Marcelo Long, Baibhav Das, Shashwat Choudhary, Hrittik
              Chatterjee, Rahul Sundhar, and Joshua Carson — to build
              the biometric credential that replaces cards at the point of sale
              and eliminates both card fraud and chargeback fraud.
            </p>
          </div>
        </div>
      </section>


      {/* ─── Team section ─── */}
      <section className="section" id="team">
        <div className="container">
          <Reveal tag="header" className="section-head">
            <p className="eyebrow">— The team</p>
            <h2 className="display-2">Who is behind Verix?</h2>
            <p className="body-1 section-sub">
              Eight operators and engineers who saw the same problem from
              different angles: the card is the attack surface. Remove the
              card, and both fraud vectors collapse.
            </p>
          </Reveal>

          <StaggerContainer tag="ul" className="team-grid" stagger={0.07}>
            {team.map((member) => (
              <StaggerCard
                key={member.initials}
                tag="li"
                className="team-card"
                liftY={6}
                liftShadow="0 16px 40px rgba(91,71,224,0.11)"
              >
                <div className="team-avatar" aria-hidden="true">
                  {member.initials}
                </div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </StaggerCard>
            ))}
          </StaggerContainer>
        </div>
      </section>


      {/* ─── Board members ─── */}
      <section className="section" id="board">
        <div className="container">
          <Reveal tag="header" className="section-head">
            <p className="eyebrow">— Board members</p>
            <h2 className="display-2">Strategic advisors.</h2>
            <p className="body-1 section-sub">
              Industry veterans from payments and global retail who guide Verix&apos;s
              commercial strategy and international expansion.
            </p>
          </Reveal>

          <StaggerContainer tag="ul" className="board-grid" stagger={0.07}>
            {boardMembers.map((member) => (
              <StaggerCard
                key={member.name}
                tag="li"
                className="team-card board-card"
                liftY={6}
                liftShadow="0 16px 40px rgba(91,71,224,0.11)"
              >
                <div className="team-avatar" aria-hidden="true">
                  {member.initials}
                </div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="board-company">
                  <strong>{member.company}</strong> &mdash; {member.companyTitle}
                </p>
                <p className="team-bio">{member.bio}</p>
              </StaggerCard>
            ))}
          </StaggerContainer>
        </div>
      </section>


      {/* ─── CTA ─── */}
      <section className="section section-cta" id="contact">
        <Reveal className="container cta-inner">
          <p className="eyebrow">— Talk to sales</p>
          <h2 className="display-2">Deploy Verix at your terminals.</h2>
          <p className="body-1 section-sub centered">
            Talk to the team about retail, gaming, restaurants, and beyond.
          </p>
          <div className="hero-cta centered">
            <Link className="btn btn-violet" href="/merchants">
              Talk to sales
            </Link>
            <Link className="btn btn-outline" href="/#how">
              See how it works
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
