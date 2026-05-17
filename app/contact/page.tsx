import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm/ContactForm";
import Hero from "@/components/Hero/Hero";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import { siteConfig } from "@/lib/data";
import { images } from "@/lib/images";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Foundation Horizon for donations, partnerships, volunteer opportunities, and general inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        compact
        align="center"
        title="Let us build something lasting together"
        description="Whether you are a donor, partner, volunteer, or community leader—we want to hear from you."
        image={images.hero.contact}
        imageAlt="Team members in discussion at regional coordination office"
        primaryCta={undefined}
        secondaryCta={undefined}
      />

      <section className="section" aria-labelledby="contact-heading">
        <div className="container">
          <div className={styles.layout}>
            <ScrollReveal>
              <div>
                <p className="sectionLabel">Get in touch</p>
                <h2 id="contact-heading" className="sectionTitle">
                  Send us a message
                </h2>
                <address className={styles.details}>
                  <p>
                    <strong>Office</strong>
                    <br />
                    {siteConfig.address}
                  </p>
                  <p>
                    <strong>Email</strong>
                    <br />
                    <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                  </p>
                  <p>
                    <strong>Phone</strong>
                    <br />
                    <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}>
                      {siteConfig.phone}
                    </a>
                  </p>
                  <p>
                    <strong>Hours</strong>
                    <br />
                    Monday–Friday, 9:00 AM – 6:00 PM EST
                  </p>
                </address>
                <ContactForm />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <section aria-labelledby="partner-heading" className={styles.partner}>
                <h2 id="partner-heading">Partner inquiry</h2>
                <p>
                  Foundations, corporations, and government agencies interested
                  in multi-year partnerships should use this form and select
                  &ldquo;Partnership opportunity&rdquo; as the subject.
                </p>
                <ContactForm variant="partner" />
              </section>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className={`section ${styles.map}`} aria-labelledby="map-heading">
        <div className="container">
          <ScrollReveal>
            <p className="sectionLabel">Visit us</p>
            <h2 id="map-heading" className="sectionTitle">
              Washington, DC headquarters
            </h2>
          </ScrollReveal>
          <div className={styles.mapWrap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.7499!2d-77.0369!3d38.8977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDUzJzUxLjciTiA3N8KwMDInMTIuOSJX!5e0!3m2!1sen!2sus!4v1"
              title="Google Maps showing Foundation Horizon office location in Washington DC"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
