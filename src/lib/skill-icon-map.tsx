import type { IconType } from "react-icons";
import {
  SiBootstrap,
  SiClaude,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPostman,
  SiReact,
  SiRender,
  SiReplit,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Bot, Database, Heart, MousePointer2, Sparkles, Webhook, type LucideIcon } from "lucide-react";

type IconEntry = { icon: IconType | LucideIcon; color: string };

// Real brand icons (Simple Icons) where one exists and is a clean fit;
// a neutral Lucide icon standing in where no brand mark applies (REST API,
// SQL in general, or tools too new to have one yet).
export const SKILL_ICON_MAP: Record<string, IconEntry> = {
  "React.js": { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
  "JavaScript (ES6+)": { icon: SiJavascript, color: "#F7DF1E" },
  "HTML5 & CSS3": { icon: SiHtml5, color: "#E34F26" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38BDF8" },
  Bootstrap: { icon: SiBootstrap, color: "#7952B3" },
  "REST API Integration": { icon: Webhook, color: "#20D9FF" },
  "Framer Motion": { icon: SiFramer, color: "#FFFFFF" },
  "Meta Ads": { icon: Bot, color: "#10A37F" },
  "Google Ads": { icon: Webhook, color: "#20D9FF" },
  "Node.js": { icon: SiNodedotjs, color: "#8CC84B" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  "MongoDB Atlas": { icon: SiMongodb, color: "#47A248" },
  Mongoose: { icon: SiMongoose, color: "#F04D35" },
  SQL: { icon: Database, color: "#20D9FF" },

  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  "Core Java": { icon: SiOpenjdk, color: "#F58219" },

  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "#FFFFFF" },
  "VS Code": { icon: VscVscode, color: "#007ACC" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
  Vercel: { icon: SiVercel, color: "#FFFFFF" },
  Netlify: { icon: SiNetlify, color: "#00C7B7" },
  Render: { icon: SiRender, color: "#46E3B7" },

  ChatGPT: { icon: Bot, color: "#10A37F" },
  Claude: { icon: SiClaude, color: "#D97757" },
  Cursor: { icon: MousePointer2, color: "#20D9FF" },
  Replit: { icon: SiReplit, color: "#F26207" },
  Lovable: { icon: Heart, color: "#FF6B9D" },
  v0: { icon: Sparkles, color: "#20D9FF" },
};

export function getSkillIcon(name: string): IconEntry {
  return SKILL_ICON_MAP[name] ?? { icon: Sparkles, color: "#19E6D0" };
}