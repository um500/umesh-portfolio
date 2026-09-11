import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(80, "That name looks too long."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .max(20, "That phone number looks too long.")
    .optional()
    .or(z.literal("")),
  projectType: z
    .enum(["website", "redesign", "ecommerce", "maintenance", "consultation", "other"])
    .optional(),
  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters.")
    .max(2000, "Message is too long, please shorten it."),
  // Honeypot field: real users never fill this in.
  company: z.string().max(0, "Spam detected.").optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
