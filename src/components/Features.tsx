import React from 'react';
import Image from 'next/image';

const featuresData = [
  {
    title: "God-Speed Design",
    description: "Drop your idea → get a clean layout in seconds.",
    image: "/godspeed.png",
  },
  {
    title: "Built-in Checks",
    description: "Error checking in throughput. Eliminates lots of revision cycles and makes prototyping reliable.",
    image: "/checks.png",
  },
  {
    title: "End-to-End Workflow",
    description: "No separate tool. That seamless flow is huge.",
    image: "/end.png",
  },
  {
    title: "Natural Language + Iteration",
    description: "You can describe the design in plain English (“type what you need”).",
    image: "/natural.png",
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
