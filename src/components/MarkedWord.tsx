"use client";

import { useEffect, useRef, useState } from "react";

interface MarkedWordProps {
  word: string;
  gesture?: "underline" | "circle" | "strike" | "bracket";
  className?: string;
  animateOnLoad?: boolean;
  delay?: number;
}

const gestures = {
  underline: {
    wrapper: `relative inline-flex`,
    mark: `absolute h-[0.045em] -bottom-[0.08em] left-0 right-0 bg-accent origin-left`,
    style: (visible: boolean) => ({ transform: visible ? "scaleX(1)" : "scaleX(0)" }),
  },
  circle: {
    wrapper: `relative inline-flex`,
    mark: `absolute w-[1.3em] h-[1.3em] -bottom-[0.15em] -left-[0.1em] rounded-full bg-transparent border-2 border-accent`,
    style: (visible: boolean) => ({ clipPath: visible ? "circle(50%)" : "circle(0%)" }),
  },
  strike: {
    wrapper: `relative inline-flex`,
    mark: `absolute h-[0.045em] top-[52%] bottom-auto left-0 right-0 bg-accent origin-left`,
    style: (visible: boolean) => ({ transform: visible ? "scaleX(1)" : "scaleX(0)" }),
  },
  bracket: {
    wrapper: `relative inline-flex`,
    mark: `absolute -left-1.5 -right-1.5 top-[-2px] bottom-[-2px] border-l-2 border-r-2 border-accent`,
    style: (visible: boolean) => ({ scale: visible ? "1 1" : "1 0", opacity: visible ? 1 : 0 }),
  },
};

export function MarkedWord({ word, gesture = "underline", className = "", animateOnLoad = false, delay = 0 }: MarkedWordProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(animateOnLoad);
  const g = gestures[gesture];

  useEffect(() => {
    if (animateOnLoad) {
      const timer = setTimeout(() => setVisible(true), delay);
      return () => clearTimeout(timer);
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animateOnLoad, delay]);

  return (
    <span ref={ref} className={`${g.wrapper} ${className}`}>
      {word}
      <span
        className={`${g.mark} transition duration-[600ms] ease-out-expo motion-reduce:duration-[1ms]`}
        style={g.style(visible)}
      />
    </span>
  );
}
