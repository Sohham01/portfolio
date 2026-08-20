"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 bg-[#08090B] border-t border-white/[0.04] font-mono text-[11px] text-[#4B5563]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-sans font-semibold text-xs tracking-tight text-[#D1D5DB] uppercase block">
            {PORTFOLIO_DATA.personal.name}
          </span>
        </div>

        <div className="text-[#374151] font-mono text-[10px] tracking-widest uppercase">
          DATA × AI × SOFTWARE
        </div>

        <div className="flex items-center gap-4">
          <span>© 2026</span>

          <button
            onClick={scrollToTop}
            className="touch-target p-2 border border-white/[0.04] hover:border-white/10 text-[#4B5563] hover:text-[#D1D5DB] transition-colors"
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
