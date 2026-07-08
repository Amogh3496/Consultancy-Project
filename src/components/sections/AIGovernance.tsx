// @ts-nocheck
"use client";


import SectionWrapper from "@/components/layout/SectionWrapper";

const pillars = [
  {
    title: "Model Risk Management",
    items: [
      "Model validation",
      "Performance monitoring",
      "Bias testing",
      "Version control",
    ],
  },
  {
    title: "Data Governance",
    items: [
      "Data quality standards",
      "Privacy compliance",
      "Lineage tracking",
      "Access controls",
    ],
  },
  {
    title: "Ethical AI",
    items: ["Fairness", "Transparency", "Accountability", "Explainability"],
  },
  {
    title: "Regulatory Compliance",
    items: [
      "SR 11-7 guidance",
      "EU AI Act",
      "GDPR alignment",
      "Local regulations",
    ],
  },
];

export default function AIGovernance() {
  return (
    <SectionWrapper
      id="ai-governance"
      number="12"
      title="AI Governance Framework"
      subtitle="Establishing responsible AI practices for financial crime prevention"
    >
      {/* Pillar Cards */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="bg-white rounded-lg p-6 border-t-3 border-[#C9A84C]"
          >
            <h3 className="font-semibold text-[#0A1628] mb-3">
              {pillar.title}
            </h3>
            <ul className="space-y-1.5">
              {pillar.items.map((item) => (
                <li key={item} className="text-sm text-[#6B7280]">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Governance Operating Model */}
      <div
        className="mt-12"
      >
        <h3 className="text-xl font-bold text-[#0A1628] mb-6">
          Governance Operating Model
        </h3>

        <div className="max-w-2xl mx-auto">
          {/* Tier 1 */}
          <div className="bg-[#0A1628] text-white p-4 rounded-t-lg text-center">
            Board Level — AI Ethics Committee
          </div>

          {/* Arrow */}
          <div className="mx-auto w-0.5 h-6 bg-[#C9A84C]" />

          {/* Tier 2 */}
          <div className="bg-[#3B6B9B] text-white p-4 text-center">
            Management — Chief AI Officer | Model Risk Committee
          </div>

          {/* Arrow */}
          <div className="mx-auto w-0.5 h-6 bg-[#C9A84C]" />

          {/* Tier 3 */}
          <div className="bg-[#5A8BB8] text-white p-4 rounded-b-lg text-center">
            Operational — Data Science | Compliance | Internal Audit
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
