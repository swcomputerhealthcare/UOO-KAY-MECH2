/**
 * Centralized motion configuration for Uoo Kay Mech Industries
 * Establishes premium, mechanical, and restrained animation systems.
 */

export const industrialEase = "power3.out";
export const revealDuration = 0.8;
export const imageRevealDuration = 1.0;

/**
 * Check if the user has requested reduced motion.
 * If yes, all animations should fall back to standard visual displays.
 */
export const shouldAnimate = () => {
  if (typeof window === "undefined") return false;
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};
