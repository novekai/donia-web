import Link from "next/link";
import type { Metadata } from "next";
import { fetchArticles, formatBlogDate } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Blog — Histoires, conseils, actualités · Donia",
  description:
    "Les histoires de la diaspora, les coulisses du studio Donia et nos conseils pour rester en lien avec ses proches en Afrique.",
};

export default async function BlogIndexPage() {
  const items = await fetchArticles(100);

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="container-donia">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="font-display italic text-[var(--color-coral)] text-base sm:text-lg mb-2">
            Blog
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight">
            Histoires, conseils, <em className="text-[var(--color-coral)]">actualités</em>
          </h1>
          <p className="mt-5 text-base text-[var(--color-ink-2)] leading-relaxed">
            Les portraits de la diaspora, les coulisses du studio Donia et nos conseils pour rester en
            lien avec ses proches malgré la distance.
          </p>
        </div>

        {items.length === 0 ? (
          <div className="max-w-md mx-auto text-center bg-[var(--color-cream)] rounded-3xl p-10">
            <div className="text-5xl mb-4">📝</div>
            <h2 className="font-display text-xl mb-2 tracking-tight">
              Pas encore d&rsquo;article publié
            </h2>
            <p className="text-sm text-[var(--color-ink-2)] leading-relaxed">
              Reviens bientôt — l&rsquo;équipe Donia prépare les premiers récits.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {items.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="block bg-white rounded-3xl overflow-hidden border border-[var(--color-line)] hover:-translate-y-1 transition-transform"
              >
                <div
                  className="relative aspect-[16/9] flex items-center justify-center text-6xl overflow-hidden"
                  style={{ background: p.color, color: "#FDF7F6" }}
                >
                  <svg
                    className="absolute -top-8 -right-8 opacity-25"
                    width="160"
                    height="160"
                    viewBox="0 0 100 100"
                  >
                    <circle cx="50" cy="50" r="42" stroke="#FDF7F6" strokeWidth="0.8" fill="none" />
                    <circle cx="50" cy="50" r="28" stroke="#FDF7F6" strokeWidth="0.8" fill="none" />
                  </svg>
                  <span className="relative z-10">{p.emoji}</span>
                </div>
                <div className="p-6">
                  <span
                    className="inline-flex text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3"
                    style={{ background: `${p.color}1a`, color: p.color }}
                  >
                    {p.category}
                  </span>
                  <h2 className="font-display text-lg mb-2 leading-snug tracking-tight">{p.title}</h2>
                  <p className="text-sm text-[var(--color-ink-2)] leading-relaxed mb-4">
                    {p.excerpt}
                  </p>
                  <p className="text-xs italic text-[var(--color-ink-3)]">
                    {formatBlogDate(p.publishedAt)} · {p.readMinutes} min · {p.author}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
