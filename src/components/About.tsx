import { PORTFOLIO_DATA } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 relative section-divider bg-[#0D0F12]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">

        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 font-mono text-[11px] text-accent tracking-wider uppercase mb-3">
            <span className="text-[#6B7280] font-semibold">02</span>
            <span className="text-[#374151]">/</span>
            <span className="tracking-widest">ABOUT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.02em] text-[#F3F4F6] font-sans uppercase">
            I LIKE TURNING<br className="hidden sm:block" /> PROBLEMS INTO SYSTEMS.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">

          <div className="lg:col-span-6 space-y-5 text-[#9CA3AF] font-sans text-[15px] leading-relaxed">
            {PORTFOLIO_DATA.personal.aboutLong.map((paragraph, idx) => (
              <p key={idx} className={idx === 0 ? "text-[#D1D5DB] font-medium" : "text-[#9CA3AF]"}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="lg:col-span-6 space-y-0">
            {PORTFOLIO_DATA.pillars.map((pillar) => (
              <div
                key={pillar.code}
                className="py-4 border-b border-white/[0.04] last:border-b-0"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[11px] font-semibold text-accent tracking-wider w-24 shrink-0">
                    {pillar.title}
                  </span>
                  <span className="font-mono text-[11px] text-[#4B5563]">
                    {pillar.step}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

        <div className="border border-white/[0.06] p-5 sm:p-6 bg-[#08090B] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] text-[#9CA3AF]">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <span className="text-[#4B5563] uppercase font-semibold tracking-wider">EDUCATION</span>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <span className="font-semibold text-[#F3F4F6] text-sm font-sans">{PORTFOLIO_DATA.personal.degree}</span>
              <span className="text-[#374151] hidden sm:inline">·</span>
              <span className="text-[#6B7280] font-sans">{PORTFOLIO_DATA.personal.institution}</span>
            </div>
          </div>

          <span className="text-accent font-semibold tracking-wider shrink-0">{PORTFOLIO_DATA.personal.period}</span>
        </div>

      </div>
    </section>
  );
}
