import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";

export function BuildLog() {
  const { buildLogData } = PORTFOLIO_DATA;

  const contributionGrid = Array.from({ length: 48 }, (_, i) => {
    const level = (i * 7 + 3) % 5;
    return level;
  });

  return (
    <section className="py-20 sm:py-28 relative section-divider bg-[#0D0F12]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">

        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 font-mono text-[11px] text-accent tracking-wider uppercase mb-3">
            <span className="text-[#6B7280] font-semibold">06</span>
            <span className="text-[#374151]">/</span>
            <span className="tracking-widest">BUILD LOG</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.02em] text-[#F3F4F6] font-sans uppercase">
            ALWAYS BUILDING SOMETHING.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          <div className="lg:col-span-5 space-y-5 font-mono text-[11px]">
            <div className="pb-4 border-b border-white/[0.04]">
              <span className="text-[#4B5563] block mb-1.5 font-semibold uppercase tracking-wider text-[10px]">Latest Project</span>
              <span className="text-[#F3F4F6] font-semibold text-sm font-sans block">
                {buildLogData.latestProject.name}
              </span>
              <span className="text-[#6B7280] text-xs font-sans">
                {buildLogData.latestProject.desc}
              </span>
            </div>

            <div className="pb-4 border-b border-white/[0.04]">
              <span className="text-[#4B5563] block mb-1.5 font-semibold uppercase tracking-wider text-[10px]">Current Experiment</span>
              <span className="text-[#F3F4F6] font-semibold text-sm font-sans block">
                {buildLogData.currentExperiment.name}
              </span>
              <span className="text-[#6B7280] text-xs font-sans">
                {buildLogData.currentExperiment.desc}
              </span>
            </div>

            <div className="pb-4 border-b border-white/[0.04]">
              <span className="text-[#4B5563] block mb-1.5 font-semibold uppercase tracking-wider text-[10px]">Currently Learning</span>
              <span className="text-[#F3F4F6] font-semibold text-sm font-sans block">
                {buildLogData.currentlyLearning.name}
              </span>
            </div>

            <div>
              <span className="text-[#4B5563] block mb-1.5 font-semibold uppercase tracking-wider text-[10px]">Latest Repository</span>
              <a
                href={buildLogData.latestRepository.url}
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:text-accent-light font-mono text-xs break-all inline-block transition-colors"
              >
                {buildLogData.latestRepository.name}
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 border border-white/[0.06] bg-[#08090B] p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] font-mono text-[11px] mb-4">
                <span className="text-[#D1D5DB] font-semibold uppercase tracking-wider">Contributions</span>
                <span className="text-[#4B5563]">{buildLogData.year}</span>
              </div>

              <div className="flex items-center justify-between font-mono text-[9px] text-[#4B5563] mb-2 px-1">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>

              <div className="grid grid-cols-12 gap-1 py-1">
                {contributionGrid.map((lvl, idx) => (
                  <div
                    key={idx}
                    className={`h-3.5 ${
                      lvl === 4
                        ? "bg-emerald-400/80"
                        : lvl === 3
                        ? "bg-emerald-600/70"
                        : lvl === 2
                        ? "bg-emerald-800/50"
                        : lvl === 1
                        ? "bg-emerald-950/60"
                        : "bg-[#12151A]"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px]">
              <div>
                <span className="text-[#4B5563] text-[10px] uppercase block">Total contributions</span>
                <span className="text-base font-bold text-[#F3F4F6]">{buildLogData.totalContributions.toLocaleString()}</span>
              </div>

              <a
                href={PORTFOLIO_DATA.personal.socials.github}
                target="_blank"
                rel="noreferrer"
                className="touch-target px-4 py-2 border border-white/[0.06] hover:border-white/10 text-[#D1D5DB] hover:text-white transition-all font-mono text-[11px] flex items-center gap-2"
              >
                <span>View GitHub Profile</span>
                <ArrowRight className="w-3 h-3 text-[#4B5563]" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
