import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import { siteConfig } from "@/lib/data";
import "./globals.css";
import styles from "./layout.module.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Humanitarian Infrastructure`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
  keywords: [
    "NGO",
    "humanitarian",
    "schools",
    "clinics",
    "boreholes",
    "infrastructure",
    "Africa",
    "donate",
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.tagline,
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <a href="#main-content" className="skipLink">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className={styles.main}>
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
