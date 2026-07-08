"use client";
import { useEffect, useRef, useState, useCallback } from "react";

function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }
function clamp(x: number, lo: number, hi: number) { return Math.max(lo, Math.min(hi, x)); }

const SIM_N = 100;
const WAVE_C = 0.5;
const DAMP = 0.95;

export function LiquidSeparator() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  
  const disp = useRef(new Float32Array(SIM_N));
  const vel = useRef(new Float32Array(SIM_N));
  
  const cursor = useRef({ x: -9999, y: -9999, active: false });
  const [triggered, setTriggered] = useState(false);
  const rafRef = useRef<number>(0);

  const onMove = useCallback((e: MouseEvent) => {
    const c = canvasRef.current;
    if (!c) return;
    const r = c.getBoundingClientRect();
    cursor.current.x = e.clientX - r.left;
    cursor.current.y = e.clientY - r.top;
    cursor.current.active = true;
  }, []);

  const onLeave = useCallback(() => {
    cursor.current.active = false;
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTriggered(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const w = wrapRef.current;
    if (!w) return;
    w.addEventListener("mousemove", onMove as EventListener);
    w.addEventListener("mouseleave", onLeave as EventListener);
    return () => {
      w.removeEventListener("mousemove", onMove as EventListener);
      w.removeEventListener("mouseleave", onLeave as EventListener);
    };
  }, [onMove, onLeave]);

  useEffect(() => {
    if (!triggered) return;
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const DPR = window.devicePixelRatio || 1;
    const W = wrap.offsetWidth;
    const H = 40; // hit area height
    
    canvas.width = W * DPR;
    canvas.height = H * DPR;
    canvas.style.width = `${W}px`;
    canvas.style.height = `${H}px`;
    const ctx = canvas.getContext("2d")!;
    ctx.scale(DPR, DPR);

    const midY = H / 2;
    const segDx = W / (SIM_N - 1);

    let lastTs = -1;

    const draw = (ts: number) => {
      if (lastTs < 0) lastTs = ts;
      
      const c = cursor.current;
      const d = disp.current;
      const v = vel.current;

      // Inject
      if (c.active) {
        if (c.y > 0 && c.y < H) {
          const ci = clamp(Math.round(c.x / segDx), 0, SIM_N - 1);
          const dir = c.y < midY ? 1 : -1;
          const INJ_RAD = 4;
          for (let k = -INJ_RAD; k <= INJ_RAD; k++) {
            const idx = ci + k;
            if (idx > 0 && idx < SIM_N - 1) {
              const falloff = 1 - Math.abs(k) / (INJ_RAD + 1);
              v[idx] += dir * 0.8 * falloff * falloff;
            }
          }
        }
      }

      // Step
      for (let i = 1; i < SIM_N - 1; i++) {
        v[i] += WAVE_C * WAVE_C * (d[i-1] + d[i+1] - 2*d[i]);
      }
      for (let i = 0; i < SIM_N; i++) {
        v[i] *= DAMP;
        d[i] += v[i];
        d[i] = clamp(d[i], -15, 15);
      }
      d[0] = 0; d[SIM_N-1] = 0;
      v[0] = 0; v[SIM_N-1] = 0;

      // Draw
      ctx.clearRect(0, 0, W, H);
      
      ctx.beginPath();
      ctx.moveTo(0, midY + d[0]);
      for (let i = 1; i < SIM_N - 1; i++) {
        const x = i * segDx;
        const nx = (i+1) * segDx;
        const y = midY + d[i];
        const ny = midY + d[i+1];
        ctx.quadraticCurveTo(x, y, (x+nx)/2, (y+ny)/2);
      }
      ctx.lineTo(W, midY + d[SIM_N-1]);
      
      // We want a line, not a filled shape
      ctx.strokeStyle = "rgba(180, 40, 40, 0.4)";
      ctx.lineWidth = 1;
      ctx.stroke();

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, [triggered]);

  return (
    <div ref={wrapRef} className="relative w-full h-[40px] -my-[20px] cursor-crosshair z-20">
      <canvas ref={canvasRef} className="absolute top-0 left-0" />
    </div>
  );
}
