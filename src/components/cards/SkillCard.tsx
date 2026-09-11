import type { Skill } from "@/types/portfolio";

export function SkillCard({ skill }: { skill: Skill }) {
  const initials = skill.name.slice(0, 2).toUpperCase();
  return (
    <div className="group flex flex-col items-center gap-3 rounded-card border border-border bg-card px-5 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-border-hover hover:bg-card-hover hover:shadow-glow">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-bg-secondary font-mono text-sm font-semibold text-accent transition-transform duration-300 group-hover:scale-110">
        {initials}
      </span>
      <div>
        <p className="font-semibold text-text-primary">{skill.name}</p>
        <p className="text-xs text-text-muted">{skill.description || skill.category}</p>
      </div>
    </div>
  );
}