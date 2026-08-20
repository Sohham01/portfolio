"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function SalesMindAIDemo() {
  const [copied, setCopied] = useState(false);

  const credentials = {
    username: "demo",
    password: "Demo1234!",
  };

  const demoUrl = "https://sales-mind-ai-lemon.vercel.app/";

  const copyCredentials = () => {
    navigator.clipboard.writeText(`${credentials.username} / ${credentials.password}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F3F4F6] font-sans flex items-center justify-center px-6">
      <div className="max-w-md w-full">

        <Link
          href="/projects/salesmindai"
          className="touch-target inline-flex items-center gap-2 font-mono text-[11px] text-[#9CA3AF] hover:text-accent transition-colors py-2 px-3 border border-white/[0.06] hover:border-white/10 mb-10"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-accent" />
          <span>BACK TO CASE STUDY</span>
        </Link>

        <div className="border border-white/[0.06] bg-[#0D0F12] p-8">
          <div className="flex items-center gap-3 font-mono text-[11px] text-[#4B5563] tracking-wider uppercase mb-6">
            <span className="text-accent font-semibold">01</span>
            <span className="text-[#2D3748]">/</span>
            <span>DEMO ACCESS</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-[#F3F4F6] font-sans tracking-[-0.02em] uppercase mb-2">
            SalesMindAI
          </h1>

          <p className="font-mono text-sm text-accent mb-6">
            AI-Powered CRM
          </p>

          <p className="text-[15px] text-[#9CA3AF] font-sans leading-relaxed mb-8">
            Use the credentials below to access the live demo. The application is pre-loaded with sample data.
          </p>

          <div className="space-y-3 mb-8">
            <div className="flex items-center justify-between py-3 px-4 bg-[#12151A] border border-white/[0.04] font-mono">
              <div>
                <span className="text-[10px] text-[#4B5563] uppercase tracking-widest block mb-1">Username</span>
                <span className="text-sm text-[#F3F4F6] font-semibold">{credentials.username}</span>
              </div>
            </div>

            <div className="flex items-center justify-between py-3 px-4 bg-[#12151A] border border-white/[0.04] font-mono">
              <div>
                <span className="text-[10px] text-[#4B5563] uppercase tracking-widest block mb-1">Password</span>
                <span className="text-sm text-[#F3F4F6] font-semibold">{credentials.password}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              className="touch-target px-6 py-3 bg-accent hover:bg-accent-dark active:scale-[0.98] text-white font-semibold font-mono text-[11px] tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <span>CONTINUE TO DEMO</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={copyCredentials}
              className="touch-target px-6 py-3 border border-white/[0.08] hover:border-white/15 text-[#D1D5DB] hover:text-white font-mono text-[11px] tracking-wider transition-all flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY CREDENTIALS</span>
                </>
              )}
            </button>
          </div>

          <p className="mt-6 font-mono text-[10px] text-[#374151] leading-relaxed">
            Demo data is pre-populated. No real customer information is displayed.
          </p>
        </div>

      </div>
    </div>
  );
}
