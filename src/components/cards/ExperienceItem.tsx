import type { Certification, Experience } from "@/types/portfolio";

export function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <div className="relative pl-10">
      <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-accent/50 bg-bg">
        <span className="h-2 w-2 rounded-full bg-accent" />
      </span>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <h4 className="font-semibold text-text-primary">{experience.role}</h4>
        <span className="text-sm text-text-muted">
          {experience.startDate} – {experience.current ? "Present" : experience.endDate}
        </span>
      </div>
      <p className="text-sm text-accent">{experience.company}</p>
      <p className="mt-2 text-sm text-text-secondary">{experience.description}</p>
    </div>
  );
}

export function CertificationItem({ certification }: { certification: Certification }) {
  return (
    <div className="relative pl-10">
      <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-accent/50 bg-bg">
        <span className="h-2 w-2 rounded-full bg-cyan" />
      </span>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <h4 className="font-semibold text-text-primary">{certification.title}</h4>
        <span className="text-sm text-text-muted">{certification.date}</span>
      </div>
      <p className="text-sm text-text-secondary">{certification.issuer}</p>
    </div>
  );
}