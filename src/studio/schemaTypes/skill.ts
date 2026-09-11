import { defineField, defineType } from "sanity";

export default defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: ["Frontend", "Backend", "Languages", "Tools & Platforms", "AI Tools", "Marketing & Ads", "CMS", "Design"] },
      validation: (r) => r.required(),
    }),
    defineField({ name: "icon", title: "Icon key", type: "string", description: "Matches a key in src/lib/icon-map.ts" }),
    defineField({ name: "description", title: "Short Description", type: "string" }),
    defineField({ name: "order", title: "Order", type: "number", validation: (r) => r.required() }),
    defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: true }),
  ],
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
