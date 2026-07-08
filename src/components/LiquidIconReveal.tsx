"use client";
import { useEffect, useRef, useState, useCallback } from "react";

const ICONS: Record<string, string[]> = {
  chat: [
    "M35 25 C22 25 15 35 15 46 C15 72 38 90 60 94 C74 98 88 89 92 78 C94 70 89 63 81 60 L71 56 C66 53 61 55 59 60 C57 65 55 68 52 66 C41 58 29 44 27 35 C25 28 29 22 35 22 Z",
    "M58 14 L58 28", "M44 18 L51 30", "M72 18 L65 30",
  ],
  process: [
    "M22 18 L78 18", "M22 82 L78 82",
    "M22 18 L50 48 L78 18", "M22 82 L50 52 L78 82",
    "M38 46 L62 46 L62 54 L38 54 Z",
    "M50 54 L50 64", "M43 56 L43 66", "M57 56 L57 66",
  ],
  web: [
    "M12 14 L88 14 L88 72 L12 72 Z", "M20 22 L80 22 L80 64 L20 64 Z",
    "M40 72 L40 86", "M60 72 L60 86", "M28 86 L72 86",
    "M20 22 L38 36", "M20 22 L24 44",
    "M24 27 C30 30 32 35 29 40", "M20 34 C26 36 29 40 27 45",
  ],
};

function measurePath(d: string): number {
  const el = document.createElementNS("http://www.w3.org/2000/svg", "path");
  el.setAttribute("d", d);
  document.body.appendChild(el);
  const len = el.getTotalLength();
  document.body.removeChild(el);
  return len;
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
function easeOutQuart(t: number) { return 1 - Math.pow(1 - t, 4); }
function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }
function clamp(x: number, lo: number, hi: number) { return Math.max(lo, Math.min(hi, x)); }

// ── Wave simulation constants ──
const SIM_N = 120;
const WAVE_C = 0.4;        // Propagation speed (higher = faster ripple spread)
const DAMP = 0.965;         // Energy decay (lower = ripples die faster)
const MAX_DISP = 10;        // Max displacement px — keeps it subtle
const INJ_RADIUS = 6;       // Injection width in cells — tight, focused
const INJ_STRENGTH = 0.12;  // Very gentle injection per frame

export function LiquidIconReveal({ type, origin, delay = 0 }: {
  type: "chat" | "process" | "web"; origin: "left" | "right"; delay?: number;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [triggered, setTriggered] = useState(false);
  const rafRef = useRef<number>(0);
  const t0Ref = useRef<number>(-1);

  // Wave simulation buffers
  const disp = useRef(new Float32Array(SIM_N));
  const vel = useRef(new Float32Array(SIM_N));

  // Raw cursor — NO smoothing for injection (instant response)
  const cursor = useRef({ x: -9999, y: -9999, active: false });

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
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const w = wrapRef.current;
    if (!w) return;
    const area = w.closest("section") || w.parentElement || w;
    area.addEventListener("mousemove", onMove as EventListener);
    area.addEventListener("mouseleave", onLeave as EventListener);
    return () => {
      area.removeEventListener("mousemove", onMove as EventListener);
      area.removeEventListener("mouseleave", onLeave as EventListener);
    };
  }, [onMove, onLeave]);

  useEffect(() => {
    if (!triggered) return;
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const rect = wrap.getBoundingClientRect();
    const overhang = origin === "left"
      ? Math.round(rect.left)
      : Math.round(window.innerWidth - rect.right);

    const DPR = window.devicePixelRatio || 1;
    const visW = wrap.offsetWidth;
    const H = wrap.offsetHeight;
    const W = visW + overhang;

    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.height = `${H}px`;
    canvas.style.width = `${W}px`;
    if (origin === "left") {
      canvas.style.left = `-${overhang}px`;
      canvas.style.right = "auto";
    } else {
      canvas.style.right = `-${overhang}px`;
      canvas.style.left = "auto";
    }

    canvas.width = W * DPR;
    canvas.height = H * DPR;
    const ctx = canvas.getContext("2d")!;
    ctx.scale(DPR, DPR);

    const midY = H / 2;

    // Icon
    const iconStrings = ICONS[type];
    const lengths = iconStrings.map(measurePath);
    const p2ds = iconStrings.map(d => new Path2D(d));
    const iconSize = Math.min(visW * 0.50, H * 0.50, 150);
    const sc = iconSize / 100;
    const iconCX = origin === "left" ? overhang + visW * 0.5 : visW * 0.5;
    const ox = iconCX - (100 * sc) / 2;
    const oy = midY - (100 * sc) / 2;

    const tipX = iconCX;
    const edgeX = origin === "left" ? -20 : W + 20;
    const dist = Math.abs(tipX - edgeX);
    const tipHH = iconSize * 0.55;

    // Sim coordinate mapping
    const sMin = Math.min(edgeX, tipX);
    const sMax = Math.max(edgeX, tipX);
    const sSpan = sMax - sMin;
    const xToI = (x: number) => clamp(((x - sMin) / sSpan) * (SIM_N - 1), 0, SIM_N - 1);
    const iDisp = (x: number) => {
      const fi = clamp(((x - sMin) / sSpan) * (SIM_N - 1), 0, SIM_N - 2);
      const i0 = Math.floor(fi);
      const f = fi - i0;
      return disp.current[i0] * (1 - f) + disp.current[i0 + 1] * f;
    };

    // Get halfH at a given x (base shape without ripples)
    const baseHH = (x: number) => {
      const p = clamp(Math.abs(x - edgeX) / dist, 0, 1);
      const t = p * p * (3 - 2 * p);
      return lerp(H * 0.48, tipHH, t);
    };

    const TOTAL = 4000;
    const FLOW_END = 0.40;
    const ICON_START = 0.35;
    const SEGS = 90;

    const draw = (ts: number) => {
      if (t0Ref.current < 0) t0Ref.current = ts;
      const elapsed = ts - t0Ref.current;
      const raw = Math.min(elapsed / TOTAL, 1);
      const osc = ts * 0.0008;

      const d = disp.current;
      const v = vel.current;
      const c = cursor.current;

      // ── INJECT CURSOR RIPPLE ──
      // Use raw cursor position — zero lag
      if (c.active && raw >= FLOW_END) {
        const hh = baseHH(c.x);
        const topY = midY - hh;
        const botY = midY + hh;

        // Is cursor within or near the water body?
        if (c.y > topY - 50 && c.y < botY + 50) {
          const ci = xToI(c.x);
          // Direction: cursor above center → push surface up (negative disp)
          //            cursor below center → push surface down (positive disp)
          const dir = c.y < midY ? 1 : -1;
          // Proximity to surface amplifies effect
          const distToEdge = c.y < midY
            ? Math.max(0, c.y - topY + 30) / 30
            : Math.max(0, botY - c.y + 30) / 30;
          const prox = clamp(distToEdge, 0.2, 1);

          for (let k = -INJ_RADIUS; k <= INJ_RADIUS; k++) {
            const idx = Math.round(ci) + k;
            if (idx < 1 || idx >= SIM_N - 1) continue;
            const t = 1 - Math.abs(k) / (INJ_RADIUS + 1);
            const falloff = t * t; // quadratic falloff
            v[idx] += dir * INJ_STRENGTH * falloff * prox;
          }
        }
      }

      // ── STEP WAVE EQUATION ──
      for (let i = 1; i < SIM_N - 1; i++) {
        v[i] += WAVE_C * WAVE_C * (d[i - 1] + d[i + 1] - 2 * d[i]);
      }
      for (let i = 0; i < SIM_N; i++) {
        v[i] *= DAMP;
        d[i] += v[i];
        d[i] = clamp(d[i], -MAX_DISP, MAX_DISP);
      }
      // Absorbing boundaries
      d[0] = 0; d[SIM_N - 1] = 0;
      v[0] = 0; v[SIM_N - 1] = 0;

      // ── DRAW ──
      ctx.clearRect(0, 0, W, H);

      const fp = raw < FLOW_END ? easeInOutCubic(raw / FLOW_END) : 1;
      const leadX = lerp(edgeX, tipX, fp);
      const leadD = Math.abs(leadX - edgeX);

      if (leadD > 2) {
        ctx.save();
        const segDx = (leadX - edgeX) / SEGS;
        const top: { x: number; y: number }[] = [];
        const bot: { x: number; y: number }[] = [];

        for (let i = 0; i <= SEGS; i++) {
          const x = edgeX + i * segDx;
          let hh = baseHH(x);

          // Apply wave displacement (only after flow completes)
          if (raw >= FLOW_END) {
            hh += iDisp(x);
            hh = Math.max(hh, 2);
          }

          // Subtle ambient wave
          const p = clamp(Math.abs(x - edgeX) / dist, 0, 1);
          const a = hh * 0.035;
          const wt = Math.sin(p * 7 - osc * 2) * a;
          const wb = Math.sin(p * 7 - osc * 2 + 0.6) * a;

          top.push({ x, y: midY - hh + wt });
          bot.push({ x, y: midY + hh + wb });
        }

        // ── Smooth Bézier outline ──
        ctx.beginPath();
        ctx.moveTo(top[0].x, top[0].y);
        for (let i = 0; i < top.length - 1; i++) {
          ctx.quadraticCurveTo(
            top[i].x, top[i].y,
            (top[i].x + top[i + 1].x) / 2,
            (top[i].y + top[i + 1].y) / 2
          );
        }
        ctx.lineTo(top[top.length - 1].x, top[top.length - 1].y);

        // Cap
        const lt = top[top.length - 1], lb = bot[bot.length - 1];
        const cr = Math.max((lb.y - lt.y) / 2, 1);
        ctx.arc(lt.x, (lt.y + lb.y) / 2, cr, -Math.PI / 2, Math.PI / 2, origin === "right");

        // Bottom reversed
        for (let i = bot.length - 1; i > 0; i--) {
          ctx.quadraticCurveTo(
            bot[i].x, bot[i].y,
            (bot[i].x + bot[i - 1].x) / 2,
            (bot[i].y + bot[i - 1].y) / 2
          );
        }
        ctx.lineTo(bot[0].x, bot[0].y);
        ctx.closePath();

        // Fill
        const grad = ctx.createLinearGradient(edgeX, 0, tipX, 0);
        grad.addColorStop(0, "rgba(155, 24, 24, 0.96)");
        grad.addColorStop(0.4, "rgba(148, 22, 22, 0.94)");
        grad.addColorStop(0.8, "rgba(138, 20, 20, 0.92)");
        grad.addColorStop(1, "rgba(128, 18, 18, 0.90)");
        ctx.fillStyle = grad;
        ctx.fill();

        // Specular
        ctx.save();
        ctx.clip();
        const hl = ctx.createLinearGradient(0, midY - H * 0.4, 0, midY);
        hl.addColorStop(0, "rgba(255, 155, 155, 0.08)");
        hl.addColorStop(1, "rgba(255, 155, 155, 0)");
        ctx.fillStyle = hl;
        ctx.fillRect(0, 0, W, H);

        // Flow lines
        ctx.globalAlpha = 0.05;
        ctx.strokeStyle = "rgba(255, 140, 140, 1)";
        ctx.lineWidth = 0.7;
        for (let j = -2; j <= 2; j++) {
          if (j === 0) continue;
          ctx.beginPath();
          for (let i = 0; i <= SEGS; i++) {
            const x = edgeX + i * segDx;
            let fh = baseHH(x);
            if (raw >= FLOW_END) { fh += iDisp(x); fh = Math.max(fh, 2); }
            const p = clamp(Math.abs(x - edgeX) / dist, 0, 1);
            const w = Math.sin(p * 9 - osc * 1.6 + j * 0.8) * fh * 0.025;
            const y = midY + j * fh * 0.2 + w;
            if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
        ctx.restore();
        ctx.restore();
      }

      // ── ICON ──
      if (raw >= ICON_START) {
        const ir = clamp((raw - ICON_START) / (1 - ICON_START), 0, 1);
        ctx.save();
        ctx.translate(ox, oy);
        ctx.scale(sc, sc);
        if (ir > 0) { ctx.shadowColor = "rgba(230,221,212,0.35)"; ctx.shadowBlur = 10; }
        ctx.strokeStyle = "#E6DDD4";
        ctx.lineWidth = 4.5 / sc;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        const n = p2ds.length;
        p2ds.forEach((p2, i) => {
          const s = i / n, e = (i + 1) / n;
          const lt = easeOutQuart(clamp((ir - s) / (e - s + 0.1), 0, 1));
          if (lt > 0) {
            ctx.setLineDash([lengths[i] * lt, lengths[i]]);
            ctx.lineDashOffset = 0;
            ctx.beginPath();
            ctx.stroke(p2);
          }
        });
        ctx.setLineDash([]);
        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    const tid = window.setTimeout(() => {
      t0Ref.current = -1;
      rafRef.current = requestAnimationFrame(draw);
    }, delay);

    return () => { clearTimeout(tid); cancelAnimationFrame(rafRef.current); };
  }, [triggered, type, origin, delay]);

  return (
    <div
      ref={wrapRef}
      className="relative w-full shrink-0 self-stretch"
      style={{ overflow: "visible", minHeight: "240px", aspectRatio: "1 / 1", maxHeight: "320px" }}
    >
      <canvas ref={canvasRef} style={{ display: "block" }} />
    </div>
  );
}
