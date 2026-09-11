import { getIcon } from "@/lib/icon-map";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import type { Achievement } from "@/types/portfolio";

export function AchievementCard({ achievement }: { achievement: Achievement }) {
  const Icon = getIcon(achievement.icon);
  return (
    <div className="group rounded-card border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-hover hover:shadow-glow">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-bg-secondary text-accent transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
        <Icon className="h-5 w-5" />
      </span>
      <p className="mt-4 text-3xl font-bold text-text-primary">
        <AnimatedCounter value={achievement.value} />
      </p>
      <p className="mt-1 font-semibold text-text-primary">{achievement.title}</p>
      <p className="mt-1 text-sm text-text-muted">{achievement.description}</p>
    </div>
  );
}