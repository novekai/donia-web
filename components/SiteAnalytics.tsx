"use client";

// SiteAnalytics : silencieux. Ping le backend pour tracker la visite + UTM + referrer.
// Exclu sur les pages anonymes (/a/[code]) — passe `disabled` depuis le layout si besoin.
// Utilise sessionStorage pour generer un sessionId stable durant la session.
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE ?? "https://donia-backend-production.up.railway.app";

function getOrCreateSessionId(): string {
  if (typeof window === "undefined") return "";
  let sid = sessionStorage.getItem("donia_sid");
  if (!sid) {
    sid = `s_${crypto.randomUUID()}`;
    sessionStorage.setItem("donia_sid", sid);
  }
  return sid;
}

export function SiteAnalytics({ disabled = false }: { disabled?: boolean }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (disabled) return;
    if (typeof window === "undefined") return;

    // Ne pas tracker sur les pages anonymes (ADN 100% anonyme)
    if (pathname?.startsWith("/a/")) return;

    const sessionId = getOrCreateSessionId();
    const body = {
      path: pathname || "/",
      sessionId,
      utmSource: searchParams.get("utm_source") || undefined,
      utmMedium: searchParams.get("utm_medium") || undefined,
      utmCampaign: searchParams.get("utm_campaign") || undefined,
      referrer: document.referrer || undefined,
    };

    // Fire-and-forget : on n'attend pas la reponse, on n'expose rien a l'user.
    fetch(`${API_BASE}/v1/public/track-visit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      keepalive: true,
    }).catch(() => {
      // Silencieux : si le tracking plante, l'UX continue normalement.
    });
  }, [pathname, searchParams, disabled]);

  return null;
}
