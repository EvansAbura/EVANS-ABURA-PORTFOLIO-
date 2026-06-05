import { servicesData } from "../data";
import { Check, ClipboardList, Database, Laptop, Network, TrendingUp, BarChart3, Search } from "lucide-react";

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  
  const getIcon = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes("seo") || t.includes("search")) return <Search className="w-6 h-6" />;
    if (t.includes("dashboard")) return <BarChart3 className="w-6 h-6" />;
    if (t.includes("data analysis")) return <Database className="w-6 h-6" />;
    if (t.includes("research")) return <ClipboardList className="w-6 h-6" />;
    if (t.includes("network")) return <Network className="w-6 h-6" />;
    return <Laptop className="w-6 h-6" />;
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-white dark:bg-[#090e1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-mono mb-3">
            Consultancy Packages
          </h2>
          <p className="text-3xl sm:text-4xl font-display font-black tracking-tight text-slate-900 dark:text-white">
            Freelance Services & Solutions
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 font-sans max-w-xl mx-auto">
            High-value developmental methodologies customized for enterprises, NGOs, and digital brands seeking analytical clarity.
          </p>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:scale-[1.02] hover:shadow-xl hover:border-blue-500/25 transition-all text-left glass-card"
            >
              
              {/* Content block */}
              <div className="space-y-5">
                
                {/* Visual Icon Header */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                    {getIcon(service.title)}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 block tracking-wider uppercase">
                    Package Specs
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-slate-900 dark:text-white text-lg leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Benefits Bullet points */}
                <div className="pt-2">
                  <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block mb-3">
                    Deliverable Items:
                  </span>
                  <ul className="space-y-2">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start text-xs text-slate-600 dark:text-slate-300">
                        <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5 mr-2" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action and Timing specs footer */}
              <div className="mt-8 pt-5 border-t border-slate-200/50 dark:border-slate-800/60 space-y-4">
                
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-400">Est. Timeline:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    {service.deliveryTime}
                  </span>
                </div>

                <button
                  id={`service-cta-order-${service.id}`}
                  onClick={() => onSelectService(service.title)}
                  className="w-full inline-flex items-center justify-center py-2.5 rounded-xl bg-blue-650 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-all cursor-pointer bg-blue-600"
                >
                  Order / Inquire Package
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
