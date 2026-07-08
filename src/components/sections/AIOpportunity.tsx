// @ts-nocheck
"use client";

import React from "react";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import SectionWrapper from "@/components/layout/SectionWrapper";

const maturityData = [
  { subject: "Data Infrastructure", current: 2.5, target: 4.5, fullMark: 5 },
  { subject: "Algorithms", current: 2.0, target: 4.5, fullMark: 5 },
  { subject: "Talent & Skills", current: 3.0, target: 4.0, fullMark: 5 },
  { subject: "Governance", current: 3.5, target: 4.5, fullMark: 5 },
  { subject: "Integration", current: 2.0, target: 4.0, fullMark: 5 },
  { subject: "Change Mgmt", current: 2.5, target: 4.0, fullMark: 5 },
];

export default function AIOpportunity() {
  return (
    <SectionWrapper
      id="ai-opportunity"
      number="08"
      title="AI Opportunity Assessment"
      subtitle="Evaluating organizational readiness and identifying capability gaps"
    >
      {/* AI Maturity Assessment */}
      <h3 className="text-xl font-semibold text-[#0A1628] mb-6">
        AI Maturity Assessment
      </h3>

      <ResponsiveContainer width="100%" height={400}>
        <RadarChart data={maturityData}>
          <PolarGrid />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: "#6B7280", fontSize: 12 }}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 5]}
            tick={{ fill: "#999" }}
          />
          <Radar
            name="Current"
            dataKey="current"
            stroke="#3B6B9B"
            fill="#3B6B9B"
            fillOpacity={0.3}
          />
          <Radar
            name="Target"
            dataKey="target"
            stroke="#C9A84C"
            fill="#C9A84C"
            fillOpacity={0.2}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>

      {/* Gap Analysis */}
      <h3 className="text-xl font-semibold text-[#0A1628] mt-12 mb-6">
        Gap Analysis
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={maturityData} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 5]} />
          <YAxis type="category" dataKey="subject" width={120} />
          <Tooltip />
          <Legend />
          <Bar name="Current" dataKey="current" fill="#3B6B9B" />
          <Bar name="Target" dataKey="target" fill="#C9A84C" />
        </BarChart>
      </ResponsiveContainer>

      <p className="text-gray-600 mt-8 leading-relaxed">
        The gap analysis reveals significant opportunities for improvement across
        all AI maturity dimensions. The largest gaps exist in{" "}
        <span className="font-semibold">Data Infrastructure</span>,{" "}
        <span className="font-semibold">Algorithms</span>, and{" "}
        <span className="font-semibold">Integration</span>, each requiring a
        two-point improvement to reach target state. Closing these gaps will
        demand coordinated investment in technology platforms, advanced modeling
        capabilities, and seamless system integration to unlock the full
        potential of AI-driven fraud prevention.
      </p>
    </SectionWrapper>
  );
}
