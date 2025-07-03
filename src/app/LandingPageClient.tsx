"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Clock,
  ShieldCheck,
  Workflow,
  Mic,
  Wand2,
  Settings,
  Play,
  ChevronDown,
  Mail,
  Twitter,
  Linkedin,
  Sparkles,
  Cpu,
  CircuitBoard,
  LayoutDashboard,
  Lightbulb,
  Rocket,
  AlertCircle,
} from "lucide-react";

// --- Video Player Component ---
function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "_4nQLtCyLjo";

  return (
    <div className="max-w-5xl mx-auto bg-gradient-to-br from-teal-900/20 to-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
      <div className="relative aspect-video bg-slate-900">
        {!isPlaying ? (
          <div
            className="absolute inset-0 bg-gradient-to-r from-teal-900/10 to-slate-900/80 flex items-center justify-center cursor-pointer group"
            onClick={() => setIsPlaying(true)}
          >
            <div className="text-center p-8 backdrop-blur-sm bg-slate-900/30 rounded-2xl border border-slate-800">
              <div className="w-20 h-20 mx-auto mb-6 bg-teal-600/10 rounded-full flex items-center justify-center border border-teal-500/30 group-hover:bg-teal-600/20 group-hover:border-teal-500/50 transition-all duration-300 transform group-hover:scale-110">
                <Play className="text-teal-400" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                AI-Powered Schematic Generation
              </h3>
              <p className="text-slate-400 max-w-md">
                See how natural language becomes production-ready designs in
                seconds
              </p>
            </div>
          </div>
        ) : (
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div className="p-6 bg-slate-900/50 border-t border-slate-800">
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Schematic Generation",
            "Component Selection",
            "Error Checking",
            "Manufacturing Files",
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center text-sm text-teal-300"
            >
              <div className="w-2 h-2 rounded-full bg-teal-500 mr-2"></div>
              {feature}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [headerScrolled, setHeaderScrolled] = useState(false);

  useEffect(() => {
    document.title = "buildPCB.ai - The AI Co-Pilot for Hardware Engineers";
    const metaDesc = document.querySelector('meta[name="description"]');
    const newMetaContent =
      "Automate tedious schematic design and go from concept to production-ready files faster than ever.";
    if (metaDesc) {
      metaDesc.setAttribute("content", newMetaContent);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = newMetaContent;
      document.head.appendChild(newMeta);
    }

    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Who is buildPCB.ai for?",
      answer:
        "Our tool is designed for everyone from seasoned hardware engineers looking to accelerate their prototyping workflow, to makers and hobbyists who want to bring their creative ideas to life without getting bogged down in tedious schematic design.",
    },
    {
      question: "What are the output files?",
      answer:
        "You can generate a complete set of manufacturing files directly from the IDE, including Gerber files, drill files, and a Bill of Materials (BOM). Everything you need to send to a PCB fabricator is created within buildPCB.ai.",
    },
    {
      question: "How does the AI work?",
      answer:
        "Our core technology is based on a proprietary set of Large Language Models (LLMs) and graph neural networks that have been fine-tuned on a massive dataset of open-source and vetted electronic schematics. This allows our AI to understand both the textual request and the underlying principles of good circuit design.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 scroll-smooth">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 p-4 sm:p-5 transition-all duration-300 ${
          headerScrolled
            ? "bg-slate-950/90 backdrop-blur-md border-b border-teal-900/50"
            : ""
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-white flex items-center"
          >
            <CircuitBoard className="text-teal-400 mr-2" size={28} />
            buildPCB<span className="text-teal-400">.ai</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link
              href="#demo"
              className="text-slate-300 hover:text-teal-300 transition-colors"
            >
              Demo
            </Link>
            <Link
              href="#features"
              className="text-slate-300 hover:text-teal-300 transition-colors"
            >
              Features
            </Link>
            <a
              href="https://ide.buildpcbs.com/docs" // External link remains 'a' tag
              className="text-slate-300 hover:text-teal-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docs
            </a>
            <Link
              href="#faq"
              className="text-slate-300 hover:text-teal-300 transition-colors"
            >
              FAQ
            </Link>
          </nav>
          <a
            href="https://ide.buildpcbs.com/register" // External link remains 'a' tag
            className="bg-teal-600 text-white font-medium py-2 px-5 rounded-full hover:bg-teal-500 transition-colors text-sm shadow-lg shadow-teal-600/20 hover:shadow-teal-500/30 flex items-center"
          >
            <Rocket className="mr-2" size={16} />
            Launch IDE
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-36 pb-24 sm:pt-48 sm:pb-32 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 50% -20%, rgba(13, 148, 136, 0.25), transparent 80%)",
          }}
        ></div>
        <div className="absolute top-20 left-10 w-8 h-8 rounded-full bg-teal-500/20 blur-xl"></div>
        <div className="absolute top-1/3 right-20 w-12 h-12 rounded-full bg-teal-600/20 blur-xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 rounded-full bg-teal-700/15 blur-xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center bg-teal-900/30 text-teal-300 px-4 py-1 rounded-full mb-4 border border-teal-800">
            <Sparkles className="mr-2" size={16} />
            <span className="text-sm font-medium">
              The Future of Hardware Design is Here
            </span>
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-5 max-w-3xl mx-auto"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #5eead4, #ffffff, #5eead4)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "gradient-flow 8s ease-in-out infinite",
            }}
          >
            From Concept to PCB in Minutes, Not Days
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-10">
            The AI co-pilot for hardware engineers. Automate schematic design
            and go from idea to production-ready files faster than ever before.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <a
              href="https://ide.buildpcbs.com/register" // External link
              className="bg-teal-600 hover:bg-teal-500 text-white font-bold py-3 px-8 rounded-full text-base inline-flex items-center transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-teal-600/30"
            >
              <Rocket className="mr-2" size={18} />
              Get Started for Free
            </a>
            <Link
              href="#demo"
              className="bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-8 rounded-full text-base inline-flex items-center transform hover:scale-105 transition-all duration-300 border border-slate-700"
            >
              <Play className="mr-2" size={18} />
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-900/50 border-y border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                value: "10x",
                label: "Faster Design",
                icon: <Lightbulb className="text-teal-400" size={24} />,
              },
              {
                value: "90%",
                label: "Less Errors",
                icon: <ShieldCheck className="text-teal-400" size={24} />,
              },
              {
                value: "50+",
                label: "Circuit Templates",
                icon: <LayoutDashboard className="text-teal-400" size={24} />,
              },
              {
                value: "24/7",
                label: "AI Assistance",
                icon: <Cpu className="text-teal-400" size={24} />,
              },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4">
                <div className="flex justify-center mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-24 sm:py-32 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Design at the Speed of Thought
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Watch how buildPCB.ai transforms natural language into
              production-ready schematics
            </p>
          </div>
          <VideoPlayer />
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-24 sm:py-32 bg-gradient-to-b from-slate-900 to-slate-950"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-teal-900/30 text-teal-300 px-4 py-1 rounded-full mb-4 border border-teal-800">
              <Sparkles className="mr-2" size={16} />
              <span className="text-sm font-medium">
                Why choose buildPCB.ai
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Engineered for Excellence
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              The future of hardware design is here
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="text-teal-400" size={28} />,
                title: "10x Faster Design",
                description:
                  "Automate entire circuit blocks and complex routing that would normally take days of manual work.",
              },
              {
                icon: <ShieldCheck className="text-teal-400" size={28} />,
                title: "AI-Powered Precision",
                description:
                  "Industry best practices for signal integrity and power distribution baked into every design.",
              },
              {
                icon: <Workflow className="text-teal-400" size={28} />,
                title: "End-to-End Workflow",
                description:
                  "From concept to manufacturing files in one seamless, integrated environment.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-teal-500/50 transition-all duration-300 group"
              >
                <div className="mb-5 flex items-center justify-center w-14 h-14 rounded-xl bg-teal-900/20 text-teal-400 border border-teal-500/20 group-hover:bg-teal-900/30 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 sm:py-32 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Transform Your Workflow
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              From idea to production in three simple steps
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-teal-900/10 to-slate-900/50 border border-slate-800 rounded-2xl p-8">
                {[
                  {
                    icon: <Mic className="text-teal-400" size={24} />,
                    title: "1. Describe Your Design",
                    description:
                      "Simply type what you need in plain English - no technical jargon required.",
                  },
                  {
                    icon: <Wand2 className="text-teal-400" size={24} />,
                    title: "2. Generate in Seconds",
                    description:
                      "Our AI interprets your request and creates a complete schematic.",
                  },
                  {
                    icon: <Settings className="text-teal-400" size={24} />,
                    title: "3. Finalize & Export",
                    description:
                      "Tweak the design and export production-ready files with one click.",
                  },
                ].map((step, index) => (
                  <div key={index} className="mb-8 last:mb-0">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-teal-900/20 flex items-center justify-center border border-teal-500/20">
                        {step.icon}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-bold text-white mb-1">
                          {step.title}
                        </h3>
                        <p className="text-slate-400">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full opacity-10 blur-3xl absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="bg-gradient-to-br from-slate-900 to-teal-900/20 border border-slate-800 rounded-2xl p-8 max-w-md">
                  <div className="bg-slate-800/50 p-4 rounded-lg mb-4">
                    <div className="text-teal-400 text-sm font-mono">
                      $ Design a 5V power supply with USB-C input
                    </div>
                  </div>
                  <div className="bg-slate-800/30 p-4 rounded-lg border border-teal-900/30">
                    <div className="flex justify-between items-center mb-3">
                      <div className="text-sm text-teal-300">
                        AI is designing your circuit...
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-100"></div>
                        <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-200"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="bg-slate-800/50 h-20 rounded-lg border border-slate-700 flex items-center justify-center"
                        >
                          <div className="w-8 h-8 bg-teal-500/10 rounded-full border border-teal-500/20"></div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-800 flex justify-end">
                      <button className="bg-teal-600 hover:bg-teal-500 text-white text-sm px-4 py-2 rounded-lg transition-colors">
                        Export Gerber Files
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 sm:py-32 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Everything you need to know about buildPCB.ai
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center text-left text-lg font-medium text-white p-6 bg-slate-800/50 hover:bg-slate-800 rounded-xl transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform text-slate-400 ${
                      openFaqIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaqIndex === index && (
                  <div className="p-6 pt-4 text-slate-400 bg-slate-800/30 rounded-b-xl border-t border-slate-800">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="signup"
        className="py-24 sm:py-32 bg-gradient-to-br from-teal-900/20 to-slate-900"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center bg-teal-900/30 text-teal-300 px-4 py-1 rounded-full mb-4 border border-teal-800">
              <Rocket className="mr-2" size={16} />
              <span className="text-sm font-medium">Join the revolution</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Start Building with AI Today
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              Sign up for free and experience the future of PCB design. No
              credit card required.
            </p>
            <div className="mt-10">
              <a
                href="https://ide.buildpcbs.com/register" // External link
                className="bg-teal-600 hover:bg-teal-500 text-white font-bold py-4 px-10 rounded-full text-lg inline-flex items-center transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-teal-600/30"
              >
                <Rocket className="mr-3" size={22} />
                Launch the IDE for Free
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto py-12 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <Link
                href="/"
                className="text-2xl font-bold text-white flex items-center"
              >
                <CircuitBoard className="text-teal-400 mr-2" size={28} />
                buildPCB<span className="text-teal-400">.ai</span>
              </Link>
              <p className="text-slate-500 mt-3 max-w-xs">
                The AI Co-Pilot for Hardware Engineers
              </p>
            </div>
            <div className="flex space-x-6 mb-8 md:mb-0">
              <a
                href="https://twitter.com" // Example external link
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-teal-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com" // Example external link
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-teal-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-500">
                &copy; {new Date().getFullYear()} buildPCB.ai. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes gradient-flow {
          0% {
            background-position: 200% 50%;
          }
          50% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
        body {
          font-family: "DM Sans", sans-serif;
          background-color: #020617;
          color: #e2e8f0;
        }
      `}</style>
    </div>
  );
}
