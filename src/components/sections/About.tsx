"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button, NudgeIcon } from "@/components/ui";
import { getIcon } from "@/lib/icon-map";
import { cn } from "@/lib/utils";
import { fadeLeft, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import type { About as AboutType } from "@/types/portfolio";

// Solid badge colors, cycled per highlight card — matches the reference design.
const BADGE_STYLES = ["bg-blue-500", "bg-emerald-500", "bg-violet-500", "bg-orange-500"];

/** Splits a heading and colors the last two words in accent, on their own line. */
function renderHeading(heading: string) {
  const words = heading.trim().split(" ");
  if (words.length <= 2) {
    return <span className="text-accent">{heading}</span>;
  }
  const lead = words.slice(0, -2).join(" ");
  const highlight = words.slice(-2).join(" ");
  return (
    <>
      {lead} <br />
      <span className="text-accent">{highlight}</span>
    </>
  );
}

export function About({ about }: { about: AboutType }) {
  return (
    <section id="about" className="py-section-mobile sm:py-section-tablet lg:py-section-desktop">
      <Container>
        {/* Eyebrow row — full width, sits above both columns */}
        <div className="flex items-center gap-3">
          <span className="section-number">01</span>
          <span className="eyebrow-line" aria-hidden="true" />
          <h2 className="text-lg font-semibold text-text-primary">About Me</h2>
          <span className="ml-auto hidden items-center gap-2 text-sm text-text-muted sm:flex">
            Get To Know Me
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
        </div>

        {/* Both columns start right here, top-aligned with each other */}
        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeLeft}>
            <h3 className="max-w-xl text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.1] text-text-primary">
              {renderHeading(about.heading)}
            </h3>
            <p className="mt-6 text-base text-text-secondary sm:text-lg">{about.description}</p>
            {about.longDescription ? (
              <p className="mt-4 text-base text-text-muted">{about.longDescription}</p>
            ) : null}
            <Button href="/about" variant="secondary" className="mt-8">
              More About Me <NudgeIcon><ArrowRight className="h-4 w-4" /></NudgeIcon>
            </Button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-5 self-start sm:grid-cols-2"
          >
            {about.highlights.map((item, index) => {
              const Icon = getIcon(item.icon);
              return (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  className="group rounded-card border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-hover hover:shadow-glow"
                >
                  <span
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-xl text-white transition-transform duration-300 group-hover:scale-110",
                      BADGE_STYLES[index % BADGE_STYLES.length]
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h4 className="mt-4 font-semibold text-text-primary">{item.title}</h4>
                  <p className="mt-1 text-sm text-text-muted">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}