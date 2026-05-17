"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/data";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label={`${siteConfig.name} home`}>
          <span className={styles.logoMark} aria-hidden />
          <span className={styles.logoText}>
            Foundation
            <em>Horizon</em>
          </span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Main navigation">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${
                    pathname === link.href ? styles.active : ""
                  }`}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/donate" className={`btn btnGold ${styles.cta}`}>
          Donate
        </Link>

        <button
          type="button"
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        id="mobile-menu"
        className={`${styles.mobileNav} ${menuOpen ? styles.mobileOpen : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <ul className={styles.mobileList}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.mobileLink} ${
                  pathname === link.href ? styles.active : ""
                }`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/donate" className={`btn btnGold ${styles.mobileCta}`}>
              Donate Now
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
