import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function ProjectShowcase() {
  const featuredProject = PORTFOLIO_DATA.projects.find((p) => p.featured);
  const secondaryProjects = PORTFOLIO_DATA.projects.filter((p) => !p.featured);

  return (
    <section id="work" className="py-20 sm:py-28 relative section-divider">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 font-mono text-[11px] text-accent tracking-wider uppercase mb-3">
              <span className="text-[#6B7280] font-semibold">01</span>
              <span className="text-[#374151]">/</span>
              <span className="tracking-widest">FEATURED PROJECT</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.02em] text-[#F3F4F6] font-sans uppercase">
              THINGS I&apos;VE BUILT.
            </h2>

            <p className="mt-3 text-sm text-[#6B7280] font-sans max-w-xl">
              Projects where software, data and experimentation meet.
            </p>
          </div>

          <a
            href={PORTFOLIO_DATA.personal.socials.github}
            target="_blank"
            rel="noreferrer"
            className="touch-target font-mono text-[11px] text-[#6B7280] hover:text-accent flex items-center gap-1.5 transition-colors uppercase tracking-wider font-semibold"
          >
            <span>VIEW ALL</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {featuredProject && (
          <ProjectCard project={featuredProject} />
        )}

        <div className="mt-8">
          {secondaryProjects.map((project, idx) => (
            <a
              key={project.id}
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-5 sm:gap-8 py-5 sm:py-6 border-b border-white/[0.04] hover:border-white/[0.08] hover:pl-3 transition-all duration-200"
            >
              <span className="font-mono text-sm font-semibold text-[#4B5563] group-hover:text-accent transition-colors w-8 shrink-0">
                {project.number}
              </span>

              <h3 className="text-base sm:text-lg font-semibold text-[#F3F4F6] font-sans tracking-tight group-hover:text-accent transition-colors flex-1">
                {project.title}
              </h3>

              <span className="font-mono text-[11px] text-[#6B7280] tracking-wider uppercase hidden sm:block">
                {project.category}
              </span>

              <ArrowUpRight className="w-4 h-4 text-[#4B5563] group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
