import Link from "next/link";
import { ChevronLeft } from "lucide-react";

type Props = {
  category: string;
  title: string;
  version?: string;
  effectiveDate?: string;
  children: React.ReactNode;
};

export function LegalLayout({
  category,
  title,
  version = "Version 1.0",
  effectiveDate = "16 juin 2026",
  children,
}: Props) {
  return (
    <article className="pt-32 pb-24 bg-[var(--color-cream)]">
      <div className="container-donia max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-ink-2)] hover:text-[var(--color-coral)] transition mb-8"
        >
          <ChevronLeft size={16} /> Retour à l&rsquo;accueil
        </Link>

        <header className="mb-12 pb-8 border-b border-[var(--color-line)]">
          <p className="font-display italic text-[var(--color-coral)] text-base mb-2">
            {category}
          </p>
          <h1 className="font-display text-4xl md:text-5xl tracking-tight mb-4">
            {title}
          </h1>
          <p className="text-sm text-[var(--color-ink-3)]">
            {version} · En vigueur à compter du {effectiveDate}
            <br />
            NOVEKAI LTD · Companies House 16853666
          </p>
        </header>

        <div className="legal-content space-y-7 leading-relaxed text-[var(--color-ink)]">
          {children}
        </div>

        <footer className="mt-16 pt-8 border-t border-[var(--color-line)] text-sm text-[var(--color-ink-3)]">
          <p>
            Pour toute question, contacte-nous à{" "}
            <a href="mailto:contact@doniia.com" className="text-[var(--color-coral)] hover:underline">
              contact@doniia.com
            </a>{" "}
            ou par téléphone au{" "}
            <span className="font-mono">+229 01 62 44 00 72</span>.
          </p>
        </footer>
      </div>
    </article>
  );
}
