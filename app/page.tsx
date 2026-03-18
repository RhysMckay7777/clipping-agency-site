import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clipping Agency | #1 Video Clipping & Content Distribution Service",
  description:
    "The leading clipping agency for brands. 65,000+ creators distribute your content across TikTok, Reels, X & Shorts. 18B+ views delivered. Book a call today.",
  keywords: [
    "clipping agency",
    "video clipping service",
    "content clipping agency",
    "clip agency",
    "content distribution service",
    "TikTok clipping agency",
    "video clipping network",
    "content clipping service",
    "social media distribution",
    "brand content distribution",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Clipping Agency — The #1 Video Clipping Network for Brands",
    description:
      "65,000+ creators. 18B+ views. We clip and mass-distribute your content across TikTok, Reels, X, and Shorts. Built for brands that want to go viral.",
    images: [
      {
        url: "/og-image.png",
        alt: "Clipping Agency — The #1 Video Clipping Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clipping Agency — The #1 Video Clipping Network",
    description:
      "65,000+ creators distributing content across TikTok, Reels & Shorts. The clipping agency brands trust.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <main style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <iframe
        title="Clipping Agency Website"
        src="/index-main.html"
        style={{ width: "100%", height: "100%", border: "0" }}
      />
    </main>
  );
}
