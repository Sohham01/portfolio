import type { MetadataRoute } from "next";

const siteUrl = "https://sohhamchoudhary.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/projects/salesmindai`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/projects/salesmindai/demo`,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
