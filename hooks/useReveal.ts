'use client';

import { useEffect, useRef } from 'react';

export function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold }
    );
    const el = ref.current;
    el?.querySelectorAll('.reveal').forEach((e) => observer.observe(e));
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
