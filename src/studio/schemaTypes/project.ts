import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "description", title: "Short Description", type: "text", validation: (r) => r.max(200) }),
    defineField({ name: "longDescription", title: "Long Description", type: "text" }),
    defineField({ name: "featuredImage", title: "Featured Image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({ name: "technologies", title: "Technologies", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({ name: "year", title: "Year", type: "string" }),
    defineField({ name: "liveUrl", title: "Live Demo URL", type: "url" }),
    defineField({ name: "githubUrl", title: "GitHub URL", type: "url" }),
    defineField({
      name: "caseStudy",
      title: "Case Study",
      type: "object",
      fields: [
        { name: "challenge", type: "text" },
        { name: "solution", type: "text" },
        { name: "results", type: "text" },
      ],
    }),
    defineField({ name: "featured", title: "Featured on Homepage", type: "boolean", initialValue: false }),
    defineField({ name: "order", title: "Order", type: "number", validation: (r) => r.required() }),
  ],
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "title", subtitle: "category", media: "featuredImage" },
  },
});
