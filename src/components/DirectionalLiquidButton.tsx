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
    if (edge === "top") return { top: "-150px", left: "50%" };
    if (edge === "bottom") return { top: "calc(100% + 150px)", left: "50%" };
    if (edge === "left") return { top: "50%", left: "-150px" };
    return { top: "50%", left: "calc(100% + 150px)" };
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!liquidRef.current) return;
    const edge = getEdge(e);
    const startPos = getStartPositions(edge);
    
    const el = liquidRef.current;
    el.style.transition = "none";
    el.style.top = startPos.top;
    el.style.left = startPos.left;
    
    // Force reflow
    void el.offsetWidth;
    
    // Animate the wave sliding smoothly into the center
    el.style.transition = "all 600ms cubic-bezier(0.2, 1, 0.3, 1)";
    el.style.top = "50%";
    el.style.left = "50%";
    el.style.transform = "translate(-50%, -50%) rotate(180deg)";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!liquidRef.current) return;
    const edge = getEdge(e);
    const exitPos = getStartPositions(edge);
    
    // Animate out towards the exact edge the mouse left from
    const el = liquidRef.current;
    el.style.transition = "all 500ms cubic-bezier(0.2, 1, 0.3, 1)";
    el.style.top = exitPos.top;
    el.style.left = exitPos.left;
    el.style.transform = "translate(-50%, -50%) rotate(0deg)";
  };

  return (
    <a
      ref={buttonRef}
      href={href}
      onClick={onClick}
      className={`group relative overflow-hidden transition-all duration-300 hover:border-transparent ${className}`}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Heavy Foreground Red Liquid Wave */}
      <span
        ref={liquidRef}
        className="pointer-events-none absolute z-0 block h-64 w-64 rounded-[42%] bg-accent"
        style={{
          top: "calc(100% + 150px)",
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
