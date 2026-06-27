"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { shouldAnimate } from "@/lib/animations";

/**
 * SmoothScroll component using Lenis.
 * Syncs with GSAP ScrollTrigger ticker for optimal performance.
 */
export default function SmoothScroll({ children }) {
  useEffect(() => {
    // If the user prefers reduced motion, disable smooth scrolling
    if (!shouldAnimate()) return;

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // standard fast-to-slow deceleration
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1.0,
      smoothTouch: false, // do not apply smooth scroll to mobile touch screens to keep native feel
      touchMultiplier: 2.0,
      infinite: false,
    });

    if (typeof window !== "undefined") {
      window.lenis = lenis;
    }

    // Sync Lenis scroll updates with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Sync GSAP ticker with Lenis raf
    const rafHandler = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(rafHandler);
    gsap.ticker.lagSmoothing(0);

    // Cleanup on unmount / route transition
    return () => {
      lenis.destroy();
      gsap.ticker.remove(rafHandler);
    };
  }, []);

  return <>{children}</>;
}
