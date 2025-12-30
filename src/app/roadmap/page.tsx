import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roadmap | BuildPCBs.com",
  description: "Explore our future plans and upcoming features.",
};

const RoadmapPage = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Roadmap
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Our roadmap is currently being updated. Check back soon for upcoming
          features and improvements.
        </p>
      </div>
    </section>
  );
};

export default RoadmapPage;
