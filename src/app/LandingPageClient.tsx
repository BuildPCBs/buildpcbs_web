"use client";

import DecorativeCircles from "@/components/DecorativeCircles";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Quote from "@/components/Quote";
import WhySwitch from "@/components/WhySwitch";
import FAQ from "@/components/FAQ";

const LandingPageClient = () => {
  return (
    <>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <DecorativeCircles />
        <Hero />
      </div>
      <Quote />
      <Partners />
      <Features />
      <Stats />
      {/* <WhySwitch />
      <FAQ /> */}
    </>
  );
};

export default LandingPageClient;
