"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./BeforeAfter.module.css";

interface BeforeAfterProps {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
}

export default function BeforeAfter({ before, after }: BeforeAfterProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, x)));
  };

  const onPointerDown = (e: React.PointerEvent) => {
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!(e.target as HTMLElement).hasPointerCapture?.(e.pointerId)) return;
    updatePosition(e.clientX);
  };

  return (
    <div
      ref={containerRef}
      className={styles.container}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      role="slider"
      aria-label="Before and after comparison"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5));
        if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5));
      }}
    >
      <div className={styles.afterWrap}>
        <Image src={after.src} alt={after.alt} fill sizes="(max-width: 900px) 100vw, 900px" className={styles.image} />
        <span className={`${styles.label} ${styles.labelAfter}`}>After</span>
      </div>
      <div className={styles.beforeWrap} style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Image src={before.src} alt={before.alt} fill sizes="(max-width: 900px) 100vw, 900px" className={styles.image} />
        <span className={`${styles.label} ${styles.labelBefore}`}>Before</span>
      </div>
      <div
        className={styles.handle}
        style={{ left: `${position}%` }}
        aria-hidden
      >
        <span className={styles.handleBar} />
        <span className={styles.handleKnob}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M8 8l-4 4 4 4M16 8l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </div>
    </div>
  );
}
