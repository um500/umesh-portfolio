"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui";
import { EducationCard } from "@/components/cards/EducationCard";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import type { Education as EducationType } from "@/types/portfolio";

export function Education({ education }: { education: EducationType[] }) {
  return (
    <section id="education" className="py-section-mobile sm:py-section-tablet lg:py-section-desktop">
      <Container>
        <SectionHeading
          number="05"
          label="Education"
          eyebrow="My Academic Journey"
          title="My Educational Background"
          description="Education has been a strong foundation in shaping my skills and career."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-12 grid gap-6 sm:grid-cols-2"
        >
          {education.map((item) => (
            <motion.div key={item._id} variants={staggerItem}>
              <EducationCard education={item} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
