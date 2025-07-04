"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  CircuitBoard,
  ArrowLeft,
  Check,
  Sparkles,
  User,
  Users,
  School,
  Building,
  Zap,
  Shield,
  Cloud,
  HelpCircle,
  Mail,
  CreditCard,
  Rocket,
} from "lucide-react";

const PricingPage = () => {
  const [activePlan, setActivePlan] = useState(2); // Professional plan as default active

  const plans = [
    {
      name: "Hobbyist",
      price: "Free",
      frequency: "forever",
      description:
        "For individuals getting started or working on personal projects.",
      features: [
        "3 Private Projects",
        "AI Schematic Generation (10 credits/mo)",
        "Standard Component Library",
        "Community Support",
      ],
      cta: "Start for Free",
      ctaLink: "https://ide.buildpcbs.com/register",
      recommended: false,
      icon: <User size={20} />,
      color: "teal",
    },
    {
      name: "Student & Educator",
      price: "Free",
      frequency: "with .edu email",
      description:
        "All the power of Pro, free for academic use. Empowering the next generation of engineers.",
      features: [
        "Unlimited Public Projects",
        "100 Private Projects",
        "Advanced AI Features",
        "Real-Time Collaboration (up to 5 users)",
      ],
      cta: "Get Verified",
      ctaLink: "https://ide.buildpcbs.com/register?plan=academic",
      recommended: false,
      icon: <School size={20} />,
      color: "blue",
    },
    {
      name: "Professional",
      price: "Coming Soon",
      frequency: "",
      description:
        "For serious designers and freelancers who need full power and priority support.",
      features: [
        "Unlimited Private Projects",
        "AI Schematic Generation (1,000 credits/mo)",
        "AI-Assisted PCB Layout",
        "Real-Time Collaboration",
        "Priority Support",
      ],
      cta: "Notify Me",
      ctaLink:
        "mailto:abdulrohim@buildpcbs.com?subject=Notify me for Professional Plan",
      recommended: true,
      icon: <Sparkles size={20} />,
      color: "amber",
    },
    {
      name: "Startup",
      price: "Coming Soon",
      frequency: "",
      description:
        "For small teams and early-stage companies building their first products.",
      features: [
        "All Professional Features",
        "Up to 5 Team Members",
        "Shared Team Projects",
        "Basic Admin Controls",
        "Enhanced Support",
      ],
      cta: "Notify Me",
      ctaLink:
        "mailto:abdulrohim@buildpcbs.com?subject=Notify me for Startup Plan",
      recommended: false,
      icon: <Rocket size={20} />,
      color: "green",
    },
    {
      name: "Business",
      price: "Contact Us",
      frequency: "for a quote",
      description:
        "For growing teams that need advanced collaboration and administrative tools.",
      features: [
        "All Startup Features",
        "Unlimited Collaboration Users",
        "Team Component Libraries",
        "Advanced Admin Controls",
        "Design Analytics",
      ],
      cta: "Contact Sales",
      ctaLink: "mailto:abdulrohim@buildpcbs.com",
      recommended: false,
      icon: <Users size={20} />,
      color: "violet",
    },
    {
      name: "Enterprise",
      price: "Custom",
      frequency: "",
      description:
        "For large organizations requiring advanced security, support, and custom integrations.",
      features: [
        "All Business Features",
        "On-Premise Deployment Option",
        "Dedicated Account Manager & SLA",
        "Custom Integrations & API Access",
        "SAML/SSO",
      ],
      cta: "Contact Sales",
      ctaLink: "mailto:abdulrohim@buildpcbs.com",
      recommended: false,
      icon: <Building size={20} />,
      color: "rose",
    },
  ];

  const faqs = [
    {
      question: "Can I upgrade my plan later?",
      answer:
        "Absolutely! You can upgrade from Hobbyist to any paid plan at any time from your account settings. Enterprise plans require a custom setup process.",
      icon: <CreditCard className="text-teal-400" />,
    },
    {
      question: "How do academic verifications work?",
      answer:
        "Simply register with your .edu (or equivalent) email address. We'll send a verification link to confirm your academic status and unlock your free plan.",
      icon: <School className="text-blue-400" />,
    },
    {
      question: "What happens to my credits each month?",
      answer:
        "On paid plans, unused AI credits roll over for one month. We'll notify you when credits are about to expire. Free plans receive a fresh set of credits each month.",
      icon: <Zap className="text-amber-400" />,
    },
    {
      question: "Can I export my designs?",
      answer:
        "Yes! All plans, including the free Hobbyist plan, allow exporting your designs in standard formats like Gerber, PDF, and SVG. Enterprise plans support custom export formats.",
      icon: <Cloud className="text-violet-400" />,
    },
  ];

  const colorClasses: { [key: string]: { iconBg: string; iconText: string } } =
    {
      teal: { iconBg: "bg-teal-900/30", iconText: "text-teal-400" },
      blue: { iconBg: "bg-blue-900/30", iconText: "text-blue-400" },
      amber: { iconBg: "bg-amber-900/30", iconText: "text-amber-400" },
      green: { iconBg: "bg-green-900/30", iconText: "text-green-400" },
      violet: { iconBg: "bg-violet-900/30", iconText: "text-violet-400" },
      rose: { iconBg: "bg-rose-900/30", iconText: "text-rose-400" },
    };

  return (
    <div className="bg-gradient-to-b from-slate-950 to-slate-900 text-slate-300 min-h-screen font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 p-5 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-white flex items-center group"
          >
            <CircuitBoard
              className="text-teal-400 mr-2 transition-transform group-hover:rotate-12"
              size={28}
            />
            <span>
              buildPCB<span className="text-teal-400">.ai</span>
            </span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              href="/features"
              className="text-slate-400 hover:text-white transition-colors hidden md:block"
            >
              Features
            </Link>
            <a
              href="https://ide.buildpcbs.com/docs"
              className="text-slate-400 hover:text-white transition-colors hidden md:block"
            >
              Documentation
            </a>
            <Link
              href="/"
              className="bg-slate-800 hover:bg-slate-700 text-white font-medium py-2 px-4 rounded-lg transition-all text-sm border border-slate-700 flex items-center group"
            >
              <ArrowLeft
                className="mr-2 transition-transform group-hover:-translate-x-1"
                size={16}
              />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-400/5 rounded-full filter blur-3xl -translate-y-1/2" />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-400/5 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-violet-400/5 rounded-full filter blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center bg-slate-800/50 text-teal-400 text-sm px-4 py-1.5 rounded-full mb-6 border border-slate-700">
            <Zap className="mr-2" size={16} />
            Flexible plans for every designer
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 bg-gradient-to-r from-white to-teal-300 bg-clip-text">
            Pricing Made Simple
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-slate-400 mb-10">
            Flexible pricing for every stage of your design journey. From first
            prototype to enterprise-scale production.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <main className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              onClick={() => setActivePlan(index)}
              className={`relative cursor-pointer bg-slate-900/70 rounded-2xl p-6 flex flex-col border transition-all duration-300 ${
                activePlan === index
                  ? "border-teal-400/50 shadow-xl shadow-teal-600/20 transform scale-105"
                  : "border-slate-800 hover:border-slate-600"
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-amber-500 to-amber-700 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                  Recommended
                </div>
              )}

              <div className="flex-grow">
                <div className="flex items-center mb-6">
                  <div
                    className={`p-2.5 rounded-lg border border-slate-700 mr-3 ${
                      colorClasses[plan.color]?.iconBg || "bg-slate-800"
                    }`}
                  >
                    {React.cloneElement(plan.icon, {
                      className:
                        colorClasses[plan.color]?.iconText || "text-slate-400",
                    })}
                  </div>
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                </div>

                <p className="text-slate-400 text-sm mb-6 min-h-[40px]">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-end">
                    <span
                      className={`text-3xl font-bold ${
                        plan.price === "Free" || plan.price.startsWith("Coming")
                          ? "text-teal-400"
                          : "text-white"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span className="text-slate-400 ml-1.5 mb-1 text-sm">
                      {plan.frequency}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="text-teal-400 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={plan.ctaLink}
                className={`w-full block text-center font-bold py-3 px-6 rounded-lg transition-all duration-300 ${
                  plan.recommended
                    ? "bg-gradient-to-r from-amber-500 to-amber-700 text-white hover:opacity-90"
                    : "bg-slate-800 text-white hover:bg-slate-700 border border-slate-700"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Find answers to common questions about our plans, features, and
            billing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-teal-400/30 transition-colors"
              >
                <div className="flex items-start">
                  <div className="mr-4 mt-1">{faq.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-slate-400">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-br from-teal-900/30 to-slate-900 border border-teal-800/50 rounded-2xl p-8 inline-flex flex-col items-center justify-center">
              <HelpCircle className="text-teal-400 mb-4" size={40} />
              <h3 className="text-xl font-bold text-white mb-2">
                Still have questions?
              </h3>
              <p className="text-slate-400 mb-4 max-w-md">
                Our support team is ready to help you choose the perfect plan
                for your needs.
              </p>
              <a
                href="mailto:abdulrohim@buildpcbs.com"
                className="bg-teal-800 hover:bg-teal-700 text-white font-medium py-2 px-6 rounded-lg transition-colors flex items-center"
              >
                <Mail className="mr-2" size={18} />
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="mb-6 md:mb-0">
              <Link
                href="/"
                className="text-2xl font-bold text-white flex items-center justify-center md:justify-start"
              >
                <CircuitBoard className="text-teal-400 mr-2" size={28} />
                buildPCB<span className="text-teal-400">.ai</span>
              </Link>
              <p className="text-slate-500 mt-2 max-w-md">
                Advanced PCB design tools powered by AI for engineers, students,
                and professionals.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              <Link
                href="/features"
                className="text-slate-500 hover:text-teal-400 transition-colors"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-slate-500 hover:text-teal-400 transition-colors"
              >
                Pricing
              </Link>
              <a
                href="https://ide.buildpcbs.com/docs"
                className="text-slate-500 hover:text-teal-400 transition-colors"
              >
                Documentation
              </a>
              <a
                href="mailto:abdulrohim@buildpcbs.com"
                className="text-slate-500 hover:text-teal-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} BuildPCB.ai. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PricingPage;
