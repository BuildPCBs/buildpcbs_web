import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | BuildPCBs.com",
  description:
    "Helpful resources for PCB design, electronics engineering tutorials, design guides, and tools.",
  openGraph: {
    title: "Resources | BuildPCBs.com",
    description:
      "Helpful resources for PCB design, electronics engineering tutorials, design guides, and tools.",
    url: "https://buildpcbs.com/resources",
    siteName: "BuildPCBs.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources | BuildPCBs.com",
    description:
      "Helpful resources for PCB design, electronics engineering tutorials, design guides, and tools.",
  },
};

const ResourcesPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold">Resources</h1>
      <p className="mt-4 text-lg">Welcome to our resources page!</p>
    </div>
  );
};

export default ResourcesPage;
