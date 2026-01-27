import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { getOrganizationSchema } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Xconcile | Professional Accounting & Financial Services",
    template: "%s | Xconcile",
  },
  description:
    "Strategic B2B partnerships and professional solutions for your business. We deliver expert guidance, global expertise, and innovative strategies for growth.",
  keywords: ["business", "consulting", "professional services", "solutions", "strategy", "growth", "B2B"],
  authors: [{ name: "Xconcile" }],
  creator: "Xconcile",
  publisher: "Xconcile",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://yoursite.com"
  ),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://yoursite.com",
    siteName: "Xconcile",
    title: "Xconcile | Professional Accounting & Financial Services",
    description:
      "Strategic B2B partnerships and professional solutions for your business. We deliver expert guidance, global expertise, and innovative strategies for growth.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Xconcile - Professional Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xconcile | Professional Accounting & Financial Services",
    description:
      "Strategic B2B partnerships and professional solutions for your business. We deliver expert guidance, global expertise, and innovative strategies for growth.",
    images: ["/og-image.png"],
    creator: "@xconcile",
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
    icon: ["/favicon.ico", "/logo-icon-refined.png"],
    shortcut: "/logo-icon-refined.png",
    apple: "/logo-icon-refined.png",
  },
  verification: {
    // Add your verification codes here
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = getOrganizationSchema();

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-screen antialiased flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

