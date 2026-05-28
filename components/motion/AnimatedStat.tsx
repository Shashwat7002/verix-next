"use client";

/**
 * AnimatedStat — counts from 0 to `value` using an ease-out curve
 * when the element enters the viewport.
 */

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "motion/react";

interface Props {
  value: number;
  className?: string;
}

export default function AnimatedStat({ value, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(value);
      return;
    }

    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });

    return controls.stop;
  }, [isInView, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
