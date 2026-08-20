import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Experience() {
  return (
    <div id="experience" className="space-y-6">
      <div className="flex items-center gap-3 font-mono text-[11px] text-accent tracking-wider uppercase mb-2">
        <span className="text-[#6B7280] font-semibold">03</span>
        <span className="text-[#374151]">/</span>
        <span className="tracking-widest">EXPERIENCE</span>
      </div>

      <h2 className="text-2xl sm:text-4xl font-bold tracking-[-0.02em] text-[#F3F4F6] font-sans uppercase mb-8">
        WHERE I&apos;VE WORKED.
      </h2>

      <div className="space-y-0">
        {PORTFOLIO_DATA.experience.map((item, idx) => (
          <div
            key={idx}
            className="py-5 border-b border-white/[0.04] last:border-b-0"
          >
            <div className="flex items-start justify-between gap-4 mb-1">
              <span className="font-sans font-semibold text-[#F3F4F6] text-sm sm:text-base">{item.role}</span>
              <span className="text-[#4B5563] text-[11px] font-mono shrink-0">{item.period}</span>
            </div>
            <div className="font-mono text-[11px] text-accent mb-3">{item.organization}</div>
            <p className="text-[13px] text-[#6B7280] font-sans leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <p className="font-mono text-[11px] text-[#374151] pt-2">
        More experiences coming soon.
      </p>
    </div>
  );
}
