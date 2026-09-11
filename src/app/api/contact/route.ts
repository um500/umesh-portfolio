import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations";

export const runtime = "nodejs";

// Simple in-memory rate limit: fine for a single-instance deploy. Swap for a
// durable store (Upstash/Redis) if you deploy across multiple regions.
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 3;
const hits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || entry.resetAt < now) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_REQUESTS;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a minute." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message || "Please check the form and try again." },
      { status: 422 }
    );
  }

  // Honeypot: a filled-in "company" field means a bot submitted the form.
  if (parsed.data.company) {
    return NextResponse.json({ success: true });
  }

  const { name, email, phone, projectType, message } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!apiKey || !contactEmail) {
    console.error("Contact form is not fully configured: missing RESEND_API_KEY or CONTACT_EMAIL.");
    return NextResponse.json(
      { error: "The contact form isn't set up yet. Please email directly for now." },
      { status: 503 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: contactEmail,
      replyTo: email,
      subject: `New message from ${name}${projectType ? ` — ${projectType}` : ""}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        projectType ? `Project type: ${projectType}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json(
      { error: "Couldn't send your message right now. Please try again shortly." },
      { status: 500 }
    );
  }
}
