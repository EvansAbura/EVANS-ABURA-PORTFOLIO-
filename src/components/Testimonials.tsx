import { testimonialsData } from "../data";
import { MessageSquare, Quote, Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#090e1a] text-white overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 font-mono mb-3">
            Endorsements
          </h2>
          <p className="text-3xl sm:text-4xl font-display font-black tracking-tight">
            Professional Referrals & Trust
          </p>
          <div className="w-16 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((t, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-8 rounded-3xl flex flex-col justify-between hover:border-indigo-500/30 transition-all duration-300 glass-card group border border-slate-850"
            >
              {/* Card Header with Stars and Company Logo */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-1 text-amber-400 text-left">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                {t.companyLogo && (
                  <span className={`font-mono text-xs font-black tracking-widest px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800/60 ${t.companyLogoColor || "text-indigo-400"}`}>
                    {t.companyLogo} Verified
                  </span>
                )}
              </div>

              {/* Quote Body text */}
              <div className="relative text-left flex-1">
                <Quote className="absolute -top-3.5 -left-3.5 w-6 h-6 text-slate-800/40 pointer-events-none group-hover:text-indigo-500/20 transition-colors" />
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans relative z-10 pl-2">
                  "{t.content}"
                </p>
              </div>

              {/* Client Profile Information */}
              <div className="mt-8 pt-5 border-t border-slate-850 flex items-center justify-between text-left">
                <div className="flex items-center space-x-3.5">
                  {/* Visual Circle Initial Letter */}
                  <div className={`w-11 h-11 rounded-full font-display font-black text-xs flex items-center justify-center shrink-0 shadow-inner ${t.avatarColor || "bg-indigo-950 border border-indigo-700 text-indigo-300"}`}>
                    {t.avatarText}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm leading-none text-white group-hover:text-indigo-400 transition-colors">
                      {t.name}
                    </h4>
                    <p className="text-[10px] text-slate-500 font-mono mt-2 leading-none">
                      {t.role}
                    </p>
                    <p className="text-[10px] text-indigo-300 font-semibold mt-1 leading-none">
                      {t.organization}
                    </p>
                  </div>
                </div>

                {/* Verification Check Badge */}
                <div className="flex items-center space-x-1 text-[10px] font-semibold text-emerald-500 bg-emerald-950/20 px-2 py-1 rounded-lg border border-emerald-900/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Recommendation Letter on File</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
