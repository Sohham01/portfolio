import React from "react";

interface SectionHeaderProps {
  number: string;
  category: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({
  number,
  category,
  title,
  subtitle,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 sm:mb-16 ${className}`}>
      {/* Monospace Metadata Tag */}
      <div className="flex items-center gap-3 font-mono text-xs text-accent tracking-wider uppercase mb-3">
        <span className="text-slate-400 font-semibold">{number}</span>
        <span className="text-slate-600">/</span>
        <span className="tracking-widest">{category}</span>
        <span className="h-[1px] w-12 bg-accent/30 inline-block ml-2"></span>
      </div>

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100 font-sans uppercase">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl font-sans font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
