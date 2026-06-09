// Public article fetchers used by the website (homepage + /blog + /blog/[slug]).
// Server-side fetch so the marketing pages stay statically generated when possible.

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://donia-api-production.up.railway.app";

export type BlogArticle = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  emoji: string;
  color: string;
  readMinutes: number;
  author: string;
  publishedAt: string | null;
};

export type BlogArticleFull = BlogArticle & {
  content: string;
};

export async function fetchArticles(limit = 24): Promise<BlogArticle[]> {
  try {
    const res = await fetch(`${API_URL}/v1/articles?limit=${limit}`, {
      // Revalidate every minute so newly published articles show up quickly.
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const data = (await res.json()) as { items?: BlogArticle[] };
    return data.items ?? [];
  } catch {
    return [];
  }
}

export async function fetchArticle(slug: string): Promise<BlogArticleFull | null> {
  try {
    const res = await fetch(`${API_URL}/v1/articles/${encodeURIComponent(slug)}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return (await res.json()) as BlogArticleFull;
  } catch {
    return null;
  }
}

export function formatBlogDate(iso: string | null): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}
