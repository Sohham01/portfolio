"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  Sparkles,
  TrendingUp,
  Activity,
} from "lucide-react";

export function SalesMindAIPreview() {
  const [activeView, setActiveView] = useState<"dashboard" | "copilot">("dashboard");

  return (
    <div className="w-full bg-[#08090B] border border-white/[0.08] overflow-hidden font-sans text-[#F3F4F6]">
      <div className="px-3 sm:px-4 py-2 bg-[#0D0F12] border-b border-white/[0.06] flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] text-[#4B5563]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#EF4444]/60 inline-block"></span>
            <span className="w-2 h-2 rounded-full bg-[#EAB308]/60 inline-block"></span>
            <span className="w-2 h-2 rounded-full bg-emerald-500/60 inline-block"></span>
          </div>
          <span className="text-[#374151] text-[10px] ml-1 hidden sm:inline">app.salesmindai.io/dashboard</span>
        </div>

        <div className="flex items-center gap-1.5 px-2 py-0.5 bg-[#12151A] border border-white/[0.04] text-[10px] text-[#9CA3AF]">
          <span className="text-[#4B5563] uppercase text-[9px]">DEMO:</span>
          <span className="font-semibold text-accent">demo</span>
          <span className="text-[#374151]">/</span>
          <span className="font-semibold text-accent">Demo1234!</span>
        </div>
      </div>

      <div className="flex min-h-[300px] sm:min-h-[360px]">
        <div className="w-10 bg-[#0D0F12] border-r border-white/[0.04] flex flex-col items-center py-3 space-y-3 text-[#4B5563] shrink-0">
          <div className="w-6 h-6 rounded bg-accent flex items-center justify-center text-white font-bold text-[9px] font-mono">
            S
          </div>
          <button
            onClick={() => setActiveView("dashboard")}
            className={`p-1.5 transition-colors ${
              activeView === "dashboard" ? "text-accent" : "hover:text-[#9CA3AF]"
            }`}
            title="Dashboard"
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setActiveView("copilot")}
            className={`p-1.5 transition-colors ${
              activeView === "copilot" ? "text-accent" : "hover:text-[#9CA3AF]"
            }`}
            title="AI Copilot"
          >
            <Sparkles className="w-3.5 h-3.5" />
          </button>
          <div className="p-1.5 text-[#2D3748]">
            <Users className="w-3.5 h-3.5" />
          </div>
          <div className="p-1.5 text-[#2D3748]">
            <BarChart3 className="w-3.5 h-3.5" />
          </div>
          <div className="p-1.5 text-[#2D3748]">
            <Settings className="w-3.5 h-3.5" />
          </div>
        </div>

        <div className="flex-1 p-3 sm:p-4 bg-[#08090B] flex flex-col justify-between overflow-x-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-3 font-mono">
            <div className="p-2.5 bg-[#0D0F12] border border-white/[0.04]">
              <span className="text-[8px] sm:text-[9px] text-[#4B5563] uppercase tracking-wider block">Total Customers</span>
              <span className="text-sm sm:text-base font-bold text-[#F3F4F6] mt-0.5 block">2,431</span>
            </div>

            <div className="p-2.5 bg-[#0D0F12] border border-white/[0.04]">
              <span className="text-[8px] sm:text-[9px] text-[#4B5563] uppercase tracking-wider block">Pipeline Value</span>
              <span className="text-sm sm:text-base font-bold text-accent mt-0.5 block">$1.29M</span>
            </div>

            <div className="p-2.5 bg-[#0D0F12] border border-white/[0.04]">
              <span className="text-[8px] sm:text-[9px] text-[#4B5563] uppercase tracking-wider block">Conversion Rate</span>
              <span className="text-sm sm:text-base font-bold text-emerald-400 mt-0.5 block">51.3%</span>
            </div>

            <div className="p-2.5 bg-[#0D0F12] border border-white/[0.04]">
              <span className="text-[8px] sm:text-[9px] text-[#4B5563] uppercase tracking-wider block">AI Suggestions</span>
              <span className="text-sm sm:text-base font-bold text-[#A78BFA] mt-0.5 block">1,203</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-2 flex-1 items-stretch">
            <div className="md:col-span-8 p-3 bg-[#0D0F12] border border-white/[0.04] flex flex-col justify-between">
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.04] font-mono text-[9px]">
                <span className="text-[#D1D5DB] font-semibold uppercase flex items-center gap-1.5">
                  <TrendingUp className="w-3 h-3 text-accent" />
                  REVENUE TRENDS
                </span>
                <span className="text-emerald-400">+24.8% YOY</span>
              </div>

              <div className="h-28 sm:h-32 w-full pt-2 relative">
                <svg viewBox="0 0 400 120" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  <line x1="0" y1="30" x2="400" y2="30" stroke="rgba(255,255,255,0.03)" strokeDasharray="3 3" />
                  <line x1="0" y1="70" x2="400" y2="70" stroke="rgba(255,255,255,0.03)" strokeDasharray="3 3" />

                  <path
                    d="M 0 90 Q 60 75, 120 45 T 240 60 T 360 20 L 400 15 L 400 120 L 0 120 Z"
                    fill="url(#purpleGradient)"
                  />

                  <path
                    d="M 0 90 Q 60 75, 120 45 T 240 60 T 360 20 L 400 15"
                    fill="none"
                    stroke="#a78bfa"
                    strokeWidth="2"
                  />

                  <circle cx="120" cy="45" r="3" fill="#a78bfa" />
                  <circle cx="240" cy="60" r="3" fill="#a78bfa" />
                  <circle cx="400" cy="15" r="3.5" fill="#60a5fa" />
                </svg>
              </div>

              <div className="flex items-center justify-between font-mono text-[8px] text-[#374151] pt-1">
                <span>JAN</span>
                <span>MAR</span>
                <span>MAY</span>
                <span>JUL</span>
                <span>SEP</span>
                <span>NOV</span>
              </div>
            </div>

            <div className="md:col-span-4 p-3 bg-[#0D0F12] border border-white/[0.04] flex flex-col justify-between">
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.04] font-mono text-[9px]">
                <span className="text-[#D1D5DB] font-semibold uppercase flex items-center gap-1.5">
                  <Activity className="w-3 h-3 text-accent" />
                  LEAD HEALTH
                </span>
              </div>

              <div className="flex items-center justify-center py-2 relative">
                <svg viewBox="0 0 100 100" className="w-20 h-20 transform -rotate-90">
                  <circle cx="50" cy="50" r="38" stroke="#3b82f6" strokeWidth="14" strokeDasharray="140 240" fill="none" />
                  <circle cx="50" cy="50" r="38" stroke="#8b5cf6" strokeWidth="14" strokeDasharray="70 240" strokeDashoffset="-145" fill="none" />
                  <circle cx="50" cy="50" r="38" stroke="#334155" strokeWidth="14" strokeDasharray="30 240" strokeDashoffset="-220" fill="none" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center font-mono text-center pointer-events-none">
                  <span className="text-[10px] font-bold text-[#F3F4F6]">84%</span>
                  <span className="text-[7px] text-[#4B5563]">HEALTHY</span>
                </div>
              </div>

              <div className="font-mono text-[8px] space-y-1 text-[#4B5563]">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block"></span>
                    High Propensity
                  </span>
                  <span className="font-semibold text-[#9CA3AF]">58%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 inline-block"></span>
                    Nurture Required
                  </span>
                  <span className="font-semibold text-[#9CA3AF]">26%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 inline-block"></span>
                    Risk Alert
                  </span>
                  <span className="font-semibold text-[#9CA3AF]">16%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
