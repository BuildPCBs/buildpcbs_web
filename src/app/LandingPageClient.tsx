"use client";

import React, { useState } from "react";
import DecorativeCircles from "@/components/DecorativeCircles";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Quote from "@/components/Quote";
import WhySwitch from "@/components/WhySwitch";
import FAQ from "@/components/FAQ";
import WaitlistModal from "@/components/WaitlistModal";

const LandingPageClient = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  return (
    <>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <DecorativeCircles />
        <Hero onJoinWaitlist={() => setIsWaitlistOpen(true)} />
      </div>
      <Quote />
      <Partners />
      <Features />
      <Stats />
      {/* <WhySwitch />
      <FAQ /> */}
      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </>
  );
};

export default LandingPageClient;
