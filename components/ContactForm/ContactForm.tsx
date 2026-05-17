"use client";

import { FormEvent, useState } from "react";
import styles from "./ContactForm.module.css";

interface ContactFormProps {
  variant?: "default" | "partner";
}

export default function ContactForm({ variant = "default" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.success} role="status">
        <h3>Thank you for reaching out</h3>
        <p>
          We have received your message and will respond within two business
          days. For urgent field matters, please call our main line.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="firstName">First name</label>
          <input id="firstName" name="firstName" type="text" required autoComplete="given-name" />
        </div>
        <div className={styles.field}>
          <label htmlFor="lastName">Last name</label>
          <input id="lastName" name="lastName" type="text" required autoComplete="family-name" />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email address</label>
        <input id="email" name="email" type="email" required autoComplete="email" />
      </div>

      {variant === "partner" && (
        <div className={styles.field}>
          <label htmlFor="organization">Organization</label>
          <input id="organization" name="organization" type="text" autoComplete="organization" />
        </div>
      )}

      <div className={styles.field}>
        <label htmlFor="subject">Subject</label>
        <select id="subject" name="subject" required defaultValue="">
          <option value="" disabled>
            Select a topic
          </option>
          <option value="donation">Donation inquiry</option>
          <option value="partnership">Partnership opportunity</option>
          <option value="volunteer">Volunteer application</option>
          <option value="media">Media request</option>
          <option value="general">General question</option>
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required />
      </div>

      <button type="submit" className="btn btnPrimary">
        Send message
      </button>
    </form>
  );
}
