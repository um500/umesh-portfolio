# Umesh Portfolio

A premium, dark-themed personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and Sanity CMS.

## Stack

- Next.js 14 (App Router, Server Components by default)
- TypeScript (strict)
- Tailwind CSS — design tokens in `tailwind.config.ts`
- Framer Motion — reusable variants in `src/lib/motion.ts`
- Sanity CMS + Sanity Studio (standalone, run via `npm run studio`)
- React Hook Form + Zod for the contact form
- Resend for transactional email

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in your real values
npm run dev
```

The site runs at `http://localhost:3000` even with an empty `.env.local` —
every section falls back to clearly-labeled placeholder content
(`src/lib/placeholder-data.ts`) until Sanity is configured, so nothing
breaks while you're setting things up.

## Wiring up Sanity

1. Create a project at [sanity.io](https://sanity.io) and grab your **Project ID**.
2. Fill in `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_VERSION=2025-01-01
   SANITY_TOKEN=your_token_if_you_need_write_access
   ```
3. Run the Studio locally:
   ```bash
   npm run studio
   ```
   This opens Sanity Studio using the schemas in `src/studio/schemaTypes/`.
4. Fill in **Site Settings**, **Hero**, **About**, and **Resume** first (they're
   singletons), then add Education, Skills, Projects, Experience,
   Certifications, Achievements, Services, and Testimonials.
5. Deploy the Studio (optional, for a hosted CMS UI):
   ```bash
   npx sanity deploy
   ```

**Never invent testimonials, achievements, or client names.** Only turn a
testimonial's `published` toggle on once you have a real quote — see the
field description in Sanity Studio.

## Wiring up the contact form

The form posts to `src/app/api/contact/route.ts`, which validates with Zod,
checks a honeypot field, rate-limits by IP, and sends mail via
[Resend](https://resend.com):

```
RESEND_API_KEY=your_resend_key
CONTACT_EMAIL=you@example.com
```

Until these are set, the API route returns a clear 503 instead of silently
failing or faking a success message.

## Project structure

```
sanity.config.ts       Studio config (must live at project root — the
                        Sanity CLI only auto-discovers it here)
sanity.cli.ts           Studio CLI config (same reason)
src/
  app/                 routes (home, /projects, /projects/[slug], API)
  components/
    layout/             Navbar, Footer, Container
    ui/                 Button, SectionHeading, Badge, Divider
    animations/          Reveal, AnimatedCounter, MagneticButton
    graphics/           Glow, BackgroundGrid, FloatingCard
    sections/           one file per homepage section
    cards/              ProjectCard, SkillCard, etc.
  lib/                  utils, validations, motion variants, placeholder data
  sanity/               client, image helper, GROQ queries, fetch layer (uses
                        @sanity/client directly — no next-sanity dependency)
  types/                shared TypeScript types
  hooks/                useActiveSection
  studio/               Studio content only — schemas + navigation
    schemaTypes/          one schema per document type
    structure.ts           Studio navigation (singletons pinned at top)
```

## Notes

- Fonts (Manrope, JetBrains Mono) are self-hosted via `@fontsource-variable`,
  not fetched from Google Fonts — the app builds and runs with zero outbound
  font requests, dev or production.
- The frontend talks to Sanity through `@sanity/client` directly (not
  `next-sanity`), specifically to avoid pulling Sanity Studio's UI bundle
  (and its `react-is` dependency) into the Next.js app.
- `sanity.config.ts` / `sanity.cli.ts` live at the **project root**, not
  inside `src/studio/` — this isn't a style choice, the Sanity CLI only
  auto-discovers config files at the root. They're thin files that import
  the real schema/structure from `src/studio/`.
- Verified end-to-end in a clean environment: `npm install`, `tsc --noEmit`,
  `eslint`, `next build`, `next dev`, and `sanity build` all pass with no
  errors.
- All content is fetched server-side with a 60-second revalidation window;
  adjust `next: { revalidate }` in `src/sanity/fetch.ts` if you want
  content changes to appear faster or slower.
