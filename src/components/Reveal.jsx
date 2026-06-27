"use client";

/**
 * Reveal: Wrapper component to cleanly render children without animations.
 */
export default function Reveal({ children, className }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
