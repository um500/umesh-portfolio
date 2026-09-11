import { defineField, defineType } from "sanity";

export default defineType({
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    defineField({ name: "degree", title: "Degree", type: "string", validation: (r) => r.required() }),
    defineField({ name: "institution", title: "Institution", type: "string", validation: (r) => r.required() }),
    defineField({ name: "startYear", title: "Start Year", type: "string" }),
    defineField({ name: "endYear", title: "End Year", type: "string" }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: { list: ["completed", "in-progress"] },
      initialValue: "completed",
    }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "subjects", title: "Relevant Subjects", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "certificateUrl", title: "Certificate URL", type: "url" }),
    defineField({ name: "order", title: "Order", type: "number", validation: (r) => r.required() }),
  ],
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
