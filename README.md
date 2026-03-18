# Clipping Agency

**The #1 Video Clipping & Content Distribution Network**

🌐 **Domain:** [clippingagency.ai](https://clippingagency.ai)

## About

Clipping Agency is a video clipping and content distribution service for brands. We help brands scale their content across TikTok, Instagram Reels, X, and YouTube Shorts with our network of 65,000+ creators.

## Tech Stack

- **Framework:** Next.js 16
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Blog:** Ghost CMS (optional)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment

### Vercel (Recommended)

1. Connect repo to Vercel
2. Set domain to `clippingagency.ai`
3. Configure DNS:
   - A Record: `76.76.21.21`
   - Or CNAME: `cname.vercel-dns.com`

### Environment Variables

Copy `env.example` to `.env.local` and configure:

```
NEXT_PUBLIC_GA_ID=your-ga-id
NEXT_PUBLIC_META_PIXEL_ID=your-pixel-id
CONTACT_EMAIL=hello@clippingagency.ai
```

## SEO Keywords

- Primary: "clipping agency"
- Secondary: "video clipping service", "content clipping agency", "clip agency"
- Long-tail: "video clipping network for brands", "content distribution service"

## Structure

```
app/
├── page.tsx          # Homepage
├── about/            # About page
├── contact/          # Contact page
├── casestudies/      # Case studies
├── blog/             # Blog (Ghost CMS)
└── layout.tsx        # Root layout with SEO
public/
├── index-main.html   # Main site content
├── about.html        # About content
├── contact.html      # Contact content
└── casestudies.html  # Case studies content
```

## License

Private - All rights reserved.
