"use client";

/**
 * ScrollAnimations — lightweight client-side effects that can't be done
 * declaratively in Motion.dev components:
 *
 *  • Hero dot-grid parallax (translateY on scroll)
 *
 * All IntersectionObserver-based scroll-reveal and counter logic has been
 * replaced by Motion.dev's whileInView + AnimatedStat components.
 */

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

    /* ── Legacy CSS scroll-reveal (data-sr elements not wrapped in Motion) ── */
    /* Only applies to .step elements which have the ::before border animation */
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
          { threshold: 0.06, rootMargin: "0px 0px -24px 0px" }
        );
        els.forEach((el) => srIo!.observe(el));
      }
    }

    return () => {
      if (scrollHandler) window.removeEventListener("scroll", scrollHandler);
      srIo?.disconnect();
    };
  }, [pathname]);

  return null;
}
