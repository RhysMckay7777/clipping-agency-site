import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Clipping Agency - Real Results for Brands",
  description:
    "See how Clipping Agency drives millions of views for brands. Real case studies showing our video clipping and content distribution results.",
  keywords: [
    "clipping agency case studies",
    "video clipping results",
    "content distribution case studies",
    "brand growth examples",
    "viral content results",
    "clip agency portfolio",
  ],
  alternates: {
    canonical: "/casestudies",
  },
  openGraph: {
    type: "website",
    url: "/casestudies",
    title: "Case Studies | Clipping Agency — Real Results",
    description:
      "See how brands achieved millions of views with Clipping Agency. Real case studies, real results.",
    images: [
      {
        url: "/og-image.png",
        alt: "Clipping Agency Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clipping Agency Case Studies — Real Results",
    description:
      "Millions of views delivered. See our case studies and learn how we can scale your brand.",
    images: ["/og-image.png"],
  },
};

export default function CaseStudies() {
  return (
    <main style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <iframe
        title="Clipping Agency Case Studies"
        src="/casestudies.html"
        style={{ width: "100%", height: "100%", border: "0" }}
      />
    </main>
  );
}
