import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { About } from "@/components/sections/About";
import { EducationCard, AchievementCard } from "@/components/cards";
import { Reveal } from "@/components/animations/Reveal";
import { fadeIn, fadeUp } from "@/lib/motion";
import { getAbout, getAchievements, getEducation } from "@/sanity/fetch";

export const metadata: Metadata = {
  title: "About",
  description: "More about Umesh — background, education, and achievements.",
};

export default async function AboutPage() {
  const [about, education, achievements] = await Promise.all([
    getAbout(),
    getEducation(),
    getAchievements(),
  ]);

  return (
    <div className="pt-20">
      {/* Hero — the same About section used on the homepage */}
      <About about={about} />

      <Container>
        <div className="pb-24">
          {/* Education */}
          <Reveal variants={fadeIn}>
            <h2 className="text-2xl font-bold text-text-primary">Education</h2>
            <p className="mt-2 text-text-secondary">My academic background.</p>
          </Reveal>
          <Reveal variants={fadeUp} delay={0.1} className="mt-8 grid gap-6 sm:grid-cols-2">
            {education.map((item) => (
              <EducationCard key={item._id} education={item} />
            ))}
          </Reveal>

          {/* Achievements */}
          <div className="mt-24">
            <Reveal variants={fadeIn}>
              <h2 className="text-2xl font-bold text-text-primary">Achievements</h2>
              <p className="mt-2 text-text-secondary">Milestones from my journey so far.</p>
            </Reveal>
            <Reveal variants={fadeUp} delay={0.1} className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {achievements.map((item) => (
                <AchievementCard key={item._id} achievement={item} />
              ))}
            </Reveal>
          </div>
        </div>
      </Container>
    </div>
  );
}