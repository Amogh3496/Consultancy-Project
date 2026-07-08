// @ts-nocheck
"use client";

import React, { useState, useEffect, useRef } from "react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import SectionWrapper from "@/components/layout/SectionWrapper";

const kpis = [
  { value: "94.5%", label: "Detection Rate", sub: "up from 67%" },
  { value: "42%", label: "False Positive Reduction", sub: "" },
  { value: "38 min", label: "Investigation Time", sub: "down from 4.2 hrs" },
  { value: "$87M", label: "Annual Savings", sub: "" },
];

const trendData = [
  { month: "M0", detection: 67, falsePositive: 95 },
  { month: "M3", detection: 72, falsePositive: 88 },
  { month: "M6", detection: 78, falsePositive: 82 },
  { month: "M9", detection: 84, falsePositive: 74 },
  { month: "M12", detection: 88, falsePositive: 68 },
  { month: "M15", detection: 92, falsePositive: 60 },
  { month: "M18", detection: 94.5, falsePositive: 55 },
];

const savingsData = [
  { category: "False Positive\nReduction", savings: 35 },
  { category: "Fraud\nPrevention", savings: 28 },
  { category: "Regulatory", savings: 15 },
  { category: "Operational", savings: 9 },
];

function parseNumericValue(value: string): { num: number; prefix: string; suffix: string } {
  const match = value.match(/^([^0-9]*)([0-9.]+)(.*)$/);
  if (match) {
    return { prefix: match[1], num: parseFloat(match[2]), suffix: match[3] };
  }
  return { prefix: "", num: 0, suffix: value };
}

function AnimatedKPICard({
  value,
  label,
  sub,
}: {
  value: string;
  label: string;
  sub: string;
}) {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const isInView = true;

  useEffect(() => {
    if (!isInView) return;

    const { prefix, num, suffix } = parseNumericValue(value);
    const duration = 2000;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * num;

      const decimals = num % 1 !== 0 ? 1 : 0;
      setDisplayValue(`${prefix}${current.toFixed(decimals)}${suffix}`);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isInView, value]);

  return (
    <div ref={ref} className="bg-white rounded-lg p-5 text-center border">
      <div className="text-3xl font-bold text-[#C9A84C]">{displayValue}</div>
      <div className="text-sm text-[#6B7280] mt-1">{label}</div>
      {sub && <div className="text-xs text-[#2D8B75] mt-1">{sub}</div>}
    </div>
  );
}

export default function KPIDashboard() {
  return (
    <SectionWrapper
      id="kpi-dashboard"
      number="16"
      title="KPI Dashboard"
      subtitle="Key performance indicators for measuring AI implementation success"
    >
      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <AnimatedKPICard
            key={kpi.label}
            value={kpi.value}
            label={kpi.label}
            sub={kpi.sub}
          />
        ))}
      </div>

      {/* Projected KPI Trends */}
      <h3 className="text-lg font-semibold mt-12 mb-4">Projected KPI Trends</h3>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={trendData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="detection"
            stroke="#2D8B75"
            name="Detection Rate (%)"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="falsePositive"
            stroke="#E67E50"
            name="False Positive Rate (%)"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Cost Savings by Category */}
      <h3 className="text-lg font-semibold mt-12 mb-4">Cost Savings by Category</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={savingsData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="savings" fill="#3B6B9B" />
        </BarChart>
      </ResponsiveContainer>
    </SectionWrapper>
  );
}
