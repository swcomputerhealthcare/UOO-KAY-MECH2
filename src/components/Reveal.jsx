"use client";

import { useGSAPReveal } from "@/hooks/useGSAPReveal";

/**
 * Reveal: Wrapper component to cleanly animate child components on scroll.
 */
export default function Reveal({ children, className, ...options }) {
  const ref = useGSAPReveal(options);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
