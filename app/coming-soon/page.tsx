export default function ComingSoonPage() {
  return (
    <>
      <style>{`
        .cs-root {
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: var(--ink, #0a0a0f);
          text-align: center;
          padding: 24px;
          gap: 0;
        }
        .cs-logo {
          margin-bottom: 48px;
        }
        .cs-eyebrow {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--violet, #5B47E0);
          margin-bottom: 24px;
        }
        .cs-heading {
          font-size: clamp(40px, 8vw, 80px);
          font-weight: 700;
          line-height: 1.05;
          color: #fff;
          margin: 0 0 28px;
          letter-spacing: -0.03em;
        }
        .cs-sub {
          font-size: clamp(16px, 2vw, 19px);
          color: rgba(255,255,255,0.55);
          max-width: 44ch;
          line-height: 1.6;
          margin: 0 auto 48px;
        }
        .cs-badge-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
        }
        .cs-badge {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 100px;
          padding: 6px 14px;
        }
        .cs-vmark {
          display: block;
          margin: 0 auto 16px;
        }
        .cs-wordmark {
          font-size: 22px;
          font-weight: 700;
          letter-spacing: -0.04em;
          color: #fff;
        }
      `}</style>

      <main className="cs-root">
        <div className="cs-logo">
          <svg className="cs-vmark" width="40" height="34" viewBox="4 8 48 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 14 L28 42 L46 14" stroke="#5B47E0" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="cs-wordmark">VERIX</span>
        </div>

        <p className="cs-eyebrow">— Something big is coming</p>

        <h1 className="cs-heading">
          Coming<br />Soon.
        </h1>

        <p className="cs-sub">
          We&apos;re making some updates. Check back shortly — the new experience will be worth it.
        </p>

        <div className="cs-badge-row">
          {["Biometric Payments", "PCI DSS Level 1", "Zero Card Data", "No Hardware Required"].map((b) => (
            <span key={b} className="cs-badge">{b}</span>
          ))}
        </div>
      </main>
    </>
  );
}
