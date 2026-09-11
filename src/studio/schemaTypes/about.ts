import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "text", validation: (r) => r.required() }),
    defineField({ name: "longDescription", title: "Long Description", type: "text" }),
    defineField({
      name: "highlights",
      title: "Capability Highlights",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string" },
            { name: "description", type: "string" },
            {
              name: "icon",
              type: "string",
              options: { list: ["lightbulb", "circle-dot", "eye", "users", "sparkles", "target"] },
            },
          ],
        },
      ],
      validation: (r) => r.max(4),
    }),
  ],
});
