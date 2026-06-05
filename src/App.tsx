import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import CredentialsHub from "./components/CredentialsHub";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
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

  const handleSelectService = (title: string) => {
    setSelectedService(title);
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

        <Testimonials />

        <Blog />

        <Contact selectedService={selectedService} />
      </main>

      {/* Closing brand credits footer */}
      <Footer />

      {/* Standard Full-featured Curriculum Vitae modal */}
      {cvModalOpen && (
        <CvModal onClose={() => setCvModalOpen(false)} />
      )}

    </div>
  );
}
