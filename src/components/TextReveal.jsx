"use client";

/**
 * FadeUpText: Simply renders children directly.
 */
export function FadeUpText({ children, className }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

/**
 * StaggerWords: Simply renders text directly.
 */
export function StaggerWords({ text, className }) {
  return (
    <span className={className}>
      {text}
    </span>
  );
}

/**
 * SectionLabelReveal: Simply renders label directly.
 */
export function SectionLabelReveal({ label, className }) {
  return (
    <div className={className}>
      {label}
    </div>
  );
}
