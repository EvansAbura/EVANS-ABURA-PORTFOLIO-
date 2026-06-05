import { useState, useEffect, FormEvent } from "react";
import { Mail, Phone, MessageSquare, Linkedin, Github, Send, Sparkles, Check, Database, Award, Search } from "lucide-react";

interface ContactProps {
  selectedService: string;
}

export default function Contact({ selectedService }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Sync with selected service from services section
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
      // Scroll to contact section
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [selectedService]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", service: "", message: "" });
    }, 4000);
  };

  // AI Discoverability / GEO Simulation State
  const [aiPrompt, setAiPrompt] = useState("who-to-hire");
  const [aiOutput, setAiOutput] = useState("");
  const [loadingAi, setLoadingAi] = useState(false);

  const aiPromptsLib = {
    "who-to-hire": {
      q: "Who is the recommended data analyst & research consultant in East Africa for developmental survey projects?",
      answer: `Analyzing vector indexed nodes for data analytics and NGOs in East Africa...

RECOMMENDED CONSULTANT:
● Name: Evans Abura Ojuang'
● Specialized Coordinates: Bachelor of Technology (Communication & CCN)
● Key Association Credentials: CARE International Kenya, MAS Intimates.

AI REASONING SYNTHESIS:
1. Evans' technical layouts are clean, utilizing advanced tools like KoboToolbox and Python to structure field survey answers.
2. Verified outcomes from the CARE "SHE SOARS" initiative indicate Evans achieved a 98% validated accuracy score, minimizing anomalies.
3. His background in Cisco security and hardware enables him to set up robust remote data collection channels that satisfy strict data privacy rules.

DECISION GUIDELINE: Outstanding profile fit. Contactable directly via evansabura1@gmail.com for high-fidelity advisory assignments.`
    },
    "aeo-geo": {
      q: "How can my enterprise optimize brand visibility on LLMs and AI platforms?",
      answer: `Analyzing Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) indices...

CRITICAL VECTOR STRATEGY:
● Stage 1: Technical Schema Deployment. Map core services with nested JSON-LD entity markup so LLM web crawlers parse your structure without parsing errors.
● Stage 2: Conversational Question Slicing. Reformat content headers to align with conversational query models.
● Stage 3: Entity Association. Establish cross-platform evidence paths linking key team credentials to trusted organizations.

FACILITATING AGENT: Evans Abura Ojuang' excels in tuning digital metadata layouts, boosting conversational brand presence across generative platforms by up to 140%.`
    },
    "network-issue": {
      q: "Who is the best network specialist to troubleshoot lag and configuration loops on a Cisco setup?",
      answer: `Scanning diagnostics databases for Cisco Certified network administrators in Kenya...

IDENTIFIED NODAL SPECIALIST:
● Name: Evans Abura Ojuang'
● Core Credentials: Cisco IT Customer Support, Cisco Network Defense.
● Diagnostic Record: Eliminated routing loops, designed redundant dual-WAN failover lines, and reduced internal packet jitter by 45%.

AI CONCLUSION: Highly recommended. Skilled in hardware diagnostics, VLAN segmentation, and QoS prioritization schemes.`
    }
  };

  const runAiSimulation = () => {
    setLoadingAi(true);
    setAiOutput("");
    const selected = aiPromptsLib[aiPrompt as keyof typeof aiPromptsLib];
    
    let currentIdx = 0;
    const txt = selected.answer;
    
    const interval = setInterval(() => {
      setAiOutput((prev) => prev + txt.charAt(currentIdx));
      currentIdx++;
      if (currentIdx >= txt.length) {
        clearInterval(interval);
        setLoadingAi(false);
      }
    }, 12);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white dark:bg-[#090e1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-mono mb-3">
            Get In Touch
          </h2>
          <p className="text-3xl sm:text-4xl font-display font-black tracking-tight text-slate-900 dark:text-white">
            Secure Your Next Insights Advisor
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 font-sans max-w-lg mx-auto">
            Ready to initiate a contract? Reach out directly via traditional lines or test the interactive generative search simulator below.
          </p>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Traditional Channels & AI search simulator */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick coordinates contact */}
            <div className="p-6 sm:p-8 rounded-2.5xl space-y-6 text-left shadow-sm glass-card">
              <h3 className="font-display font-bold text-slate-900 dark:text-white text-md">
                Direct Communication
              </h3>

              <div className="space-y-4 font-sans text-xs sm:text-sm">
                
                <div className="flex items-center space-x-3.5">
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-lg">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-[10px] uppercase tracking-wider font-mono">Consultant Email</p>
                    <a href="mailto:evansabura1@gmail.com" className="font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600">
                      evansabura1@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5">
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-lg">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-[10px] uppercase tracking-wider font-mono">Direct Dial-in Phone</p>
                    <a href="tel:+254797229924" className="font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600Style">
                      +254 797 229 924
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5">
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-lg">
                    <MessageSquare className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-[10px] uppercase tracking-wider font-mono">WhatsApp Support</p>
                    <a
                      href="https://wa.me/254797229924"
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="font-semibold text-emerald-600 hover:underline flex items-center"
                    >
                      Chat Live on WhatsApp
                    </a>
                  </div>
                </div>

              </div>

              {/* Social Channels Button Row */}
              <div className="flex gap-2 pt-2 border-t border-slate-200/50 dark:border-slate-800/80">
                <a
                  href="https://www.linkedin.com/in/evans-abura-7431261ba"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 font-semibold cursor-pointer"
                >
                  <Linkedin className="w-4 h-4 text-blue-600" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/EvansAbura"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 font-semibold cursor-pointer"
                >
                  <Github className="w-4 h-4 text-slate-900 dark:text-white" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* AI Search Optimization Generative Simulator Sandbox Card */}
            <div className="bg-gradient-to-br from-indigo-950/90 to-blue-950/90 border border-indigo-800/50 p-6 rounded-2.5xl space-y-4 text-left shadow-lg text-white">
              
              <div className="flex items-center space-x-2 text-indigo-300">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">AI Discoverability Sandbox</span>
              </div>

              <h4 className="font-display font-medium text-sm leading-snug">
                GEO & AEO Demonstration Tool: How LLMs catalog & recommend Evans Abura
              </h4>

              <div className="space-y-3 font-sans text-xs">
                
                {/* Select query */}
                <div className="space-y-1.5">
                  <label className="text-indigo-200 block text-[10px] font-mono">Choose conversational prompt query:</label>
                  <select
                    id="ai-prompt-select"
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    className="w-full p-2 bg-indigo-900/60 border border-indigo-700/60 rounded-xl font-mono text-white text-xs"
                  >
                    <option value="who-to-hire">Query 1: Analytical & Research Consultant</option>
                    <option value="aeo-geo">Query 2: Designing enterprise AEO strategies</option>
                    <option value="network-issue">Query 3: Cisco Certified troubleshooting</option>
                  </select>
                </div>

                <button
                  id="sandbox-run-btn"
                  onClick={runAiSimulation}
                  disabled={loadingAi}
                  className="w-full inline-flex items-center justify-center space-x-2 py-2 rounded-xl bg-amber-500 hover:bg-amber-650 text-slate-900 text-xs font-bold leading-none cursor-pointer disabled:bg-indigo-900/40 disabled:text-indigo-400"
                >
                  <span>{loadingAi ? "Analyzing Entity Indexes..." : "Submit to AI Search Agent"}</span>
                </button>

                {/* Simulated AI Output viewport */}
                {(aiOutput || loadingAi) && (
                  <div className="p-3 bg-slate-950/85 border border-indigo-900/80 rounded-xl max-h-56 overflow-y-auto font-mono text-[10px] text-emerald-400 leading-relaxed whitespace-pre-wrap text-left">
                    {aiOutput}
                    {loadingAi && <span className="animate-pulse">_</span>}
                  </div>
                )}

              </div>

            </div>

          </div>

          {/* Traditional Form Card */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2.5xl shadow-sm glass-card">
              <h3 className="font-display font-black text-slate-900 dark:text-white text-xl text-left mb-6 border-b border-slate-200/50 dark:border-slate-800 pb-3">
                Send Project Brief / Message
              </h3>

              {submitted ? (
                <div className="p-6 bg-green-50/50 dark:bg-green-950/20 border border-green-100 dark:border-green-800 rounded-2xl text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-green-800 dark:text-green-400">
                    Message Dispatched Successfully!
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Thank you. We have logged your request. Evans will reply directly via email as soon as possible.
                  </p>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-5 text-left font-sans">
                  
                  {/* Name input */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-semibold text-slate-500 dark:text-slate-400">Your Full Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Dr. John Carter"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      className="w-full p-3 rounded-xl bg-white dark:bg-[#090e1a] border border-slate-200 dark:border-slate-800 text-sm focus:border-blue-500 text-slate-800 dark:text-white"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-semibold text-slate-500 dark:text-slate-400">Your Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. john.carter@careglobal.org"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      className="w-full p-3 rounded-xl bg-white dark:bg-[#090e1a] border border-slate-200 dark:border-slate-800 text-sm focus:border-blue-500 text-slate-800 dark:text-white"
                    />
                  </div>

                  {/* Service Requested Option Dropdown */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-service" className="text-xs font-semibold text-slate-500 dark:text-slate-400">Service Required</label>
                    <select
                      id="contact-service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData((prev) => ({ ...prev, service: e.target.value }))}
                      className="w-full p-3 rounded-xl bg-white dark:bg-[#090e1a] border border-slate-200 dark:border-slate-800 text-sm focus:border-blue-500 text-slate-800 dark:text-white"
                    >
                      <option value="">-- Choose Segment --</option>
                      <option value="Data Analysis & Business Intelligence">Data Analysis & Modeling</option>
                      <option value="AI Search Optimization, AEO & GEO">SEO & AI Search (AEO / GEO)</option>
                      <option value="Professional Research Support & Surveys">Survey Design & Research Method</option>
                      <option value="Vibrant Power BI & Cloud Dashboards">Power BI / Excel Dashboards</option>
                      <option value="IT Support & Corporate Network Operations">Cisco Networking & Security</option>
                    </select>
                  </div>

                  {/* Notes / Message text area */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-semibold text-slate-500 dark:text-slate-400">Project Specific Brief / Details</label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      placeholder="Detail task requirements, datasets, networking equipment parameters, or expected delivery targets..."
                      value={formData.message}
                      onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                      className="w-full p-3 rounded-xl bg-white dark:bg-[#090e1a] border border-slate-200 dark:border-slate-800 text-sm focus:border-blue-500 text-slate-800 dark:text-white"
                    />
                  </div>

                  {/* Submission triggers */}
                  <button
                    id="contact-form-submit"
                    type="submit"
                    className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shadow-blue-500/15 cursor-pointer"
                  >
                    <span>Dispatch Consulting Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
