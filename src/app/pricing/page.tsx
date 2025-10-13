import type { Metadata } from "next";
import PricingPageClient from "./PricingPageClient";

export const metadata: Metadata = {
  title: "Pricing | BuildPCBs.com",
  description:
    "Choose the perfect plan for your PCB design needs. From basic to premium plans with flexible monthly and yearly pricing.",
  openGraph: {
    title: "Pricing | BuildPCBs.com",
    description:
      "Choose the perfect plan for your PCB design needs. From basic to premium plans with flexible monthly and yearly pricing.",
    url: "https://buildpcbs.com/pricing",
    siteName: "BuildPCBs.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | BuildPCBs.com",
    description:
      "Choose the perfect plan for your PCB design needs. From basic to premium plans with flexible monthly and yearly pricing.",
  },
};

export default function PricingPage() {
  return <PricingPageClient />;
}
