// @ts-nocheck
"use client";


import SectionWrapper from "@/components/layout/SectionWrapper";

const quadrants = [
  {
    title: "Strengths",
    color: "text-[#5A8BB8]",
    bg: "bg-[#1a3a5c]",
    items: [
      "World's largest custodian bank with vast transaction data",
      "Established regulatory relationships across 35+ jurisdictions",
      "Strong tech investment ($3.5B+ annually)",
      "Deep domain expertise in securities services",
    ],
  },
  {
    title: "Weaknesses",
    color: "text-[#E67E50]",
    bg: "bg-[#4a2020]",
    items: [
      "Legacy technology in some business lines",
      "Siloed data across divisions",
      "Limited in-house AI/ML talent vs fintechs",
      "Complex org structure slowing decisions",
    ],
  },
  {
    title: "Opportunities",
    color: "text-[#2D8B75]",
    bg: "bg-[#1a4a3a]",
    items: [
      "First-mover in AI custody fraud prevention",
      "Regulatory tailwinds for modernization",
      "Partnership potential with AI vendors",
      "Revenue from fraud-prevention-as-a-service",
    ],
  },
  {
    title: "Threats",
    color: "text-[#C9A84C]",
    bg: "bg-[#4a3a1a]",
    items: [
      "Evolving AI-powered fraud techniques",
      "Increasing regulatory scrutiny on AI",
      "Competition from tech-native institutions",
      "Cybersecurity risks from digital expansion",
    ],
  },
];

export default function SWOTAnalysis() {
  return (
    <SectionWrapper
      id="swot"
      number="13"
      title="SWOT Analysis"
      dark
      subtitle="Strategic positioning for AI-driven financial crime prevention"
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {quadrants.map((q) => (
          <div
            key={q.title}
            className={`${q.bg} rounded-lg p-6`}
          >
            <h3 className={`text-lg font-bold ${q.color} mb-3`}>{q.title}</h3>
            <ul className="space-y-1.5">
              {q.items.map((item) => (
                <li key={item} className="text-gray-300 text-sm">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
