import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AnonymousForm } from "./AnonymousForm";

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "https://donia-backend-production.up.railway.app";

type RecipientResponse = {
  link: {
    code: string;
    prompt: string;
    theme: string;
    recipient: { firstName: string; avatarUrl: string | null };
  };
};

async function fetchRecipient(code: string): Promise<RecipientResponse | null> {
  try {
    const res = await fetch(`${API_BASE}/v1/public/anonymes/${code}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    return (await res.json()) as RecipientResponse;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ code: string }> }): Promise<Metadata> {
  const { code } = await params;
  const data = await fetchRecipient(code);
  if (!data) {
    return { title: "Lien anonyme introuvable — Donia" };
  }
  const name = data.link.recipient.firstName;
  return {
    title: `Envoie un message anonyme à ${name} — Donia`,
    description: data.link.prompt,
    openGraph: {
      title: `Envoie un message anonyme à ${name} ✨`,
      description: data.link.prompt,
      type: "website",
      images: [
        {
          url: "/og-anonymes.png",
          width: 1200,
          height: 630,
          alt: "Donia — Messages anonymes",
        },
      ],
    },
  };
}

export default async function AnonymousReceivePage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  const data = await fetchRecipient(code);
  if (!data) notFound();
  const { recipient, prompt } = data.link;

  return (
    <AnonymousForm
      code={code}
      firstName={recipient.firstName}
      avatarUrl={recipient.avatarUrl}
      prompt={prompt}
      apiBase={API_BASE}
    />
  );
}
