"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CheckCircle2, Github, Linkedin, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui";
import { DURATION, fadeLeft, fadeRight, viewportOnce } from "@/lib/motion";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import type { SiteSettings } from "@/types/portfolio";

const PROJECT_TYPES = [
  { value: "website", label: "New Website" },
  { value: "redesign", label: "Website Redesign" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "maintenance", label: "Maintenance" },
  { value: "consultation", label: "Consultation" },
  { value: "other", label: "Other" },
] as const;

type SubmitState = "idle" | "loading" | "success" | "error";

export function Contact({ site }: { site: SiteSettings }) {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactFormSchema) });

  const onSubmit = async (values: ContactFormValues) => {
    setState("loading");
    setErrorMessage(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Something went wrong. Please try again.");
      setState("success");
      reset();
    } catch (error) {
      setState("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  };

  const linkedin = site.socialLinks.find((l) => l.platform === "linkedin")?.url;
  const github = site.socialLinks.find((l) => l.platform === "github")?.url;

  return (
    <section id="contact" className="py-section-mobile sm:py-section-tablet lg:py-section-desktop">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeLeft}>
            <SectionHeading
              number="09"
              label="Contact Me"
              eyebrow="Let's Connect"
              title={
                <>
                  Let&rsquo;s Build Something <br /> Amazing Together!
                </>
              }
              description="Have a project in mind or just want to say hi? I'm always open to discussing new opportunities, ideas, or collaborations."
            />

            <div className="mt-10 space-y-5">
              <ContactRow icon={Mail} label="Email" value={site.email} href={`mailto:${site.email}`} />
              <ContactRow icon={Phone} label="Phone" value={site.phone} href={`tel:${site.phone}`} />
              <ContactRow icon={MapPin} label="Location" value={site.location} />
              {linkedin ? <ContactRow icon={Linkedin} label="LinkedIn" value={linkedin.replace(/^https?:\/\//, "")} href={linkedin} /> : null}
              {github ? <ContactRow icon={Github} label="GitHub" value={github.replace(/^https?:\/\//, "")} href={github} /> : null}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeRight}
            className="rounded-card border border-border bg-card p-6 sm:p-8"
          >
            <h3 className="text-lg font-semibold text-text-primary">Send Me a Message</h3>
            <p className="mt-1 text-sm text-text-muted">Fill out the form and I&rsquo;ll get back to you as soon as possible.</p>

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-6 space-y-4">
              {/* Honeypot — hidden from real users, visible to bots */}
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
                {...register("company")}
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Your Name" error={errors.name?.message}>
                  <input {...register("name")} className="field-input" placeholder="Your Name" />
                </Field>
                <Field label="Your Email" error={errors.email?.message}>
                  <input {...register("email")} type="email" className="field-input" placeholder="Your Email" />
                </Field>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Phone (optional)" error={errors.phone?.message}>
                  <input {...register("phone")} className="field-input" placeholder="Your Phone (Optional)" />
                </Field>
                <Field label="Project Type" error={errors.projectType?.message}>
                  <select {...register("projectType")} className="field-input" defaultValue="">
                    <option value="" disabled>
                      Project Type
                    </option>
                    {PROJECT_TYPES.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Your Message" error={errors.message?.message}>
                <textarea {...register("message")} rows={5} className="field-input resize-none" placeholder="Your Message" />
              </Field>

              <motion.button
                type="submit"
                disabled={state === "loading"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                animate={state === "error" ? { x: [0, -8, 8, -6, 6, -3, 3, 0] } : { x: 0 }}
                transition={state === "error" ? { duration: 0.5 } : { duration: DURATION.card }}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 font-semibold text-bg shadow-glow transition-colors duration-300 hover:bg-accent-bright disabled:cursor-not-allowed disabled:opacity-70"
              >
                {state === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message{" "}
                    <motion.span whileHover={{ x: 3 }} className="inline-flex">
                      <Send className="h-4 w-4" />
                    </motion.span>
                  </>
                )}
              </motion.button>

              <AnimatePresence mode="wait">
                <motion.p
                  key={state}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: DURATION.card }}
                  aria-live="polite"
                  className="flex items-center justify-center gap-1.5 text-center text-sm"
                >
                  {state === "success" ? (
                    <span className="flex items-center gap-1.5 text-success">
                      <CheckCircle2 className="h-4 w-4" /> Thanks — your message is on its way. I&rsquo;ll reply soon.
                    </span>
                  ) : state === "error" ? (
                    <span className="text-warning">{errorMessage}</span>
                  ) : (
                    <span className="text-text-muted">I usually respond within 24 hours.</span>
                  )}
                </motion.p>
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-card text-accent">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-xs text-text-muted">{label}</p>
        <p className="font-medium text-text-primary">{value}</p>
      </div>
    </div>
  );
  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }
  return content;
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-xs text-warning">{error}</span> : null}
    </label>
  );
}
