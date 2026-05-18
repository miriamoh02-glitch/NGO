import Link from "next/link";
import DonationCTA from "@/components/DonationCTA/DonationCTA";
import FAQ from "@/components/FAQ/FAQ";
import Hero from "@/components/Hero/Hero";
import JsonLd from "@/components/JsonLd/JsonLd";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import { donationTiers, faqs } from "@/lib/data";
import { images } from "@/lib/images";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  donationPageJsonLd,
  faqPageJsonLd,
  ogImages,
  webPageJsonLd,
} from "@/lib/seo";
import styles from "./page.module.css";

const donateDescription =
  "Donate to Foundation Horizon with transparent giving: 91 cents of every dollar funds schools, clinics, and clean water. View impact tiers and sponsorship options.";

export const metadata = createPageMetadata({
  title: "Donate",
  description: donateDescription,
  path: "/donate",
  ogImage: ogImages.donate,
  keywords: [
    "donate to NGO",
    "charitable giving Africa",
    "sponsor a school",
    "fund clean water boreholes",
    "nonprofit donation transparency",
  ],
});

export default function DonatePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            title: "Donate",
            description: donateDescription,
            path: "/donate",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Donate", path: "/donate" },
          ]),
          donationPageJsonLd(),
          faqPageJsonLd(faqs),
        ]}
      />
      <Hero
        compact
        align="center"
        title="Invest in infrastructure that endures"
        description="91 cents of every dollar reaches program delivery. Every gift is tracked, reported, and accountable."
        image={images.hero.donate}
        imageAlt="Donor and community leader shaking hands at school opening ceremony"
        primaryCta={{ label: "Give now", href: "#tiers" }}
        secondaryCta={{ label: "Read FAQ", href: "#faq" }}
      />

      <section id="tiers" className="section" aria-labelledby="tiers-heading">
        <div className="container">
          <ScrollReveal>
            <p className="sectionLabel">Your impact</p>
            <h2 id="tiers-heading" className="sectionTitle">
              Donation tiers with tangible outcomes
            </h2>
          </ScrollReveal>
          <ScrollReveal stagger className={styles.tierGrid}>
            {donationTiers.map((tier) => (
              <article key={tier.title} className={styles.tier}>
                <span className={styles.amount}>{tier.amount}</span>
                <h3>{tier.title}</h3>
                <p>{tier.impact}</p>
                <Link href="/contact" className="btn btnPrimary">
                  Give {tier.amount}
                </Link>
              </article>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className={`section ${styles.sponsor}`} aria-labelledby="sponsor-heading">
        <div className="container">
          <ScrollReveal>
            <div className={styles.sponsorLayout}>
              <div>
                <p className="sectionLabel">Sponsorship</p>
                <h2 id="sponsor-heading">Corporate and institutional partners</h2>
                <p className={styles.sponsorText}>
                  Sponsor an entire school block, clinic wing, or water network.
                  Partners receive quarterly field reports, naming recognition
                  where appropriate, and guided site visits.
                </p>
                <ul className={styles.sponsorList}>
                  <li>School block sponsorship from $50,000</li>
                  <li>Clinic wing sponsorship from $75,000</li>
                  <li>Regional water program from $120,000</li>
                </ul>
                <Link href="/contact" className="btn btnSecondary">
                  Inquire about sponsorship
                </Link>
              </div>
              <aside className={styles.sponsorAside} aria-label="Sponsorship benefits">
                <h3>Partner benefits</h3>
                <ul>
                  <li>Audited impact reporting</li>
                  <li>Co-branded field documentation</li>
                  <li>Employee engagement programs</li>
                  <li>Tax-deductible giving (US donors)</li>
                </ul>
              </aside>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className={`section ${styles.volunteer}`} aria-labelledby="volunteer-heading">
        <div className="container">
          <ScrollReveal>
            <p className="sectionLabel">Volunteer</p>
            <h2 id="volunteer-heading" className="sectionTitle">
              Lend your skills in the field
            </h2>
            <p className="sectionIntro">
              We accept architects, engineers, nurses, teachers, and project
              managers for 2–8 week deployments twice annually. All volunteers
              cover travel; housing and meals are provided on site.
            </p>
            <Link href="/contact" className="btn btnGold">
              Apply to volunteer
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section id="faq" className={`section ${styles.faq}`} aria-labelledby="faq-heading">
        <div className="container">
          <ScrollReveal>
            <p className="sectionLabel">Transparency</p>
            <h2 id="faq-heading" className="sectionTitle">
              Frequently asked questions
            </h2>
          </ScrollReveal>
          <FAQ items={faqs} />
        </div>
      </section>

      <DonationCTA />
    </>
  );
}
