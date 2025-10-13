"use client";

import React, { useState } from "react";
import PricingToggle from "@/components/PricingToggle";
import PricingCard from "@/components/PricingCard";

const PricingPageClient = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(
    "Standard Plan"
  );

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
  };

  const features = [
    "Update Cycle",
    "Subscription Policy",
    "Communication",
    "Companies",
    "Requests",
    "Support",
    "Additional Director",
  ];

  const pricing = {
    monthly: {
      basic: "$30/m",
      standard: "$100/m",
      premium: "$350/m",
    },
    yearly: {
      basic: "$300/y",
      standard: "$1000/y",
      premium: "$3500/y",
    },
  };

  return (
    <div className="container mx-auto py-6 md:py-12 px-4">
      <div className="text-left md:text-center">
        <h1 className="text-[32px] font-sans font-normal text-[#444444] leading-[1.2] mb-4">
          Pricing
        </h1>
        <p className="text-[13px] font-geist-sans font-normal text-[#4A4A4A] leading-none tracking-[-0.02em] mb-4 md:mb-8">
          Same amount at checkout!
        </p>
        <div className="flex justify-center mb-6 md:mb-12">
          <PricingToggle isYearly={isYearly} setIsYearly={setIsYearly} />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-4">
          <PricingCard
            planName="Basic Plan"
            price={isYearly ? pricing.yearly.basic : pricing.monthly.basic}
            features={features}
            isSelected={selectedPlan === "Basic Plan"}
            onSelect={() => handleSelectPlan("Basic Plan")}
          />
          <PricingCard
            planName="Standard Plan"
            price={
              isYearly ? pricing.yearly.standard : pricing.monthly.standard
            }
            features={features}
            isPopular
            isSelected={selectedPlan === "Standard Plan"}
            onSelect={() => handleSelectPlan("Standard Plan")}
          />
          <PricingCard
            planName="Premium Plan"
            price={isYearly ? pricing.yearly.premium : pricing.monthly.premium}
            features={features}
            isSelected={selectedPlan === "Premium Plan"}
            onSelect={() => handleSelectPlan("Premium Plan")}
          />
        </div>
      </div>
    </div>
  );
};

export default PricingPageClient;
