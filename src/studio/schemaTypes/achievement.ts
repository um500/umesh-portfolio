import { defineField, defineType } from "sanity";

export default defineType({
  name: "achievement",
  title: "Achievement",
  type: "document",
  fields: [
    defineField({ name: "value", title: "Value", type: "string", description: "e.g. 10+, 100%", validation: (r) => r.required() }),
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({
      name: "icon",
      title: "Icon key",
      type: "string",
      options: { list: ["trophy", "star", "award", "users", "zap", "target"] },
    }),
    defineField({ name: "order", title: "Order", type: "number", validation: (r) => r.required() }),
  ],
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
