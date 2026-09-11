import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Top-level nav — each points to its own dedicated page, not a homepage anchor.
export const NAV_LINKS = [
  { number: "01", label: "About", href: "/about" },
  { number: "02", label: "Projects", href: "/projects" },
  { number: "03", label: "Experience", href: "/experience" },
  { number: "04", label: "Skills", href: "/skills" },
  { number: "05", label: "Services", href: "/services" },
] as const;

// Anchor ids that still exist on the homepage itself (Hero buttons, Footer
// links, etc. still jump to these) — separate from the top-level nav above.
export const SECTION_IDS = [
  "home",
  "about",
  "education",
  "skills",
  "projects",
  "experience",
  "achievements",
  "services",
  "testimonials",
  "contact",
  "resume",
];

