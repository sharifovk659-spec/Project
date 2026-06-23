# ETERNA PRODUCTION

Premium production / SMM / academy website built with Next.js 15.

**Production URL:** https://eterna.inovaauto.com

## Quick start (local)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repository to GitHub.
2. In [Vercel](https://vercel.com), click **Add New → Project**.
3. Import the GitHub repository `sharifovk659-spec/Project`.
4. Vercel auto-detects **Next.js** — keep default settings:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** (leave empty)
   - **Install Command:** `npm install`
5. Add environment variable (optional, if subdomain differs):
   - `NEXT_PUBLIC_SITE_URL` = `https://eterna.inovaauto.com`
6. Click **Deploy**.

## Custom domain (inovaauto.com)

After the first deploy:

1. In Vercel → Project → **Settings → Domains**
2. Add: `eterna.inovaauto.com`
3. In your DNS panel for `inovaauto.com`, add a **CNAME** record:
   - **Name/Host:** `eterna`
   - **Value/Target:** `cname.vercel-dns.com`
4. Wait for DNS propagation (usually 5–30 minutes).

## Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP
- Lenis Smooth Scroll
- React Icons

## Project structure

```
src/
  app/           — pages, layout, global styles
  components/    — Header, Footer, sections, UI
  lib/           — constants, data, animations, utils
public/
  images/        — static assets
```
