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

export const metadata: Metadata = {
  title: "Donia — Une carte cadeau, un email, un sourire.",
  description:
    "Envoie une carte cadeau Mobile Money à un proche, où qu'il soit en Afrique. Anniversaire, Saint-Valentin, condoléances, Bonjour, Je t'aime. Dès 100 FCFA.",
  metadataBase: new URL("https://doniia.com"),
  openGraph: {
    title: "Donia — L'amour. Le don. Le partage.",
    description: "Une carte cadeau, un email, un sourire.",
    url: "https://doniia.com",
    siteName: "Donia",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Donia — L'amour. Le don. Le partage.",
    description: "Une carte cadeau, un email, un sourire.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${bricolage.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <SiteOverlays />
      </body>
    </html>
  );
}
