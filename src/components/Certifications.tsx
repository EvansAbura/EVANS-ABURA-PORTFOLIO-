import { certificationsData } from "../data";
import { Award, ShieldCheck, Cpu, Compass, Activity, Sparkles, BookOpen } from "lucide-react";

export default function Certifications() {
  const getIcon = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes("security") || t.includes("defense")) return <ShieldCheck className="w-5 h-5" />;
    if (t.includes("intelligence") || t.includes("ai")) return <Cpu className="w-5 h-5" />;
    if (t.includes("lean") || t.includes("manufacturing")) return <Activity className="w-5 h-5" />;
    return <Award className="w-5 h-5" />;
  };

  return (
    <section id="certifications" className="py-20 sm:py-24 bg-[#090e1a] text-white overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 font-mono mb-3">
            Academic & Industry Badges
          </h2>
          <p className="text-3xl sm:text-4xl font-display font-black tracking-tight">
            Verified Educational Credentials
          </p>
          <p className="text-slate-400 text-sm mt-3 font-sans max-w-lg mx-auto">
            Professional industry certificates validating standard competencies under Cisco Systems, IBM, and manufacturing partners.
          </p>
          <div className="w-16 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="p-5 rounded-2xl flex items-start space-x-4 hover:border-indigo-500/25 transition-all text-left group glass-card"
            >
              <div className="p-3 rounded-xl bg-indigo-950/60 text-indigo-400 group-hover:scale-110 transition-transform">
                {getIcon(cert.title)}
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block">
                  {cert.organization}
                </span>
                <h3 className="font-display font-bold text-slate-150 text-sm leading-snug group-hover:text-indigo-300 transition-colors">
                  {cert.title}
                </h3>
                <span className="inline-flex items-center text-[10px] font-mono font-semibold text-indigo-400 mt-1">
                  Valid Since {cert.year}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Academic degree highlight card */}
        <div className="mt-12 p-6 rounded-2.5xl max-w-2xl mx-auto text-left flex items-start space-x-4 glass-card">
          <div className="p-3 bg-blue-900/30 text-blue-400 rounded-xl shrink-0 mt-1">
            <BookOpen className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <span className="text-[10px] text-blue-400 uppercase font-mono tracking-wider font-bold">University Education Degree</span>
            <h4 className="font-display font-bold text-white text-base">
              Bachelor of Technology inside Communication and Computer Networks
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Technical University of Kenya (TUK) — Graduated with professional instruction sets in digital cryptography, local routing, signal transmission, and enterprise database integrity.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
