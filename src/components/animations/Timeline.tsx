"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { CertificationItem, ExperienceItem } from "@/components/cards/ExperienceItem";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import type { Certification, Experience as ExperienceType } from "@/types/portfolio";

export function Timeline({
  experience,
  certifications,
}: {
  experience: ExperienceType[];
  certifications: Certification[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.6"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
      className="relative space-y-10 pl-2"
    >
      {/* base track */}
      <div className="absolute left-0 top-0 h-full w-px bg-border" aria-hidden="true" />
      {/* animated fill, grows with scroll progress through the timeline */}
      <motion.div
        style={{ scaleY: fill }}
        className="absolute left-0 top-0 h-full w-px origin-top bg-accent"
        aria-hidden="true"
      />

      {experience.map((item) => (
        <motion.div key={item._id} variants={staggerItem}>
          <ExperienceItem experience={item} />
        </motion.div>
      ))}
      {certifications.map((item) => (
        <motion.div key={item._id} variants={staggerItem}>
          <CertificationItem certification={item} />
        </motion.div>
      ))}
    </motion.div>
  );
}
