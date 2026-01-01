import { useEffect, useState, useRef, RefObject } from 'react';

interface UseParallaxOptions {
  speed?: number; // 0 to 1, where 1 is full scroll speed, 0.5 is half
  direction?: 'up' | 'down';
  disabled?: boolean;
}

/**
 * useParallax - Creates smooth parallax scrolling effect
 * Returns a ref and the current transform value
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(
  options: UseParallaxOptions = {}
): [RefObject<T>, number] {
  const { speed = 0.3, direction = 'up', disabled = false } = options;
  const ref = useRef<T>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (disabled || typeof window === 'undefined') return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const element = ref.current;
          if (!element) return;

          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // Calculate how far through the viewport the element is
          const elementCenter = rect.top + rect.height / 2;
          const viewportCenter = windowHeight / 2;
          const distanceFromCenter = elementCenter - viewportCenter;

          // Apply parallax offset based on distance from center
          const parallaxOffset = distanceFromCenter * speed * (direction === 'up' ? 1 : -1);
          setOffset(parallaxOffset);

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, direction, disabled]);

  return [ref, offset];
}

/**
 * useScrollProgress - Returns 0-1 progress of element through viewport
 */
export function useScrollProgress<T extends HTMLElement = HTMLDivElement>(): [
  RefObject<T>,
  number
] {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const element = ref.current;
          if (!element) return;

          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // 0 when element top enters viewport bottom
          // 1 when element bottom exits viewport top
          const start = windowHeight;
          const end = -rect.height;
          const current = rect.top;

          const rawProgress = (start - current) / (start - end);
          setProgress(Math.max(0, Math.min(1, rawProgress)));

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return [ref, progress];
}

export default useParallax;
