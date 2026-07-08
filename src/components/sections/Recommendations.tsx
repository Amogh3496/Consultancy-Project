// @ts-nocheck
"use client";


import SectionWrapper from "@/components/layout/SectionWrapper";

const recommendations = [
  {
    number: "01",
    title: "Establish an AI Center of Excellence",
    description:
      "Create a dedicated team with direct CRO reporting, bringing together data scientists, domain experts, and compliance specialists to drive AI adoption across fraud prevention operations.",
    metric: "Investment: $8–12M annually",
  },
  {
    number: "02",
    title: "Modernize Data Infrastructure First",
    description:
      "Consolidate siloed data into unified real-time platform. A modern data backbone is the prerequisite for every AI initiative — without it, models starve for quality inputs.",
    metric: "Critical Enabler for All Downstream Initiatives",
  },
  {
    number: "03",
    title: "Deploy Transaction Monitoring AI as Pilot",
    description:
      "Highest impact, highest feasibility. Transaction monitoring touches the largest volume of alerts and offers the clearest ROI through false-positive reduction and faster case resolution.",
    metric: "Target: 40% false positive reduction, $30M+ annual savings",
  },
  {
    number: "04",
    title: "Implement AI Governance from Day One",
    description:
      "Model risk management, bias testing, explainability. Governance is not an afterthought — embedding it from inception avoids costly retrofits and regulatory friction.",
    metric: "Non-Negotiable for Regulatory Compliance",
  },
  {
    number: "05",
    title: "Build Strategic Partnerships",
    description:
      "Partner with 2–3 AI/ML vendors and academic institutions. No single organization can build every capability in-house — strategic alliances accelerate time-to-value.",
    metric: "Accelerate Capability Development",
  },
];

const timelinePhases = [
  {
    phase: "Immediate",
    range: "0–3 months",
    bgClass: "bg-[#C9A84C]/10",
    borderClass: "border-[#C9A84C]/30",
    dotClass: "bg-[#C9A84C]",
    items: [
      "Appoint Chief AI Officer",
      "Form AI steering committee",
      "Begin data audit",
      "Select technology partners",
    ],
  },
  {
    phase: "Near-Term",
    range: "3–9 months",
    bgClass: "bg-[#3B6B9B]/10",
    borderClass: "border-[#3B6B9B]/30",
    dotClass: "bg-[#3B6B9B]",
    items: [
      "Launch data platform build",
      "Deploy transaction monitoring pilot",
      "Establish governance framework",
      "Begin talent recruitment",
    ],
  },
  {
    phase: "Long-Term",
    range: "9–18 months",
    bgClass: "bg-[#0A1628]/10",
    borderClass: "border-[#0A1628]/30",
    dotClass: "bg-[#0A1628]",
    items: [
      "Scale AI across business lines",
      "Automate regulatory reporting",
      "Measure and optimize KPIs",
      "Evaluate next-gen capabilities",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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

export default function Recommendations() {
  return (
    <SectionWrapper
      id="recommendations"
      number="18"
      title="Final Recommendations"
      subtitle="Strategic priorities for BNY leadership"
    >
      {/* Recommendation Cards */}
      <div
        className="space-y-6"
      >
        {recommendations.map((rec) => (
          <div
            key={rec.number}
            className="bg-white rounded-lg p-6 border-l-4 border-[#C9A84C] flex gap-6 items-start"
          >
            <span className="text-4xl font-bold text-[#C9A84C] shrink-0">
              {rec.number}
            </span>
            <div>
              <h3 className="text-lg font-semibold text-[#0A1628]">
                {rec.title}
              </h3>
              <p className="text-[#6B7280] mt-2">{rec.description}</p>
              <span className="text-sm font-medium text-[#3B6B9B] mt-3 bg-[#3B6B9B]/10 inline-block px-3 py-1 rounded">
                {rec.metric}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Executive Action Timeline */}
      <div
        className="mt-12"
      >
        <h2 className="text-2xl font-bold text-[#0A1628] mb-6">
          Executive Action Timeline
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {timelinePhases.map((phase) => (
            <div
              key={phase.phase}
              className={`${phase.bgClass} border ${phase.borderClass} rounded-lg p-5`}
            >
              <h3 className="font-semibold text-[#0A1628]">{phase.phase}</h3>
              <p className="text-sm text-[#6B7280]">{phase.range}</p>
              <ul className="text-sm mt-3 space-y-2">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      className={`${phase.dotClass} w-1.5 h-1.5 rounded-full mt-1.5 shrink-0`}
                    />
                    <span className="text-[#374151]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
