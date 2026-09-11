import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "text", validation: (r) => r.required() }),
    defineField({
      name: "icon",
      title: "Icon key",
      type: "string",
      options: { list: ["code", "palette", "smartphone", "settings", "rocket", "layers"] },
    }),
    defineField({ name: "features", title: "Features", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "order", title: "Order", type: "number", validation: (r) => r.required() }),
    defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: true }),
  ],
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
