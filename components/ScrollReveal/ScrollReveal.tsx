"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  stagger = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const baseClass = stagger ? "revealStagger" : "reveal";
  const visibleClass = visible ? "revealVisible" : "";

  return (
    <div
      ref={ref}
      className={`${baseClass} ${visibleClass} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
