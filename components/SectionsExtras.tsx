"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin, ChevronDown } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://donia-api-production.up.railway.app";

// ─────────────── À PROPOS ───────────────

const VALUES = [
  { t: "Amour", d: "Chaque carte est un geste de tendresse." },
  { t: "Don", d: "La générosité est une force universelle." },
  { t: "Partage", d: "Nous sommes tous reliés, par-delà les frontières." },
  { t: "Fierté", d: "Racines locales, ambition mondiale." },
];

export function SectionAbout() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[var(--color-cream)]">
      <div className="container-donia">
        <div className="text-center mb-14">
          <p className="font-display italic text-[var(--color-coral)] text-base sm:text-lg mb-2">
            À propos
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight">
            L&rsquo;histoire derrière <em className="text-[var(--color-coral)]">le nom</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-base text-[var(--color-ink)] leading-relaxed"
          >
            <p>
              <strong>Donia</strong> est né d&rsquo;une intuition simple : le mot évoque à la fois le{" "}
              <em>don</em>, et <em>dunia</em> — qui veut dire « le monde » dans plusieurs langues
              d&rsquo;Afrique de l&rsquo;Est et du monde arabe.
            </p>
            <p>
              Le don, ouvert au monde. Une promesse universelle, des racines bien locales. C&rsquo;est
              cette double identité que l&rsquo;app porte : permettre à n&rsquo;importe qui,
              n&rsquo;importe où, d&rsquo;offrir un geste affectif à un proche — sans paperasse, sans
              friction, sans frontière.
            </p>
            <p>
              Édité par <strong>NovekAI Agency</strong> à Cotonou (Bénin), Donia est un projet à forte
              charge culturelle. Chaque carte est dessinée à la main, chaque interaction pensée pour
              résonner avec l&rsquo;expérience africaine du don.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {VALUES.map((v) => (
              <div
                key={v.t}
                className="bg-white rounded-2xl p-5 border border-[var(--color-line)] hover:-translate-y-1 transition-transform"
              >
                <h3 className="font-display italic text-xl mb-2 text-[var(--color-coral)]">{v.t}</h3>
                <p className="text-sm text-[var(--color-ink-2)] leading-relaxed">{v.d}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─────────────── BLOG ───────────────

type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  emoji: string;
  color: string;
  readMinutes: number;
  publishedAt: string | null;
};

const FALLBACK_POSTS: BlogPost[] = [
  {
    slug: "5-facons-celebrer-anniversaire-distance",
    title: "5 façons de célébrer un anniversaire à distance",
    category: "Conseil",
    excerpt: "Quand la famille est éparpillée sur 3 continents, la présence prend une autre forme.",
    emoji: "🎂",
    color: "#F4486F",
    readMinutes: 4,
    publishedAt: "2026-05-24T00:00:00.000Z",
  },
  {
    slug: "awa-cotonou-4-cartes-par-mois",
    title: "Awa, Cotonou : « J'envoie 4 cartes par mois »",
    category: "Témoignage",
    excerpt: "Portrait d'une utilisatrice qui a transformé sa façon d'être en lien avec ses proches.",
    emoji: "💝",
    color: "#41087B",
    readMinutes: 4,
    publishedAt: "2026-05-20T00:00:00.000Z",
  },
  {
    slug: "cartes-tabaski-2026-3-designs-exclusifs",
    title: "Cartes Tabaski 2026 : 3 designs exclusifs",
    category: "Produit",
    excerpt: "Notre studio a travaillé avec un illustrateur sénégalais. Découvre les coulisses.",
    emoji: "🌙",
    color: "#F9A01C",
    readMinutes: 4,
    publishedAt: "2026-05-15T00:00:00.000Z",
  },
];

export function SectionBlog() {
  const [posts, setPosts] = useState<BlogPost[]>(FALLBACK_POSTS);

  useEffect(() => {
    let cancelled = false;
    fetch(`${API_URL}/v1/articles?limit=6`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data: { items?: BlogPost[] } | null) => {
        if (cancelled || !data?.items?.length) return;
        setPosts(data.items.slice(0, 3));
      })
      .catch(() => {
        // Keep fallback — the homepage must never look broken.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="blog" className="py-24 sm:py-32 bg-white">
      <div className="container-donia">
        <div className="text-center mb-14">
          <p className="font-display italic text-[var(--color-coral)] text-base sm:text-lg mb-2">Blog</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight">
            Histoires, conseils, <em className="text-[var(--color-coral)]">actualités</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <Link
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
                  <h3 className="font-display text-lg mb-2 leading-snug tracking-tight">{p.title}</h3>
                  <p className="text-sm text-[var(--color-ink-2)] leading-relaxed mb-4">{p.excerpt}</p>
                  <p className="text-xs italic text-[var(--color-ink-3)]">
                    {formatBlogDate(p.publishedAt)} · {p.readMinutes} min
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog" className="btn btn-secondary">
            Voir tous les articles →
          </Link>
        </div>
      </div>
    </section>
  );
}

function formatBlogDate(iso: string | null): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

// ─────────────── FAQ ───────────────

const FAQS = [
  {
    q: "Le destinataire doit-il avoir un compte Donia ?",
    a: "Non. Il reçoit la carte par email ou WhatsApp avec un code à 8 caractères. Il peut le rentrer dans l'app pour convertir, ou la garder en souvenir.",
  },
  {
    q: "Quels opérateurs Mobile Money sont supportés ?",
    a: "MTN (Bénin, Côte d'Ivoire, Cameroun, Ouganda, Rwanda), Moov, Orange Money, Wave, Vodafone Cash, M-Pesa. 17 opérateurs au total, via FedaPay.",
  },
  {
    q: "Combien coûte l'envoi d'une carte ?",
    a: "Côté envoi : 0 FCFA de frais. Le coût de la carte = la valeur que tu veux offrir (dès 100 FCFA). Côté réception : une commission de 5 % est prélevée à la conversion en Mobile Money.",
  },
  {
    q: "Combien de temps pour recevoir les fonds ?",
    a: "La carte arrive en quelques minutes après paiement. La conversion en Mobile Money est instantanée (généralement < 1 min, dépend de l'opérateur).",
  },
  {
    q: "Comment fonctionne le programme de parrainage ?",
    a: "Partage ton code unique. Ton filleul s'inscrit, fait sa première transaction, et tu touches 1 % de tous ses envois — à vie. Sans plafond.",
  },
  {
    q: "Les paiements sont-ils sécurisés ?",
    a: "Oui. Tous les paiements passent par FedaPay, établissement de monnaie électronique agréé BCEAO. Nous ne stockons aucune donnée bancaire.",
  },
  {
    q: "Puis-je organiser une cagnotte collective ?",
    a: "Oui — fonctionnalité Événements. Crée une cagnotte, invite par email, chacun contribue. La cagnotte est ensuite envoyée comme une seule carte au bénéficiaire.",
  },
  {
    q: "Donia est-il disponible dans mon pays ?",
    a: "8 pays au lancement : Bénin, Côte d'Ivoire, Sénégal, Togo, Mali, Burkina, Cameroun, France (pour la diaspora). Plus de pays arrivent chaque trimestre.",
  },
  {
    q: "Comment fonctionnent les messages anonymes ?",
    a: "Tu crées un lien depuis l'app, tu le partages sur tes stories. Les visiteurs écrivent un message sur doniia.com/a/[ton-code]. Le message arrive dans ton app, sans aucune info sur l'expéditeur.",
  },
  {
    q: "Mon identité reste-t-elle cachée quand j'envoie un message anonyme ?",
    a: "Oui côté destinataire — il ne voit que le message, jamais ton email/téléphone/IP. Côté Donia, on conserve l'IP/user-agent 90 jours pour la modération, puis suppression automatique.",
  },
  {
    q: "Que se passe-t-il si je reçois un message haineux ?",
    a: "Tu peux signaler en 1 tap. Le message est masqué immédiatement et envoyé à notre équipe modération. Aussi, on filtre automatiquement les messages avec un classifieur IA avant livraison.",
  },
];

export function SectionFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 sm:py-32 bg-[var(--color-cream)]">
      <div className="container-donia max-w-3xl">
        <div className="text-center mb-14">
          <p className="font-display italic text-[var(--color-coral)] text-base sm:text-lg mb-2">FAQ</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight">
            Tu as <em className="text-[var(--color-coral)]">une question</em> ?
          </h2>
          <p className="mt-5 text-base text-[var(--color-ink-2)] max-w-xl mx-auto leading-relaxed">
            Les réponses aux questions qu&rsquo;on nous pose le plus souvent. Tu ne trouves pas la
            tienne ? Écris-nous.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                  isOpen ? "border-[var(--color-coral)]/40 shadow-[0_4px_20px_-8px_rgba(244,72,111,0.15)]" : "border-[var(--color-line)]"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
                >
                  <span className="font-display font-semibold text-base text-[var(--color-ink)]">
                    {f.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 transition-transform text-[var(--color-ink-2)] ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="px-5 pb-4 text-sm text-[var(--color-coral)] leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─────────────── CONTACT ───────────────

export function SectionContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Une question générale");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? "Envoi impossible");
      }
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Envoi impossible");
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 text-white relative overflow-hidden"
      style={{ background: "var(--gradient-indigo)" }}
    >
      <div className="container-donia">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start max-w-5xl mx-auto">
          {/* Left: title + 3 info cards */}
          <div>
            <p className="font-display italic text-[var(--color-mango)] text-base sm:text-lg mb-2">
              Contact
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight mb-3">
              Une question, <em className="text-[var(--color-mango)]">une idée</em> ?
            </h2>
            <p className="text-white/75 mb-8">L&rsquo;équipe Donia te répond en moins de 24 h.</p>

            <div className="space-y-3 max-w-sm">
              {[
                { Icon: Mail, label: "EMAIL", value: "contact@doniia.com" },
                { Icon: MessageCircle, label: "WHATSAPP BUSINESS", value: "+229 01 51 38 42 98" },
                { Icon: MapPin, label: "SIÈGE", value: "Cotonou, Bénin" },
              ].map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/8 border border-white/12 backdrop-blur"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/12 flex items-center justify-center text-[var(--color-mango)]">
                    <c.Icon size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[var(--color-mango)] font-bold">
                      {c.label}
                    </div>
                    <div className="font-display font-semibold text-base mt-0.5">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={onSubmit}
            className="bg-white/8 backdrop-blur border border-white/15 rounded-3xl p-6 sm:p-8 space-y-4"
          >
            {sent ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✨</div>
                <h3 className="font-display text-2xl mb-2">Message envoyé !</h3>
                <p className="text-white/75 text-sm">On revient vers toi en moins de 24 h.</p>
              </div>
            ) : (
              <>
                <Field label="Ton nom">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Awa Diallo"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15 text-white placeholder:text-white/40 focus:border-[var(--color-mango)] focus:bg-white/12 outline-none transition"
                  />
                </Field>
                <Field label="Ton email">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="awa@email.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15 text-white placeholder:text-white/40 focus:border-[var(--color-mango)] focus:bg-white/12 outline-none transition"
                  />
                </Field>
                <Field label="Sujet">
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15 text-white focus:border-[var(--color-mango)] focus:bg-white/12 outline-none transition"
                  >
                    <option>Une question générale</option>
                    <option>Problème de paiement</option>
                    <option>Signalement</option>
                    <option>Partenariat</option>
                    <option>Presse</option>
                  </select>
                </Field>
                <Field label="Ton message">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="Dis-nous tout…"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15 text-white placeholder:text-white/40 focus:border-[var(--color-mango)] focus:bg-white/12 outline-none transition resize-none"
                  />
                </Field>
                {error && (
                  <p className="text-sm text-[#FFB4C2] bg-[#41087B]/40 border border-[#FFB4C2]/30 rounded-xl px-4 py-3">
                    {error} — réessaie ou écris-nous directement à contact@doniia.com
                  </p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3.5 rounded-xl font-semibold text-white transition-transform hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={{ background: "var(--gradient-coral)" }}
                >
                  {sending ? "Envoi…" : "Envoyer →"}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-display italic text-white/65 block mb-1.5">{label}</span>
      {children}
    </label>
  );
}
