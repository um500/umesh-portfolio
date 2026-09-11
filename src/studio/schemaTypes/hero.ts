import { defineField, defineType } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    defineField({ name: "greeting", title: "Greeting", type: "string", initialValue: "Hi, I'm" }),
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "role", title: "Role", type: "string", validation: (r) => r.required() }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "portrait", title: "Portrait", type: "image", options: { hotspot: true } }),
    defineField({ name: "primaryButtonLabel", title: "Primary Button Label", type: "string", initialValue: "Let's Connect" }),
    defineField({ name: "primaryButtonHref", title: "Primary Button Link", type: "string", initialValue: "#contact" }),
    defineField({ name: "secondaryButtonLabel", title: "Secondary Button Label", type: "string", initialValue: "Download Resume" }),
    defineField({ name: "secondaryButtonHref", title: "Secondary Button Link", type: "string", initialValue: "#resume" }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", type: "string" },
            { name: "label", type: "string" },
          ],
        },
      ],
      validation: (r) => r.max(4),
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "platform", type: "string", options: { list: ["github", "linkedin", "instagram", "twitter", "email", "youtube"] } },
            { name: "url", type: "url" },
          ],
        },
      ],
    }),
  ],
});
