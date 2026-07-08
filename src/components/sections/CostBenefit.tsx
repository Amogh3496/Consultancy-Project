// @ts-nocheck
"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import SectionWrapper from "@/components/layout/SectionWrapper";

const data = [
  { year: "Year 1", cost: 35, benefit: 15 },
  { year: "Year 2", cost: 18, benefit: 55 },
  { year: "Year 3", cost: 12, benefit: 85 },
];

const metrics = [
  { label: "Total Investment", value: "$45–65M" },
  { label: "Annual Savings", value: "$85–120M" },
  { label: "Payback Period", value: "14–18 mo." },
  { label: "3-Year ROI", value: "280–350%" },
];

const investments = [
  { item: "Technology Platform", amount: "$18–25M" },
  { item: "Data Infrastructure", amount: "$8–12M" },
  { item: "Talent & Training", amount: "$6–10M" },
  { item: "Integration & Testing", amount: "$5–8M" },
  { item: "Change Management", amount: "$4–6M" },
  { item: "Ongoing Operations", amount: "$4M/year" },
];

const benefits = [
  { item: "False Positive Reduction", amount: "$30–40M/yr" },
  { item: "Fraud Loss Prevention", amount: "$25–35M/yr" },
  { item: "Regulatory Fine Avoidance", amount: "$15–25M/yr" },
  { item: "Operational Efficiency", amount: "$15–20M/yr" },
];

export default function CostBenefit() {
  return (
    <SectionWrapper
      id="cost-benefit"
      number="10"
      title="Cost–Benefit Analysis"
      subtitle="Projected financial impact over a 36-month implementation horizon"
    >
      {/* Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <div key={m.label} className="bg-white rounded-lg p-5 text-center">
            <div className="text-2xl font-bold text-[#C9A84C]">{m.value}</div>
            <div className="text-sm text-[#6B7280]">{m.label}</div>
          </div>
        ))}
      </div>

      {/* Bar Chart */}
      <div className="mt-8">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="cost" fill="#E67E50" name="Investment ($M)" />
            <Bar dataKey="benefit" fill="#2D8B75" name="Returns ($M)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Breakdown Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Investment Breakdown */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Investment Breakdown</h3>
          <ul className="space-y-2">
            {investments.map((i) => (
              <li key={i.item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#E67E50] shrink-0" />
                <span>
                  {i.item}{" "}
                  <span className="font-semibold">{i.amount}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Projected Benefits */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Projected Benefits</h3>
          <ul className="space-y-2">
            {benefits.map((b) => (
              <li key={b.item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#2D8B75] shrink-0" />
                <span>
                  {b.item}{" "}
                  <span className="font-semibold">{b.amount}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
