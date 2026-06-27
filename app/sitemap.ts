import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://remarkstudio.tech/",
      lastModified: "2026-06-02",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://remarkstudio.tech/#services",
      lastModified: "2026-06-02",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://remarkstudio.tech/#process",
      lastModified: "2026-06-02",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://remarkstudio.tech/#capabilities",
      lastModified: "2026-06-02",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://remarkstudio.tech/#contact",
      lastModified: "2026-06-02",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
