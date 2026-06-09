import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CagnotteContributeForm } from "./CagnotteContributeForm";

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "https://donia-api-production.up.railway.app";

type Cagnotte = {
  publicCode: string;
  title: string;
  description: string | null;
  goalAmount: number;
  totalRaised: number;
  deadline: string | null;
  status: "ACTIVE" | "CLOSED" | "CANCELLED";
  createdAt: string;
  owner: { firstName: string; avatarUrl: string | null };
  contributions: { id: string; name: string; amount: number; message: string | null; createdAt: string }[];
  contributionCount: number;
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

export async function generateMetadata({ params }: { params: Promise<{ code: string }> }): Promise<Metadata> {
  const { code } = await params;
  const c = await fetchCagnotte(code);
  if (!c) return { title: "Cagnotte introuvable · Donia" };
  return {
    title: `${c.title} · Cagnotte ${c.owner.firstName} · Donia`,
    description: `Contribuer à la cagnotte "${c.title}" organisée par ${c.owner.firstName}. Objectif : ${c.goalAmount.toLocaleString("fr-FR")} FCFA.`,
    openGraph: {
      title: `🎁 Cagnotte ${c.title}`,
      description: `${c.owner.firstName} organise une cagnotte sur Donia. Contribue facilement par Mobile Money.`,
      type: "website",
    },
  };
}

function fmt(n: number): string {
  return Math.round(n).toLocaleString("fr-FR").replace(/,/g, " ");
}

function timeAgo(iso: string): string {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86400_000);
  if (days <= 0) return "aujourd'hui";
  if (days === 1) return "hier";
  return `il y a ${days}j`;
}

export default async function CagnottePublicPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  const c = await fetchCagnotte(code);
  if (!c) notFound();

  const pct = c.goalAmount > 0 ? Math.min(100, (c.totalRaised / c.goalAmount) * 100) : 0;
  const remaining = Math.max(0, c.goalAmount - c.totalRaised);
  const isClosed = c.status !== "ACTIVE" || (c.deadline && new Date(c.deadline) < new Date());

  return (
    <main className="min-h-screen" style={{ background: "var(--color-bg)" }}>
      {/* Hero gradient */}
      <section
        className="relative overflow-hidden text-white"
        style={{ background: "var(--gradient-indigo)" }}
      >
        <div className="container-donia py-12 sm:py-20 max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🎁</span>
            <p className="font-display italic text-[var(--color-mango)] text-sm sm:text-base uppercase tracking-[0.16em]">
              Cagnotte {c.status === "ACTIVE" ? "active" : c.status === "CLOSED" ? "clôturée" : "annulée"}
            </p>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl tracking-tight mb-3">{c.title}</h1>
          {c.description && (
            <p className="text-base sm:text-lg text-white/85 leading-relaxed mb-6">{c.description}</p>
          )}

          <p className="text-sm text-white/75 mb-5">
            Organisée par <strong className="text-white">{c.owner.firstName}</strong> sur{" "}
            <span className="font-display italic">Donia</span>
          </p>

          <div className="bg-white/12 backdrop-blur rounded-3xl p-6 sm:p-7">
            <div className="flex items-baseline gap-2 mb-3">
              <span className="font-display text-4xl sm:text-5xl font-bold">{fmt(c.totalRaised)}</span>
              <span className="text-white/70 text-sm">/ {fmt(c.goalAmount)} FCFA</span>
            </div>
            <div className="h-3 rounded-full bg-white/15 overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${pct}%`, background: "var(--gradient-mango)" }}
              />
            </div>
            <p className="mt-3 text-sm italic text-white/85">
              {pct.toFixed(0)}% atteint{remaining > 0 ? ` · plus que ${fmt(remaining)} FCFA` : " · objectif atteint 🎉"}
              {c.deadline && ` · clôture le ${new Date(c.deadline).toLocaleDateString("fr-FR", { day: "numeric", month: "long" })}`}
            </p>
            <p className="mt-2 text-xs text-white/70">
              {c.contributionCount} contribution{c.contributionCount > 1 ? "s" : ""}
            </p>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-12">
        <div className="container-donia max-w-xl">
          {isClosed ? (
            <div className="bg-white rounded-3xl p-7 shadow-xl text-center">
              <div className="text-5xl mb-3">🔒</div>
              <h2 className="font-display text-2xl mb-2">Cagnotte clôturée</h2>
              <p className="text-[var(--color-ink-2)] mb-5">
                Cette cagnotte n'accepte plus de contributions.
              </p>
              <a href="https://doniia.com" className="btn btn-primary">
                Découvrir Donia
              </a>
            </div>
          ) : (
            <CagnotteContributeForm code={c.publicCode} apiBase={API_BASE} ownerFirstName={c.owner.firstName} />
          )}
        </div>
      </section>

      {/* Contributeurs */}
      {c.contributions.length > 0 && (
        <section className="pb-16">
          <div className="container-donia max-w-xl">
            <h3 className="font-display text-xl mb-4">Derniers contributeurs</h3>
            <div className="bg-white rounded-3xl shadow-md overflow-hidden">
              {c.contributions.map((co, i) => (
                <div
                  key={co.id}
                  className="flex items-center gap-3 px-5 py-3.5"
                  style={{ borderBottom: i < c.contributions.length - 1 ? "1px solid var(--color-line)" : "none" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ background: "var(--gradient-coral)" }}
                  >
                    {(co.name[0] ?? "?").toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <p className="font-display font-semibold text-sm">{co.name}</p>
                    <p className="text-xs text-[var(--color-ink-3)]">{timeAgo(co.createdAt)}</p>
                  </div>
                  <p className="font-bold text-[var(--color-green)]">+{fmt(co.amount)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Donia */}
      <section className="pb-16">
        <div className="container-donia max-w-xl">
          <div
            className="rounded-3xl p-7 text-white text-center"
            style={{ background: "var(--gradient-coral)" }}
          >
            <h3 className="font-display text-xl sm:text-2xl mb-2">
              Tu veux créer ta propre cagnotte ?
            </h3>
            <p className="text-white/90 text-sm mb-5">
              Télécharge Donia et rassemble tes proches autour d'un cadeau commun.
            </p>
            <a href="https://doniia.com" className="btn bg-white text-[var(--color-coral-deep)]">
              Télécharger Donia
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
