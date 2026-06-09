import type { Metadata } from "next";
import { Fraunces, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SiteOverlays } from "@/components/SiteOverlays";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// SEO : on cible deliberement les 2 orthographes ("Donia" courant + "Doniia" du nom legal)
// pour que Google indexe le site pour les 2 mots-cles.
export const metadata: Metadata = {
  title: "Donia (Doniia) — Cartes cadeaux Mobile Money pour l'Afrique",
  description:
    "Donia (doniia.com) : envoie une carte cadeau Mobile Money à un proche partout en Afrique. Anniversaire, Saint-Valentin, condoléances, Bonjour, Je t'aime. Dès 100 FCFA. MTN, Moov, Orange, Wave.",
  keywords: [
    "Donia",
    "Doniia",
    "doniia.com",
    "carte cadeau mobile money",
    "cadeau Afrique",
    "MTN Mobile Money",
    "Moov Money",
    "Orange Money",
    "Wave",
    "anniversaire Afrique",
    "diaspora",
    "Bénin",
    "Côte d'Ivoire",
    "Sénégal",
    "Togo",
    "envoyer argent Afrique",
  ],
  applicationName: "Donia",
  authors: [{ name: "NOVEKAI LTD", url: "https://doniia.com" }],
  creator: "NOVEKAI LTD",
  publisher: "NOVEKAI LTD",
  metadataBase: new URL("https://doniia.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/logo-donia-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/icon.svg",
    apple: "/logo-donia-512.png",
  },
  openGraph: {
    title: "Donia — L'amour. Le don. Le partage.",
    description:
      "Donia (doniia.com) : envoie une carte cadeau Mobile Money à un proche partout en Afrique. Dès 100 FCFA via MTN, Moov, Orange, Wave.",
    url: "https://doniia.com",
    siteName: "Donia",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/logo-donia-512.png",
        width: 512,
        height: 512,
        alt: "Donia — Cartes cadeaux Mobile Money",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donia — L'amour. Le don. Le partage.",
    description: "Une carte cadeau Mobile Money, un sourire. Dès 100 FCFA. Donia (doniia.com)",
    images: ["/logo-donia-512.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

// Structured data Schema.org pour le Knowledge Panel Google (logo, alternateName, etc.).
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Donia",
  alternateName: ["Doniia", "Donia App", "doniia.com"],
  url: "https://doniia.com",
  logo: "https://doniia.com/logo-donia-512.png",
  image: "https://doniia.com/logo-donia-512.png",
  description:
    "Donia est une application mobile permettant d'envoyer des cartes cadeaux Mobile Money à ses proches partout en Afrique et dans la diaspora. MTN, Moov, Orange, Wave.",
  founder: {
    "@type": "Person",
    name: "Espoir Agbessi",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "NOVEKAI LTD",
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
    },
  },
  sameAs: [
    "https://www.instagram.com/doniia.app",
    "https://twitter.com/doniia_app",
    "https://www.linkedin.com/company/donia-app",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "contact@doniia.com",
      availableLanguage: ["French", "English"],
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Donia",
  alternateName: "Doniia",
  url: "https://doniia.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://doniia.com/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${bricolage.variable} antialiased`}
    >
      <head>
        {/* Structured data Schema.org — apparition logo dans Google + matching Donia/Doniia */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <SiteOverlays />
      </body>
    </html>
  );
}
