# Portfolio — Aryan Bisshnoi

Personal portfolio website built with Next.js (App Router), TypeScript, and Tailwind CSS. Designed for recruiters and hiring managers with a clean, minimal neo-brutalist aesthetic.

## Quick Start

```bash
# Install dependencies
npm install

# Run locally
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment (Vercel)

1. Push this repo to GitHub
2. Import the repo on [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — click **Deploy**

Or use the CLI:

```bash
npx vercel
```

## Updating Content

All editable content lives in **`data/config.ts`**. Open that file to change:

- Name, headline, email, social links
- About section text
- Skills and categories
- Project details and impact points
- Experience roles and bullet points
- Resume CTA text
- Contact information
- SEO metadata (title, description, OG tags)

## Where to Place Files

| File | Location | Notes |
|------|----------|-------|
| Resume PDF | `public/resume.pdf` | Referenced by download buttons |
| Profile photo | `public/images/profile.jpg` | Shown in the hero section |
| Project screenshots | `public/images/project-*.png` | Update `image` field in config |
| OG image (1200×630) | `public/images/og-image.png` | Used for social link previews |

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css        — Global styles and theme variables
│   ├── layout.tsx         — Root layout with SEO metadata
│   └── page.tsx           — Single-page composition
├── components/
│   ├── Navbar.tsx         — Sticky nav with dark mode toggle
│   ├── Hero.tsx           — Name, headline, CTAs, photo
│   ├── About.tsx          — Profile summary and highlights
│   ├── Skills.tsx         — Grouped tech stack cards
│   ├── Projects.tsx       — Featured project case studies
│   ├── Experience.tsx     — Timeline of roles
│   ├── ResumeCTA.tsx      — Resume download call-to-action
│   ├── Contact.tsx        — Contact cards
│   ├── Footer.tsx         — Footer with links
│   ├── SectionHeading.tsx — Reusable section header
│   ├── ScrollReveal.tsx   — Intersection Observer animation
│   └── ThemeProvider.tsx  — Light/dark mode context
├── data/
│   └── config.ts          — All editable content
└── public/
    └── images/            — Static assets
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Geist Sans + Geist Mono (via next/font)
- **Deployment**: Vercel

## License

MIT
