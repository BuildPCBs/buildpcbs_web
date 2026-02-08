import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Visual Components (Simulated from Figma Mockups) ---

const VisualAnalytics = () => (
  <div className="relative w-[360px] h-[360px] bg-gradient-to-b from-white to-[#F3F3F3] border border-[#EBEBEB] rounded-xl overflow-hidden shadow-sm">
    {/* Mock Chart Area */}
    <div className="absolute left-[28px] top-[48px] text-[8px] text-[#555555] font-['DM_Sans']">Live Performance Stats on editor</div>
    <div className="absolute left-[24px] top-[35px] text-[12px] text-[#555555] font-['DM_Sans']">Activity Analytics</div>

    {/* Simulated Graph Bars/Lines - Artistic interpretations */}
    <div className="absolute left-[9px] top-[111px] w-[300px] h-[150px] opacity-10">
      {/* Background grid lines */}
      <div className="border-b border-gray-300 h-10 w-full" />
      <div className="border-b border-gray-300 h-10 w-full" />
      <div className="border-b border-gray-300 h-10 w-full" />
    </div>

    {/* "Feb", "Mar" Text */}
    <div className="absolute left-[87px] top-[200px] text-[6px] text-[#555555]">Jan</div>
    <div className="absolute left-[128px] top-[196px] text-[6px] text-[#555555]">Feb</div>
    <div className="absolute left-[169px] top-[192px] text-[6px] text-[#555555]">Mar</div>
    <div className="absolute left-[211px] top-[187px] text-[6px] text-[#555555]">Apr</div>

    {/* Floating Card: "Activity Analytics Tracker" Label at bottom */}
    <div className="absolute left-[15px] top-[318px] text-[20px] text-[#8E8E8E] font-['DM_Sans'] leading-[150%]">
      Activity Analytics Tracker
    </div>

    {/* Decorative colored dots/lines from Figma */}
    <div className="absolute left-[100px] top-[95px] w-3 h-3 bg-[#0038DF] rounded-[2px]" />
    <div className="absolute left-[155px] top-[89px] w-3 h-3 bg-[#DDE2FF] rounded-[2px]" />
    <div className="absolute left-[210px] top-[83px] w-3 h-3 bg-[#5772FF] rounded-[2px]" />
  </div>
);

const VisualExport = () => (
  <div className="relative w-[360px] h-[360px] bg-gradient-to-b from-white to-[#F3F3F3] border border-[#EBEBEB] rounded-xl overflow-hidden shadow-sm">
    {/* Main Card Graphic */}
    <div className="absolute left-[-14px] top-[17px] w-[289px] h-[281px] bg-white border border-[#E9E8E8] rounded-[15px] shadow-sm transform rotate-[-3deg]">
      <div className="absolute left-[17px] top-[20px] text-[10px] font-medium text-[#555555]">Export this project</div>

      {/* "Enter email" Input */}
      <div className="absolute left-[32px] top-[50px] w-[203px] h-[26px] bg-[#F8F8F8] border border-[#EAEAEA] rounded-[4px] flex items-center px-2">
        <span className="text-[9px] text-[#CCCBCB]">Enter email to invite</span>
      </div>

      {/* Team List Mocks */}
      <div className="absolute left-[32px] top-[90px] space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-red-500" />
          <span className="text-[10px] text-[#999999]">Espa Seebowl</span>
          <span className="text-[9px] text-[#999999] ml-auto">can view</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-gradient-to-t from-gray-400 to-white" />
          <span className="text-[10px] text-[#999999]">Seebowl Espa</span>
          <span className="text-[9px] text-[#999999] ml-auto">can edit</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="absolute left-[93px] top-[200px] w-[266px] h-[26px] bg-white border border-[#EAEAEA] rounded-[4px] flex items-center justify-center gap-2">
        <span className="text-[9px] text-[#999999]">Download</span>
      </div>
      <div className="absolute left-[105px] top-[228px] w-[266px] h-[26px] bg-[#0038DF] border border-[#0021CD] rounded-[4px] flex items-center justify-center gap-2">
        <span className="text-[9px] text-white">Send Us a Feedback</span>
      </div>
    </div>

    {/* Footer Text */}
    <div className="absolute left-[18px] top-[315px] text-[20px] text-[#848484] font-['DM_Sans'] leading-[150%]">
      Exportable files & Team Invite
    </div>
  </div>
);

const VisualLibrary = () => (
  <div className="relative w-[360px] h-[360px] bg-gradient-to-b from-white to-[#F3F3F3] border border-[#EBEBEB] rounded-xl overflow-hidden shadow-sm">
    {/* Tilted Card */}
    <div className="absolute left-[15px] top-[0px] w-[228px] h-[316px] bg-white border border-[#DDDDDD] rounded-[14px] shadow-lg transform rotate-[-5deg] origin-top-left">
      <div className="absolute left-[157px] top-[6px] text-[13px] text-[#999999]">Schemas</div>
      {/* List of components */}
      <div className="absolute top-[40px] left-[20px] space-y-4">
        <div className="text-[#999999] text-[12px] border-b pb-1">USB Port Layout</div>
        <div className="text-[#999999] text-[12px] border-b pb-1">LED Battery Connector</div>
        <div className="text-[#999999] text-[12px] border-b pb-1">Arduino Connector board</div>
        <div className="text-[#999999] text-[12px] border-b pb-1">Joule thief circuit</div>
        <div className="text-[#999999] text-[12px] border-b pb-1">ESP345-S3 bridge router</div>
      </div>
      <div className="absolute top-[20px] left-[33px] text-[#0038DF] text-[12px]">Components</div>
    </div>

    {/* Footer Text */}
    <div className="absolute left-[19px] top-[320px] text-[20px] text-[#8E8E8E] font-['DM_Sans'] leading-[150%]">
      Ready to-use Component Library
    </div>
  </div>
);

const VisualInterpreter = () => (
  <div className="relative w-[360px] h-[360px] bg-gradient-to-b from-white to-[#F3F3F3] border border-[#EBEBEB] rounded-xl overflow-hidden shadow-sm">
    {/* Chat Interface Mockup */}
    <div className="absolute left-[-15px] top-[12px] w-[253px] h-[225px] bg-[#FAFAFA] border border-[#CCCCCC] rounded-[15px] rounded-bl-[1px] shadow-sm transform rotate-[-4deg]">
      {/* Chat Bubble: User */}
      <div className="absolute right-[10px] top-[12px] bg-[#0038DF] border border-[#002FBB] rounded-[12px] rounded-br-[1px] p-2 max-w-[200px]">
        <p className="text-[10px] text-white leading-[140%]">give me a USB type -c board layout PCB design for an android phone</p>
      </div>

      {/* Chat Bubble: AI */}
      <div className="absolute left-[10px] top-[60px] bg-[#F8F8F8] border border-[#EAEAEA] rounded-[18px] rounded-bl-[1px] p-2 max-w-[213px]">
        <p className="text-[10px] text-[#777777] leading-[140%]">Created a complete USB-C breakout board with CC pull-downs...</p>
        <div className="flex gap-2 mt-2">
          <span className="text-[9px] text-[#0038DF] bg-white border border-[#EAEAEA] px-1 rounded">copy</span>
          <span className="text-[9px] text-[#0038DF] bg-white border border-[#EAEAEA] px-1 rounded">refresh</span>
        </div>
      </div>

      {/* Input Area */}
      <div className="absolute left-[90px] top-[227px] w-[253px] h-[72px] bg-white border border-[#DDDDDD] rounded-[9px] p-2 flex items-center">
        <span className="text-[10px] text-[#999999]">build your circuits here..</span>
        <div className="ml-auto w-6 h-6 rounded-full border border-[#DDDDDD] flex items-center justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full" />
        </div>
      </div>
    </div>

    {/* Footer Text */}
    <div className="absolute left-[15px] top-[319px] text-[20px] text-[#848484] font-['DM_Sans'] leading-[150%]">
      AI-powered prompt interpreter
    </div>
  </div>
);


const WhySwitch = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const FEATURES = [
    {
      title: "Activity Analytics Tracker",
      component: <VisualAnalytics />,
      label: "Activity Analytics Tracker"
    },
    {
      title: "Ready to-use Component Library",
      component: <VisualLibrary />,
      label: "Ready to-use Component Library"
    },
    {
      title: "Exportable files & Invite team",
      component: <VisualExport />,
      label: "Exportable files & Invite team"
    },
    {
      title: "AI-powered prompt interpreter",
      component: <VisualInterpreter />,
      label: "AI-powered prompt interpreter"
    }
  ];

  return (
    <section className="w-full relative bg-white py-24 overflow-hidden">
      {/* Background "WHY?" Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1140px] pointer-events-none select-none z-0">
        <h1 className="font-['DM_Sans'] font-extrabold text-[150px] md:text-[250px] leading-[100%] text-transparent bg-clip-text bg-gradient-to-b from-[#EEEEEE] to-white opacity-60 text-center tracking-tighter">
          WHY?
        </h1>
      </div>

      <div className="max-w-[1140px] mx-auto relative z-10 px-4">
        {/* Header */}
        <div className="mb-12">
          <h3 className="font-['DM_Sans'] font-normal text-[18px] text-[#777777]">
            Why Engineers switch to buildpcb:
          </h3>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">

          {/* Visual Area (Left) */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-[360px] h-[360px] md:w-[450px] md:h-[450px] transition-all duration-500">
              {/* Isometric wrapper for desktop effect */}
              <div className="w-full h-full transform transition-transform duration-500 md:rotate-[-2deg] md:hover:rotate-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.9, x: -20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    <div className="w-full h-full transform scale-[1.25] origin-top-left md:scale-110">
                      {FEATURES[activeIndex].component}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Features List (Right) */}
          <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-9">
            {FEATURES.map((feature, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  className="group cursor-pointer"
                  onClick={() => setActiveIndex(index)}
                // Make entire row interactive
                >
                  <div className="flex items-center gap-4 relative">
                    {/* Active Indicator Line */}
                    <div className={`
                                            h-[2px] transition-all duration-300 ease-out
                                            ${isActive ? 'w-[100px] bg-[#4A4A4A]' : 'w-0 bg-transparent group-hover:w-[10px] group-hover:bg-gray-300'}
                                        `} />

                    <h2 className={`
                                            font-['DM_Sans'] text-[24px] md:text-[36px] leading-[130%] transition-colors duration-300
                                            ${isActive ? 'text-[#4A4A4A] font-medium' : 'text-[#BBBBBB] hover:text-[#999999]'}
                                        `}>
                      {feature.title}
                    </h2>
                  </div>

                  {/* Progress Bar for Active Item (Optional, from Figma 'Frame 32') */}
                  {isActive && (
                    <motion.div
                      layoutId="active-bar"
                      className="h-[2px] bg-[#DDDDDD] rounded-full mt-2 w-full max-w-[340px] relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute top-0 left-0 bottom-0 bg-[#4A4A4A] w-[30%]"
                        animate={{ x: ["0%", "300%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Specific Stack Layout (if needed, currently using responsive flex-col above) 
                 The prompt asked for specific mobile stacking, we can adjust if the flex-col isn't enough.
                 Usually, flipping the visual to be *below* the text on mobile is preferred, or accordion.
                 Here we kept Visual Top, Text Bottom for mobile (flex-col). 
                 Let's check if we should do Accordion? 
                 Prompt: "mobile here ... Frame ... gap 22px" 
                 A simple list with active state matches the design best.
             */}
    </section>
  );
};

export default WhySwitch;
