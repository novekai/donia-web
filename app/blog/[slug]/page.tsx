import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { fetchArticle, fetchArticles, formatBlogDate } from "@/lib/articles";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = await fetchArticle(slug);
  if (!a) return { title: "Article introuvable — Donia" };
  return {
    title: `${a.title} — Blog Donia`,
    description: a.excerpt,
    openGraph: { title: a.title, description: a.excerpt, type: "article" },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await fetchArticle(slug);
  if (!article) notFound();

  const all = await fetchArticles(24);
  const related = all.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <article className="bg-white">
      {/* Header coloré */}
      <header
        className="relative overflow-hidden"
        style={{ background: article.color, color: "#FDF7F6" }}
      >
        <svg
          className="absolute -top-20 -right-20 opacity-25"
          width="400"
          height="400"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="42" stroke="#FDF7F6" strokeWidth="0.6" fill="none" />
          <circle cx="50" cy="50" r="32" stroke="#FDF7F6" strokeWidth="0.6" fill="none" strokeDasharray="2 3" />
          <circle cx="50" cy="50" r="20" stroke="#FDF7F6" strokeWidth="0.6" fill="none" />
        </svg>
        <svg
          className="absolute -bottom-32 -left-32 opacity-15"
          width="500"
          height="500"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="42" stroke="#FDF7F6" strokeWidth="0.6" fill="none" />
          <circle cx="50" cy="50" r="28" stroke="#FDF7F6" strokeWidth="0.6" fill="none" />
        </svg>

        <div className="container-donia py-24 sm:py-28 relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium opacity-90 hover:opacity-100 transition-opacity mb-8"
          >
            <span aria-hidden>←</span> Tous les articles
          </Link>

          <div className="flex items-start gap-6">
            <div className="text-7xl sm:text-8xl flex-shrink-0">{article.emoji}</div>
            <div>
              <span className="inline-flex text-xs font-bold uppercase tracking-wider bg-white/15 backdrop-blur px-3 py-1.5 rounded-full mb-4">
                {article.category}
              </span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
                {article.title}
              </h1>
              <p className="mt-4 text-base sm:text-lg opacity-90 max-w-2xl leading-relaxed">
                {article.excerpt}
              </p>
              <p className="mt-6 text-xs sm:text-sm italic opacity-75">
                {formatBlogDate(article.publishedAt)} · {article.readMinutes} min · {article.author}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Contenu */}
      <div className="container-donia py-16 sm:py-20">
        <div className="max-w-2xl mx-auto article-body">
          {article.content.split(/\n+/).map((p, i) =>
            p.trim() ? (
              <p key={i}>{p}</p>
            ) : (
              <div key={i} aria-hidden="true" />
            ),
          )}
        </div>

        {related.length > 0 && (
          <div className="max-w-5xl mx-auto mt-20 pt-12 border-t border-[var(--color-line)]">
            <p className="font-display italic text-[var(--color-coral)] text-base sm:text-lg mb-2 text-center">
              À lire aussi
            </p>
            <h2 className="font-display text-2xl sm:text-3xl tracking-tight text-center mb-10">
              Autres articles du blog
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="block bg-white rounded-3xl overflow-hidden border border-[var(--color-line)] hover:-translate-y-1 transition-transform"
                >
                  <div
                    className="relative aspect-[16/9] flex items-center justify-center text-5xl overflow-hidden"
                    style={{ background: r.color, color: "#FDF7F6" }}
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
                    <span className="relative z-10">{r.emoji}</span>
                  </div>
                  <div className="p-5">
                    <span
                      className="inline-flex text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2"
                      style={{ background: `${r.color}1a`, color: r.color }}
                    >
                      {r.category}
                    </span>
                    <h3 className="font-display text-base leading-snug tracking-tight">{r.title}</h3>
                    <p className="mt-2 text-xs italic text-[var(--color-ink-3)]">
                      {formatBlogDate(r.publishedAt)} · {r.readMinutes} min
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="max-w-2xl mx-auto mt-20 text-center">
          <Link href="/blog" className="btn btn-secondary">
            ← Tous les articles
          </Link>
        </div>
      </div>
    </article>
  );
}
