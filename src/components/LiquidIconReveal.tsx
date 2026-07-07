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

function easeInOutQuad(t: number) { return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }
function easeOutQuart(t: number) { return 1 - Math.pow(1 - t, 4); }
function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }

export function LiquidIconReveal({ type, origin, delay = 0 }: {
  type: "chat" | "process" | "web"; origin: "left" | "right"; delay?: number;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [triggered, setTriggered] = useState(false);
  const rafRef = useRef<number>(0);
  const t0Ref = useRef<number>(-1);

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
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    // Measure overhang to start exactly at the screen edge
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
    // Tip position inside the visual container
    const tipX = origin === "left" ? overhang + visW * 0.75 : visW * 0.25;
    // Edge position (start of the wave)
    const edgeX = origin === "left" ? -20 : W + 20;

    // Icon setup
    const iconStrings = ICONS[type];
    const lengths = iconStrings.map(measurePath);
    const p2ds = iconStrings.map(d => new Path2D(d));
    const iconSize = Math.min(visW * 0.65, H * 0.65);
    const sc = iconSize / 100;
    const ox = tipX - (100 * sc) / 2;
    const oy = midY - (100 * sc) / 2;

    // Animation settings
    const TOTAL = 4500; // Total animation time
    const FLOW_END = 0.35; // Wave reaches the icon
    const HOLD_END = 0.70; // Wave holds while icon draws
    const FADE_END = 0.95; // Wave gracefully fades out

    const draw = (ts: number) => {
      if (t0Ref.current < 0) t0Ref.current = ts;
      const raw = Math.min((ts - t0Ref.current) / TOTAL, 1);
      const osc = ts * 0.003; // Animation time for waves

      ctx.clearRect(0, 0, W, H);

      // Calculate leading edge
      let flowProgress = 0;
      let opacity = 1;

      if (raw < FLOW_END) {
        flowProgress = easeInOutQuad(raw / FLOW_END);
      } else if (raw < HOLD_END) {
        flowProgress = 1;
      } else if (raw < FADE_END) {
        flowProgress = 1;
        opacity = 1 - easeInOutQuad((raw - HOLD_END) / (FADE_END - HOLD_END));
      } else {
        flowProgress = 1;
        opacity = 0;
      }

      const currentLeadingX = lerp(edgeX, tipX, flowProgress);
      const distToTip = Math.abs(tipX - edgeX);
      const currentDist = Math.abs(currentLeadingX - edgeX);
      
      if (currentDist > 2 && opacity > 0.01) {
        ctx.save();
        ctx.globalAlpha = opacity;
        
        // Define the path of the flowing water
        ctx.beginPath();
        
        const segments = 100;
        const dx = (currentLeadingX - edgeX) / segments;
        
        // Top edge
        for (let i = 0; i <= segments; i++) {
          const x = edgeX + i * dx;
          // Progress relative to the total distance to the tip
          const p = Math.abs(x - edgeX) / distToTip; 
          
          // Use power of 4 to keep the wave MASSIVE for most of the screen
          // and only taper sharply right before the icon.
          const taper = Math.pow(p, 5); 
          const baseHalfH = lerp(H * 0.48, 2, taper);
          
          // Organic wave undulations
          // The closer to the tip, the smaller the waves
          const waveAmp = baseHalfH * 0.15;
          const wave = Math.sin(p * 15 - osc * 3) * waveAmp + 
                       Math.sin(p * 25 - osc * 5.2) * (waveAmp * 0.5);
                       
          const y = midY - baseHalfH + wave;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        
        // Front cap (rounded leading edge)
        const frontP = currentDist / distToTip;
        const frontTaper = Math.pow(frontP, 5);
        const frontHalfH = lerp(H * 0.48, 2, frontTaper);
        ctx.arc(currentLeadingX, midY, frontHalfH, -Math.PI/2, Math.PI/2, origin === "right");
        
        // Bottom edge
        for (let i = segments; i >= 0; i--) {
          const x = edgeX + i * dx;
          const p = Math.abs(x - edgeX) / distToTip;
          const taper = Math.pow(p, 5);
          const baseHalfH = lerp(H * 0.48, 2, taper);
          
          const waveAmp = baseHalfH * 0.15;
          const wave = Math.sin(p * 17 - osc * 2.8) * waveAmp + 
                       Math.sin(p * 22 - osc * 4.9) * (waveAmp * 0.5);
                       
          const y = midY + baseHalfH + wave;
          ctx.lineTo(x, y);
        }
        ctx.closePath();
        
        // Fill gradient
        const grad = ctx.createLinearGradient(edgeX, 0, tipX, 0);
        grad.addColorStop(0, "rgba(180, 30, 30, 0.95)");
        grad.addColorStop(0.5, "rgba(160, 25, 25, 0.9)");
        grad.addColorStop(1, "rgba(130, 15, 15, 0.8)");
        ctx.fillStyle = grad;
        ctx.fill();

        // Inner highlight for volume/glass effect
        ctx.save();
        ctx.clip();
        const highlightGrad = ctx.createLinearGradient(0, midY - H * 0.3, 0, midY + H * 0.3);
        highlightGrad.addColorStop(0, "rgba(255, 150, 150, 0.2)");
        highlightGrad.addColorStop(0.5, "rgba(255, 150, 150, 0.05)");
        highlightGrad.addColorStop(1, "rgba(255, 150, 150, 0)");
        ctx.fillStyle = highlightGrad;
        ctx.fillRect(0, 0, W, H);
        
        // Flowing internal lines for fluid dynamics
        ctx.strokeStyle = "rgba(255, 120, 120, 0.15)";
        ctx.lineWidth = 1.5;
        for (let j = -2; j <= 2; j++) {
          if (j === 0) continue;
          ctx.beginPath();
          for (let i = 0; i <= segments; i++) {
            const x = edgeX + i * dx;
            const p = Math.abs(x - edgeX) / distToTip;
            const taper = Math.pow(p, 5);
            const baseHalfH = lerp(H * 0.48, 2, taper);
            
            const wave = Math.sin(p * 20 - osc * 4 + j) * baseHalfH * 0.1;
            const yOffset = j * baseHalfH * 0.3;
            
            const y = midY + yOffset + wave;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
        ctx.restore();
        
        // Spray particles at the leading edge while flowing
        if (raw < FLOW_END) {
          const particleCount = 6;
          for(let i=0; i<particleCount; i++) {
             const py = midY + (Math.random() - 0.5) * frontHalfH * 3;
             const px = currentLeadingX + (origin === "left" ? 1 : -1) * (Math.random() * 20);
             const pr = Math.random() * 2 + 1;
             ctx.beginPath();
             ctx.arc(px, py, pr, 0, Math.PI*2);
             ctx.fillStyle = `rgba(220, 50, 50, ${Math.random() * 0.6})`;
             ctx.fill();
          }
        }
        
        ctx.restore();
      }

      // ── Icon drawing ──
      // Icon starts drawing slightly before the flow reaches the tip
      const ICON_START = 0.30; 
      if (raw >= ICON_START) {
        const iconRaw = Math.min((raw - ICON_START) / (1 - ICON_START), 1);
        ctx.save();
        ctx.translate(ox, oy);
        ctx.scale(sc, sc);
        
        // Draw glow behind icon for impact
        if (iconRaw > 0) {
          ctx.shadowColor = "rgba(180, 30, 30, 0.6)";
          ctx.shadowBlur = 15;
        }
        
        ctx.strokeStyle = "rgb(148, 22, 22)";
        ctx.lineWidth = 4.5 / sc;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        
        const n = p2ds.length;
        p2ds.forEach((p, i) => {
          const s = i / n;
          const e = (i + 1) / n;
          // Smooth ease out for drawing the strokes
          const lt = easeOutQuart(Math.max(0, Math.min(1, (iconRaw - s) / (e - s + 0.1))));
          
          if (lt > 0) {
            ctx.setLineDash([lengths[i] * lt, lengths[i]]);
            ctx.lineDashOffset = 0;
            ctx.beginPath();
            ctx.stroke(p);
          }
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
