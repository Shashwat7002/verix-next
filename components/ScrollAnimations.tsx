"use client";

import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    /* ── Hero dot-grid parallax ── */
    const heroBg = document.querySelector<HTMLElement>(".hero-bg");
    if (heroBg && !reduced) {
      let ticking = false;
      const onScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            heroBg.style.transform = `translateY(${window.scrollY * 0.18}px)`;
            ticking = false;
          });
          ticking = true;
        }
      };
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    /* ── Stat counter (ease-out-cubic, text-node safe) ── */
    const statsCard = document.querySelector(".stats-card");
    if (statsCard && !reduced && "IntersectionObserver" in window) {
      const counters = Array.from(
        statsCard.querySelectorAll<HTMLElement>("[data-count]")
      );

      const animateCount = (el: HTMLElement) => {
        const target = parseInt(el.dataset.count ?? "0", 10);
        const duration = 1300;
        const startTime = performance.now();
        el.childNodes[0].nodeValue = "0";
        const tick = (now: number) => {
          const p = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.childNodes[0].nodeValue = String(Math.round(eased * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      };

      const statsIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            counters.forEach(animateCount);
            statsIo.disconnect();
          });
        },
        { threshold: 0.6 }
      );
      statsIo.observe(statsCard);
    }

    /* ── Scroll-reveal (IntersectionObserver) ── */
    if ("IntersectionObserver" in window) {
      const els = Array.from(document.querySelectorAll("[data-sr]"));
      if (els.length) {
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              entry.target.classList.add("sr-visible");
              io.unobserve(entry.target);
            });
          },
          { threshold: 0.1, rootMargin: "0px 0px -48px 0px" }
        );
        els.forEach((el) => io.observe(el));
      }
    }
  }, []);

  return null;
}
