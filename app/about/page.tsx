import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Clipping Agency - The #1 Video Clipping Network",
  description:
    "Meet the team behind Clipping Agency. 65,000+ creators, 18B+ views delivered. Learn how we became the leading clipping agency for brands worldwide.",
  keywords: [
    "about clipping agency",
    "video clipping company",
    "content clipping team",
    "clip agency about",
    "content distribution company",
    "video clipping network",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    url: "/about",
    title: "About Clipping Agency — The #1 Video Clipping Network",
    description:
      "65,000+ creators. 18B+ views. Discover how Clipping Agency became the leading content distribution network for brands.",
    images: [
      {
        url: "/og-image.png",
        alt: "About Clipping Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Clipping Agency — The #1 Video Clipping Network",
    description:
      "65,000+ creators. 18B+ views. The clipping agency brands trust.",
    images: ["/og-image.png"],
  },
};

export default function About() {
  return (
    <main style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <iframe
        title="About Clipping Agency"
        src="/about.html"
        style={{ width: "100%", height: "100%", border: "0" }}
      />
    </main>
  );
}
