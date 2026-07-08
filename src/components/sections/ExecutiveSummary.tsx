// @ts-nocheck
"use client";


import SectionWrapper from "@/components/layout/SectionWrapper";

const bullets = [
  "BNY processes over $2 trillion in daily transactions across 35+ jurisdictions, creating significant financial crime exposure.",
  "Current rule-based detection systems generate 95%+ false positive rates, consuming analyst capacity and escalating costs.",
  "AI-driven transformation can reduce false positives by 40%, cut investigation time by 85%, and generate $87M in annual savings.",
  "Recommended 18-month phased implementation with $45–65M total investment yielding 280–350% ROI over three years.",
  "Robust AI governance ensures regulatory compliance and responsible deployment across all business lines.",
];

const metrics = [
  { value: "$3.1T", label: "Annual Global Financial Crime Cost" },
  { value: "40%", label: "Projected False Positive Reduction" },
  { value: "3:1", label: "ROI Within 18 Months" },
];

const fadeUp = {
  hidden: { opacity: 0, filter: "blur(8px)", scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1, filter: "blur(0px)", scale: 1,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as any as any },
  }),
};

export default function ExecutiveSummary() {
  return (
    <SectionWrapper id="executive-summary" number="01" title="Executive Summary">
      {/* Intro paragraph */}
      <p
        className="text-gray-800 text-lg leading-relaxed max-w-3xl"
      >
        This strategic assessment outlines how BNY can leverage artificial
        intelligence to fundamentally transform its fraud detection and
        financial crime prevention capabilities, delivering measurable
        operational improvements and substantial return on investment.
      </p>

      {/* Bullet points */}
      <div className="mt-10 space-y-4 max-w-3xl">
        {bullets.map((text, i) => (
          <div
            key={i}
            className="border-l-2 border-[#C9A84C] pl-4 py-1"
          >
            <p className="text-gray-800 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {metrics.map((metric, i) => (
          <div
            key={metric.label}
            className="bg-white shadow-sm border border-gray-100 rounded-xl p-6 text-center"
          >
            <p className="text-3xl md:text-4xl font-bold text-[#C9A84C]">
              {metric.value}
            </p>
            <p className="text-sm text-gray-600 mt-2">{metric.label}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
