"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

const VMark = () => (
  <svg className="vmark" viewBox="0 0 40 36" fill="none" aria-hidden="true">
    <path
      d="M5 6 L20 30 L35 6"
      stroke="currentColor"
      strokeWidth="4.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  const close = () => setOpen(false);

  /* ── Highlight #how on homepage via IntersectionObserver ── */
  useEffect(() => {
    if (pathname !== "/") { setActiveSection(""); return; }
    const sections = ["how", "proof", "industry", "faq"];
    const observers: IntersectionObserver[] = [];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -40% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, [pathname]);

  function isActive(href: string) {
    if (href.startsWith("/#")) return pathname === "/" && activeSection === href.slice(2);
    return pathname === href;
  }

  /* ── Scroll awareness ── */
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 56);
    update(); // set on mount in case page loads mid-scroll
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  /* ── Lock body scroll when mobile nav is open ── */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`} id="top">
      <div className="container header-inner">
        <Link className="wordmark" href="/" aria-label="Verix home">
          <VMark />
          <span className="wordmark-rule" aria-hidden="true" />
          <span className="wordmark-text">VERIX</span>
        </Link>

        <nav className="primary-nav" aria-label="Primary">
          <Link href="/#how"        aria-current={isActive("/#how")        ? "page" : undefined}>How it works</Link>
          <Link href="/consumers"   aria-current={isActive("/consumers")   ? "page" : undefined}>For Consumers</Link>
          <Link href="/merchants"   aria-current={isActive("/merchants")   ? "page" : undefined}>For Merchants</Link>
          <Link href="/partners"    aria-current={isActive("/partners")    ? "page" : undefined}>Partners</Link>
          <Link href="/team"        aria-current={isActive("/team")        ? "page" : undefined}>Team</Link>
        </nav>

        <div className="header-actions">
          <Link className="btn btn-ink" href="/merchants">
            Talk to sales
          </Link>
          <button
            className={`nav-toggle${open ? " open" : ""}`}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* ── Animated mobile nav ── */}
      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile-nav"
            id="mobile-nav"
            aria-label="Mobile navigation"
            className="mobile-nav open"
            initial={{ opacity: 0, y: -12, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -12, height: 0 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.04 } },
              }}
              className="mobile-nav-inner"
            >
              {[
                { href: "/#how",              label: "How it works" },
                { href: "/consumers",         label: "For Consumers" },
                { href: "/merchants",         label: "For Merchants" },
                { href: "/partners",          label: "Partners" },
                { href: "/team",              label: "Team" },
              ].map(({ href, label }) => (
                <motion.div
                  key={href}
                  variants={{
                    hidden:   { opacity: 0, x: -12 },
                    visible:  { opacity: 1, x: 0, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } },
                  }}
                >
                  <Link href={href} onClick={close} aria-current={isActive(href) ? "page" : undefined}>{label}</Link>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  hidden:  { opacity: 0, x: -12 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                <Link className="btn btn-violet" href="/merchants" onClick={close}>
                  Talk to sales
                </Link>
              </motion.div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
