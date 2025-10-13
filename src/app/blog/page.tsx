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
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | BuildPCBs.com",
    description:
      "Latest news, tutorials, and insights about PCB design, electronics engineering, and AI-powered design tools.",
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
