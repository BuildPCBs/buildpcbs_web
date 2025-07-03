import type { Metadata } from "next";
import PricingClient from "./PricingClient"; // Assuming you renamed the component

export const metadata: Metadata = {
  title: "Pricing | BuildPCB.ai",
  description:
    "Flexible pricing plans for every stage of your design journey, from hobbyist to enterprise teams.",
};

export default function Page() {
  return <PricingClient />;
}
