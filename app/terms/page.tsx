import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Verix",
  description:
    "Terms governing use of the Verix website. Includes disclaimers, limitations of liability, and intellectual property notices.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = "May 28, 2025";
const CONTACT_EMAIL = "legal@verix.com";

export default function TermsPage() {
  return (
    <main className="legal-page">
      <div className="container legal-container">
        {/* Header */}
        <header className="legal-header">
          <p className="eyebrow">— Legal</p>
          <h1 className="display-2">Terms of Service</h1>
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
            <li><a href="#acceptance" className="legal-link">1. Acceptance of terms</a></li>
            <li><a href="#website-use" className="legal-link">2. Use of this website</a></li>
            <li><a href="#forward-looking" className="legal-link">3. Forward-looking statements</a></li>
            <li><a href="#no-investment-advice" className="legal-link">4. Not investment advice</a></li>
            <li><a href="#ip" className="legal-link">5. Intellectual property</a></li>
            <li><a href="#disclaimer" className="legal-link">6. Disclaimer of warranties</a></li>
            <li><a href="#liability" className="legal-link">7. Limitation of liability</a></li>
            <li><a href="#third-party-links" className="legal-link">8. Third-party links</a></li>
            <li><a href="#indemnification" className="legal-link">9. Indemnification</a></li>
            <li><a href="#governing-law" className="legal-link">10. Governing law</a></li>
            <li><a href="#changes" className="legal-link">11. Changes to these terms</a></li>
            <li><a href="#contact-us" className="legal-link">12. Contact us</a></li>
          </ol>
        </nav>

        {/* Body */}
        <div className="legal-body">

          <section id="acceptance" className="legal-section">
            <h2 className="legal-h2">1. Acceptance of terms</h2>
            <p>
              By accessing or using the Verix website (the &ldquo;Site&rdquo;), you agree
              to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not
              agree to these Terms, please do not use the Site.
            </p>
            <p>
              These Terms apply to all visitors, including individuals who submit forms
              to join the waitlist, request a merchant pilot, or request an investor
              briefing. They govern your use of this informational website only — they
              do not govern the Verix payment credential product, which is subject to
              separate merchant and end-user agreements.
            </p>
          </section>

          <section id="website-use" className="legal-section">
            <h2 className="legal-h2">2. Use of this website</h2>
            <p>You agree to use this Site only for lawful purposes and in a way that does not:</p>
            <ul className="legal-list">
              <li>Infringe the rights of any third party.</li>
              <li>Transmit unsolicited commercial communications.</li>
              <li>Attempt to gain unauthorised access to any part of the Site or its infrastructure.</li>
              <li>Interfere with the availability or performance of the Site.</li>
              <li>Scrape, harvest, or extract data from the Site without our prior written consent.</li>
            </ul>
            <p>
              We reserve the right to restrict or terminate access to the Site for any user
              who breaches these Terms.
            </p>
          </section>

          <section id="forward-looking" className="legal-section">
            <h2 className="legal-h2">3. Forward-looking statements</h2>
            <p>
              Certain statements on this Site — including statements about Verix&rsquo;s
              plans, projections, pipeline, market opportunity, product roadmap, and
              anticipated commercial outcomes — are forward-looking statements. These
              statements involve known and unknown risks, uncertainties, and other factors
              that may cause actual results, performance, or achievements to differ
              materially from those expressed or implied.
            </p>
            <p>
              Forward-looking statements are based on current expectations and assumptions
              and speak only as of the date on which they are made. Verix undertakes no
              obligation to update or revise any forward-looking statement after publication.
              Market size figures cited on the Site (including references to the projected
              biometric payments market and annual card fraud losses) are sourced from
              third-party industry reports and are provided for context only — they do not
              represent Verix&rsquo;s projections of its own performance.
            </p>
          </section>

          <section id="no-investment-advice" className="legal-section">
            <h2 className="legal-h2">4. Not investment advice</h2>
            <p>
              Nothing on this Site constitutes an offer, solicitation, or recommendation
              to buy or sell any security or financial instrument, or to participate in
              any particular investment strategy. The information provided — including
              descriptions of Verix&rsquo;s business, technology, traction, and market
              opportunity — is for informational purposes only and does not constitute
              investment advice.
            </p>
            <p>
              Any investment in Verix involves significant risks, including the risk of
              total loss of capital. Prospective investors should conduct their own due
              diligence and consult with independent financial, legal, and tax advisers
              before making any investment decision.
            </p>
          </section>

          <section id="ip" className="legal-section">
            <h2 className="legal-h2">5. Intellectual property</h2>
            <p>
              All content on this Site — including text, graphics, logos, icons, and
              software — is the property of Verix or its licensors and is protected by
              applicable intellectual property laws. You may not reproduce, distribute,
              modify, or create derivative works from any Site content without our prior
              written permission.
            </p>
            <p>
              The Verix name, wordmark, and V-mark logo are proprietary marks of Verix.
              Nothing on the Site grants any licence to use our trademarks.
            </p>
          </section>

          <section id="disclaimer" className="legal-section">
            <h2 className="legal-h2">6. Disclaimer of warranties</h2>
            <p>
              THIS SITE AND ITS CONTENT ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
              AVAILABLE&rdquo; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. TO THE
              FULLEST EXTENT PERMITTED BY APPLICABLE LAW, VERIX DISCLAIMS ALL WARRANTIES,
              INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
              FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p>
              We do not warrant that the Site will be uninterrupted, error-free, or free
              of viruses or other harmful components, or that any information on the Site
              is accurate, complete, or current.
            </p>
          </section>

          <section id="liability" className="legal-section">
            <h2 className="legal-h2">7. Limitation of liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, VERIX AND ITS DIRECTORS,
              OFFICERS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES — INCLUDING LOSS OF
              PROFITS, DATA, OR GOODWILL — ARISING OUT OF OR IN CONNECTION WITH YOUR USE
              OF THIS SITE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p>
              IN NO EVENT SHALL VERIX&rsquo;S AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS
              ARISING FROM OR RELATING TO THIS SITE EXCEED ONE HUNDRED DOLLARS (USD $100).
            </p>
            <p>
              Some jurisdictions do not allow the exclusion or limitation of certain
              warranties or liabilities. In those jurisdictions, our liability is limited
              to the greatest extent permitted by law.
            </p>
          </section>

          <section id="third-party-links" className="legal-section">
            <h2 className="legal-h2">8. Third-party links</h2>
            <p>
              This Site may contain links to third-party websites. These links are provided
              for convenience only. Verix does not endorse, control, or assume responsibility
              for the content, privacy practices, or terms of any third-party site. Visiting
              a linked site is at your own risk.
            </p>
          </section>

          <section id="indemnification" className="legal-section">
            <h2 className="legal-h2">9. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Verix and its officers,
              directors, employees, and agents from any claim, damage, loss, or expense
              (including reasonable legal fees) arising out of your use of the Site or your
              violation of these Terms.
            </p>
          </section>

          <section id="governing-law" className="legal-section">
            <h2 className="legal-h2">10. Governing law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of
              the State of Delaware, United States, without regard to its conflict-of-law
              principles. Any dispute arising under these Terms shall be subject to the
              exclusive jurisdiction of the state and federal courts located in Delaware.
            </p>
            <p>
              If you are accessing this Site from a jurisdiction with mandatory consumer
              protection laws that cannot be excluded by contract, those laws will apply
              to the extent required.
            </p>
          </section>

          <section id="changes" className="legal-section">
            <h2 className="legal-h2">11. Changes to these terms</h2>
            <p>
              We may revise these Terms at any time. When we do, we will update the
              &ldquo;Effective date&rdquo; at the top of this page. Your continued use of
              the Site after a revision constitutes your acceptance of the updated Terms.
              We encourage you to review this page periodically.
            </p>
          </section>

          <section id="contact-us" className="legal-section">
            <h2 className="legal-h2">12. Contact us</h2>
            <p>
              Questions about these Terms should be directed to:
            </p>
            <address className="legal-address">
              <strong>Verix — Legal</strong><br />
              <a href={`mailto:${CONTACT_EMAIL}`} className="legal-link">{CONTACT_EMAIL}</a>
            </address>
            <p style={{ marginTop: "24px" }}>
              See also our{" "}
              <Link href="/privacy" className="legal-link">Privacy Policy</Link>.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
