import React from "react";

interface SectionWrapperProps {
  id: string;
  number?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  noPadding?: boolean;
}

export default function SectionWrapper({
  id,
  number,
  title,
  subtitle,
  children,
  className = "",
  dark = false,
  noPadding = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`${dark ? "bg-[#0A1628] text-white" : "bg-[#F8F7F4]"} ${
        noPadding ? "" : "py-20 md:py-28 lg:py-32"
      } ${className}`}
    >
      <div className={noPadding ? "" : "mx-auto max-w-6xl px-6 md:px-8"}>
        {(number || title) && (
          <div className="mb-12 md:mb-16">
            {number && (
              <span
                className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 ${
                  dark ? "text-[#C9A84C]" : "text-[#3B6B9B]"
                }`}
              >
                Section {number}
              </span>
            )}
            {title && (
              <h2
                className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight tracking-tight ${
                  dark ? "text-white" : "text-[#0A1628]"
                }`}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={`mt-4 text-lg md:text-xl max-w-3xl leading-relaxed ${
                  dark ? "text-gray-300" : "text-[#6B7280]"
                }`}
              >
                {subtitle}
              </p>
            )}
            <div className="accent-line mt-6" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
