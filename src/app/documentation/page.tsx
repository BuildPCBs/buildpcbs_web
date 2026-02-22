import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation | BuildPCBs.com",
  description: "High-performance hardware manufacturing powered by AI. Design, simulate, validate, and ship production-ready PCBs in record time.",
  openGraph: {
    title: "Documentation | BuildPCBs.com",
    description: "High-performance hardware manufacturing powered by AI. Design, simulate, validate, and ship production-ready PCBs in record time.",
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
    description: "High-performance hardware manufacturing powered by AI. Design, simulate, validate, and ship production-ready PCBs in record time.",
    images: ["/og-image.png"],
  },
};

const Header = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-900 dark:text-white pb-2 border-b border-gray-200 dark:border-neutral-800">
    {children}
  </h2>
);

const SubHeader = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-xl font-medium mt-8 mb-4 text-gray-800 dark:text-gray-200">
    {children}
  </h3>
);

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <p className="text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
    {children}
  </p>
);

const List = ({ items }: { items: string[] }) => (
  <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-gray-400 space-y-2">
    {items.map((item, idx) => (
      <li key={idx} className="leading-relaxed">{item}</li>
    ))}
  </ul>
);

const CodeBlock = ({ children }: { children: React.ReactNode }) => (
  <pre className="bg-gray-100 dark:bg-[#111111] border border-gray-200 dark:border-neutral-800 rounded-lg p-4 my-4 overflow-x-auto text-sm text-gray-800 dark:text-gray-300">
    <code>{children}</code>
  </pre>
);

const DocumentationPage = () => {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-black pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            BuildPCBs AI Docs
          </h1>
          <blockquote className="border-l-4 border-[#0038DF] pl-4 italic text-lg text-gray-600 dark:text-gray-400 mb-8">
            High-performance hardware manufacturing powered by AI.
            <br />
            Design, simulate, validate, and ship production-ready PCBs in record time.
          </blockquote>
        </div>

        <section>
          <Header>Introduction</Header>
          <Paragraph>
            BuildPCBs AI is a developer-first hardware infrastructure platform that automates PCB validation, DFM analysis, quoting, and manufacturing orchestration.
          </Paragraph>
          <Paragraph>We combine:</Paragraph>
          <List items={[
            "AI-driven design validation",
            "Instant DFM (Design for Manufacturing) feedback",
            "Automated quoting",
            "Manufacturing partner routing",
            "Programmatic API access"
          ]} />
          <Paragraph>
            <strong>Our goal is simple:</strong> Hardware, deployed like software.
          </Paragraph>
        </section>

        <section>
          <Header>Quickstart</Header>

          <SubHeader>How do I get started?</SubHeader>
          <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400 mb-6">
            <li>Create an account.</li>
            <li>Verify your email.</li>
            <li>Create a new project.</li>
            <li>Upload your Gerber files and BOM.</li>
            <li>Review AI validation report.</li>
            <li>Confirm manufacturing order.</li>
          </ol>
          <Paragraph>You can go from upload → production-ready in minutes.</Paragraph>

          <SubHeader>What do I need before uploading?</SubHeader>
          <List items={[
            "Gerber files (RS-274X or X2 recommended)",
            "Drill file (.drl or Excellon)",
            "BOM (CSV, XLSX, or JSON)",
            "Pick & Place file (optional but recommended for assembly)"
          ]} />

          <SubHeader>Can I start without Gerbers?</SubHeader>
          <Paragraph>Yes. You can:</Paragraph>
          <List items={[
            "Upload KiCad project files",
            "Upload Altium exports",
            "Import ODB++",
            "Use our upcoming AI schematic-to-PCB generator"
          ]} />
        </section>

        <section>
          <Header>Core Platform Features</Header>

          <SubHeader>What is AI-Driven DFM?</SubHeader>
          <Paragraph>Our system analyzes:</Paragraph>
          <List items={[
            "Trace width & Copper spacing",
            "Annular ring size & Via dimensions",
            "Layer stack alignment",
            "Solder mask clearance",
            "Silkscreen overlap",
            "Drill tolerances"
          ]} />
          <Paragraph>You receive a pass/fail report plus suggested corrections.</Paragraph>

          <SubHeader>What makes BuildPCBs different from traditional board houses?</SubHeader>
          <Paragraph><strong>Traditional manufacturers:</strong> Review manually, Provide delayed feedback, Require email communication.</Paragraph>
          <Paragraph><strong>BuildPCBs:</strong> Instant automated analysis, Structured error reporting, Real-time quote updates, API-driven manufacturing.</Paragraph>

          <SubHeader>Is this a PCB design tool?</SubHeader>
          <Paragraph>No. We are not replacing KiCad or Altium. We are the infrastructure layer between: <strong>EDA → Manufacturing → Logistics</strong>.</Paragraph>
        </section>

        <section>
          <Header>Technical Specifications</Header>

          <SubHeader>What are the minimum trace/space requirements?</SubHeader>
          <Paragraph>Standard: 3mil / 3mil</Paragraph>
          <Paragraph>Advanced HDI: 2mil / 2mil (upon engineering review)</Paragraph>

          <SubHeader>What copper thicknesses are supported?</SubHeader>
          <List items={["1oz standard", "2oz heavy copper", "Custom stackups available on request"]} />

          <SubHeader>How many layers are supported?</SubHeader>
          <List items={["2-layer", "4-layer", "6-layer", "8-layer", "10+ layer custom builds"]} />

          <SubHeader>What board thicknesses are available?</SubHeader>
          <List items={["0.6mm", "0.8mm", "1.0mm", "1.6mm (standard)", "Custom thickness available"]} />

          <SubHeader>What surface finishes are supported?</SubHeader>
          <List items={["HASL (Lead-Free)", "ENIG", "Immersion Silver", "OSP"]} />

          <SubHeader>What file formats are supported?</SubHeader>
          <List items={["Gerber RS-274X", "Gerber X2", "ODB++", "Excellon drill", "CSV BOM", "XLSX BOM", "KiCad native exports", "Altium exports"]} />

          <SubHeader>Do you validate impedance-controlled designs?</SubHeader>
          <Paragraph>Yes. You can specify impedance requirements in your stackup, and our system verifies trace geometry against standard impedance models.</Paragraph>

          <SubHeader>Can I run simulations before manufacturing?</SubHeader>
          <Paragraph>Yes. We support Basic electrical rule checks, Layer consistency analysis, Clearance analysis, and Thermal region detection (beta). Advanced signal integrity simulation coming soon.</Paragraph>
        </section>

        <section>
          <Header>Manufacturing & Assembly</Header>

          <SubHeader>Do you offer PCB Assembly (PCBA)?</SubHeader>
          <Paragraph>Yes. We provide SMT assembly, Through-hole assembly, Mixed assembly, and Full turnkey sourcing.</Paragraph>

          <SubHeader>Do you source components?</SubHeader>
          <Paragraph>Yes. We integrate with Digi-Key, Mouser, LCSC, and Arrow. Component availability is validated during quote.</Paragraph>

          <SubHeader>What is Box Build?</SubHeader>
          <Paragraph>Box Build includes PCB assembly, Enclosure integration, Cable harnesses, Mechanical mounting, and Final testing.</Paragraph>

          <SubHeader>What are typical lead times?</SubHeader>
          <Paragraph>Prototypes: 2–4 business days. Small batch production: 5–10 business days. Large volume: Based on supply chain availability.</Paragraph>

          <SubHeader>Do you ship internationally?</SubHeader>
          <Paragraph>Yes. We ship globally via DHL, FedEx, and UPS.</Paragraph>

          <SubHeader>Can I track my order?</SubHeader>
          <Paragraph>Yes. You receive Manufacturing status, Assembly status, Shipping tracking, and Delivery ETA in the dashboard.</Paragraph>
        </section>

        <section>
          <Header>Pricing & Quoting</Header>

          <SubHeader>How are quotes calculated?</SubHeader>
          <Paragraph>Pricing is based on Layer count, Board dimensions, Quantity, Surface finish, Copper weight, Assembly complexity, and Component sourcing risk. Quotes update instantly when you modify parameters.</Paragraph>

          <SubHeader>Is there a minimum order quantity (MOQ)?</SubHeader>
          <Paragraph>No strict MOQ. Prototype runs start at 1–5 units.</Paragraph>

          <SubHeader>Are there setup fees?</SubHeader>
          <Paragraph>No hidden fees. All pricing is transparent in the quote breakdown.</Paragraph>
        </section>

        <section>
          <Header>API & Developer Integration</Header>

          <SubHeader>Is there a BuildPCBs API?</SubHeader>
          <Paragraph>Yes. You can Upload files programmatically, Trigger DFM analysis, Generate quotes, Create manufacturing orders, and Track production status.</Paragraph>

          <SubHeader>What does authentication look like?</SubHeader>
          <Paragraph>Bearer token authentication. Example:</Paragraph>
          <CodeBlock>Authorization: Bearer bp_live_xxxxxxxxx</CodeBlock>

          <SubHeader>Base API URL</SubHeader>
          <CodeBlock>https://api.buildpcbs.ai</CodeBlock>

          <SubHeader>Example: Trigger Quote</SubHeader>
          <CodeBlock>{`POST /v1/quotes\n\nBody:\n{\n  "projectId": "abc123",\n  "quantity": 100,\n  "assembly": true\n}`}</CodeBlock>

          <SubHeader>Can I automate production from CI/CD?</SubHeader>
          <Paragraph>Yes. BuildPCBs is designed for hardware teams shipping rapidly. You can integrate manufacturing into your pipeline.</Paragraph>
        </section>

        <section>
          <Header>Security & Compliance</Header>

          <SubHeader>Are my designs confidential?</SubHeader>
          <Paragraph>Yes. End-to-end encryption, Secure storage, Optional NDA agreement, and Private manufacturing routing.</Paragraph>

          <SubHeader>Do you support ITAR or restricted builds?</SubHeader>
          <Paragraph>Enterprise customers can request controlled routing.</Paragraph>
        </section>

        <section>
          <Header>$BUILDers Ecosystem</Header>

          <SubHeader>What is the $BUILD token?</SubHeader>
          <Paragraph>The $BUILD token is part of our community incentive layer. It is not required to use BuildPCBs AI.</Paragraph>

          <SubHeader>What is the Anti-Rug Dashboard?</SubHeader>
          <Paragraph>A transparency system showing Liquidity locks, Token supply, and Distribution milestones.</Paragraph>

          <SubHeader>How does vesting work?</SubHeader>
          <Paragraph>You can view token unlock schedule inside the dashboard under $BUILDers.</Paragraph>
        </section>

        <section>
          <Header>AI PCB Generation (Beta)</Header>

          <SubHeader>Can AI generate a PCB from a prompt?</SubHeader>
          <Paragraph>Yes (Beta).</Paragraph>
          <Paragraph>Example: "Design a 5V USB-C regulated power board with status LED."</Paragraph>
          <Paragraph>System generates: Schematic draft, PCB layout, BOM suggestion, DFM pre-check.</Paragraph>

          <SubHeader>Can I edit the AI-generated board?</SubHeader>
          <Paragraph>Yes. You can export to KiCad, Altium, and ODB++.</Paragraph>
        </section>

        <section>
          <Header>Roadmap</Header>
          <List items={[
            "Advanced signal integrity simulation",
            "AI auto-routing optimization",
            "Embedded firmware validation",
            "Real-time component substitution engine",
            "Manufacturing partner network expansion"
          ]} />
        </section>

        <section>
          <Header>Support</Header>

          <SubHeader>How do I contact support?</SubHeader>
          <List items={[
            "Dashboard ticket system",
            "Email support@buildpcbs.ai",
            "Enterprise Slack integration (upon request)"
          ]} />
        </section>

        <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-neutral-800 text-center text-gray-500 text-sm">
          <p><strong>BuildPCBs AI</strong><br />Infrastructure for hardware teams. Fast. Automated. Reliable.</p>
        </footer>
      </div>
    </div>
  );
};

export default DocumentationPage;
