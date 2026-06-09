import type { MetadataRoute } from "next";

// Web App Manifest : aide Google a comprendre que doniia.com est une web app
// (favicon, theme color, etc.) + permet l'install PWA si on l'active plus tard.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Donia — Cartes cadeaux Mobile Money",
    short_name: "Donia",
    description:
      "Envoie une carte cadeau Mobile Money a un proche partout en Afrique. Donia.",
    start_url: "/",
    display: "standalone",
    background_color: "#FDF7F6",
    theme_color: "#FC4D6B",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/logo-donia-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
