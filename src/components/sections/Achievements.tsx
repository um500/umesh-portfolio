"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui";
import { AchievementCard } from "@/components/cards/AchievementCard";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import type { Achievement } from "@/types/portfolio";

export function Achievements({ achievements }: { achievements: Achievement[] }) {
  return (
    <section id="achievements" className="py-section-mobile sm:py-section-tablet lg:py-section-desktop">
      <Container>
        <SectionHeading
          number="06"
          label="Achievements"
          eyebrow="Milestones That Motivate Me"
          title="Achievements & Recognitions"
          description="Small steps make big progress. Here are some of the milestones from my journey so far."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {achievements.map((item) => (
            <motion.div key={item._id} variants={staggerItem}>
              <AchievementCard achievement={item} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
