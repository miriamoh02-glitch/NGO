# Foundation Horizon

A production-ready static website for **Foundation Horizon**, a humanitarian NGO building schools, clinics, boreholes, and life-changing infrastructure for underserved communities.

Built with Next.js (App Router), TypeScript, and CSS Modules. Configured for fully static export.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript** (strict)
- **CSS Modules** + global design tokens
- **next/font** (Cormorant Garamond + Inter)
- **next/image** (optimized loading, static export compatible)

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build (Static Export)

```bash
npm run build
```

Static files are output to the `out/` directory.

### Preview Static Build

Serve the `out` folder with any static host, for example:

```bash
npx serve out
```

## Project Structure

```plaintext
app/                 # Pages and layouts (App Router)
  page.tsx           # Home
  projects/          # Projects & Impact (merged)
  donate/            # Donate
  contact/           # Contact
  not-found.tsx      # 404 page
components/          # Reusable UI components
lib/data.ts          # Site content and copy
public/              # Static assets
```

## Pages

| Route       | Description                                                       |
| ----------- | ----------------------------------------------------------------- |
| `/`         | Home + About: mission, story, values, team, timeline, testimonials |
| `/projects` | Projects + Impact: schools, clinics, water, metrics, gallery      |
| `/donate`   | Tiers, sponsorship, volunteer, FAQ                                |
| `/contact`  | Forms, office details, map embed                                  |

Legacy routes `/about` and `/impact` redirect to `/` and `/projects`.

## Deployment

This project uses `output: 'export'` in `next.config.js`. Deploy the `out/` folder to:

- **Vercel** – connect repo; build command `npm run build`, output `out`
- **Netlify** – publish directory `out`
- **GitHub Pages** – upload `out` contents
- **AWS S3 / CloudFront** – sync `out` to bucket

No server runtime is required.

## Features

- Sticky navigation with mobile menu
- Scroll-triggered reveal animations
- Animated impact counters
- Testimonials carousel
- Image gallery lightbox
- Before/after comparison slider
- FAQ accordion
- Contact forms (client-side submit confirmation)
- YouTube and Google Maps embeds
- Scroll-to-top control
- WCAG-oriented accessibility patterns
- `prefers-reduced-motion` support

## Design System

Colors are defined as CSS custom properties in `app/globals.css`:

- Forest green `#18392b`
- Warm sand `#d8c6a5`
- Ivory `#f6f3ee`
- Charcoal `#222222`
- Muted gold `#b8965d`

## License

Private project. All content is fictional NGO copy for demonstration purposes.
