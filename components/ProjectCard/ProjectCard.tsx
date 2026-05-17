import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectCard.module.css";

export interface ProjectCardData {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  excerpt: string;
}

interface ProjectCardProps {
  project: ProjectCardData;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article className={`${styles.card} ${featured ? styles.featured : ""}`}>
      <Link href="/projects" className={styles.link} aria-label={`Read about ${project.title}`}>
        <div className={styles.imageWrap}>
          <Image
            src={project.image}
            alt={`${project.title} in ${project.location}`}
            fill
            sizes={featured ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 100vw, 33vw"}
            className={styles.image}
          />
          <span className={styles.category}>{project.category}</span>
        </div>
        <div className={styles.body}>
          <div className={styles.meta}>
            <span>{project.location}</span>
            <span aria-hidden>·</span>
            <time dateTime={project.year}>{project.year}</time>
          </div>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.excerpt}>{project.excerpt}</p>
          <span className={styles.readMore}>View project</span>
        </div>
      </Link>
    </article>
  );
}
