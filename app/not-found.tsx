import Link from "next/link";
import styles from "./not-found.module.css";

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
