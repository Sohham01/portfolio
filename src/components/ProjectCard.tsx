"use client";

import Link from "next/link";
import { Project } from "@/data/portfolio";
import { Github, ExternalLink, FileText } from "lucide-react";
import { SalesMindAIPreview } from "./SalesMindAIPreview";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="w-full mb-10 sm:mb-14">
      <div className="flex items-center gap-3 font-mono text-[11px] text-[#4B5563] tracking-wider uppercase mb-8 sm:mb-10">
        <span className="text-accent font-semibold">{project.number}</span>
        <span className="text-[#2D3748]">/</span>
        <span>{project.category}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
        <div className="lg:col-span-5 flex flex-col h-full">
          <div>
            <p className="font-mono text-[10px] text-accent uppercase tracking-widest mb-3 font-semibold">
              {project.tagline}
            </p>

            <h3 className="text-3xl sm:text-4xl font-bold text-[#F3F4F6] font-sans tracking-[-0.02em] uppercase">
              {project.title}
            </h3>

            <p className="mt-4 text-[15px] text-[#9CA3AF] font-sans leading-relaxed max-w-md">
              {project.description}
            </p>
          </div>

          {project.metrics && (
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 font-mono">
              {project.metrics.map((m, idx) => (
                <div key={idx}>
                  <span className="text-[10px] text-[#4B5563] uppercase tracking-widest block mb-1">{m.label}</span>
                  <span className="text-[13px] text-[#D1D5DB] font-medium">{m.value}</span>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 bg-[#12151A] border border-white/[0.04] text-[#9CA3AF] font-mono text-[10px]"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-[11px]">
            {project.caseStudyUrl && (
              <Link
                href={project.caseStudyUrl}
                className="touch-target px-5 py-3 bg-accent hover:bg-accent-dark active:scale-[0.98] text-white font-semibold transition-all"
                data-cursor-text="CASE STUDY"
              >
                <FileText className="w-3.5 h-3.5 mr-1.5 inline-block" />
                <span>View Case Study</span>
              </Link>
            )}

            {project.demoUrl && (
              <Link
                href={project.demoUrl}
                className="touch-target px-5 py-3 border border-white/[0.08] hover:border-white/15 text-[#D1D5DB] hover:text-white transition-all flex items-center gap-2"
                data-cursor-text="LIVE DEMO"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </Link>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="touch-target px-5 py-3 border border-white/[0.08] hover:border-white/15 text-[#9CA3AF] hover:text-white transition-all flex items-center gap-2"
                data-cursor-text="GITHUB"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
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
