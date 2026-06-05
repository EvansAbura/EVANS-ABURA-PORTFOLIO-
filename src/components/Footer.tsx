import { Database, Linkedin, Github, MessageSquare, ArrowUp, Mail, Phone } from "lucide-react";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="site-footer" className="bg-[#050811] text-slate-400 border-t border-slate-800/60 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Columns row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
          
          {/* Logo & Closing statement */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2 font-display text-xl font-bold tracking-tight text-blue-500">
              <div className="p-1.5 bg-blue-900/40 rounded-lg">
                <Database className="w-5 h-5 text-blue-400" />
              </div>
              <span>
                Evans<span className="text-white font-medium">.Abura</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm font-sans leading-relaxed">
              "Helping organizations make smarter decisions through data, research, and technology."
            </p>

            <p className="text-xs text-slate-500 font-mono">
              B.Tech Communication and Computer Networks. Specialized in Data & Research Analytics and Cisco enterprise infrastructures.
            </p>
          </div>

          {/* Quick Sitemap Links */}
          <div className="space-y-4 font-sans text-xs sm:text-sm">
            <h4 className="font-display font-medium text-white tracking-wider uppercase text-[10px] font-mono">
              Portfolio Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">Biography & Partner Organizations</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-400 transition-colors">Technical Competency Index</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition-colors">Featured Practical Capstones</a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">Contracting Options & Services</a>
              </li>
            </ul>
          </div>

          {/* Sourced Contacts Summary */}
          <div className="space-y-4 font-mono text-xs">
            <h4 className="font-display font-medium text-white tracking-wider uppercase text-[10px]">
              Direct Connection Channels
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <a href="mailto:evansabura1@gmail.com" className="hover:text-blue-400">evansabura1@gmail.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <a href="tel:+254797229924" className="hover:text-blue-400">+254 797 229 924</a>
              </li>
              <li className="flex items-center space-x-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
                <a href="https://wa.me/254797229924" target="_blank" className="hover:text-emerald-400">WhatsApp live link</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower row */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-mono text-left">
            &copy; {new Date().getFullYear()} Evans Abura Ojuang'. All Rights Reserved. Fully Certified Freelance Consultant.
          </p>

          <div className="flex items-center space-x-3.5">
            <a
              href="https://www.linkedin.com/in/evans-abura-7431261ba"
              target="_blank"
              referrerPolicy="no-referrer"
              className="p-2 bg-slate-900 border border-slate-800 text-slate-400 hover:text-white rounded-lg hover:border-blue-500/40 transition-all cursor-pointer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/EvansAbura"
              target="_blank"
              referrerPolicy="no-referrer"
              className="p-2 bg-slate-900 border border-slate-800 text-slate-400 hover:text-white rounded-lg hover:border-slate-700 transition-all cursor-pointer"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              onClick={handleScrollTop}
              className="p-2 bg-slate-900 border border-slate-800 text-slate-450 hover:text-white rounded-lg hover:border-blue-500/40 transition-all cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
