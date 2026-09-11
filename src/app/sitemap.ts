import type { MetadataRoute } from "next";
import { getProjects } from "@/sanity/fetch";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://umesh.dev";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects();

  return [
    { url: siteUrl, lastModified: new Date(), priority: 1 },
    { url: `${siteUrl}/projects`, lastModified: new Date(), priority: 0.8 },
    { url: `${siteUrl}/experience`, lastModified: new Date(), priority: 0.7 },
    { url: `${siteUrl}/skills`, lastModified: new Date(), priority: 0.7 },
    { url: `${siteUrl}/services`, lastModified: new Date(), priority: 0.7 },
    ...projects.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified: new Date(),
      priority: 0.6,
    })),
  ];
}
