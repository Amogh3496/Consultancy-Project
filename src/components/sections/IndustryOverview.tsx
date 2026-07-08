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
} from "recharts";
import SectionWrapper from "@/components/layout/SectionWrapper";

const stats = [
  { value: "$274B", description: "Global compliance costs annually" },
  { value: "$800B–$2T", description: "Laundered annually worldwide" },
  { value: "$40B+", description: "Fraud losses in 2024" },
  { value: "Only 1%", description: "Of illicit flows intercepted" },
];

const data = [
  { year: "2019", cost: 180 },
  { year: "2020", cost: 213 },
  { year: "2021", cost: 230 },
  { year: "2022", cost: 245 },
  { year: "2023", cost: 261 },
  { year: "2024", cost: 274 },
];

export default function IndustryOverview() {
  return (
    <SectionWrapper
      id="industry-overview"
      number="04"
      title="Industry Overview"
      subtitle="The global financial crime landscape demands urgent transformation"
    >
      {/* 2x2 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        {stats.map((stat) => (
          <div
            key={stat.description}
            className="bg-white border border-gray-200 rounded-lg p-6"
          >
            <p className="text-3xl font-bold text-[#C9A84C] mb-2">
              {stat.value}
            </p>
            <p className="text-sm text-gray-500">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Compliance Cost Growth Chart */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">
          Global Compliance Cost Growth ($ Billions)
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="year" tick={{ fontSize: 13, fill: "#6b7280" }} />
            <YAxis
              tick={{ fontSize: 13, fill: "#6b7280" }}
              tickFormatter={(v: number) => `$${v}B`}
            />
            <Tooltip
              formatter={(value: any) => [`$${value}B`, "Cost"]}
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
              }}
            />
            <Bar dataKey="cost" fill="#3B6B9B" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Source Footnote */}
      <p className="text-xs text-gray-400 italic">
        Sources: LexisNexis Risk Solutions (2024), UNODC, PwC Global Economic
        Crime Survey
      </p>
    </SectionWrapper>
  );
}
