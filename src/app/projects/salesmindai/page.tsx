"use client";

import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { SalesMindAIPreview } from "@/components/SalesMindAIPreview";

export default function SalesMindAICaseStudy() {
  const featureBullets = [
    "customer management",
    "task & activity tracking",
    "AI lead scoring",
    "analytics dashboard",
    "follow-up email generation",
    "data import/export",
  ];

  const archNodes = [
    { title: "React", subtitle: "UI & State" },
    { title: "FastAPI", subtitle: "REST API & Auth" },
    { title: "PostgreSQL", subtitle: "Relational DB" },
    { title: "AI Providers", subtitle: "LLM Fallback" },
    { title: "Tailwind CSS", subtitle: "Design System" },
  ];

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F3F4F6] font-sans pt-20 sm:pt-24 pb-16 sm:pb-20">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 mb-6 sm:mb-8">
        <Link
          href="/"
          className="touch-target inline-flex items-center gap-2 font-mono text-[11px] text-[#9CA3AF] hover:text-accent transition-colors py-2 px-3 border border-white/[0.06] hover:border-white/10"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-accent" />
          <span>BACK TO WORK</span>
        </Link>
      </div>

      <article className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12 mb-12 border-b border-white/[0.06]">

          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3 font-mono text-[11px] text-accent uppercase tracking-widest">
              <span className="text-[#6B7280] font-semibold">01</span>
              <span className="text-[#374151]">/</span>
              <span className="tracking-widest">SALESMINDAI</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-[-0.02em] text-[#F3F4F6] font-sans uppercase">
              SalesMindAI
            </h1>

            <p className="font-mono text-sm font-semibold text-accent">
              AI-Powered CRM
            </p>

            <p className="text-xs sm:text-sm text-[#9CA3AF] font-sans leading-relaxed">
              A full-stack CRM that centralizes customer data, automates workflows and provides AI-powered insights to help teams sell smarter.
            </p>

            <div className="py-2 space-y-2 font-mono text-[11px] text-[#D1D5DB]">
              {featureBullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-2.5 font-mono text-[11px]">
              <a
                href="/projects/salesmindai/demo"
                className="touch-target px-5 py-2.5 bg-accent hover:bg-accent-dark active:scale-[0.98] text-white font-semibold transition-all flex items-center gap-2"
              >
                <span>Live Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://github.com/Sohham01/SalesMindAI"
                target="_blank"
                rel="noreferrer"
                className="touch-target px-4 py-2.5 border border-white/[0.08] hover:border-white/15 text-[#D1D5DB] hover:text-white transition-all flex items-center gap-2"
              >
                <span>GitHub</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#4B5563]" />
              </a>
            </div>

            <div className="mt-4 flex items-center gap-2 font-mono text-[10px]">
              <a href="/projects/salesmindai/demo" className="text-accent hover:text-accent-light uppercase tracking-wider transition-colors">
                Demo access available
              </a>
              <span className="text-[#2D3748]">→</span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <SalesMindAIPreview />
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 sm:mb-16">
          <div className="border border-white/[0.06] bg-[#0D0F12] p-6 space-y-3">
            <h2 className="font-mono text-[10px] text-accent font-semibold tracking-widest uppercase">THE PROBLEM</h2>
            <p className="text-xs sm:text-sm text-[#9CA3AF] font-sans leading-relaxed">
              Sales information is often fragmented across customers, tasks, notes and activities, making it hard to get a clear picture and take action.
            </p>
          </div>

          <div className="border border-white/[0.06] bg-[#0D0F12] p-6 space-y-3">
            <h2 className="font-mono text-[10px] text-accent font-semibold tracking-widest uppercase">THE APPROACH</h2>
            <p className="text-xs sm:text-sm text-[#9CA3AF] font-sans leading-relaxed">
              Build a centralized CRM with analytics and AI-assisted workflows to help teams focus on what matters most.
            </p>
          </div>
        </div>

        <section className="mb-12 sm:mb-16">
          <h2 className="font-mono text-[10px] text-accent font-semibold tracking-widest uppercase mb-6">ARCHITECTURE</h2>

          <div className="border border-white/[0.06] bg-[#0D0F12] p-6 font-mono text-[11px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-center">
              {archNodes.map((node, idx) => (
                <div key={node.title} className="flex items-center gap-2">
                  <div className="w-full p-3 bg-[#12151A] border border-white/[0.04] text-center flex flex-col items-center justify-center">
                    <span className="font-semibold text-[#F3F4F6] text-xs">{node.title}</span>
                    <span className="text-[9px] text-[#4B5563] mt-0.5">{node.subtitle}</span>
                  </div>

                  {idx < archNodes.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-[#374151] hidden lg:block shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

      </article>
    </div>
  );
}
