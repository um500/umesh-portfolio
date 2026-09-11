import { defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({ name: "role", title: "Role", type: "string", validation: (r) => r.required() }),
    defineField({ name: "company", title: "Company", type: "string", validation: (r) => r.required() }),
    defineField({ name: "employmentType", title: "Employment Type", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "startDate", title: "Start Date", type: "string" }),
    defineField({ name: "endDate", title: "End Date", type: "string" }),
    defineField({ name: "current", title: "Current Role", type: "boolean", initialValue: false }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "responsibilities", title: "Responsibilities", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "technologies", title: "Technologies", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "order", title: "Order", type: "number", validation: (r) => r.required() }),
  ],
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
