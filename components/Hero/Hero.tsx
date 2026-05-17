"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { images } from "@/lib/images";
import styles from "./Hero.module.css";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  compact?: boolean;
  align?: "left" | "center";
}

export default function Hero({
  title,
  subtitle,
  description,
  image = images.hero.home,
  imageAlt = "Children walking toward a newly built school at golden hour",
  primaryCta = { label: "Support our work", href: "/donate" },
  secondaryCta = { label: "See our impact", href: "/projects#impact" },
  compact = false,
  align = "left",
}: HeroProps) {
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = mediaRef.current;
    if (!media) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const onScroll = () => {
      const offset = window.scrollY * 0.35;
      media.style.transform = `translate3d(0, ${offset}px, 0) scale(1.08)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className={`${styles.hero} ${compact ? styles.compact : ""} ${styles[align]}`}
      aria-label="Hero"
    >
      <div className={styles.mediaWrap} ref={mediaRef}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />
        <div className={styles.overlay} aria-hidden />
      </div>

      <div className={`container ${styles.content}`}>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <h1 className={styles.title}>{title}</h1>
        {description && <p className={styles.description}>{description}</p>}
        {(primaryCta || secondaryCta) && (
          <div className={styles.actions}>
            {primaryCta && (
              <Link href={primaryCta.href} className="btn btnGold">
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href} className={`btn btnSecondary ${styles.secondaryBtn}`}>
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
        {!compact && (
          <div className={styles.scrollHint} aria-hidden>
            <span>Scroll</span>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
              <rect x="5" y="2" width="6" height="10" rx="3" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="8" cy="6" r="1" fill="currentColor" className={styles.scrollDot} />
            </svg>
          </div>
        )}
      </div>
    </section>
  );
}
