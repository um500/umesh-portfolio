"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading, Button, NudgeIcon } from "@/components/ui";
import { Timeline } from "@/components/animations/Timeline";
import { fadeIn, viewportOnce } from "@/lib/motion";
import type { Certification, Experience as ExperienceType } from "@/types/portfolio";

export function Experience({
  experience,
  certifications,
  resumeUrl,
}: {
  experience: ExperienceType[];
  certifications: Certification[];
  resumeUrl?: string;
}) {
  return (
    <section id="experience" className="py-section-mobile sm:py-section-tablet lg:py-section-desktop">
      <Container>
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeIn}>
          <SectionHeading
            number="04"
            label="Experience / Certifications"
            eyebrow="My Journey So Far"
            title={
              <>
                Work Experience &amp; <br /> Certifications
              </>
            }
            description="A quick look at my professional journey and the certifications I've earned along the way."
          />
          <Button href={resumeUrl || "#resume"} external={Boolean(resumeUrl)} variant="secondary" className="mt-8">
            Download Resume <NudgeIcon direction="down"><ArrowDown className="h-4 w-4" /></NudgeIcon>
          </Button>
        </motion.div>

        <div className="mt-14">
          <Timeline experience={experience} certifications={certifications} />
        </div>
      </Container>
    </section>
  );
}