"use client";

import { useEffect, useRef } from "react";

type GalaxyCanvasProps = {
  className?: string;
  density?: number;
  interactive?: boolean;
};

type Particle = {
  cx: number;
  cy: number;
  angle: number;
  radius: number;
  speed: number;
  size: number;
  alpha: number;
  hue: number;
};

const PALETTE_HUES = [190, 200, 210, 220];
const CONNECTION_DIST = 108;
const MOUSE_RADIUS = 130;

export function GalaxyCanvas({ className = "", density = 1, interactive = true }: GalaxyCanvasProps) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const el: HTMLCanvasElement = canvas;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    const mouse = { x: -9999, y: -9999, active: false };
    let raf = 0;
    let time = 0;

    function build() {
      const rect = el.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      el.width = Math.max(1, Math.floor(width * dpr));
      el.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const clusterCount = 4;
      const perCluster = Math.round(14 * density);
      const freeCount = Math.round(10 * density);

      const clusters: { x: number; y: number }[] = [
        { x: width * 0.22, y: height * 0.28 },
        { x: width * 0.58, y: height * 0.22 },
        { x: width * 0.38, y: height * 0.62 },
        { x: width * 0.76, y: height * 0.55 },
      ];

      particles = [];

      for (let c = 0; c < clusterCount; c++) {
        const cl = clusters[c];
        for (let i = 0; i < perCluster; i++) {
          const angle = Math.random() * Math.PI * 2;
          const baseRadius = 14 + Math.random() * 62;
          particles.push({
            cx: cl.x,
            cy: cl.y,
            angle,
            radius: baseRadius,
            speed: (0.0003 + Math.random() * 0.0008) * (Math.random() > 0.5 ? 1 : -1),
            size: 0.6 + Math.random() * 2.2,
            alpha: 0.25 + Math.random() * 0.55,
            hue: PALETTE_HUES[Math.floor(Math.random() * PALETTE_HUES.length)],
          });
        }
      }

      for (let i = 0; i < freeCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 30 + Math.random() * 160;
        particles.push({
          cx: width * (0.15 + Math.random() * 0.7),
          cy: height * (0.15 + Math.random() * 0.7),
          angle,
          radius,
          speed: (0.0002 + Math.random() * 0.0006) * (Math.random() > 0.5 ? 1 : -1),
          size: 0.4 + Math.random() * 1.2,
          alpha: 0.12 + Math.random() * 0.3,
          hue: PALETTE_HUES[Math.floor(Math.random() * PALETTE_HUES.length)],
        });
      }
    }

    function position(p: Particle): { x: number; y: number } {
      return {
        x: p.cx + Math.cos(p.angle) * p.radius,
        y: p.cy + Math.sin(p.angle) * p.radius,
      };
    }

    function frame() {
      ctx.clearRect(0, 0, width, height);
      const positions: { x: number; y: number }[] = [];

      for (const p of particles) {
        p.angle += p.speed;
        if (interactive && mouse.active) {
          const pos = position(p);
          const dx = pos.x - mouse.x;
          const dy = pos.y - mouse.y;
          const d = Math.hypot(dx, dy) || 1;
          if (d < MOUSE_RADIUS) {
            const push = (1 - d / MOUSE_RADIUS) * 1.2;
            p.cx += (dx / d) * push * 0.3;
            p.cy += (dy / d) * push * 0.3;
          }
        }
        positions.push(position(p));
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = positions[i].x - positions[j].x;
          const dy = positions[i].y - positions[j].y;
          const d = Math.hypot(dx, dy);
          if (d < CONNECTION_DIST) {
            const strength = 1 - d / CONNECTION_DIST;
            ctx.globalAlpha = strength * 0.28;
            ctx.strokeStyle = `hsl(${particles[i].hue}, 70%, 68%)`;
            ctx.lineWidth = 0.4;
            ctx.beginPath();
            ctx.moveTo(positions[i].x, positions[i].y);
            ctx.lineTo(positions[j].x, positions[j].y);
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const pos = positions[i];
        const twinkle = 0.6 + Math.sin(time * 0.03 + i) * 0.4;
        ctx.globalAlpha = p.alpha * twinkle;
        ctx.fillStyle = `hsl(${p.hue}, 80%, 72%)`;
        ctx.shadowColor = `hsl(${p.hue}, 80%, 65%)`;
        ctx.shadowBlur = p.size * 4;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;

      if (interactive && mouse.active) {
        for (let i = 0; i < particles.length; i++) {
          const d = Math.hypot(positions[i].x - mouse.x, positions[i].y - mouse.y);
          if (d < CONNECTION_DIST * 1.4) {
            const strength = 1 - d / (CONNECTION_DIST * 1.4);
            ctx.globalAlpha = strength * 0.35;
            ctx.strokeStyle = `hsl(${particles[i].hue}, 80%, 70%)`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(positions[i].x, positions[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
        ctx.globalAlpha = 1;
      }

      time++;
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
      const rect = el.getBoundingClientRect();
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
    io.observe(el);

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [density, interactive]);

  return <canvas ref={ref} className={className} aria-hidden />;
}
