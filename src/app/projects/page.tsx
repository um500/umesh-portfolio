import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Reveal } from "@/components/animations/Reveal";
import { fadeIn, fadeUp } from "@/lib/motion";
import { getProjects } from "@/sanity/fetch";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of websites and web apps built by Umesh.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="pt-36 pb-24 sm:pt-44">
      <Container>
        <Reveal variants={fadeIn}>
          <p className="section-number">All Projects</p>
          <h1 className="mt-4 text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.05] text-text-primary">
            Everything I&rsquo;ve Built
          </h1>
          <p className="mt-4 max-w-xl text-lg text-text-secondary">
            A closer look at the websites and applications behind the featured work on the homepage.
          </p>
        </Reveal>

        <Reveal variants={fadeUp} delay={0.1} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </Reveal>
      </Container>
    </div>
  );
}
