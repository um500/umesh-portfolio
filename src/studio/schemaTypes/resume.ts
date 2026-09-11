import { defineField, defineType } from "sanity";

export default defineType({
  name: "resume",
  title: "Resume",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", initialValue: "Umesh — Resume" }),
    defineField({
      name: "file",
      title: "Resume File (PDF)",
      type: "file",
      options: { accept: ".pdf" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "version", title: "Version", type: "string" }),
    defineField({ name: "lastUpdated", title: "Last Updated", type: "date" }),
    defineField({ name: "description", title: "Description", type: "text" }),
  ],
});
