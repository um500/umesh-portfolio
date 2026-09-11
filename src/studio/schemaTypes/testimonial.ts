import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "role", title: "Role", type: "string" }),
    defineField({ name: "company", title: "Company", type: "string" }),
    defineField({ name: "avatar", title: "Avatar", type: "image", options: { hotspot: true } }),
    defineField({ name: "quote", title: "Quote", type: "text", validation: (r) => r.required().max(400) }),
    defineField({ name: "rating", title: "Rating", type: "number", validation: (r) => r.required().min(1).max(5) }),
    defineField({ name: "order", title: "Order", type: "number", validation: (r) => r.required() }),
    defineField({
      name: "published",
      title: "Published",
      type: "boolean",
      initialValue: false,
      description: "Only published, real testimonials should be turned on — never fabricate a quote.",
    }),
  ],
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
