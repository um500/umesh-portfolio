import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getSiteSettings } from "@/sanity/fetch";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://umesh.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Umesh — Portfolio",
    template: "%s | Umesh — Portfolio",
  },
  description:
    "Umesh is a Web Developer and Designer creating modern, responsive and user-focused digital experiences.",
  openGraph: {
    title: "Umesh — Portfolio",
    description:
      "Umesh is a Web Developer and Designer creating modern, responsive and user-focused digital experiences.",
    url: siteUrl,
    siteName: "Umesh — Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Umesh — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Umesh — Portfolio",
    description:
      "Umesh is a Web Developer and Designer creating modern, responsive and user-focused digital experiences.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const site = await getSiteSettings();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Umesh",
        jobTitle: "Web Developer / Designer",
        email: site.email,
        url: siteUrl,
        sameAs: site.socialLinks.map((l) => l.url),
      },
      {
        "@type": "WebSite",
        name: "Umesh — Portfolio",
        url: siteUrl,
      },
    ],
  };

  return (
    <html lang="en">
      <body className="bg-bg text-text-primary antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
         <a href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer site={site} />
      </body>
    </html>
  );
}