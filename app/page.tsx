import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DonationCTA from "@/components/DonationCTA/DonationCTA";
import Hero from "@/components/Hero/Hero";
import ImpactStats from "@/components/ImpactStats/ImpactStats";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import Testimonials from "@/components/Testimonials/Testimonials";
import Timeline from "@/components/Timeline/Timeline";
import {
  communities,
  impactStats,
  partners,
  projects,
  siteConfig,
  team,
  testimonials,
  timelineMilestones,
  values,
} from "@/lib/data";
import { images } from "@/lib/images";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.tagline,
};

export default function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <Hero
        subtitle="Building dignity through infrastructure"
        title="Where communities rise, hope takes root"
        description={siteConfig.tagline}
        secondaryCta={{ label: "See our impact", href: "/projects#impact" }}
      />

      <section className={`section ${styles.mission}`} aria-labelledby="mission-heading">
        <div className="container">
          <ScrollReveal>
            <div className={styles.missionGrid}>
              <div className={styles.missionCopy}>
                <p className="sectionLabel">Our mission</p>
                <h2 id="mission-heading" className="sectionTitle">
                  Infrastructure is not charity. It is justice.
                </h2>
                <p>
                  Foundation Horizon partners with underserved communities to
                  design and deliver schools, clinics, and water systems that
                  last. We listen first, build with local labor, and leave
                  maintenance plans—not dependency.
                </p>
                <a href="#story" className="textLink">
                  Read our story
                </a>
              </div>
              <div className={styles.missionVisual}>
                <div className={styles.missionImageMain}>
                  <Image
                    src={images.mission}
                    alt="Community members and volunteers at a school groundbreaking ceremony"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className={styles.missionImg}
                  />
                </div>
                <blockquote className={styles.missionQuote}>
                  <p>
                    &ldquo;They did not give us a gift. They gave us a future
                    our grandchildren will inherit.&rdquo;
                  </p>
                  <cite>— Village council, Kavango Region</cite>
                </blockquote>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="story" className="section" aria-labelledby="story-heading">
        <div className="container">
          <ScrollReveal>
            <div className={styles.storyLayout}>
              <div>
                <p className="sectionLabel">Our story</p>
                <h2 id="story-heading" className="sectionTitle">
                  From one classroom to forty-eight thousand lives
                </h2>
                <p className={styles.prose}>
                  Foundation Horizon began when Dr. Naomi Okonkwo returned from a
                  WHO posting in Malawi and could not forget a village where
                  children studied under a tree. Twelve volunteers raised funds
                  for four walls and a roof. That classroom still stands—and
                  hundreds more followed.
                </p>
                <p className={styles.prose}>
                  Today we operate across fourteen countries with a single
                  conviction: dignified infrastructure is the foundation of
                  self-determination. We are not an emergency relief agency. We
                  are builders, partners, and witnesses to transformation.
                </p>
              </div>
              <div className={styles.storyImage}>
                <Image
                  src={images.story}
                  alt="Founding volunteers at the first school construction site in Malawi"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className={styles.img}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="values" className={`section ${styles.values}`} aria-labelledby="values-heading">
        <div className="container">
          <ScrollReveal>
            <p className="sectionLabel">Vision, mission, values</p>
            <h2 id="values-heading" className="sectionTitle">
              What guides every decision we make
            </h2>
            <p className="sectionIntro">
              Our vision is a world where geography no longer determines access
              to education, healthcare, or clean water. Our mission is to build
              the infrastructure that makes that vision tangible.
            </p>
          </ScrollReveal>
          <ScrollReveal stagger className={styles.valueGrid}>
            {values.map((v) => (
              <article key={v.title} className={styles.valueCard}>
                <h3>{v.title}</h3>
                <p>{v.description}</p>
              </article>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className={`section ${styles.projects}`} aria-labelledby="projects-heading">
        <div className="container">
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <div>
                <p className="sectionLabel">Featured work</p>
                <h2 id="projects-heading" className="sectionTitle">
                  Infrastructure that transforms daily life
                </h2>
              </div>
              <Link href="/projects" className="btn btnSecondary">
                All projects & impact
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal stagger className={styles.projectGrid}>
            {featured.map((project, i) => (
              <ProjectCard key={project.id} project={project} featured={i === 0} />
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className={`section ${styles.stats}`} aria-label="Impact statistics">
        <div className="container">
          <ScrollReveal>
            <p className={`sectionLabel ${styles.statsLabel}`}>Measured impact</p>
            <h2 className={`sectionTitle ${styles.statsTitle}`}>
              Numbers that represent real lives changed
            </h2>
          </ScrollReveal>
          <ImpactStats stats={impactStats} />
        </div>
      </section>

      <section className={`section ${styles.communities}`} aria-labelledby="communities-heading">
        <div className="container">
          <ScrollReveal>
            <p className="sectionLabel">Communities we have changed</p>
            <h2 id="communities-heading" className="sectionTitle">
              Stories written in brick, water, and resolve
            </h2>
          </ScrollReveal>
          <div className={styles.storyList}>
            {communities.map((item, i) => (
              <ScrollReveal key={item.name}>
                <article className={`${styles.story} ${i % 2 === 1 ? styles.storyReverse : ""}`}>
                  <div className={styles.storyImage}>
                    <Image
                      src={item.image}
                      alt={`Community transformation in ${item.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={styles.storyImg}
                    />
                  </div>
                  <div className={styles.storyCopy}>
                    <span className={styles.storyStat}>{item.stat}</span>
                    <h3>{item.name}</h3>
                    <p>{item.story}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className={`section ${styles.team}`} aria-labelledby="team-heading">
        <div className="container">
          <ScrollReveal>
            <p className="sectionLabel">Leadership</p>
            <h2 id="team-heading" className="sectionTitle">
              The people behind the work
            </h2>
          </ScrollReveal>
          <div className={styles.teamGrid}>
            {team.map((member, i) => (
              <ScrollReveal key={member.name}>
                <article className={`${styles.member} ${i % 2 === 1 ? styles.memberOffset : ""}`}>
                  <div className={styles.memberImage}>
                    <Image
                      src={member.image}
                      alt={`Portrait of ${member.name}, ${member.role}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className={styles.img}
                    />
                  </div>
                  <div className={styles.memberInfo}>
                    <h3>{member.name}</h3>
                    <p className={styles.role}>{member.role}</p>
                    <p className={styles.bio}>{member.bio}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="timeline" className={`section ${styles.timeline}`} aria-labelledby="timeline-heading">
        <div className="container">
          <ScrollReveal>
            <p className="sectionLabel">Milestones</p>
            <h2 id="timeline-heading" className="sectionTitle">
              Fifteen years of measured progress
            </h2>
          </ScrollReveal>
          <Timeline milestones={timelineMilestones} />
        </div>
      </section>

      <DonationCTA />

      <Testimonials items={testimonials} />

      <section className={styles.partners} aria-label="Partner organizations">
        <div className="container">
          <p className={styles.partnersLabel}>Trusted by partners worldwide</p>
          <ul className={styles.partnerList}>
            {partners.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="final-cta-heading">
        <div className="container">
          <ScrollReveal>
            <h2 id="final-cta-heading">Tomorrow&apos;s classroom starts with today&apos;s gift</h2>
            <p>Join 12,000 donors who fund lasting change—not temporary relief.</p>
            <div className={styles.finalActions}>
              <Link href="/donate" className="btn btnGold">
                Make a donation
              </Link>
              <Link href="/contact" className={`btn btnSecondary ${styles.finalOutline}`}>
                Partner with us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}


