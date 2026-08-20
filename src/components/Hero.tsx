"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { HeroSystemGraph } from "./HeroSystemGraph";
import { MicroStatusPanel } from "./MicroStatusPanel";
import { ArrowDown, Github, ExternalLink } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] pt-24 sm:pt-32 pb-12 sm:pb-16 flex items-center justify-center overflow-hidden section-divider">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          <div className="lg:col-span-7 flex flex-col justify-center text-left">

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-[11px] text-[#6B7280] tracking-widest uppercase mb-4 sm:mb-5">
              <span className="text-accent">{PORTFOLIO_DATA.personal.institution}</span>
              <span className="text-[#374151]">/</span>
              <span>{PORTFOLIO_DATA.personal.degree}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold tracking-[-0.02em] text-[#F3F4F6] uppercase leading-[1.05] font-sans">
              I BUILD WITH<br />
              DATA, AI &<br />
              SOFTWARE.
            </h1>

            <blockquote className="mt-5 sm:mt-6 text-sm sm:text-base text-[#9CA3AF] font-sans leading-relaxed max-w-xl">
              {PORTFOLIO_DATA.personal.bio}
            </blockquote>

            <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="touch-target px-5 sm:px-6 py-3 font-mono text-[11px] uppercase tracking-wider font-semibold text-white bg-accent hover:bg-accent-dark active:scale-[0.98] rounded transition-all"
              >
                <span>Explore Work</span>
                <ArrowDown className="ml-2 w-3.5 h-3.5 inline-block" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.socials.github}
                target="_blank"
                rel="noreferrer"
                className="touch-target px-4 sm:px-5 py-3 font-mono text-[11px] uppercase tracking-wider text-[#9CA3AF] hover:text-[#F3F4F6] active:scale-[0.98] border border-white/[0.08] hover:border-white/15 rounded transition-all flex items-center gap-2"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub ↗</span>
              </a>
            </div>

            <div className="mt-8 sm:mt-10 lg:hidden w-full">
              <MicroStatusPanel />
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center relative w-full">
            <HeroSystemGraph />

            <div className="hidden lg:block w-full mt-4 flex justify-end">
              <MicroStatusPanel />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
