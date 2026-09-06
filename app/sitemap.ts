import type { MetadataRoute } from "next";

const baseUrl = "https://anox-five.vercel.app";
const locales = ["en", "fa"] as const;
const routes = ["", "/architecture", "/platform", "/shop", "/contact", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.7,
    }))
  );
}
