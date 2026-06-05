import { useState } from "react";
import { skillsData } from "../data";
import { Database, Search, Library, Network, ArrowRight } from "lucide-react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...skillsData.map((group) => group.category)];

  const getIcon = (category: string) => {
    switch (category) {
      case "Data Science & Analytics":
        return <Database className="w-5 h-5" />;
      case "Research & Methodology":
        return <Library className="w-5 h-5" />;
      case "SEO & AI Search Optimization":
        return <Search className="w-5 h-5" />;
      case "Networking & IT Infrastructure":
        return <Network className="w-5 h-5" />;
      default:
        return <Database className="w-5 h-5" />;
    }
  };

  const filteredGroups =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((group) => group.category === activeCategory);

  return (
    <section id="skills" className="py-20 sm:py-28 bg-slate-50 dark:bg-[#0c1322] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-mono mb-3">
            Core Competencies
          </h2>
          <p className="text-3xl sm:text-4xl font-display font-black tracking-tight text-slate-900 dark:text-white">
            Specialized Skill Architecture & Toolkit
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 font-sans max-w-xl mx-auto">
            Categorized technical skills reflecting rigorous education and proven capabilities in the field, development hubs, and AI-led channels.
          </p>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              id={`skill-filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/15"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 hover:bg-slate-100 dark:hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {filteredGroups.map((group, groupIdx) => (
            <div
              key={groupIdx}
              className="glass-card rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-center space-x-3 mb-6 border-b border-slate-100 dark:border-slate-800/80 pb-4">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/45 text-blue-600 dark:text-blue-400">
                  {getIcon(group.category)}
                </div>
                <h3 className="font-display font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                  {group.category}
                </h3>
              </div>

              {/* Progress bars list */}
              <div className="space-y-5">
                {group.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-1.5 text-left">
                    <div className="flex justify-between items-center text-xs sm:text-sm font-sans">
                      <span className="font-semibold text-slate-800 dark:text-slate-200 tracking-tight">
                        {skill.name}
                      </span>
                      <span className="font-mono font-bold text-slate-400 dark:text-slate-500">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-200/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent-blue rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Informative Footnote highlighting the SEO & AI Search Integration strategy */}
        <div className="mt-12 p-6 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100/60 dark:border-blue-800/40 text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="space-y-1">
            <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm">
              ✨ Specialized Edge: Generative Search Engineering (AEO & GEO)
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              In addition to modern data modeling and routing, I understand LLM citation architectures. This ensures client contents are structured harmoniously for AI assistants, securing a futuristic digital footprint.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center space-x-1 font-mono text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline shrink-0"
          >
            <span>Consult Visibility</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
