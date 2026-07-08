// @ts-nocheck
"use client";

import React from "react";

import SectionWrapper from "@/components/layout/SectionWrapper";

interface UseCase {
  number: string;
  title: string;
  description: string;
  impact: "High" | "Medium";
}

const useCases: UseCase[] = [
  {
    number: "01",
    title: "Real-Time Transaction Monitoring",
    description:
      "ML models analyzing transaction patterns to flag suspicious activity",
    impact: "High",
  },
  {
    number: "02",
    title: "Network Analysis",
    description:
      "Graph neural networks mapping entity relationships to detect laundering rings",
    impact: "High",
  },
  {
    number: "03",
    title: "Behavioral Biometrics",
    description:
      "Continuous authentication through behavioral patterns",
    impact: "Medium",
  },
  {
    number: "04",
    title: "Natural Language Processing",
    description:
      "Automated screening of sanctions, adverse media, regulatory filings",
    impact: "High",
  },
  {
    number: "05",
    title: "Synthetic Identity Detection",
    description:
      "AI detecting fabricated identities using data pattern analysis",
    impact: "High",
  },
  {
    number: "06",
    title: "Predictive Risk Scoring",
    description:
      "Dynamic risk scoring combining 100+ variables",
    impact: "High",
  },
  {
    number: "07",
    title: "Intelligent Case Management",
    description:
      "AI-assisted investigation with automated evidence compilation",
    impact: "Medium",
  },
  {
    number: "08",
    title: "Regulatory Reporting Automation",
    description:
      "NLP-driven SAR generation and compliance filings",
    impact: "Medium",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, filter: "blur(8px)", scale: 0.95 },
  visible: {
    opacity: 1, filter: "blur(0px)", scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as any as any },
  },
};

export default function AIUseCases() {
  return (
    <SectionWrapper
      id="ai-use-cases"
      number="09"
      title="AI Use Cases"
      dark
      subtitle="High-impact applications of artificial intelligence in financial crime prevention"
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {useCases.map((uc) => (
          <div
            key={uc.number}
            className="bg-[#132038] rounded-lg p-6 border border-[#1a2d4a] hover:border-[#C9A84C] transition-colors"
          >
            <span className="text-2xl font-bold text-[#C9A84C]">
              {uc.number}
            </span>
            <h4 className="text-lg font-semibold text-white mt-2">
              {uc.title}
            </h4>
            <p className="text-gray-400 mt-2 text-sm">{uc.description}</p>
            <span
              className={`inline-block px-2 py-0.5 rounded text-xs mt-3 ${
                uc.impact === "High"
                  ? "bg-[#C9A84C]/20 text-[#C9A84C]"
                  : "bg-[#3B6B9B]/20 text-[#5A8BB8]"
              }`}
            >
              Impact: {uc.impact}
            </span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
