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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((t, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-8 rounded-3xl flex flex-col justify-between hover:border-indigo-500/30 transition-shadow glass-card"
            >
              {/* Star Indicators */}
              <div className="flex gap-1 text-amber-400 mb-5 text-left">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4.5 h-4.5 fill-current" />
                ))}
              </div>

              {/* Quote Body text */}
              <div className="relative text-left flex-1">
                <Quote className="absolute -top-3.5 -left-3.5 w-6 h-6 text-slate-800 pointer-events-none" />
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans relative z-10 pl-2">
                  "{t.content}"
                </p>
              </div>

              {/* Client Profile Information */}
              <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center space-x-3 text-left">
                {/* Visual Circle Initial Letter */}
                <div className="w-10 h-10 rounded-full bg-indigo-950 border border-indigo-700 font-display font-bold text-xs text-indigo-300 flex items-center justify-center">
                  {t.avatarText}
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm leading-none text-white">
                    {t.name}
                  </h4>
                  <p className="text-[10px] text-slate-500 font-mono mt-1.5 leading-none">
                    {t.role} @ <span className="text-indigo-400 font-semibold">{t.organization}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
