export interface SanityImageRef {
  asset: { _ref: string; _type: "reference" };
  alt?: string;
}

export interface SiteSettings {
  siteTitle: string;
  description: string;
  logo?: SanityImageRef;
  email: string;
  phone: string;
  location: string;
  socialLinks: SocialLink[];
  resumeUrl?: string;
}

export interface SocialLink {
  platform: "github" | "linkedin" | "instagram" | "twitter" | "email" | "youtube";
  url: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface Hero {
  greeting: string;
  name: string;
  role: string;
  tagline: string;
  description: string;
  portrait?: SanityImageRef;
  primaryButtonLabel: string;
  primaryButtonHref: string;
  secondaryButtonLabel: string;
  secondaryButtonHref: string;
  stats: HeroStat[];
  socialLinks: SocialLink[];
}

export interface AboutHighlight {
  title: string;
  description: string;
  icon: string;
}

export interface About {
  heading: string;
  description: string;
  longDescription?: string;
  highlights: AboutHighlight[];
}

export interface Education {
  _id: string;
  degree: string;
  institution: string;
  startYear: string;
  endYear: string;
  status: "completed" | "in-progress";
  description: string;
  subjects?: string[];
  certificateUrl?: string;
  order: number;
}

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Languages"
  | "Tools & Platforms"
  | "AI Tools"
  | "Marketing & Ads"
  | "CMS"
  | "Design";

export interface Skill {
  _id: string;
  name: string;
  category: SkillCategory;
  icon: string;
  description?: string;
  order: number;
  featured: boolean;
}

export interface Project {
  _id: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  featuredImage?: SanityImageRef;
  gallery?: SanityImageRef[];
  technologies: string[];
  category: string;
  year: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudy?: {
    challenge?: string;
    solution?: string;
    results?: string;
  };
  featured: boolean;
  order: number;
}

export interface Experience {
  _id: string;
  role: string;
  company: string;
  employmentType: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
  order: number;
}

export interface Certification {
  _id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image?: SanityImageRef;
  order: number;
}

export interface Achievement {
  _id: string;
  value: string;
  title: string;
  description: string;
  icon: string;
  order: number;
}

export interface Service {
  _id: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
  order: number;
  featured: boolean;
}

export interface Testimonial {
  _id: string;
  name: string;
  role: string;
  company: string;
  avatar?: SanityImageRef;
  quote: string;
  rating: number;
  order: number;
  published: boolean;
}

export interface Resume {
  title: string;
  fileUrl: string;
  version: string;
  lastUpdated: string;
  description?: string;
}
