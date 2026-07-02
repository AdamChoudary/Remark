import { useEffect, useRef, useState } from "react";

/**
 * Animates a number from 0 to target when the element enters the viewport.
 * Uses a cubic ease-out for a natural "settling" feel, not linear.
 * @param target The final value to count to
 * @param duration Animation duration in ms
 * @param startOnView Whether to auto-start when in view (default: true)
 * @returns { ref, value, isAnimating }
 */
export function useCountUp(
  target: number,
  duration: number = 1500,
  startOnView: boolean = true,
  decimals: number = 0
) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!startOnView) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          setIsAnimating(true);

          const startTime = performance.now();
          let rafId: number;

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Cubic ease-out for natural settling feel
            const eased = 1 - Math.pow(1 - progress, 3);
            
            const factor = Math.pow(10, decimals);
            setValue(Math.round(eased * target * factor) / factor);

            if (progress < 1) {
              rafId = requestAnimationFrame(animate);
            } else {
              setIsAnimating(false);
            }
          };

          rafId = requestAnimationFrame(animate);
          return () => cancelAnimationFrame(rafId);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, startOnView, decimals]);

  return { ref, value, isAnimating };
}
