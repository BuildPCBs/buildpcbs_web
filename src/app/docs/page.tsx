import type { Metadata } from "next";
import FeaturesClient from "./FeaturesClient"; // Assuming you renamed the component

export const metadata: Metadata = {
  title: "Features | BuildPCB.ai",
  description:
    "A deep dive into every feature that makes buildPCB.ai the most powerful AI co-pilot for hardware design.",
};

export default function Page() {
  return <FeaturesClient />;
}
