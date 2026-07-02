"use client";

export function GridPattern({
  className = "",
  size = 60,
  opacity = 0.04,
}: {
  className?: string;
  size?: number;
  opacity?: number;
}) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <pattern id="grid" width={size} height={size} patternUnits="userSpaceOnUse">
          <path d={`M ${size} 0 L 0 0 0 ${size}`} fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}

export function DotPattern({
  className = "",
  size = 24,
  opacity = 0.06,
}: {
  className?: string;
  size?: number;
  opacity?: number;
}) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <pattern id="dots" width={size} height={size} patternUnits="userSpaceOnUse">
          <circle cx={size / 2} cy={size / 2} r="1" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
}

export function DiagonalLines({
  className = "",
  opacity = 0.03,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <pattern id="diagonals" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="40" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#diagonals)" />
    </svg>
  );
}

export function ArchitecturalGrid({
  className = "",
  opacity = 0.025,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <pattern id="arch" width="120" height="120" patternUnits="userSpaceOnUse">
          <rect width="120" height="120" fill="none" stroke="currentColor" strokeWidth="0.3" />
          <circle cx="60" cy="60" r="20" fill="none" stroke="currentColor" strokeWidth="0.3" />
          <line x1="0" y1="60" x2="120" y2="60" stroke="currentColor" strokeWidth="0.3" />
          <line x1="60" y1="0" x2="60" y2="120" stroke="currentColor" strokeWidth="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#arch)" />
    </svg>
  );
}

export function EdgeGeometry({
  className = "",
  lines = 5,
  side = "right",
  progress,
}: {
  className?: string;
  lines?: number;
  side?: "left" | "right" | "top" | "bottom";
  /** 0-1. When set, lines draw in one by one (stroke-dashoffset) instead of sitting static. */
  progress?: number;
}) {
  const lineLength = 24;
  const gap = 16;
  const width = side === "left" || side === "right" ? lineLength + 4 : 200;
  const height = side === "top" || side === "bottom" ? lineLength + 4 : 200;

  const paths: string[] = [];
  for (let i = 0; i < lines; i++) {
    const offset = i * gap + 8;
    if (side === "right") {
      paths.push(`M ${width} ${offset} L ${width - lineLength} ${offset}`);
    } else if (side === "left") {
      paths.push(`M 0 ${offset} L ${lineLength} ${offset}`);
    } else if (side === "top") {
      paths.push(`M ${offset} 0 L ${offset} ${lineLength}`);
    } else {
      paths.push(`M ${offset} ${height} L ${offset} ${height - lineLength}`);
    }
  }

  return (
    <svg
      className={`pointer-events-none absolute ${className}`}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      style={{ opacity: 0.15 }}
      aria-hidden="true"
    >
      {paths.map((d, i) => {
        if (progress === undefined) return <path key={i} d={d} />;
        // Each line has its own slice of the progress range, so they draw in a
        // staggered sweep rather than all at once.
        const local = Math.max(0, Math.min(1, progress * lines - i));
        return (
          <path
            key={i}
            d={d}
            strokeDasharray={lineLength}
            strokeDashoffset={lineLength * (1 - local)}
          />
        );
      })}
    </svg>
  );
}

export function AccentGlow({
  className = "",
  size = "60%",
  position = "right",
  progress,
}: {
  className?: string;
  size?: string;
  position?: "center" | "right" | "left" | "top";
  /** 0-1 scroll progress. When set, the glow drifts slowly along the section (parallax), transform-only so it stays GPU-composited. */
  progress?: number;
}) {
  const positions: Record<string, string> = {
    center: "ellipse_at_center",
    right: "ellipse_at_70%_30%",
    left: "ellipse_at_30%_50%",
    top: "ellipse_at_50%_0%",
  };

  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        background: `radial-gradient(${positions[position]}, oklch(0.5 0.195 27 / 0.04) 0%, transparent ${size})`,
        transform: progress !== undefined ? `translate3d(0, ${(progress - 0.5) * -48}px, 0)` : undefined,
      }}
      aria-hidden="true"
    />
  );
}

export function GrainOverlay({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 mix-blend-screen ${className}`}
      style={{
        opacity: 0.015,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: "512px 512px",
        imageRendering: "pixelated",
      }}
      aria-hidden="true"
    />
  );
}
