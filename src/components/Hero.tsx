import React from "react";
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
          <div className="flex items-center gap-4">
            <span className="font-medium text-[14px] md:text-[17px] tracking-[-0.005em] text-[#777777] dark:text-gray-300">
              Watch Demo
            </span>
            <a
              href=""
              className="flex items-center justify-center w-[125px] h-[50px] border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              {/* Video Icon Placeholder */}
              <svg
                className="h-6 w-6 text-gray-600 dark:text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>
          </div>
          <DynamicText
            className="w-full max-w-[500px] whitespace-pre-line"
            interval={3000}
            staticPrefix="Think it. Chat it. "
            dynamicTexts={["Build it.", "Sell it.", "Ship it.", "Own it."]}
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 text-left items-start md:text-right md:items-end">
          <p className="font-normal text-[14px] md:text-[17px] leading-[150%] tracking-[-0.005em] text-[#777777] dark:text-gray-300 w-full max-w-[400px] whitespace-pre-line">
            {
              "BuildPCBs is now a full AI + Web3 hardware creation network. The AI acts as a hardware compiler, transforming natural language directly into real physical products."
            }
          </p>
          <div className="flex flex-row gap-2">
            <a
              href="https://app.buildpcbs.com"
              className="hidden md:flex items-center justify-center w-[157px] h-[50px] rounded-full text-white font-medium bg-gradient-to-r from-[#0038DF] to-[#001E79] hover:opacity-90 transition-opacity"
            >
              Start Now
            </a>
            <button
              onClick={onJoinWaitlist}
              className="hidden md:flex items-center justify-center w-[157px] h-[50px] rounded-full text-[#0038DF] font-medium border border-[#0038DF] hover:bg-blue-50 transition-colors"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
