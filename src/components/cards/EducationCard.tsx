import { GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Education } from "@/types/portfolio";

export function EducationCard({ education }: { education: Education }) {
  return (
    <div className="group rounded-card border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-hover hover:shadow-glow">
      <div className="flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-bg-secondary text-accent transition-transform duration-300 group-hover:scale-110">
          <GraduationCap className="h-5 w-5" />
        </span>
        <div className="flex items-center gap-3">
          <span className="text-sm text-text-muted">
            {education.startYear} – {education.endYear}
          </span>
          <span
            className={cn(
              "rounded-full px-3 py-1 text-xs font-medium",
              education.status === "completed"
                ? "bg-success/10 text-success"
                : "bg-warning/10 text-warning"
            )}
          >
            {education.status === "completed" ? "Completed" : "In Progress"}
          </span>
        </div>
      </div>
      <h3 className="mt-5 text-lg font-semibold text-text-primary">{education.degree}</h3>
      <p className="text-sm text-text-secondary">{education.institution}</p>
      <p className="mt-3 text-sm text-text-muted">{education.description}</p>
    </div>
  );
}