import type { Metadata } from "next";
import { SITE } from "./constants";

export const siteMetadata: Metadata = {
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "продакшн Душанбе",
    "видеопродакшн",
    "SMM агентство",
    "digital команда",
    "ETERNA PRODUCTION",
    "академия креатива",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  metadataBase: new URL(SITE.url),
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    images: [{ url: "/images/og-cover.svg", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: ["/images/og-cover.svg"],
  },
  robots: { index: true, follow: true },
};
