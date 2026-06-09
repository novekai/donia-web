import type { Metadata } from "next";
import Link from "next/link";
import { MerciClient } from "./MerciClient";

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "https://donia-api-production.up.railway.app";

type Cagnotte = {
  publicCode: string;
  title: string;
  goalAmount: number;
  totalRaised: number;
  owner: { firstName: string; avatarUrl: string | null };
};

async function fetchCagnotte(code: string): Promise<Cagnotte | null> {
  try {
    const res = await fetch(`${API_BASE}/v1/public/cagnottes/${encodeURIComponent(code)}`, {
      next: { revalidate: 30 },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { cagnotte?: Cagnotte };
    return data.cagnotte ?? null;
  } catch {
    return null;
  }
}

export const metadata: Metadata = {
  title: "Merci pour ta contribution · Donia",
  description: "Ta contribution a été enregistrée. Crée tes propres cagnottes en téléchargeant Donia.",
};

function fmt(n: number): string {
  return Math.round(n).toLocaleString("fr-FR").replace(/,/g, " ");
}

export default async function MerciPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  const c = await fetchCagnotte(code);

  return (
    <main className="min-h-screen" style={{ background: "var(--color-bg)" }}>
      {/* Hero gradient */}
      <section
        className="relative overflow-hidden text-white"
        style={{ background: "var(--gradient-coral)" }}
      >
        {/* Confetti deco (CSS animated) */}
        <MerciClient />

        <div className="container-donia py-14 sm:py-20 max-w-2xl text-center relative z-10">
          <div className="text-7xl mb-5 animate-bounce-slow" style={{ animationDuration: "2s" }}>
            💝
          </div>
          <h1 className="font-display text-3xl sm:text-5xl tracking-tight mb-3">
            Merci pour ta contribution !
          </h1>
          <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-6">
            {c
              ? `Ta participation à la cagnotte "${c.title}" est en cours de confirmation. ${c.owner.firstName} sera notifié·e dès validation.`
              : "Ta participation est en cours de confirmation. L'organisateur sera notifié·e dès validation."}
          </p>

          {c && (
            <div className="inline-block bg-white/15 backdrop-blur rounded-2xl px-6 py-4 mb-2">
              <p className="text-xs uppercase tracking-[0.16em] text-white/70 mb-1">
                Progression de la cagnotte
              </p>
              <p className="font-display text-2xl sm:text-3xl font-bold">
                {fmt(c.totalRaised)} <span className="text-base text-white/70">/ {fmt(c.goalAmount)} FCFA</span>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA : télécharger l'app */}
      <section className="py-14">
        <div className="container-donia max-w-2xl">
          <div className="bg-white rounded-3xl p-7 sm:p-10 shadow-xl text-center">
            <div className="flex justify-center mb-5">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                style={{ background: "var(--gradient-indigo)" }}
              >
                🎁
              </div>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl tracking-tight mb-3">
              Et toi, tu veux créer ta propre <span className="italic text-[var(--color-coral)]">cagnotte</span> ?
            </h2>
            <p className="text-[var(--color-ink-2)] leading-relaxed mb-7 max-w-md mx-auto">
              Rassemble tes proches autour d'un cadeau commun. Anniversaire, mariage, condoléances, départ à la
              retraite. Crée ta cagnotte en 1 minute sur l'app Donia.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 max-w-md mx-auto">
              <a
                href="https://apps.apple.com/app/donia"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary !py-3 !text-sm"
              >
                Télécharger sur iPhone
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.novekai.donia"
                target="_blank"
                rel="noreferrer"
                className="btn !py-3 !text-sm"
                style={{ background: "var(--color-ink)", color: "white" }}
              >
                Télécharger sur Android
              </a>
            </div>

            <p className="text-xs text-[var(--color-ink-3)] mt-6 italic">
              Tu peux aussi envoyer des cartes cadeaux Mobile Money à tes proches via Donia 💌
            </p>
          </div>

          {/* Retour à la cagnotte */}
          {c && (
            <div className="text-center mt-6">
              <Link
                href={`/c/${c.publicCode}`}
                className="text-sm text-[var(--color-ink-2)] hover:text-[var(--color-coral)] underline underline-offset-4"
              >
                ← Retour à la cagnotte de {c.owner.firstName}
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Reassurance */}
      <section className="pb-16">
        <div className="container-donia max-w-2xl text-center">
          <p className="text-xs text-[var(--color-ink-3)] italic">
            🔒 Tes données restent confidentielles. Tu recevras une notification WhatsApp quand la cagnotte sera clôturée.
          </p>
        </div>
      </section>
    </main>
  );
}
