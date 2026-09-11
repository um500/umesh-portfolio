"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading, Button, NudgeIcon } from "@/components/ui";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import type { Service } from "@/types/portfolio";

export function Services({ services }: { services: Service[] }) {
  return (
    <section id="services" className="py-section-mobile sm:py-section-tablet lg:py-section-desktop">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            number="07"
            label="Services"
            eyebrow="What I Can Do For You"
            title="Services I Offer"
            description="I help businesses and individuals bring their ideas to life with modern, responsive, and user-friendly solutions."
          />
          <Button href="/services" variant="secondary" className="shrink-0">
            View All Services <NudgeIcon><ArrowRight className="h-4 w-4" /></NudgeIcon>
          </Button>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div key={service._id} variants={staggerItem}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>

        <Button href="#contact" variant="secondary" className="mt-10">
          Let&rsquo;s Work Together <NudgeIcon><ArrowRight className="h-4 w-4" /></NudgeIcon>
        </Button>
      </Container>
    </section>
  );
}
