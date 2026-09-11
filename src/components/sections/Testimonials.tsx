"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui";
import { TestimonialCard } from "@/components/cards";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types/portfolio";

const PER_PAGE_DESKTOP = 3;

export function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  const [page, setPage] = useState(0);
  const pageCount = Math.max(1, Math.ceil(testimonials.length / PER_PAGE_DESKTOP));

  const visible = useMemo(() => {
    const start = page * PER_PAGE_DESKTOP;
    return testimonials.slice(start, start + PER_PAGE_DESKTOP);
  }, [page, testimonials]);

  const goTo = (next: number) => setPage((next + pageCount) % pageCount);

  return (
    <section id="testimonials" className="py-section-mobile sm:py-section-tablet lg:py-section-desktop">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            number="08"
            label="Testimonials"
            eyebrow="What People Say"
            title="Kind Words From Amazing People"
            description="What clients and collaborators have said about working with me."
          />
          {pageCount > 1 ? (
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => goTo(page - 1)}
                aria-label="Previous testimonials"
                className="grid h-11 w-11 place-items-center rounded-full border border-border text-text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-border-hover hover:text-accent active:scale-95"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => goTo(page + 1)}
                aria-label="Next testimonials"
                className="grid h-11 w-11 place-items-center rounded-full border border-border text-text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-border-hover hover:text-accent active:scale-95"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          ) : null}
        </div>

        <motion.div
          key={page}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-12 grid gap-6 sm:grid-cols-1 lg:grid-cols-3"
        >
          {visible.map((testimonial) => (
            <TestimonialCard key={testimonial._id} testimonial={testimonial} />
          ))}
        </motion.div>

        {pageCount > 1 ? (
          <div className="mt-8 flex justify-center gap-2" role="tablist" aria-label="Testimonial pages">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === page}
                aria-label={`Go to testimonial page ${i + 1}`}
                onClick={() => goTo(i)}
                className={cn("h-1.5 rounded-full transition-all duration-300", i === page ? "w-6 bg-accent" : "w-1.5 bg-border")}
              />
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
