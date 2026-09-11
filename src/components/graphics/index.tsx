import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Glow({
  className,
  size = 480,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute rounded-full blur-3xl", className)}
      style={{
        width: size,
        height: size,
        background:
          "radial-gradient(circle at center, rgba(25,230,208,0.15), transparent 65%)",
      }}
    />
  );
}

export function BackgroundGrid({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 opacity-[0.06]", className)}
      style={{
        backgroundImage:
          "linear-gradient(rgba(168,182,200,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,182,200,0.5) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
      }}
    />
  );
}

export function FloatingCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "glass-card animate-float rounded-2xl px-4 py-3 text-sm font-medium text-text-primary shadow-card",
        className
      )}
    >
      {children}
    </div>
  );
}
