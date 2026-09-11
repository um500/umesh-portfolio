import "server-only";
import { isSanityConfigured, sanityClient } from "./client";
import {
  ABOUT_QUERY,
  ACHIEVEMENTS_QUERY,
  CERTIFICATIONS_QUERY,
  EDUCATION_QUERY,
  EXPERIENCE_QUERY,
  FEATURED_PROJECTS_QUERY,
  HERO_QUERY,
  PROJECTS_QUERY,
  PROJECT_QUERY,
  RELATED_PROJECTS_QUERY,
  RESUME_QUERY,
  SERVICES_QUERY,
  SITE_SETTINGS_QUERY,
  SKILLS_QUERY,
  TESTIMONIALS_QUERY,
} from "./queries";
import * as placeholder from "@/lib/placeholder-data";
import type {
  About,
  Achievement,
  Certification,
  Education,
  Experience,
  Hero,
  Project,
  Resume,
  Service,
  SiteSettings,
  Skill,
  Testimonial,
} from "@/types/portfolio";

/**
 * Every getX() below tries Sanity first (when configured) and quietly falls
 * back to local placeholder content otherwise — so the site never breaks if
 * the Studio is empty or unreachable (brief section 31).
 */
async function safeFetch<T>(query: string, params: Record<string, unknown>, fallback: T): Promise<T> {
  if (!isSanityConfigured || !sanityClient) return fallback;
  try {
    const result = await sanityClient.fetch<T>(query, params, {
      next: { revalidate: 60 },
    });
    if (result === null || (Array.isArray(result) && result.length === 0)) {
      return fallback;
    }
    return result;
  } catch (error) {
    console.error(`Sanity fetch failed for query, using fallback content.`, error);
    return fallback;
  }
}

export const getSiteSettings = () =>
  safeFetch<SiteSettings>(SITE_SETTINGS_QUERY, {}, placeholder.placeholderSiteSettings);

export const getHero = () => safeFetch<Hero>(HERO_QUERY, {}, placeholder.placeholderHero);

export const getAbout = () => safeFetch<About>(ABOUT_QUERY, {}, placeholder.placeholderAbout);

export const getEducation = () =>
  safeFetch<Education[]>(EDUCATION_QUERY, {}, placeholder.placeholderEducation);

export const getSkills = () => safeFetch<Skill[]>(SKILLS_QUERY, {}, placeholder.placeholderSkills);

export const getProjects = () =>
  safeFetch<Project[]>(PROJECTS_QUERY, {}, placeholder.placeholderProjects);

export const getFeaturedProjects = () =>
  safeFetch<Project[]>(FEATURED_PROJECTS_QUERY, {}, placeholder.placeholderProjects);

export const getProjectBySlug = (slug: string) =>
  safeFetch<Project | null>(PROJECT_QUERY, { slug }, placeholder.placeholderProjects.find((p) => p.slug === slug) ?? null);

export const getRelatedProjects = (slug: string) =>
  safeFetch<Project[]>(RELATED_PROJECTS_QUERY, { slug }, placeholder.placeholderProjects.filter((p) => p.slug !== slug).slice(0, 3));

export const getExperience = () =>
  safeFetch<Experience[]>(EXPERIENCE_QUERY, {}, placeholder.placeholderExperience);

export const getCertifications = () =>
  safeFetch<Certification[]>(CERTIFICATIONS_QUERY, {}, placeholder.placeholderCertifications);

export const getAchievements = () =>
  safeFetch<Achievement[]>(ACHIEVEMENTS_QUERY, {}, placeholder.placeholderAchievements);

export const getServices = () =>
  safeFetch<Service[]>(SERVICES_QUERY, {}, placeholder.placeholderServices);

export const getTestimonials = () =>
  safeFetch<Testimonial[]>(TESTIMONIALS_QUERY, {}, placeholder.placeholderTestimonials);

export const getResume = () =>
  safeFetch<Resume | null>(RESUME_QUERY, {}, null);
