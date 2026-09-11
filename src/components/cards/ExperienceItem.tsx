import { Briefcase, ExternalLink, MapPin, Award } from "lucide-react";
import type { Certification, Experience } from "@/types/portfolio";

export function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <div className="group flex h-full flex-col rounded-card border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-hover hover:shadow-glow">
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bg-secondary text-accent transition-transform duration-300 group-hover:scale-110">
          <Briefcase className="h-5 w-5" />
        </span>
        <span className="text-right text-xs text-text-muted">
          {experience.startDate} – {experience.current ? "Present" : experience.endDate}
        </span>
      </div>

      <h4 className="mt-4 text-lg font-semibold text-text-primary">{experience.role}</h4>
      <p className="text-sm font-medium text-accent">{experience.company}</p>

      {experience.employmentType || experience.location ? (
        <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-text-muted">
          {experience.employmentType ? <span>{experience.employmentType}</span> : null}
          {experience.employmentType && experience.location ? <span>·</span> : null}
          {experience.location ? (
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3 w-3" /> {experience.location}
            </span>
          ) : null}
        </div>
      ) : null}

      {experience.description ? (
        <p className="mt-3 text-sm text-text-secondary">{experience.description}</p>
      ) : null}

      {experience.responsibilities && experience.responsibilities.length > 0 ? (
        <ul className="mt-3 space-y-1.5">
          {experience.responsibilities.map((item, i) => (
            <li key={i} className="flex gap-2 text-sm text-text-secondary">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-muted" />
              {item}
            </li>
          ))}
        </ul>
      ) : null}

      {experience.technologies && experience.technologies.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-bg-secondary px-2.5 py-1 text-xs text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function CertificationItem({ certification }: { certification: Certification }) {
  return (
    <div className="group flex h-full flex-col rounded-card border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-hover hover:shadow-glow">
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bg-secondary text-cyan transition-transform duration-300 group-hover:scale-110">
          <Award className="h-5 w-5" />
        </span>
        <span className="text-xs text-text-muted">{certification.date}</span>
      </div>
      <h4 className="mt-4 font-semibold text-text-primary">{certification.title}</h4>
      <p className="mt-1 text-sm text-text-secondary">{certification.issuer}</p>
      {certification.credentialUrl ? (
        
         <a href={certification.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-accent transition-colors duration-200 hover:text-accent-bright"
        >
          View Credential <ExternalLink className="h-3 w-3" />
        </a>
      ) : null}
    </div>
  );
}