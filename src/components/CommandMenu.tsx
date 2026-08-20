"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Search, X, ArrowRight, Command, Briefcase, User, Wrench, Clock, Mail, Github, Linkedin, FileText } from "lucide-react";

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandMenu({ isOpen, onClose }: CommandMenuProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const commandItems = [
    {
      id: "work",
      label: "Go to Selected Work",
      category: "Navigation",
      icon: Briefcase,
      action: () => {
        onClose();
        const el = document.querySelector("#work");
        if (el) el.scrollIntoView({ behavior: "smooth" });
        else router.push("/#work");
      },
    },
    {
      id: "case-study",
      label: "View SalesMindAI Case Study",
      category: "Case Study",
      icon: FileText,
      action: () => {
        onClose();
        router.push("/projects/salesmindai");
      },
    },
    {
      id: "about",
      label: "Go to About Section",
      category: "Navigation",
      icon: User,
      action: () => {
        onClose();
        const el = document.querySelector("#about");
        if (el) el.scrollIntoView({ behavior: "smooth" });
        else router.push("/#about");
      },
    },
    {
      id: "skills",
      label: "Go to Technical Toolbox",
      category: "Navigation",
      icon: Wrench,
      action: () => {
        onClose();
        const el = document.querySelector("#skills");
        if (el) el.scrollIntoView({ behavior: "smooth" });
        else router.push("/#skills");
      },
    },
    {
      id: "now",
      label: "Go to Currently Focus Tracks",
      category: "Navigation",
      icon: Clock,
      action: () => {
        onClose();
        const el = document.querySelector("#now");
        if (el) el.scrollIntoView({ behavior: "smooth" });
        else router.push("/#now");
      },
    },
    {
      id: "contact",
      label: "Go to Contact",
      category: "Navigation",
      icon: Mail,
      action: () => {
        onClose();
        const el = document.querySelector("#contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
        else router.push("/#contact");
      },
    },
    {
      id: "github",
      label: "Open GitHub Profile",
      category: "External Link",
      icon: Github,
      action: () => {
        onClose();
        window.open(PORTFOLIO_DATA.personal.socials.github, "_blank");
      },
    },
    {
      id: "linkedin",
      label: "Open LinkedIn Profile",
      category: "External Link",
      icon: Linkedin,
      action: () => {
        onClose();
        window.open(PORTFOLIO_DATA.personal.socials.linkedin, "_blank");
      },
    },
  ];

  const filteredCommands = commandItems.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-all"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-[#0D0F12] border border-white/[0.08] shadow-2xl overflow-hidden font-sans relative max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-3 sm:p-4 border-b border-white/[0.06] flex items-center gap-3 shrink-0">
          <Search className="w-4 h-4 text-[#4B5563] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search commands or sections..."
            autoFocus
            className="w-full bg-transparent text-[#F3F4F6] placeholder-[#4B5563] text-sm font-mono focus:outline-none"
          />
          <button
            onClick={onClose}
            className="touch-target p-1.5 text-[#4B5563] hover:text-[#D1D5DB] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="overflow-y-auto p-2 space-y-0.5 font-mono text-[11px] flex-1">
          {filteredCommands.length === 0 ? (
            <div className="p-6 text-center text-[#4B5563] font-mono text-[11px]">
              No matching commands found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            filteredCommands.map((cmd) => {
              const Icon = cmd.icon;
              return (
                <button
                  key={cmd.id}
                  onClick={cmd.action}
                  className="touch-target w-full px-3 py-2.5 hover:bg-white/[0.03] flex items-center justify-between text-left group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center text-[#4B5563] group-hover:text-accent shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[#D1D5DB] font-medium group-hover:text-[#F3F4F6] block text-[11px] sm:text-xs">
                        {cmd.label}
                      </span>
                      <span className="text-[9px] text-[#374151]">{cmd.category}</span>
                    </div>
                  </div>

                  <ArrowRight className="w-3.5 h-3.5 text-[#374151] group-hover:text-accent group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                </button>
              );
            })
          )}
        </div>

        <div className="px-4 py-2.5 border-t border-white/[0.04] flex items-center justify-between font-mono text-[9px] text-[#374151] shrink-0">
          <div className="flex items-center gap-2">
            <span className="px-1.5 py-0.5 bg-[#12151A] border border-white/[0.04] text-[#6B7280]">
              ESC
            </span>
            <span>to close</span>
          </div>

          <div className="flex items-center gap-1.5 text-[#4B5563]">
            <Command className="w-2.5 h-2.5" />
            <span>COMMAND MENU</span>
          </div>
        </div>
      </div>
    </div>
  );
}
