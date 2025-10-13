import type { Metadata } from "next";
import LandingPageClient from "./LandingPageClient"; // Assuming the main page component was renamed

export const metadata: Metadata = {
  title: "BuildPCBs.com | AI-Powered PCB Design",
  description: "The Figma + Cursor for Electronics Engineers",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "BuildPCBs.com | AI-Powered PCB Design",
    description:
      "The AI co-pilot for hardware engineers. From concept to PCB in minutes, not days.",
    url: "https://buildpcbs.com",
    siteName: "BuildPCBs.com",
    images: [
      {
        url: "/og-image.png?v=2",
        width: 1200,
        height: 630,
        alt: "BuildPCBs.com - AI-Powered PCB Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildPCBs.com | AI-Powered PCB Design",
    description:
      "From Concept to PCB in Minutes, Not Days. The AI co-pilot for hardware engineers.",
    images: ["/og-image.png?v=2"],
  },
  alternates: {
    canonical: "https://buildpcbs.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "BuildPCBs Team" }],
  creator: "BuildPCBs",
  publisher: "BuildPCBs.com",
  other: {
    "application/ld+json": JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "BuildPCBs.com",
        url: "https://buildpcbs.com",
        logo: "https://buildpcbs.com/logo.png",
        description: "AI-powered PCB design platform for electronics engineers",
        foundingDate: "2024",
        sameAs: [
          "https://twitter.com/buildpcbwithAi",
          "https://linkedin.com/company/buildpcbs",
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "BuildPCBs.com",
        url: "https://buildpcbs.com",
        description: "AI-powered PCB design platform for electronics engineers",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://buildpcbs.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ]),
  },
};

export default function Page() {
  return <LandingPageClient />;
}
