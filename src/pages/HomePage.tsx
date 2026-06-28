import { useEffect } from "react";

import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { TechStackGrid } from "../components/TechStackGrid";
import { Projects } from "../components/Projects";
import { Timeline } from "../components/Timeline";
import { Certifications } from "../components/Certifications";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export function HomePage() {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0612]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStackGrid />
        <Projects />
        <Timeline />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
