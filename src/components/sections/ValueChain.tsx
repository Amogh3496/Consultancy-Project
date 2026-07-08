// @ts-nocheck
"use client";


import SectionWrapper from "@/components/layout/SectionWrapper";

const stages = [
  {
    num: "01",
    name: "Data Collection",
    current: "Manual gathering from disparate sources",
    ai: "Automated real-time data ingestion",
  },
  {
    num: "02",
    name: "Risk Assessment",
    current: "Static risk scoring models",
    ai: "Dynamic ML-based risk profiling",
  },
  {
    num: "03",
    name: "Detection",
    current: "Rule-based threshold alerts",
    ai: "Anomaly detection & pattern recognition",
  },
  {
    num: "04",
    name: "Investigation",
    current: "Manual case review (4-6 hrs)",
    ai: "AI-assisted triage (30-45 min)",
  },
  {
    num: "05",
    name: "Reporting",
    current: "Manual SAR filing",
    ai: "NLP-generated automated reports",
  },
  {
    num: "06",
    name: "Remediation",
    current: "Reactive controls update",
    ai: "Predictive control optimization",
  },
];

const supportActivities = [
  "Technology Infrastructure",
  "Data Governance",
  "Talent Management",
  "Regulatory Compliance",
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

const barVariants = {
  hidden: { opacity: 0, filter: "blur(8px)", scale: 0.95 },
  visible: {
    opacity: 1, filter: "blur(0px)", scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as any as any, delay: 0.6 },
  },
};

export default function ValueChain() {
  return (
    <SectionWrapper
      id="value-chain"
      number="14"
      title="Value Chain Analysis"
      subtitle="End-to-end AI integration across the financial crime prevention value chain"
    >
      {/* Stage Cards */}
      <div
        className="flex gap-4 overflow-x-auto pb-4"
      >
        {stages.map((stage, index) => (
          <div key={stage.num} className="flex items-center flex-shrink-0">
            <div
              className="bg-white rounded-lg p-5 border-t-3 border-[#C9A84C] min-w-[220px] flex-shrink-0"
            >
              {/* Number */}
              <span className="text-[#C9A84C] text-sm font-bold">
                {stage.num}
              </span>

              {/* Name */}
              <h3 className="text-[#0A1628] font-bold text-base mt-1 mb-3">
                {stage.name}
              </h3>

              {/* Current */}
              <div className="mb-2">
                <span className="text-gray-500 text-xs font-semibold uppercase tracking-wide">
                  Current:
                </span>
                <p className="text-gray-500 text-sm mt-0.5">{stage.current}</p>
              </div>

              {/* AI-Enhanced */}
              <div>
                <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wide">
                  AI-Enhanced:
                </span>
                <p className="text-[#C9A84C] text-sm mt-0.5">{stage.ai}</p>
              </div>
            </div>

            {/* Arrow between cards (except last) */}
            {index < stages.length - 1 && (
              <span
                className="text-[#C9A84C] text-2xl self-center mx-2 hidden md:block flex-shrink-0"
              >
                →
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Support Activities Bar */}
      <div
        className="mt-8"
      >
        <span className="text-xs text-[#C9A84C] uppercase tracking-wider mb-2 block">
          Support Activities
        </span>
        <div className="bg-[#0A1628] rounded-lg p-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white text-sm">
          {supportActivities.map((activity) => (
            <div key={activity}>{activity}</div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
