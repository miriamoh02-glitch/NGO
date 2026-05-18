import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Page Not Found",
    description:
      "The page you requested could not be found on Foundation Horizon. Return home to explore our humanitarian programs.",
    path: "/404",
    noIndex: true,
  }),
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className={styles.page}>
      <div className="container">
        <p className="sectionLabel">404</p>
        <h1>Page not found</h1>
        <p className={styles.text}>
          The page you are looking for may have moved or no longer exists.
          Let us guide you back to communities we serve.
        </p>
        <Link href="/" className="btn btnPrimary">
          Return home
        </Link>
      </div>
    </section>
  );
}
