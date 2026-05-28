"use client";

/**
 * ScrollProgressBar — thin violet line fixed at the very top of the viewport.
 * Fills left-to-right as the user scrolls down the page.
 */

import { useScroll, motion } from "motion/react";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="scroll-progress-bar"
      aria-hidden="true"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
