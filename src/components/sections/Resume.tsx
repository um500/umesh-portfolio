"use client";

import { motion } from "framer-motion";
import { Download, Eye, FileText, RefreshCw } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading, Button, NudgeIcon } from "@/components/ui";
import { fadeLeft, fadeRight, viewportOnce } from "@/lib/motion";
import type { Resume as ResumeType } from "@/types/portfolio";

export function Resume({ resume }: { resume: ResumeType | null }) {
  return (
    <section id="resume" className="py-section-mobile sm:py-section-tablet lg:py-section-desktop">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeLeft}>
            <SectionHeading
              number="10"
              label="Resume"
              eyebrow="My Resume"
              title="Download My Resume"
              description="Want to know more about my skills, experience, and education? Download my resume for a complete overview."
            />

            <ul className="mt-8 space-y-4 text-sm text-text-secondary">
              <ResumePoint icon={RefreshCw} title="Updated Information" description="Latest skills and experience." />
              <ResumePoint icon={Download} title="Easy Download" description="One click, instant access." />
              <ResumePoint icon={Eye} title="ATS Friendly" description="Clean and professional format." />
            </ul>

            {resume?.fileUrl ? (
              <Button href={resume.fileUrl} external className="mt-8">
                Download Resume <NudgeIcon direction="down"><Download className="h-4 w-4" /></NudgeIcon>
              </Button>
            ) : (
              <p className="mt-8 text-sm text-text-muted">
                Resume file not uploaded yet — add it in Sanity Studio under &ldquo;Resume&rdquo;.
              </p>
            )}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeRight}
            className="rounded-card border border-border bg-card p-10"
          >
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-bg-secondary text-accent">
                <FileText className="h-7 w-7" />
              </span>
              <p className="font-semibold text-text-primary">{resume?.title || "Umesh — Resume"}</p>
              <p className="text-sm text-text-muted">
                {resume ? `Version ${resume.version} · Updated ${resume.lastUpdated}` : "PDF · Managed via Sanity"}
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function ResumePoint({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Download;
  title: string;
  description: string;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-card text-accent">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="font-medium text-text-primary">{title}</p>
        <p className="text-text-muted">{description}</p>
      </div>
    </li>
  );
}
