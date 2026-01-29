import React from "react";
import { motion } from "framer-motion";
import ParticleButton from "@/components/kokonutui/particle-button";
import DynamicText from "@/components/kokonutui/dynamic-text";

interface HeroProps {
  onJoinWaitlist?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onJoinWaitlist }) => {
  return (
    <section className="w-full h-screen flex flex-col justify-end pb-[30vh]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left Column */}
        <div className="flex flex-col gap-6 md:gap-8">

          <p className="text-[10px] uppercase tracking-widest font-medium text-gray-500 dark:text-gray-400 mb-[-16px]">
            th world's first ai hardware compiler
          </p>
          <DynamicText
            className="w-full max-w-[500px] whitespace-pre-line"
            interval={3000}
            staticPrefix=""
            staticSuffix=" pcbs with text"
            dynamicTexts={["build", "design"]}
            dynamicClassName="w-[115px] text-left"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 text-left items-start md:text-right md:items-end">
          <p className="font-normal text-[14px] md:text-[17px] leading-[150%] tracking-[-0.005em] text-[#777777] dark:text-gray-300 w-full max-w-[400px] whitespace-pre-line">
            {
              "buildPCBs turns your ideas in text into real hardware prototypes on Solana"
            }
          </p>
          <motion.button
            onClick={onJoinWaitlist}
            initial="initial"
            whileHover="hovered"
            className="hidden md:flex items-center justify-center w-[157px] h-[50px] rounded-full text-white font-medium bg-gradient-to-r from-[#0038DF] to-[#001E79] hover:opacity-90 transition-opacity overflow-hidden"
          >
            <div className="flex">
              {"Join Waitlist".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    initial: { y: 0 },
                    hovered: { y: -5 },
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: index * 0.03,
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
