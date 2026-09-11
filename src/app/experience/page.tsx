import type { Metadata } from "next";
import { ArrowDown } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button, NudgeIcon } from "@/components/ui";
import { Timeline } from "@/components/animations/Timeline";
import { Reveal } from "@/components/animations/Reveal";
import { fadeIn } from "@/lib/motion";
import { getCertifications, getExperience, getResume } from "@/sanity/fetch";

export const metadata: Metadata = {
  title: "Experience",
  description: "Umesh's professional experience and certifications.",
};

export default async function ExperiencePage() {
  const [experience, certifications, resume] = await Promise.all([
    getExperience(),
    getCertifications(),
    getResume(),
  ]);

  return (
    <div className="pt-36 pb-24 sm:pt-44">
      <Container>
        <Reveal variants={fadeIn}>
          <p className="section-number">My Journey So Far</p>
          <h1 className="mt-4 text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.05] text-text-primary">
            Work Experience &amp; Certifications
          </h1>
          <p className="mt-4 max-w-xl text-lg text-text-secondary">
            A closer look at the roles I&rsquo;ve worked, and the certifications I&rsquo;ve picked up along the way.
          </p>
          {resume?.fileUrl ? (
            <Button href={resume.fileUrl} external variant="secondary" className="mt-8">
              Download Resume <NudgeIcon direction="down"><ArrowDown className="h-4 w-4" /></NudgeIcon>
            </Button>
          ) : null}
        </Reveal>

        <div className="mt-16 max-w-2xl">
          <Timeline experience={experience} certifications={certifications} />
        </div>
      </Container>
    </div>
  );
}
