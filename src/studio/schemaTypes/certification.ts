import { defineField, defineType } from "sanity";

export default defineType({
  name: "certification",
  title: "Certification",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "issuer", title: "Issuer", type: "string", validation: (r) => r.required() }),
    defineField({ name: "date", title: "Date", type: "string" }),
    defineField({ name: "credentialUrl", title: "Credential URL", type: "url" }),
    defineField({ name: "image", title: "Certificate Image", type: "image" }),
    defineField({ name: "order", title: "Order", type: "number", validation: (r) => r.required() }),
  ],
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
