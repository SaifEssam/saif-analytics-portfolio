# Saif Essam — Analytics Portfolio

A production-ready, recruiter-focused portfolio for **Saif Essam**, Analytics Specialist and Data Analyst in Cairo, Egypt.

The site is designed around evidence rather than generic self-promotion. Every case study is structured around:

1. The decision or business problem
2. Data and quality challenges
3. Analytical approach
4. Verified findings
5. Recommended action
6. Limitations and responsible use

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Custom responsive CSS
- Static export (`output: "export"`)
- No database
- No paid API
- No external CMS
- No runtime environment variables required

## Local development

Requirements:

- Node.js 20.9 or newer
- npm

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production checks

```bash
npm run lint
npm run build
```

The static production build is written to `out/`.

## Content editing

Most portfolio content is stored in one file:

```text
src/data/portfolio.ts
```

Edit this file to update:

- Contact links
- Experience
- Project case studies
- Skills
- Credentials
- Metrics

## Main routes

- `/` — Home
- `/work` — All projects
- `/work/[slug]` — Detailed case study pages
- `/about` — Professional biography
- `/credentials` — Education and certificates
- `/resume` — Print-friendly web resume

## Documents

Resume, certificates and selected reports are stored in:

```text
public/documents/
```

Before publishing, confirm that every document is appropriate for public access and does not contain information you want to keep private.

## Project images

Dashboard-style portfolio previews are editable SVG files in:

```text
public/projects/
```

They intentionally use portfolio-safe synthetic visuals. Replace them with anonymized screenshots later when available.

## Site URL and SEO

The fallback URL is:

```text
https://saifessam-analytics.vercel.app
```

Set the following environment variable in Vercel after you know the final deployment URL or custom domain:

```text
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

This updates canonical metadata, the sitemap and structured data.

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for the exact free GitHub and Vercel workflow.

## Privacy note

The website includes this disclosure on relevant projects:

> Business data shown in portfolio previews is anonymized, aggregated or replaced with synthetic demonstration data.

No customer-level or employee-level records should be added to the public repository.

## Copyright

Portfolio content and case-study writing © Saif Essam. Project source may be adapted for Saif Essam's personal portfolio and deployment.
