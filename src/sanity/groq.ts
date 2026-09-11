/**
 * `next-sanity`'s `groq` export is just a template-literal identity tag used
 * for editor syntax highlighting — it has no runtime behavior of its own.
 * Defining it locally means the frontend app never imports `next-sanity`
 * (which pulls in Sanity Studio's UI package and, transitively, `react-is`)
 * just to tag a string.
 */
export function groq(strings: TemplateStringsArray, ...values: unknown[]): string {
  return strings.reduce((query, part, i) => query + part + (i < values.length ? String(values[i]) : ""), "");
}
