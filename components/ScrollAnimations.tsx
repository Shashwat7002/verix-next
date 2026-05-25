"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    /* ── Hero dot-grid parallax ── */
    const heroBg = document.querySelector<HTMLElement>(".hero-bg");
    let scrollHandler: (() => void) | null = null;

    if (heroBg && !reduced) {
      let ticking = false;
      scrollHandler = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            heroBg.style.transform = `translateY(${window.scrollY * 0.18}px)`;
            ticking = false;
          });
          ticking = true;
        }
      };
      window.addEventListener("scroll", scrollHandler, { passive: true });
    }

    /* ── Stat counter (ease-out-cubic, text-node safe) ── */
    const statsCard = document.querySelector(".stats-card");
    let statsIo: IntersectionObserver | null = null;

    if (statsCard && !reduced && "IntersectionObserver" in window) {
      const counters = Array.from(
        statsCard.querySelectorAll<HTMLElement>("[data-count]")
      );

      const animateCount = (el: HTMLElement) => {
        const target = parseInt(el.dataset.count ?? "0", 10);
        const duration = 1300;
        const startTime = performance.now();
        const node = el.childNodes[0];
        if (node) node.nodeValue = "0";
        const tick = (now: number) => {
          const p = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          if (node) node.nodeValue = String(Math.round(eased * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      };

      statsIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            counters.forEach(animateCount);
            statsIo!.disconnect();
          });
        },
        { threshold: 0.6 }
      );
      statsIo.observe(statsCard);
    }

    /* ── Scroll-reveal (IntersectionObserver) ── */
    let srIo: IntersectionObserver | null = null;

    if ("IntersectionObserver" in window) {
      const els = Array.from(document.querySelectorAll("[data-sr]"));
      if (els.length) {
        srIo = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              entry.target.classList.add("sr-visible");
              srIo!.unobserve(entry.target);
            });
          },
          /* slightly generous margin so content appears just before
             it reaches the viewport edge — no jarring late pops */
          { threshold: 0.06, rootMargin: "0px 0px -24px 0px" }
        );
        els.forEach((el) => srIo!.observe(el));
      }
    }

    /* ── Cleanup: disconnect observers + remove scroll listener ── */
    return () => {
      if (scrollHandler) window.removeEventListener("scroll", scrollHandler);
      statsIo?.disconnect();
      srIo?.disconnect();
    };
  }, [pathname]); /* re-run on every client-side navigation */

  return null;
}
