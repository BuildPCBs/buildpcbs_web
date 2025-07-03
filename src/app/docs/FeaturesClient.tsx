"use client";
import React from "react";
import Link from "next/link";
import {
  CircuitBoard,
  ArrowLeft,
  Wand2,
  Cpu,
  Lightbulb,
  LayoutDashboard,
  MousePointer2,
  Share2,
  Camera,
  Box,
  Users,
  ShieldCheck,
  Layers,
  Zap,
  Rocket,
} from "lucide-react";

// Feature Card Component
const FeatureCard = ({
  icon,
  title,
  description,
  tag,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag?: string;
}) => (
  <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 relative overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-teal-500/50 hover:bg-slate-900 hover:-translate-y-1">
    <div className="flex-shrink-0 flex items-center mb-4">
      <div className="w-12 h-12 rounded-lg bg-teal-900/20 flex items-center justify-center border border-teal-500/20 mr-4">
        {icon}
      </div>
      {tag && (
        <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-teal-900/30 text-teal-300 border-teal-800 border">
          {tag}
        </span>
      )}
    </div>
    <div className="flex-grow">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  </div>
);

// Main Page Component
const FeaturesPage = () => {
  return (
    <div className="bg-slate-950 text-slate-300 min-h-screen font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 p-4 sm:p-5 bg-slate-950/90 backdrop-blur-md border-b border-teal-900/50">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-white flex items-center"
          >
            <CircuitBoard className="text-teal-400 mr-2" size={28} />
            buildPCB<span className="text-teal-400">.ai</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/roadmap"
              className="text-sm font-medium text-slate-300 hover:text-teal-300 transition-colors"
            >
              Roadmap
            </Link>
            <Link
              href="/"
              className="bg-slate-800 hover:bg-slate-700 text-white font-medium py-2 px-4 rounded-full transition-colors text-sm border border-slate-700 flex items-center"
            >
              <ArrowLeft className="mr-2" size={16} />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 pb-16 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 50% -20%, rgba(13, 148, 136, 0.25), transparent 80%)",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-5 max-w-3xl mx-auto">
            Under the Hood
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-400">
            A deep dive into every feature that makes buildPCB.ai the most
            powerful AI co-pilot for hardware design. Here's what we've built
            and what's coming next.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* AI Core Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
              <Cpu size={32} className="text-teal-400" />
              The AI Core: Your Design Co-Pilot
            </h2>
            <p className="text-slate-400 mt-2 max-w-2xl mx-auto">
              The proprietary technology that understands your intent and
              automates complex work.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Wand2 size={24} className="text-teal-400" />}
              title="Prompt-Based Generation"
              description="Describe circuit blocks in plain English. Our AI parses your request, understands the context, and generates a valid, well-structured schematic for you."
            />
            <FeatureCard
              icon={<Lightbulb size={24} className="text-teal-400" />}
              title="AI Design Rationale"
              description="We don't just build; we explain. The AI provides a rationale for its component choices and design topology, making it a powerful learning tool."
            />
            <FeatureCard
              icon={<ShieldCheck size={24} className="text-teal-400" />}
              title="Intelligent Component Selection"
              description="The AI selects appropriate components from a vast, vetted library based on your design constraints, such as voltage, current, and package size."
            />
          </div>
        </section>

        {/* Schematic Editor Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
              <LayoutDashboard size={32} className="text-teal-400" />
              The Schematic Editor: Intuitive & Powerful
            </h2>
            <p className="text-slate-400 mt-2 max-w-2xl mx-auto">
              A full-featured, browser-based editor designed for speed and
              precision.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<MousePointer2 size={24} className="text-teal-400" />}
              title="Infinite Canvas"
              description="An unbounded, high-performance canvas that lets you pan, zoom, and organize your design without limits. Your workspace is as big as your ideas."
            />
            <FeatureCard
              icon={<Zap size={24} className="text-teal-400" />}
              title="Smart Wiring & Net Highlighting"
              description="Draw wires that snap perfectly to component pins. Click on any net to see all its connections instantly highlighted across the entire schematic."
            />
            <FeatureCard
              icon={<Box size={24} className="text-teal-400" />}
              title="Detailed Properties Panel"
              description="Select any component or wire to view and edit all its properties, from values and footprints to custom metadata, in a clean, accessible panel."
            />
          </div>
        </section>

        {/* PCB Layout and 3D View */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
              <Layers size={32} className="text-teal-400" />
              PCB Layout & 3D Visualization
            </h2>
            <p className="text-slate-400 mt-2 max-w-2xl mx-auto">
              Transition from schematic to a physical board seamlessly within
              the same environment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Cpu size={24} className="text-teal-400" />}
              title="AI-Assisted PCB Placement"
              description="Get intelligent suggestions for optimal component placement on your board to minimize trace length and improve performance. A huge time-saver."
              tag="Planned"
            />
            <FeatureCard
              icon={<Zap size={24} className="text-teal-400" />}
              title="Advanced Auto-Router"
              description="Our AI router does more than connect dots. It understands design rules and signal integrity to create clean, manufacturable routing in seconds."
              tag="Planned"
            />
            <FeatureCard
              icon={<Box size={24} className="text-teal-400" />}
              title="Interactive 3D Viewer"
              description="Instantly view your PCB design in a realistic 3D model. Check for mechanical clearances, component heights, and overall aesthetics before you order."
              tag="Planned"
            />
          </div>
        </section>

        {/* Collaboration & Team Features */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
              <Users size={32} className="text-teal-400" />
              Collaboration: Build Better, Together
            </h2>
            <p className="text-slate-400 mt-2 max-w-2xl mx-auto">
              Tools for teams to design, review, and manage projects with
              unparalleled efficiency.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Share2 size={24} className="text-teal-400" />}
              title="Real-Time Multiplayer Editing"
              description="Work on the same schematic or PCB layout with your teammates simultaneously. See their cursors and edits live, just like in Google Docs."
              tag="Planned"
            />
            <FeatureCard
              icon={<Users size={24} className="text-teal-400" />}
              title="Shared Team Libraries"
              description="Create, manage, and share a central library of components and schematic blocks for your entire team to ensure consistency and speed up design reuse."
              tag="Under Consideration"
            />
            <FeatureCard
              icon={<Box size={24} className="text-teal-400" />}
              title="In-Context Commenting & Reviews"
              description="Leave comments directly on components or sections of the design. Tag teammates, resolve threads, and conduct design reviews without ever leaving the IDE."
              tag="Planned"
            />
          </div>
        </section>

        {/* Advanced & Future Capabilities */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
              <Rocket size={32} className="text-teal-400" />
              Advanced & Future Capabilities
            </h2>
            <p className="text-slate-400 mt-2 max-w-2xl mx-auto">
              Pushing the boundaries of what's possible in hardware design.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Camera size={24} className="text-teal-400" />}
              title="Snap-to-Schematic"
              description="Reverse-engineer circuits from images. Take a picture of a PCB, and our AI will attempt to identify the components and recreate the schematic for you."
              tag="Planned"
            />
            <FeatureCard
              icon={<ShieldCheck size={24} className="text-teal-400" />}
              title="Advanced Simulation (SI/PI)"
              description="Run Signal Integrity and Power Integrity simulations directly in the editor to analyze and validate high-speed designs before fabrication."
              tag="Under Consideration"
            />
            <FeatureCard
              icon={<CircuitBoard size={24} className="text-teal-400" />}
              title="Direct-to-Fabrication API"
              description="One-click ordering of your PCBs and components. We integrate directly with major manufacturers to streamline the path from design to physical product."
              tag="Planned"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default FeaturesPage;
