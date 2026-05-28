"use client";

import { motion } from "motion/react";

type Direction = "up" | "left" | "right" | "fade" | "scale";
type Tag = "div" | "header" | "section" | "aside" | "p" | "li" | "article";

const VARIANTS = {
  up:    { hidden: { opacity: 0, y: 28 },                     visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -32 },                    visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x:  32 },                    visible: { opacity: 1, x: 0 } },
  fade:  { hidden: { opacity: 0 },                             visible: { opacity: 1 } },
  scale: { hidden: { opacity: 0, scale: 0.93, y: 16 },        visible: { opacity: 1, scale: 1, y: 0 } },
};

const TAG_MAP = {
  div:     motion.div,
  header:  motion.header,
  section: motion.section,
  aside:   motion.aside,
  p:       motion.p,
  li:      motion.li,
  article: motion.article,
} as const;

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: Direction;
  amount?: number;
  once?: boolean;
  tag?: Tag;
  style?: React.CSSProperties;
  id?: string;
  "aria-label"?: string;
}

export default function Reveal({
  children,
  delay = 0,
  duration = 0.65,
  className,
  direction = "up",
  amount = 0.1,
  once = true,
  tag = "div",
  style,
  id,
  "aria-label": ariaLabel,
}: RevealProps) {
  const MotionTag = TAG_MAP[tag];
  const variants = VARIANTS[direction];

  return (
    <MotionTag
      className={className}
      id={id}
      aria-label={ariaLabel}
      style={style}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ duration, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </MotionTag>
  );
}
