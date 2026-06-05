import { X, Mail, Phone, MapPin, Award, CheckCircle, GraduationCap, Printer, Briefcase, ExternalLink, Network, Search, Database } from "lucide-react";
import { certificationsData } from "../data";

interface CvModalProps {
  onClose: () => void;
}

export default function CvModal({ onClose }: CvModalProps) {
  
  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="cv-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 print:p-0"
    >
      <div className="relative bg-white text-slate-900 rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 print:shadow-none print:rounded-none">
        
        {/* Actions bar (hidden during print) */}
        <div className="bg-slate-50 border-b border-slate-100 px-6 py-4 flex items-center justify-between print:hidden">
          <div className="flex items-center space-x-2">
            <GraduationCap className="w-5 h-5 text-blue-600" />
            <span className="font-display font-bold text-sm text-slate-800">Curriculum Vitae Preview</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              id="cv-print-button"
              onClick={handlePrint}
              className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-600 hover:bg-slate-100 font-semibold cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              id="cv-close-button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Render Body */}
        <div className="p-8 sm:p-12 max-h-[80vh] overflow-y-auto space-y-8 text-left font-sans print:max-h-none print:overflow-visible">
          
          {/* Header metadata */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-6 border-b border-slate-200">
            <div className="md:col-span-8 space-y-2">
              <h1 className="text-3xl font-display font-black tracking-tight text-slate-950">
                Evans Abura Ojuang'
              </h1>
              <p className="text-sm font-semibold text-blue-700 uppercase tracking-wider font-mono">
                Data Analyst | Research Consultant | Cisco Network Specialist
              </p>
              <p className="text-xs text-slate-500 max-w-xl font-sans">
                Highly focused Technology Graduate (B.Tech CCN) specialized in building secure networked data models, executing field survey diagnostics for humanitarian relief organizations, and optimizing digital search visibility for generative answer engines.
              </p>
            </div>

            <div className="md:col-span-4 space-y-1.5 pt-2 text-xs text-slate-600 md:border-l md:border-slate-100 md:pl-6 font-mono">
              <p className="flex items-center">
                <Mail className="w-3.5 h-3.5 mr-2 text-blue-600" />
                <span>evansabura1@gmail.com</span>
              </p>
              <p className="flex items-center">
                <Phone className="w-3.5 h-3.5 mr-2 text-blue-600" />
                <span>+254 797 229 924</span>
              </p>
              <p className="flex items-center">
                <MapPin className="w-3.5 h-3.5 mr-2 text-blue-600" />
                <span>Nairobi, Kenya</span>
              </p>
            </div>
          </div>

          {/* Core Skills segment */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-1 font-mono">
              I. CORE INTELLECTUAL toolkit
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
              <div className="space-y-1.5">
                <h4 className="font-bold text-slate-800 flex items-center">
                  <Database className="w-4.5 h-4.5 mr-1.5 text-blue-600" />
                  Analytics & Data Science
                </h4>
                <p className="text-slate-500 leading-relaxed text-xs">
                  Advanced Data Cleaning, Power BI Modeling (DAX), Python Programming (Pandas/NumPy), SQL Database Solutions, KPI Dashboard Structuring.
                </p>
              </div>

              <div className="space-y-1.5">
                <h4 className="font-bold text-slate-800 flex items-center">
                  <Search className="w-4.5 h-4.5 mr-1.5 text-blue-600" />
                  SEO & Generative (GEO/AEO)
                </h4>
                <p className="text-slate-500 leading-relaxed text-xs">
                  Generative Engine Optimization (GEO/LLMO), Answer Engine Optimization (AEO), Schema Markups (JSON-LD), Entity-Based Strategy.
                </p>
              </div>

              <div className="space-y-1.5">
                <h4 className="font-bold text-slate-800 flex items-center">
                  <Network className="w-4.5 h-4.5 mr-1.5 text-blue-600" />
                  Cisco Networking & Security
                </h4>
                <p className="text-slate-500 leading-relaxed text-xs">
                  VLAN routing setup, QoS latency optimization, Hardware maintenance, client support logs, Dual-WAN backup protocols.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Academic degrees */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-1 font-mono">
              II. Academic Foundations
            </h3>
            
            <div className="flex flex-col sm:flex-row justify-between items-start text-xs sm:text-sm">
              <div className="space-y-1 text-left">
                <h4 className="font-bold text-slate-900">
                  Bachelor of Technology (B.Tech) in Communication & Computer Networks
                </h4>
                <p className="text-slate-600 text-xs">
                  Technical University of Kenya (TUK) | Graduated with specialized training in Cryptography & Routing.
                </p>
              </div>
              <span className="text-slate-400 font-bold font-mono text-xs sm:text-right pt-1 sm:pt-0">Nairobi, Kenya</span>
            </div>
          </div>

          {/* Professional experience lists */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-1 font-mono">
              III. Employment History
            </h3>

            <div className="space-y-5">
              
              <div className="space-y-1.5 text-xs sm:text-sm">
                <div className="flex justify-between font-display font-bold text-slate-900">
                  <h4>Research Assistant & Field Data Representative</h4>
                  <span className="text-slate-400 font-mono text-xs">May 2024 - Present</span>
                </div>
                <p className="text-blue-700 font-semibold text-xs uppercase tracking-tight">CARE International Kenya (SHE SOARS)</p>
                <p className="text-slate-500 leading-relaxed text-xs">
                  Administered detailed surveys and oversaw quantitative data ingestion and verification across rural demographic zones. Crafted custom digitized templates on KoboToolbox and structured indicator models to inform global sponsorship partners.
                </p>
              </div>

              <div className="space-y-1.5 text-xs sm:text-sm">
                <div className="flex justify-between font-display font-bold text-slate-900">
                  <h4>Junior IT Support Technician</h4>
                  <span className="text-slate-400 font-mono text-xs">Nov 2023 - May 2024</span>
                </div>
                <p className="text-blue-700 font-semibold text-xs uppercase tracking-tight">Daima Connect</p>
                <p className="text-slate-500 leading-relaxed text-xs">
                  Configured routers, switches, and client gateways. Automated corporate system backup storage routines and monitored local client security rules, reducing down-time issues by 30%.
                </p>
              </div>

              <div className="space-y-1.5 text-xs sm:text-sm">
                <div className="flex justify-between font-display font-bold text-slate-900">
                  <h4>IT Support and Operations Trainee</h4>
                  <span className="text-slate-400 font-mono text-xs">Jun 2023 - Nov 2023</span>
                </div>
                <p className="text-blue-700 font-semibold text-xs uppercase tracking-tight">MAS Intimates Kenya</p>
                <p className="text-slate-500 leading-relaxed text-xs">
                  Generated operational reports monitoring factory-level lean metrics inside advanced spreadsheet systems. Maintained active LAN hardware loops and resolved general office technical tickets.
                </p>
              </div>

            </div>
          </div>

          {/* Certifications badges list */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-1 font-mono">
              IV. Specialized Certifications
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {certificationsData.map((cert) => (
                <div key={cert.id} className="flex items-center space-x-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <Award className="w-4 h-4 text-blue-600 shrink-0" />
                  <div>
                    <span className="font-semibold block text-slate-800 leading-tight">{cert.title}</span>
                    <span className="text-[10px] text-slate-400 font-mono block mt-0.5">{cert.organization} ({cert.year})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer actions for printing */}
        <div className="bg-slate-50 border-t border-slate-100 px-6 py-4 text-right print:hidden">
          <button
            id="cv-modal-bottom-close"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs font-sans cursor-pointer"
          >
            Hide Resume Preview
          </button>
        </div>

      </div>
    </div>
  );
}
