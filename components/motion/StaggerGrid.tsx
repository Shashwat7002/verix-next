"use client";

/**
 * StaggerGrid — orchestrated entrance + optional hover lift for card grids.
 *
 * Usage:
 *   <StaggerContainer tag="ul" className="industry-grid">
 *     <StaggerCard tag="li" className="industry-card">…</StaggerCard>
 *     <StaggerCard tag="li" className="industry-card">…</StaggerCard>
 *   </StaggerContainer>
 *
 * StaggerItem — same as StaggerCard but without hover lift (for FAQ items, steps, etc.)
 */

import { motion, type Variants } from "motion/react";

/* ── Item variants — entrance spring ── */
const ITEM_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ── Container variants — orchestrates stagger ── */
function makeContainerVariants(stagger: number): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: 0.05,
      },
    },
  };
}

/* ─────────────────────────────────────────
   StaggerContainer
───────────────────────────────────────── */
type ContainerTag = "div" | "ul" | "ol" | "dl" | "section";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  tag?: ContainerTag;
  stagger?: number;
  amount?: number;
  once?: boolean;
  style?: React.CSSProperties;
}

const C_TAG_MAP = {
  div:     motion.div,
  ul:      motion.ul,
  ol:      motion.ol,
  dl:      motion.dl,
  section: motion.section,
} as const;

export function StaggerContainer({
  children,
  className,
  tag = "div",
  stagger = 0.08,
  amount = 0.05,
  once = true,
  style,
}: ContainerProps) {
  const MotionTag = C_TAG_MAP[tag];
  const containerVariants = makeContainerVariants(stagger);

  return (
    <MotionTag
      className={className}
      style={style}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </MotionTag>
  );
}

/* ─────────────────────────────────────────
   StaggerCard — entrance + hover lift
───────────────────────────────────────── */
type CardTag = "div" | "li" | "article" | "aside";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  tag?: CardTag;
  liftY?: number;
  liftShadow?: string;
  style?: React.CSSProperties;
  darkBg?: boolean;
}

const K_TAG_MAP = {
  div:     motion.div,
  li:      motion.li,
  article: motion.article,
  aside:   motion.aside,
} as const;

export function StaggerCard({
  children,
  className,
  tag = "div",
  liftY = 7,
  liftShadow,
  style,
  darkBg = false,
}: CardProps) {
  const MotionTag = K_TAG_MAP[tag];
  const shadow = liftShadow ?? (darkBg
    ? "0 20px 48px rgba(0,0,0,0.45)"
    : "0 16px 48px rgba(91,71,224,0.13)");

  return (
    <MotionTag
      className={className}
      style={style}
      variants={ITEM_VARIANTS}
      whileHover={{
        y: -liftY,
        boxShadow: shadow,
        transition: { type: "spring", stiffness: 320, damping: 22 },
      }}
      whileTap={{ scale: 0.985 }}
    >
      {children}
    </MotionTag>
  );
}

/* ─────────────────────────────────────────
   StaggerItem — entrance only (no hover)
───────────────────────────────────────── */
type ItemTag = "div" | "li" | "article" | "dt" | "dd" | "p";

interface ItemProps {
  children: React.ReactNode;
  className?: string;
  tag?: ItemTag;
  style?: React.CSSProperties;
}

const I_TAG_MAP = {
  div:     motion.div,
  li:      motion.li,
  article: motion.article,
  dt:      motion.dt,
  dd:      motion.dd,
  p:       motion.p,
} as const;

export function StaggerItem({ children, className, tag = "div", style }: ItemProps) {
  const MotionTag = I_TAG_MAP[tag];
  return (
    <MotionTag className={className} style={style} variants={ITEM_VARIANTS}>
      {children}
    </MotionTag>
  );
}
