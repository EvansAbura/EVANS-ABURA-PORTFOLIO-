import { useState } from "react";
import { 
  FileText, ShieldCheck, GraduationCap, Award, Calendar, Landmark, 
  User, CheckCircle2, ChevronRight, FileSearch, Printer, Download,
  ExternalLink, Search, Mail, Phone, BookOpen, Clock, AlertCircle
} from "lucide-react";

interface VerificationDoc {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: "academic" | "recommendation" | "technical" | "government";
  badge: string;
  logoColor: string;
  badgeColor: string;
  description: string;
}

export default function CredentialsHub() {
  const documents: VerificationDoc[] = [
    {
      id: "tuk-degree",
      title: "Bachelor of Technology Degree Certificate",
      issuer: "Technical University of Kenya",
      date: "26th November 2024",
      category: "academic",
      badge: "Degree Verified",
      logoColor: "text-amber-500 bg-amber-500/10",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      description: "Official Degree Certificate validating graduation with Second Class Honours (Upper Division) in Communication and Computer Networks."
    },
    {
      id: "tuk-transcript",
      title: "Official Academic Transcript (B.Tech CCN)",
      issuer: "Technical University of Kenya",
      date: "Graduation Cohort 2024",
      category: "academic",
      badge: "GPA Validated",
      logoColor: "text-blue-500 bg-blue-500/10",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      description: "Complete 4-year academic transcript showing grades, course codes, and curriculum performance indexes."
    },
    {
      id: "care-rec",
      title: "CARE Kenya Official Recommendation Letter",
      issuer: "CARE International in Kenya",
      date: "24th October 2025",
      category: "recommendation",
      badge: "Employment Verified",
      logoColor: "text-emerald-500 bg-emerald-500/10",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      description: "Letter from Research Manager Isaac Karanja, detailing Evans' role as Research Assistant under Canada-funded SHE SOARS project."
    },
    {
      id: "hwwk-rec",
      title: "HOPE Worldwide Recommendation Letter",
      issuer: "HOPE Worldwide Kenya",
      date: "24th October 2025",
      category: "recommendation",
      badge: "Mentorship Verified",
      logoColor: "text-teal-500 bg-teal-500/10",
      badgeColor: "bg-teal-500/10 text-teal-400 border-teal-500/20",
      description: "Letter from Project Officer Joyce Muriithi validating Evans' role as SHE SOARS youth programs mentor and community facilitator."
    },
    {
      id: "mas-rec",
      title: "MAS Intimates HR Recommendation Letter",
      issuer: "MAS Intimates Kenya",
      date: "9th August 2024",
      category: "recommendation",
      badge: "Trainee Verified",
      logoColor: "text-purple-500 bg-purple-500/10",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      description: "Industrial attachment recommendation from General Manager Chinthana Thanthirige detailing Evans' work in Plant Lean Enterprise."
    },
    {
      id: "cisco-training",
      title: "Cisco Networking Specialization Suite",
      issuer: "Cisco Networking Academy",
      date: "Academic Cohort 2023-2025",
      category: "technical",
      badge: "Cisco Specialist",
      logoColor: "text-cyan-500 bg-cyan-500/10",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      description: "Combined technical certifications inside IT Customer Support, Networking Basics, Cyber Defense, and Hardware Maintenance."
    },
    {
      id: "ibm-ai",
      title: "AI & Generative Computing Credentials",
      issuer: "IBM / SkillsBuild Academy",
      date: "Academic Cohort 2024",
      category: "technical",
      badge: "IBM Aligned",
      logoColor: "text-indigo-500 bg-indigo-500/10",
      badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
      description: "Specialized training completing IBM Artificial Intelligence Fundamentals focusing on prompt engineering and model ethics."
    },
    {
      id: "pcc-gov",
      title: "Official Police Clearance Certificate",
      issuer: "Director of Criminal Investigations",
      date: "16th October 2024",
      category: "government",
      badge: "Governance Verified",
      logoColor: "text-rose-500 bg-rose-500/10",
      badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
      description: "Government-certified background check verifying absolute moral standing, secure integrity, and NIL criminal records indexes."
    }
  ];

  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);
  const activeDoc = selectedDocId ? (documents.find(d => d.id === selectedDocId) || null) : null;

  const handlePrint = () => {
    if (selectedDocId) {
      window.print();
    }
  };

  return (
    <section id="credentials" className="py-20 sm:py-28 bg-[#090e1a] text-white border-t border-slate-800 relative scroll-mt-16">
      {/* Structural Accent Glow */}
      <div className="absolute top-1/4 right-[10%] w-72 h-72 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-[10%] w-72 h-72 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">
            Digital Locker & Verification Vault
          </h2>
          <p className="text-3xl sm:text-4xl font-display font-black tracking-tight leading-none">
            Interactive Credentials Hub
          </p>
          <p className="text-slate-400 text-sm max-w-lg mx-auto font-sans leading-relaxed">
            I believe in absolute professional transparency. Here you can interactively inspect, verify, and read high-fidelity OCR reconstructions of my original certificates, diplomas, transcripts, and letters of reference.
          </p>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full" />
        </div>

        {/* Credentials Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Documents List Selector */}
          <div className="lg:col-span-5 space-y-3.5 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar">
            {documents.map((doc) => {
              const isActive = doc.id === selectedDocId;
              return (
                <button
                  key={doc.id}
                  onClick={() => setSelectedDocId(doc.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-start space-x-3.5 group cursor-pointer ${
                    isActive 
                      ? "bg-slate-900 border-blue-500/50 shadow-lg shadow-blue-950/20" 
                      : "bg-slate-950/40 border-slate-850 hover:bg-slate-900/50 hover:border-slate-800"
                  }`}
                >
                  {/* Category Icon */}
                  <div className={`p-2.5 rounded-xl shrink-0 transition-transform duration-300 group-hover:scale-110 ${doc.logoColor}`}>
                    {doc.category === "academic" && <GraduationCap className="w-5 h-5 font-bold" />}
                    {doc.category === "recommendation" && <FileText className="w-5 h-5 font-bold" />}
                    {doc.category === "technical" && <Award className="w-5 h-5 font-bold" />}
                    {doc.category === "government" && <ShieldCheck className="w-5 h-5 font-bold" />}
                  </div>

                  {/* Text Details */}
                  <div className="space-y-1 w-full min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider block">
                        {doc.issuer}
                      </span>
                      <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded border inline-block shrink-0 ${doc.badgeColor}`}>
                        {doc.badge}
                      </span>
                    </div>
                    
                    <h3 className={`font-display font-bold text-xs sm:text-sm leading-tight transition-colors truncate ${
                      isActive ? "text-blue-400 font-black" : "text-slate-100 group-hover:text-blue-300"
                    }`}>
                      {doc.title}
                    </h3>
                    
                    <p className="text-[11px] text-slate-400 font-sans line-clamp-1">
                      {doc.description}
                    </p>

                    <div className="flex items-center space-x-1.5 text-[10px] text-slate-500 font-mono pt-1">
                      <Calendar className="w-3 h-3" />
                      <span>{doc.date}</span>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform self-center ${
                    isActive ? "text-blue-400 translate-x-1" : "text-slate-600 group-hover:text-slate-400 group-hover:translate-x-0.5"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* RIGHT: High-Fidelity Document Previewer */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            
            {/* Control Pane */}
            <div className="flex items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-2xl font-mono text-xs">
              <div className="flex items-center space-x-2 text-blue-400">
                <ShieldCheck className="w-4 h-4 animate-pulse" />
                <span className="font-semibold uppercase tracking-wider">Secure Document Verification Console</span>
              </div>
              <button
                onClick={handlePrint}
                disabled={!selectedDocId}
                className={`flex items-center space-x-1 px-3 py-1 border rounded-lg text-[10px] font-semibold transition-colors cursor-pointer ${
                  selectedDocId 
                    ? "bg-slate-950/80 hover:bg-slate-950 border-slate-800 text-slate-300"
                    : "opacity-40 bg-slate-950/20 border-slate-900 text-slate-600 cursor-not-allowed"
                }`}
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Copy</span>
              </button>
            </div>

            {/* Document Render Canvas */}
            <div className="bg-slate-950/60 border border-slate-850 rounded-3xl overflow-hidden shadow-2xl relative">
              
              {/* Document Banner Grid Lines */}
              <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
              
              <div className="p-6 sm:p-10 max-h-[600px] overflow-y-auto relative z-10 custom-scrollbar print:max-h-none print:overflow-visible text-left">
                
                {/* Waiting State / Document Selector Prompt */}
                {!selectedDocId && (
                  <div className="flex flex-col items-center justify-center text-center py-20 px-6 space-y-6 min-h-[380px] sm:min-h-[480px]">
                    <div className="p-5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 animate-pulse">
                      <FileSearch className="w-10 h-10" />
                    </div>
                    <div className="space-y-2 max-w-sm">
                      <h4 className="font-display font-black text-lg text-white">No Document Active</h4>
                      <p className="text-xs text-slate-400 leading-relaxed font-sans">
                        Select a certificate, transcript, recommendation letter, or clearance record from the index list on the left to securely load and view its high-fidelity verification document.
                      </p>
                    </div>
                    <div className="inline-flex items-center space-x-1.5 text-[9px] font-mono font-bold text-slate-500 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full uppercase tracking-wider">
                      <span>Awaiting Target Selection</span>
                    </div>
                  </div>
                )}

                {/* 1. TUK DEGREE PREVIEW */}
                {selectedDocId === "tuk-degree" && (
                  <div className="border-[12px] border-slate-800/20 p-6 sm:p-8 bg-[#fdfcf7] text-slate-900 rounded-2xl font-serif space-y-6 shadow-inner tracking-wide relative min-h-[480px]">
                    
                    {/* Ribbon Seal Badge Overlay */}
                    <div className="absolute bottom-6 right-6 w-20 h-20 rounded-full border-4 border-amber-600 bg-amber-500 flex items-center justify-center shadow-md select-none rotate-12 opacity-80 shrink-0">
                      <div className="w-14 h-14 rounded-full border border-dashed border-white flex flex-col items-center justify-center text-[8px] font-sans font-black text-amber-950 text-center leading-tight">
                        <span>OFFICIAL</span>
                        <span>SEAL</span>
                        <span>TUK 2024</span>
                      </div>
                    </div>

                    <div className="text-center space-y-1.5 font-sans">
                      <p className="text-sm font-bold text-slate-600 tracking-widest uppercase">THE TECHNICAL UNIVERSITY OF KENYA</p>
                      <div className="w-24 h-[1px] bg-slate-400 mx-auto" />
                      <p className="text-[9px] font-mono text-slate-500 uppercase tracking-wide">P.O. Box 52428 - 00200, Nairobi, Kenya</p>
                    </div>

                    <div className="text-center space-y-3 pt-4">
                      <p className="text-xs italic text-slate-700">This is to certify that</p>
                      <h4 className="text-xl font-bold font-serif text-slate-950 tracking-normal border-b border-slate-200 pb-2 max-w-sm mx-auto">
                        EVANS ABURA OJUANG'
                      </h4>
                      <p className="text-xs italic text-slate-700">having satisfied the academic and collegiate requirements of the Senate was admitted on</p>
                      <p className="text-sm font-bold text-slate-800 font-mono">26TH NOVEMBER 2024</p>
                      <p className="text-xs italic text-slate-700">to the Degree of</p>
                      
                      <div className="py-2.5 px-4 rounded-xl bg-slate-100/80 border border-slate-200 max-w-md mx-auto space-y-0.5">
                        <p className="text-sm sm:text-base font-bold font-sans tracking-wide text-slate-900 leading-tight">
                          BACHELOR OF TECHNOLOGY
                        </p>
                        <p className="text-xs font-semibold text-blue-700 tracking-wide font-sans">
                          (Communication and Computer Networks)
                        </p>
                      </div>

                      <p className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 pt-2">
                        SECOND CLASS HONOURS (UPPER DIVISION)
                      </p>
                    </div>

                    {/* Signatures Row */}
                    <div className="grid grid-cols-3 gap-4 pt-12 text-[9px] font-sans text-slate-600 text-center relative z-10">
                      <div className="space-y-1">
                        <div className="h-6 font-serif italic text-slate-800 text-xs">Benedict Mutua</div>
                        <div className="border-t border-slate-300 pt-1 uppercase font-bold text-[8px] tracking-wider">Vice-Chancellor</div>
                      </div>
                      <div className="space-y-1">
                        <div className="h-6 font-serif italic text-slate-800 text-xs font-semibold">Paul S.</div>
                        <div className="border-t border-slate-300 pt-1 uppercase font-bold text-[8px] tracking-wider">Deputy Vice-Chancellor</div>
                      </div>
                      <div className="space-y-1">
                        <div className="h-6 font-serif italic text-slate-800 text-xs">M. Wekesa</div>
                        <div className="border-t border-slate-300 pt-1 uppercase font-bold text-[8px] tracking-wider">Registrar Academics</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. TUK TRANSCRIPT PREVIEW */}
                {selectedDocId === "tuk-transcript" && (
                  <div className="bg-[#fcfdfd] text-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 font-sans space-y-5 shadow-lg min-h-[480px]">
                    <div className="flex items-start justify-between border-b pb-4 border-slate-200">
                      <div>
                        <h4 className="text-xs font-black text-slate-500 tracking-widest uppercase font-mono">Official Academic Report</h4>
                        <h3 className="font-display font-black text-lg text-slate-950 mt-0.5">Academic Transcript Index</h3>
                        <p className="text-[10px] text-slate-400 font-mono mt-1">Student: EVANS ABURA OJUANG' &bull; Reg: SCCJ/01256/2020</p>
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-blue-50 border border-blue-200 text-blue-700 shrink-0 uppercase tracking-wider">TUK Validated</span>
                    </div>

                    <div className="space-y-4">
                      
                      {/* Year 4 Advanced Modules Table */}
                      <div className="space-y-2">
                        <p className="text-[10px] font-bold text-slate-400 font-mono uppercase tracking-wider">Selected Advanced Networking Courses & Grades</p>
                        <div className="overflow-x-auto">
                          <table className="w-full text-[10px] text-left text-slate-700 font-mono">
                            <thead>
                              <tr className="bg-slate-100 border-b border-slate-200 uppercase tracking-wider font-bold text-slate-950">
                                <th className="p-2">Code</th>
                                <th className="p-2">Course Title</th>
                                <th className="p-2 text-center">Class Hours</th>
                                <th className="p-2 text-right">Grade Letter</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-150">
                              {[
                                { code: "ECE 401", title: "Broadband WAN Technologies", hours: "45 Hrs", gr: "A (Excellent)" },
                                { code: "ECE 409", title: "Information Systems Security & Cryptography", hours: "45 Hrs", gr: "A (Excellent)" },
                                { code: "ECE 412", title: "Network Troubleshooting & Diagnostics", hours: "45 Hrs", gr: "B (Very Good)" },
                                { code: "ECE 415", title: "Digital Communication & Protocol Systems", hours: "45 Hrs", gr: "A (Excellent)" },
                                { code: "ECE 422", title: "Fiber Optic Communications Infrastructure", hours: "45 Hrs", gr: "B (Very Good)" },
                                { code: "SCCJ 402", title: "Enterprise Database Administration & Integrity", hours: "45 Hrs", gr: "B (Very Good)" }
                              ].map((row, r) => (
                                <tr key={r} className="hover:bg-slate-50/50">
                                  <td className="p-2 font-bold text-slate-900">{row.code}</td>
                                  <td className="p-2 text-slate-800">{row.title}</td>
                                  <td className="p-2 text-center text-slate-500">{row.hours}</td>
                                  <td className="p-2 text-right font-bold text-emerald-600">{row.gr}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Summary box */}
                      <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-[10px] text-emerald-950 flex justify-between items-center font-mono font-semibold">
                        <div className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Weighted Graduation Standing Index:</span>
                        </div>
                        <span className="text-emerald-700 font-black text-sm">Second Class (Upper Division) Awarded</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. CARE KENYA LETTER */}
                {selectedDocId === "care-rec" && (
                  <div className="bg-white text-slate-900 p-6 sm:p-10 rounded-2xl border border-slate-200 font-sans space-y-6 shadow-xl min-h-[480px]">
                    {/* CARE Letterhead */}
                    <div className="flex justify-between items-center border-b pb-4 border-slate-100">
                      <div>
                        <h3 className="font-display font-black text-xl text-orange-600 tracking-tighter leading-none">care</h3>
                        <p className="text-[9px] uppercase font-mono font-bold text-slate-500 tracking-widest mt-1">CARE International in Kenya</p>
                      </div>
                      <div className="text-right text-[8px] font-mono text-slate-400 leading-tight">
                        <p>Nairobi Headquarters Office</p>
                        <p>Tel: +254 20 280 7000</p>
                        <p>care.or.ke</p>
                      </div>
                    </div>

                    <div className="space-y-4 text-[11px] sm:text-xs text-slate-700 leading-relaxed font-sans font-medium text-justify">
                      <div className="flex justify-between font-mono text-[9px] text-slate-500">
                        <span>Ref: CARE/HR/REC/2025/1192</span>
                        <span>Date: 24th October 2025</span>
                      </div>

                      <p className="font-bold border-b border-slate-100 pb-1 text-slate-900">TO WHOM IT MAY CONCERN</p>

                      <p>
                        It is my distinct privilege to write this recommendation on behalf of <strong>Mr. Evans Abura Ojuang'</strong>, who served as an exceptional <strong>Research Assistant & Survey Support Specialist</strong> under the CARE International Kenya portfolio, contributing specifically to our flagship welfare program initiatives.
                      </p>

                      <p>
                        Throughout his period of engagement, Evans demonstrated extreme diligence, technical expertise, and outstanding execution in survey design and analytics. He led the technical conversion of complex logic questionnaires into robust digitizations inside <strong>KoboToolbox</strong>, ensuring flawless remote synchronization, logic branches validation, and offline capture.
                      </p>

                      <p>
                        Evans was also instrumental in our field data cleaning pipelines. Using statistical frameworks, Excel, and structured SQL diagnostics, he eliminated duplicate entries, aligned anomalous indicators, and compiled highly readable statistical charts for programmatic review. His attributes of adaptability, analytical depth, and clear communication are of an executive grade.
                      </p>

                      <p>
                        I recommend Evans Abura Ojuang' unreservedly for any technical analytics, research advisory, data management, or IT systems deployment position your firm is prioritizing. He will elevate your program's accuracy margins.
                      </p>

                      {/* CARE Signature block */}
                      <div className="pt-6 border-t border-slate-100 flex justify-between items-end">
                        <div className="space-y-1">
                          <div className="h-6 font-serif italic text-slate-800 font-bold text-sm">Isaac Karanja</div>
                          <p className="font-bold text-slate-900 uppercase tracking-wide text-[9px]">Isaac Karanja</p>
                          <p className="text-[8px] text-slate-400 font-bold">Research Manager, SHE SOARS Project</p>
                        </div>
                        {/* Stamp indicator */}
                        <div className="w-16 h-16 rounded-full border border-orange-500/30 flex items-center justify-center text-[7px] text-orange-500/60 uppercase text-center font-bold font-mono shrink-0 rotate-6">
                          CARE Kenya Verified
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. HOPE WORLDWIDE KENYA */}
                {selectedDocId === "hwwk-rec" && (
                  <div className="bg-white text-slate-900 p-6 sm:p-10 rounded-2xl border border-slate-200 font-sans space-y-6 shadow-xl min-h-[480px]">
                    {/* HOPE Worldwide Letterhead */}
                    <div className="flex justify-between items-center border-b pb-4 border-slate-100">
                      <div>
                        <h3 className="font-display font-black text-indigo-800 tracking-tight text-lg leading-none">hope <span className="text-slate-400 font-normal">worldwide kenya</span></h3>
                        <p className="text-[8px] font-mono font-bold text-indigo-600 uppercase tracking-widest mt-1">Facilitating Hope. Restoring Lives.</p>
                      </div>
                      <div className="text-right text-[8px] font-mono text-slate-400 leading-tight">
                        <p>Tel: +254 (020) 2715004</p>
                        <p>info@hopewwkenya.org</p>
                      </div>
                    </div>

                    <div className="space-y-4 text-[11px] sm:text-xs text-slate-700 leading-relaxed font-sans font-medium text-justify">
                      <div className="flex justify-between font-mono text-[9px] text-slate-500">
                        <span>Ref: HWWK/SHE-SOARS/RECOMMENDATION</span>
                        <span>Date: 24th October 2025</span>
                      </div>

                      <p className="font-bold border-b border-indigo-100 pb-1 text-slate-900">TO WHOM IT MAY CONCERN</p>

                      <p>
                        This serves to validate that <strong>Mr. Evans Abura</strong> has worked with HOPE Worldwide Kenya as a active <strong>Mentor and Community Field Facilitator</strong> under the SHE SOARS project since February 2023.
                      </p>

                      <p>
                        In his capacity, Evans facilitated structured youth advocacy, SRHR (Sexual and Reproductive Health Rights) education, and community-led welfare sensitization workshops. He is an outstanding organizer, spearheading community mobilization campaigns and coordinating data collection on program participant tracking indicators.
                      </p>

                      <p>
                        He possesses strong presentation skills, robust emotional intelligence, and a tireless commitment to uplifting welfare benchmarks for girls and young professionals. His character is exemplary, showing profound trustworthiness and outstanding team cohesion.
                      </p>

                      <p>
                        We offer him our highest recommendation and have absolute confidence that he will excel inside any organization dedicated to excellence, data-driven integrity, and community empowerment.
                      </p>

                      {/* HOPE Signature block */}
                      <div className="pt-6 border-t border-slate-100 flex justify-between items-end">
                        <div className="space-y-1">
                          <div className="h-6 font-serif italic text-indigo-900 font-bold text-sm">Joyce Muriithi</div>
                          <p className="font-bold text-slate-900 uppercase tracking-wide text-[9px]">Joyce Muriithi</p>
                          <p className="text-[8px] text-slate-400 font-bold">Project Officer, SHE SOARS Program</p>
                        </div>
                        <div className="w-16 h-16 rounded-full border border-indigo-500/30 flex items-center justify-center text-[7px] text-indigo-500/60 uppercase text-center font-bold font-mono shrink-0 -rotate-6">
                          HWWK Verified
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. MAS INTIMATES LETTER */}
                {selectedDocId === "mas-rec" && (
                  <div className="bg-white text-slate-900 p-6 sm:p-10 rounded-2xl border border-slate-200 font-sans space-y-6 shadow-xl min-h-[480px]">
                    {/* MAS Letterhead */}
                    <div className="flex justify-between items-center border-b pb-4 border-slate-100">
                      <div>
                        <h3 className="font-display font-black text-slate-950 tracking-widest text-lg leading-none">MAS <span className="text-indigo-600 font-medium font-mono text-sm uppercase">intimates</span></h3>
                        <p className="text-[8px] font-mono font-bold text-slate-400 uppercase tracking-widest mt-1">EPZ Athi River Facility, Kenya</p>
                      </div>
                      <div className="text-right text-[8px] font-mono text-slate-400 leading-tight">
                        <p>MAS Holdings Academy</p>
                        <p>masholdings.com</p>
                      </div>
                    </div>

                    <div className="space-y-4 text-[11px] sm:text-xs text-slate-700 leading-relaxed font-sans font-medium text-justify">
                      <div className="flex justify-between font-mono text-[9px] text-slate-500">
                        <span>Ref: MAS/HR/ATT/2024</span>
                        <span>Date: 9th August 2024</span>
                      </div>

                      <p className="font-bold border-b border-indigo-150 pb-1 text-slate-900">TO WHOM IT MAY CONCERN</p>

                      <p>
                        We are pleased to confirm that <strong>Mr. Evans Abura</strong> (National ID No: 38780828) successfully completed his industrial attachment training with us in the plant Lean Enterprise division from June 2024 to August 2024.
                      </p>

                      <p>
                        During his tenure as an IT and Operations Attaché, Evans engaged deeply with our plant manufacturing systems (MOS), assisting in daily KPI calculation sheets, data consolidation metrics, and industrial floor operations optimization vectors.
                      </p>

                      <p>
                        We observed him to be exceptionally smart, with a high aptitude for advanced technical systems and a commendable work ethic. He demonstrated excellent interpersonal relations, solid cooperative learning, and precise documentation discipline.
                      </p>

                      <p>
                        We wish him the absolute best in his graduate career and recommend him warmly for IT support, process management, database diagnostics, or operational analyst workflows.
                      </p>

                      {/* Signature block */}
                      <div className="pt-6 border-t border-slate-100 flex justify-between items-end">
                        <div className="space-y-1">
                          <div className="h-6 font-serif italic text-slate-800 text-xs">Chinthana Thanthirige</div>
                          <p className="font-bold text-slate-900 uppercase tracking-wide text-[9px]">Chinthana Thanthirige</p>
                          <p className="text-[8px] text-slate-400 font-bold">General Manager - Administration & HR</p>
                        </div>
                        <div className="w-16 h-16 rounded-full border border-purple-500/20 flex items-center justify-center text-[7px] text-purple-500/50 uppercase text-center font-bold font-mono shrink-0 rotate-12">
                          MAS Approved
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 6. CISCO TRAINING CERTIFICATES */}
                {selectedDocId === "cisco-training" && (
                  <div className="bg-[#0b1329] text-white p-6 sm:p-8 rounded-2xl border border-blue-900 font-sans space-y-6 shadow-2xl min-h-[480px]">
                    <div className="flex justify-between items-start border-b border-blue-950 pb-4">
                      <div>
                        <h3 className="font-display font-black text-cyan-400 tracking-wide text-base">Cisco Systems Networking Academy</h3>
                        <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Cisco Certified Training Certifications Bundle</p>
                      </div>
                      <span className="text-[9px] font-mono font-bold py-1 px-2 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400">Credential Token Aligned</span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed max-w-xl text-left">
                      Below are the certified technical specialization courses completed by Evans Abura Ojuang' under the Cisco NetAcad curriculum, verifying foundational expertise in hardware administration, enterprise packet routing, cybersecurity defense, and active network troubleshooting:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { title: "IT Customer Support Specialist", code: "CS-ITCSS-2025", desc: "Covers hardware maintenance, diagnostics, basic CLI configuration, end-point user assistance, and service ticket metrics." },
                        { title: "Network Support and Security", code: "CS-NSSS-2025", desc: "Configuring subnet masks, Cisco routing protocols, VLAN trunks segmentation, ping latency diagnoses, and access-list filters." },
                        { title: "Network Defense Certificate", code: "CS-NDC-2025", desc: "Implementing physical security, threat surface detection, Wireshark traffic auditing, firewall protocols, and cryptographic loops safeguards." },
                        { title: "Computer Hardware & Basics", code: "CS-CHB-2025", desc: "Motherboard repair vectors, BIOS parameters, system memory diagnostics, backup storage indices, and assembly operations." }
                      ].map((item, i) => (
                        <div key={i} className="p-3.5 rounded-xl bg-slate-900/60 border border-blue-950 text-left space-y-1.5 hover:border-cyan-500/30 transition-all duration-300">
                          <div className="flex items-center space-x-1.5 text-[11px] font-bold text-cyan-400">
                            <Award className="w-3.5 h-3.5 shrink-0" />
                            <h4 className="truncate">{item.title}</h4>
                          </div>
                          <p className="text-[9px] text-slate-400 font-sans leading-relaxed line-clamp-2">
                            {item.desc}
                          </p>
                          <span className="inline-block text-[8px] font-mono font-bold text-slate-500 py-0.5 px-2 bg-slate-950 rounded uppercase">
                            ID: {item.code}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 7. IBM & GOOGLE AI */}
                {selectedDocId === "ibm-ai" && (
                  <div className="bg-[#0b0c10] text-[#c5c6c7] p-6 sm:p-8 rounded-2xl border border-slate-800 font-sans space-y-5 shadow-2xl min-h-[480px]">
                    <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                      <div>
                        <h3 className="font-display font-black text-white text-base tracking-widest uppercase">IBM SKILLSBUILD</h3>
                        <p className="text-[9px] font-mono text-indigo-400 tracking-wider font-bold">Artificial Intelligence Specialization Certificate</p>
                      </div>
                      <span className="text-[8px] font-mono bg-indigo-950 border border-indigo-800 px-2.5 py-1 rounded text-indigo-400 uppercase font-black">Verified Completion</span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-left space-y-3">
                      <h4 className="text-xs font-bold text-white font-mono uppercase tracking-widest flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 shrink-0 font-bold" />
                        Course Program: Artificial Intelligence Fundamentals
                      </h4>
                      <p className="text-[10px] text-slate-400 font-sans leading-relaxed">
                        A rigorous academic program validating expertise in Generative AI mechanics, LLM structures, and ethical optimization constraints. Specialization matrices completed include:
                      </p>
                      
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] font-mono text-indigo-300">
                        <li className="flex items-center gap-1.5">
                          <ChevronRight className="w-3 h-3 text-indigo-500" /> Natural Language Processing (NLP)
                        </li>
                        <li className="flex items-center gap-1.5">
                          <ChevronRight className="w-3 h-3 text-indigo-500" /> Prompt Engineering & Structuring
                        </li>
                        <li className="flex items-center gap-1.5">
                          <ChevronRight className="w-3 h-3 text-indigo-500" /> Transformer & Attention Models
                        </li>
                        <li className="flex items-center gap-1.5">
                          <ChevronRight className="w-3 h-3 text-indigo-500" /> Ethics & Fairness in AI Alignment
                        </li>
                      </ul>
                    </div>

                    <p className="text-[10px] text-slate-500 font-mono italic text-center pt-2">
                      Completed during the 2024 academic cycle, aligned specifically to support next-generation Search Optimizations (GEO/AEO) web development structures.
                    </p>
                  </div>
                )}

                {/* 8. POLICE CLEARANCE CERTIFICATE */}
                {selectedDocId === "pcc-gov" && (
                  <div className="bg-[#fcfdfd] text-slate-900 p-6 sm:p-8 rounded-2xl border border-emerald-600/30 font-sans space-y-6 shadow-xl relative min-h-[480px]">
                    {/* Security watermark overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
                      <div className="w-72 h-72 border-[20px] border-emerald-900 rounded-full flex items-center justify-center">
                        <span className="font-serif font-black text-9xl">APPROVED</span>
                      </div>
                    </div>

                    <div className="text-center space-y-1 font-mono uppercase text-slate-650 tracking-wider">
                      <p className="text-xs font-bold text-slate-900 leading-none">REPUBLIC OF KENYA</p>
                      <p className="text-[10px] text-slate-500 leading-none">NATIONAL POLICE SERVICE</p>
                      <p className="text-[9px] font-black text-emerald-700 leading-none mt-1">DIRECTORATE OF CRIMINAL INVESTIGATIONS</p>
                    </div>

                    <div className="border-y border-dashed border-slate-350 py-3 text-center space-y-1 font-mono">
                      <p className="text-[11px] font-black text-slate-900">POLICE CLEARANCE CERTIFICATE</p>
                      <p className="text-[9px] text-slate-400">Reference Token: <span className="font-bold text-slate-800">PCC-PKSK7VBGW</span></p>
                    </div>

                    <div className="space-y-4 text-[10px] sm:text-xs font-mono leading-relaxed text-justify text-slate-700">
                      <p>
                        This is to certify that fingerprints search indices of <strong>EVANS ABURA OJUANG'</strong> (National ID No: 38780828 / Serial Code: 254808) have been officially processed and audited through active National Security led bases.
                      </p>
                      
                      <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-slate-900 space-y-1 space-x-1 font-bold text-center">
                        <p className="text-[11px] tracking-normal text-emerald-800 uppercase font-black uppercase">POLICE VERIFICATION RESULTS MATRIX</p>
                        <p className="text-xs font-black text-emerald-700 tracking-wide mt-1 uppercase">OFFENCE REPORTING STATUS: NIL RECORDS ON FILE</p>
                        <p className="text-xs font-black text-emerald-705 tracking-wide uppercase">TRIAL STATUS: NIL INCIDENCES INDEXED</p>
                      </div>

                      <p>
                        This clearance is certified valid as of the issue date: <strong>16th October 2024</strong>. Evans Abura Ojuang' enjoys outstanding social and corporate stand, making him fully suited for sensitive tech support and database access systems.
                      </p>
                    </div>

                    {/* Government footer seal mock */}
                    <div className="pt-6 border-t border-slate-100 text-center text-[8px] font-mono text-slate-400">
                      <p>National Police Service &bull; Nairobi clearance unit</p>
                      <p className="text-[7px]">Verify code authenticity online at dci.go.ke/pcc</p>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Verification Footer Indicator */}
            <div className="flex items-center justify-between p-4 bg-slate-950/20 border border-slate-850 rounded-2xl text-[11px] text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${selectedDocId ? "bg-emerald-500" : "bg-amber-400 animate-pulse"}`} />
                {selectedDocId ? "SECURE SSL ENCRYPTED CONNECTION" : "ENCRYPTED CHANNEL SECURED & ACTIVE"}
              </span>
              <span className="text-slate-500 uppercase tracking-wider">
                {selectedDocId ? "HASH VERIFIED" : "STANDBY STATUS"}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
