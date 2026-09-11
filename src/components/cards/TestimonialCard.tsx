import Image from "next/image";
import { Star } from "lucide-react";
import { urlForImage } from "@/sanity/image";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types/portfolio";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const avatar = urlForImage(testimonial.avatar)?.width(80).height(80).url();
  return (
    <div className="glass-card flex h-full flex-col rounded-card p-6 transition-colors duration-300 hover:border-border-hover">
      <div className="flex items-center gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn("h-4 w-4", i < testimonial.rating ? "fill-warning text-warning" : "text-text-muted")}
          />
        ))}
      </div>
      <p className="mt-4 flex-1 text-sm text-text-secondary">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-full bg-bg-secondary">
          {avatar ? (
            <Image src={avatar} alt={testimonial.name} fill className="object-cover" />
          ) : null}
        </div>
        <div>
          <p className="text-sm font-semibold text-text-primary">{testimonial.name}</p>
          <p className="text-xs text-text-muted">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}