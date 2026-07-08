// @ts-nocheck
"use client";


import SectionWrapper from "@/components/layout/SectionWrapper";

const challenges = [
  {
    number: "01",
    title: "High False Positive Rates",
    description:
      "Legacy rule-based systems generate 95%+ false positive rates in transaction monitoring, overwhelming investigation teams",
  },
  {
    number: "02",
    title: "Manual Investigation Bottlenecks",
    description:
      "Analysts spend 75% of time on data gathering rather than actual analysis, creating significant operational drag",
  },
  {
    number: "03",
    title: "Siloed Data Systems",
    description:
      "Fragmented data across custody, clearing, and asset servicing lines prevents holistic risk views",
  },
  {
    number: "04",
    title: "Regulatory Complexity",
    description:
      "Operating across 35+ jurisdictions with varying AML/KYC requirements creates compliance overhead",
  },
  {
    number: "05",
    title: "Evolving Threat Vectors",
    description:
      "Sophisticated adversaries increasingly use AI-generated synthetic identities and deepfakes",
  },
  {
    number: "06",
    title: "Talent Shortage",
    description:
      "Global shortage of financial crime specialists estimated at 30,000+ unfilled positions",
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

export default function OperationalChallenges() {
  return (
    <SectionWrapper
      id="operational-challenges"
      number="06"
      title="Current Operational Challenges"
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {challenges.map((challenge) => (
          <div
            key={challenge.number}
            className="bg-white rounded-lg p-6 border-l-4 border-[#C9A84C] hover:shadow-lg transition-shadow"
          >
            <span className="text-3xl font-bold text-[#C9A84C]">
              {challenge.number}
            </span>
            <h3 className="text-lg font-semibold text-[#0A1628] mt-2">
              {challenge.title}
            </h3>
            <p className="text-[#6B7280] mt-2">{challenge.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
