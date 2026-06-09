import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4" style={{ background: "var(--color-bg)" }}>
      <div className="bg-white rounded-3xl p-9 max-w-md text-center shadow-xl">
        <div className="text-5xl mb-4">🎁</div>
        <h1 className="font-display text-2xl mb-3">Cagnotte introuvable</h1>
        <p className="text-[var(--color-ink-2)] mb-6">
          Ce lien de cagnotte n'existe pas ou a été supprimé. Vérifie le code partagé ou demande à l'organisateur de te renvoyer le lien.
        </p>
        <Link href="https://doniia.com" className="btn btn-primary">
          Découvrir Donia
        </Link>
      </div>
    </main>
  );
}
