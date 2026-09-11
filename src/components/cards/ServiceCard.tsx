import { getIcon } from "@/lib/icon-map";
import type { Service } from "@/types/portfolio";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = getIcon(service.icon);
  return (
    <div className="group rounded-card border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-border-hover hover:shadow-glow">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-bg-secondary text-accent transition-transform duration-300 group-hover:-translate-y-0.5">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-4 font-semibold text-text-primary">{service.title}</h3>
      <p className="mt-1 text-sm text-text-secondary">{service.description}</p>
    </div>
  );
}