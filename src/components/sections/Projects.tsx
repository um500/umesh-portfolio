"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading, Button, NudgeIcon } from "@/components/ui";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { staggerContainer, scaleFadeItem, viewportOnce } from "@/lib/motion";
import type { Project } from "@/types/portfolio";

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="py-section-mobile sm:py-section-tablet lg:py-section-desktop">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            number="04"
            label="Featured Projects"
            eyebrow="Some of My Best Work"
            title={
              <>
                A Few Things I&rsquo;ve <br /> Built Recently
              </>
            }
            description="Here are some of my recent projects. Each one is built with a focus on clean design, performance, and real-world usability."
          />
          <Button href="/projects" variant="secondary" className="shrink-0">
            View All Projects <NudgeIcon><ArrowRight className="h-4 w-4" /></NudgeIcon>
          </Button>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div key={project._id} variants={scaleFadeItem}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}