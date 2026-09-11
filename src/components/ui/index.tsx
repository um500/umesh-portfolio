import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/* ---------------------------------- Button --------------------------------- */

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
  className?: string;
};

type ButtonAsLink = ButtonBaseProps & {
  href: string;
  external?: boolean;
  onClick?: () => void;
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

const buttonStyles = {
  primary:
    "bg-accent text-bg font-semibold hover:bg-accent-bright hover:-translate-y-0.5 hover:shadow-glow active:translate-y-0 active:scale-[0.98]",
  secondary:
    "border border-accent/50 text-accent hover:bg-accent/10 hover:border-accent hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
  ghost: "text-text-secondary hover:text-text-primary",
} as const;

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", children, className } = props;
  const classes = cn(
    "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm transition-all duration-300 ease-out",
    buttonStyles[variant],
    className
  );

  if ("href" in props && props.href) {
    const { href, external, onClick } = props;
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} onClick={onClick}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { href: _href, ...buttonProps } = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

/* ------------------------------ SectionHeading ------------------------------ */

export function SectionHeading({
  number,
  label,
  eyebrow,
  title,
  description,
}: {
  number: string;
  label: string;
  eyebrow?: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <span className="section-number">{number}</span>
        <span className="eyebrow-line" aria-hidden="true" />
        <h2 className="text-lg font-semibold text-text-primary">{label}</h2>
        {eyebrow ? (
          <span className="ml-auto hidden items-center gap-2 text-sm text-text-muted sm:flex">
            {eyebrow}
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
        ) : null}
      </div>
      <h3 className="mt-5 max-w-2xl text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.1] text-text-primary">
        {title}
      </h3>
      {description ? (
        <p className="mt-4 max-w-xl text-base text-text-secondary sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

/* ---------------------------------- Badge ----------------------------------- */

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-text-secondary",
        className
      )}
    >
      {children}
    </span>
  );
}

/* --------------------------------- Divider ---------------------------------- */

export function Divider({ className }: { className?: string }) {
  return (
    <div
      className={cn("h-px w-full bg-gradient-to-r from-transparent via-border to-transparent", className)}
      aria-hidden="true"
    />
  );
}

/* -------------------------------- NudgeIcon ---------------------------------- */

/**
 * Wraps an icon inside a Button (or any element with the `group` class) so it
 * nudges in the given direction on hover — the "arrow moves slightly on
 * hover" micro-interaction, applied consistently everywhere instead of once.
 */
export function NudgeIcon({
  children,
  direction = "right",
}: {
  children: ReactNode;
  direction?: "right" | "down";
}) {
  return (
    <span
      className={cn(
        "inline-flex transition-transform duration-200 ease-out",
        direction === "right" ? "group-hover:translate-x-1" : "group-hover:translate-y-0.5"
      )}
    >
      {children}
    </span>
  );
}
