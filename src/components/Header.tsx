import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Database, Search, Network } from "lucide-react";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Credentials", href: "#credentials" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-[#090e1a]/95 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-slate-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            id="logo-link"
            href="#home"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-accent-blue rounded flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-all duration-300 font-display">
              E
            </div>
            <div className="text-left">
              <h1 className="font-bold text-sm sm:text-base leading-none text-slate-900 dark:text-white">Evans Abura Ojuang'</h1>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-tight block">Executive IT Support Engineer, Research Consultant & Data Analyst</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <a
                id={`nav-${item.label.toLowerCase()}`}
                key={item.label}
                href={item.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Dark Mode Toggle */}
            <button
              id="theme-toggle-desktop"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Mode"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            <a
              id="header-cta-hire"
              href="#contact"
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-sm shadow-blue-500/10 transition-colors"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* Dark Mode Toggle Mobile */}
            <button
              id="theme-toggle-mobile"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/40 transition-colors"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4.5 h-4.5 text-amber-400" /> : <Moon className="w-4.5 h-4.5 text-slate-700" />}
            </button>

            <button
              id="menu-toggle-button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
              aria-expanded={isOpen}
              aria-label="Main menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-nav-panel"
        className={`lg:hidden transition-all duration-300 ease-in-out border-b border-slate-100 dark:border-slate-800/50 ${
          isOpen ? "max-h-[380px] bg-white dark:bg-[#090e1a] opacity-100 py-3" : "max-h-0 opacity-0 overflow-hidden pointer-events-none"
        }`}
      >
        <div className="px-4 space-y-1">
          {menuItems.map((item) => (
            <a
              id={`nav-mobile-${item.label.toLowerCase()}`}
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 px-4 pb-1">
            <a
              id="mobile-cta-hire"
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full py-2.5 text-center rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
