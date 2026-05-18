import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DonationCTA from "@/components/DonationCTA/DonationCTA";
import Hero from "@/components/Hero/Hero";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import Timeline from "@/components/Timeline/Timeline";
import {
  partners,
  siteConfig,
  team,
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
  return (
    <>
      <Hero
        title="Where communities rise, hope takes root"
        description={siteConfig.tagline}
        image={images.hero.home}
        imageAlt="Children laughing and reaching toward the camera with joy and hope"
        secondaryCta={{ label: "See our impact", href: "/projects#impact" }}
        showScrollHint={false}
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
                    alt="Children laughing and reaching toward the camera with joy"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className={styles.missionImg}
                  />
                </div>
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
                  alt="Students in uniform walking toward school with backpacks"
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

      <section className={styles.impactTeaser} aria-labelledby="impact-teaser-heading">
        <div className="container">
          <ScrollReveal>
            <p className="sectionLabel">Our work in the field</p>
            <h2 id="impact-teaser-heading" className="sectionTitle">
              See the infrastructure we build and the lives it changes
            </h2>
            <p className={styles.impactTeaserText}>
              Explore schools, clinics, boreholes, and community stories on our
              Projects and Impact page.
            </p>
            <Link href="/projects" className="btn btnPrimary">
              View projects and impact
            </Link>
          </ScrollReveal>
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

