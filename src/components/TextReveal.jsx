"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { shouldAnimate } from "@/lib/animations";
import { useGSAPReveal } from "@/hooks/useGSAPReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * FadeUpText: Fades up paragraphs or blocks as a single group.
 */
export function FadeUpText({ children, className, delay = 0 }) {
  const ref = useGSAPReveal({
    y: 20,
    opacity: 0,
    duration: 0.8,
    delay: delay,
    ease: "power3.out",
  });
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/**
 * StaggerWords: Splits heading text by words to emulate a clean line-by-line reveal
 * without layout shifts or letter distortion.
 */
export function StaggerWords({ text, className, delay = 0 }) {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!shouldAnimate() || !containerRef.current) return;
    
    const words = containerRef.current.querySelectorAll(".word-item");
    const tween = gsap.fromTo(words,
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.04,
        duration: 0.6,
        ease: "power2.out",
        delay: delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    return () => {
      tween.kill();
      if (tween.scrollTrigger) tween.scrollTrigger.kill();
    };
  }, [text, delay]);

  if (!text) return null;
  const words = text.split(" ");

  return (
    <span ref={containerRef} className={`inline-block ${className || ""}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] vertical-align-bottom">
          <span className="inline-block word-item opacity-0 will-change-transform">
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}

/**
 * SectionLabelReveal: Reveals uppercase technical section label/tags.
 */
export function SectionLabelReveal({ label, className, delay = 0 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!shouldAnimate() || !containerRef.current) return;
    
    const tween = gsap.fromTo(containerRef.current,
      { opacity: 0, x: -15 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        }
      }
    );

    return () => {
      tween.kill();
      if (tween.scrollTrigger) tween.scrollTrigger.kill();
    };
  }, [label, delay]);

  return (
    <div ref={containerRef} className={`inline-block opacity-0 will-change-transform ${className || ""}`}>
      {label}
    </div>
  );
}
