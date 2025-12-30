import React from "react";

const WhySwitch = () => {
  const features = [
    "Text-to-Hardware Compiler",
    "Decentralized Manufacturing Network",
    "On-Chain Ownership & History",
    "Mobile-First Execution",
  ];

  const conicGradient1 =
    "conic-gradient(from 90deg at 50% 50%, #0038DF -3.65deg, rgba(0, 0, 0, 0.95) 0.61deg, #0038DF 356.35deg, rgba(0, 0, 0, 0.95) 360.61deg)";

  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-black">
      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="w-[586px] h-[586px] rounded-2xl"
          style={{ background: conicGradient1, border: "0.3px solid #0038DF" }}
        ></div>
        <div>
          <h3 className="text-[17px] font-normal leading-[150%] tracking-[-0.005em] text-gray-600 dark:text-gray-400 mb-8">
            Why creators build with us:
          </h3>
          <div className="flex flex-col gap-6">
            {features.map((feature, index) => (
              <p
                key={index}
                className="text-[36px] font-normal leading-[100%] text-gray-900 dark:text-white"
              >
                {feature}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout (from previous version, can be adjusted) */}
      <div className="md:hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
              Why Switch to BuildPCB?
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Stop wasting time with outdated tools. Here’s how we make PCB
              design faster, smarter, and more collaborative.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mobile card implementation can be different */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySwitch;
