"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

/**
 * Wraps children in a whileInView reveal. Defaults to fadeUp — the workhorse
 * entrance used across the site — but accepts any variant from lib/motion.
 * Runs once per element; respects prefers-reduced-motion globally via the
 * reduced-motion media query handled in globals.css / framer-motion defaults.
 */
export function Reveal({
  children,
  variants = fadeUp,
  delay = 0,
  className,
  as: Component = "div",
}: {
  children: ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
  as?: "div" | "span";
}) {
  const MotionComponent = Component === "span" ? motion.span : motion.div;
  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      transition={delay ? { delay } : undefined}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}
