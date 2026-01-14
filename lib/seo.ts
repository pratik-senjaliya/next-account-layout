/**
 * SEO Configuration
 * Centralized SEO metadata and configuration
 */

import { Metadata } from "next";

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  twitterCard?: "summary" | "summary_large_image";
  canonicalUrl?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

const defaultSEO: Partial<SEOConfig> = {
  author: "Your Company Name",
  ogType: "website",
  twitterCard: "summary_large_image",
  keywords: ["business", "services", "company"],
};

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    author,
    ogImage,
    ogType = "website",
    twitterCard = "summary_large_image",
    canonicalUrl,
    noindex = false,
    nofollow = false,
  } = { ...defaultSEO, ...config };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yoursite.com";
  const fullTitle = `${title} | ${defaultSEO.author || "Your Company"}`;
  const imageUrl = ogImage
    ? ogImage.startsWith("http")
      ? ogImage
      : `${siteUrl}${ogImage}`
    : `${siteUrl}/og-image.jpg`;

  return {
    title: fullTitle,
    description,
    keywords: (keywords || []).length > 0 ? (keywords || []).join(", ") : undefined,
    authors: author ? [{ name: author }] : undefined,
    creator: author,
    publisher: author,
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: ogType,
      title: fullTitle,
      description,
      url: canonicalUrl || siteUrl,
      siteName: defaultSEO.author || "Your Company",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: twitterCard,
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: author ? `@${author}` : undefined,
    },
    alternates: {
      canonical: canonicalUrl || siteUrl,
    },
    metadataBase: new URL(siteUrl),
  };
}

/**
 * Generate structured data (JSON-LD) for better SEO
 */
export function generateStructuredData(
  type: "Organization" | "WebSite" | "Article" | "Product",
  data: Record<string, any>
) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  return baseSchema;
}

/**
 * Common organization structured data
 */
export function getOrganizationSchema() {
  return generateStructuredData("Organization", {
    name: "Your Company Name",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://yoursite.com",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://yoursite.com"}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-XXX-XXX-XXXX",
      contactType: "Customer Service",
      email: "info@yoursite.com",
    },
    sameAs: [
      // Add social media links
      // "https://www.facebook.com/yourcompany",
      // "https://www.twitter.com/yourcompany",
      // "https://www.linkedin.com/company/yourcompany",
    ],
  });
}

