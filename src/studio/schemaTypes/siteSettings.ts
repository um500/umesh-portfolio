import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "siteTitle", title: "Site Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "text", validation: (r) => r.max(200) }),
    defineField({ name: "logo", title: "Logo", type: "image", options: { hotspot: true } }),
    defineField({ name: "email", title: "Email", type: "string", validation: (r) => r.required().email() }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "platform",
              type: "string",
              options: {
                list: ["github", "linkedin", "instagram", "twitter", "email", "youtube"],
              },
            },
            { name: "url", type: "url" },
          ],
        },
      ],
    }),
    defineField({
      name: "resume",
      title: "Resume File",
      type: "file",
      options: { accept: ".pdf" },
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        { name: "metaTitle", type: "string" },
        { name: "metaDescription", type: "text" },
        { name: "ogImage", type: "image" },
      ],
    }),
  ],
});
