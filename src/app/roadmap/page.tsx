// src/app/roadmap/page.tsx
import React from "react";
import {
  CircuitBoard,
  ArrowLeft,
  CheckCircle2,
  Loader,
  Calendar,
  Sparkles,
} from "lucide-react";

// ===================================================================================
// HOW TO UPDATE THIS ROADMAP:
// 1. Find the feature you want to update in the `roadmapData` array below.
// 2. Change its `status` to one of: 'Completed', 'In Progress', 'Planned', or 'Under Consideration'.
// 3. Update the `lastUpdated` constant to the current date.
// 4. Commit and deploy your changes.
// ===================================================================================

const lastUpdated = "June 25, 2025";

const roadmapData = [
  // --- MVP & Core Experience (What's Done) ---
  {
    category: "Core IDE & AI Co-designer",
    name: "AI-Powered Schematic Generation",
    description:
      "Core feature allowing users to generate schematic blocks from natural language prompts.",
    status: "Completed",
  },
  {
    category: "Core IDE & AI Co-designer",
    name: "Interactive Canvas Editor",
    description:
      "A pannable, zoomable canvas to view and interact with generated designs.",
    status: "Completed",
  },
  {
    category: "Core IDE & AI Co-designer",
    name: "Manual Component & Wire Manipulation",
    description:
      "Ability to select, move, delete, and manually wire components.",
    status: "Completed",
  },
  {
    category: "Project Management",
    name: "Cloud Project Save/Load",
    description:
      "Users can save their work to the cloud and load it back using a Project ID.",
    status: "Completed",
  },

  // --- What We're Building Now ---
  {
    category: "Core IDE & AI Co-designer",
    name: "Real-Time Design Rule Check (DRC)",
    description:
      "Instant feedback on common electrical and design errors as you build.",
    status: "In Progress",
  },
  {
    category: "Collaboration & Team Features",
    name: "Shareable View-Only Links",
    description:
      "Generate a public link to share a snapshot of your design for feedback.",
    status: "In Progress",
  },
  {
    category: "Ecosystem & Integration",
    name: "Basic Bill of Materials (BOM) Export",
    description:
      "Generate a CSV file listing all components in the design for procurement.",
    status: "In Progress",
  },

  // --- Next Up: The Future ---
  {
    category: "Core IDE & AI Co-designer",
    name: "AI-Powered PCB Layout Generation",
    description:
      "Automatically generate an initial PCB layout from a completed schematic.",
    status: "Planned",
  },
  {
    category: "Core IDE & AI Co-designer",
    name: "Integrated 3D Viewer",
    description:
      "Visualize the PCB layout in 3D to check for component placement and mechanical fit.",
    status: "Planned",
  },
  {
    category: "Advanced Design & Analysis",
    name: "Visual Circuit Recognition (Snap-to-Schematic)",
    description:
      "Upload an image of a circuit, and have the AI attempt to reverse-engineer it into a schematic.",
    status: "Planned",
  },
  {
    category: "Collaboration & Team Features",
    name: "Real-time Collaborative Editing",
    description:
      "Multiple users editing the same design simultaneously, Google Docs-style.",
    status: "Planned",
  },
  {
    category: "Ecosystem & Integration",
    name: "Direct-to-Fabrication Integration (e.g., JLCPCB, PCBWay)",
    description:
      "One-click ordering of your designed PCBs and components from manufacturers.",
    status: "Planned",
  },

  // --- Ambitious Long-Term Vision ---
  {
    category: "Platform & Accessibility",
    name: "Native Desktop Application",
    description:
      "A downloadable desktop app for Windows, macOS, and Linux for offline access and enhanced performance.",
    status: "Under Consideration",
  },
  {
    category: "Monetization & Plans",
    name: "Tiered Subscription Plans",
    description:
      "Offering Free, Pro, and Team plans with different feature sets and usage limits.",
    status: "Under Consideration",
  },
  {
    category: "Advanced Design & Analysis",
    name: "Signal Integrity & Power Delivery Network (PDN) Analysis",
    description:
      "Advanced simulation tools for high-speed designs to ensure signal quality and power stability.",
    status: "Under Consideration",
  },
  {
    category: "Collaboration & Team Features",
    name: "Team Component Libraries",
    description:
      "Shared libraries for design teams to ensure consistency and reuse of standard components.",
    status: "Under Consideration",
  },
  {
    category: "Ecosystem & Integration",
    name: "Plugin & Extension Marketplace",
    description:
      "Allow third-party developers to build and share extensions that add new functionality.",
    status: "Under Consideration",
  },
];

const StatusBadge = ({ status }: { status: string }) => {
  const baseClasses = "text-xs font-medium mr-2 px-3 py-1 rounded-full border";
  let colorClasses = "";
  switch (status) {
    case "Completed":
      colorClasses = "bg-teal-900/30 text-teal-300 border-teal-800";
      break;
    case "In Progress":
      colorClasses = "bg-sky-900/30 text-sky-300 border-sky-800";
      break;
    case "Planned":
      colorClasses = "bg-amber-900/30 text-amber-300 border-amber-800";
      break;
    case "Under Consideration":
      colorClasses = "bg-slate-700/50 text-slate-400 border-slate-600";
      break;
  }
  return <span className={`${baseClasses} ${colorClasses}`}>{status}</span>;
};

const RoadmapPage = () => {
  const categories = [...new Set(roadmapData.map((item) => item.category))];

  return (
    <div className="bg-slate-950 text-slate-300 min-h-screen font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 p-4 sm:p-5 bg-slate-950/90 backdrop-blur-md border-b border-teal-900/50">
        <div className="container mx-auto flex justify-between items-center">
          <a
            href="/"
            className="text-2xl font-bold text-white flex items-center"
          >
            <CircuitBoard className="text-teal-400 mr-2" size={28} />
            buildPCB<span className="text-teal-400">.ai</span>
          </a>
          <a
            href="/"
            className="bg-slate-800 hover:bg-slate-700 text-white font-medium py-2 px-4 rounded-full transition-colors text-sm border border-slate-700 flex items-center"
          >
            <ArrowLeft className="mr-2" size={16} />
            Back to Home
          </a>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <header className="text-center mb-16">
          <div className="inline-flex items-center bg-teal-900/30 text-teal-300 px-4 py-1 rounded-full mb-4 border border-teal-800">
            <Sparkles className="mr-2" size={16} />
            <span className="text-sm font-medium">Building in Public</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Our Public Roadmap
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            We're building the future of electronics design in the open. Follow
            our progress and see what's next for BuildPCB.ai.
          </p>
          <div className="mt-4 text-sm text-slate-500">
            Last Updated: {lastUpdated}
          </div>
        </header>

        <main>
          {categories.map((category) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-semibold border-b-2 border-slate-800 pb-3 mb-8 text-white">
                {category}
              </h2>
              <div className="space-y-4">
                {roadmapData
                  .filter((item) => item.category === category)
                  .map((item, index) => (
                    <div
                      key={item.name}
                      className="bg-slate-900/50 p-5 rounded-2xl border border-slate-800 flex items-start transition-all duration-300 hover:border-teal-500/50 hover:bg-slate-900"
                    >
                      <div className="flex-shrink-0 mr-5 mt-1">
                        {item.status === "Completed" ? (
                          <CheckCircle2 className="text-teal-400" size={22} />
                        ) : item.status === "In Progress" ? (
                          <Loader
                            className="animate-spin text-sky-400"
                            size={22}
                          />
                        ) : item.status === "Planned" ? (
                          <Calendar className="text-amber-400" size={22} />
                        ) : (
                          <Sparkles className="text-slate-500" size={22} />
                        )}
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-1">
                          <h3 className="font-bold text-lg text-white mb-1 sm:mb-0">
                            {item.name}
                          </h3>
                          <StatusBadge status={item.status} />
                        </div>
                        <p className="text-slate-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default RoadmapPage;
