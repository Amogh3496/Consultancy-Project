// @ts-nocheck
"use client";

import React from "react";

import SectionWrapper from "@/components/layout/SectionWrapper";

const impactLabels = ["Critical", "High", "Medium", "Low", "Minimal"];
const likelihoodLabels = ["Rare", "Unlikely", "Possible", "Likely", "Almost Certain"];

const risks = [
  { name: "Model Bias", impact: 4, likelihood: 2, color: "#EF4444" },
  { name: "Data Breach", impact: 3, likelihood: 1, color: "#F97316" },
  { name: "Integration Delays", impact: 2, likelihood: 3, color: "#EAB308" },
  { name: "Regulatory Changes", impact: 2, likelihood: 2, color: "#EAB308" },
  { name: "Staff Resistance", impact: 1, likelihood: 3, color: "#22C55E" },
  { name: "System Failure", impact: 4, likelihood: 0, color: "#EF4444" },
];

const mitigationRows = [
  {
    risk: "Model Bias",
    severity: "Critical",
    severityClass: "bg-red-900/50 text-red-400",
    likelihood: "Possible",
    mitigation: "Regular bias audits, diverse training data, explainability",
    owner: "Chief AI Officer",
  },
  {
    risk: "Data Breach",
    severity: "High",
    severityClass: "bg-orange-900/50 text-orange-400",
    likelihood: "Unlikely",
    mitigation: "Encryption, access controls, phased migration",
    owner: "CISO",
  },
  {
    risk: "Integration Delays",
    severity: "Medium",
    severityClass: "bg-yellow-900/50 text-yellow-400",
    likelihood: "Likely",
    mitigation: "Modular architecture, parallel workstreams, buffer time",
    owner: "CTO",
  },
  {
    risk: "Regulatory Changes",
    severity: "Medium",
    severityClass: "bg-yellow-900/50 text-yellow-400",
    likelihood: "Possible",
    mitigation: "Monitoring team, flexible architecture, regulator engagement",
    owner: "CCO",
  },
  {
    risk: "Staff Resistance",
    severity: "Low",
    severityClass: "bg-green-900/50 text-green-400",
    likelihood: "Likely",
    mitigation: "Change management, training, stakeholder engagement",
    owner: "CHRO",
  },
  {
    risk: "System Failure",
    severity: "Critical",
    severityClass: "bg-red-900/50 text-red-400",
    likelihood: "Rare",
    mitigation: "Redundancy, disaster recovery, staged rollout",
    owner: "CTO",
  },
];

function getCellColor(row: number, col: number): string {
  // row 0 = Critical (top), row 4 = Minimal (bottom)
  // col 0 = Rare (left), col 4 = Almost Certain (right)
  // Risk level increases with higher impact (lower row index) and higher likelihood (higher col index)
  // We invert row so that Critical=4, Minimal=0 for the sum calculation
  const invertedRow = 4 - row;
  const sum = invertedRow + col;

  if (sum <= 1) return "bg-green-900/60";
  if (sum <= 2) return "bg-green-800/50";
  if (sum <= 3) return "bg-yellow-900/40";
  if (sum <= 4) return "bg-yellow-800/50";
  if (sum <= 5) return "bg-orange-900/50";
  if (sum <= 6) return "bg-orange-800/60";
  return "bg-red-900/60";
}

function getRisksInCell(row: number, col: number) {
  // row 0 = Critical (impact 4), row 1 = High (impact 3), etc.
  const impactIndex = 4 - row;
  return risks.filter((r) => r.impact === impactIndex && r.likelihood === col);
}

export default function RiskAssessment() {
  return (
    <SectionWrapper
      id="risk-assessment"
      number="17"
      title="Risk Assessment"
      dark
      subtitle="Identifying and mitigating key implementation risks"
    >
      <div
      >
        {/* 5x5 Risk Matrix */}
        <div className="flex">
          {/* Y-axis labels */}
          <div className="flex flex-col mr-2 justify-between">
            {impactLabels.map((label) => (
              <div
                key={label}
                className="flex items-center justify-end text-xs text-gray-400 min-h-[50px] pr-1"
              >
                {label}
              </div>
            ))}
          </div>

          {/* Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-5">
              {Array.from({ length: 5 }).map((_, row) =>
                Array.from({ length: 5 }).map((_, col) => {
                  const cellRisks = getRisksInCell(row, col);
                  return (
                    <div
                      key={`${row}-${col}`}
                      className={`relative min-h-[50px] border border-white/10 flex items-center justify-center ${getCellColor(row, col)}`}
                    >
                      {cellRisks.map((risk) => (
                        <div
                          key={risk.name}
                          title={risk.name}
                          className="w-3 h-3 rounded-full absolute"
                        />
                      ))}
                    </div>
                  );
                })
              )}
            </div>

            {/* X-axis labels */}
            <div className="grid grid-cols-5 mt-1">
              {likelihoodLabels.map((label) => (
                <div
                  key={label}
                  className="text-xs text-gray-400 text-center"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Risk Mitigation Table */}
        <div className="mt-12 overflow-x-auto">
          <table className="w-full text-sm text-gray-300">
            <thead>
              <tr className="bg-[#132038]">
                <th className="text-left px-4 py-3 font-semibold">Risk</th>
                <th className="text-left px-4 py-3 font-semibold">Severity</th>
                <th className="text-left px-4 py-3 font-semibold">Likelihood</th>
                <th className="text-left px-4 py-3 font-semibold">Mitigation</th>
                <th className="text-left px-4 py-3 font-semibold">Owner</th>
              </tr>
            </thead>
            <tbody>
              {mitigationRows.map((row, i) => (
                <tr
                  key={row.risk}
                  className={i % 2 === 0 ? "bg-[#0F1D30]" : "bg-[#132038]"}
                >
                  <td className="px-4 py-3 font-medium">{row.risk}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${row.severityClass}`}
                    >
                      {row.severity}
                    </span>
                  </td>
                  <td className="px-4 py-3">{row.likelihood}</td>
                  <td className="px-4 py-3">{row.mitigation}</td>
                  <td className="px-4 py-3">{row.owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SectionWrapper>
  );
}
