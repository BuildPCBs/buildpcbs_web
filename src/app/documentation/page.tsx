import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation | BuildPCBs.com",
  description:
    "Complete documentation for BuildPCBs.com - Learn how to use our AI-powered PCB design platform.",
  openGraph: {
    title: "Documentation | BuildPCBs.com",
    description:
      "Complete documentation for BuildPCBs.com - Learn how to use our AI-powered PCB design platform.",
    url: "https://buildpcbs.com/documentation",
    siteName: "BuildPCBs.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BuildPCBs.com Documentation",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Documentation | BuildPCBs.com",
    description:
      "Complete documentation for BuildPCBs.com - Learn how to use our AI-powered PCB design platform.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://buildpcbs.com/documentation",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const DocumentationPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold">Documentation</h1>
      <p className="mt-4 text-lg">Welcome to our documentation!</p>
    </div>
  );
};

export default DocumentationPage;
