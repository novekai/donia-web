import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SEO : forcer une seule version des URL (sans trailing slash)
  // évite les "Duplicata" dans Google Search Console.
  trailingSlash: false,

  // Redirige /page/ → /page en 308 (permanent + preserve method).
  // Si Google a deja indexe certaines URL avec trailing slash, il suivra le 308.
  async redirects() {
    return [
      // Redirige les anciens chemins WWW vers la racine (canonical = doniia.com)
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
