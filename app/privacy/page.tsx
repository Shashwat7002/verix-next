import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Verix",
  description:
    "How Verix collects, uses, and protects your personal information. GDPR, CCPA, and BIPA disclosures.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = "May 28, 2025";
const CONTACT_EMAIL = "privacy@verix.com";

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <div className="container legal-container">
        {/* Header */}
        <header className="legal-header">
          <p className="eyebrow">— Legal</p>
          <h1 className="display-2">Privacy Policy</h1>
          <p className="legal-meta">
            Effective date: {EFFECTIVE_DATE}
            <span className="legal-meta-sep" aria-hidden="true"> · </span>
            Questions?{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="legal-link">
              {CONTACT_EMAIL}
            </a>
          </p>
        </header>

        <nav className="legal-toc" aria-label="Table of contents">
          <p className="caps-label" style={{ marginBottom: "12px" }}>Contents</p>
          <ol className="legal-toc-list">
            <li><a href="#who-we-are" className="legal-link">1. Who we are</a></li>
            <li><a href="#data-collected" className="legal-link">2. Information we collect</a></li>
            <li><a href="#how-we-use" className="legal-link">3. How we use your information</a></li>
            <li><a href="#third-parties" className="legal-link">4. Third-party service providers</a></li>
            <li><a href="#biometric" className="legal-link">5. Biometric data (BIPA)</a></li>
            <li><a href="#retention" className="legal-link">6. Data retention</a></li>
            <li><a href="#your-rights" className="legal-link">7. Your rights</a></li>
            <li><a href="#gdpr" className="legal-link">8. EU/UK GDPR</a></li>
            <li><a href="#ccpa" className="legal-link">9. California residents (CCPA)</a></li>
            <li><a href="#security" className="legal-link">10. Security</a></li>
            <li><a href="#children" className="legal-link">11. Children</a></li>
            <li><a href="#changes" className="legal-link">12. Changes to this policy</a></li>
            <li><a href="#contact-us" className="legal-link">13. Contact us</a></li>
          </ol>
        </nav>

        {/* Body */}
        <div className="legal-body">

          <section id="who-we-are" className="legal-section">
            <h2 className="legal-h2">1. Who we are</h2>
            <p>
              Verix (&ldquo;Verix,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) provides biometric
              payment credential infrastructure for physical point-of-sale environments.
              This Privacy Policy explains how we handle personal information collected
              through our website, waitlist forms, merchant enquiry forms, and investor
              briefing requests. It does not cover the biometric credential product itself
              — that is governed by separate terms agreed with each merchant operator.
            </p>
          </section>

          <section id="data-collected" className="legal-section">
            <h2 className="legal-h2">2. Information we collect</h2>

            <h3 className="legal-h3">2.1 Information you provide directly</h3>
            <p>When you complete a form on this website, we collect:</p>
            <ul className="legal-list">
              <li><strong>Waitlist form:</strong> full name, email address, phone number.</li>
              <li>
                <strong>Merchant enquiry form:</strong> full name, work email address, job
                title / role, company name, and a free-text message describing your setup.
              </li>
              <li>
                <strong>Investor / partner briefing form:</strong> full name, work email
                address, fund or organisation name, job title / role, nature of inquiry,
                and a free-text message.
              </li>
            </ul>
            <p>All form fields are mandatory. We do not collect payment card details on this website.</p>

            <h3 className="legal-h3">2.2 Information collected automatically</h3>
            <p>
              Our hosting provider (Vercel) collects standard server-side access logs that
              may include your IP address, browser user-agent, referring URL, and the date
              and time of each request. We do not use cookies for tracking or advertising
              on this website. No analytics scripts, retargeting pixels, or session-recording
              tools are deployed.
            </p>
          </section>

          <section id="how-we-use" className="legal-section">
            <h2 className="legal-h2">3. How we use your information</h2>
            <p>We use the information you submit exclusively to:</p>
            <ul className="legal-list">
              <li>
                Respond to your enquiry and provide you with information about Verix
                products, pilots, or investment briefings relevant to your request.
              </li>
              <li>
                Follow up with waitlist registrants about kiosk enrollment availability
                in their region.
              </li>
              <li>
                Maintain internal records of business leads and investor enquiries.
              </li>
            </ul>
            <p>
              We do not sell, rent, or trade your personal information to any third party
              for their own marketing purposes. We do not use your information for automated
              decision-making or profiling.
            </p>
          </section>

          <section id="third-parties" className="legal-section">
            <h2 className="legal-h2">4. Third-party service providers</h2>
            <p>
              To operate this website and process form submissions, we rely on the following
              service providers. Each acts as a data processor on our behalf:
            </p>
            <table className="legal-table">
              <thead>
                <tr>
                  <th>Provider</th>
                  <th>Purpose</th>
                  <th>Data processed</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Vercel Inc.</td>
                  <td>Website hosting &amp; serverless functions</td>
                  <td>All form data in transit; server access logs</td>
                  <td>USA (global CDN)</td>
                </tr>
                <tr>
                  <td>Google LLC (Google Sheets API)</td>
                  <td>Lead management — form submissions stored in a private spreadsheet</td>
                  <td>Name, email, phone, company, message fields</td>
                  <td>USA</td>
                </tr>
              </tbody>
            </table>
            <p>
              Both providers are certified under recognised data transfer frameworks.
              Where data is transferred from the European Economic Area or UK to the USA,
              we rely on standard contractual clauses and applicable adequacy decisions.
            </p>
          </section>

          <section id="biometric" className="legal-section">
            <h2 className="legal-h2">5. Biometric data (BIPA)</h2>
            <p>
              <strong>This website does not collect biometric information.</strong> Biometric
              facial data is processed only when a shopper enrolls through a Verix-enabled
              terminal or merchant kiosk as part of the payment credential product — not
              through this website.
            </p>
            <p>
              When the Verix payment credential product is deployed by a merchant partner,
              the following principles govern biometric data:
            </p>
            <ul className="legal-list">
              <li>
                <strong>No raw images stored.</strong> Enrollment creates a one-way
                mathematical template. Raw biometric data is never transmitted off the
                capture device.
              </li>
              <li>
                <strong>Explicit consent required.</strong> Shoppers provide written (or
                equivalent electronic) informed consent before any biometric data is
                collected, consistent with the Illinois Biometric Information Privacy Act
                (BIPA) and analogous state laws.
              </li>
              <li>
                <strong>Right to deletion.</strong> Shoppers may delete their biometric
                enrollment at any time through the Verix app or a participating merchant
                kiosk. Deletion is immediate and permanent.
              </li>
              <li>
                <strong>No sale of biometric data.</strong> Verix does not sell, lease,
                trade, or profit from biometric identifiers or information.
              </li>
              <li>
                <strong>Retention schedule.</strong> Biometric templates are deleted
                within three years of last use, or sooner upon the shopper&rsquo;s
                request or expiry of the applicable commercial relationship.
              </li>
            </ul>
            <p>
              Separate biometric data notices are provided to shoppers at the point of
              enrollment by the relevant merchant operator in accordance with applicable
              law.
            </p>
          </section>

          <section id="retention" className="legal-section">
            <h2 className="legal-h2">6. Data retention</h2>
            <p>
              We retain form submission data for as long as is reasonably necessary to
              follow up on your enquiry and maintain records of our business relationships.
              In practice, this means:
            </p>
            <ul className="legal-list">
              <li>
                <strong>Waitlist data:</strong> retained until your waitlist position is
                fulfilled or you request deletion, and for up to 24 months thereafter.
              </li>
              <li>
                <strong>Merchant and investor enquiry data:</strong> retained for up to
                36 months from the date of your enquiry, or longer where we have an ongoing
                business relationship with you.
              </li>
            </ul>
            <p>
              You may request deletion at any time by contacting us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="legal-link">{CONTACT_EMAIL}</a>.
              We will action deletion requests within 30 days.
            </p>
          </section>

          <section id="your-rights" className="legal-section">
            <h2 className="legal-h2">7. Your rights</h2>
            <p>
              Depending on your jurisdiction, you may have the right to:
            </p>
            <ul className="legal-list">
              <li><strong>Access</strong> a copy of the personal data we hold about you.</li>
              <li><strong>Correct</strong> inaccurate or incomplete personal data.</li>
              <li><strong>Delete</strong> your personal data (&ldquo;right to be forgotten&rdquo;).</li>
              <li><strong>Restrict</strong> or object to our processing of your data.</li>
              <li><strong>Portability</strong> — receive your data in a structured, machine-readable format.</li>
              <li><strong>Withdraw consent</strong> at any time where processing is based on consent.</li>
            </ul>
            <p>
              To exercise any of these rights, email{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="legal-link">{CONTACT_EMAIL}</a>.
              We will verify your identity before processing the request and respond within
              30 days (extendable by a further 60 days for complex requests, with notice).
            </p>
          </section>

          <section id="gdpr" className="legal-section">
            <h2 className="legal-h2">8. EU and UK GDPR</h2>
            <p>
              For individuals in the European Economic Area or the United Kingdom, the
              legal basis for processing your personal information is:
            </p>
            <ul className="legal-list">
              <li>
                <strong>Legitimate interests (Article 6(1)(f) GDPR)</strong> — to respond
                to business enquiries, maintain our waitlist, and conduct normal commercial
                communications. We have assessed that our legitimate interests are not
                overridden by your interests or fundamental rights in this context.
              </li>
              <li>
                <strong>Performance of a contract or pre-contractual steps (Article 6(1)(b))</strong> —
                where you have requested information about entering into a commercial
                relationship with Verix.
              </li>
            </ul>
            <p>
              Verix is the data controller in respect of the personal data collected on this
              website. If you have a concern about our processing, you have the right to lodge
              a complaint with the supervisory authority in your country of residence.
            </p>
          </section>

          <section id="ccpa" className="legal-section">
            <h2 className="legal-h2">9. California residents (CCPA / CPRA)</h2>
            <p>
              If you are a California resident, you have rights under the California Consumer
              Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA):
            </p>
            <ul className="legal-list">
              <li><strong>Right to know</strong> what personal information we collect, use, or disclose.</li>
              <li><strong>Right to delete</strong> personal information we have collected from you.</li>
              <li><strong>Right to correct</strong> inaccurate personal information.</li>
              <li><strong>Right to opt out</strong> of the sale or sharing of personal information. We do not sell or share personal information as defined under the CCPA.</li>
              <li><strong>Right to non-discrimination</strong> for exercising your CCPA rights.</li>
            </ul>
            <p>
              To exercise these rights, email{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="legal-link">{CONTACT_EMAIL}</a>{" "}
              with the subject line &ldquo;CCPA Request.&rdquo;
            </p>
            <p>
              Categories of personal information collected in the past 12 months: identifiers
              (name, email, phone number), professional information (employer, job title), and
              the contents of your message. We have not sold or shared any personal information
              with third parties for cross-context behavioural advertising.
            </p>
          </section>

          <section id="security" className="legal-section">
            <h2 className="legal-h2">10. Security</h2>
            <p>
              Form data is transmitted over TLS 1.3 and stored in a private, access-controlled
              Google Sheet accessible only to authorised Verix personnel. We apply
              reasonable administrative, technical, and physical safeguards consistent with
              the sensitivity of the data. No transmission over the internet is completely
              secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section id="children" className="legal-section">
            <h2 className="legal-h2">11. Children</h2>
            <p>
              This website is not directed to children under the age of 16. We do not
              knowingly collect personal information from anyone under 16. If you believe
              we have inadvertently collected information from a child, please contact us
              and we will delete it promptly.
            </p>
          </section>

          <section id="changes" className="legal-section">
            <h2 className="legal-h2">12. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will
              revise the &ldquo;Effective date&rdquo; at the top of this page. Material
              changes will be communicated to individuals who have submitted contact forms
              where we hold a current email address. Continued use of this website after
              a change constitutes acceptance of the updated policy.
            </p>
          </section>

          <section id="contact-us" className="legal-section">
            <h2 className="legal-h2">13. Contact us</h2>
            <p>
              Questions, requests, or complaints about this Privacy Policy should be
              directed to:
            </p>
            <address className="legal-address">
              <strong>Verix — Privacy</strong><br />
              <a href={`mailto:${CONTACT_EMAIL}`} className="legal-link">{CONTACT_EMAIL}</a>
            </address>
            <p style={{ marginTop: "24px" }}>
              See also our{" "}
              <Link href="/terms" className="legal-link">Terms of Service</Link>.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
