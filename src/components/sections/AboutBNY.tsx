// @ts-nocheck
"use client";


import SectionWrapper from "@/components/layout/SectionWrapper";

const stats = [
  { label: "Founded", value: "1784" },
  { label: "Headquarters", value: "New York City" },
  { label: "Assets Under Custody", value: "$46.7T" },
  { label: "Assets Under Management", value: "$2.0T" },
  { label: "Revenue", value: "~$18.4B" },
  { label: "Employees", value: "50,000+" },
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
  hidden: { opacity: 0, filter: "blur(10px)", y: 30, scale: 0.95, rotateX: 5, transformPerspective: 1000 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    scale: 1,
    rotateX: 0,
    transformPerspective: 1000,
    transition: { duration: 0.5, ease: "easeOut" as any as any },
  },
};

export default function AboutBNY() {
  return (
    <SectionWrapper id="about-bny" number="02" title="About BNY" dark>
      <p
        className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12"
      >
        BNY (Bank of New York Mellon) is the world&apos;s largest custodian bank
        and securities services company, processing over{" "}
        <span className="text-white font-semibold">
          $2&nbsp;trillion in daily transactions
        </span>
        . As a cornerstone of the global financial system, BNY safeguards and
        services assets for institutions, corporations, and individuals
        worldwide.
      </p>

      {/* Stat Cards Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-[#132038] rounded-lg p-6 hover:bg-[#182844] transition-colors duration-300"
          >
            <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <p
        className="text-gray-400 leading-relaxed max-w-3xl"
      >
        As the backbone of global financial infrastructure, BNY plays a critical
        role in the custody, clearing, and settlement of securities. Protecting
        this vast network from fraud and financial crime is not just a regulatory
        obligation — it is essential to maintaining trust in the global capital
        markets.
      </p>
    </SectionWrapper>
  );
}
