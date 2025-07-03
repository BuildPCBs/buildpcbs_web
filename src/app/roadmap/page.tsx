import type { Metadata } from "next";
import RoadmapClient from "./RoadmapClient"; // Assuming you renamed the component

export const metadata: Metadata = {
  title: "Public Roadmap | BuildPCB.ai",
  description:
    "Follow our progress and see what's next for BuildPCB.ai as we build the future of electronics design in the open.",
};

export default function Page() {
  return <RoadmapClient />;
}
