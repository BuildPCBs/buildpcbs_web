"use client";
import React from "react";
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
} from "lucide-react";

const PricingPage = () => {
  React.useEffect(() => {
    document.title = "Pricing - BuildPCB.ai";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Flexible pricing plans for every stage of your design journey, from hobbyist to enterprise teams."
      );
    }
  }, []);

  const plans = [
    {
      name: "Hobbyist",
      price: "$0",
      frequency: "/month",
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
      icon: <User className="text-teal-400" />,
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
      icon: <School className="text-teal-400" />,
    },
    {
      name: "Professional",
      price: "Coming Soon",
      frequency: "",
      description:
        "For serious designers, freelancers, and small teams who need full power and collaboration.",
      features: [
        "Unlimited Private Projects",
        "AI Schematic Generation (1,000 credits/mo)",
        "AI-Assisted PCB Layout",
        "Real-Time Collaboration",
        "Priority Support",
      ],
      cta: "Notify Me",
      ctaLink: "#",
      recommended: true,
      icon: <Sparkles className="text-teal-400" />,
    },
    {
      name: "Business",
      price: "Contact Us",
      frequency: "",
      description:
        "For growing teams that need advanced collaboration and administrative tools.",
      features: [
        "All Professional Features",
        "Unlimited Collaboration Users",
        "Team Component Libraries",
        "Advanced Admin Controls",
        "Design Analytics",
      ],
      cta: "Contact Sales",
      ctaLink: "mailto:sales@buildpcbs.com",
      recommended: false,
      icon: <Users className="text-teal-400" />,
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
        "Custom Integrations",
      ],
      cta: "Contact Sales",
      ctaLink: "mailto:sales@buildpcbs.com",
      recommended: false,
      icon: <Building className="text-teal-400" />,
    },
  ];

  return (
    <div className="bg-slate-950 text-slate-300 min-h-screen font-sans">
      <header className="sticky top-0 z-50 p-4 sm:p-5 bg-slate-950/90 backdrop-blur-md border-b border-teal-900/50">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-white flex items-center"
          >
            <CircuitBoard className="text-teal-400 mr-2" size={28} />
            buildPCB<span className="text-teal-400">.ai</span>
          </Link>
          <Link
            href="/"
            className="bg-slate-800 hover:bg-slate-700 text-white font-medium py-2 px-4 rounded-full transition-colors text-sm border border-slate-700 flex items-center"
          >
            <ArrowLeft className="mr-2" size={16} />
            Back to Home
          </Link>
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
            Find the Right Plan
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-400">
            Flexible pricing for every stage of your design journey. From first
            prototype to enterprise-scale production.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-slate-900 rounded-2xl p-8 flex flex-col border transition-all duration-300 ${
                plan.recommended
                  ? "border-teal-500 shadow-2xl shadow-teal-600/20"
                  : "border-slate-800"
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 -right-0.5">
                  <div className="bg-teal-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-bl-lg rounded-tr-xl">
                    Recommended
                  </div>
                </div>
              )}
              <div className="flex-grow">
                <div className="text-center mb-6">
                  <div className="inline-block bg-slate-800 p-3 rounded-xl mb-4 border border-slate-700">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  <p className="text-slate-400 text-sm mt-2 h-10">
                    {plan.description}
                  </p>
                </div>

                <div className="text-center mb-8">
                  <span className="text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-slate-400">{plan.frequency}</span>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="text-teal-400 w-5 h-5 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={plan.ctaLink}
                className={`w-full text-center font-bold py-3 px-6 rounded-lg transition-all duration-300 ${
                  plan.recommended
                    ? "bg-teal-600 text-white hover:bg-teal-500"
                    : "bg-slate-800 text-white hover:bg-slate-700 border border-slate-700"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Compare All Features
          </h2>
          <div className="overflow-x-auto bg-slate-900/50 border border-slate-800 rounded-2xl">
            <table className="w-full text-sm text-left">
              <thead className="border-b border-slate-800">
                <tr>
                  <th className="p-6">Features</th>
                  <th className="p-6 text-center">Hobbyist</th>
                  <th className="p-6 text-center">Student & Educator</th>
                  <th className="p-6 text-center text-teal-400">
                    Professional
                  </th>
                  <th className="p-6 text-center">Business</th>
                  <th className="p-6 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {getComparisonFeatures().map((section) => (
                  <React.Fragment key={section.category}>
                    <tr className="bg-slate-800/50">
                      <td colSpan={6} className="p-4 font-bold text-white">
                        {section.category}
                      </td>
                    </tr>
                    {section.items.map((item) => (
                      <tr
                        key={item.name}
                        className="border-b border-slate-800 last:border-0 hover:bg-slate-800/30"
                      >
                        <td className="p-6 text-slate-300">{item.name}</td>
                        <td className="p-6 text-center">
                          {renderCheck(item.plans.hobbyist)}
                        </td>
                        <td className="p-6 text-center">
                          {renderCheck(item.plans.student)}
                        </td>
                        <td className="p-6 text-center text-teal-400 font-bold">
                          {renderCheck(item.plans.pro)}
                        </td>
                        <td className="p-6 text-center">
                          {renderCheck(item.plans.business)}
                        </td>
                        <td className="p-6 text-center">
                          {renderCheck(item.plans.enterprise)}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

function renderCheck(value: string | boolean) {
  if (typeof value === "boolean" && value) {
    return <Check className="w-5 h-5 mx-auto text-teal-400" />;
  }
  if (typeof value === "string") {
    return <span className="text-slate-300">{value}</span>;
  }
  return <span className="text-slate-600">-</span>;
}

function getComparisonFeatures() {
  return [
    {
      category: "Core Features",
      items: [
        {
          name: "Private Projects",
          plans: {
            hobbyist: "3",
            student: "100",
            pro: "Unlimited",
            business: "Unlimited",
            enterprise: "Unlimited",
          },
        },
        {
          name: "Public Projects",
          plans: {
            hobbyist: "Unlimited",
            student: "Unlimited",
            pro: "Unlimited",
            business: "Unlimited",
            enterprise: "Unlimited",
          },
        },
        {
          name: "AI Schematic Generation (Credits/mo)",
          plans: {
            hobbyist: "10",
            student: "500",
            pro: "1,000",
            business: "5,000",
            enterprise: "Custom",
          },
        },
        {
          name: "AI-Assisted PCB Layout",
          plans: {
            hobbyist: false,
            student: true,
            pro: true,
            business: true,
            enterprise: true,
          },
        },
        {
          name: "Interactive 3D Viewer",
          plans: {
            hobbyist: true,
            student: true,
            pro: true,
            business: true,
            enterprise: true,
          },
        },
      ],
    },
    {
      category: "Collaboration",
      items: [
        {
          name: "Real-Time Multiplayer Editing (Users)",
          plans: {
            hobbyist: false,
            student: "5",
            pro: "10",
            business: "Unlimited",
            enterprise: "Unlimited",
          },
        },
        {
          name: "In-Context Commenting",
          plans: {
            hobbyist: false,
            student: true,
            pro: true,
            business: true,
            enterprise: true,
          },
        },
        {
          name: "Team Libraries",
          plans: {
            hobbyist: false,
            student: false,
            pro: false,
            business: true,
            enterprise: true,
          },
        },
        {
          name: "Granular Permissions & Admin Controls",
          plans: {
            hobbyist: false,
            student: false,
            pro: true,
            business: true,
            enterprise: true,
          },
        },
      ],
    },
    {
      category: "Support & Security",
      items: [
        {
          name: "Community Support",
          plans: {
            hobbyist: true,
            student: true,
            pro: true,
            business: true,
            enterprise: true,
          },
        },
        {
          name: "Email & Priority Support",
          plans: {
            hobbyist: false,
            student: false,
            pro: true,
            business: true,
            enterprise: true,
          },
        },
        {
          name: "Dedicated Account Manager & SLA",
          plans: {
            hobbyist: false,
            student: false,
            pro: false,
            business: false,
            enterprise: true,
          },
        },
        {
          name: "Single Sign-On (SSO)",
          plans: {
            hobbyist: false,
            student: false,
            pro: false,
            business: true,
            enterprise: true,
          },
        },
        {
          name: "On-Premise Deployment",
          plans: {
            hobbyist: false,
            student: false,
            pro: false,
            business: false,
            enterprise: true,
          },
        },
      ],
    },
  ];
}

export default PricingPage;
