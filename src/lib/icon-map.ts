import {
  Award,
  Code2,
  Eye,
  Figma,
  GitBranch,
  Github,
  Globe,
  Lightbulb,
  Layers,
  Palette,
  Rocket,
  Settings,
  Smartphone,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  lightbulb: Lightbulb,
  "circle-dot": Target,
  eye: Eye,
  users: Users,
  trophy: Trophy,
  star: Star,
  award: Award,
  zap: Zap,
  target: Target,
  code: Code2,
  palette: Palette,
  smartphone: Smartphone,
  settings: Settings,
  rocket: Rocket,
  layers: Layers,
  git: GitBranch,
  github: Github,
  figma: Figma,
  sparkles: Sparkles,
  globe: Globe,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Sparkles;
}
