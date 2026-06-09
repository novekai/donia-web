import type { MetadataRoute } from "next";

// Sitemap declare a Google les pages publiques + leur frequence de mise a jour.
// Indispensable pour que Google indexe rapidement le site avec les bons mots-cles
// ("Donia" et "Doniia" — voir layout.tsx pour les metadata + structured data).
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://doniia.com";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/cgu`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/cgv`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/confidentialite`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/cookies`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/mentions-legales`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/charte-moderation`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/reglement-parrainage`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  return staticRoutes;
}
