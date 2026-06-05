import { useState } from "react";
import { projectsData } from "../data";
import { Project } from "../types";
import { ChevronRight, ArrowUpRight, Folder, Tag, Check, X, Calendar, User, CheckCircle } from "lucide-react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    { label: "All Works", value: "all" },
    { label: "Data Science & BI", value: "data-science" },
    { label: "Research Support", value: "research" },
    { label: "Networking & Security", value: "networking" },
    { label: "SEO & AI Search", value: "seo" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((proj) => proj.category === activeFilter);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-white dark:bg-[#090e1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-mono mb-3">
            Case Studies
          </h2>
          <p className="text-3xl sm:text-4xl font-display font-black tracking-tight text-slate-900 dark:text-white">
            Featured Strategic Projects
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 font-sans max-w-xl mx-auto">
            Practical implementations displaying technical depth, scientific data processing, secure routing configurations, and modern AEO models.
          </p>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filters Row */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              id={`project-tab-${f.value}`}
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeFilter === f.value
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/15"
                  : "bg-slate-50 dark:bg-slate-800/40 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 hover:bg-slate-100 dark:hover:bg-slate-700"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2.5xl overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-blue-500/35 transition-all duration-300 relative glass-card"
            >
              {/* Top Banner Tag */}
              <div className="p-6 pb-4 space-y-3 text-left">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800/40 font-mono">
                    <Folder className="w-3.5 h-3.5 mr-1 text-blue-500" />
                    {project.category.replace("-", " ")}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 font-mono">{project.year}</span>
                </div>

                <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 font-mono">
                  {project.subtitle}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed pt-1">
                  {project.description}
                </p>
              </div>

              {/* Tags & Action CTA */}
              <div className="p-6 pt-0 text-left mt-auto">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-200/50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <button
                  id={`project-btn-${project.id}`}
                  onClick={() => setSelectedProject(project)}
                  className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-800 dark:text-white hover:bg-blue-600 hover:text-white dark:hover:bg-blue-650 dark:hover:text-white hover:border-transparent transition-all cursor-pointer"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Case Study Modal */}
        {selectedProject && (
          <div
            id="case-study-modal"
            className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
          >
            <div className="relative rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300 glass-card">
              
              {/* Header */}
              <div className="bg-slate-50 dark:bg-slate-900 px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="p-1.5 bg-blue-50 dark:bg-blue-900/40 rounded-lg text-blue-600 dark:text-blue-400">
                    <Folder className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      {selectedProject.category} Case Evaluation
                    </span>
                    <h3 className="font-display font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>
                <button
                  id="modal-close-button"
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Information Body */}
              <div className="p-6 sm:p-8 space-y-6 text-left max-h-[70vh] overflow-y-auto">
                
                {/* Metas Row */}
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-100 dark:border-slate-800/80 font-sans text-xs sm:text-sm">
                  <div>
                    <span className="text-slate-400 block font-mono">Expert Role:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center mt-1">
                      <User className="w-4 h-4 mr-1 text-blue-500" />
                      {selectedProject.role}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-mono">Completed Year:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center mt-1">
                      <Calendar className="w-4 h-4 mr-1 text-blue-500" />
                      {selectedProject.year}
                    </span>
                  </div>
                </div>

                {/* Extended Description */}
                <div>
                  <h4 className="font-display font-bold text-slate-400 text-[10px] uppercase tracking-wider mb-1 font-mono">
                    Case Summary
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Problem Statement */}
                {selectedProject.problemStatement && (
                  <div className="p-4 bg-red-50/40 dark:bg-red-950/10 border border-red-100/60 dark:border-red-900/30 rounded-2xl">
                    <h4 className="font-display font-bold text-red-700 dark:text-red-400 text-xs uppercase tracking-wider font-mono mb-1.5 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-2" />
                      Problem Statement
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {selectedProject.problemStatement}
                    </p>
                  </div>
                )}

                {/* Solution Implemented */}
                {selectedProject.solutionImplemented && (
                  <div className="p-4 bg-blue-50/40 dark:bg-blue-950/10 border border-blue-100/60 dark:border-blue-900/30 rounded-2xl">
                    <h4 className="font-display font-bold text-blue-700 dark:text-blue-400 text-xs uppercase tracking-wider font-mono mb-1.5 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                      Solution Implemented
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {selectedProject.solutionImplemented}
                    </p>
                  </div>
                )}

                {/* Key Deliverables & Actions */}
                <div className="space-y-3">
                  <h4 className="font-display font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider font-mono text-blue-600 dark:text-blue-400 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mr-2" />
                    Key Implementations
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProject.keyFeatures.map((ft, idx) => (
                      <li key={idx} className="flex items-start text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800/60">
                        <Check className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5 mr-2" />
                        <span>{ft}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenges Faced */}
                {selectedProject.challengesFaced && (
                  <div className="p-4 bg-amber-50/40 dark:bg-amber-950/10 border border-amber-100/60 dark:border-amber-900/30 rounded-2xl">
                    <h4 className="font-display font-bold text-amber-700 dark:text-amber-400 text-xs uppercase tracking-wider font-mono mb-1.5 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2" />
                      Challenges Faced & Mitigations
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {selectedProject.challengesFaced}
                    </p>
                  </div>
                )}

                {/* Measurable Results / Impact */}
                {(selectedProject.measurableImpact || selectedProject.outcome) && (
                  <div className="p-4.5 bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-150 dark:border-emerald-800/40 rounded-2xl">
                    <h4 className="font-display font-bold text-emerald-800 dark:text-emerald-400 text-xs uppercase tracking-wider font-mono flex items-center mb-2">
                      <CheckCircle className="w-4 h-4 mr-1.5 text-emerald-500" />
                      Measurable Results & Impact
                    </h4>
                    <div className="space-y-2">
                      {selectedProject.measurableImpact && (
                        <p className="text-emerald-950 dark:text-emerald-300 text-xs sm:text-sm font-medium leading-relaxed">
                          {selectedProject.measurableImpact}
                        </p>
                      )}
                      <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed italic border-t border-emerald-100/50 dark:border-emerald-950/40 pt-1.5">
                        <span className="font-semibold text-emerald-700 dark:text-emerald-500 not-italic">Outcome Summary:</span> {selectedProject.outcome}
                      </p>
                    </div>
                  </div>
                )}

                {/* Technologies List */}
                <div>
                  <h4 className="font-display font-bold text-slate-400 text-[10px] uppercase tracking-wider font-mono mb-2">
                    Technologies Used & Technical Proficiencies
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] uppercase font-bold px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-700/60 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Close Footer Action */}
              <div className="bg-slate-50 dark:bg-slate-900 px-6 py-4 border-t border-slate-100 dark:border-slate-800 text-right">
                <button
                  id="modal-close-footer"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white font-semibold text-xs cursor-pointer"
                >
                  Close Showcase
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
