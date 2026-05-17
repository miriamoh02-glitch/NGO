"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Gallery.module.css";

export interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

export default function Gallery({ images }: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight")
        setLightboxIndex((i) => ((i ?? 0) + 1) % images.length);
      if (e.key === "ArrowLeft")
        setLightboxIndex((i) => ((i ?? 0) - 1 + images.length) % images.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex, images.length]);

  return (
    <>
      <div className={styles.grid}>
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            className={`${styles.item} ${i === 0 ? styles.feature : ""}`}
            onClick={() => setLightboxIndex(i)}
            aria-label={`Open image: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className={styles.image}
            />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
        >
          <button
            type="button"
            className={styles.close}
            onClick={() => setLightboxIndex(null)}
            aria-label="Close lightbox"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <button
            type="button"
            className={`${styles.nav} ${styles.prev}`}
            onClick={() =>
              setLightboxIndex((i) => ((i ?? 0) - 1 + images.length) % images.length)
            }
            aria-label="Previous image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <div className={styles.lightboxImage}>
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              fill
              sizes="90vw"
              className={styles.image}
              priority
            />
          </div>
          <button
            type="button"
            className={`${styles.nav} ${styles.next}`}
            onClick={() =>
              setLightboxIndex((i) => ((i ?? 0) + 1) % images.length)
            }
            aria-label="Next image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <p className={styles.caption}>{images[lightboxIndex].alt}</p>
        </div>
      )}
    </>
  );
}
