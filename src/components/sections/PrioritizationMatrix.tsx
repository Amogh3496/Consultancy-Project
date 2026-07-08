// @ts-nocheck
"use client";

import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from "recharts";
import SectionWrapper from "@/components/layout/SectionWrapper";

const useCases = [
  { name: "Transaction Monitoring", x: 8, y: 9, z: 200 },
  { name: "Network Analysis", x: 5, y: 8, z: 200 },
  { name: "Behavioral Biometrics", x: 6, y: 6, z: 200 },
  { name: "NLP Screening", x: 7, y: 7, z: 200 },
  { name: "Synthetic Identity", x: 4, y: 7, z: 200 },
  { name: "Risk Scoring", x: 8, y: 8, z: 200 },
  { name: "Case Management", x: 7, y: 6, z: 200 },
  { name: "Regulatory Reporting", x: 9, y: 5, z: 200 },
];

interface TooltipPayloadEntry {
  payload: { name: string; x: number; y: number };
}

function CustomTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: TooltipPayloadEntry[];
}) {
  if (!active || !payload || !payload.length) return null;
  const d = payload[0].payload;
  return (
    <div className="rounded-lg bg-[#1a1a2e] border border-white/10 px-4 py-3 text-sm shadow-xl">
      <p className="font-semibold text-white">{d.name}</p>
      <p className="text-gray-400">
        Feasibility: <span className="text-white">{d.x}/10</span>
      </p>
      <p className="text-gray-400">
        Impact: <span className="text-white">{d.y}/10</span>
      </p>
    </div>
  );
}

export default function PrioritizationMatrix() {
  return (
    <SectionWrapper
      id="prioritization"
      number="11"
      title="Opportunity Prioritization Matrix"
      dark
      subtitle="Impact versus feasibility assessment of AI use cases"
    >
      <div className="relative">
        {/* Quadrant Labels */}
        <div className="absolute top-2 left-4 text-sm font-medium text-[#3B6B9B] z-10 pointer-events-none">
          Strategic Bets
        </div>
        <div className="absolute top-2 right-4 text-sm font-medium text-[#C9A84C] z-10 pointer-events-none">
          Quick Wins
        </div>
        <div className="absolute bottom-10 left-4 text-sm font-medium text-gray-500 z-10 pointer-events-none">
          Low Priority
        </div>
        <div className="absolute bottom-10 right-4 text-sm font-medium text-gray-400 z-10 pointer-events-none">
          Easy Gains
        </div>

        {/* Scatter Chart */}
        <ResponsiveContainer width="100%" height={450}>
          <ScatterChart margin={{ top: 30, right: 30, bottom: 30, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
            <XAxis
              dataKey="x"
              name="Feasibility"
              domain={[0, 10]}
              type="number"
              tick={{ fill: "#999" }}
              label={{
                value: "Feasibility →",
                fill: "#999",
                position: "bottom",
              }}
            />
            <YAxis
              dataKey="y"
              name="Impact"
              domain={[0, 10]}
              type="number"
              tick={{ fill: "#999" }}
              label={{
                value: "Impact →",
                fill: "#999",
                angle: -90,
                position: "left",
              }}
            />
            <ZAxis dataKey="z" range={[100, 300]} />
            <ReferenceLine x={5} stroke="#ffffff30" strokeDasharray="3 3" />
            <ReferenceLine y={5} stroke="#ffffff30" strokeDasharray="3 3" />
            <Tooltip content={<CustomTooltip />} />
            <Scatter data={useCases} fill="#C9A84C" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </SectionWrapper>
  );
}
