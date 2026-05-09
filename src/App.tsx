import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { TechStackGrid } from "./components/TechStackGrid";
import { Projects } from "./components/Projects";
import { Timeline } from "./components/Timeline";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-night">
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
