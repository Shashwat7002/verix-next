import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

/* ─── Fonts (next/font eliminates render-blocking Google Fonts request) ─── */
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

/* ─── Root metadata (inherited / overridden per page) ─── */
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://verix.example"
  ),
  title: {
    default: "Verix — Biometric Payments That End Card & Chargeback Fraud",
    template: "%s | Verix",
  },
  description:
    "Verix turns a shopper's face into their payment credential at the POS — ending stolen-card fraud and chargeback fraud for retail, gaming, restaurants, and more.",
  authors: [{ name: "Verix" }],
  creator: "Verix",
  publisher: "Verix",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    siteName: "Verix",
    title: "Verix — Biometric Payments That End Card & Chargeback Fraud",
    description:
      "A payment credential bound to the cardholder's face. Nothing to steal or clone, and proof the real account holder approved every charge — so card fraud and chargeback fraud both stop.",
    images: [{ url: "/og-cover.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Verix — Biometric Payments That End Card & Chargeback Fraud",
    description:
      "Pay by face at the POS. No card to steal, and biometric proof that defeats chargeback fraud.",
    images: ["/og-cover.png"],
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 36'%3E%3Cpath d='M5 6 20 30 35 6' fill='none' stroke='%235B47E0' stroke-width='4.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
  },
};

/* ─── Site-wide JSON-LD (entity declaration — server-rendered) ─── */
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Verix",
  url: "https://verix.example/",
  logo: "https://verix.example/logo.svg",
  description:
    "Verix is a biometric payment credential that replaces cards at the point of sale to eliminate card fraud and chargeback fraud.",
  sameAs: ["https://www.linkedin.com/company/verix", "https://x.com/verix"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Verix",
  url: "https://verix.example/",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Synchronous class hook enables scroll-reveal CSS before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ScrollAnimations />
      </body>
    </html>
  );
}
