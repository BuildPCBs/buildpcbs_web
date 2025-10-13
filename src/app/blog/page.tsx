import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | BuildPCBs.com",
  description:
    "Latest news, tutorials, and insights about PCB design, electronics engineering, and AI-powered design tools.",
  openGraph: {
    title: "Blog | BuildPCBs.com",
    description:
      "Latest news, tutorials, and insights about PCB design, electronics engineering, and AI-powered design tools.",
    url: "https://buildpcbs.com/blog",
    siteName: "BuildPCBs.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BuildPCBs.com Blog",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | BuildPCBs.com",
    description:
      "Latest news, tutorials, and insights about PCB design, electronics engineering, and AI-powered design tools.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://buildpcbs.com/blog",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const BlogPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold">Blog</h1>
      <p className="mt-4 text-lg">Welcome to our blog!</p>
    </div>
  );
};

export default BlogPage;
