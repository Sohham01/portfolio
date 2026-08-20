import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { Gamepad2, Film, Dumbbell, Terminal } from "lucide-react";

export function OutsideTerminal() {
  const iconMap = [Gamepad2, Film, Dumbbell, Terminal];

  return (
    <section className="py-20 sm:py-28 relative border-b border-white/5 bg-[#07090f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          number="05.B"
          category="PERSONALITY"
          title="OUTSIDE THE TERMINAL."
          subtitle="Interests, disciplines, and perspectives beyond code."
        />

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.personality.map((item, idx) => {
            const Icon = iconMap[idx] || Terminal;
            return (
              <div
                key={item.title}
                className="glass-panel p-6 rounded-xl border border-white/10 glass-panel-hover flex flex-col justify-between group"
                data-cursor-text="INTEREST"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-accent mb-4 group-hover:border-accent/40 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 font-sans tracking-tight mb-1 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>

                  <p className="font-mono text-[11px] text-accent font-semibold mb-3">
                    {item.subtitle}
                  </p>

                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-500 flex items-center justify-between">
                  <span>DISCIPLINE</span>
                  <span>0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
