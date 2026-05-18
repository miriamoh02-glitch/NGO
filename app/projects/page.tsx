import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BeforeAfter from "@/components/BeforeAfter/BeforeAfter";
import DonationCTA from "@/components/DonationCTA/DonationCTA";
import Gallery from "@/components/Gallery/Gallery";
import Hero from "@/components/Hero/Hero";
import ImpactStats from "@/components/ImpactStats/ImpactStats";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import {
  beforeAfter,
  galleryImages,
  impactMetrics,
  impactStats,
  projects,
} from "@/lib/data";
import { images } from "@/lib/images";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Projects & Impact",
  description:
    "Explore Foundation Horizon schools, clinics, boreholes, impact metrics, and community transformation across Africa.",
};

export default function ProjectsPage() {
  const schools = projects.filter((p) => p.category === "Education");
  const clinics = projects.filter((p) => p.category === "Healthcare");
  const water = projects.filter((p) => p.category === "Water");

  return (
    <>
      <Hero
        compact
        align="center"
        title="Proof in brick, steel, and flowing water"
        description="Every project begins with listening—and ends with infrastructure communities protect for generations."
        image={images.hero.projects}
        imageAlt="Volunteers and community members building school infrastructure together"
        primaryCta={{ label: "Support a project", href: "/donate" }}
        secondaryCta={{ label: "View impact data", href: "#impact" }}
      />

      <section
        id="impact"
        className={`section ${styles.dashboard}`}
        aria-label="Impact dashboard"
      >
        <div className="container">
          <ScrollReveal>
            <p className="sectionLabel">At a glance</p>
            <h2 className="sectionTitle">Cumulative infrastructure impact</h2>
            <p className={styles.dashboardIntro}>
              Outcomes we publish, audit, and verify—updated annually from field
              offices across fourteen countries.
            </p>
          </ScrollReveal>
          <ImpactStats stats={impactStats} variant="dark" />
        </div>
      </section>

      <section
        className={`section ${styles.featuredWork}`}
        aria-labelledby="featured-work-heading"
      >
        <div className="container">
          <ScrollReveal>
            <p className="sectionLabel">Featured work</p>
            <h2 id="featured-work-heading" className="sectionTitle">
              Infrastructure that transforms daily life
            </h2>
            <p className={styles.featuredIntro}>
              Every project begins with listening—and ends with infrastructure
              communities protect for generations.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <figure className={styles.communityVoice}>
              <div className={styles.communityVoiceImage}>
                <Image
                  src={images.impactCommunityVoice}
                  alt="Young women sitting together overlooking their community"
                  fill
                  sizes="(max-width: 900px) 100vw, 900px"
                  className={styles.img}
                />
                <figcaption className={styles.communityVoiceQuote}>
                  <blockquote>
                    <p>
                      &ldquo;They did not give us a gift. They gave us a future
                      our grandchildren will inherit.&rdquo;
                    </p>
                    <cite>— Village council, Kavango Region</cite>
                  </blockquote>
                </figcaption>
              </div>
            </figure>
          </ScrollReveal>
        </div>
      </section>

      <section className="section" aria-labelledby="schools-heading">
        <div className="container">
          <ScrollReveal>
            <p className="sectionLabel">Education</p>
            <h2 id="schools-heading" className="sectionTitle">
              Schools built for generations
            </h2>
            <p className="sectionIntro">
              {schools.length} education projects delivering classrooms, libraries,
              dormitories, and teacher housing to rural learners.
            </p>
          </ScrollReveal>
          <ScrollReveal stagger className={styles.grid}>
            {schools.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className={`section ${styles.alt}`} aria-labelledby="clinics-heading">
        <div className="container">
          <ScrollReveal>
            <p className="sectionLabel">Healthcare</p>
            <h2 id="clinics-heading" className="sectionTitle">
              Clinics where care reaches the unreachable
            </h2>
          </ScrollReveal>
          <ScrollReveal stagger className={styles.grid}>
            {clinics.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="section" aria-labelledby="water-heading">
        <div className="container">
          <ScrollReveal>
            <p className="sectionLabel">Water access</p>
            <h2 id="water-heading" className="sectionTitle">
              Boreholes and pipelines that end thirst
            </h2>
          </ScrollReveal>
          <ScrollReveal stagger className={styles.grid}>
            {water.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="section" aria-labelledby="metrics-heading">
        <div className="container">
          <ScrollReveal>
            <p className="sectionLabel">Deep metrics</p>
            <h2 id="metrics-heading" className="sectionTitle">
              Visual storytelling by the numbers
            </h2>
          </ScrollReveal>
          <div className={styles.metricList}>
            {impactMetrics.map((m, i) => (
              <ScrollReveal key={m.title}>
                <article className={`${styles.metric} ${i % 2 === 1 ? styles.metricReverse : ""}`}>
                  <div className={styles.metricImage}>
                    <Image
                      src={m.image}
                      alt={`Photograph illustrating ${m.title.toLowerCase()}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className={styles.img}
                    />
                  </div>
                  <div className={styles.metricCopy}>
                    <span className={styles.metricValue}>{m.value}</span>
                    <h3>{m.title}</h3>
                    <p>{m.detail}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.beforeAfter}`} aria-labelledby="transform-heading">
        <div className="container">
          <ScrollReveal>
            <p className="sectionLabel">Transformation</p>
            <h2 id="transform-heading" className="sectionTitle">
              Greenfield Village: before and after
            </h2>
            <p className={styles.beforeAfterIntro}>
              Drag the slider to see how integrated infrastructure reshaped a
              settlement in eighteen months.
            </p>
          </ScrollReveal>
          <BeforeAfter before={beforeAfter.before} after={beforeAfter.after} />
        </div>
      </section>

      <section className={`section ${styles.gallery}`} aria-labelledby="gallery-heading">
        <div className="container">
          <ScrollReveal>
            <p className="sectionLabel">Field gallery</p>
            <h2 id="gallery-heading" className="sectionTitle">
              Documentary moments from the field
            </h2>
          </ScrollReveal>
          <Gallery images={galleryImages} />
        </div>
      </section>

      <section className={`section ${styles.video}`} aria-labelledby="video-heading">
        <div className="container">
          <ScrollReveal>
            <p className="sectionLabel">Film</p>
            <h2 id="video-heading" className="sectionTitle">
              A day at Sunrise Academy
            </h2>
          </ScrollReveal>
          <div className={styles.videoWrap}>
            <iframe
              src="https://www.youtube.com/embed/ScMzIvxBSi4"
              title="Documentary: Sunrise Academy opening day"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className={`section ${styles.report}`} aria-labelledby="report-heading">
        <div className="container">
          <ScrollReveal>
            <div className={styles.reportInner}>
              <div>
                <p className="sectionLabel">Accountability</p>
                <h2 id="report-heading">2024 Annual Impact Report</h2>
                <p>
                  Our audited report details every dollar spent, every borehole
                  drilled, and every classroom opened. Request a printed copy or
                  download the executive summary.
                </p>
              </div>
              <Link href="/contact" className="btn btnGold">
                Request report
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <DonationCTA
        title="Turn data into action"
        description="Your gift becomes measurable outcomes—enrollment rates, patient visits, liters of clean water."
        variant="inline"
      />
    </>
  );
}




