"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.1,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-out-expo ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

interface StaggerRevealProps {
  children: ReactNode[];
  className?: string;
  itemClassName?: string;
  baseDelay?: number;
  staggerDelay?: number;
  threshold?: number;
}

export function StaggerReveal({
  children,
  className = "",
  itemClassName = "",
  baseDelay = 0,
  staggerDelay = 80,
  threshold = 0.05,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={className}>
      {children.map((child, i) => (
        <div
          key={i}
          className={`transition-[opacity,transform] duration-700 ease-out-expo ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${itemClassName}`}
          style={{ transitionDelay: `${baseDelay + i * staggerDelay}ms` }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

export function useScrollProgress(ref: React.RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const rect = entry.boundingClientRect;
        const parent = entry.rootBounds || { top: 0, height: window.innerHeight };
        const visible = Math.min(rect.bottom, parent.height) - Math.max(rect.top, 0);
        const total = rect.height;
        setProgress(Math.max(0, Math.min(1, visible / total)));
      },
      { threshold: Array.from({ length: 20 }, (_, i) => i / 20) }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return progress;
}
