import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import styles from "./Timeline.module.css";

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  milestones: Milestone[];
}

export default function Timeline({ milestones }: TimelineProps) {
  return (
    <ScrollReveal className={styles.timeline}>
      <ol className={styles.list}>
        {milestones.map((item, index) => (
          <li key={item.year} className={styles.item}>
            <span className={styles.year}>{item.year}</span>
            <div className={styles.content}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            {index < milestones.length - 1 && (
              <span className={styles.connector} aria-hidden />
            )}
          </li>
        ))}
      </ol>
    </ScrollReveal>
  );
}
