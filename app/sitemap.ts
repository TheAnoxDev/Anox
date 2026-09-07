import type { MetadataRoute } from "next";

const base = "https://anox-five.vercel.app";
const locales = ["en", "fa", "ar", "ru", "es", "zh"];
const pages = ["", "/architecture", "/platform", "/solutions", "/labs", "/company", "/careers", "/shop", "/cart", "/contact", "/dashboard", "/privacy", "/terms", "/login", "/register"];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${base}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: page === "" ? 1 : 0.7,
    }))
  );
}
