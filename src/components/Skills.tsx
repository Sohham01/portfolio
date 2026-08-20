import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 relative section-divider">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">

        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 font-mono text-[11px] text-accent tracking-wider uppercase mb-3">
            <span className="text-[#6B7280] font-semibold">04</span>
            <span className="text-[#374151]">/</span>
            <span className="tracking-widest">TOOLBOX</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.02em] text-[#F3F4F6] font-sans uppercase">
            TOOLS &amp; TECHNOLOGIES
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-8 gap-y-10">
          {PORTFOLIO_DATA.skills.map((cluster) => (
            <div key={cluster.title}>
              <h3 className="font-mono text-[10px] text-accent font-semibold tracking-widest uppercase pb-3 border-b border-white/[0.06] mb-4">
                {cluster.title}
              </h3>

              <ul className="space-y-2 font-sans text-[13px] text-[#9CA3AF]">
                {cluster.skills.map((skill) => (
                  <li key={skill} className="hover:text-[#D1D5DB] transition-colors">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
