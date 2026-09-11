import type { StructureResolver } from "sanity/structure";

const SINGLETONS = [
  { id: "siteSettings", title: "Site Settings" },
  { id: "hero", title: "Hero" },
  { id: "about", title: "About" },
  { id: "resume", title: "Resume" },
];

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      ...SINGLETONS.map(({ id, title }) =>
        S.listItem()
          .title(title)
          .id(id)
          .child(S.document().schemaType(id).documentId(id))
      ),
      S.divider(),
      S.documentTypeListItem("education").title("Education"),
      S.documentTypeListItem("skill").title("Skills"),
      S.documentTypeListItem("project").title("Projects"),
      S.documentTypeListItem("experience").title("Experience"),
      S.documentTypeListItem("certification").title("Certifications"),
      S.documentTypeListItem("achievement").title("Achievements"),
      S.documentTypeListItem("service").title("Services"),
      S.documentTypeListItem("testimonial").title("Testimonials"),
    ]);
