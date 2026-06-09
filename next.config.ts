import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SEO : forcer une seule version des URL (sans trailing slash)
  // évite les "Duplicata" dans Google Search Console.
  trailingSlash: false,

  // Redirects 301 permanents : permettent a Google de transferer le "juice" SEO
  // des anciennes URLs vers les nouvelles, et de sortir les 404 de l'index.
  async redirects() {
    return [
      // 1. WWW vers apex (canonical doniia.com)
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.doniia.com",
          },
        ],
        destination: "https://doniia.com/:path*",
        permanent: true,
      },
      // 2. Vieille convention HTML statique
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      // 3. URL jamais existee (404 historique) -> homepage
      {
        source: "/store",
        destination: "/",
        permanent: true,
      },
    ];
  },

  // Cache les SVG/PNG du logo plus longtemps (1 an)
  async headers() {
    return [
      {
        source: "/logo-donia-512.png",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/icon.svg",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
