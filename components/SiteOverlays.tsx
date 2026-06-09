"use client";

// Wrapper client pour SiteAnalytics + NewsletterPopup. Permet d'utiliser useSearchParams
// dans le layout server-component via un Suspense boundary.
import { Suspense } from "react";
import { SiteAnalytics } from "./SiteAnalytics";
import { NewsletterPopup } from "./NewsletterPopup";

export function SiteOverlays() {
  return (
    <Suspense fallback={null}>
      <SiteAnalytics />
      <NewsletterPopup />
    </Suspense>
  );
}
