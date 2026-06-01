import Link from "next/link";
import { LogoMark } from "./LogoMark";

// Inline social SVGs
const InstagramIcon = (p: { size?: number }) => (
  <svg width={p.size ?? 16} height={p.size ?? 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const TikTokIcon = (p: { size?: number }) => (
  <svg width={p.size ?? 16} height={p.size ?? 16} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.69a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.12z" />
  </svg>
);
const FacebookIcon = (p: { size?: number }) => (
  <svg width={p.size ?? 16} height={p.size ?? 16} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const XIcon = (p: { size?: number }) => (
  <svg width={p.size ?? 16} height={p.size ?? 16} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const LinkedInIcon = (p: { size?: number }) => (
  <svg width={p.size ?? 16} height={p.size ?? 16} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.66.66 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
  </svg>
);

const COLS = [
  {
    title: "Produit",
    links: [
      { href: "/#how", label: "Comment ça marche" },
      { href: "/#catalog", label: "Catalogue" },
      { href: "/#anonymes", label: "Messages anonymes" },
      { href: "/#events", label: "Événements" },
      { href: "/#referral", label: "Parrainage" },
      { href: "/#download", label: "Télécharger" },
    ],
  },
  {
    title: "Société",
    links: [
      { href: "/#about", label: "À propos" },
      { href: "/#blog", label: "Blog" },
      { href: "/#contact", label: "Contact" },
      { href: "#", label: "Presse" },
      { href: "#", label: "Carrières" },
    ],
  },
  {
    title: "Aide",
    links: [
      { href: "/#faq", label: "FAQ" },
      { href: "/#contact", label: "Support" },
      { href: "#", label: "État du service" },
      { href: "#", label: "Partenaires" },
    ],
  },
  {
    title: "Légal",
    links: [
      { href: "/mentions-legales", label: "Mentions légales" },
      { href: "/cgu", label: "CGU" },
      { href: "/cgv", label: "CGV" },
      { href: "/confidentialite", label: "Confidentialité" },
      { href: "/cookies", label: "Cookies" },
      { href: "/charte-moderation", label: "Charte de modération" },
      { href: "/reglement-parrainage", label: "Règlement parrainage" },
    ],
  },
];

const SOCIALS = [
  { href: "https://instagram.com/doniia.app", Icon: InstagramIcon, label: "Instagram" },
  { href: "https://tiktok.com/@doniia.app", Icon: TikTokIcon, label: "TikTok" },
  { href: "https://facebook.com/doniia.app", Icon: FacebookIcon, label: "Facebook" },
  { href: "https://linkedin.com/company/novekai", Icon: LinkedInIcon, label: "LinkedIn" },
  { href: "https://x.com/doniia_app", Icon: XIcon, label: "X" },
];

export function Footer() {
  return (
    <footer className="bg-[#1a0830] text-[var(--color-cream)]">
      <div className="container-donia pt-20 pb-14 grid gap-10 lg:grid-cols-[1.2fr_repeat(4,1fr)]">
        {/* Brand block */}
        <div>
          <Link href="/" className="flex items-center gap-2.5 mb-3">
            <LogoMark size={36} />
            <span className="wordmark text-2xl text-white">
              Don<span className="accent">i</span>a
            </span>
          </Link>
          <p className="font-display text-[var(--color-mango)] text-base mb-1">
            L&rsquo;amour. Le don. Le partage.
          </p>
          <p className="font-display italic text-sm text-white/65 max-w-xs leading-relaxed">
            Une carte cadeau, un message, un sourire.
          </p>

          <div className="flex gap-2.5 mt-5">
            {SOCIALS.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg bg-white/8 border border-white/12 flex items-center justify-center hover:bg-white/15 hover:scale-105 transition-all"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Columns */}
        {COLS.map((col) => (
          <div key={col.title}>
            <h4 className="font-display text-sm tracking-tight text-white mb-3 font-semibold">
              {col.title}
            </h4>
            <ul className="flex flex-col gap-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="container-donia py-5 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-white/55">
          <p>
            © {new Date().getFullYear()} <strong className="text-white/80 font-semibold">Donia</strong> · NovekAI Agency · Cotonou, Bénin
          </p>
          <p>
            Paiements sécurisés via <strong className="text-[var(--color-mango)] font-semibold">FedaPay</strong> · 8 pays · 17 opérateurs
          </p>
        </div>
      </div>
    </footer>
  );
}
