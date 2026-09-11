import { groq } from "./groq";

export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0]{
    siteTitle, description, logo, email, phone, location,
    socialLinks, "resumeUrl": resume.file.asset->url
  }
`;

export const HERO_QUERY = groq`
  *[_type == "hero"][0]{
    greeting, name, role, tagline, description, portrait,
    primaryButtonLabel, primaryButtonHref,
    secondaryButtonLabel, secondaryButtonHref,
    stats, socialLinks
  }
`;

export const ABOUT_QUERY = groq`
  *[_type == "about"][0]{ heading, description, longDescription, highlights }
`;

export const EDUCATION_QUERY = groq`
  *[_type == "education"] | order(order asc){
    _id, degree, institution, startYear, endYear, status,
    description, subjects, certificateUrl, order
  }
`;

export const SKILLS_QUERY = groq`
  *[_type == "skill"] | order(order asc){
    _id, name, category, icon, description, order, featured
  }
`;

export const PROJECTS_QUERY = groq`
  *[_type == "project"] | order(order asc){
    _id, title, "slug": slug.current, description, longDescription,
    featuredImage, gallery, technologies, category, year,
    liveUrl, githubUrl, caseStudy, featured, order
  }
`;

export const FEATURED_PROJECTS_QUERY = groq`
  *[_type == "project" && featured == true] | order(order asc){
    _id, title, "slug": slug.current, description, featuredImage,
    technologies, category, year, liveUrl, githubUrl, order
  }
`;

export const PROJECT_QUERY = groq`
  *[_type == "project" && slug.current == $slug][0]{
    _id, title, "slug": slug.current, description, longDescription,
    featuredImage, gallery, technologies, category, year,
    liveUrl, githubUrl, caseStudy, featured, order
  }
`;

export const RELATED_PROJECTS_QUERY = groq`
  *[_type == "project" && slug.current != $slug] | order(order asc)[0...3]{
    _id, title, "slug": slug.current, description, featuredImage,
    technologies, category, year, liveUrl, githubUrl, order
  }
`;

export const EXPERIENCE_QUERY = groq`
  *[_type == "experience"] | order(order asc){
    _id, role, company, employmentType, location, startDate, endDate,
    current, description, responsibilities, technologies, order
  }
`;

export const CERTIFICATIONS_QUERY = groq`
  *[_type == "certification"] | order(order asc){
    _id, title, issuer, date, credentialUrl, image, order
  }
`;

export const ACHIEVEMENTS_QUERY = groq`
  *[_type == "achievement"] | order(order asc){
    _id, value, title, description, icon, order
  }
`;

export const SERVICES_QUERY = groq`
  *[_type == "service"] | order(order asc){
    _id, title, description, icon, features, order, featured
  }
`;

export const TESTIMONIALS_QUERY = groq`
  *[_type == "testimonial" && published == true] | order(order asc){
    _id, name, role, company, avatar, quote, rating, order, published
  }
`;

export const RESUME_QUERY = groq`
  *[_type == "resume"][0]{
    title, "fileUrl": file.asset->url, version, lastUpdated, description
  }
`;
