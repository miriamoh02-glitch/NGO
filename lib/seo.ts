import type { Metadata } from "next";
import { siteConfig } from "./data";

/** Public site URL — override with NEXT_PUBLIC_SITE_URL if needed (no trailing slash). */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url
).replace(/\/$/, "");

export const defaultTitle = `${siteConfig.name} | Humanitarian Infrastructure NGO`;
export const defaultDescription = siteConfig.tagline;

export const siteKeywords = [
  "Foundation Horizon",
  "humanitarian NGO",
  "nonprofit",
  "charity",
  "donate",
  "Africa development",
  "schools built",
  "community clinics",
  "clean water boreholes",
  "rural infrastructure",
  "education programs",
  "healthcare access",
  "water access",
  "community development",
  "international aid",
] as const;

export const ogImages = {
  default: "/opengraph-image",
  projects: "/images/hero-projects.jpg",
  donate: "/images/hero-donate.jpg",
  contact: "/images/hero-contact.jpg",
} as const;

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalized}`;
}

type CreatePageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  ogImage = ogImages.default,
  keywords = [],
  noIndex = false,
}: CreatePageMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);
  const isHome = path === "/";
  const pageTitle = isHome ? defaultTitle : `${title} | ${siteConfig.name}`;
  const ogTitle = isHome ? siteConfig.name : `${title} | ${siteConfig.name}`;

  return {
    title: isHome ? { absolute: pageTitle } : title,
    description,
    keywords: [...siteKeywords, ...keywords],
    alternates: {
      canonical,
    },
    openGraph: {
      title: ogTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${isHome ? "Humanitarian infrastructure NGO" : title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: defaultDescription,
  keywords: [...siteKeywords],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Nonprofit",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: defaultDescription,
    images: [
      {
        url: ogImages.default,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — humanitarian schools, clinics, and clean water`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: defaultDescription,
    images: [ogImages.default],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  other: {
    "apple-mobile-web-app-title": siteConfig.name,
  },
};

/** JSON-LD: Organization / NGO */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": `${siteUrl}/#organization`,
    name: siteConfig.name,
    url: siteUrl,
    logo: `${siteUrl}/opengraph-image`,
    description: defaultDescription,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "240 Meridian Way, Suite 400",
      addressLocality: "Washington",
      addressRegion: "DC",
      postalCode: "20005",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "Place",
      name: "Sub-Saharan Africa and underserved communities worldwide",
    },
    knowsAbout: [
      "Humanitarian infrastructure",
      "Rural education",
      "Community healthcare",
      "Clean water access",
    ],
    sameAs: [],
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteConfig.name,
    url: siteUrl,
    description: defaultDescription,
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/projects?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function webPageJsonLd({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: absoluteUrl(path),
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#organization` },
    inLanguage: "en-US",
  };
}

export function contactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${siteConfig.name}`,
    description:
      "Reach Foundation Horizon for donations, partnerships, volunteering, and program inquiries.",
    url: absoluteUrl("/contact"),
    mainEntity: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteConfig.name,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "240 Meridian Way, Suite 400",
        addressLocality: "Washington",
        addressRegion: "DC",
        postalCode: "20005",
        addressCountry: "US",
      },
    },
  };
}

export function faqPageJsonLd(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function donationPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "DonateAction",
    name: `Donate to ${siteConfig.name}`,
    description:
      "Support schools, clinics, and clean water infrastructure for underserved communities.",
    recipient: { "@id": `${siteUrl}/#organization` },
    url: absoluteUrl("/donate"),
  };
}
