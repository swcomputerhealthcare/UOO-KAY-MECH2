"use client";

import { useRef } from "react";

/**
 * Reusable hook for scroll-triggered reveals (Simplified/Statically disabled).
 */
export function useGSAPReveal() {
  const elementRef = useRef(null);
  return elementRef;
}

export default useGSAPReveal;
