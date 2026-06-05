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
        <div className="p-8 sm:p-12 max-h-[85vh] overflow-y-auto space-y-8 text-left font-sans print:max-h-none print:overflow-visible">
          
          {/* Header metadata */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-6 border-b border-slate-200">
            
            {/* Portrait Image inside CV */}
            <div className="md:col-span-3 flex justify-center md:justify-start">
              <div className="w-28 h-28 rounded-2xl overflow-hidden border border-slate-200 shadow-sm shrink-0">
                <img
                  src="/src/assets/images/evans_portrait_red.jpg"
                  alt="Evans Abura Ojuang'"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-9 space-y-2">
              <h1 className="text-3xl font-display font-black tracking-tight text-slate-950">
                EVANS ABURA OJUANG'
              </h1>
              <p className="text-sm font-semibold text-blue-700 uppercase tracking-wider font-mono">
                DATA ANALYST | RESEARCH CONSULTANT | NETWORK PROFESSIONAL
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 pt-2 text-xs text-slate-600 font-mono">
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
                <p className="flex items-center">
                  <ExternalLink className="w-3.5 h-3.5 mr-2 text-blue-600" />
                  <span className="truncate">linkedin.com/in/evans-abura-a1b69a206/</span>
                </p>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2.5">
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-1 font-mono">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Data Analyst and IT professional with experience in technical support, data analysis, research, SEO & AI SEO, and network solutions. I help organizations transform data into actionable insights, optimize digital visibility, and ensure secure, reliable IT operations.
            </p>
          </div>

          {/* Core Skills segment */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-1 font-mono">
              Core Skills & Tools
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
              <div className="space-y-1.5">
                <h4 className="font-bold text-slate-800 flex items-center">
                  <Database className="w-4 h-4 mr-1.5 text-blue-600 font-bold" />
                  Data & Research
                </h4>
                <ul className="space-y-1 text-slate-500 text-xs list-disc pl-4">
                  <li>Data Analysis & Visualization</li>
                  <li>Research & Survey Analysis</li>
                  <li>Data Management & Reporting</li>
                  <li>Python, SQL, Excel, Power BI, SPSS</li>
                </ul>
              </div>

              <div className="space-y-1.5">
                <h4 className="font-bold text-slate-800 flex items-center">
                  <Search className="w-4 h-4 mr-1.5 text-blue-600 font-bold" />
                  SEO & AI SEO
                </h4>
                <ul className="space-y-1 text-slate-500 text-xs list-disc pl-4">
                  <li>SEO & AI SEO (AEO, GEO, LLMO)</li>
                  <li>Technical SEO & Schema markup</li>
                  <li>Google Analytics & Web Console</li>
                  <li>ChatGPT & Generative AI Tools</li>
                </ul>
              </div>

              <div className="space-y-1.5">
                <h4 className="font-bold text-slate-800 flex items-center">
                  <Network className="w-4 h-4 mr-1.5 text-blue-600 font-bold" />
                  Networking & IT Support
                </h4>
                <ul className="space-y-1 text-slate-500 text-xs list-disc pl-4">
                  <li>Network Administration</li>
                  <li>IT Support & Troubleshooting</li>
                  <li>Cisco Packet Tracer, Wireshark</li>
                  <li>Hardware & Systems Configuration</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Employment History */}
          <div className="space-y-5">
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-1 font-mono">
              Employment History
            </h3>

            <div className="space-y-6">

              {/* Research Supervisor */}
              <div className="space-y-1.5 text-xs sm:text-sm">
                <div className="flex justify-between font-display font-bold text-slate-900">
                  <h4 className="text-slate-950 font-bold">Research Supervisor (Contract)</h4>
                  <span className="text-slate-400 font-mono text-xs">May 2026 (1 Week)</span>
                </div>
                <p className="text-blue-700 font-semibold text-xs tracking-tight">CARE International Kenya</p>
                <ul className="text-slate-500 text-xs list-disc pl-4 space-y-1 mt-1 leading-relaxed">
                  <li>Supervised field research teams and verified respondent sample points under SHE SOARS assessment programs.</li>
                  <li>Conducted data quality checks, logical audits, and offline data collection validation routines inside KoboToolbox.</li>
                </ul>
              </div>
              
              {/* IT Support Executive */}
              <div className="space-y-1.5 text-xs sm:text-sm">
                <div className="flex justify-between font-display font-bold text-slate-900">
                  <h4 className="text-slate-950 font-bold">IT Support Executive</h4>
                  <span className="text-slate-400 font-mono text-xs">Aug 2025 – Present (8 mos)</span>
                </div>
                <p className="text-blue-700 font-semibold text-xs tracking-tight">Daima Connect</p>
                <ul className="text-slate-500 text-xs list-disc pl-4 space-y-1 mt-1 leading-relaxed">
                  <li>Provide executive-level IT support and system administration.</li>
                  <li>Manage user accounts, permissions, and security compliance.</li>
                  <li>Monitor and maintain network infrastructure for optimal performance.</li>
                  <li>Coordinate with teams to implement IT solutions and improvements.</li>
                </ul>
              </div>

              {/* Junior IT Support */}
              <div className="space-y-1.5 text-xs sm:text-sm">
                <div className="flex justify-between font-display font-bold text-slate-900">
                  <h4 className="text-slate-950 font-bold">Junior IT Support</h4>
                  <span className="text-slate-400 font-mono text-xs">Feb 2025 – Jul 2025 (6 mos)</span>
                </div>
                <p className="text-blue-700 font-semibold text-xs tracking-tight">Daima Connect</p>
                <ul className="text-slate-500 text-xs list-disc pl-4 space-y-1 mt-1 leading-relaxed">
                  <li>Provided technical support and resolved IT issues for end-users.</li>
                  <li>Installed, configured, and maintained computer systems and peripherals.</li>
                  <li>Assisted in network monitoring and basic troubleshooting.</li>
                </ul>
              </div>

              {/* Research Assistant */}
              <div className="space-y-1.5 text-xs sm:text-sm">
                <div className="flex justify-between font-display font-bold text-slate-900">
                  <h4 className="text-slate-950 font-bold">Research Assistant</h4>
                  <span className="text-slate-400 font-mono text-xs">Aug 2024 – Jan 2025</span>
                </div>
                <p className="text-blue-700 font-semibold text-xs tracking-tight">CARE International Kenya</p>
                <ul className="text-slate-500 text-xs list-disc pl-4 space-y-1 mt-1 leading-relaxed">
                  <li>Conducted data analysis and survey research for the SHE SOARS project.</li>
                  <li>Prepared reports that informed project decisions and outcomes.</li>
                </ul>
              </div>

              {/* IT & MOS Trainee */}
              <div className="space-y-1.5 text-xs sm:text-sm">
                <div className="flex justify-between font-display font-bold text-slate-900">
                  <h4 className="text-slate-950 font-bold">IT & MOS Trainee</h4>
                  <span className="text-slate-400 font-mono text-xs">Mar 2024 – Jun 2024</span>
                </div>
                <p className="text-blue-700 font-semibold text-xs tracking-tight">MAS Intimates Kenya (MAS Holdings)</p>
                <ul className="text-slate-500 text-xs list-disc pl-4 space-y-1 mt-1 leading-relaxed">
                  <li>Assisted with data management and process improvements.</li>
                  <li>Supported documentation, reporting, and workflow optimization.</li>
                </ul>
              </div>

              {/* Mentor, SHE SOARS Program */}
              <div className="space-y-1.5 text-xs sm:text-sm">
                <div className="flex justify-between font-display font-bold text-slate-900">
                  <h4 className="text-slate-950 font-bold">Mentor, SHE SOARS Program</h4>
                  <span className="text-slate-400 font-mono text-xs">Feb 2022 – Jul 2024</span>
                </div>
                <p className="text-blue-700 font-semibold text-xs tracking-tight">HOPE Worldwide Kenya</p>
                <ul className="text-slate-500 text-xs list-disc pl-4 space-y-1 mt-1 leading-relaxed">
                  <li>Mentored young women in SRHR topics.</li>
                  <li>Facilitated workshops and built confidence in participants.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Education & Academic degrees */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-1 font-mono">
              Academic Foundations
            </h3>
            
            <div className="flex flex-col sm:flex-row justify-between items-start text-xs sm:text-sm">
              <div className="space-y-0.5 text-left">
                <h4 className="font-bold text-slate-900">
                  Bachelor of Technology in Communication and Computer Networks
                </h4>
                <p className="text-slate-600 text-xs">
                  Technical University of Kenya | 2021 – 2024
                </p>
              </div>
              <span className="text-slate-400 font-bold font-mono text-xs sm:text-right pt-1 sm:pt-0">Nairobi, Kenya</span>
            </div>
          </div>

          {/* Certifications and Training */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-1 font-mono">
              Certifications & Training
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {[
                { title: "Cisco IT Essentials", org: "Cisco Academy" },
                { title: "Cisco Networking Basics", org: "Cisco Academy" },
                { title: "Cisco Cybersecurity Basics", org: "Cisco Academy" },
                { title: "IBM AI Fundamentals", org: "IBM" },
                { title: "Google Data Analytics", org: "Google" },
                { title: "Power BI Data Analyst", org: "Microsoft" }
              ].map((cert, index) => (
                <div key={index} className="flex items-center space-x-2.5 p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <Award className="w-4 h-4 text-blue-600 shrink-0 font-bold" />
                  <div>
                    <span className="font-semibold block text-slate-800 leading-tight">{cert.title}</span>
                    <span className="text-[10px] text-slate-400 font-mono block mt-0.5">{cert.org}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Passion grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 text-xs">
            <div>
              <h4 className="font-mono font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-1 mb-2">Languages</h4>
              <p className="text-slate-600 leading-relaxed font-sans mt-1">
                <strong className="text-slate-800">English:</strong> Fluent / Native Speaker &bull; <strong className="text-slate-800">German:</strong> Proficient
              </p>
            </div>
            <div>
              <h4 className="font-mono font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-1 mb-2">Passion & Objective</h4>
              <p className="text-slate-600 leading-relaxed font-sans mt-1">
                I am passionate about leveraging technology and data to solve real-world problems, improve business outcomes, and create measurable impact.
              </p>
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
