import Link from "next/link";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { Container } from "./Container";
import { Reveal } from "@/components/animations/Reveal";
import type { SiteSettings } from "@/types/portfolio";

const socialIcons = { github: Github, linkedin: Linkedin, instagram: Instagram, email: Mail } as const;

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Footer({ site }: { site: SiteSettings }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-secondary">
      <Reveal className="w-full">
        <Container className="flex flex-col gap-10 py-14 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Link href="#home" className="text-xl font-bold text-text-primary">
              U<span className="text-accent">.</span>
            </Link>
            <p className="mt-3 text-sm font-medium text-text-primary">Umesh</p>
            <p className="text-sm text-text-muted">Web Developer / Designer</p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="link-underline text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-3">
            {site.socialLinks
              .filter((link): link is typeof link & { platform: keyof typeof socialIcons } => link.platform in socialIcons)
              .map((link) => {
                const Icon = socialIcons[link.platform];
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.platform}
                    className="grid h-10 w-10 place-items-center rounded-full border border-border text-text-secondary transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:border-border-hover hover:text-accent hover:shadow-glow"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
          </div>
        </Container>
      </Reveal>

      <Container className="flex flex-col gap-2 border-t border-border py-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Umesh. All rights reserved.</p>
        <p>Build • Design • Create</p>
      </Container>
    </footer>
  );
}
