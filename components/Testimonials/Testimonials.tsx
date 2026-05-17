"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import styles from "./Testimonials.module.css";

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

interface TestimonialsProps {
  items: Testimonial[];
}

export default function Testimonials({ items }: TestimonialsProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prev = () => {
    setActive((i) => (i - 1 + items.length) % items.length);
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const current = items[active];

  return (
    <section
      className={styles.section}
      aria-label="Testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container">
        <blockquote className={styles.quote}>
          <p className={styles.text}>&ldquo;{current.quote}&rdquo;</p>
          <footer className={styles.author}>
            <div className={styles.avatar}>
              <Image
                src={current.image}
                alt=""
                width={56}
                height={56}
                className={styles.avatarImg}
              />
            </div>
            <cite>
              <span className={styles.name}>{current.name}</span>
              <span className={styles.role}>{current.role}</span>
            </cite>
          </footer>
        </blockquote>

        <div className={styles.controls}>
          <button
            type="button"
            className={styles.navBtn}
            onClick={prev}
            aria-label="Previous testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <div className={styles.dots} role="tablist" aria-label="Testimonial slides">
            {items.map((item, i) => (
              <button
                key={item.name}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Testimonial from ${item.name}`}
                className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>

          <button
            type="button"
            className={styles.navBtn}
            onClick={next}
            aria-label="Next testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
