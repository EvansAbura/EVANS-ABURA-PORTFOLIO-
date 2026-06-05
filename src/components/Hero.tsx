import { useState } from "react";
import { Award, ArrowRight, Download, Mail, Network, Search, Database } from "lucide-react";

interface HeroProps {
  onOpenCvModal: () => void;
}

export default function Hero({ onOpenCvModal }: HeroProps) {
  const [portraitStyle, setPortraitStyle] = useState<"red" | "standing" | "ai">("red");

  const getPortraitSrc = () => {
    if (portraitStyle === "red") return "/src/assets/images/evans_portrait_red.jpg";
    if (portraitStyle === "standing") return "/src/assets/images/evans_standing.jpg";
    return "/src/assets/images/evans_portrait_1780654631283.png";
  };

  return (
    <section
      id="home"
      className="relative pt-24 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 bg-radial from-blue-50/50 via-white to-white dark:from-slate-900/40 dark:via-[#090e1a] dark:to-[#090e1a] overflow-hidden"
    >
      {/* Decorative Grids or background flows */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-20">
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-blue-200 dark:text-blue-800/60" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Blue blurry background circles for high-end professional consultancy vibe */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-600/10 rounded-full blur-3xl z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Information */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Professional Status Tag */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/40">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300 font-mono">
                Available for Consulting & Contract Projects
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-slate-900 dark:text-white leading-none">
                Transforming Data into <span className="text-blue-600 dark:text-blue-400 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Insights</span> & Research into <span className="text-blue-600 dark:text-blue-400 bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Impact</span>
              </h1>
              
              {/* Secondary Subheading Title Roll */}
              <p className="text-lg font-display font-semibold text-slate-700 dark:text-slate-300 tracking-wide border-l-3 border-blue-600 dark:border-blue-400 pl-4">
                Data Analyst | Research Consultant | AI Search Optimization Specialist | Network Professional
              </p>
            </div>

            {/* Subhead Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-sans leading-relaxed max-w-2xl">
              I help organizations transform complex data into actionable insights, optimize digital visibility through SEO and modern AI Search Optimization (AEO, GEO, LLMO), and engineer secure, high-uptime network solutions that accelerate regional and global growth.
            </p>

            {/* CTE Row */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                id="hero-cta-portfolio"
                href="#projects"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/15 hover:shadow-lg transition-all"
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                id="hero-cta-cv"
                onClick={onOpenCvModal}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-semibold text-sm border border-slate-200 dark:border-slate-700 shadow-sm transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>

              <a
                id="hero-cta-hire"
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-slate-900 dark:bg-blue-900/20 hover:bg-slate-850 dark:hover:bg-blue-900/40 text-white dark:text-blue-300 font-semibold text-sm border border-transparent dark:border-blue-800/40 transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Hire Me</span>
              </a>
            </div>

            {/* Quick trust features badges */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-100 dark:border-slate-800/80 max-w-md font-mono">
              <div className="text-left">
                <p className="text-2xl font-bold font-display text-blue-600 dark:text-blue-400 leading-none">B.Tech</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">CCN Graduate</p>
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold font-display text-blue-600 dark:text-blue-400 leading-none">6+</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">Cisco Certs</p>
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold font-display text-blue-600 dark:text-blue-400 leading-none">100%</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">AI Search Compliant</p>
              </div>
            </div>

          </div>

          {/* Hero Mockup Representation */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[360px] sm:max-w-[420px] aspect-[4/5] bg-gradient-to-b from-blue-50 to-white dark:from-slate-800/50 dark:to-slate-900/50 rounded-3xl p-3 border border-slate-200/60 dark:border-slate-800 shadow-xl relative overflow-hidden group">
              
              {/* Professional portrait image with tech overlays */}
              <div className="absolute inset-0 z-0">
                <img
                  src={getPortraitSrc()}
                  alt="Evans Abura Ojuang'"
                  referrerPolicy="no-referrer"
                  width="420"
                  height="525"
                  loading="eager"
                  // @ts-ignore
                  fetchPriority="high"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Elegant overlay gradient to make text highly legible */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/10 z-10" />
              </div>

              {/* Dynamic Portrait selector overlay */}
              <div className="absolute top-16 right-4 z-30 flex flex-col space-y-2 pointer-events-auto bg-slate-950/70 backdrop-blur-md p-2 rounded-xl border border-slate-800/60 shadow-lg">
                <p className="text-[8px] font-mono font-bold text-slate-400 uppercase tracking-wider text-left border-b border-slate-800 pb-1 mb-1">
                  Photo Switcher
                </p>
                <div className="flex flex-col gap-1.5">
                  <button
                    onClick={() => setPortraitStyle("red")}
                    className={`px-2 py-1 rounded text-[9px] font-mono font-bold text-left tracking-wide transition-all ${
                      portraitStyle === "red" 
                        ? "bg-blue-600 text-white" 
                        : "text-slate-400 hover:text-slate-100 hover:bg-slate-900"
                    }`}
                  >
                    🔴 Studio Portrait
                  </button>
                  <button
                    onClick={() => setPortraitStyle("standing")}
                    className={`px-2 py-1 rounded text-[9px] font-mono font-bold text-left tracking-wide transition-all ${
                      portraitStyle === "standing" 
                        ? "bg-blue-600 text-white" 
                        : "text-slate-400 hover:text-slate-100 hover:bg-slate-900"
                    }`}
                  >
                    🏡 Staircase Stand
                  </button>
                </div>
              </div>

              {/* Functional Cyber elements representing Data, Security and Digital Analytics */}
              <div className="absolute inset-0 z-20 pointer-events-none p-5 flex flex-col justify-between">
                
                {/* Cyber HUD Overlap */}
                <div className="flex justify-between items-center font-mono text-[9px] text-blue-300 bg-slate-950/60 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-slate-800">
                  <span>ID: EVANS_ABURA_OJUANG</span>
                  <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> SIGNAL_ONLINE_254</span>
                </div>

                {/* Floating metrics report card */}
                <div className="bg-slate-950/85 backdrop-blur-md border border-slate-800 p-4 rounded-xl text-left space-y-2">
                  <div className="flex items-center space-x-2 text-blue-400">
                    <Database className="w-4 h-4" />
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider">Consulting Identity Profile</span>
                  </div>
                  <h3 className="font-display font-bold text-white text-base">Evans Abura Ojuang'</h3>
                  <p className="text-slate-400 text-xs line-clamp-2">
                    Nairobi-based Data Analyst & Research Consultant. Maximizing accuracy, transparency, and search viability across sectors.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="text-[9px] px-2 py-0.5 rounded bg-blue-900/40 border border-blue-700/40 font-mono text-blue-300">Data Analytics</span>
                    <span className="text-[9px] px-2 py-0.5 rounded bg-cyan-900/40 border border-cyan-700/40 font-mono text-cyan-300">AEO / GEO</span>
                    <span className="text-[9px] px-2 py-0.5 rounded bg-indigo-900/40 border border-indigo-700/40 font-mono text-indigo-300">NetSec</span>
                  </div>
                </div>

              </div>
              
              {/* Highlight shimmer */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/30 rounded-3xl pointer-events-none z-30 transition-all duration-500" />
            </div>

            {/* Micro background widgets */}
            <div className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 p-3 rounded-xl shadow-lg flex items-center space-x-2.5 z-20">
              <div className="p-1.5 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <Search className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-slate-400 text-[10px] uppercase tracking-wider font-mono">Generative Search Vis.</p>
                <p className="text-slate-900 dark:text-white text-xs font-bold font-mono">98.5% Citations Rank</p>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 p-3 rounded-xl shadow-lg flex items-center space-x-2.5 z-20">
              <div className="p-1.5 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <Network className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-slate-400 text-[10px] uppercase tracking-wider font-mono">Cisco Infrastructure</p>
                <p className="text-slate-900 dark:text-white text-xs font-bold font-mono">Enterprise QoS Validated</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
