"use client";

import { useEffect, useRef } from "react";

type GraphCanvasProps = {
  className?: string;
  density?: number;
  interactive?: boolean;
  palette?: string[];
};

type Node = { x: number; y: number; vx: number; vy: number; r: number; color: string; twinkle: number };

const DEFAULT_PALETTE = ["#4cc9ff", "#2ee9ff", "#a78bff", "#8b93ff"];

export function GraphCanvas({ className = "", density = 1, interactive = true, palette = DEFAULT_PALETTE }: GraphCanvasProps) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    const mouse = { x: -9999, y: -9999, active: false };
    let raf = 0;
    const LINK = 118;

    function build() {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const target = Math.round(((width * height) / 15000) * density);
      const count = Math.max(20, Math.min(110, target));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        r: Math.random() * 1.5 + 0.7,
        color: palette[Math.floor(Math.random() * palette.length)],
        twinkle: Math.random() * Math.PI * 2,
      }));
    }

    function frame() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < 0 || a.x > width) a.vx *= -1;
        if (a.y < 0 || a.y > height) a.vy *= -1;

        if (interactive && mouse.active) {
          const dx = a.x - mouse.x;
          const dy = a.y - mouse.y;
          const d = Math.hypot(dx, dy) || 1;
          if (d < 140) {
            const push = (1 - d / 140) * 0.6;
            a.x += (dx / d) * push;
            a.y += (dy / d) * push;
          }
        }

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < LINK) {
            ctx.globalAlpha = (1 - d / LINK) * 0.45;
            ctx.strokeStyle = a.color;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        n.twinkle += 0.02;
        const pulse = 0.7 + Math.sin(n.twinkle) * 0.3;
        ctx.globalAlpha = pulse;
        ctx.fillStyle = n.color;
        ctx.shadowColor = n.color;
        ctx.shadowBlur = 7;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;

      if (interactive && mouse.active) {
        for (const n of nodes) {
          const d = Math.hypot(n.x - mouse.x, n.y - mouse.y);
          if (d < LINK) {
            ctx.globalAlpha = (1 - d / LINK) * 0.5;
            ctx.strokeStyle = n.color;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
        ctx.globalAlpha = 1;
      }

      raf = requestAnimationFrame(frame);
    }

    function start() {
      if (raf) return;
      raf = requestAnimationFrame(frame);
    }
    function stop() {
      cancelAnimationFrame(raf);
      raf = 0;
    }

    build();
    if (reduce) {
      frame();
      stop();
    } else {
      start();
    }

    function onResize() {
      build();
    }
    function onMove(event: PointerEvent) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
      mouse.active = mouse.x >= 0 && mouse.x <= width && mouse.y >= 0 && mouse.y <= height;
    }
    function onLeave() {
      mouse.active = false;
    }

    window.addEventListener("resize", onResize);
    if (interactive && !reduce) {
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerleave", onLeave);
    }

    const io = new IntersectionObserver(([entry]) => {
      if (reduce) return;
      if (entry.isIntersecting) start();
      else stop();
    });
    io.observe(canvas);

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [density, interactive, palette]);

  return <canvas ref={ref} className={className} aria-hidden />;
}
