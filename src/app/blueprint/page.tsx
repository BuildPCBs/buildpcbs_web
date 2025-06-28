// src/app/blueprint/page.tsx
"use client";
import React from "react";
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
  BrainCircuit,
  Terminal,
  Palette,
  Save,
  FileCode,
  TestTube2,
  BookOpen,
  DollarSign,
  Code,
  GitMerge,
  Library,
  Settings,
  MessageSquare,
  LifeBuoy,
  KeyRound,
} from "lucide-react";

const DetailCard = ({
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
  <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-5 flex items-start gap-4 h-full transition-all duration-300 hover:border-teal-500/50 hover:bg-slate-900">
    <div className="flex-shrink-0 mt-1 text-teal-400">{icon}</div>
    <div className="flex-grow">
      <h4 className="font-bold text-white mb-1">{title}</h4>
      <p className="text-sm text-slate-400">{description}</p>
    </div>
    {tag && (
      <span className="text-xs font-medium self-start px-2 py-0.5 rounded-full bg-teal-900/50 text-teal-300 border-teal-800 border">
        {tag}
      </span>
    )}
  </div>
);

const Section = ({
  title,
  subtitle,
  icon,
  children,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <section className="mb-16">
    <div className="text-left mb-8">
      <h2 className="text-3xl font-bold text-white flex items-center gap-3">
        {icon}
        {title}
      </h2>
      <p className="text-slate-400 mt-2">{subtitle}</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {children}
    </div>
  </section>
);

const BlueprintPage = () => {
  return (
    <div className="bg-slate-950 text-slate-300 min-h-screen font-sans">
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

      <section className="pt-24 pb-16 text-center relative">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 50% -20%, rgba(13, 148, 136, 0.2), transparent 80%)",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-5">
            Master Feature Blueprint
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-400">
            An exhaustive, granular breakdown of every planned feature and
            system component for BuildPCB.ai. This is our playbook for
            conquering the hardware design market.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <Section
          icon={<Cpu size={32} className="text-teal-400" />}
          title="The AI Core Engine"
          subtitle="The heart of the platform. A multi-layered system of models designed for accuracy, speed, and intelligence."
        >
          <DetailCard
            icon={<BrainCircuit size={20} />}
            title="Proprietary Expert System"
            description="Current MVP core. Rule-based system for deterministic generation of common circuits (power supplies, MCU supports, etc.). Ensures accuracy and speed."
            tag="Active"
          />
          <DetailCard
            icon={<Wand2 size={20} />}
            title="NLP Intent & Entity Recognition"
            description="Parses prompts to identify user intent, components, values, package types, and other critical constraints."
            tag="Active"
          />
          <DetailCard
            icon={<Code size={20} />}
            title="Generative LLM for Novel Circuits"
            description="Fine-tuned LLM for handling complex or novel requests beyond the Expert System's scope. Will be A/B tested for accuracy."
            tag="Planned"
          />
          <DetailCard
            icon={<Lightbulb size={20} />}
            title="AI Rationale Engine"
            description="Generates plain-English explanations for its design choices, citing datasheets and best practices to act as a teaching tool."
            tag="Active"
          />
          <DetailCard
            icon={<ShieldCheck size={20} />}
            title="Live Electrical Rule Checking (ERC)"
            description="AI constantly analyzes for errors like floating pins, power domain mismatches, and unconnected nets."
            tag="In Progress"
          />
          <DetailCard
            icon={<Camera size={20} />}
            title="Computer Vision (Snap-to-Schematic)"
            description="A vision model to interpret uploaded PCB images, perform component recognition, and reverse-engineer schematics."
            tag="Planned"
          />
          <DetailCard
            icon={<TestTube2 size={20} />}
            title="SPICE Model Generation"
            description="AI will attempt to generate or find appropriate SPICE models for components to enable circuit simulation."
            tag="Under Consideration"
          />
          <DetailCard
            icon={<Zap size={20} />}
            title="AI-Powered Auto-Correction"
            description="When an error is detected, the AI will suggest 1-click fixes or auto-correct common mistakes."
            tag="Planned"
          />
        </Section>

        <Section
          icon={<LayoutDashboard size={32} className="text-teal-400" />}
          title="Schematic Editor"
          subtitle="The primary user interface for design creation. Must be fast, intuitive, and powerful."
        >
          <DetailCard
            icon={<MousePointer2 size={20} />}
            title="GPU-Accelerated Canvas"
            description="High-performance canvas for seamless pan/zoom on designs with 10,000+ components."
            tag="Active"
          />
          <DetailCard
            icon={<Zap size={20} />}
            title="Smart Wiring & Net Aliasing"
            description="Auto-junctions, net highlighting, and ability to assign human-readable aliases to nets (e.g., 'SPI_MOSI')."
            tag="Active"
          />
          <DetailCard
            icon={<Code size={20} />}
            title="Bus & Differential Pair Support"
            description="Visual indicators and specific tools for creating and managing buses and differential pairs."
            tag="Planned"
          />
          <DetailCard
            icon={<Terminal size={20} />}
            title="Command Palette (Ctrl+K)"
            description="Access every feature, component, and setting via a searchable command palette."
            tag="Planned"
          />
          <DetailCard
            icon={<Box size={20} />}
            title="Hierarchical Sheets"
            description="Organize complex designs by creating nested sub-sheets that are reusable and modular."
            tag="Planned"
          />
          <DetailCard
            icon={<BookOpen size={20} />}
            title="Integrated Datasheet Viewer"
            description="Open component datasheets in a side panel without leaving the IDE. AI will highlight relevant sections."
            tag="Planned"
          />
          <DetailCard
            icon={<CircuitBoard size={20} />}
            title="In-Place Component Editing"
            description="Double-click any component to edit its value, reference designator, and other properties directly on the canvas."
            tag="Planned"
          />
          <DetailCard
            icon={<Palette size={20} />}
            title="Grid & Measurement Tools"
            description="Customizable grid settings (imperial/metric), snapping, and tools for measuring distance between objects."
            tag="In Progress"
          />
        </Section>

        <Section
          icon={<Library size={32} className="text-teal-400" />}
          title="Component & Library Management"
          subtitle="The lifeblood of any ECAD tool. Must be robust and flexible."
        >
          <DetailCard
            icon={<Box size={20} />}
            title="Unified Component Library"
            description="A vast, managed library of millions of components with verified symbols, footprints, and 3D models."
            tag="In Progress"
          />
          <DetailCard
            icon={<CircuitBoard size={20} />}
            title="Custom Component Creator"
            description="An intuitive wizard to create new schematic symbols, PCB footprints (compliant with IPC-7351), and associate 3D models."
            tag="Planned"
          />
          <DetailCard
            icon={<FileCode size={20} />}
            title="Import from KiCad/Eagle/Altium"
            description="Ability to import existing component libraries from other major ECAD tools to ease migration."
            tag="Planned"
          />
          <DetailCard
            icon={<Users size={20} />}
            title="Team Libraries"
            description="Shared libraries for design teams to ensure consistency and enforce the use of preferred parts."
            tag="Under Consideration"
          />
          <DetailCard
            icon={<Lightbulb size={20} />}
            title="AI Footprint Generator"
            description="Generate a PCB footprint by simply pointing the AI to a component's datasheet."
            tag="Planned"
          />
          <DetailCard
            icon={<Cpu size={20} />}
            title="Real-Time Supplier Data"
            description="See live pricing and stock information from distributors like Digi-Key and Mouser directly in the library."
            tag="Planned"
          />
        </Section>

        <Section
          icon={<Layers size={32} className="text-teal-400" />}
          title="PCB Layout Environment"
          subtitle="Transitioning from logical to physical with AI assistance."
        >
          <DetailCard
            icon={<Cpu size={20} />}
            title="AI-Assisted PCB Placement"
            description="Generates optimized component placements based on connectivity, thermal considerations, and signal flow."
            tag="Planned"
          />
          <DetailCard
            icon={<Zap size={20} />}
            title="Advanced AI Auto-Router"
            description="Multi-pass, cost-based routing engine that handles high-speed design rules, differential pairs, and controlled impedance."
            tag="Planned"
          />
          <DetailCard
            icon={<Box size={20} />}
            title="Interactive 3D Viewer"
            description="High-fidelity 3D rendering with STEP model import/export for mechanical clearance checks."
            tag="Planned"
          />
          <DetailCard
            icon={<ShieldCheck size={20} />}
            title="Live Design Rule Checking (DRC)"
            description="Instant feedback on trace widths, clearances, annular rings, and other manufacturability constraints."
            tag="Planned"
          />
          <DetailCard
            icon={<Layers size={20} />}
            title="Layer Stack Manager"
            description="Visual tool to define multi-layer PCBs, with built-in impedance calculator."
            tag="Planned"
          />
          <DetailCard
            icon={<FileCode size={20} />}
            title="Manufacturing File Generation"
            description="One-click generation of Gerbers, Drill files, BOM, and Pick-and-Place files."
            tag="In Progress"
          />
          <DetailCard
            icon={<MousePointer2 size={20} />}
            title="Interactive Push-and-Shove Routing"
            description="Manually route traces while the engine intelligently moves existing traces and vias out of the way."
            tag="Planned"
          />
          <DetailCard
            icon={<CircuitBoard size={20} />}
            title="Copper Pour & Polygon Manager"
            description="Tools for creating and managing copper pours, with thermal relief and island removal settings."
            tag="Planned"
          />
        </Section>

        <Section
          icon={<Users size={32} className="text-teal-400" />}
          title="Collaboration & Project Management"
          subtitle="Features for teams, professionals, and open-source communities."
        >
          <DetailCard
            icon={<Save size={20} />}
            title="Project Dashboard"
            description="Central hub to view, organize, search, and tag all your personal and team projects."
            tag="Active"
          />
          <DetailCard
            icon={<Share2 size={20} />}
            title="Real-Time Multiplayer Editing"
            description="Google Docs-style collaboration on both schematics and PCBs with live cursors and presence indicators."
            tag="Planned"
          />
          <DetailCard
            icon={<GitMerge size={20} />}
            title="Git-Based Version Control"
            description="Commit design changes, view visual diffs, create branches, and merge work. Fully integrated into the UI."
            tag="Planned"
          />
          <DetailCard
            icon={<MessageSquare size={20} />}
            title="In-Context Commenting"
            description="Leave comments and tag teammates directly on any component or area of the design for streamlined reviews."
            tag="Planned"
          />
          <DetailCard
            icon={<FileCode size={20} />}
            title="Public/Private Project Sharing"
            description="Share projects with granular permissions (view-only, comment, edit) for open-source or client work."
            tag="In Progress"
          />
          <DetailCard
            icon={<Lightbulb size={20} />}
            title="Design Snapshots & Templates"
            description="Save a project's state as a reusable template or create a snapshot for a design review."
            tag="Under Consideration"
          />
        </Section>

        <Section
          icon={<Rocket size={32} className="text-teal-400" />}
          title="Platform & Ecosystem"
          subtitle="Expanding beyond the editor into a full-fledged ecosystem."
        >
          <DetailCard
            icon={<TestTube2 size={20} />}
            title="Integrated SPICE Simulation"
            description="Run circuit simulations directly in the IDE to verify designs without exporting to external tools."
            tag="Under Consideration"
          />
          <DetailCard
            icon={<CircuitBoard size={20} />}
            title="Direct-to-Fabrication API"
            description="Integrate with manufacturers for one-click ordering and live quotes."
            tag="Planned"
          />
          <DetailCard
            icon={<DollarSign size={20} />}
            title="Tiered Subscription Plans"
            description="Free, Pro, and Enterprise plans with varying feature sets and collaboration capabilities."
            tag="Under Consideration"
          />
          <DetailCard
            icon={<Code size={20} />}
            title="Plugin & Scripting API"
            description="An API (likely JavaScript/TypeScript) for users to script custom actions and build extensions."
            tag="Under Consideration"
          />
          <DetailCard
            icon={<CircuitBoard size={20} />}
            title="Native Desktop Application"
            description="Cross-platform desktop app (via Kotlin Multiplatform) for offline access and enhanced performance."
            tag="Under Consideration"
          />
          <DetailCard
            icon={<Settings size={20} />}
            title="Browser Settings Override"
            description="Allow advanced users to override default browser behaviors (e.g., right-click menus) for a native-like experience."
            tag="Planned"
          />
          <DetailCard
            icon={<KeyRound size={20} />}
            title="User Account Management"
            description="Full account system with profiles, SSO (Google, GitHub), and security settings like 2FA."
            tag="Planned"
          />
          <DetailCard
            icon={<LifeBuoy size={20} />}
            title="Integrated Documentation & Support"
            description="A searchable documentation and support system accessible directly from the command palette."
            tag="Planned"
          />
        </Section>
      </main>
    </div>
  );
};

export default BlueprintPage;
