"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { shouldAnimate, industrialEase } from "@/lib/animations";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Reusable hook for scroll-triggered reveals.
 * Animates only opacity and transform for high performance (uses GPU layers).
 */
export function useGSAPReveal(options = {}) {
  const elementRef = useRef(null);

  const {
    y = 40,
    x = 0,
    scale = 1,
    opacity = 0,
    duration = 0.8,
    ease = industrialEase,
    delay = 0,
    stagger = 0,
    start = "top 85%", // Triggers when 15% enters viewport
    toggleActions = "play none none reverse",
    scrub = false,
  } = options;

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    // If the user prefers reduced motion or is on mobile, do not run animations
    if (isMobile || !shouldAnimate() || !elementRef.current) return;

    const el = elementRef.current;
    
    // Set initial values
    gsap.set(el, {
      opacity: opacity,
      y: y,
      x: x,
      scale: scale,
    });

    const trigger = gsap.to(el, {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      duration: duration,
      ease: ease,
      delay: delay,
      stagger: stagger,
      scrollTrigger: {
        trigger: el,
        start: start,
        toggleActions: toggleActions,
        scrub: scrub,
        invalidateOnRefresh: true,
      }
    });

    // Cleanup to prevent leaks on unmount or route changes
    return () => {
      trigger.kill();
      if (trigger.scrollTrigger) {
        trigger.scrollTrigger.kill();
      }
    };
  }, [y, x, scale, opacity, duration, ease, delay, stagger, start, toggleActions, scrub]);

  return elementRef;
}
export default useGSAPReveal;
