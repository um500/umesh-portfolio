import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Eye, Github, ImageIcon } from "lucide-react";
import { urlForImage } from "@/sanity/image";
import type { Project } from "@/types/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  const image = urlForImage(project.featuredImage)?.width(720).height(480).url();

  // Primary hover button: the live site if there is one, otherwise the repo.
  // "View Details" always shows alongside it — every project card shows
  // exactly two buttons on hover, never just one floating alone.
  const primaryAction = project.liveUrl
    ? { href: project.liveUrl, label: "Live Preview", icon: ArrowUpRight, external: true }
    : project.githubUrl
      ? { href: project.githubUrl, label: "View Code", icon: Github, external: true }
      : null;

  return (
    <article className="group relative overflow-hidden rounded-card border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:border-border-hover hover:bg-card-hover hover:shadow-glow">
      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`View full details for ${project.title}`}
      />

      <div className="relative aspect-[3/2] overflow-hidden bg-bg-secondary">
        {image ? (
          <Image
            src={image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-card via-bg-secondary to-card">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-bg-secondary text-accent">
              <ImageIcon className="h-6 w-6" />
            </span>
            <span className="px-4 text-center text-sm font-medium text-text-muted">{project.title}</span>
          </div>
        )}

        <div className="absolute inset-0 flex flex-wrap items-end justify-center gap-3 bg-gradient-to-t from-bg via-bg/50 to-transparent px-4 pb-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {primaryAction ? (
            
            <a   href={primaryAction.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-20 inline-flex translate-y-3 items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-bg shadow-glow transition-all duration-300 hover:bg-accent-bright group-hover:translate-y-0"
            >
              {primaryAction.label} <primaryAction.icon className="h-3.5 w-3.5" />
            </a>
          ) : null}
          <Link
            href={`/projects/${project.slug}`}
            className="relative z-20 inline-flex translate-y-3 items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 group-hover:translate-y-0"
          >
            View Details <Eye className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      <div className="relative p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-text-primary">{project.title}</h3>
          <span className="shrink-0 text-xs text-text-muted">{project.year}</span>
        </div>
        <p className="mt-2 text-sm text-text-secondary">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full bg-bg-secondary px-2.5 py-1 text-xs text-text-secondary">
              {tech}
            </span>
          ))}
        </div>
        {project.liveUrl && project.githubUrl ? (
          <div className="relative z-20 mt-5 flex items-center text-sm">
            
            <a  href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1 text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              View Code{" "}
              <Github className="h-4 w-4 transition-transform duration-200 group-hover/link:rotate-6" />
            </a>
          </div>
        ) : null}
      </div>
    </article>
  );
}