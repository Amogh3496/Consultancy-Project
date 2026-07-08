// @ts-nocheck
"use client";


import SectionWrapper from "@/components/layout/SectionWrapper";

const rows = [
  {
    dimension: "Detection Method",
    current: "Rule-based, static thresholds",
    future: "AI/ML-driven dynamic risk scoring",
  },
  {
    dimension: "False Positive Rate",
    current: "95–98%",
    future: "50–60% (40% reduction)",
  },
  {
    dimension: "Investigation Time",
    current: "4–6 hours per case",
    future: "30–45 minutes per case",
  },
  {
    dimension: "Data Integration",
    current: "Siloed, batch processing",
    future: "Unified real-time data lake",
  },
  {
    dimension: "Customer Impact",
    current: "High friction, delays",
    future: "Seamless, risk-proportionate",
  },
  {
    dimension: "Regulatory Reporting",
    current: "Manual, quarterly",
    future: "Automated, near real-time",
  },
  {
    dimension: "Threat Response",
    current: "Reactive (days)",
    future: "Proactive (minutes)",
  },
  {
    dimension: "Cost per Alert",
    current: "$15–$25",
    future: "$3–$5",
  },
];

const tableVariants = {
  hidden: { opacity: 0, filter: "blur(8px)", scale: 0.95 },
  visible: {
    opacity: 1, filter: "blur(0px)", scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as any as any },
  },
};

export default function CurrentVsFuture() {
  return (
    <SectionWrapper
      id="current-vs-future"
      number="07"
      title="Current State vs. Future State"
      subtitle="Transforming financial crime prevention through AI-driven capabilities"
      dark
    >
      <div
        className="overflow-x-auto"
      >
        <table className="w-full rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-[#132038]">
              <th className="text-[#C9A84C] font-semibold p-4 text-left">
                Dimension
              </th>
              <th className="text-[#C9A84C] font-semibold p-4 text-left">
                Current State
              </th>
              <th className="text-[#C9A84C] font-semibold p-4 text-center">
                →
              </th>
              <th className="text-[#C9A84C] font-semibold p-4 text-left">
                Future State
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={row.dimension}
                className={
                  index % 2 === 0 ? "bg-[#0F1D30]" : "bg-[#132038]"
                }
              >
                <td className="p-4 text-white font-medium">
                  {row.dimension}
                </td>
                <td className="p-4 text-gray-400">{row.current}</td>
                <td className="p-4 text-[#C9A84C] text-center">→</td>
                <td className="p-4 text-[#C9A84C] font-medium">
                  {row.future}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionWrapper>
  );
}
