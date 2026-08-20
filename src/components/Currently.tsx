import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Currently() {
  return (
    <div id="now" className="space-y-6">
      <div className="flex items-center gap-3 font-mono text-[11px] text-accent tracking-wider uppercase mb-2">
        <span className="text-[#6B7280] font-semibold">05</span>
        <span className="text-[#374151]">/</span>
        <span className="tracking-widest">NOW</span>
      </div>

      <h2 className="text-2xl sm:text-4xl font-bold tracking-[-0.02em] text-[#F3F4F6] font-sans uppercase mb-6">
        WHAT I&apos;M WORKING TOWARD.
      </h2>

      <div className="space-y-0">
        {PORTFOLIO_DATA.nowFocus.map((item) => (
          <div
            key={item.number}
            className="py-4 border-b border-white/[0.04] last:border-b-0"
          >
            <div className="flex items-start gap-4">
              <span className="font-mono text-[11px] font-semibold text-[#4B5563] w-6 shrink-0 pt-0.5">
                {item.number}
              </span>
              <div className="flex-1">
                <h3 className="font-sans font-semibold text-[#F3F4F6] text-sm tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-[#6B7280] font-sans mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
