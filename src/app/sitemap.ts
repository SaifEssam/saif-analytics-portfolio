export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://saifessam-analytics.vercel.app";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/work", "/about", "/credentials", "/resume", ...projects.map((project) => `/work/${project.slug}`)].map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date(), changeFrequency: route === "" ? "monthly" : "yearly", priority: route === "" ? 1 : route === "/work" ? .9 : .7 }));
}
