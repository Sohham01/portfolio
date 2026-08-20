"use client";

import Link from "next/link";
import { Project } from "@/data/portfolio";
import { ArrowUpRight, Github, ExternalLink, FileText } from "lucide-react";
import { SalesMindAIPreview } from "./SalesMindAIPreview";

interface ProjectCardProps {
  project: Project;
  isFeatured?: boolean;
}

export function ProjectCard({ project, isFeatured = false }: ProjectCardProps) {
  if (isFeatured) {
    return (
      <div
        className="w-full border border-white/[0.06] bg-[#0D0F12] p-5 sm:p-8 relative overflow-hidden group mb-10 sm:mb-14"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 sm:pb-5 mb-4 sm:mb-5 border-b border-white/[0.06] font-mono text-[11px]">
          <div className="flex items-center gap-3">
            <span className="text-lg sm:text-xl font-bold text-accent font-mono">{project.number}</span>
            <span className="text-[#374151]">/</span>
            <span className="px-2 py-0.5 bg-accent/10 border border-accent/20 text-accent font-semibold tracking-wider text-[10px] sm:text-[11px]">
              {project.category}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#F3F4F6] font-sans tracking-tight">
                {project.title}
              </h3>

              <p className="mt-2 sm:mt-3 text-sm text-[#D1D5DB] font-sans leading-relaxed">
                {project.tagline}
              </p>

              <p className="mt-2 text-xs text-[#6B7280] font-sans leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.metrics && (
              <div className="mt-5 pt-4 border-t border-white/[0.04] space-y-1.5 font-mono">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="flex items-center justify-between text-[11px]">
                    <span className="text-[#4B5563] uppercase tracking-wider text-[10px]">{m.label}</span>
                    <span className="text-[#D1D5DB] font-medium text-[11px]">{m.value}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 bg-[#12151A] border border-white/[0.04] text-[#9CA3AF] font-mono text-[10px]"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2.5 font-mono text-[11px]">
              {project.caseStudyUrl && (
                <Link
                  href={project.caseStudyUrl}
                  className="touch-target px-4 py-2.5 bg-accent hover:bg-accent-dark active:scale-[0.98] text-white font-semibold transition-all"
                  data-cursor-text="CASE STUDY"
                >
                  <FileText className="w-3.5 h-3.5 mr-1.5 inline-block" />
                  <span>Case Study ↗</span>
                </Link>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="touch-target px-4 py-2.5 border border-white/[0.08] hover:border-white/15 text-[#D1D5DB] hover:text-white transition-all flex items-center gap-1.5"
                  data-cursor-text="LIVE DEMO"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Demo ↗</span>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="touch-target px-4 py-2.5 border border-white/[0.08] hover:border-white/15 text-[#9CA3AF] hover:text-white transition-all flex items-center gap-1.5"
                  data-cursor-text="GITHUB"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub ↗</span>
                </a>
              )}
            </div>
          </div>

          <div className="lg:col-span-7 w-full">
            <SalesMindAIPreview />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="border border-white/[0.06] bg-[#0D0F12] p-5 sm:p-6 flex flex-col justify-between group relative overflow-hidden transition-all duration-200"
      data-cursor-text="VIEW"
    >
      <div>
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06] font-mono text-[11px]">
          <span className="text-base font-bold text-[#4B5563] group-hover:text-accent transition-colors font-mono">
            {project.number}
          </span>
          <span className="px-2 py-0.5 bg-[#12151A] border border-white/[0.04] text-accent font-semibold text-[10px] tracking-wider uppercase">
            {project.category}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-[#F3F4F6] font-sans tracking-tight group-hover:text-accent transition-colors flex items-center justify-between">
          <span>{project.title}</span>
          <ArrowUpRight className="w-4 h-4 text-[#4B5563] group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 ml-2" />
        </h3>

        <p className="mt-1.5 text-xs font-semibold text-[#9CA3AF] font-sans">
          {project.tagline}
        </p>

        <p className="mt-2 text-xs text-[#6B7280] font-sans leading-relaxed">
          {project.description}
        </p>

        {project.metrics && (
          <div className="mt-3 pt-3 border-t border-white/[0.04] space-y-1 font-mono text-[10px]">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <span className="text-[#4B5563]">{m.label}</span>
                <span className="text-[#9CA3AF] font-medium truncate max-w-[160px]">{m.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between font-mono text-[10px] gap-2">
        <div className="flex flex-wrap gap-1 max-w-[75%]">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-1.5 py-0.5 bg-[#12151A] text-[#6B7280]"
            >
              {t}
            </span>
          ))}
        </div>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="touch-target p-2 border border-white/[0.04] hover:border-white/10 text-[#9CA3AF] hover:text-accent transition-colors active:scale-[0.95]"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}
