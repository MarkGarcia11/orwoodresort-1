import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/marina", priority: 0.9, changeFrequency: "monthly" },
  { path: "/bar-grill", priority: 0.9, changeFrequency: "weekly" },
  { path: "/rv-camping", priority: 0.9, changeFrequency: "monthly" },
  { path: "/storage", priority: 0.9, changeFrequency: "monthly" },
  { path: "/water-sports", priority: 0.8, changeFrequency: "monthly" },
  { path: "/fishing", priority: 0.8, changeFrequency: "monthly" },
  { path: "/general-store", priority: 0.7, changeFrequency: "monthly" },
  { path: "/events", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/gallery", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
