import type { Transition, Variants } from "framer-motion";

/**
 * Timing bands, per the motion spec:
 *  - micro:    150-250ms  (icon nudges, underline reveals)
 *  - card:     200-350ms  (button/card hover)
 *  - section:  500-800ms  (section entrances)
 *  - hero:     800-1200ms (hero-only, the strongest motion on the page)
 */
export const DURATION = {
  micro: 0.2,
  card: 0.3,
  section: 0.65,
  hero: 0.9,
} as const;

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;

export const SPRING_SNAPPY: Transition = { type: "spring", stiffness: 300, damping: 24, mass: 0.6 };
export const SPRING_SOFT: Transition = { type: "spring", stiffness: 120, damping: 18, mass: 0.8 };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION.section, ease: EASE_OUT } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DURATION.section, ease: EASE_OUT } },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: DURATION.section, ease: EASE_OUT } },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: DURATION.section, ease: EASE_OUT } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: DURATION.card, ease: EASE_OUT } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION.card + 0.15, ease: EASE_OUT } },
};

export const scaleFadeItem: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.92 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: DURATION.card + 0.15, ease: EASE_OUT } },
};

/* ------------------------------- Hero-only, stronger entrance ------------------------------- */

export const heroStaggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION.hero * 0.6, ease: EASE_OUT } },
};

export const heroPortrait: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: DURATION.hero, ease: EASE_OUT, delay: 0.15 } },
};

export const viewportOnce = { once: true, margin: "0px 0px -80px 0px" };
