import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="container-donia max-w-md relative z-10 text-center">
        <Link href="/" className="flex items-center gap-2.5 justify-center mb-10 text-white/85 hover:text-white">
          <span className="wordmark text-2xl">
            Don<span className="accent">i</span>a
          </span>
        </Link>

        <div className="bg-white rounded-3xl p-10 shadow-[0_30px_80px_-24px_rgba(42,15,26,0.45)]">
          <p className="text-6xl mb-4">💔</p>
          <h1 className="font-display text-3xl tracking-tight mb-3">Ce lien n&rsquo;existe plus</h1>
          <p className="text-[var(--color-ink-2)] text-base mb-8 leading-relaxed">
            Ce lien anonyme a peut-être été supprimé, suspendu ou n&rsquo;a jamais existé.
            <br />
            Tu peux créer le tien depuis l&rsquo;app Donia.
          </p>
          <Link href="/#download" className="btn btn-primary w-full !py-4">
            Télécharger Donia
          </Link>
        </div>
      </div>
    </main>
  );
}
