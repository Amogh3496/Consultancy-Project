// @ts-nocheck
"use client";


import SectionWrapper from "@/components/layout/SectionWrapper";

const references = [
  "BNY Mellon Annual Report 2024. Bank of New York Mellon Corporation.",
  'LexisNexis Risk Solutions. "True Cost of Financial Crime Compliance Study — Global Report." 2024.',
  'United Nations Office on Drugs and Crime. "Money Laundering and Globalization."',
  'Association of Certified Anti-Money Laundering Specialists (ACAMS). "State of Financial Crime 2024."',
  'McKinsey & Company. "The Future of Bank Risk Management." 2023.',
  'Deloitte. "AI in Financial Crime: Beyond the Hype." 2024.',
  'Financial Action Task Force (FATF). "Opportunities and Challenges of New Technologies for AML/CFT." 2021.',
  'Board of Governors of the Federal Reserve System. "SR 11-7: Guidance on Model Risk Management."',
  'PwC. "Global Economic Crime and Fraud Survey 2024."',
  'Nasdaq Verafin. "Global Financial Crime Report 2024."',
  'European Banking Authority. "Guidelines on the Use of Machine Learning in AML/CFT." 2023.',
  'Accenture. "Cost of Cybercrime Study: Financial Services." 2023.',
  'World Economic Forum. "Navigating the AI Governance Landscape." 2024.',
  'Basel Committee on Banking Supervision. "Principles for Sound Management of Operational Risk." 2024.',
  'Gartner. "Market Guide for AI in Banking Fraud Detection." 2024.',
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" as any as any },
  },
};

export default function References() {
  return (
    <SectionWrapper
      id="references"
      number="19"
      title="References & Sources"
    >
      <ol
        className="space-y-3 list-none"
      >
        {references.map((ref, index) => (
          <li
            key={index}
            className="text-sm text-[#6B7280] leading-relaxed flex gap-3"
          >
            <span className="font-medium text-[#0A1628] shrink-0">
              {index + 1}.
            </span>
            <span>{ref}</span>
          </li>
        ))}
      </ol>

      {/* Disclaimer */}
      <div
        className="mt-12 bg-[#0A1628] text-white rounded-lg p-6 border border-[#C9A84C]/30"
      >
        <h3 className="font-bold text-lg mb-3">Disclaimer</h3>
        <p className="text-sm text-gray-300 leading-relaxed">
          This document is a hypothetical strategic proposal created exclusively
          for portfolio and demonstration purposes. All analyses, projections,
          and recommendations are based on publicly available information. This
          document does not represent the views, strategies, proprietary data, or
          official positions of BNY (Bank of New York Mellon Corporation) or any
          of its subsidiaries or affiliates. No confidential or proprietary
          information has been used in the preparation of this document.
        </p>
      </div>
    </SectionWrapper>
  );
}
