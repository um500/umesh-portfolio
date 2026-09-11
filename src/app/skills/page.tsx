import type { Metadata } from "next";
import {
  Code2,
  Database,
  Megaphone,
  Palette,
  Rocket,
  Server,
  Sparkles,
  Terminal,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/animations/Reveal";
import { fadeIn, fadeUp } from "@/lib/motion";
import { getSkills } from "@/sanity/fetch";
import { cn } from "@/lib/utils";
import { getSkillIcon } from "@/lib/skill-icon-map";
import type { Skill, SkillCategory } from "@/types/portfolio";

export const metadata: Metadata = {
  title: "Skills",
  description: "The technologies and tools Umesh works with.",
};

const CATEGORY_ORDER: SkillCategory[] = [
  "Frontend",
  "Backend",
  "Languages",
  "Tools & Platforms",
  "AI Tools",
  "Marketing & Ads",
  "CMS",
  "Design",
];

const CATEGORY_META: Record<SkillCategory, { icon: LucideIcon; ring: string; text: string; glow: string }> = {
  Frontend: { icon: Code2, ring: "border-blue-500/30 hover:border-blue-500/60", text: "text-blue-400", glow: "bg-blue-500/20" },
  Backend: { icon: Server, ring: "border-emerald-500/30 hover:border-emerald-500/60", text: "text-emerald-400", glow: "bg-emerald-500/20" },
  Languages: { icon: Terminal, ring: "border-violet-500/30 hover:border-violet-500/60", text: "text-violet-400", glow: "bg-violet-500/20" },
  "Tools & Platforms": { icon: Wrench, ring: "border-orange-500/30 hover:border-orange-500/60", text: "text-orange-400", glow: "bg-orange-500/20" },
  "AI Tools": { icon: Sparkles, ring: "border-accent/30 hover:border-accent/60", text: "text-accent", glow: "bg-accent/20" },
  "Marketing & Ads": { icon: Megaphone, ring: "border-rose-500/30 hover:border-rose-500/60", text: "text-rose-400", glow: "bg-rose-500/20" },
  CMS: { icon: Database, ring: "border-pink-500/30 hover:border-pink-500/60", text: "text-pink-400", glow: "bg-pink-500/20" },
  Design: { icon: Palette, ring: "border-cyan/30 hover:border-cyan/60", text: "text-cyan", glow: "bg-cyan/20" },
};

function groupByCategory(skills: Skill[]) {
  const groups = new Map<SkillCategory, Skill[]>();
  for (const skill of skills) {
    const existing = groups.get(skill.category) ?? [];
    existing.push(skill);
    groups.set(skill.category, existing);
  }
  return CATEGORY_ORDER.map((category) => ({ category, skills: groups.get(category) ?? [] })).filter(
    (group) => group.skills.length > 0
  );
}

export default async function SkillsPage() {
  const skills = await getSkills();
  const grouped = groupByCategory(skills);

  return (
    <div className="pt-36 pb-24 sm:pt-44">
      <Container>
        <Reveal variants={fadeIn}>
          <p className="section-number">Tools I Use</p>
          <h1 className="mt-4 text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.05] text-text-primary">
            Skills &amp; Technologies
          </h1>
          <p className="mt-4 max-w-xl text-lg text-text-secondary">
            The stack behind everything I build — from the interface down to how it ships.
          </p>
        </Reveal>

        <Reveal variants={fadeUp} className="mx-auto mt-16 max-w-md">
          <Hub skillCount={skills.length} categoryCount={grouped.length} />
        </Reveal>

        <Connector />

        <Reveal
          variants={fadeUp}
          delay={0.1}
          className="grid gap-6 lg:grid-cols-3"
        >
          {grouped.map((group) => (
            <CategoryBox
              key={group.category}
              category={group.category}
              skills={group.skills}
              wide={group.skills.length >= 6}
            />
          ))}
        </Reveal>
      </Container>
    </div>
  );
}

function Connector() {
  return (
    <div className="relative mx-auto hidden h-14 w-px lg:block" aria-hidden="true">
      <div className="h-full w-full bg-gradient-to-b from-accent/60 to-border" />
      <span className="connector-dot absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent shadow-glow" />
    </div>
  );
}

function Hub({ skillCount, categoryCount }: { skillCount: number; categoryCount: number }) {
  return (
    <div className="relative rounded-2xl p-[1.5px]">
      <div className="hub-ring absolute" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#2a1a4a] via-[#1a1440] to-bg p-8 text-center">
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/25 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-cyan/25 blur-3xl" />
        <div className="relative">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-accent">
            <Rocket className="h-6 w-6" />
          </span>
          <p className="mt-4 font-semibold text-text-primary">Built With This Stack</p>
          <p className="mt-1 text-sm text-text-secondary">
            {skillCount} tools across {categoryCount} categories — every project runs on this combination.
          </p>
        </div>
      </div>
    </div>
  );
}

function CategoryBox({
  category,
  skills,
  wide,
}: {
  category: SkillCategory;
  skills: Skill[];
  wide: boolean;
}) {
  const meta = CATEGORY_META[category];
  const Icon = meta.icon;

  return (
    <div
      className={cn(
        "group/box relative overflow-hidden rounded-card border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow",
        meta.ring,
        wide && "lg:col-span-2"
      )}
    >
      <div className={cn("absolute -right-8 -top-8 h-28 w-28 rounded-full blur-3xl", meta.glow)} aria-hidden="true" />

      <div className="relative flex items-center gap-2.5">
        <span className={cn("flex h-8 w-8 items-center justify-center rounded-lg bg-bg-secondary", meta.text)}>
          <Icon className="h-4 w-4" />
        </span>
        <h2 className={cn("text-sm font-semibold uppercase tracking-wide", meta.text)}>{category}</h2>
      </div>

      <div className="relative mt-5 flex flex-wrap gap-2.5">
        {skills.map((skill) => {
          const { icon: SkillIcon, color } = getSkillIcon(skill.name);
          return (
            <div
              key={skill._id}
              className="group flex items-center gap-2 rounded-full border border-border bg-bg-secondary py-2 pl-2 pr-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-hover"
              title={skill.description}
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <SkillIcon size={16} color={color} />
              </span>
              <span className="whitespace-nowrap text-sm font-medium text-text-primary">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}