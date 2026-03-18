import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Clipping Agency - Get a Free Consultation",
  description:
    "Contact Clipping Agency to discuss your video clipping and content distribution needs. Book a free consultation and learn how we can scale your brand.",
  keywords: [
    "contact clipping agency",
    "video clipping consultation",
    "content distribution inquiry",
    "clip agency contact",
    "book clipping agency",
    "clipping service quote",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    url: "/contact",
    title: "Contact Clipping Agency — Get Started Today",
    description:
      "Ready to scale your content? Contact Clipping Agency for a free consultation. 65,000+ creators ready to distribute your brand.",
    images: [
      {
        url: "/og-image.png",
        alt: "Contact Clipping Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Clipping Agency — Get Started Today",
    description:
      "Book a free consultation with Clipping Agency. Let's scale your content distribution.",
    images: ["/og-image.png"],
  },
};

export default function Contact() {
  return (
    <main style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <iframe
        title="Contact Clipping Agency"
        src="/contact.html"
        style={{ width: "100%", height: "100%", border: "0" }}
      />
    </main>
  );
}
