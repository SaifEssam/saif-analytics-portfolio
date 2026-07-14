import type { Metadata } from "next";
import Script from "next/script";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { profile } from "@/data/portfolio";
import "./globals.css";

const siteUrl = "https://saif-analytics-portfolio-kios.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Saif Essam — Analytics Specialist & Data Analyst",
    template: "%s — Saif Essam",
  },

  description:
    "Explore Saif Essam’s analytics portfolio featuring CRM, sales and insurance dashboards, R Shiny applications, statistical modelling and decision-focused case studies.",

  keywords: [
    "Saif Essam",
    "Data Analyst Egypt",
    "Analytics Specialist",
    "R Shiny Developer",
    "Business Intelligence Analyst",
    "CRM Analytics",
    "Insurance Analytics",
    "Statistics",
  ],

  authors: [{ name: profile.name }],
  creator: profile.name,

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Saif Essam — Analytics Specialist & Data Analyst",
    description:
      "Explore my analytics portfolio featuring CRM, sales and insurance dashboards, R Shiny applications, statistical modelling and decision-focused business case studies.",
    siteName: "Saif Essam Analytics Portfolio",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Saif Essam — Analytics Specialist and Data Analyst portfolio",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Saif Essam — Analytics Specialist & Data Analyst",
    description:
      "CRM, sales and insurance analytics dashboards, statistical modelling and decision-focused business case studies.",
    images: [`${siteUrl}/og-image.png`],
  },

  icons: {
    icon: "/icon.svg",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  address: { "@type": "PostalAddress", addressLocality: "Cairo", addressCountry: "EG" },
  email: `mailto:${profile.email}`,
  url: siteUrl,
  sameAs: [profile.linkedin, profile.github],
  alumniOf: { "@type": "CollegeOrUniversity", name: "Cairo University" },
  knowsAbout: ["Data analysis", "Statistics", "Business intelligence", "R Shiny", "CRM analytics", "Insurance analytics"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
      name="google-site-verification"
      content="WMnGiNuB2tj-DjSJvhMPbJGXqWYkMEvjyQtKQYoh9VU"
                />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='dark'}})();`,
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <Script id="person-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(personSchema)}
        </Script>
      </body>
    </html>
  );
}
