import React from "react";
interface StatCardProps {
  description: string;
  value: string;
  label: string;
}

const statsData: StatCardProps[] = [
  {
    description: "Average design time cut from 3 days to 6 hours.",
    value: "400%",
    label: "Faster",
  },
  {
    description: "AI validation catches mistakes before they cost you.",
    value: "99%",
    label: "Fewer Errors",
  },
  {
    description: "The canvas is yours. AI simply helps you execute.",
    value: "100%",
    label: "Creative Control",
  },
  {
    description:
      "Export standard files, so you can keep using your favorite tools downstream.",
    value: "0",
    label: "Switching Cost",
  },
];

const StatCard: React.FC<StatCardProps> = ({ description, value, label }) => {
  return (
    <div
      className="group relative w-[287px] h-[410px] flex-shrink-0 bg-white dark:bg-[#151414]
 border-[0.5px] border-[#CDCDCD] dark:border-gray-700 rounded-xl transition-all duration-300 hover:bg-gradient-to-b from-[#255CFF] to-[#0038DF]"
    >
      <div className="absolute top-[67px] left-[23px] w-[241px] h-[40px]">
        <p className="text-[17px] leading-[120%] text-[#666666] dark:text-gray-400 group-hover:text-white/80">
          {description}
        </p>
      </div>
      <div className="absolute top-[226px] left-[23px] w-[241px] h-[134px]">
        <span className="text-[80px] font-normal text-[#D7D7D7] group-hover:text-white">
          {value}
        </span>
        <span className="block text-2xl font-normal text-[#D7D7D7] group-hover:text-white">
          {label}
        </span>
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="w-full py-16 md:py-24">
      {/* Desktop Layout */}
      <div className="hidden md:flex justify-center relative">
        <div className="relative w-full max-w-[1206px] flex justify-center">
          {/* Background Text (half covered, aligned exactly to container’s left) */}
          <h2 className="absolute top-0 left-0 -translate-y-1/2 text-[190px] font-extrabold tracking-[-0.005em] leading-[150%] bg-gradient-to-b from-gray-300 to-transparent bg-clip-text text-transparent select-none pointer-events-none z-0">
            STATS
          </h2>

          {/* Foreground Container (covers half of 'STATS') */}
          <div className="relative w-full h-[432px] bg-white dark:bg-black border-[0.5px] border-[#DDE2FF] dark:border-gray-700 rounded-2xl flex justify-center items-center overflow-hidden z-10">
            {/* Card Grid */}
            <div className="grid grid-cols-4 gap-4">
              {statsData.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-6 px-4">
          {statsData.map((stat) => (
            <div key={stat.label} className="snap-center">
              <StatCard {...stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
