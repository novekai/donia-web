"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles } from "lucide-react";
import { LogoMark } from "./LogoMark";

// Entre lg (1024px) et xl (1280px), on n'affiche que les liens principaux ;
// le reste apparaît au-delà.
const LINKS = [
  { href: "/#why", label: "Pourquoi", showAt: "xl" },
  { href: "/#how", label: "Comment ça marche", showAt: "xl" },
  { href: "/#catalog", label: "Catalogue", showAt: "lg" },
  { href: "/#events", label: "Événements", showAt: "xl" },
  { href: "/#referral", label: "Parrainage", showAt: "lg" },
  { href: "/blog", label: "Blog", showAt: "lg" },
] as const;

export function Navbar() {
  const [scrolledRaw, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Only the homepage has a hero dark enough to host the transparent navbar.
  // Every other route (blog, legal, anonymous) is light, so we keep the
  // contrasted (white) navbar even at scrollY=0.
  const solidByDefault = pathname !== "/";
  const scrolled = solidByDefault || scrolledRaw;

  useEffect(() => {
    if (solidByDefault) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solidByDefault]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-[0_4px_30px_-12px_rgba(42,15,26,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-donia flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2.5 group">
          <LogoMark size={36} className="group-hover:scale-105 transition-transform" />
          <span
            className={`wordmark text-2xl md:text-3xl ${
              scrolled ? "text-[var(--color-indigo)]" : "text-white"
            } transition-colors`}
          >
            Don
            <span
              className="accent"
              style={{ color: scrolled ? "var(--color-coral)" : "var(--color-mango)" }}
            >
              i
            </span>
            a
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                l.showAt === "xl" ? "hidden xl:inline" : "inline"
              } ${
                scrolled
                  ? "text-[var(--color-ink-2)] hover:text-[var(--color-coral)]"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <Link
            href="/#anonymes"
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-transform hover:scale-105"
            style={{
              background: "var(--gradient-coral)",
              boxShadow: "0 10px 28px -10px rgba(244,72,111,0.6)",
            }}
          >
            Anonymes
            <Sparkles size={14} />
          </Link>
          <Link
            href="/#download"
            className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-transform hover:scale-105"
            style={{
              background: "var(--color-indigo-deep)",
              boxShadow: "0 10px 28px -10px rgba(65,8,123,0.55)",
            }}
          >
            Télécharger
          </Link>
          <button
            className={`lg:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              scrolled
                ? "bg-white border border-[var(--color-line)] text-[var(--color-ink)]"
                : "bg-white/15 border border-white/25 text-white backdrop-blur"
            }`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-[var(--color-line)] shadow-md">
          <div className="container-donia py-4 flex flex-col gap-3">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium text-[var(--color-ink)] hover:text-[var(--color-coral)] transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#anonymes"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 py-3 rounded-full text-white font-semibold"
              style={{ background: "var(--gradient-coral)" }}
            >
              Anonymes <Sparkles size={14} />
            </Link>
            <Link
              href="/#download"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center py-3 rounded-full font-semibold bg-[var(--color-indigo)] text-white"
            >
              Télécharger l&rsquo;app
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
