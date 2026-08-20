"use client";

import { useEffect, useRef, useState } from "react";

interface Node3D {
  id: string;
  label: string;
  sublabel: string;
  sectionId: string;
  x3d: number;
  y3d: number;
  z3d: number;
  x: number;
  y: number;
  radius: number;
}

export function HeroSystemGraph() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeNode, setActiveNode] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 450);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    const rawNodes = [
      { id: "data", label: "DATA", sublabel: "ANALYZE & MODEL", sectionId: "#work", x3d: -0.2, y3d: -0.85, z3d: 0.2 },
      { id: "ai", label: "AI", sublabel: "NEURAL & INFERENCE", sectionId: "#work", x3d: 0.85, y3d: -0.2, z3d: -0.2 },
      { id: "software", label: "SOFTWARE", sublabel: "SYSTEMS & BACKEND", sectionId: "#skills", x3d: 0.2, y3d: 0.85, z3d: 0.3 },
      { id: "product", label: "PRODUCT", sublabel: "UTILITY & USER", sectionId: "#about", x3d: -0.85, y3d: 0.2, z3d: -0.3 },
      { id: "core1", label: "", sublabel: "", sectionId: "", x3d: 0, y3d: 0, z3d: 0.8 },
      { id: "core2", label: "", sublabel: "", sectionId: "", x3d: 0, y3d: 0, z3d: -0.8 },
    ];

    let mouse = { x: width / 2, y: height / 2, targetRotX: 0, targetRotY: 0 };
    let rotX = 0.2;
    let rotY = 0.4;
    let time = 0;

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      const px = clientX - rect.left;
      const py = clientY - rect.top;
      mouse.x = px;
      mouse.y = py;
      mouse.targetRotY = ((px - width / 2) / (width / 2)) * 0.4;
      mouse.targetRotX = -((py - height / 2) / (height / 2)) * 0.4;
    };

    const handleClick = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
      const clientY = "changedTouches" in e ? e.changedTouches[0].clientY : e.clientY;
      const clickX = clientX - rect.left;
      const clickY = clientY - rect.top;

      projectedNodes.forEach((node) => {
        if (!node.label) return;
        const dx = clickX - node.x;
        const dy = clickY - node.y;
        if (Math.sqrt(dx * dx + dy * dy) < node.radius + 15) {
          const el = document.querySelector(node.sectionId);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }
      });
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("click", handleClick);
    canvas.addEventListener("touchstart", handleMouseMove, { passive: true });
    canvas.addEventListener("touchend", handleClick, { passive: true });

    let projectedNodes: Node3D[] = [];

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      rotY += (mouse.targetRotY + Math.sin(time * 0.5) * 0.12 - rotY) * 0.05;
      rotX += (mouse.targetRotX + Math.cos(time * 0.4) * 0.08 - rotX) * 0.05;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      const cx = width / 2;
      const cy = height / 2;
      const scale = Math.min(width, height) * (width < 450 ? 0.38 : 0.42);

      projectedNodes = rawNodes.map((n) => {
        const x1 = n.x3d * cosY - n.z3d * sinY;
        const z1 = n.z3d * cosY + n.x3d * sinY;
        const y2 = n.y3d * cosX - z1 * sinX;
        const z2 = z1 * cosX + n.y3d * sinX;
        const perspective = 1000 / (1000 + z2 * scale * 0.5);
        const px = cx + x1 * scale * perspective;
        const py = cy + y2 * scale * perspective;

        return {
          id: n.id,
          label: n.label,
          sublabel: n.sublabel,
          sectionId: n.sectionId,
          x3d: n.x3d,
          y3d: n.y3d,
          z3d: z2,
          x: px,
          y: py,
          radius: n.label ? (width < 450 ? 16 : 22) : 3,
        };
      });

      let hovered: string | null = null;
      projectedNodes.forEach((node) => {
        if (!node.label) return;
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        if (Math.sqrt(dx * dx + dy * dy) < node.radius + 12) {
          hovered = node.id;
        }
      });
      if (hovered !== activeNode) setActiveNode(hovered);

      const facets = [
        [0, 1, 4], [1, 2, 4], [2, 3, 4], [3, 0, 4],
        [0, 1, 5], [1, 2, 5], [2, 3, 5], [3, 0, 5],
      ];

      facets.forEach(([i, j, k]) => {
        const n1 = projectedNodes[i];
        const n2 = projectedNodes[j];
        const n3 = projectedNodes[k];

        ctx.beginPath();
        ctx.moveTo(n1.x, n1.y);
        ctx.lineTo(n2.x, n2.y);
        ctx.lineTo(n3.x, n3.y);
        ctx.closePath();

        const isFacetActive = activeNode && (n1.id === activeNode || n2.id === activeNode || n3.id === activeNode);

        ctx.fillStyle = isFacetActive ? "rgba(59, 130, 246, 0.08)" : "rgba(59, 130, 246, 0.02)";
        ctx.fill();
        ctx.strokeStyle = isFacetActive ? "rgba(96, 165, 250, 0.3)" : "rgba(255, 255, 255, 0.04)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      const connections: [number, number][] = [
        [0, 1], [1, 2], [2, 3], [3, 0],
        [0, 4], [1, 4], [2, 4], [3, 4],
        [0, 5], [1, 5], [2, 5], [3, 5],
      ];

      connections.forEach(([i, j], edgeIdx) => {
        const n1 = projectedNodes[i];
        const n2 = projectedNodes[j];
        const isHighlighted = activeNode && (n1.id === activeNode || n2.id === activeNode);

        ctx.beginPath();
        ctx.moveTo(n1.x, n1.y);
        ctx.lineTo(n2.x, n2.y);
        ctx.strokeStyle = isHighlighted ? "rgba(96, 165, 250, 0.6)" : "rgba(59, 130, 246, 0.18)";
        ctx.lineWidth = isHighlighted ? 1.5 : 0.8;
        ctx.stroke();

        const particlePos = (time * 0.6 + edgeIdx * 0.18) % 1;
        const px = n1.x + (n2.x - n1.x) * particlePos;
        const py = n1.y + (n2.y - n1.y) * particlePos;

        ctx.beginPath();
        ctx.arc(px, py, isHighlighted ? 2.5 : 1.5, 0, Math.PI * 2);
        ctx.fillStyle = isHighlighted ? "#93c5fd" : "rgba(96, 165, 250, 0.5)";
        ctx.shadowColor = "#3b82f6";
        ctx.shadowBlur = isHighlighted ? 6 : 3;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      projectedNodes.forEach((node) => {
        if (!node.label) return;
        const isHovered = activeNode === node.id;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + (isHovered ? 10 : 5), 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? "rgba(59, 130, 246, 0.15)" : "rgba(59, 130, 246, 0.03)";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? "#0D0F12" : "#08090B";
        ctx.fill();
        ctx.strokeStyle = isHovered ? "#60a5fa" : "#3b82f6";
        ctx.lineWidth = isHovered ? 2 : 1.2;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(node.x, node.y, isHovered ? 4 : 2.5, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? "#93c5fd" : "#3b82f6";
        ctx.fill();

        const fontScale = width < 450 ? "10px" : "11px";
        ctx.font = `600 ${fontScale} 'JetBrains Mono', monospace`;
        ctx.fillStyle = isHovered ? "#93c5fd" : "#D1D5DB";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        let offsetY = node.y > cy ? node.radius + 12 : -(node.radius + 12);
        ctx.fillText(node.label, node.x, node.y + offsetY);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("click", handleClick);
        canvas.removeEventListener("touchstart", handleMouseMove);
        canvas.removeEventListener("touchend", handleClick);
      }
    };
  }, [activeNode]);

  return (
    <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px] flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-pointer relative z-10 touch-none"
      />

      <div className="absolute bottom-2 left-4 font-mono text-[9px] text-[#4B5563] flex items-center gap-2 pointer-events-none z-20">
        <span className="w-1.5 h-1.5 rounded-full bg-accent/60"></span>
        <span>SYSTEM GRAPH / INTERACTIVE</span>
      </div>
    </div>
  );
}
