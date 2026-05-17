import Link from "next/link";
import styles from "./DonationCTA.module.css";

interface DonationCTAProps {
  title?: string;
  description?: string;
  variant?: "banner" | "inline";
}

export default function DonationCTA({
  title = "Every gift builds something that lasts",
  description = "Your donation funds schools, clinics, and clean water systems designed with—and owned by—the communities they serve.",
  variant = "banner",
}: DonationCTAProps) {
  return (
    <aside className={`${styles.cta} ${styles[variant]}`} aria-label="Donation call to action">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.copy}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
          </div>
          <div className={styles.actions}>
            <Link href="/donate" className="btn btnGold">
              Donate today
            </Link>
            <Link href="/projects#impact" className={`btn btnSecondary ${styles.outline}`}>
              See where funds go
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
