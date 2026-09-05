"use client";

import React, { useRef, useState } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  strength?: number;
}

export function MagneticButton({
  children,
  href = "#contact",
  className = "",
  strength = 0.35,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <a
      ref={buttonRef}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: position.x === 0 ? "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)" : "none",
      }}
      className={`inline-flex items-center px-8 py-3.5 rounded-full border border-white/30 hover:border-white text-white font-sans text-sm font-medium transition-colors duration-300 hover:bg-white/10 shadow-lg group ${className}`}
    >
      <span 
        style={{
          transform: `translate3d(${position.x * 0.4}px, ${position.y * 0.4}px, 0)`,
          transition: position.x === 0 ? "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)" : "none",
        }}
        className="flex items-center gap-2.5"
      >
        {children}
      </span>
    </a>
  );
}
