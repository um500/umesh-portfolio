"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Code2,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Rocket,
  Twitter,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button, NudgeIcon } from "@/components/ui";
import { BackgroundGrid } from "@/components/graphics";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { heroItem, heroPortrait, heroStaggerContainer, fadeIn, viewportOnce } from "@/lib/motion";
import { urlForImage } from "@/sanity/image";
import type { Hero as HeroType } from "@/types/portfolio";

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  twitter: Twitter,
  email: Mail,
} as const;

const FALLBACK_PORTRAIT = "/images/umesh-portrait.png";

export function Hero({ hero }: { hero: HeroType }) {
  const cmsPortrait = urlForImage(hero.portrait)?.width(760).height(1100).url();
  const portrait = cmsPortrait || FALLBACK_PORTRAIT;

  return (
    <section id="home" className="relative overflow-hidden pt-40 pb-24 sm:pt-48">
      <BackgroundGrid className="opacity-[0.04]" />

      <Container className="relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroStaggerContainer}
          className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div>
            <motion.p variants={heroItem} className="font-mono text-sm text-accent">
              {hero.greeting}
            </motion.p>
            <motion.h1
              variants={heroItem}
              className="mt-4 text-[clamp(3.2rem,8vw,6rem)] font-bold leading-[0.95] text-text-primary"
            >
              {hero.name}
            </motion.h1>
            <motion.p
              variants={heroItem}
              className="mt-3 text-[clamp(1.4rem,3vw,2.2rem)] font-semibold"
            >
              <span className="text-accent">{hero.role.split("/")[0]?.trim()}</span>
              {hero.role.includes("/") ? (
                <>
                  {" "}
                  / <span className="text-text-secondary">{hero.role.split("/")[1]?.trim()}</span>
                </>
              ) : null}
            </motion.p>
            <motion.p variants={heroItem} className="mt-6 max-w-lg text-lg leading-relaxed text-text-secondary">
              {hero.tagline}
              {hero.tagline && hero.description ? " " : ""}
              {hero.description}
            </motion.p>

            <motion.div variants={heroItem} className="mt-9 flex flex-wrap items-center gap-4">
              <MagneticButton>
                <Button href={hero.primaryButtonHref}>
                  {hero.primaryButtonLabel} <NudgeIcon><ArrowRight className="h-4 w-4" /></NudgeIcon>
                </Button>
              </MagneticButton>
              <Button href={hero.secondaryButtonHref} variant="secondary">
                {hero.secondaryButtonLabel} <NudgeIcon direction="down"><ArrowDown className="h-4 w-4" /></NudgeIcon>
              </Button>
            </motion.div>

            <motion.div variants={heroItem} className="mt-8 flex gap-3">
              {hero.socialLinks
                .filter((link): link is typeof link & { platform: keyof typeof socialIcons } => link.platform in socialIcons)
                .map((link) => {
                  const Icon = socialIcons[link.platform];
                  return (
                    
                   <a   key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.platform}
                      className="grid h-11 w-11 place-items-center rounded-full border border-border text-text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-border-hover hover:text-accent"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
            </motion.div>

            <motion.div variants={heroItem} className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
              {hero.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-accent sm:text-3xl">
                    <AnimatedCounter value={stat.value} />
                  </p>
                  <p className="mt-1 text-xs text-text-muted sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <HeroPortrait portrait={portrait} name={hero.name} />
        </motion.div>
      </Container>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeIn}
        className="mt-20 flex flex-col items-center gap-2 text-text-muted"
      >
        <span className="text-xs uppercase tracking-wide">Scroll Down</span>
        <span className="grid h-8 w-5 place-items-start justify-items-center rounded-full border border-border pt-1.5">
          <span className="h-1.5 w-1 animate-bounce rounded-full bg-accent" />
        </span>
      </motion.div>
    </section>
  );
}

function HeroPortrait({ portrait, name }: { portrait: string; name: string }) {
  const prefersReducedMotion = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 80, damping: 16, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 80, damping: 16, mass: 0.6 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const relX = (event.clientX - rect.left) / rect.width - 0.5;
    const relY = (event.clientY - rect.top) / rect.height - 0.5;
    rawX.set(relX * 12);
    rawY.set(relY * 10);
  };

  const reset = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      variants={heroPortrait}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className="relative mx-auto aspect-[4/5] w-full max-w-sm lg:max-w-none"
    >
      {/* crescent-shaped teal glow behind the subject — a big soft circle with
          a second, background-colored circle offset over it to bite a curve
          out of the edge, like a rim-lit moon */}
      <div className="absolute inset-0 overflow-hidden rounded-[3rem]">
        <div className="absolute left-1/2 top-[8%] h-[85%] w-[85%] -translate-x-1/2 rounded-full bg-gradient-to-br from-accent/45 via-cyan/30 to-accent-dark/10 blur-2xl" />
        <div className="absolute -right-[18%] top-[2%] h-[92%] w-[85%] rounded-full bg-bg blur-xl" />
      </div>

      {/* dotted micro-grid accents, top-right and bottom-left */}
      <DotGrid className="absolute right-2 top-4 h-24 w-20 opacity-70" />
      <DotGrid className="absolute bottom-8 left-0 hidden h-24 w-20 opacity-40 sm:block" />

      {/* sparkle + scribble doodle, near the hair */}
      <Sparkle className="absolute left-6 top-2 h-9 w-9 text-accent sm:left-10" />
      <Scribble className="absolute right-10 top-6 h-8 w-8 text-accent/80 sm:right-16" />

      {/* handwritten annotation with a curved arrow pointing at the portrait */}
      <div className="absolute -right-2 top-16 hidden -rotate-2 text-right font-handwritten text-2xl leading-6 text-text-secondary md:block lg:-right-6">
        Turn
        <br />
        Ideas
        <br />
        Into
        <br />
        Reality
      </div>
      <CurvedArrow className="absolute right-6 top-40 hidden h-10 w-10 text-text-muted md:block lg:right-2" />

      <motion.div style={{ x, y }} className="relative h-full w-full">
        <Image
          src={portrait}
          alt={name}
          fill
          priority
          sizes="(min-width: 1024px) 40vw, 80vw"
          className="object-contain object-bottom drop-shadow-[0_30px_60px_rgba(2,12,24,0.55)]"
        />
      </motion.div>

      <motion.div
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="glass-card absolute -left-2 top-16 hidden items-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium text-text-primary shadow-card sm:flex"
      >
        <Rocket className="h-4 w-4 shrink-0 text-accent" />
        Always Learning
      </motion.div>

      <motion.div
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="glass-card absolute -right-2 bottom-20 hidden items-start gap-2 rounded-2xl px-4 py-3 text-sm font-medium text-text-primary shadow-card sm:flex"
      >
        <Code2 className="h-4 w-4 shrink-0 text-accent" />
        <span>
          Clean Code
          <br />
          Better Future
        </span>
      </motion.div>
    </motion.div>
  );
}

function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 2C20.8 12 24 20 34 20 24 20 20.8 28 20 38 19.2 28 16 20 6 20 16 20 19.2 12 20 2Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}

function Scribble({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 20c3-4 6 4 9 0s2-8 6-6 2 9 8-1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function CurvedArrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 6c-3 14 2 26 16 28"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M15 29l7 5.5-2 -8.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function DotGrid({ className }: { className?: string }) {
  const dots = Array.from({ length: 5 * 6 });
  return (
    <svg viewBox="0 0 80 96" className={className} aria-hidden="true">
      {dots.map((_, i) => {
        const col = i % 5;
        const row = Math.floor(i / 5);
        return <circle key={i} cx={8 + col * 16} cy={8 + row * 16} r="1.6" className="fill-accent/50" />;
      })}
    </svg>
  );
}