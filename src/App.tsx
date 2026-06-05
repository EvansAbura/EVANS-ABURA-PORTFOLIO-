import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import CredentialsHub from "./components/CredentialsHub";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CvModal from "./components/CvModal";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Check local storage or default to dark (since it's technology focused, dark fits beautifully as a professional default)
    const saved = localStorage.getItem("portfolio-theme");
    return saved ? saved === "dark" : true;
  });

  const [selectedService, setSelectedService] = useState<string>("");
  const [cvModalOpen, setCvModalOpen] = useState<boolean>(false);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  // Sync dark class on document element
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("portfolio-theme", "light");
    }
  }, [darkMode]);

  // Monitor page scroll to render back to top button safely
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSelectService = (title: string) => {
    setSelectedService(title);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`min-h-screen text-slate-800 dark:text-slate-200 transition-colors duration-200 antialiased ${darkMode ? "bg-[#090e1a]" : "bg-slate-50/40"}`}>
      
      {/* Scrollable Indicator */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 z-60 pointer-events-none" />

      {/* Navigation Header */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Header Space */}
      <main className="relative">
        <Hero onOpenCvModal={() => setCvModalOpen(true)} />

        {/* Detailed Info Sections */}
        <About />

        <Skills />

        <Projects />

        <Experience />

        <Certifications />

        <CredentialsHub />

        <Services onSelectService={handleSelectService} />

        <Contact selectedService={selectedService} />
      </main>

      {/* Closing brand credits footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-55 p-3.5 rounded-full bg-blue-600 dark:bg-blue-500 text-white shadow-2xl hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 active:scale-95 border border-blue-500/30 group cursor-pointer flex items-center justify-center hover:-translate-y-1"
          aria-label="Back to top scroll"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </button>
      )}

      {/* Standard Full-featured Curriculum Vitae modal */}
      {cvModalOpen && (
        <CvModal onClose={() => setCvModalOpen(false)} />
      )}

    </div>
  );
}
