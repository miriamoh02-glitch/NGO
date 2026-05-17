"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ImpactStats.module.css";

interface Stat {
  value: number;
  suffix?: string;
  label: string;
  description?: string;
}

interface ImpactStatsProps {
  stats: Stat[];
  variant?: "light" | "dark";
}

function AnimatedNumber({
  value,
  suffix,
  active,
}: {
  value: number;
  suffix?: string;
  active: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setDisplay(value);
      return;
    }

    const duration = 2000;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [active, value]);

  return (
    <span className={styles.number}>
      {display}
      {suffix}
    </span>
  );
}

export default function ImpactStats({
  stats,
  variant = "light",
}: ImpactStatsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.grid} ${variant === "dark" ? styles.dark : ""}`}
      role="list"
    >
      {stats.map((stat) => (
        <article key={stat.label} className={styles.stat} role="listitem">
          <AnimatedNumber
            value={stat.value}
            suffix={stat.suffix}
            active={active}
          />
          <h3 className={styles.label}>{stat.label}</h3>
          {stat.description && (
            <p className={styles.description}>{stat.description}</p>
          )}
        </article>
      ))}
    </div>
  );
}
