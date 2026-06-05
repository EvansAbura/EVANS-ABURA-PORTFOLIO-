import { Shield, BookOpen, Search, Layers, Database, Network, Building2 } from "lucide-react";

export default function About() {
  const experiencesGrid = [
    {
      company: "CARE International Kenya",
      role: "Research Support & Survey Analysis",
      color: "border-blue-500",
      description: "Implemented rigorous data verifications and quantitative analysis under SHE SOARS welfare program campaigns.",
    },
    {
      company: "MAS Intimates Kenya",
      role: "IT & MOS Trainee (Lean Operations)",
      color: "border-teal-500",
      description: "Spearheaded advanced data cleanup workflows and supported crucial factory management spreadsheet matrices.",
    },
    {
      company: "Daima Connect",
      role: "Junior IT Support Engineer",
      color: "border-indigo-500",
      description: "Managed network configuration setups and troubleshot corporate gateways to secure seamless regional uptimes.",
    },
    {
      company: "HOPE Worldwide Kenya",
      role: "Community Research Support",
      color: "border-emerald-500",
      description: "Volunteered in structured survey designs and spearheaded data-literacy mentoring for field team representatives.",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white dark:bg-[#090e1a] border-y border-slate-100 dark:border-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-mono mb-3">
            About Me & Focus
          </h2>
          <p className="text-3xl sm:text-4xl font-display font-black tracking-tight text-slate-900 dark:text-white">
            Driven by Precision: Merging Scientific Research with Advanced Networks
          </p>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Biography Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
              Hello, I am Evans Abura Ojuang'
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              As a graduate of <strong>Bachelor of Technology in Communication and Computer Networks</strong>, I stand at the intersection of data analytics, structural social research, and advanced computer networking. I specialize in turning massive datasets into clean, actionable business intelligence and ensuring those insights flow securely through reliable corporate infrastructures.
            </p>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base col-span-2">
              My core objective is facilitating evidence-based decisions. Whether administering surveys for developmental relief agencies like <strong>CARE International</strong>, designing high-availability local networks, or implementing advanced search optimization content schemes, I emphasize rigorous standards, high fidelity, and modern security compliance.
            </p>

            {/* Strategic positioning grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/50 flex space-x-3">
                <div className="p-2 bg-blue-100/60 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-lg shrink-0 h-fit">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm">Primary Focus: Data & Research</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Specializing in survey designs, monitoring indicators, data cleanup, and clear interactive Power BI dashboards.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/50 flex space-x-3">
                <div className="p-2 bg-indigo-100/60 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded-lg shrink-0 h-fit">
                  <Network className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm">IT & Network Infrastructure</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Cisco certified implementation, VLAN architectures, network fault-recovery, diagnostics, and IT hardware operations.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/50 flex space-x-3">
                <div className="p-2 bg-green-100/60 dark:bg-green-900/40 text-green-600 dark:text-green-400 rounded-lg shrink-0 h-fit">
                  <Search className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm">SEO & Generative-AEO (GEO)</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Optimizing web assets so they rank high on Google and become discoverable / cited on AI Answer engines (LLMs).
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/50 flex space-x-3">
                <div className="p-2 bg-amber-100/60 dark:bg-amber-900/40 text-amber-600 dark:text-amber-500 rounded-lg shrink-0 h-fit">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm">Security & Governance</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Applying network defense matrices, data protection rules, and robust file backup routines for corporate safekeeping.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Quick Facts Sidebar & Organizations Worked With */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Professional Background profile card */}
            <div className="p-6 rounded-2xl glass-card">
              <h4 className="font-display font-bold text-slate-900 dark:text-white text-md mb-4 border-b border-slate-200 dark:border-slate-700/60 pb-2">
                Consulting Particulars
              </h4>
              
              <ul className="space-y-4 font-sans text-sm">
                <li className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Formal Education:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200 text-right">B.Tech Comm. & Computer Networks</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Location Base:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Nairobi, Kenya 🇰🇪</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Email Contact:</span>
                  <span className="font-semibold font-mono text-blue-600 dark:text-blue-400">evansabura1@gmail.com</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Availability:</span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300">
                    Open for Projects
                  </span>
                </li>
              </ul>
            </div>

            {/* Structured Partner Organization Grid */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-slate-900 dark:text-white font-display font-semibold text-sm">
                <Building2 className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400" />
                <span>Credited Partner Organizations</span>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {experiencesGrid.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border-l-2 ${item.color} glass-card hover:shadow-md transition-shadow`}
                  >
                    <p className="text-[10px] uppercase font-bold text-blue-600 dark:text-blue-400 tracking-wider">
                      {item.company}
                    </p>
                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1 leading-tight">
                      {item.role}
                    </p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
