import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SEO : forcer une seule version des URL (sans trailing slash)
  // évite les "Duplicata" dans Google Search Console.
  trailingSlash: false,

  // Redirects 301 permanents pour les anciennes URLs (404 historiques).
  // NOTE : on NE redirige PAS www -> apex ici, Vercel le fait au niveau du domaine
  // (sinon double redirect -> ERR_TOO_MANY_REDIRECTS).
  async redirects() {
    return [
      // Vieille convention HTML statique
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      // URL jamais existee (404 historique) -> homepage
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
