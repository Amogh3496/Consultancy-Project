export interface SectionMeta {
  id: string;
  title: string;
  shortTitle: string;
  number: string;
}

export const sections: SectionMeta[] = [
  { id: "hero", title: "Strategic Roadmap", shortTitle: "Home", number: "" },
  { id: "executive-summary", title: "Executive Summary", shortTitle: "Summary", number: "01" },
  { id: "about-bny", title: "About BNY", shortTitle: "BNY", number: "02" },
  { id: "problem-definition", title: "Problem Definition", shortTitle: "Problem", number: "03" },
  { id: "industry-overview", title: "Industry Overview", shortTitle: "Industry", number: "04" },
  { id: "fraud-landscape", title: "Current Fraud Landscape", shortTitle: "Fraud", number: "05" },
  { id: "operational-challenges", title: "Operational Challenges", shortTitle: "Challenges", number: "06" },
  { id: "current-vs-future", title: "Current State vs. Future State", shortTitle: "Current vs Future", number: "07" },
  { id: "ai-opportunity", title: "AI Opportunity Assessment", shortTitle: "AI Opportunity", number: "08" },
  { id: "ai-use-cases", title: "AI Use Cases", shortTitle: "Use Cases", number: "09" },
  { id: "cost-benefit", title: "Cost–Benefit Analysis", shortTitle: "Cost–Benefit", number: "10" },
  { id: "prioritization", title: "Opportunity Prioritization Matrix", shortTitle: "Prioritization", number: "11" },
  { id: "ai-governance", title: "AI Governance", shortTitle: "Governance", number: "12" },
  { id: "swot", title: "SWOT Analysis", shortTitle: "SWOT", number: "13" },
  { id: "value-chain", title: "Value Chain Analysis", shortTitle: "Value Chain", number: "14" },
  { id: "implementation", title: "Implementation Roadmap", shortTitle: "Roadmap", number: "15" },
  { id: "kpi-dashboard", title: "KPI Dashboard", shortTitle: "KPIs", number: "16" },
  { id: "risk-assessment", title: "Risk Assessment", shortTitle: "Risks", number: "17" },
  { id: "recommendations", title: "Final Recommendations", shortTitle: "Recommendations", number: "18" },
  { id: "references", title: "References", shortTitle: "References", number: "19" },
];
