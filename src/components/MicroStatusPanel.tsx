import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function MicroStatusPanel() {
  const { building, learning, exploring, status } = PORTFOLIO_DATA.personal.currentState;

  return (
    <div className="w-full max-w-sm border border-white/[0.06] p-4 font-mono text-[11px] bg-[#0D0F12]">
      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/[0.06] text-[10px] tracking-widest text-[#6B7280]">
        <span className="flex items-center gap-1.5 font-semibold text-[#9CA3AF]">
          <span className="w-1.5 h-1.5 bg-accent inline-block"></span>
          CURRENT STATE
        </span>
        <span className="text-[#4B5563]">SYS_V2.6</span>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[#6B7280] tracking-wider">BUILDING</span>
          <span className="text-accent font-semibold bg-accent/10 px-2 py-0.5">
            {building}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[#6B7280] tracking-wider">LEARNING</span>
          <span className="text-[#D1D5DB]">{learning}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[#6B7280] tracking-wider">EXPLORING</span>
          <span className="text-[#D1D5DB]">{exploring}</span>
        </div>
      </div>

      <div className="mt-3 pt-2.5 border-t border-white/[0.04] flex items-center justify-between">
        <span className="text-[#4B5563] uppercase tracking-widest text-[10px]">STATUS</span>
        <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          {status}
        </span>
      </div>
    </div>
  );
}
