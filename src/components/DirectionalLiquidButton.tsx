"use client";

import { useRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function DirectionalLiquidButton({ href, className, style, children, onClick }: any) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const liquidRef = useRef<HTMLSpanElement>(null);

  const getEdge = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return "bottom";
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const top = y;
    const bottom = rect.height - y;
    const left = x;
    const right = rect.width - x;
    
    const min = Math.min(top, bottom, left, right);
    if (min === top) return "top";
    if (min === bottom) return "bottom";
    if (min === left) return "left";
    return "right";
  };

  const getStartPositions = (edge: string) => {
    if (edge === "top") return { top: "-220px", left: "50%" };
    if (edge === "bottom") return { top: "calc(100% + 220px)", left: "50%" };
    if (edge === "left") return { top: "50%", left: "-220px" };
    return { top: "50%", left: "calc(100% + 220px)" };
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!liquidRef.current) return;
    const edge = getEdge(e);
    const startPos = getStartPositions(edge);
    
    const el = liquidRef.current;
    el.style.transition = "none";
    el.style.top = startPos.top;
    el.style.left = startPos.left;
    
    // Force browser reflow to lock start position
    void el.offsetWidth;
    
    // Slow, silky smooth, luxury liquid entrance (1000ms with ultra-smooth cubic-bezier curve)
    el.style.transition = "all 1000ms cubic-bezier(0.16, 1, 0.3, 1)";
    el.style.top = "50%";
    el.style.left = "50%";
    el.style.transform = "translate(-50%, -50%) rotate(180deg)";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!liquidRef.current) return;
    const edge = getEdge(e);
    const exitPos = getStartPositions(edge);
    
    // Slow, gentle liquid exit (850ms)
    const el = liquidRef.current;
    el.style.transition = "all 850ms cubic-bezier(0.16, 1, 0.3, 1)";
    el.style.top = exitPos.top;
    el.style.left = exitPos.left;
    el.style.transform = "translate(-50%, -50%) rotate(0deg)";
  };

  return (
    <a
      ref={buttonRef}
      href={href}
      onClick={onClick}
      className={`group relative overflow-hidden transition-colors duration-700 hover:border-transparent ${className}`}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Heavy Foreground Red Liquid Wave */}
      <span
        ref={liquidRef}
        className="pointer-events-none absolute z-0 block h-80 w-80 rounded-[40%] bg-accent"
        style={{
          top: "calc(100% + 220px)",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(0deg)",
        }}
      />
      <div className="relative z-10 inline-flex items-center gap-4 md:gap-5">
        {children}
      </div>
    </a>
  );
}
