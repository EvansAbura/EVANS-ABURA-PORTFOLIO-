export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "data-science" | "research" | "networking" | "seo";
  tags: string[];
  keyFeatures: string[];
  role: string;
  outcome: string;
  year: string;
  problemStatement?: string;
  solutionImplemented?: string;
  challengesFaced?: string;
  measurableImpact?: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string[];
  tags: string[];
}

export interface Certification {
  id: string;
  title: string;
  organization: string;
  year: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  deliveryTime: string;
  pricingPlaceholder: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: "data-science" | "research" | "networking" | "seo";
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  author: string;
  tags: string[];
}

export interface SkillGroup {
  category: string;
  skills: { name: string; level: number }[];
}
