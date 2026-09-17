import { useEffect, useState, type ComponentType } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { WaitlistProvider } from "@/context/WaitlistContext";
import HomePage from "@/app/page";
import BlogPage from "@/app/blog/page";
import BlogPostPage from "@/app/blog/[slug]/page";
import HowToDesignPage from "@/app/blog/how-to-design-a-pcb/page";
import BlueprintPage from "@/app/blueprint/page";
import BuildPage from "@/app/build/page";
import CareerPage from "@/app/career/page";
import DocsPage from "@/app/docs/page";
import DocumentationPage from "@/app/documentation/page";
import FaqPage from "@/app/faq/page";
import HelpCenterPage from "@/app/help-center/page";
import PricingPage from "@/app/pricing/page";
import PrivacyPage from "@/app/privacy/page";
import ResourcesPage from "@/app/resources/page";
import RoadmapPage from "@/app/roadmap/page";
import TermsPage from "@/app/terms/page";
import NotFound from "@/app/not-found";

const routes: Record<string, ComponentType> = {
  "/": HomePage,
  "/blog": BlogPage,
  "/blog/how-to-design-a-pcb": HowToDesignPage,
  "/blueprint": BlueprintPage,
  "/build": BuildPage,
  "/career": CareerPage,
  "/careers": CareerPage,
  "/docs": DocsPage,
  "/documentation": DocumentationPage,
  "/faq": FaqPage,
  "/help-center": HelpCenterPage,
  "/pricing": PricingPage,
  "/privacy": PrivacyPage,
  "/resources": ResourcesPage,
  "/roadmap": RoadmapPage,
  "/terms": TermsPage,
};

function currentPath() {
  const path = window.location.pathname.replace(/\/+$/, "");
  return path || "/";
}

export default function App() {
  const [pathname, setPathname] = useState(currentPath);

  useEffect(() => {
    if (pathname === "/app") window.location.replace("https://app.buildpcbs.com");
    if (pathname === "/explorer") window.location.replace("https://explorer.buildpcbs.com");
  }, [pathname]);

  useEffect(() => {
    const handleNavigation = () => setPathname(currentPath());
    window.addEventListener("popstate", handleNavigation);
    return () => window.removeEventListener("popstate", handleNavigation);
  }, []);

  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
  }, [pathname]);

  const Page =
    routes[pathname] ??
    (pathname.startsWith("/blog/") ? BlogPostPage : NotFound);

  return (
    <ThemeProvider>
      <WaitlistProvider>
        <Navbar />
        <main className="pt-32 md:pt-0">
          <Page />
        </main>
        <Footer />
      </WaitlistProvider>
    </ThemeProvider>
  );
}
