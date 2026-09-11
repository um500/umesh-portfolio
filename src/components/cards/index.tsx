// import Image from "next/image";
// import Link from "next/link";
// import { ArrowUpRight, Eye, Github, GraduationCap, Star } from "lucide-react";
// import { getIcon } from "@/lib/icon-map";
// import { urlForImage } from "@/sanity/image";
// import { cn } from "@/lib/utils";
// import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
// import type {
//   Achievement,
//   Certification,
//   Education,
//   Experience,
//   Project,
//   Service,
//   Skill,
//   Testimonial,
// } from "@/types/portfolio";

// /* --------------------------------- Project --------------------------------- */

// export function ProjectCard({ project }: { project: Project }) {
//   const image = urlForImage(project.featuredImage)?.width(720).height(480).url();

//   return (
//     <article className="group relative overflow-hidden rounded-card border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:border-border-hover hover:bg-card-hover hover:shadow-glow">
//       {/* Full-card link to the detail page — sits above everything except the
//           hover buttons and action links, which get a higher z-index so they
//           stay independently clickable without nesting <a> tags. */}
//       <Link
//         href={`/projects/${project.slug}`}
//         className="absolute inset-0 z-10"
//         aria-label={`View full details for ${project.title}`}
//       />

//       <div className="relative aspect-[3/2] overflow-hidden bg-bg-secondary">
//         {image ? (
//           <Image
//             src={image}
//             alt={project.title}
//             fill
//             className="object-cover transition-transform duration-500 group-hover:scale-105"
//             sizes="(min-width: 1024px) 33vw, 100vw"
//           />
//         ) : (
//           <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-card to-bg-secondary text-text-muted">
//             {project.title}
//           </div>
//         )}

//         {/* Gradient scrim from the bottom + two action buttons, revealed on hover */}
//         <div className="absolute inset-0 flex flex-wrap items-end justify-center gap-3 bg-gradient-to-t from-bg via-bg/50 to-transparent px-4 pb-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//           {project.liveUrl ? (
            
//             <a  href={project.liveUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="relative z-20 inline-flex translate-y-3 items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-bg shadow-glow transition-all duration-300 hover:bg-accent-bright group-hover:translate-y-0"
//             >
//               Live Preview <ArrowUpRight className="h-3.5 w-3.5" />
//             </a>
//           ) : null}
//           <Link
//             href={`/projects/${project.slug}`}
//             className="relative z-20 inline-flex translate-y-3 items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 group-hover:translate-y-0"
//           >
//             View Details <Eye className="h-3.5 w-3.5" />
//           </Link>
//         </div>
//       </div>

//       <div className="relative p-6">
//         <div className="flex items-start justify-between gap-3">
//           <h3 className="text-lg font-semibold text-text-primary">{project.title}</h3>
//           <span className="shrink-0 text-xs text-text-muted">{project.year}</span>
//         </div>
//         <p className="mt-2 text-sm text-text-secondary">{project.description}</p>
//         <div className="mt-4 flex flex-wrap gap-2">
//           {project.technologies.map((tech) => (
//             <span key={tech} className="rounded-full bg-bg-secondary px-2.5 py-1 text-xs text-text-secondary">
//               {tech}
//             </span>
//           ))}
//         </div>
//         {project.githubUrl ? (
//           <div className="relative z-20 mt-5 flex items-center text-sm">
            
//             <a  href={project.githubUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group/link inline-flex items-center gap-1 text-text-secondary transition-colors duration-200 hover:text-text-primary"
//             >
//               View Code{" "}
//               <Github className="h-4 w-4 transition-transform duration-200 group-hover/link:rotate-6" />
//             </a>
//           </div>
//         ) : null}
//       </div>
//     </article>
//   );
// }

// /* ---------------------------------- Skill ----------------------------------- */

// export function SkillCard({ skill }: { skill: Skill }) {
//   const initials = skill.name.slice(0, 2).toUpperCase();
//   return (
//     <div className="group flex flex-col items-center gap-3 rounded-card border border-border bg-card px-5 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-border-hover hover:bg-card-hover hover:shadow-glow">
//       <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-bg-secondary font-mono text-sm font-semibold text-accent transition-transform duration-300 group-hover:scale-110">
//         {initials}
//       </span>
//       <div>
//         <p className="font-semibold text-text-primary">{skill.name}</p>
//         <p className="text-xs text-text-muted">{skill.description || skill.category}</p>
//       </div>
//     </div>
//   );
// }

// /* -------------------------------- Education --------------------------------- */

// export function EducationCard({ education }: { education: Education }) {
//   return (
//     <div className="group rounded-card border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-hover hover:shadow-glow">
//       <div className="flex items-center justify-between">
//         <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-bg-secondary text-accent transition-transform duration-300 group-hover:scale-110">
//           <GraduationCap className="h-5 w-5" />
//         </span>
//         <div className="flex items-center gap-3">
//           <span className="text-sm text-text-muted">
//             {education.startYear} – {education.endYear}
//           </span>
//           <span
//             className={cn(
//               "rounded-full px-3 py-1 text-xs font-medium",
//               education.status === "completed"
//                 ? "bg-success/10 text-success"
//                 : "bg-warning/10 text-warning"
//             )}
//           >
//             {education.status === "completed" ? "Completed" : "In Progress"}
//           </span>
//         </div>
//       </div>
//       <h3 className="mt-5 text-lg font-semibold text-text-primary">{education.degree}</h3>
//       <p className="text-sm text-text-secondary">{education.institution}</p>
//       <p className="mt-3 text-sm text-text-muted">{education.description}</p>
//     </div>
//   );
// }

// /* -------------------------------- Experience --------------------------------- */

// export function ExperienceItem({ experience }: { experience: Experience }) {
//   return (
//     <div className="relative pl-10">
//       <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-accent/50 bg-bg">
//         <span className="h-2 w-2 rounded-full bg-accent" />
//       </span>
//       <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
//         <h4 className="font-semibold text-text-primary">{experience.role}</h4>
//         <span className="text-sm text-text-muted">
//           {experience.startDate} – {experience.current ? "Present" : experience.endDate}
//         </span>
//       </div>
//       <p className="text-sm text-accent">{experience.company}</p>
//       <p className="mt-2 text-sm text-text-secondary">{experience.description}</p>
//     </div>
//   );
// }

// export function CertificationItem({ certification }: { certification: Certification }) {
//   return (
//     <div className="relative pl-10">
//       <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-accent/50 bg-bg">
//         <span className="h-2 w-2 rounded-full bg-cyan" />
//       </span>
//       <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
//         <h4 className="font-semibold text-text-primary">{certification.title}</h4>
//         <span className="text-sm text-text-muted">{certification.date}</span>
//       </div>
//       <p className="text-sm text-text-secondary">{certification.issuer}</p>
//     </div>
//   );
// }

// /* -------------------------------- Achievement --------------------------------- */

// export function AchievementCard({ achievement }: { achievement: Achievement }) {
//   const Icon = getIcon(achievement.icon);
//   return (
//     <div className="group rounded-card border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-hover hover:shadow-glow">
//       <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-bg-secondary text-accent transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
//         <Icon className="h-5 w-5" />
//       </span>
//       <p className="mt-4 text-3xl font-bold text-text-primary">
//         <AnimatedCounter value={achievement.value} />
//       </p>
//       <p className="mt-1 font-semibold text-text-primary">{achievement.title}</p>
//       <p className="mt-1 text-sm text-text-muted">{achievement.description}</p>
//     </div>
//   );
// }

// /* ---------------------------------- Service ----------------------------------- */

// export function ServiceCard({ service }: { service: Service }) {
//   const Icon = getIcon(service.icon);
//   return (
//     <div className="group rounded-card border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-border-hover hover:shadow-glow">
//       <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-bg-secondary text-accent transition-transform duration-300 group-hover:-translate-y-0.5">
//         <Icon className="h-5 w-5" />
//       </span>
//       <h3 className="mt-4 font-semibold text-text-primary">{service.title}</h3>
//       <p className="mt-1 text-sm text-text-secondary">{service.description}</p>
//     </div>
//   );
// }

// /* -------------------------------- Testimonial --------------------------------- */

// export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
//   const avatar = urlForImage(testimonial.avatar)?.width(80).height(80).url();
//   return (
//     <div className="glass-card flex h-full flex-col rounded-card p-6 transition-colors duration-300 hover:border-border-hover">
//       <div className="flex items-center gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`}>
//         {Array.from({ length: 5 }).map((_, i) => (
//           <Star
//             key={i}
//             className={cn("h-4 w-4", i < testimonial.rating ? "fill-warning text-warning" : "text-text-muted")}
//           />
//         ))}
//       </div>
//       <p className="mt-4 flex-1 text-sm text-text-secondary">&ldquo;{testimonial.quote}&rdquo;</p>
//       <div className="mt-6 flex items-center gap-3">
//         <div className="relative h-10 w-10 overflow-hidden rounded-full bg-bg-secondary">
//           {avatar ? (
//             <Image src={avatar} alt={testimonial.name} fill className="object-cover" />
//           ) : null}
//         </div>
//         <div>
//           <p className="text-sm font-semibold text-text-primary">{testimonial.name}</p>
//           <p className="text-xs text-text-muted">
//             {testimonial.role}, {testimonial.company}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }