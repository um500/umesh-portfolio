/**
 * Fallback content shown only when Sanity returns no documents for a section
 * (e.g. the Studio hasn't been populated yet). Everything here is placeholder
 * content, not real client/testimonial/achievement data — replace it in
 * Sanity Studio before this site goes live. See section 37 of the brief.
 */
import type {
  About,
  Achievement,
  Certification,
  Education,
  Experience,
  Hero,
  Project,
  Service,
  Skill,
  SiteSettings,
  Testimonial,
} from "@/types/portfolio";

export const placeholderSiteSettings: SiteSettings = {
  siteTitle: "Umesh — MERN Stack Developer",
  description:
    "Umesh is a MERN Stack Developer building modern, responsive, full-stack web experiences.",
  email: "umesh@example.com",
  phone: "+91 00000 00000",
  location: "India",
  socialLinks: [
    { platform: "github", url: "https://github.com/umesh" },
    { platform: "linkedin", url: "https://linkedin.com/in/umesh" },
    { platform: "instagram", url: "https://instagram.com/umesh" },
    { platform: "twitter", url: "https://twitter.com/umesh" },
    { platform: "email", url: "mailto:umesh@example.com" },
  ],
};

export const placeholderHero: Hero = {
  greeting: "Hi, I'm",
  name: "Umesh.",
  role: "MERN Stack Developer",
  tagline: "I build modern, full-stack web experiences using the MERN stack",
  description: "that help businesses grow and stand out on the web.",
  primaryButtonLabel: "Let's Connect",
  primaryButtonHref: "#contact",
  secondaryButtonLabel: "Download Resume",
  secondaryButtonHref: "#resume",
  stats: [
    { value: "3+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "30+", label: "Happy Clients" },
  ],
  socialLinks: placeholderSiteSettings.socialLinks,
};

export const placeholderAbout: About = {
  heading: "Turning Ideas Into Real Digital Solutions.",
  description:
    "I'm Umesh, a passionate MERN Stack Developer who loves creating clean, modern, and user-friendly websites. I enjoy turning ideas into real digital products that are not only beautiful but also functional and focused on user experience.",
  longDescription:
    "I'm always eager to learn new technologies and take on exciting challenges. My goal is to build solutions that make a real impact and help businesses grow.",
  highlights: [
    { title: "Creative Thinker", description: "I love brainstorming new ideas.", icon: "lightbulb" },
    { title: "Problem Solver", description: "I enjoy finding simple solutions to complex problems.", icon: "circle-dot" },
    { title: "Detail Oriented", description: "I focus on quality and clean design.", icon: "eye" },
    { title: "Team Player", description: "I believe great things happen through collaboration.", icon: "users" },
  ],
};

// Placeholder — replace via Sanity Studio.
export const placeholderEducation: Education[] = [
  {
    _id: "edu-1",
    degree: "Bachelor of Technology (Information Technology)",
    institution: "Your Institution",
    startYear: "2021",
    endYear: "2025",
    status: "completed",
    description: "Placeholder entry — add your real degree details in Sanity Studio.",
    order: 1,
  },
  {
    _id: "edu-2",
    degree: "Higher Secondary (12th)",
    institution: "Your School",
    startYear: "2019",
    endYear: "2021",
    status: "completed",
    description: "Placeholder entry — add your real school details in Sanity Studio.",
    order: 2,
  },
];

export const placeholderSkills: Skill[] = [
  // Frontend
  { _id: "sk-1", name: "React.js", category: "Frontend", icon: "react", description: "Component-based frontend framework", order: 1, featured: true },
  { _id: "sk-2", name: "Next.js", category: "Frontend", icon: "nextjs", description: "Full-stack React framework", order: 2, featured: true },
  { _id: "sk-3", name: "JavaScript (ES6+)", category: "Frontend", icon: "javascript", description: "Core scripting language", order: 3, featured: true },
  { _id: "sk-4", name: "HTML5 & CSS3", category: "Frontend", icon: "html5", description: "Markup and styling foundation", order: 4, featured: true },
  { _id: "sk-5", name: "Tailwind CSS", category: "Frontend", icon: "tailwind", description: "Utility-first CSS framework", order: 5, featured: true },
  { _id: "sk-6", name: "Bootstrap", category: "Frontend", icon: "bootstrap", description: "Responsive UI component library", order: 6, featured: true },
  { _id: "sk-7", name: "REST API Integration", category: "Frontend", icon: "rest-api", description: "Connecting frontend to backend services", order: 7, featured: true },
  { _id: "sk-8", name: "Framer Motion", category: "Frontend", icon: "framer-motion", description: "Smooth animations for React", order: 8, featured: true },

  // Backend
  { _id: "sk-9", name: "Node.js", category: "Backend", icon: "nodejs", description: "JavaScript runtime environment", order: 9, featured: true },
  { _id: "sk-10", name: "MongoDB", category: "Backend", icon: "mongodb", description: "NoSQL document database", order: 10, featured: true },
  { _id: "sk-11", name: "MongoDB Atlas", category: "Backend", icon: "mongodb", description: "Cloud-hosted MongoDB service", order: 11, featured: true },
  { _id: "sk-12", name: "Mongoose", category: "Backend", icon: "mongoose", description: "MongoDB object modeling", order: 12, featured: true },
  { _id: "sk-13", name: "SQL", category: "Backend", icon: "sql", description: "Relational database querying", order: 13, featured: true },

  // Languages
  { _id: "sk-14", name: "JavaScript", category: "Languages", icon: "javascript", description: "General-purpose programming language", order: 14, featured: true },
  { _id: "sk-15", name: "Core Java", category: "Languages", icon: "java", description: "Object-oriented programming language", order: 15, featured: true },

  // Tools & Platforms
  { _id: "sk-16", name: "Git", category: "Tools & Platforms", icon: "git", description: "Version control system", order: 16, featured: true },
  { _id: "sk-17", name: "GitHub", category: "Tools & Platforms", icon: "github", description: "Code hosting and collaboration", order: 17, featured: true },
  { _id: "sk-18", name: "VS Code", category: "Tools & Platforms", icon: "vscode", description: "Primary code editor", order: 18, featured: true },
  { _id: "sk-19", name: "Postman", category: "Tools & Platforms", icon: "postman", description: "API testing and debugging", order: 19, featured: true },
  { _id: "sk-20", name: "Vercel", category: "Tools & Platforms", icon: "vercel", description: "Frontend deployment platform", order: 20, featured: true },
  { _id: "sk-21", name: "Netlify", category: "Tools & Platforms", icon: "netlify", description: "Static site hosting & deployment", order: 21, featured: true },
  { _id: "sk-22", name: "Render", category: "Tools & Platforms", icon: "render", description: "Cloud app hosting", order: 22, featured: true },

  // AI Developer Tools
  { _id: "sk-23", name: "ChatGPT", category: "AI Tools", icon: "chatgpt", description: "AI pair-programming assistant", order: 23, featured: true },
  { _id: "sk-24", name: "Claude", category: "AI Tools", icon: "claude", description: "AI coding and reasoning assistant", order: 24, featured: true },
  { _id: "sk-25", name: "Cursor", category: "AI Tools", icon: "cursor", description: "AI-powered code editor", order: 25, featured: true },
  { _id: "sk-26", name: "Replit", category: "AI Tools", icon: "replit", description: "Cloud-based coding environment", order: 26, featured: true },
  { _id: "sk-27", name: "Lovable", category: "AI Tools", icon: "lovable", description: "AI app builder", order: 27, featured: true },
  { _id: "sk-28", name: "v0", category: "AI Tools", icon: "v0", description: "AI UI generation tool", order: 28, featured: true },

  // Marketing & Ads
  { _id: "sk-29", name: "Meta Ads", category: "Marketing & Ads", icon: "meta-ads", description: "Facebook & Instagram ad campaigns", order: 29, featured: true },
  { _id: "sk-30", name: "Google Ads", category: "Marketing & Ads", icon: "google-ads", description: "Search & display ad campaigns", order: 30, featured: true },
];

// Sample project shape — replace with real projects in Sanity Studio.
export const placeholderProjects: Project[] = [
  {
    _id: "proj-1",
    title: "Sample Project One",
    slug: "sample-project-one",
    description: "A short one-line summary of what this project does and who it's for.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Web App",
    year: "2026",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/sample-project-one",
    featured: true,
    order: 1,
  },
  {
    _id: "proj-2",
    title: "Sample Project Two",
    slug: "sample-project-two",
    description: "A short one-line summary of what this project does and who it's for.",
    technologies: ["React", "Sanity", "Framer Motion"],
    category: "Business Website",
    year: "2026",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/sample-project-two",
    featured: true,
    order: 2,
  },
  {
    _id: "proj-3",
    title: "Sample Project Three",
    slug: "sample-project-three",
    description: "A short one-line summary of what this project does and who it's for.",
    technologies: ["React", "Node.js", "MongoDB"],
    category: "Product",
    year: "2025",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/sample-project-three",
    featured: true,
    order: 3,
  },
];

export const placeholderExperience: Experience[] = [
  {
    _id: "exp-1",
    role: "MERN Stack Developer",
    company: "Your Company / Freelance",
    employmentType: "Full-time",
    location: "Remote",
    startDate: "2023",
    current: true,
    description: "Placeholder entry — describe your real role in Sanity Studio.",
    responsibilities: [
      "Placeholder responsibility — add real bullet points in Sanity Studio.",
      "Placeholder responsibility — add real bullet points in Sanity Studio.",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    order: 1,
  },
  {
    _id: "exp-2",
    role: "MERN Stack Developer",
    company: "Your Company / Freelance",
    employmentType: "Full-time",
    location: "Remote",
    startDate: "2023",
    current: true,
    description: "Placeholder entry — describe your real role in Sanity Studio.",
    responsibilities: [
      "Placeholder responsibility — add real bullet points in Sanity Studio.",
      "Placeholder responsibility — add real bullet points in Sanity Studio.",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    order: 1,
  },
];

export const placeholderCertifications: Certification[] = [
  {
    _id: "cert-1",
    title: "Certification Name",
    issuer: "Issuing Platform",
    date: "2025",
    order: 1,
  },
];

export const placeholderAchievements: Achievement[] = [
  { _id: "ach-1", value: "10+", title: "Projects Completed", description: "Successfully delivered web projects.", icon: "trophy", order: 1 },
  { _id: "ach-2", value: "5+", title: "Happy Clients", description: "Positive feedback and long-term support.", icon: "star", order: 2 },
  { _id: "ach-3", value: "3+", title: "Certifications", description: "Completed courses to sharpen core skills.", icon: "award", order: 3 },
  { _id: "ach-4", value: "100%", title: "Client Satisfaction", description: "Focused on quality and clean work.", icon: "users", order: 4 },
  { _id: "ach-5", value: "—", title: "Continuous Learning", description: "Always updating skills with new technologies.", icon: "zap", order: 5 },
  { _id: "ach-6", value: "—", title: "Goal Oriented", description: "Turning ideas into real-world solutions.", icon: "target", order: 6 },
];

export const placeholderServices: Service[] = [
  { _id: "srv-1", title: "Website Development", description: "Custom, responsive websites tailored to your business needs.", icon: "code", order: 1, featured: true },
  { _id: "srv-2", title: "UI/UX Design", description: "Clean, modern designs that provide a great user experience.", icon: "palette", order: 2, featured: true },
  { _id: "srv-3", title: "Responsive Design", description: "Websites that look right on desktop, tablet, and mobile.", icon: "smartphone", order: 3, featured: true },
  { _id: "srv-4", title: "Website Maintenance", description: "Ongoing support, updates, and performance improvements.", icon: "settings", order: 4, featured: true },
  { _id: "srv-5", title: "Performance Optimization", description: "Fast, secure, SEO-friendly websites built for reach.", icon: "rocket", order: 5, featured: true },
  { _id: "srv-6", title: "Consultation & Support", description: "Expert advice and technical support for your projects.", icon: "layers", order: 6, featured: true },
];

// Clearly placeholder — never present invented testimonials as real. Replace
// via Sanity Studio once real client feedback is collected.
export const placeholderTestimonials: Testimonial[] = [
  { _id: "test-1", name: "Client Name", role: "Business Owner", company: "Sample Company", quote: "This is placeholder testimonial text — replace with a real client quote in Sanity Studio.", rating: 5, order: 1, published: true },
  { _id: "test-2", name: "Client Name", role: "Founder", company: "Sample Company", quote: "This is placeholder testimonial text — replace with a real client quote in Sanity Studio.", rating: 5, order: 2, published: true },
  { _id: "test-3", name: "Client Name", role: "Marketing Lead", company: "Sample Company", quote: "This is placeholder testimonial text — replace with a real client quote in Sanity Studio.", rating: 5, order: 3, published: true },
];