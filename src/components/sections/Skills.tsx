"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading, Button, NudgeIcon } from "@/components/ui";
import { fadeLeft, viewportOnce } from "@/lib/motion";
import type { Skill } from "@/types/portfolio";

const EDGE_FADE = {
  WebkitMaskImage:
    "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
  maskImage:
    "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
};

export function Skills({ skills }: { skills: Skill[] }) {
  const half = Math.ceil(skills.length / 2);
  const rowA = skills.slice(0, half);
  const rowB = skills.slice(half).length > 0 ? skills.slice(half) : rowA;

  return (
    <section id="skills" className="py-section-mobile sm:py-section-tablet lg:py-section-desktop">
      <Container>
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeLeft}>
          <SectionHeading
            number="03"
            label="Skills / Tech Stack"
            eyebrow="Tools I Use"
            title={
              <>
                My Skills &amp; <br /> Technologies
              </>
            }
            description="I work with modern technologies to build fast, responsive and user-friendly websites and web applications."
          />
          <Button href="/skills" variant="secondary" className="mt-8">
            View All Skills <NudgeIcon><ArrowRight className="h-4 w-4" /></NudgeIcon>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
          className="mt-14 space-y-5"
        >
          <MarqueeRow skills={rowA} />
          <MarqueeRow skills={rowB} reverse />
        </motion.div>
      </Container>
    </section>
  );
}

function MarqueeRow({ skills, reverse = false }: { skills: Skill[]; reverse?: boolean }) {
  // Duplicated so the -50% translate loop is seamless.
  const looped = [...skills, ...skills];

  return (
    <div className="marquee-row overflow-hidden" style={EDGE_FADE}>
      <div className={`marquee-track gap-4 ${reverse ? "marquee-track-reverse" : ""}`}>
        {looped.map((skill, i) => (
          <SkillPill key={`${skill._id}-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

function SkillPill({ skill }: { skill: Skill }) {
  const initials = skill.name.slice(0, 2).toUpperCase();
  return (
    <div className="flex shrink-0 items-center gap-3 rounded-full border border-border bg-card py-2.5 pl-2.5 pr-5 transition-colors duration-300 hover:border-border-hover hover:bg-card-hover">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-bg-secondary font-mono text-[11px] font-semibold text-accent">
        {initials}
      </span>
      <span className="whitespace-nowrap text-sm font-medium text-text-primary">{skill.name}</span>
    </div>
  );
}