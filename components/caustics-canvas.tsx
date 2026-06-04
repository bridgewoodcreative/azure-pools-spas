"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Light = { ax: number; ay: number; fx: number; fy: number; px: number; py: number; r: number };

/**
 * A light, tasteful water-caustics layer. Soft light points drift along
 * Lissajous paths and composite with "screen" to read like sunlight dappling
 * across a pool surface. Pauses when the tab is hidden and renders a single
 * static frame for users who prefer reduced motion.
 */
export function CausticsCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    let width = 0;
    let height = 0;

    const lights: Light[] = Array.from({ length: 9 }).map((_, i) => ({
      ax: 0.18 + Math.random() * 0.22,
      ay: 0.14 + Math.random() * 0.2,
      fx: 0.05 + Math.random() * 0.12,
      fy: 0.05 + Math.random() * 0.12,
      px: Math.random() * Math.PI * 2,
      py: Math.random() * Math.PI * 2,
      r: 0.18 + ((i % 3) * 0.06 + Math.random() * 0.05),
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "screen";
      const time = t / 1000;
      for (const l of lights) {
        const x = (0.5 + l.ax * Math.sin(time * l.fx * Math.PI * 2 + l.px)) * width;
        const y = (0.5 + l.ay * Math.sin(time * l.fy * Math.PI * 2 + l.py)) * height;
        const radius = l.r * Math.min(width, height);
        const g = ctx.createRadialGradient(x, y, 0, x, y, radius);
        g.addColorStop(0, "rgba(180, 255, 240, 0.20)");
        g.addColorStop(0.4, "rgba(92, 240, 214, 0.10)");
        g.addColorStop(1, "rgba(63, 224, 197, 0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    resize();

    if (reduce) {
      draw(2400);
      const onResizeStatic = () => {
        resize();
        draw(2400);
      };
      window.addEventListener("resize", onResizeStatic);
      return () => window.removeEventListener("resize", onResizeStatic);
    }

    let raf = 0;
    let running = true;
    const loop = (t: number) => {
      if (!running) return;
      draw(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        raf = requestAnimationFrame(loop);
      }
    };
    const onResize = () => resize();
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("resize", onResize);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn("pointer-events-none h-full w-full", className)}
    />
  );
}
