"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorElement = target.closest("[data-cursor-text]") as HTMLElement | null;
      if (cursorElement) {
        setCursorText(cursorElement.getAttribute("data-cursor-text") || "");
        setIsHovered(true);
      } else {
        const interactiveElement = target.closest("a, button, input, [role='button']");
        if (interactiveElement) {
          setCursorText("");
          setIsHovered(true);
        } else {
          setCursorText("");
          setIsHovered(false);
        }
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <div
        className="fixed w-1.5 h-1.5 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />

      <div
        className={`fixed -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-200 flex items-center justify-center font-mono text-[8px] font-bold uppercase tracking-wider text-[#F3F4F6] ${
          isHovered
            ? cursorText
              ? "w-16 h-16 bg-accent/20 border-accent/60 text-white scale-100"
              : "w-8 h-8 bg-accent/10 border-accent/40 scale-100"
            : "w-6 h-6 border-white/10 bg-transparent scale-90"
        }`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      >
        {cursorText && <span className="px-0.5 text-center leading-tight">{cursorText}</span>}
      </div>
    </div>
  );
}
