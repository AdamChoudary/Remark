'use client';

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';

interface ScrollContextValue {
  progress: number;
  progressRef: { current: number };
  isDesktop: boolean;
}

const ScrollContext = createContext<ScrollContextValue>({
  progress: 0,
  progressRef: { current: 0 },
  isDesktop: false,
});

export function useScrollContext() {
  return useContext(ScrollContext);
}

const COLOR_STOPS = [
  { at: 0.0, color: [0.12, 0.02, 0.02] as const },   // Hero — deep red
  { at: 0.2, color: [0.10, 0.03, 0.03] as const },   // Narrative — warmer
  { at: 0.4, color: [0.08, 0.05, 0.04] as const },   // Gallery — amber
  { at: 0.6, color: [0.10, 0.03, 0.02] as const },   // Capabilities — deep warm
  { at: 0.8, color: [0.10, 0.02, 0.02] as const },   // Testimonial — settled
  { at: 1.0, color: [0.08, 0.02, 0.02] as const },   // CTA/Footer — subtle
] as const;

export function getWaveColor(progress: number): [number, number, number] {
  const clamped = Math.max(0, Math.min(1, progress));
  for (let i = 0; i < COLOR_STOPS.length - 1; i++) {
    const a = COLOR_STOPS[i];
    const b = COLOR_STOPS[i + 1];
    if (clamped >= a.at && clamped <= b.at) {
      const t = (clamped - a.at) / (b.at - a.at);
      return [
        a.color[0] + (b.color[0] - a.color[0]) * t,
        a.color[1] + (b.color[1] - a.color[1]) * t,
        a.color[2] + (b.color[2] - a.color[2]) * t,
      ];
    }
  }
  return COLOR_STOPS[COLOR_STOPS.length - 1].color as [number, number, number];
}

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  const frameId = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1025px) and (pointer: fine)');
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    let cleanup: (() => void) | undefined;

    async function init() {
      const [{ default: Lenis }, { default: gsap }] = await Promise.all([
        import('lenis'),
        import('gsap'),
      ]);
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1,
      });

      lenis.on('scroll', (e: { progress: number }) => {
        progressRef.current = e.progress;
      });

      gsap.ticker.add((time: number) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);

      const updateProgress = () => {
        setProgress(progressRef.current);
        frameId.current = requestAnimationFrame(updateProgress);
      };
      frameId.current = requestAnimationFrame(updateProgress);

      cleanup = () => {
        cancelAnimationFrame(frameId.current);
        gsap.ticker.remove(lenis.raf);
        lenis.destroy();
        ScrollTrigger.getAll().forEach((st: { kill: () => void }) => st.kill());
      };
    }

    init();

    return () => cleanup?.();
  }, [isDesktop]);

  useEffect(() => {
    if (isDesktop) return;
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const p = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      progressRef.current = p;
      setProgress(p);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDesktop]);

  return (
    <ScrollContext.Provider value={{ progress, progressRef, isDesktop }}>
      {children}
    </ScrollContext.Provider>
  );
}
