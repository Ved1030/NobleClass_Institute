import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nobleclasses.in";

  const routes = [
    "",
    "/about",
    "/admissions",
    "/contact",
    "/courses",
    "/careers",
    "/faculty",
    "/gallery",
    "/notices",
    "/results",
    "/faq",
    "/terms",
    "/privacy-policy",
    "/refund-policy",
    "/success-stories",
    "/sitemap",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  })) as MetadataRoute.Sitemap;
}
