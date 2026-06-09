import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Pages anonymes : pas indexees (vie privee des destinataires)
        disallow: ["/a/", "/c/"],
      },
    ],
    sitemap: "https://doniia.com/sitemap.xml",
    host: "https://doniia.com",
  };
}
