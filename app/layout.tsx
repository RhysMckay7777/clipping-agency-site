import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clippingagency.ai"),
  title: "Clipping Agency | #1 Video Clipping & Content Distribution Service",
  description:
    "The leading clipping agency for brands. We distribute your content across TikTok, Reels, X & Shorts with 65,000+ creators. Get 1B+ views for your brand.",
  keywords: [
    "clipping agency",
    "video clipping service",
    "content clipping agency",
    "clip agency",
    "content distribution",
    "TikTok clipping",
    "social media distribution",
    "brand content distribution",
    "video clipping network",
    "content clipping service",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Clipping Agency | #1 Video Clipping & Distribution Network",
    description:
      "65,000+ creators. 18B+ views delivered. The clipping agency brands trust for TikTok, Reels, X, and Shorts distribution.",
    siteName: "Clipping Agency",
    images: [
      {
        url: "/og-image.png",
        alt: "Clipping Agency — The #1 Video Clipping Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clipping Agency | #1 Video Clipping Network",
    description:
      "65,000+ creators. 18B+ views. The clipping agency for brands who want viral distribution on TikTok, Reels & Shorts.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [{ url: "/favicon.png" }],
    shortcut: [{ url: "/favicon.png" }],
    apple: [{ url: "/favicon.png" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Clipping Agency",
  url: "https://clippingagency.ai",
  logo: "https://clippingagency.ai/favicon.png",
  description:
    "The leading clipping agency for brands. 65,000+ creators distributing content across TikTok, Reels, X & Shorts.",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: "https://clippingagency.ai/contact",
  },
  service: {
    "@type": "Service",
    name: "Video Clipping & Distribution",
    description:
      "Professional video clipping and content distribution service for brands across TikTok, Instagram Reels, X, and YouTube Shorts.",
    provider: {
      "@type": "Organization",
      name: "Clipping Agency",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
