import type { Metadata } from "next";
import LandingPageClient from "./LandingPageClient"; // Assuming the main page component was renamed

export const metadata: Metadata = {
  title: "BuildPCB.ai | AI-Powered PCB Design",
  description: "The Figma + Cursor for Electronics Engineers",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "BuildPCB.ai | AI-Powered PCB Design",
    description:
      "The AI co-pilot for hardware engineers. From concept to PCB in minutes, not days.",
    url: "https://buildpcbs.com", // Your main domain URL
    siteName: "BuildPCB.ai",
    images: [
      {
        url: "/logo.png", // The image file should be in the /public folder
        width: 1200,
        height: 630,
        alt: "BuildPCB.ai Logo and tagline",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildPCB.ai | AI-Powered PCB Design",
    description:
      "From Concept to PCB in Minutes, Not Days. The AI co-pilot for hardware engineers.",
    images: ["/logo.png"], // The image file should be in the /public folder
  },
};

export default function Page() {
  return <LandingPageClient />;
}