"use client";

import { motion } from "framer-motion";
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
  return (
    <div className="space-y-14">
      {experience.length > 0 ? (
        <div>
          {certifications.length > 0 ? (
            <h3 className="text-sm font-semibold uppercase tracking-wide text-text-muted">Experience</h3>
          ) : null}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {experience.map((item) => (
              <motion.div key={item._id} variants={staggerItem}>
                <ExperienceItem experience={item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      ) : null}

      {certifications.length > 0 ? (
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-text-muted">Certifications</h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {certifications.map((item) => (
              <motion.div key={item._id} variants={staggerItem}>
                <CertificationItem certification={item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      ) : null}
    </div>
  );
}