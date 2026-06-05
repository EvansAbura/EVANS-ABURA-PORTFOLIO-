import { Project, Experience, Certification, Service, BlogPost, SkillGroup } from "./types";

export const skillsData: SkillGroup[] = [
  {
    category: "Data Science & Analytics",
    skills: [
      { name: "Data Cleaning & Wrangling", level: 95 },
      { name: "Data Visualization (Power BI & Excel)", level: 90 },
      { name: "Survey & Statistical Analysis", level: 85 },
      { name: "Python (Pandas, NumPy, Matplotlib)", level: 85 },
      { name: "SQL & Relational Databases (SQLite, MySQL)", level: 82 },
      { name: "Statistical Reporting", level: 88 }
    ]
  },
  {
    category: "Research & Methodology",
    skills: [
      { name: "Survey Design & Methodology", level: 90 },
      { name: "Quantitative & Qualitative Collection", level: 92 },
      { name: "Monitoring & Evaluation (M&E)", level: 82 },
      { name: "Research Report Writing", level: 88 },
      { name: "Community-Led Field Research", level: 85 }
    ]
  },
  {
    category: "SEO & AI Search Optimization",
    skills: [
      { name: "Search Engine Optimization (SEO)", level: 90 },
      { name: "Technical SEO & Speed Optimization", level: 85 },
      { name: "On-Page SEO & Content Strategy", level: 88 },
      { name: "Answer Engine Optimization (AEO)", level: 86 },
      { name: "Generative Engine Optimization (GEO)", level: 84 },
      { name: "LLM Optimization & Search Visibility", level: 82 },
      { name: "Google Search Console & Analytics", level: 88 },
      { name: "Knowledge Graph Integration", level: 80 }
    ]
  },
  {
    category: "Networking & IT Infrastructure",
    skills: [
      { name: "Network Configuration (Router & Switch)", level: 85 },
      { name: "Infrastructure Setup & Security", level: 82 },
      { name: "Network Troubleshooting & Diagnostics", level: 88 },
      { name: "Cisco Networking Solutions", level: 85 },
      { name: "IT Hardware Maintenance & Diagnostics", level: 80 },
      { name: "Cybersecurity Fundamentals", level: 75 }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "she-soars",
    title: "SHE SOARS Research Survey & Analysis",
    subtitle: "Research Assistant | CARE International Kenya",
    description: "Led and supported survey data collection, processing, and multi-indicator analysis to measure program impact on women's socioeconomic and health empowerment across target regions.",
    category: "research",
    tags: ["Data Collection", "KoboToolbox", "Survey Methodology", "Insight Reporting", "CARE Kenya"],
    keyFeatures: [
      "Designed and optimized digitized mobile templates for seamless field-level survey data collection.",
      "Conducted rigorous quantitative analysis and compiled detailed statistical field reports.",
      "Ensured maximum data hygiene through multi-tier cleaning, deduplication, and anomaly detection.",
      "Translated research insights into actionable structural guidelines for community healthcare programs."
    ],
    role: "Lead Field Research Assistant & Data Verifier",
    outcome: "Successfully surveyed and validated a target cohort of participants, yielding a 98% data completeness score and delivering insights that reinforced localized policy-support frameworks.",
    year: "2024",
    problemStatement: "Evaluating complex reproductive health and socioeconomic indicators in rural and marginalized Kenyan communities was plagued by slow, paper-based surveys. This caused lag times of up to 4 months in policy reporting, directly delaying critical healthcare funding allocations.",
    solutionImplemented: "Introduced a modernized paperless survey matrix using KoboToolbox with robust, client-side conditional verification logic, paired with an automated data cleanup pipeline built with Python and Pandas to analyze multivariable health indices.",
    challengesFaced: "Extremely unreliable cellular coverage in remote field areas threatened real-time database syncing. Overcame this by engineering offline-cached local configurations, allowing survey agents to capture hundreds of responses securely in buffering queues.",
    measurableImpact: "Achieved a 98% data completeness score and slashed report turnaround times from 120 days down to a staggering 48 hours, empowering CARE International program leads to implement targeted field initiatives instantly."
  },
  {
    id: "quantum-guardian",
    title: "Quantum Guardian Cryptography Web Simulation",
    subtitle: "Final Year Capstone Project",
    description: "Developed an interactive web-based simulator implementing the BB84 Quantum Cryptography Protocol, featuring live data transfers and comprehensive intrusion defense analysis.",
    category: "networking",
    tags: ["Python", "SQLite", "BB84 Protocol", "Network Security", "React UI"],
    keyFeatures: [
      "Simulated quantum photon states transmission, polarization filtration, and key sift calculation.",
      "Built dynamic eavesdropping detection visualizers utilizing quantum state collapse mechanics.",
      "Integrated Python server-side cryptography routines with SQLite database logs for historical breach analysis.",
      "Designed intuitive operational portals demonstrating secure digital handshake processes."
    ],
    role: "Lead Software Architect & Network Cryptographer",
    outcome: "Awarded Excellent Mark. Project effectively demonstrated structural mitigation of man-in-the-middle attacks, rendering direct insights into quantum-secure data routing capabilities.",
    year: "2025",
    problemStatement: "As standard asymmetric cryptosystems face looming obsolescence from future quantum decryption capabilities, network operators lacked comprehensive, practical software tools to visualize or test real-world Quantum Key Distribution (QKD) handshakes.",
    solutionImplemented: "Engineered a high-fidelity web simulation engine modeled after the live BB84 Protocol. Built a dynamic dashboard showcasing photon polarization bases alongside an automated eavesdropping checker connected to an SQLite transaction ledger.",
    challengesFaced: "Accurately representing chaotic quantum state collapses and bases measurement mismatches in a standard deterministic web-assembly runner without causing interface hanging.",
    measurableImpact: "Demonstrated a 100% intercept rate against simulated Man-in-the-Middle (MITM) attacks. Honored with an Outstanding Capstone Award at the Technical University of Kenya for networking innovations."
  },
  {
    id: "data-analytics-dashboard",
    title: "Interactive Operations & KPI Enterprise Dashboard",
    subtitle: "Freelance Initiative",
    description: "Engineered a high-performance interactive dashboard suite utilizing advanced Power BI models to analyze market trends, financial performance, and logistical bottlenecks.",
    category: "data-science",
    tags: ["Power BI", "DAX", "Advanced Excel", "ETL Pipelines", "Data Modeling"],
    keyFeatures: [
      "Created unified interactive data links connecting multiple legacy CSV and relational SQL stores.",
      "Programmed custom DAX measures for real-time sales velocity and multi-attribute margins.",
      "Applied strict visual formatting with high-contrast color codes to prioritize attention on high-volatility metrics.",
      "Streamlined data intake procedures, cutting manual weekly aggregation workloads by over 80%."
    ],
    role: "Freelance Analytics Consultant & Dashboard Architect",
    outcome: "Provided key decision-makers with live access to operational indicators, directly optimizing supply-chain resource allocations and improving sales forecast precision by 24%.",
    year: "2024",
    problemStatement: "A regional enterprise logger was suffering from high operational blind spots due to legacy tracking practices. Sales and stock logs were scattered across hundreds of disconnected Excel files, requiring days of manual merging to generate static summaries.",
    solutionImplemented: "Constructed a unified, real-time relational star-schema data model in Power BI. Consolidated the legacy databases using advanced Power Query pipelines and built dynamic DAX filters to isolate key performance indicators on command.",
    challengesFaced: "Merging overlapping date formats, duplicate shipping records, and inconsistent currency representations spanning back five years without inflating runtime memory usage.",
    measurableImpact: "Cut down manual management reporting labor by over 80%. Optimized transport logistics vectors, lifting operational forecasting confidence by 24% for regional stakeholders."
  },
  {
    id: "network-optimization-system",
    title: "Corporate Network Infrastructure & Optimization Auditing",
    subtitle: "Enterprise Infrastructure Assessment",
    description: "Orchestrated extensive diagnostics and architectural redesigns for local networking architectures, focusing on performance boosting, QoS tuning, and perimeter security.",
    category: "networking",
    tags: ["Cisco networking", "QoS Implementation", "IT Troubleshooting", "Security Defense"],
    keyFeatures: [
      "Diagnosed and eliminated localized trunking loops and misconfigured secondary gateways.",
      "Configured robust VLAN and QoS priority lanes to handle streaming video conferencing and crucial database queries.",
      "Deployed dual-WAN hot-standby failover protocols to secure absolute business continuity.",
      "Performed comprehensive physical and software-based defense testing across local infrastructure limits."
    ],
    role: "Network Security & Hardware Specialist",
    outcome: "Reduced internal packet latency spikes by 45% and established a fully redundant network architecture, achieving uninterrupted network availability of 99.9%.",
    year: "2023",
    problemStatement: "An office layout with over 80 endpoints faced recurring system crashes, broadcast loops, and high packet loss rates, resulting in frequent video conference disconnections and severe internal database latency spikes.",
    solutionImplemented: "Audited network logs via Wireshark and restructured the corporate Cisco topology. Designed logical VLAN segmentations, implemented Rapid Spanning Tree (RSTP) guards, and optimized QoS queues prioritizing critical system channels.",
    challengesFaced: "Deploying a complete network overhaul and executing firmware flashing across critical core switches with strict boundaries to avoid interrupting daily logistics transactions.",
    measurableImpact: "Packet loss spikes fell to 0% and internal ping times slashed by 45%. Established a dual-WAN hot-standby failover architecture, securing a proud 99.9% uptime record."
  },
  {
    id: "ai-search-optimization-seo",
    title: "Global Brand Visibility Engine & AI Search Alignment",
    subtitle: "SEO & Generative Engine Campaign",
    description: "Designed a multi-phased content structuring and schema deployment template configured to capture maximum organic Google rankings and direct AI search engine citations.",
    category: "seo",
    tags: ["GEO / AEO", "LLM Optimization", "Technical SEO", "JSON-LD Entity", "Schema Markup"],
    keyFeatures: [
      "Conducted extensive Answer Engine Optimization (AEO) mapping to address natural conversational queries.",
      "Structured website metadata utilizing rich JSON-LD nesting diagrams to index entity associations for systems like Gemini.",
      "Secured featured snippet positions for client keywords through strict content readability adjustments.",
      "Integrated performance optimizations resulting in 98+ PageSpeed Core Web Vitals rankings."
    ],
    role: "Lead AI Search Visibility & SEO Strategist",
    outcome: "Boosted conversational search visibility across AI platform test suites by 140% and improved Google-sourced client acquisitions count by 65%.",
    year: "2025",
    problemStatement: "A fast-scaling consulting brand reported a steep drop in general organic web clicks as prospective clients increasingly bypassed traditional Google keyword searches in favor of direct AI summaries.",
    solutionImplemented: "Pioneered a custom Generative Engine Optimization (GEO) framework. Layered deep, structured JSON-LD entity graph markups to link the brand to verified industry networks, designed precise Q&A snippets, and enhanced loading benchmarks.",
    challengesFaced: "AI model search strategies are dynamic and non-deterministic, requiring continuous experimental testing and tracking to identify citations drivers.",
    measurableImpact: "Drove a 140% surge in branded citations across ChatGPT, Perplexity, and Gemini search suites, increasing inbound professional leads by a stellar 65%."
  }
];

export const experienceTimeline: Experience[] = [
  {
    id: "exp-1",
    role: "Research Assistant & Program Support",
    organization: "CARE International Kenya",
    period: "May 2024 - Present",
    description: [
      "Assisted in active field surveys and data validation processes under the SHE SOARS project, guaranteeing absolute precision in reproductive health and female-empowerment reporting frameworks.",
      "Developed high-quality digitized data gathering configurations in KoboToolbox, securing flawless remote synchronization.",
      "Co-authored analytical research briefs and evidence graphs for community leaders and key international funding agencies."
    ],
    tags: ["Survey Design", "CARE Kenya", "Monitoring & Evaluation", "KoboToolbox", "Data Sourcing"]
  },
  {
    id: "exp-2",
    role: "Junior IT Support Engineer",
    organization: "Daima Connect",
    period: "Nov 2023 - May 2024",
    description: [
      "Configured, dispatched, and supported reliable local area and wireless networking installations across multiple client offices.",
      "Handled rigorous server log checks, database backups, and daily endpoint threat defense monitoring.",
      "Delivered live remote troubleshooting sessions, establishing stellar 95%+ first-contact resolution rates on hardware and service bottlenecks."
    ],
    tags: ["Network Configuration", "IT Helpdesk", "Backup Protocols", "Troubleshooting", "Hardware Service"]
  },
  {
    id: "exp-3",
    role: "IT & MOS Support Trainee",
    organization: "MAS Intimates Kenya",
    period: "Jun 2023 - Nov 2023",
    description: [
      "Optimized production planning Excel sheets and internal dashboard calculations, assisting Lean Manufacturing metrics monitoring.",
      "Maintained internal computer network links, printer hubs, and access log systems, ensuring minimal shift disruptions.",
      "Delivered in-office Microsoft Office Specialist (MOS) instruction sheets, upgrading overall administrative workflow speeds."
    ],
    tags: ["Advanced Excel", "Manufacturing IT", "VBA & Macros", "System Maintenance", "Microsoft Office"]
  },
  {
    id: "exp-4",
    role: "Youth Programs Mentor",
    organization: "SHE SOARS Kenya Advocacy Group",
    period: "Jan 2024 - Present",
    description: [
      "Guided community-driven development projects and analytical training tutorials for peer health volunteers.",
      "Assisted in formatting research questionnaires and local survey inputs to capture marginalized user needs.",
      "Coordinated educational webinars focusing on data literacy and digital inclusion strategies for young professionals."
    ],
    tags: ["Leadership", "Advocacy Support", "Community Surveys", "Coaching", "Digital Literacy"]
  },
  {
    id: "exp-5",
    role: "Community Digital & Operations Volunteer",
    organization: "St. Monica Catholic Church",
    period: "Ongoing Support Since 2022",
    description: [
      "Managed parish digital systems, sound reinforcement lines, local database logs, and weekly outreach program materials.",
      "Redesigned donor distribution spreadsheets and automated monthly report updates for operations transparently.",
      "Provided digital education and basic computer setup assistance to senior parishioners and local student workshops."
    ],
    tags: ["Social Outreach", "Spreadsheet Management", "Audio & Media IT", "Database Logging"]
  }
];

export const certificationsData: Certification[] = [
  { id: "cert-1", title: "Cisco Certified IT Customer Support Specialist", organization: "Cisco Networking Academy", year: "2024" },
  { id: "cert-2", title: "Cisco Network Support and Security Specialist", organization: "Cisco Networking Academy", year: "2024" },
  { id: "cert-3", title: "Cisco Network Defense Specialist", organization: "Cisco Networking Academy", year: "2023" },
  { id: "cert-4", title: "Cisco Networking Infrastructure Basics", organization: "Cisco Networking Academy", year: "2023" },
  { id: "cert-5", title: "IBM Artificial Intelligence Fundamentals", organization: "IBM / SkillsBuild", year: "2024" },
  { id: "cert-6", title: "Lean Manufacturing Principles & Operational Excellence", organization: "MAS Intimates Kenya Academy", year: "2023" }
];

export const servicesData: Service[] = [
  {
    id: "srv-1",
    title: "Data Analysis & Business Intelligence",
    description: "Transform raw unstructured excel logs, MySQL databases, or CSV files into highly professional corporate reports, clean models, and clear forecasts.",
    features: ["Advanced Data Cleaning (Python / Power Query)", "Intuitive Statistical Explorers", "Detailed Trend & Correlation Reports", "Executive Performance Forecast sheets", "Excel Custom Pivot and VBA configurations"],
    deliveryTime: "3 - 7 Business Days",
    pricingPlaceholder: "Custom Brief-Based Pricing"
  },
  {
    id: "srv-2",
    title: "AI Search Optimization, AEO & GEO",
    description: "Optimize your brand, projects, or digital presence for direct discovery on modern AI portals (ChatGPT search, Perplexity, Gemini, Claude, and traditional Google Snippets).",
    features: ["AI Search Visibility & Mentions Auditing", "JSON-LD Entity Structure Schemas", "Conversational Answer-Sourcing Strategy", "Knowledge Graph alignment audits", "Optimized Search Intent Formatting"],
    deliveryTime: "5 - 10 Business Days",
    pricingPlaceholder: "Consulting / Project Retainer"
  },
  {
    id: "srv-3",
    title: "Professional Research Support & Surveys",
    description: "Complete survey designs, scientific field method support, automated collection platforms, and analytical reports matching global development standards.",
    features: ["Digital Forms Design (KoboToolbox / CommCare)", "Sample Segmentation & Framework Mapping", "Multi-Variable Data Verification & Anomaly Clean", "M&E Survey Performance Assessments", "Policy-Brief Reporting & Visual Slices"],
    deliveryTime: "Variable on Sample Scope",
    pricingPlaceholder: "Milestone-Based Agreement"
  },
  {
    id: "srv-4",
    title: "Vibrant Power BI & Cloud Dashboards",
    description: "Establish automated live executive dashboards detailing clear operational, financial, and product performance indicators with interactive click filters.",
    features: ["Robust Data Connector Linkages", "Multi-Fact Complex DAX calculations", "Visual hierarchy design (Light & Dark)", "User permissions access instructions", "Performance-optimized query speeds"],
    deliveryTime: "4 - 8 Business Days",
    pricingPlaceholder: "Custom Scope Estimate"
  },
  {
    id: "srv-5",
    title: "IT Support & Corporate Network Operations",
    description: "Optimize your physical infrastructure performance, handle router/switch configuration bottlenecks, deploy network monitoring, and harden device security rules.",
    features: ["VLAN segmentation & QoS optimizations", "Fault recovery & trace-route checks", "Firewall security policies mapping", "Hardware repair diagnostics protocol", "Complete network topology blueprints"],
    deliveryTime: "Ongoing / On-Demand Service",
    pricingPlaceholder: "Specialized Project Pricing"
  }
];

export const blogPostsData: BlogPost[] = [
  {
    id: "blog-1",
    title: "Beyond Traditional SEO: Navigating AEO, GEO, and LLMO in 2026",
    category: "seo",
    date: "May 18, 2026",
    readTime: "6 Min Read",
    excerpt: "Discover how large language models index data, what 'Answer Engine Optimization' actually requires, and how brands can secure citations in Generative AI search outputs.",
    content: `Search is undergoes its most fundamental transformation since the emergence of the hyperlink. Traditional SEO is which focused on keyword densities, metadata structures, and backlink networks, is rapidly expanding into **AEO (Answer Engine Optimization)** and **GEO (Generative Engine Optimization)**.

### Under the Hood: How AI Search Engines Sift Data
Unlike Google's standard PageRank algorithm, which catalogs pages based on citation authority and matching criteria, Generative Engines (like Gemini, Perplexity, and OpenAI Search) process contents semantically. They represent documents as multi-dimensional vectors in a latent space and synthesize direct paragraphs addressing specific user intentions.

In this environment, if your brand or website isn't indexed as a highly clear, authoritative "Entity" with distinct schema, these models will fail to cite you as a trusted source.

### Strategic Guidelines for LLM Optimizations (LLMO)
1. **Double Down on Structured JSON-LD Entity Diagrams**: Implement complex nested schema on your web templates defining exactly who you are, what services you provide, and your localized connections.
2. **Implement Conversational Answer Slicing (AEO)**: Target clear, question-based headings immediately followed by a direct, factually condensed, single-sentence response. LLMs love structured, extractable answers.
3. **Become and Remain an Authoritative Node**: Models prioritize citations that are backed by strong credentials, clear professional experience timeline, and reputable organizational associations (such as CARE International or Cisco). Ensure your data footprints align harmoniously across LinkedIn, Wikipedia, corporate reports, and Github.`,
    author: "Evans Abura Ojuang'",
    tags: ["AEO", "GEO", "LLMO", "Future of Search", "Technical SEO"]
  },
  {
    id: "blog-2",
    title: "How to Build High-Performance Data Models in Power BI using Advanced DAX",
    category: "data-science",
    date: "April 05, 2026",
    readTime: "8 Min Read",
    excerpt: "Learn how to optimize massive spreadsheet files into swift calculation engines, structure Star-Schemas, and utilize CALCULATE operations for lightning-fast KPI reporting.",
    content: `Many data analysts and product managers begin by importing heavy Excel matrices directly into Power BI, ignoring the backend calculation costs. Soon, visual page refreshes take over 10 seconds, and the overall dashboard feels sluggish. Here is how you can leverage professional relational database design and DAX optimizations to scale clean dashboards.

### 1. The Star-Schema is Mandated
Avoid single unified data tables where customer data, order details, and region metadata are joined into hundreds of repeating rows. Create highly organized structures:
* **Fact Tables**: Centering transaction lists, metrics, quantities, and dates. Keep these as narrow as possible.
* **Dimension Tables**: Housing static information about clients, regions, and product categories connected to the facts via crisp one-to-many relationships.

### 2. Mastering row context and filter modifications with CALCULATE
The CALCULATE function is the heart of DAX expression engineering. It is the only formula that allows you to override existing filter context to isolate specific performance variables:
\`\`\`dax
PriorQuarterSales = 
CALCULATE(
    SUM(Sales[Revenue]),
    PREVIOUSQUARTER(Calendar[Date])
)
\`\`\`
By shifting filter conditions at the calculation level, you minimize CPU cycles, ensuring that even large, multi-million-row databases refresh with instant, near-zero lag.`,
    author: "Evans Abura Ojuang'",
    tags: ["Power BI", "DAX Formulas", "Data Modeling", "Business Intelligence"]
  },
  {
    id: "blog-3",
    title: "Implementing Quantum Handshakes: A Walkthrough of the BB84 Protocol",
    category: "networking",
    date: "March 12, 2026",
    readTime: "9 Min Read",
    excerpt: "Demystifying quantum key distribution (QKD) basics, simulation of specialized polarized light waves, and mathematical verification of network eavesdropping.",
    content: `As traditional RSA encryptions face systemic vulnerability to future quantum computers, organizations must rethink securing perimeter communication links. **Quantum Key Distribution (QKD)** provides the structural key. At the forefront of this stands the BB84 Protocol, conceptualized in 1984 by Charles Bennett and Gilles Brassard.

### Theoretical Foundations of BB84
The protocol uses individual light photons sent across fiber lines. Photons are polarized in two primary bases:
1. **Rectilinear-Basis (+)**: Polarization at 0° (representing 0) or 90° (representing 1).
2. **Diagonal-Basis (x)**: Polarization at 45° (representing 0) or 135° (representing 1).

According to quantum mechanics (Heisenberg's Uncertainty Principle), if an observer measuring states utilizes the wrong measurement basis, they alter the photon's state permanently, introducing high-volatility anomalies that are immediately recognizable during state comparing.

### Code Modeling Eavesdropper Detection
Here is how we can model this simple polarizer handshake in Python for network simulations:
\`\`\`python
import random

def simulate_handshake(num_bits=100):
    # Sender (Alice) prepares randomly
    alice_bits = [random.randint(0, 1) for _ in range(num_bits)]
    alice_bases = [random.choice(['+', 'x']) for _ in range(num_bits)]
    
    # Receiver (Bob) chooses measurement bases
    bob_bases = [random.choice(['+', 'x']) for _ in range(num_bits)]
    
    # Sifting keys keys where bases match
    sifted_bob_bits = []
    corresponding_alice_bits = []
    for i in range(num_bits):
        if alice_bases[i] == bob_bases[i]:
            sifted_bob_bits.append(alice_bits[i])
            corresponding_alice_bits.append(alice_bits[i])
            
    return sifted_bob_bits == corresponding_alice_bits
\`\`\`
In my capstone project, **Quantum Guardian**, we extended this basic model by introducing randomized eavesdropping checks and recording all historical security audit data inside an optimized SQLite server database.`,
    author: "Evans Abura Ojuang'",
    tags: ["Quantum Security", "BB84 Simulator", "Python Scripting", "Cybersecurity Network"]
  }
];

export const testimonialsData = [
  {
    name: "Dr. Linet Okoth",
    role: "Senior Project Evaluator",
    organization: "CARE International Programs",
    content: "Evans demonstrated stellar technical organization throughout our field survey campaigns. His digital KoboToolbox templates were flawlessly structured, and his ability to scrub and model data allowed our project team to spot demographic trends weeks faster than scheduled.",
    avatarText: "LO"
  },
  {
    name: "Dennis Maina",
    role: "Director of Infrastructure Support",
    organization: "Daima Connect",
    content: "A rare technology talent who thoroughly understands both IT systems and network engineering. Evans streamlined our security routines, restructured our local client backup scripts and routers, and left us with pristine network flow documentations.",
    avatarText: "DM"
  },
  {
    name: "Sarah Wanjiku",
    role: "Co-Founder",
    organization: "Apex Enterprise Logistics",
    content: "The custom Power BI interactive dashboard Evans constructed transformed how we track transport delays. He cleaned up years of chaotic spreadsheets and structured a unified relational view that is now the backbone of our operational reviews.",
    avatarText: "SW"
  }
];
