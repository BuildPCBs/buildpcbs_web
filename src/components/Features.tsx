import React from "react";
import Image from "next/image";

const featuresData = [
  {
    title: "AI Hardware Compiler",
    description:
      "Describe a device in plain text. The system generates the PCB, schematic, BOM, enclosure, and firmware automatically.",
    image: "/natural.png",
  },
  {
    title: "Web3 Manufacturing",
    description:
      "A decentralized network where CNC owners and fabricators stake $BUILD to receive and process jobs.",
    image: "/checks.png",
  },
  {
    title: "Closed Marketplace",
    description:
      "Publish your designs to a closed ecosystem. Ownership, logs, and version history are tracked on-chain.",
    image: "/end.png",
  },
  {
    title: "Mobile Execution",
    description:
      "Chat with the AI to design hardware, manage builds, or publish products entirely from your phone.",
    image: "/godspeed.png",
  },
];

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
}

const FeatureCard = ({ title, description, image }: FeatureCardProps) => {
  return (
    <div className="group relative p-8 bg-white dark:bg-black border-[0.5px] border-[#0038DF] rounded-xl transition-all duration-300 hover:bg-gradient-to-b from-[#255CFF] to-[#0038DF]">
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:items-end">
        <div className="text-left md:pt-8">
          <h3 className="text-xl font-normal leading-[150%] tracking-[-0.005em] text-gray-800 dark:text-[#C7C7C7] group-hover:text-white">
            {title}
          </h3>
          <p className="mt-2 text-[17px] font-normal leading-[120%] tracking-[-0.005em] text-gray-600 dark:text-[#949494] group-hover:text-white/80">
            {description}
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <Image src={image} alt={title} width={144} height={144} />
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuresData.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
