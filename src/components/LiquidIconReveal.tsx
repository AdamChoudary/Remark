"use client";
import { useEffect, useRef, useState } from "react";

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

function easeInOut(t: number) { return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2,3)/2; }
function easeOut(t: number) { return 1 - Math.pow(1-t, 4); }
function lerp(a: number, b: number, t: number) { return a + (b-a)*t; }

// Given a progress (0→1 along the horizontal), return the half-height of the
// water body at that point. At 0 = full height, at 1 = thin stream.
function waterHalfHeight(progress: number, halfH: number, streamR: number): number {
  // Starts massive, then compresses using a power curve
  // progress 0 = screen edge (full height)
  // progress 1 = tip (thin stream)
  const p = Math.pow(progress, 0.55); // slightly more gradual taper
  return lerp(halfH, streamR, p);
}

// Draw the water body from startX to endX with animated wave surface
function drawFloodBody(
  ctx: CanvasRenderingContext2D,
  startX: number,   // screen edge (where water is full-height)
  endX: number,     // leading edge / tip (where water is thin)
  midY: number,     // vertical center
  halfH: number,    // half the full height at screen edge
  streamR: number,  // radius of the thin stream at the tip
  osc: number,      // oscillation phase for wave motion
  direction: 1 | -1 // 1 = left-to-right, -1 = right-to-left
) {
  const totalDist = Math.abs(endX - startX);
  if (totalDist < 3) return;

  const SEGMENTS = 48; // how many slices along the length

  // Build top and bottom edge points with wave undulation
  const topPts: { x: number; y: number }[] = [];
  const botPts: { x: number; y: number }[] = [];

  for (let i = 0; i <= SEGMENTS; i++) {
    const t = i / SEGMENTS; // 0 at start (screen edge), 1 at end (tip)
    const x = lerp(startX, endX, t);
    const hh = waterHalfHeight(t, halfH, streamR);

    // Wave undulation: larger at the wide end, smaller at the narrow end
    const waveAmp = lerp(14, 1.5, Math.pow(t, 0.4));
    const waveFreq1 = 3.2;
    const waveFreq2 = 7.1;
    const wave = Math.sin(t * waveFreq1 * Math.PI + osc * 1.8) * waveAmp * 0.7
               + Math.sin(t * waveFreq2 * Math.PI + osc * 2.6) * waveAmp * 0.3;

    topPts.push({ x, y: midY - hh + wave });
    botPts.push({ x, y: midY + hh - wave * 0.6 }); // slightly different wave on bottom
  }

  // ── Draw filled body ──
  ctx.beginPath();
  ctx.moveTo(topPts[0].x, topPts[0].y);

  // Top edge: smooth curve through points
  for (let i = 1; i < topPts.length; i++) {
    const prev = topPts[i - 1];
    const curr = topPts[i];
    const cpx = (prev.x + curr.x) / 2;
    ctx.quadraticCurveTo(prev.x, prev.y, cpx, (prev.y + curr.y) / 2);
  }
  // Line to last top point
  const lastTop = topPts[topPts.length - 1];
  ctx.lineTo(lastTop.x, lastTop.y);

  // Bottom edge: reverse direction
  const lastBot = botPts[botPts.length - 1];
  ctx.lineTo(lastBot.x, lastBot.y);

  for (let i = botPts.length - 2; i >= 0; i--) {
    const prev = botPts[i + 1];
    const curr = botPts[i];
    const cpx = (prev.x + curr.x) / 2;
    ctx.quadraticCurveTo(prev.x, prev.y, cpx, (prev.y + curr.y) / 2);
  }
  ctx.closePath();

  // Gradient: richer red at wide end, slightly darker at tip
  const grad = ctx.createLinearGradient(startX, 0, endX, 0);
  grad.addColorStop(0,   "rgba(192, 40, 40, 1.0)");
  grad.addColorStop(0.4, "rgba(182, 34, 34, 0.97)");
  grad.addColorStop(0.8, "rgba(165, 28, 28, 0.93)");
  grad.addColorStop(1.0, "rgba(148, 22, 22, 0.88)");
  ctx.fillStyle = grad;
  ctx.fill();

  // ── Inner highlight (depth/gloss) ──
  ctx.save();
  ctx.clip(); // clip to the water body shape
  const highlightY = midY - halfH * 0.3;
  const hGrad = ctx.createLinearGradient(startX, highlightY, startX, midY + halfH);
  hGrad.addColorStop(0,   "rgba(255, 160, 160, 0.14)");
  hGrad.addColorStop(0.3, "rgba(255, 120, 120, 0.07)");
  hGrad.addColorStop(1.0, "rgba(200,  60,  60, 0.0)");
  ctx.fillStyle = hGrad;
  ctx.fillRect(startX, midY - halfH - 20, totalDist, halfH * 2 + 40);
  ctx.restore();

  // ── Ripple lines on the surface ──
  ctx.save();
  ctx.globalAlpha = 0.12;
  ctx.strokeStyle = "rgba(255, 190, 190, 1)";
  ctx.lineWidth = 1.2;
  for (let r = 0; r < 5; r++) {
    const yOffset = lerp(-halfH * 0.6, halfH * 0.4, r / 4);
    ctx.beginPath();
    for (let i = 0; i <= SEGMENTS; i++) {
      const t = i / SEGMENTS;
      const x = lerp(startX, endX, t);
      const hh = waterHalfHeight(t, halfH, streamR);
      const scale = hh / halfH; // how compressed the water is at this x
      const ripple = Math.sin(t * 11 * Math.PI + osc * 2.2 + r * 1.7) * 4 * scale;
      const y = midY + yOffset * scale + ripple;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
  ctx.restore();
}

export function LiquidIconReveal({ type, origin, delay = 0 }: {
  type: "chat"|"process"|"web"; origin: "left"|"right"; delay?: number;
}) {
  const wrapRef   = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [triggered, setTriggered] = useState(false);
  const rafRef = useRef<number>(0);
  const t0Ref  = useRef<number>(-1);

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
    if (!triggered) return;
    const wrap   = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const rect     = wrap.getBoundingClientRect();
    const overhang = origin === "left"
      ? Math.round(rect.left)
      : Math.round(window.innerWidth - rect.right);

    const DPR  = window.devicePixelRatio || 1;
    const visW = wrap.offsetWidth;
    const H    = wrap.offsetHeight;
    const W    = visW + overhang;

    canvas.style.position = "absolute";
    canvas.style.top      = "0";
    canvas.style.height   = `${H}px`;
    canvas.style.width    = `${W}px`;
    if (origin === "left") { canvas.style.left = `-${overhang}px`; canvas.style.right = "auto"; }
    else                   { canvas.style.right = `-${overhang}px`; canvas.style.left = "auto"; }
    canvas.width  = W * DPR;
    canvas.height = H * DPR;
    const ctx = canvas.getContext("2d")!;
    ctx.scale(DPR, DPR);

    const midY = H / 2;
    const halfH = H * 0.48; // water nearly fills full height at screen edge
    const streamR = 3;      // thin stream radius at the tip

    // Where the thin end reaches (icon center in canvas coords)
    const tipX = origin === "left" ? overhang + visW * 0.76 : visW * 0.24;

    // Screen edge position (where water is massive)
    const edgeX = origin === "left" ? -10 : W + 10;

    // Icon
    const iconStrings = ICONS[type];
    const lengths = iconStrings.map(measurePath);
    const p2ds    = iconStrings.map(d => new Path2D(d));
    const iconSize = Math.min(visW * 0.70, H * 0.70);
    const sc = iconSize / 100;
    const ox = tipX - (100 * sc) / 2;
    const oy = midY - (100 * sc) / 2;

    // Timing
    const TOTAL      = 3800;
    const FLOW_END   = 0.40; // leading edge reaches tip
    const HOLD_END   = 0.58; // water holds, icon drawing
    const RECED_END  = 0.85; // water recedes from screen edge side
    const ICON_START = 0.36;

    const draw = (ts: number) => {
      if (t0Ref.current < 0) t0Ref.current = ts;
      const raw = Math.min((ts - t0Ref.current) / TOTAL, 1);
      const osc = ts * 0.001;

      ctx.clearRect(0, 0, W, H);

      // ── Compute leading edge and trailing edge positions ──
      let leadingX: number;  // where the thin tip currently is
      let trailingX: number; // where the wide screen-edge currently is

      if (raw < FLOW_END) {
        // Water flowing in: leading edge advances from screen edge to tip
        const t = easeInOut(raw / FLOW_END);
        leadingX  = lerp(edgeX, tipX, t);
        trailingX = edgeX;
      } else if (raw < HOLD_END) {
        // Hold: full water body visible
        leadingX  = tipX;
        trailingX = edgeX;
      } else if (raw < RECED_END) {
        // Recede: trailing edge (screen-edge side) pulls toward tip
        const t = easeInOut((raw - HOLD_END) / (RECED_END - HOLD_END));
        leadingX  = tipX;
        trailingX = lerp(edgeX, tipX, t);
      } else {
        leadingX  = tipX;
        trailingX = tipX;
      }

      // Only draw if there's a visible body
      const dist = origin === "left"
        ? leadingX - trailingX
        : trailingX - leadingX;

      if (dist > 3) {
        const startX = origin === "left" ? trailingX : leadingX;
        const endX   = origin === "left" ? leadingX  : trailingX;

        if (origin === "left") {
          drawFloodBody(ctx, startX, endX, midY, halfH, streamR, osc, 1);
        } else {
          // For right origin: we flip the canvas, draw, then flip back
          ctx.save();
          ctx.translate(W, 0);
          ctx.scale(-1, 1);
          const flippedStart = W - endX;   // endX is trailingX (screen edge)
          const flippedEnd   = W - startX; // startX is leadingX (tip)
          drawFloodBody(ctx, flippedStart, flippedEnd, midY, halfH, streamR, osc, 1);
          ctx.restore();
        }
      }

      // ── Icon stroke draw ──
      if (raw >= ICON_START) {
        const ir = Math.min((raw - ICON_START) / (1 - ICON_START), 1);
        ctx.save();
        ctx.translate(ox, oy);
        ctx.scale(sc, sc);
        ctx.strokeStyle = "rgb(138, 18, 18)";
        ctx.lineWidth   = 5 / sc;
        ctx.lineCap     = "round";
        ctx.lineJoin    = "round";
        const n = p2ds.length;
        p2ds.forEach((p, i) => {
          const s = i / n, e = (i+1) / n;
          const lt = easeOut(Math.max(0, Math.min(1, (ir-s) / (e-s+0.05))));
          if (lt <= 0) return;
          ctx.setLineDash([lengths[i]*lt, lengths[i]]);
          ctx.lineDashOffset = 0;
          ctx.beginPath();
          ctx.stroke(p);
        });
        ctx.setLineDash([]);
        ctx.restore();
      }

      if (raw < 1) rafRef.current = requestAnimationFrame(draw);
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
      className="relative w-full shrink-0 self-stretch pointer-events-none"
      style={{ overflow: "visible", minHeight: "240px" }}
    >
      <canvas ref={canvasRef} style={{ display: "block" }} />
    </div>
  );
}
