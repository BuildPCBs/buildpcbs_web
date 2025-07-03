import type { Metadata } from "next";
import BlueprintClient from "./BlueprintClient"; // Assuming you renamed the component

export const metadata: Metadata = {
  title: "Master Feature Blueprint | BuildPCB.ai",
  description:
    "An exhaustive, granular breakdown of every planned feature and system component for BuildPCB.ai.",
};

export default function Page() {
  return <BlueprintClient />;
}
