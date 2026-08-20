"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Menu, X, Command, ArrowUpRight } from "lucide-react";

export function Navbar({ onOpenCommandMenu }: { onOpenCommandMenu: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "WORK", href: "#work" },
    { label: "ABOUT", href: "#about" },
    { label: "NOW", href: "#now" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#08090B]/90 backdrop-blur-md border-b border-white/[0.06] py-3"
          : "bg-transparent py-4 border-b border-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-3 text-left focus:outline-none touch-target"
          aria-label="Sohham Choudhary Home"
        >
          <span className="font-sans font-bold tracking-tight text-xs text-[#F3F4F6] uppercase group-hover:text-accent transition-colors">
            {PORTFOLIO_DATA.personal.name}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-[11px] text-[#9CA3AF] hover:text-[#F3F4F6] transition-colors tracking-widest uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 text-[10px] font-mono text-[#6B7280]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>Open to opportunities</span>
          </div>

          <button
            onClick={onOpenCommandMenu}
            className="touch-target flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-white/[0.06] hover:border-white/10 text-[#6B7280] hover:text-[#9CA3AF] transition-all font-mono text-[10px]"
            title="Press Cmd+K or Ctrl+K to open menu"
            aria-label="Open Command Palette Menu"
          >
            <Command className="w-3 h-3" />
            <span className="uppercase tracking-wider">K</span>
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenCommandMenu}
            className="touch-target p-2 rounded border border-white/[0.06] text-[#9CA3AF] hover:text-white sm:hidden"
            aria-label="Open Command Menu"
          >
            <Command className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="touch-target p-2.5 rounded border border-white/[0.06] text-[#F3F4F6] hover:text-white transition-colors"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[52px] bottom-0 bg-[#08090B]/98 backdrop-blur-2xl border-b border-white/[0.06] px-6 py-6 overflow-y-auto flex flex-col justify-between z-50">
          <div>
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.06] font-mono text-[10px] text-[#6B7280]">
              <span className="truncate max-w-[200px]">{PORTFOLIO_DATA.personal.institution}</span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold shrink-0">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ONLINE
              </span>
            </div>

            <nav className="flex flex-col gap-0">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="touch-target w-full font-mono text-sm tracking-wider text-[#F3F4F6] hover:text-accent active:text-accent flex items-center justify-between py-3 border-b border-white/[0.04]"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#6B7280]" />
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px]">
            <a
              href={PORTFOLIO_DATA.personal.socials.github}
              target="_blank"
              rel="noreferrer"
              className="touch-target text-[#9CA3AF] hover:text-accent font-medium py-2"
            >
              GitHub ↗
            </a>
            <a
              href={PORTFOLIO_DATA.personal.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="touch-target text-[#9CA3AF] hover:text-accent font-medium py-2"
            >
              LinkedIn ↗
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.socials.email}`}
              className="touch-target text-[#9CA3AF] hover:text-accent font-medium py-2"
            >
              Email ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
