import { experienceTimeline } from "../data";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-slate-50 dark:bg-[#0c1322] border-t border-slate-100 dark:border-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-mono mb-3">
            Career Timeline
          </h2>
          <p className="text-3xl sm:text-4xl font-display font-black tracking-tight text-slate-900 dark:text-white">
            Professional Experience & Advocacy
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 font-sans max-w-lg mx-auto">
            Practical contributions within leading non-governmental organizations, technical dispatchers, and active local community chapters.
          </p>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Path Structure */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical central path line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800" />

          {/* Timeline Items list */}
          <div className="space-y-12">
            {experienceTimeline.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col sm:flex-row items-stretch ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Circle Indicator on the center path */}
                  <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-[#0c1322] border-2 border-blue-600 dark:border-blue-400 flex items-center justify-center z-10 shadow-sm">
                    <Briefcase className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  </div>

                  {/* Left spacer for desktop */}
                  <div className="hidden sm:block w-1/2" />

                  {/* Information card */}
                  <div className="w-full sm:w-[45%] pl-10 sm:pl-0 text-left">
                    <div className="p-6 lg:p-8 rounded-2.5xl relative group hover:border-blue-500/25 transition-all glass-card">
                      
                      {/* Period Badge */}
                      <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-50 dark:bg-slate-900 text-xs text-slate-500 dark:text-slate-400 font-mono mb-4 border border-slate-100 dark:border-slate-800">
                        <Calendar className="w-3.5 h-3.5 text-blue-500" />
                        <span>{exp.period}</span>
                      </div>

                      {/* Header values */}
                      <h3 className="font-display font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {exp.organization}
                      </p>

                      {/* Responsibilities bullets list */}
                      <ul className="mt-4 space-y-2.5 text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                        {exp.description.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2 mr-2.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tags list */}
                      <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                        {exp.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-700/60 font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
