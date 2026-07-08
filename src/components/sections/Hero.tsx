// @ts-nocheck
"use client";


import { ChevronDown } from "lucide-react";

const stats = [
  { value: "$48.8T", label: "Assets Under Management" },
  { value: "35+", label: "Countries" },
  { value: "50,000+", label: "Employees" },
];

const fadeUp = {
  hidden: { opacity: 0, filter: "blur(8px)", scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1, filter: "blur(0px)", scale: 1,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as any as any },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-[#0A1628]"
    >
      {/* Grid-pattern overlay */}
      <div className="grid-pattern absolute inset-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
        >
          Strategic AI-Driven Fraud Detection &amp; Financial Crime Prevention
        </h1>

        <p
          className="text-xl text-[#C9A84C] mt-4"
        >
          A Consulting Roadmap for BNY
        </p>

        <p
          className="text-sm text-gray-400 mt-6"
        >
          Prepared by <button onClick={() => { const el = document.getElementById('footer'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white hover:underline transition-colors cursor-pointer">Student Research Team</button> | July 2025
        </p>

        <span
          className="text-xs text-gray-500 mt-2 border border-gray-700 px-4 py-1.5 rounded inline-block"
        >
          Hypothetical Proposal — For Portfolio Purposes Only
        </span>

        {/* Stat cards */}
        <div
          className="flex flex-wrap justify-center gap-8 mt-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">
                {stat.value}
              </p>
              <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 z-10"
      >
        <ChevronDown className="w-6 h-6 text-gray-500" />
      </div>
    </section>
  );
}
