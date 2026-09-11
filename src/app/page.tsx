import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Achievements } from "@/components/sections/Achievements";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Resume } from "@/components/sections/Resume";
import {
  getAbout,
  getAchievements,
  getCertifications,
  getEducation,
  getExperience,
  getFeaturedProjects,
  getHero,
  getResume,
  getServices,
  getSiteSettings,
  getSkills,
  getTestimonials,
} from "@/sanity/fetch";

export default async function HomePage() {
  const [hero, about, education, skills, projects, experience, certifications, achievements, services, testimonials, resume, site] =
    await Promise.all([
      getHero(),
      getAbout(),
      getEducation(),
      getSkills(),
      getFeaturedProjects(),
      getExperience(),
      getCertifications(),
      getAchievements(),
      getServices(),
      getTestimonials(),
      getResume(),
      getSiteSettings(),
    ]);

  return (
    <>
      <Hero hero={hero} />
      <About about={about} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Experience experience={experience} certifications={certifications} resumeUrl={resume?.fileUrl} />
      <Education education={education} />
         <Achievements achievements={achievements} />
      <Services services={services} />
      <Testimonials testimonials={testimonials} />
      <Contact site={site} />
      <Resume resume={resume} />
    </>
  );
}
