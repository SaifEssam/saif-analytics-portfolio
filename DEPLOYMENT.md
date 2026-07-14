# Free GitHub + Vercel Deployment

The project is already initialized as a local Git repository and passes lint and production build checks.

## 1. Create a free GitHub repository

In GitHub:

1. Click **New repository**.
2. Name it `saif-analytics-portfolio`.
3. Choose **Public** if you want recruiters to inspect the code, or **Private** if you only want the deployed site public.
4. Do not add another README, `.gitignore` or license because those files already exist here.
5. Create the repository.

## 2. Push this project

From the project folder, replace `YOUR_GITHUB_USERNAME` and run:

```bash
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/saif-analytics-portfolio.git
git branch -M main
git push -u origin main
```

GitHub may ask you to authenticate in the browser or use a personal access token.

## 3. Deploy on Vercel for free

1. Sign in to Vercel using GitHub.
2. Select **Add New → Project**.
3. Import `saif-analytics-portfolio`.
4. Keep the detected framework as **Next.js**.
5. Add an optional environment variable:

```text
NEXT_PUBLIC_SITE_URL=https://YOUR-PROJECT.vercel.app
```

6. Click **Deploy**.

Vercel will build and publish the site. Future pushes to `main` will create new production deployments automatically.

## 4. Update the final site URL

After Vercel gives you the final URL:

1. Open **Project Settings → Environment Variables**.
2. Set `NEXT_PUBLIC_SITE_URL` to the final URL or custom domain.
3. Redeploy once so canonical URLs, sitemap and JSON-LD use the correct address.

## 5. Optional custom domain

A custom domain is not required. The free `vercel.app` address is enough to launch the portfolio.

When you later buy a domain, add it in **Project Settings → Domains** and update `NEXT_PUBLIC_SITE_URL`.

## Pre-launch checklist

- [ ] Test all three Shiny application links.
- [ ] Confirm public documents contain no confidential information.
- [ ] Check your DataCamp and Google credential name variants.
- [ ] Replace any portfolio preview with an anonymized screenshot only when safe.
- [ ] Test the website on a phone and a laptop.
- [ ] Verify LinkedIn, GitHub and email links.
- [ ] Update the fallback Vercel URL in `src/app/layout.tsx`, `sitemap.ts` and `robots.ts` if you do not use the environment variable.
