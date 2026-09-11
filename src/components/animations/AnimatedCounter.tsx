"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * Renders a value like "50+", "100%", or "3+" and animates the numeric part
 * counting up from 0 when it enters the viewport. Non-numeric values (e.g.
 * "—") render as-is with no animation.
 */
export function AnimatedCounter({ value, duration = 1.4 }: { value: string; duration?: number }) {
  const match = value.match(/^(-?\d+(?:\.\d+)?)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(match ? "0" : value);

  useEffect(() => {
    if (!match) return;
    if (!inView) return;

    const target = parseFloat(match[1] ?? "0");
    const suffix = match[2] ?? "";

    if (prefersReducedMotion) {
      setDisplay(`${match[1]}${suffix}`);
      return;
    }

    let raf: number;
    const start = performance.now();
    const durationMs = duration * 1000;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const current = target * eased;
      const formatted = Number.isInteger(target) ? Math.round(current).toString() : current.toFixed(1);
      setDisplay(`${formatted}${suffix}`);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return <span ref={ref}>{display}</span>;
}
