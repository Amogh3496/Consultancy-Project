// @ts-nocheck
"use client";


import SectionWrapper from "@/components/layout/SectionWrapper";

const phases = [
  {
    label: "Phase 1",
    name: "Foundation",
    period: "Months 1–6",
    items: [
      "Data infrastructure modernization",
      "AI/ML platform selection",
      "Core team hiring & training",
      "Pilot: Transaction monitoring AI",
      "Governance framework",
    ],
  },
  {
    label: "Phase 2",
    name: "Acceleration",
    period: "Months 7–12",
    items: [
      "Network analysis deployment",
      "NLP screening implementation",
      "Risk scoring rollout",
      "System integration",
      "Performance benchmarking",
    ],
  },
  {
    label: "Phase 3",
    name: "Scale",
    period: "Months 13–18",
    items: [
      "Full production deployment",
      "Advanced analytics rollout",
      "Regulatory reporting automation",
      "Cross-business expansion",
      "Continuous improvement",
    ],
  },
];

const timelineDots = [
  { position: "left-0", label: "Month 1" },
  { position: "left-1/2 -translate-x-1/2", label: "Month 7" },
  { position: "right-0", label: "Month 13" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, filter: "blur(8px)", scale: 0.95 },
  visible: {
    opacity: 1, filter: "blur(0px)", scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as any as any },
  },
};

const timelineVariants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.8, ease: "easeOut" as any as any },
  },
};

export default function ImplementationRoadmap() {
  return (
    <SectionWrapper
      id="implementation"
      number="15"
      title="Implementation Roadmap"
      dark
      subtitle="An 18-month phased approach to AI-driven transformation"
    >
      {/* Timeline Progress Bar */}
      <div
        className="relative mb-10"
      >
        <div className="bg-[#132038] rounded-full h-2 w-full relative">
          {timelineDots.map((dot) => (
            <div key={dot.label} className={`absolute ${dot.position} -top-1`}>
              <div className="w-4 h-4 bg-[#C9A84C] rounded-full" />
              <span className="text-gray-400 text-xs mt-2 block whitespace-nowrap -translate-x-1/4">
                {dot.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Phase Cards */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
      >
        {phases.map((phase) => (
          <div
            key={phase.label}
            className="border-t-4 border-[#C9A84C] bg-[#132038] rounded-lg p-6"
          >
            {/* Phase Label */}
            <span className="text-[#C9A84C] font-semibold text-sm">
              {phase.label} — {phase.name}
            </span>

            {/* Period */}
            <p className="text-gray-400 text-sm mt-1">{phase.period}</p>

            {/* Items */}
            <ul className="text-gray-300 text-sm mt-4 space-y-2">
              {phase.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#C9A84C] mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
