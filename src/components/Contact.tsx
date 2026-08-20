import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 sm:py-36 relative overflow-hidden section-divider"
    >
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-left">

        <div className="flex items-center gap-3 font-mono text-[11px] text-accent tracking-wider uppercase mb-4">
          <span className="text-[#6B7280] font-semibold">07</span>
          <span className="text-[#374151]">/</span>
          <span className="tracking-widest">CONTACT</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.02em] text-[#F3F4F6] uppercase font-sans leading-[1.1] break-words max-w-3xl">
          HAVE SOMETHING<br />
          WORTH BUILDING?
        </h2>

        <p className="mt-5 text-sm sm:text-base text-[#6B7280] font-sans leading-relaxed max-w-xl">
          I&apos;m interested in ambitious projects, internships, technical challenges and opportunities to learn.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-[11px]">
          <a
            href={`mailto:${PORTFOLIO_DATA.personal.socials.email}`}
            className="touch-target px-5 py-3 bg-accent hover:bg-accent-dark active:scale-[0.98] text-white font-semibold tracking-wider transition-all flex items-center gap-2"
          >
            <span>Email Me</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <a
            href={PORTFOLIO_DATA.personal.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="touch-target px-5 py-3 border border-white/[0.08] hover:border-white/15 active:scale-[0.98] text-[#D1D5DB] hover:text-white tracking-wider transition-all flex items-center gap-2"
          >
            <span>LinkedIn ↗</span>
          </a>

          <a
            href={PORTFOLIO_DATA.personal.socials.github}
            target="_blank"
            rel="noreferrer"
            className="touch-target px-5 py-3 border border-white/[0.08] hover:border-white/15 active:scale-[0.98] text-[#D1D5DB] hover:text-white tracking-wider transition-all flex items-center gap-2"
          >
            <span>GitHub ↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}
