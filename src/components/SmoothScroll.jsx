"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { shouldAnimate } from "@/lib/animations";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * SmoothScroll component using Lenis.
 * Syncs with GSAP ScrollTrigger ticker for optimal performance.
 */
export default function SmoothScroll({ children }) {
  const pathname = usePathname();

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

    // Watch font loading on mount
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(() => {
        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });
      });
    }

    // Watch load events
    const loadHandler = () => {
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    };
    window.addEventListener("load", loadHandler);

    // Cleanup on unmount / route transition
    return () => {
      lenis.destroy();
      gsap.ticker.remove(rafHandler);
      window.removeEventListener("load", loadHandler);
    };
  }, []);

  // Listen to path changes to refresh triggers and handle lazy loaded images on the new page
  useEffect(() => {
    // 1. Initial recalculation on page change
    requestAnimationFrame(() => {
      ScrollTrigger.refresh(true);
    });

    // 2. Register listeners on all images of the newly loaded page
    const refreshHandler = () => {
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    };

    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      if (img.complete) {
        // Already loaded, no-op
      } else {
        img.addEventListener("load", refreshHandler);
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", refreshHandler);
      });
    };
  }, [pathname]);

  return <>{children}</>;
}
