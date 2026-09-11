import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Reveal } from "@/components/animations/Reveal";
import { fadeIn, fadeLeft, fadeUp, scaleFadeItem } from "@/lib/motion";
import { getProjectBySlug, getRelatedProjects } from "@/sanity/fetch";
import { urlForImage } from "@/sanity/image";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug);
  if (!project) notFound();

  const related = await getRelatedProjects(params.slug);
  const heroImage = urlForImage(project.featuredImage)?.width(1400).height(800).url();

  return (
    <div className="pt-36 pb-24 sm:pt-44">
      <Container>
        <Reveal variants={fadeIn}>
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary">
            <ArrowLeft className="h-4 w-4" /> All Projects
          </Link>
        </Reveal>

        <Reveal variants={fadeUp} delay={0.05} className="mt-8 flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="section-number">{project.category} · {project.year}</p>
            <h1 className="mt-3 text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] text-text-primary">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-text-secondary">{project.description}</p>
          </div>
          <div className="flex gap-3">
            {project.liveUrl ? (
              <Button href={project.liveUrl} external>
                Live Demo <ArrowUpRight className="h-4 w-4" />
              </Button>
            ) : null}
            {project.githubUrl ? (
              <Button href={project.githubUrl} external variant="secondary">
                View Code <Github className="h-4 w-4" />
              </Button>
            ) : null}
          </div>
        </Reveal>

        <Reveal variants={fadeUp} delay={0.1} className="mt-10 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full border border-border bg-card px-3 py-1 text-xs text-text-secondary">
              {tech}
            </span>
          ))}
        </Reveal>

        <Reveal
          variants={scaleFadeItem}
          delay={0.15}
          className="relative mt-10 aspect-[16/9] overflow-hidden rounded-card border border-border bg-card"
        >
          {heroImage ? (
            <Image src={heroImage} alt={project.title} fill priority className="object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-text-muted">{project.title}</div>
          )}
        </Reveal>

        {project.longDescription ? (
          <Reveal variants={fadeLeft} className="mt-14 max-w-3xl">
            <h2 className="text-2xl font-bold text-text-primary">Overview</h2>
            <p className="mt-4 text-text-secondary">{project.longDescription}</p>
          </Reveal>
        ) : null}

        {project.caseStudy ? (
          <Reveal variants={fadeUp} className="mt-14 grid gap-8 sm:grid-cols-3">
            {project.caseStudy.challenge ? (
              <CaseStudyBlock title="Challenge" text={project.caseStudy.challenge} />
            ) : null}
            {project.caseStudy.solution ? (
              <CaseStudyBlock title="Solution" text={project.caseStudy.solution} />
            ) : null}
            {project.caseStudy.results ? (
              <CaseStudyBlock title="Results" text={project.caseStudy.results} />
            ) : null}
          </Reveal>
        ) : null}

        {project.gallery && project.gallery.length > 0 ? (
          <Reveal variants={fadeUp} className="mt-14 grid gap-4 sm:grid-cols-2">
            {project.gallery.map((image, i) => {
              const url = urlForImage(image)?.width(900).height(600).url();
              if (!url) return null;
              return (
                <div
                  key={i}
                  className="group relative aspect-[3/2] overflow-hidden rounded-card border border-border transition-colors duration-300 hover:border-border-hover"
                >
                  <Image
                    src={url}
                    alt={`${project.title} screenshot ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              );
            })}
          </Reveal>
        ) : null}

        {related.length > 0 ? (
          <div className="mt-20">
            <Reveal variants={fadeUp}>
              <h2 className="text-2xl font-bold text-text-primary">Related Projects</h2>
            </Reveal>
            <Reveal variants={fadeUp} className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ProjectCard key={item._id} project={item} />
              ))}
            </Reveal>
          </div>
        ) : null}
      </Container>
    </div>
  );
}

function CaseStudyBlock({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h3 className="font-semibold text-accent">{title}</h3>
      <p className="mt-2 text-sm text-text-secondary">{text}</p>
    </div>
  );
}
