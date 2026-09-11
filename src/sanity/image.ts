import createImageUrlBuilder from "@sanity/image-url";
import type { SanityImageRef } from "@/types/portfolio";
import { dataset, projectId } from "./client";

const builder =
  projectId && dataset ? createImageUrlBuilder({ projectId, dataset }) : null;

export function urlForImage(source?: SanityImageRef) {
  if (!builder || !source?.asset?._ref) return null;
  return builder.image(source).auto("format").fit("max");
}
