"use client";

import { useCallback, useEffect, useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";
import type { GithubWeek } from "@/types/github";

const staticData = PORTFOLIO_DATA.buildLogData;
const GITHUB_PROFILE_URL = PORTFOLIO_DATA.personal.socials.github;

const MONTHS = [
  "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",
];

const LEVEL_CLASS: Record<number, string> = {
  0: "bg-[#12151A]",
  1: "bg-emerald-950/70",
  2: "bg-emerald-800/50",
  3: "bg-emerald-600/70",
  4: "bg-emerald-400/80",
};

function fallbackGrid(): { level: number; days: number }[] {
  return Array.from({ length: 48 }, (_, i) => {
    const level = (i * 7 + 3) % 5;
    return { level, days: 0 };
  });
}

function weekMonthLabel(week: GithubWeek): string {
  if (!week.days.length) return "";
  return MONTHS[new Date(week.days[0].date).getMonth()];
}

export function BuildLog() {
  const [live, setLive] = useState<{
    date: string;
    year: number;
    totalContributions: number;
    weeks: GithubWeek[];
    latestRepository: { name: string; desc: string; url: string } | null;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/github", { next: { revalidate: 300 } });
        const data = await res.json();
        if (cancelled) return;

        if (!res.ok || data.error) {
          setError(true);
          setLoading(false);
          return;
        }

        setLive({
          date: data.date,
          year: data.year,
          totalContributions: data.totalContributions,
          weeks: data.weeks,
          latestRepository: data.latestRepository,
        });
        setError(false);
        setLoading(false);
      } catch {
        if (cancelled) return;
        setError(true);
        setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const date = live?.date ?? staticData.date;
  const year = live?.year ?? staticData.year;
  const totalContributions = live?.totalContributions ?? staticData.totalContributions;
  const latestRepository = live?.latestRepository ?? {
    name: staticData.latestRepository.name,
    desc: "",
    url: staticData.latestRepository.url,
  };

  const weeks = live?.weeks ?? [];
  const contributionGrid = live?.weeks.length
    ? null
    : fallbackGrid();

  const monthLabels = useCallback(() => {
    if (!weeks.length) return [];
    const labels: { index: number; label: string }[] = [];
    weeks.forEach((week, i) => {
      const label = weekMonthLabel(week);
      const prev = i > 0 ? weekMonthLabel(weeks[i - 1]) : null;
      if (label && label !== prev) labels.push({ index: i, label });
    });
    return labels;
  }, [weeks]);

  return (
    <section className="py-20 sm:py-28 relative section-divider bg-[#0D0F12]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">

        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 font-mono text-[11px] text-accent tracking-wider uppercase mb-3">
            <span className="text-[#6B7280] font-semibold">06</span>
            <span className="text-[#374151]">/</span>
            <span className="tracking-widest">BUILD LOG</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.02em] text-[#F3F4F6] font-sans uppercase">
            ALWAYS BUILDING SOMETHING.
          </h2>

          <div className="mt-3 font-mono text-[10px] text-[#4B5563] uppercase tracking-widest">
            {date}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          <div className="lg:col-span-5 space-y-5 font-mono text-[11px]">
            <div className="pb-5 border-b border-white/[0.04]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#4B5563] font-semibold uppercase tracking-wider text-[10px]">Building</span>
                {staticData.latestProject.status === "active" && (
                  <span className="flex items-center gap-1.5 text-emerald-400 text-[10px] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    ACTIVE
                  </span>
                )}
              </div>
              <span className="text-[#F3F4F6] font-semibold text-sm font-sans block">
                {staticData.latestProject.name}
              </span>
              <span className="text-[#6B7280] text-xs font-sans">
                {staticData.latestProject.desc}
              </span>
            </div>

            <div className="pb-5 border-b border-white/[0.04]">
              <span className="text-[#4B5563] block mb-2 font-semibold uppercase tracking-wider text-[10px]">Experimenting</span>
              <span className="text-[#F3F4F6] font-semibold text-sm font-sans block">
                {staticData.currentExperiment.name}
              </span>
              <span className="text-[#6B7280] text-xs font-sans">
                {staticData.currentExperiment.desc}
              </span>
            </div>

            <div className="pb-5 border-b border-white/[0.04]">
              <span className="text-[#4B5563] block mb-2 font-semibold uppercase tracking-wider text-[10px]">Learning</span>
              <span className="text-[#F3F4F6] font-semibold text-sm font-sans block">
                {staticData.currentlyLearning.name}
              </span>
            </div>

            <div>
              <span className="text-[#4B5563] block mb-2 font-semibold uppercase tracking-wider text-[10px]">Latest Repository</span>
              <a
                href={latestRepository.url}
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:text-accent-light font-mono text-xs break-all inline-block transition-colors"
              >
                {latestRepository.name}
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 border border-white/[0.06] bg-[#08090B] p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] font-mono text-[11px] mb-4">
                <span className="text-[#D1D5DB] font-semibold uppercase tracking-wider">Contributions</span>
                <span className="text-[#4B5563]">{year}</span>
              </div>

              {loading ? (
                <div className="h-28 flex items-center justify-center">
                  <span className="font-mono text-[10px] text-[#4B5563] uppercase tracking-widest animate-pulse">
                    Syncing with GitHub…
                  </span>
                </div>
              ) : contributionGrid ? (
                <>
                  <div className="flex items-center justify-between font-mono text-[9px] text-[#4B5563] mb-2 px-1">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>

                  <div className="grid grid-cols-12 gap-1 py-1">
                    {contributionGrid.map(({ level }, idx) => (
                      <div
                        key={idx}
                        className={`h-3.5 ${LEVEL_CLASS[level]}`}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className="relative font-mono text-[9px] text-[#4B5563] mb-2 h-3">
                    {monthLabels().map(({ index, label }) => (
                      <span
                        key={index}
                        className="absolute top-0"
                        style={{ left: `${(index / weeks.length) * 100}%` }}
                      >
                        {label}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-[3px] overflow-x-auto pb-1">
                    {weeks.map((week, wi) => (
                      <div key={wi} className="flex flex-col gap-[3px]">
                        {week.days.map((day, di) => (
                          <div
                            key={di}
                            title={`${day.date}: ${day.count} contribution${day.count === 1 ? "" : "s"}`}
                            className={`h-[10px] w-[10px] sm:h-[12px] sm:w-[12px] rounded-[2px] ${LEVEL_CLASS[day.level]}`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>

                  {error && (
                    <div className="mt-2 font-mono text-[9px] text-[#6B7280] uppercase tracking-wider">
                      Showing cached GitHub data
                    </div>
                  )}
                </>
              )}
            </div>

            <div className="mt-5 pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px]">
              <div>
                <span className="text-[#4B5563] text-[10px] uppercase block">Total contributions</span>
                <span className="text-base font-bold text-[#F3F4F6]">{totalContributions.toLocaleString()}</span>
              </div>

              <a
                href={GITHUB_PROFILE_URL}
                target="_blank"
                rel="noreferrer"
                className="touch-target px-4 py-2 border border-white/[0.06] hover:border-white/10 text-[#D1D5DB] hover:text-white transition-all font-mono text-[11px] flex items-center gap-2"
              >
                <span>View GitHub Profile</span>
                <ArrowRight className="w-3 h-3 text-[#4B5563]" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}