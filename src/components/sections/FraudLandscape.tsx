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
  AreaChart,
  Area,
} from "recharts";
import SectionWrapper from "@/components/layout/SectionWrapper";

const lossData = [
  { year: "2019", losses: 28 },
  { year: "2020", losses: 32 },
  { year: "2021", losses: 35 },
  { year: "2022", losses: 37 },
  { year: "2023", losses: 39 },
  { year: "2024", losses: 42 },
];

const typeData = [
  { type: "Payment Fraud", pct: 32 },
  { type: "Identity Fraud", pct: 24 },
  { type: "Account Takeover", pct: 18 },
  { type: "Money Laundering", pct: 15 },
  { type: "Insider Threats", pct: 7 },
  { type: "Other", pct: 4 },
];

export default function FraudLandscape() {
  return (
    <SectionWrapper
      id="fraud-landscape"
      number="05"
      title="Current Fraud Landscape"
      dark
    >
      {/* Fraud Loss Trends Area Chart */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold text-white mb-6">
          Global Fraud Losses Over Time ($ Billions)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={lossData}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis
              dataKey="year"
              tick={{ fontSize: 13, fill: "#ffffff" }}
              axisLine={{ stroke: "#4b5563" }}
              tickLine={{ stroke: "#4b5563" }}
            />
            <YAxis
              tick={{ fontSize: 13, fill: "#ffffff" }}
              tickFormatter={(v: number) => `$${v}B`}
              axisLine={{ stroke: "#4b5563" }}
              tickLine={{ stroke: "#4b5563" }}
            />
            <Tooltip
              formatter={(value: any) => [`$${value}B`, "Losses"]}
              contentStyle={{
                backgroundColor: "#1f2937",
                border: "1px solid #374151",
                borderRadius: "8px",
                color: "#ffffff",
              }}
              labelStyle={{ color: "#9ca3af" }}
            />
            <Area
              type="monotone"
              dataKey="losses"
              stroke="#C9A84C"
              fill="#C9A84C"
              fillOpacity={0.15}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Fraud Type Distribution */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold text-white mb-6">
          Fraud Type Distribution
        </h3>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart
            data={typeData}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#374151"
              horizontal={false}
            />
            <XAxis
              type="number"
              tick={{ fontSize: 13, fill: "#ffffff" }}
              tickFormatter={(v: number) => `${v}%`}
              axisLine={{ stroke: "#4b5563" }}
              tickLine={{ stroke: "#4b5563" }}
            />
            <YAxis
              type="category"
              dataKey="type"
              tick={{ fontSize: 13, fill: "#ffffff" }}
              width={140}
              axisLine={{ stroke: "#4b5563" }}
              tickLine={{ stroke: "#4b5563" }}
            />
            <Tooltip
              formatter={(value: any) => [`${value}%`, "Share"]}
              contentStyle={{
                backgroundColor: "#1f2937",
                border: "1px solid #374151",
                borderRadius: "8px",
                color: "#ffffff",
              }}
              labelStyle={{ color: "#9ca3af" }}
            />
            <Bar dataKey="pct" fill="#C9A84C" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Callout Box */}
      <div className="border border-[#C9A84C]/30 bg-[#C9A84C]/5 rounded-lg p-6">
        <p className="text-white/90 text-sm leading-relaxed">
          Financial institutions lost{" "}
          <span className="text-[#C9A84C] font-semibold">$42B+</span> in 2024
          to fraud, with payment fraud comprising nearly one-third of all
          losses.
        </p>
      </div>
    </SectionWrapper>
  );
}
