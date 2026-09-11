import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button, NudgeIcon } from "@/components/ui";
import { ServiceCard } from "@/components/cards";
import { Reveal } from "@/components/animations/Reveal";
import { fadeIn, fadeUp } from "@/lib/motion";
import { getServices } from "@/sanity/fetch";

export const metadata: Metadata = {
  title: "Services",
  description: "Services Umesh offers — website development, UI/UX design, and more.",
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="pt-36 pb-24 sm:pt-44">
      <Container>
        <Reveal variants={fadeIn}>
          <p className="section-number">What I Can Do For You</p>
          <h1 className="mt-4 text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.05] text-text-primary">
            Services I Offer
          </h1>
          <p className="mt-4 max-w-xl text-lg text-text-secondary">
            I help businesses and individuals bring their ideas to life with modern, responsive, and
            user-friendly solutions.
          </p>
          <Button href="/#contact" className="mt-8">
            Let&rsquo;s Work Together <NudgeIcon><ArrowRight className="h-4 w-4" /></NudgeIcon>
          </Button>
        </Reveal>

        <Reveal variants={fadeUp} delay={0.1} className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </Reveal>
      </Container>
    </div>
  );
}
