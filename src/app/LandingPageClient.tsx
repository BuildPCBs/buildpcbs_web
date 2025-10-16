"use client";

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
      <Hero />
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
