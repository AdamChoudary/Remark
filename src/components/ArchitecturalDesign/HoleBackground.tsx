"use client";

import * as React from "react";

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export type HoleBackgroundProps = React.ComponentProps<"div"> & {
  strokeColor?: string;
  numberOfLines?: number;
  numberOfDiscs?: number;
  particleRGBColor?: [number, number, number];
};

export function HoleBackground({
  strokeColor = "#525866",
  numberOfLines = 44,
  numberOfDiscs = 44,
  particleRGBColor = [220, 220, 220],
  className,
  children,
  ...props
}: HoleBackgroundProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const animationFrameIdRef = React.useRef<number>(0);
  const isVisibleRef = React.useRef<boolean>(true);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const stateRef = React.useRef<any>({
    discs: [],
    lines: [],
    particles: [],
    clip: {},
    startDisc: {},
    endDisc: {},
    rect: { width: 0, height: 0 },
    render: { width: 0, height: 0, dpi: 1 },
    particleArea: {},
    linesCanvas: null,
  });

  const linear = (p: number) => p;
  const easeInExpo = (p: number) => (p === 0 ? 0 : Math.pow(2, 10 * (p - 1)));

  const tweenValue = React.useCallback(
    (start: number, end: number, p: number, ease: "inExpo" | null = null) => {
      const delta = end - start;
      const easeFn = ease === "inExpo" ? easeInExpo : linear;
      return start + delta * easeFn(p);
    },
    [],
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tweenDisc = React.useCallback(
    (disc: any) => {
      const { startDisc, endDisc } = stateRef.current;
      disc.x = tweenValue(startDisc.x, endDisc.x, disc.p);
      disc.y = tweenValue(startDisc.y, endDisc.y, disc.p, "inExpo");
      disc.w = tweenValue(startDisc.w, endDisc.w, disc.p);
      disc.h = tweenValue(startDisc.h, endDisc.h, disc.p);
    },
    [tweenValue],
  );

  const setSize = React.useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    stateRef.current.rect = { width: rect.width, height: rect.height };
    stateRef.current.render = {
      width: rect.width,
      height: rect.height,
      dpi: Math.min(window.devicePixelRatio || 1, 1.5),
    };
    canvas.width = stateRef.current.render.width * stateRef.current.render.dpi;
    canvas.height =
      stateRef.current.render.height * stateRef.current.render.dpi;
  }, []);

  const setDiscs = React.useCallback(() => {
    const { width, height } = stateRef.current.rect;
    stateRef.current.discs = [];
    stateRef.current.startDisc = {
      x: width * 0.5,
      y: height * 0.45,
      w: width * 0.75,
      h: height * 0.7,
    };
    stateRef.current.endDisc = {
      x: width * 0.5,
      y: height * 0.95,
      w: 0,
      h: 0,
    };
    let prevBottom = height;
    stateRef.current.clip = {};
    for (let i = 0; i < numberOfDiscs; i++) {
      const p = i / numberOfDiscs;
      const disc = { p, x: 0, y: 0, w: 0, h: 0 };
      tweenDisc(disc);
      const bottom = disc.y + disc.h;
      if (bottom <= prevBottom) {
        stateRef.current.clip = { disc: { ...disc }, i };
      }
      prevBottom = bottom;
      stateRef.current.discs.push(disc);
    }
    const clipPath = new Path2D();
    const disc = stateRef.current.clip.disc;
    if (disc) {
      clipPath.ellipse(disc.x, disc.y, disc.w, disc.h, 0, 0, Math.PI * 2);
      clipPath.rect(disc.x - disc.w, 0, disc.w * 2, disc.y);
      stateRef.current.clip.path = clipPath;
    }
  }, [numberOfDiscs, tweenDisc]);

  const setLines = React.useCallback(() => {
    const { width, height } = stateRef.current.rect;
    if (width === 0 || height === 0) return;
    stateRef.current.lines = [];
    const linesAngle = (Math.PI * 2) / numberOfLines;
    for (let i = 0; i < numberOfLines; i++) {
      stateRef.current.lines.push([]);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    stateRef.current.discs.forEach((disc: any) => {
      for (let i = 0; i < numberOfLines; i++) {
        const angle = i * linesAngle;
        const p = {
          x: disc.x + Math.cos(angle) * disc.w,
          y: disc.y + Math.sin(angle) * disc.h,
        };
        stateRef.current.lines[i].push(p);
      }
    });
    const offCanvas = document.createElement("canvas");
    offCanvas.width = width;
    offCanvas.height = height;
    const ctx = offCanvas.getContext("2d");
    if (!ctx || !stateRef.current.clip.path) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    stateRef.current.lines.forEach((line: any) => {
      ctx.save();
      let lineIsIn = false;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      line.forEach((p1: any, j: number) => {
        if (j === 0) return;
        const p0 = line[j - 1];
        if (
          !lineIsIn &&
          (ctx.isPointInPath(stateRef.current.clip.path, p1.x, p1.y) ||
            ctx.isPointInStroke(stateRef.current.clip.path, p1.x, p1.y))
        ) {
          lineIsIn = true;
        } else if (lineIsIn) {
          ctx.clip(stateRef.current.clip.path);
        }
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.closePath();
      });
      ctx.restore();
    });
    stateRef.current.linesCanvas = offCanvas;
  }, [numberOfLines, strokeColor]);

  const initParticle = React.useCallback(
    (start: boolean = false) => {
      const area = stateRef.current.particleArea;
      const sx = area.sx + area.sw * Math.random();
      const ex = area.ex + area.ew * Math.random();
      const dx = ex - sx;
      const y = start ? area.h * Math.random() : area.h;
      const r = 0.5 + Math.random() * 2;
      const vy = 0.2 + Math.random() * 0.5;
      return {
        x: sx,
        sx,
        dx,
        y,
        vy,
        p: 0,
        r,
        c: `rgba(${particleRGBColor[0]}, ${particleRGBColor[1]}, ${particleRGBColor[2]}, ${Math.random() * 0.25 + 0.05})`,
      };
    },
    [particleRGBColor],
  );

  const setParticles = React.useCallback(() => {
    const { width, height } = stateRef.current.rect;
    stateRef.current.particles = [];
    const disc = stateRef.current.clip.disc;
    if (!disc) return;
    stateRef.current.particleArea = {
      sw: disc.w * 0.5,
      ew: disc.w * 2,
      h: height * 0.85,
      sx: (width - disc.w * 0.5) / 2,
      ex: (width - disc.w * 2) / 2,
    };
    const totalParticles = 40;
    for (let i = 0; i < totalParticles; i++) {
      stateRef.current.particles.push(initParticle(true));
    }
  }, [initParticle]);

  const drawDiscs = React.useCallback(
    (ctx: CanvasRenderingContext2D) => {
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1.2;
      const outerDisc = stateRef.current.startDisc;
      if (!outerDisc.w) return;
      ctx.beginPath();
      ctx.ellipse(
        outerDisc.x,
        outerDisc.y,
        outerDisc.w,
        outerDisc.h,
        0,
        0,
        Math.PI * 2,
      );
      ctx.stroke();
      ctx.closePath();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      stateRef.current.discs.forEach((disc: any, i: number) => {
        if (i % 6 !== 0) return;
        if (disc.w < stateRef.current.clip.disc.w - 5) {
          ctx.save();
          ctx.clip(stateRef.current.clip.path);
        }
        ctx.beginPath();
        ctx.ellipse(disc.x, disc.y, disc.w, disc.h, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();
        if (disc.w < stateRef.current.clip.disc.w - 5) {
          ctx.restore();
        }
      });
    },
    [strokeColor],
  );

  const drawLines = React.useCallback((ctx: CanvasRenderingContext2D) => {
    if (stateRef.current.linesCanvas) {
      ctx.drawImage(stateRef.current.linesCanvas, 0, 0);
    }
  }, []);

  const drawParticles = React.useCallback((ctx: CanvasRenderingContext2D) => {
    if (!stateRef.current.clip.path) return;
    ctx.save();
    ctx.clip(stateRef.current.clip.path);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    stateRef.current.particles.forEach((particle: any) => {
      ctx.fillStyle = particle.c;
      ctx.beginPath();
      ctx.rect(particle.x, particle.y, particle.r, particle.r);
      ctx.closePath();
      ctx.fill();
    });
    ctx.restore();
  }, []);

  const moveDiscs = React.useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    stateRef.current.discs.forEach((disc: any) => {
      disc.p = (disc.p + 0.0006) % 1;
      tweenDisc(disc);
    });
  }, [tweenDisc]);

  const moveParticles = React.useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    stateRef.current.particles.forEach((particle: any, idx: number) => {
      particle.p = 1 - particle.y / stateRef.current.particleArea.h;
      particle.x = particle.sx + particle.dx * particle.p;
      particle.y -= particle.vy;
      if (particle.y < 0) {
        stateRef.current.particles[idx] = initParticle();
      }
    });
  }, [initParticle]);

  const tick = React.useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (isVisibleRef.current) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(stateRef.current.render.dpi, stateRef.current.render.dpi);
      moveDiscs();
      moveParticles();
      drawDiscs(ctx);
      drawLines(ctx);
      drawParticles(ctx);
      ctx.restore();
    }
    animationFrameIdRef.current = requestAnimationFrame(tick);
  }, [moveDiscs, moveParticles, drawDiscs, drawLines, drawParticles]);

  const init = React.useCallback(() => {
    setSize();
    setDiscs();
    setLines();
    setParticles();
  }, [setSize, setDiscs, setLines, setParticles]);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    init();
    tick();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    const handleResize = () => {
      setSize();
      setDiscs();
      setLines();
      setParticles();
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameIdRef.current);
    };
  }, [init, tick, setSize, setDiscs, setLines, setParticles]);

  return (
    <div
      ref={containerRef}
      data-slot="hole-background"
      className={cn(
        "relative w-full h-full overflow-hidden bg-[#0b0d10]",
        className,
      )}
      style={{ transform: "translateZ(0)", willChange: "transform" }}
      {...props}
    >
      {/* 2D Canvas with Soft Organic Masking to Blend Seamlessly into #0b0d10 */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block size-full opacity-65 pointer-events-none"
        style={{
          maskImage:
            "radial-gradient(ellipse at 50% 50%, black 30%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 50%, black 30%, transparent 90%)",
        }}
      />
      {/* Subtle Warm Monochromatic Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full blur-3xl opacity-35 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-[10] size-full">{children}</div>
    </div>
  );
}
