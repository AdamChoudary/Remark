"use client";

import React, { useRef, useId } from "react";

export function BubbleNavButton({ href, className, style, children, onClick }: any) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const filterId = useId().replace(/:/g, "-");
  
  const b1Ref = useRef<HTMLSpanElement>(null);
  const b2Ref = useRef<HTMLSpanElement>(null);
  const b3Ref = useRef<HTMLSpanElement>(null);
  const b4Ref = useRef<HTMLSpanElement>(null);

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
    if (edge === "top") return { top: "-20px", left: "50%" };
    if (edge === "bottom") return { top: "calc(100% + 20px)", left: "50%" };
    if (edge === "left") return { top: "50%", left: "-20px" };
    return { top: "50%", left: "calc(100% + 20px)" };
  };

  const restingPositions = [
    { left: "30%", top: "50%" },
    { left: "55%", top: "50%" },
    { left: "75%", top: "45%" },
    { left: "20%", top: "60%" },
  ];

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const edge = getEdge(e);
    const startPos = getStartPositions(edge);
    const bubbles = [b1Ref, b2Ref, b3Ref, b4Ref];
    
    bubbles.forEach((ref) => {
      if (!ref.current) return;
      ref.current.style.transition = "none";
      ref.current.style.top = startPos.top;
      ref.current.style.left = startPos.left;
      ref.current.style.transform = `translate(-50%, -50%) scale(0)`;
    });
    
    // Force reflow
    void buttonRef.current?.offsetWidth;
    
    bubbles.forEach((ref, index) => {
      if (!ref.current) return;
      const duration = 600 + (index * 150);
      ref.current.style.transition = `all ${duration}ms cubic-bezier(0.2, 1, 0.3, 1)`;
      ref.current.style.top = restingPositions[index].top;
      ref.current.style.left = restingPositions[index].left;
      ref.current.style.transform = `translate(-50%, -50%) scale(1)`;
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const edge = getEdge(e);
    const exitPos = getStartPositions(edge);
    const bubbles = [b1Ref, b2Ref, b3Ref, b4Ref];
    
    bubbles.forEach((ref, index) => {
      if (!ref.current) return;
      const duration = 500 + (index * 100);
      ref.current.style.transition = `all ${duration}ms cubic-bezier(0.2, 1, 0.3, 1)`;
      ref.current.style.top = exitPos.top;
      ref.current.style.left = exitPos.left;
      ref.current.style.transform = `translate(-50%, -50%) scale(0)`;
    });
  };

  return (
    <a
      ref={buttonRef}
      href={href}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-full ${className}`}
      style={style}
    >
      <svg className="absolute w-0 h-0 pointer-events-none">
        <defs>
          <filter id={`goo-${filterId}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Distinct Red Water Droplets */}
      <div className="absolute inset-0 -z-10 pointer-events-none" style={{ filter: `url(#goo-${filterId})` }}>
        <span ref={b1Ref} className="absolute block h-7 w-7 rounded-full bg-accent" style={{ transform: "translate(-50%, -50%) scale(0)" }} />
        <span ref={b2Ref} className="absolute block h-10 w-10 rounded-full bg-accent" style={{ transform: "translate(-50%, -50%) scale(0)" }} />
        <span ref={b3Ref} className="absolute block h-6 w-6 rounded-full bg-accent" style={{ transform: "translate(-50%, -50%) scale(0)" }} />
        <span ref={b4Ref} className="absolute block h-5 w-5 rounded-full bg-accent" style={{ transform: "translate(-50%, -50%) scale(0)" }} />
      </div>

      <span className="relative z-10 block transition-colors duration-300 group-hover:text-white">{children}</span>
    </a>
  );
}
