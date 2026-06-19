"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [prevPath, setPrevPath] = useState(pathname);
  const containerRef = useRef(null);
  const layersRef = useRef([]);

  useEffect(() => {
    // Skip animation on initial render/mount to avoid flashing
    if (pathname === prevPath) {
      const handle = requestAnimationFrame(() => {
        setDisplayChildren(children);
      });
      return () => cancelAnimationFrame(handle);
    }

    const layers = layersRef.current;
    if (!layers || layers.length < 3) {
      setDisplayChildren(children);
      setPrevPath(pathname);
      return;
    }

    // Lock page interaction during route animation to prevent double-clicks
    document.body.style.pointerEvents = "none";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.pointerEvents = "auto";
        setPrevPath(pathname);
        // Reset layers immediately back to original offscreen left position for the next sweep
        gsap.set(layers, { x: 0 });
        // Refresh ScrollTrigger positions after container dimensions recalculate
        ScrollTrigger.refresh();
      }
    });

    // Ensure layers start at 0 offset (which is -110vw offscreen)
    gsap.set(layers, { x: 0 });

    // 1. Sweep In (power3.in accelerates to cover the viewport quickly)
    tl.to(layers, {
      x: "110vw",
      duration: 0.45,
      ease: "power3.in",
      stagger: 0.06
    });

    // 2. Switch Route Content while fully covered by the sky blue layer
    tl.call(() => {
      setDisplayChildren(children);
      window.scrollTo(0, 0);
    });

    // Brief hold to allow render settlement
    tl.to({}, { duration: 0.05 });

    // 3. Sweep Out (power3.out decelerates to reveal new content smoothly)
    tl.to(layers, {
      x: "220vw",
      duration: 0.45,
      ease: "power3.out",
      stagger: 0.06
    });

    return () => {
      tl.kill();
    };
  }, [pathname, children, prevPath]);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Three overlapping full-screen sweep layers positioned completely offscreen left by default */}
      <div className="fixed inset-0 z-[99999] pointer-events-none">
        <div
          ref={(el) => (layersRef.current[0] = el)}
          className="fixed inset-y-0 w-screen bg-[#121212] pointer-events-none shadow-[20px_0_45px_rgba(0,0,0,0.6)]"
          style={{ left: "-110vw", willChange: "transform" }}
        />
        <div
          ref={(el) => (layersRef.current[1] = el)}
          className="fixed inset-y-0 w-screen bg-[#262626] pointer-events-none shadow-[20px_0_45px_rgba(0,0,0,0.6)]"
          style={{ left: "-110vw", willChange: "transform" }}
        />
        <div
          ref={(el) => (layersRef.current[2] = el)}
          className="fixed inset-y-0 w-screen bg-[#C46A2D] pointer-events-none shadow-[20px_0_45px_rgba(0,0,0,0.6)]"
          style={{ left: "-110vw", willChange: "transform" }}
        />
      </div>

      <div className="w-full">
        {displayChildren}
      </div>
    </div>
  );
}
