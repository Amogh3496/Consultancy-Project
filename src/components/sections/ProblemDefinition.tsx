// @ts-nocheck
"use client";


import SectionWrapper from "@/components/layout/SectionWrapper";

const branches = [
  {
    title: "Detection",
    question: "How to improve accuracy?",
    leaves: ["Real-time monitoring", "Pattern recognition", "Anomaly detection"],
  },
  {
    title: "Efficiency",
    question: "How to reduce costs?",
    leaves: [
      "Automate reviews",
      "Reduce false positives",
      "Streamline investigations",
    ],
  },
  {
    title: "Compliance",
    question: "How to strengthen compliance?",
    leaves: ["AML automation", "KYC enhancement", "Regulatory reporting"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, filter: "blur(8px)", scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1, filter: "blur(0px)", scale: 1,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" as any as any },
  }),
};

export default function ProblemDefinition() {
  return (
    <SectionWrapper
      id="problem-definition"
      number="03"
      title="Problem Definition"
      subtitle="Applying structured problem decomposition to financial crime prevention"
    >
      {/* ── Issue Tree ── */}
      <div
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-8">
          Issue Tree{" "}
          <span className="inline-block w-10 h-0.5 bg-[#C9A84C] align-middle ml-2" />
        </h3>

        {/* Root node */}
        <div
          className="bg-white border border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-900 max-w-2xl mx-auto shadow-sm"
        >
          How can BNY leverage AI to reduce financial crime exposure?
        </div>

        {/* Vertical connector from root */}
        <div className="h-8 w-0.5 bg-[#C9A84C] mx-auto" />

        {/* Horizontal connector bar */}
        <div className="hidden md:block h-0.5 bg-[#C9A84C] mx-auto max-w-4xl" />

        {/* Vertical connectors to each branch */}
        <div className="hidden md:grid grid-cols-3 gap-6 max-w-4xl mx-auto">
          {branches.map((b) => (
            <div key={b.title} className="flex justify-center">
              <div className="h-6 w-0.5 bg-[#C9A84C]" />
            </div>
          ))}
        </div>

        {/* Branch cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-0 md:mt-0">
          {branches.map((branch, i) => (
            <div
              key={branch.title}
              className="bg-white border border-gray-200 rounded-lg border-t-2 border-t-[#C9A84C] shadow-sm overflow-hidden"
            >
              <div className="p-5">
                <p className="text-[#C9A84C] font-bold text-lg mb-1">
                  {branch.title}
                </p>
                <p className="text-gray-600 text-sm mb-4 italic">
                  {branch.question}
                </p>
                <ul className="space-y-2">
                  {branch.leaves.map((leaf) => (
                    <li
                      key={leaf}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#C9A84C] shrink-0" />
                      {leaf}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MECE Breakdown ── */}
      <div
        className="mt-16"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          MECE Breakdown{" "}
          <span className="inline-block w-10 h-0.5 bg-[#C9A84C] align-middle ml-2" />
        </h3>
        <p className="text-gray-500 text-sm mb-8 max-w-2xl">
          <span className="font-semibold text-gray-700">
            Mutually Exclusive, Collectively Exhaustive
          </span>{" "}
          — these categories cover the full problem space without overlap.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
          {branches.map((branch, i) => (
            <div
              key={branch.title}
              className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-gray-900 text-lg">
                  {branch.title}
                </p>
                <div className="flex gap-1.5">
                  <span className="text-[10px] font-bold tracking-wider bg-[#C9A84C]/15 text-[#A38530] px-2 py-0.5 rounded">
                    ME
                  </span>
                  <span className="text-[10px] font-bold tracking-wider bg-[#C9A84C]/15 text-[#A38530] px-2 py-0.5 rounded">
                    CE
                  </span>
                </div>
              </div>
              <p className="text-gray-500 text-sm mb-3 italic">
                {branch.question}
              </p>
              <ul className="space-y-1.5">
                {branch.leaves.map((leaf) => (
                  <li
                    key={leaf}
                    className="text-sm text-gray-600 flex items-center gap-2"
                  >
                    <span className="h-1 w-1 rounded-full bg-gray-400 shrink-0" />
                    {leaf}
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
