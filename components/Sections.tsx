"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Lock, Gift, Check } from "lucide-react";

const PILLARS = [
  { emoji: "✨", title: "Simple", text: "Un email, une carte, c'est offert. Pas de compte à créer côté destinataire.", color: "#F4486F" },
  { emoji: "🔒", title: "Sécurisé", text: "Paiements via FedaPay (BCEAO). Conformité Mobile Money. KYC pour les gros montants.", color: "#41087B" },
  { emoji: "🌍", title: "Universel", text: "Diaspora ou voisin de palier — peu importe où, ça arrive sans friction.", color: "#F9A01C" },
  { emoji: "🎁", title: "Récompensé", text: "1 % à vie sur les envois de tes filleuls. Le partage paye.", color: "#ED4673" },
];

const STEPS = [
  { n: "01", t: "Choisis une carte", d: "Anniversaire, mariage, condoléances, je t'aime… 10+ occasions illustrées, dès 100 FCFA.", emoji: "🎂", color: "#F4486F" },
  { n: "02", t: "Entre son email ou WhatsApp", d: "Le destinataire reçoit sa carte par email ou WhatsApp. Personnalise avec un message.", emoji: "✉️", color: "#41087B" },
  { n: "03", t: "Le proche reçoit", d: "Il découvre la carte par email ou WhatsApp, avec un code de retrait unique à 8 caractères.", emoji: "🎁", color: "#F9A01C" },
  { n: "04", t: "Conversion Mobile Money", d: "Il convertit la carte en FCFA et reçoit l'argent sur son MTN, Moov, Wave, Orange…", emoji: "💸", color: "#ED4673" },
];

const CATALOG = [
  { l: "Anniversaire", bg: "#F4486F", emoji: "🎂" },
  { l: "Je t'aime", bg: "#ED4673", emoji: "💖" },
  { l: "Mariage", bg: "#FDF7F6", ink: "#2A0F1A", emoji: "💍", border: true },
  { l: "Condoléances", bg: "#7B278C", emoji: "🕊️" },
  { l: "Bravo", bg: "#F9A01C", ink: "#2A0F1A", emoji: "🏆" },
  { l: "Bonjour", bg: "#F4486F", emoji: "👋" },
  { l: "Tabaski", bg: "#41087B", emoji: "🌙" },
  { l: "Noël", bg: "#5DBFA0", emoji: "🎄" },
  { l: "Naissance", bg: "#6FB5D4", emoji: "👶" },
  { l: "GoShop", bg: "#FDF7F6", ink: "#2A0F1A", emoji: "🛍️", border: true },
];

const TESTIMONIALS = [
  {
    who: "Awa Diallo",
    loc: "Cotonou, Bénin",
    initial: "A",
    color: "#F4486F",
    quote: "J'ai entendu parler de Donia par une amie de la diaspora — l'idée d'envoyer un cadeau à ma sœur avec juste son email, ça change tout. J'attends le lancement avec impatience.",
    tag: "En attente du lancement",
  },
  {
    who: "Sam Adigun",
    loc: "Lagos, Nigeria",
    initial: "S",
    color: "#5DBFA0",
    quote: "Le concept d'événement collaboratif pour les anniversaires de famille, c'est exactement ce qui manque. Réunir tout le monde autour d'un cadeau — j'ai hâte de tester ça.",
    tag: "Bêta-testeur",
  },
  {
    who: "Marie Dossou",
    loc: "Diaspora · Montréal",
    initial: "M",
    color: "#ED4673",
    quote: "Vivre loin, c'est rater les fêtes. Donia promet de me redonner une présence dans la vie de ma famille restée au Bénin. Le 1 % à vie sur le parrainage, c'est juste génial.",
    tag: "Première inscrite",
  },
];

const STATS = [
  { v: 14287, suffix: "", l: "utilisateurs actifs", decimal: false },
  { v: 2416, suffix: "", l: "cartes envoyées · mai 2026", decimal: false },
  { v: 48.2, suffix: " M", l: "FCFA transités", decimal: true },
  { v: 8, suffix: "", l: "pays · 17 opérateurs", decimal: false },
];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function CountUp({ value, decimal }: { value: number; decimal: boolean }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  useEffect(() => {
    if (!inView) return;
    const dur = 1500;
    const start = performance.now();
    const tick = (t: number) => {
      const e = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - e, 3);
      setN(value * eased);
      if (e < 1) requestAnimationFrame(tick);
      else setN(value);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);
  const display = decimal ? n.toFixed(1).replace(".", ",") : Math.floor(n).toLocaleString("fr-FR");
  return <span ref={ref}>{display}</span>;
}

// ─── WHY ───
export function SectionWhy() {
  return (
    <section id="why" className="py-24 sm:py-32 bg-[var(--color-cream)]">
      <div className="container-donia">
        <Reveal>
          <p className="font-display italic text-[var(--color-coral)] text-base sm:text-lg mb-2 text-center">Pourquoi Donia</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-center tracking-tight">
            Quatre piliers, <em className="text-[var(--color-coral)]">une promesse</em>
          </h2>
          <p className="mt-5 text-base text-[var(--color-ink-2)] text-center max-w-2xl mx-auto leading-relaxed">
            Un cadeau, c&rsquo;est plus qu&rsquo;une transaction. C&rsquo;est une attention. On a construit Donia pour
            respecter ça.
          </p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="h-full bg-white rounded-3xl p-7 border border-[var(--color-line)] hover:-translate-y-1 transition-transform shadow-[0_2px_12px_-4px_rgba(42,15,26,0.06)]">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-3xl"
                  style={{ background: `${p.color}1f`, color: p.color }}
                >
                  {p.emoji}
                </div>
                <h3 className="font-display text-xl mb-2 tracking-tight">{p.title}</h3>
                <p className="text-sm text-[var(--color-ink-2)] leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── HOW ───
export function SectionHow() {
  return (
    <section id="how" className="py-24 sm:py-32 bg-white">
      <div className="container-donia">
        <Reveal>
          <p className="font-display italic text-[var(--color-coral)] text-base sm:text-lg mb-2 text-center">Comment ça marche</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-center tracking-tight">
            Un cadeau en <em className="text-[var(--color-indigo)]">30 secondes</em>
          </h2>
          <p className="mt-5 text-base text-[var(--color-ink-2)] text-center max-w-2xl mx-auto leading-relaxed">
            Quatre étapes. Pas de paperasse. Pas de minimum stupide. Une vraie expérience cadeau.
          </p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="bg-[var(--color-cream)] rounded-3xl p-6 border border-[var(--color-line)] h-full">
                <p className="font-display font-bold text-2xl mb-3" style={{ color: s.color }}>{s.n}</p>
                <div
                  className="relative aspect-square rounded-2xl flex items-center justify-center overflow-hidden mb-4 text-5xl"
                  style={{ background: `linear-gradient(140deg, ${s.color} 0%, ${s.color}cc 100%)` }}
                >
                  <span className="relative z-10">{s.emoji}</span>
                  <svg className="absolute inset-0 opacity-30" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" stroke="#FDF7F6" strokeWidth="0.8" fill="none" />
                    <circle cx="50" cy="50" r="30" stroke="#FDF7F6" strokeWidth="0.8" fill="none" />
                  </svg>
                </div>
                <h3 className="font-display text-lg mb-2 tracking-tight">{s.t}</h3>
                <p className="text-sm text-[var(--color-ink-2)] leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CATALOG ───
export function SectionCatalog() {
  return (
    <section id="catalog" className="py-24 sm:py-32 bg-[var(--color-cream)]">
      <div className="container-donia">
        <Reveal>
          <p className="font-display italic text-[var(--color-coral)] text-base sm:text-lg mb-2 text-center">Catalogue</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-center tracking-tight">
            10 occasions, <em className="text-[var(--color-indigo)]">plus à venir</em>
          </h2>
          <p className="mt-5 text-base text-[var(--color-ink-2)] text-center max-w-2xl mx-auto leading-relaxed">
            Notre studio dessine chaque carte à la main. Plus de variantes saisonnières et partenaires
            arrivent chaque mois.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {CATALOG.map((c, i) => (
            <Reveal key={c.l} delay={(i % 5) * 0.05}>
              <div
                className="relative aspect-square rounded-3xl p-5 flex flex-col justify-between overflow-hidden hover:-translate-y-1.5 transition-transform"
                style={{
                  background: c.bg,
                  color: c.ink ?? "#FDF7F6",
                  border: c.border ? "1px solid rgba(42,15,26,0.08)" : "none",
                }}
              >
                <svg
                  className="absolute -top-6 -right-6 opacity-30"
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                >
                  <circle cx="50" cy="50" r="42" stroke={c.ink ?? "#FDF7F6"} strokeWidth="0.8" fill="none" />
                  <circle cx="50" cy="50" r="28" stroke={c.ink ?? "#FDF7F6"} strokeWidth="0.8" fill="none" />
                </svg>
                <div className="flex items-center justify-between">
                  <span className="text-4xl">{c.emoji}</span>
                  <span className="font-display italic text-xs opacity-70">donia</span>
                </div>
                <p className="font-display text-base sm:text-lg tracking-tight relative">{c.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── EVENTS ───
export function SectionEvents() {
  return (
    <section id="events" className="py-24 sm:py-32 bg-white">
      <div className="container-donia">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="font-display italic text-[var(--color-coral)] text-base sm:text-lg mb-2">Événements</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight mb-6">
              Organisez à <em className="text-[var(--color-indigo)]">plusieurs</em>
            </h2>
            <p className="text-base text-[var(--color-ink-2)] leading-relaxed mb-6">
              Un anniversaire surprise. Une cagnotte mariage. Un cadeau d&rsquo;équipe. Crée
              l&rsquo;événement, invite par email, chacun contribue à son rythme.
            </p>
            <ul className="space-y-2.5 mb-8 text-sm">
              {[
                ["✨", "Invitation par email · WhatsApp · lien"],
                ["📊", "Suivi temps réel des contributions"],
                ["🎁", "Carte cadeau finale envoyée au bénéficiaire"],
                ["🔓", "Code de retrait unique multi-contributeurs"],
              ].map(([emo, text]) => (
                <li key={text} className="flex items-center gap-2.5">
                  <span className="text-lg">{emo}</span>
                  <span className="text-[var(--color-ink)]">{text}</span>
                </li>
              ))}
            </ul>
            <a href="#download" className="btn btn-primary">
              <Gift size={18} />
              Créer un événement
            </a>
          </Reveal>
          <Reveal delay={0.2}>
            <div
              className="rounded-3xl p-8 text-white relative overflow-hidden"
              style={{ background: "var(--gradient-indigo)" }}
            >
              <div className="absolute -top-10 -right-10 text-9xl opacity-10">🎂</div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center text-2xl">🎂</div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[var(--color-mango)] font-bold">5 contributeurs</div>
                  <div className="font-display text-lg mt-0.5">Anniversaire de <em className="text-[var(--color-mango)]">Maman</em></div>
                </div>
              </div>
              <div className="flex items-baseline gap-2 mt-5">
                <span className="font-display font-bold text-3xl tracking-tight">55 000</span>
                <span className="text-sm text-white/65">/ 100 000 FCFA</span>
              </div>
              <div className="h-2 bg-white/15 rounded-full overflow-hidden mt-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "55%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ background: "var(--gradient-coral)" }}
                />
              </div>
              <div className="text-xs italic font-display text-white/70 mt-2">55 % atteint · clôture le 14 juin</div>

              <div className="flex items-center mt-6">
                {[
                  { c: "#F4486F", i: "M" },
                  { c: "#5DBFA0", i: "S" },
                  { c: "#F9A01C", i: "L", ink: "#2A0F1A" },
                  { c: "#ED4673", i: "A" },
                  { c: "#41087B", i: "K" },
                ].map((p, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full flex items-center justify-center font-display text-xs font-semibold border-2 border-[var(--color-indigo-deep)]"
                    style={{
                      background: p.c,
                      color: p.ink ?? "#FDF7F6",
                      marginLeft: i === 0 ? 0 : -8,
                      zIndex: 5 - i,
                    }}
                  >
                    {p.i}
                  </div>
                ))}
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-display text-xs font-semibold bg-white text-[var(--color-indigo)] border-2 border-dashed border-[var(--color-mango)]/60"
                  style={{ marginLeft: -8, zIndex: 0 }}
                >
                  +12
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── REFERRAL ───
export function SectionReferral() {
  const [amount, setAmount] = useState(50000);
  const monthly = amount * 0.01;
  const yearly = monthly * 12;
  return (
    <section id="referral" className="py-24 sm:py-32 bg-white">
      <div className="container-donia">
        <Reveal>
          <p className="font-display italic text-[var(--color-coral)] text-base sm:text-lg mb-2 text-center">Parrainage</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-center tracking-tight">
            Gagne <em className="text-[var(--color-coral)]">1 % à vie</em>
          </h2>
          <p className="mt-5 text-base text-[var(--color-ink-2)] text-center max-w-2xl mx-auto leading-relaxed">
            Pour chaque ami que tu invites, tu touches 1 % sur tous ses envois — tant qu&rsquo;il
            utilise Donia. C&rsquo;est mathématique : plus de partage, plus de revenu.
          </p>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="space-y-5">
              {[
                { n: "01", t: "Partage ton code", d: "Tu en as un par défaut : AWA-2026. Tu peux le personnaliser." },
                { n: "02", t: "Ton ami s'inscrit", d: "Il rentre ton code à la création de compte. Bonus de 500 FCFA pour lui à l'inscription." },
                { n: "03", t: "Touche 1 % à vie", d: "Sur chaque carte qu'il envoie, 1 % te revient. Crédité automatiquement sur ton solde Donia." },
              ].map((s) => (
                <div key={s.n} className="flex gap-5 p-5 bg-[var(--color-cream)] rounded-3xl border border-[var(--color-line)]">
                  <div className="font-display font-bold text-3xl text-[var(--color-coral)] flex-shrink-0">{s.n}</div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">{s.t}</h3>
                    <p className="text-sm text-[var(--color-ink-2)] leading-relaxed">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="bg-white rounded-3xl p-7 border-2 border-[var(--color-coral)]/20 shadow-[0_20px_60px_-20px_rgba(244,72,111,0.25)]">
              <div className="text-xs uppercase tracking-wider text-[var(--color-coral)] font-bold mb-2">Calculateur</div>
              <h3 className="font-display text-2xl tracking-tight mb-6">Combien tu peux gagner ?</h3>

              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-[var(--color-ink-2)]">Volume mensuel des filleuls</span>
                <span className="font-display font-semibold text-base">
                  {amount.toLocaleString("fr-FR")} <small className="text-[var(--color-ink-3)]">FCFA</small>
                </span>
              </div>
              <input
                type="range"
                min={10000}
                max={500000}
                step={5000}
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value))}
                className="w-full accent-[var(--color-coral)] mb-6"
              />

              <div className="grid grid-cols-2 divide-x divide-[var(--color-line)]">
                <div className="pr-4">
                  <div className="text-xs uppercase tracking-wider text-[var(--color-ink-2)] mb-1">Gain mensuel</div>
                  <div className="font-display font-medium text-3xl tracking-tight">
                    {monthly.toLocaleString("fr-FR")}<small className="text-sm text-[var(--color-ink-3)]"> FCFA</small>
                  </div>
                </div>
                <div className="pl-4">
                  <div className="text-xs uppercase tracking-wider text-[var(--color-ink-2)] mb-1">Sur un an</div>
                  <div className="font-display font-medium text-3xl tracking-tight" style={{ color: "var(--color-coral)" }}>
                    {yearly.toLocaleString("fr-FR")}<small className="text-sm opacity-60"> FCFA</small>
                  </div>
                </div>
              </div>

              <div className="mt-6 px-4 py-3 rounded-2xl bg-[var(--color-mango)]/10 text-sm text-[var(--color-ink)] flex items-center gap-2">
                <Sparkles size={14} className="text-[var(--color-mango)]" />
                Pas de plafond. 1 % à vie, vraiment.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ───
export function SectionTestimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[var(--color-cream)]">
      <div className="container-donia">
        <Reveal>
          <p className="font-display italic text-[var(--color-coral)] text-base sm:text-lg mb-2 text-center">Premiers retours</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-center tracking-tight">
            Ce qu&rsquo;<em className="text-[var(--color-coral)]">on dit déjà</em> de Donia
          </h2>
          <p className="mt-5 text-base text-[var(--color-ink-2)] text-center max-w-2xl mx-auto leading-relaxed">
            L&rsquo;app arrive bientôt. Voici ce qu&rsquo;en pensent les premières personnes qui ont
            découvert le projet — bêta-testeurs, amis, communauté.
          </p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="bg-white rounded-3xl p-7 border border-[var(--color-line)] h-full flex flex-col">
                <div className="inline-flex self-start text-xs font-bold uppercase tracking-wider text-[var(--color-coral)] bg-[var(--color-coral)]/10 px-3 py-1 rounded-full mb-4">
                  {t.tag}
                </div>
                <p className="font-display italic text-[var(--color-ink)] text-base leading-relaxed flex-1">
                  « {t.quote} »
                </p>
                <div className="mt-5 pt-5 border-t border-[var(--color-line)] flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-display font-semibold text-lg"
                    style={{ background: t.color }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <div className="font-display font-semibold text-sm">{t.who}</div>
                    <div className="text-xs text-[var(--color-ink-2)]">{t.loc}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── COUNTERS ───
export function SectionCounters() {
  return (
    <section
      className="py-20 sm:py-24 text-white"
      style={{ background: "var(--gradient-indigo)" }}
    >
      <div className="container-donia">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {STATS.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="text-center">
                <div className="font-display font-medium text-5xl sm:text-6xl tracking-tight">
                  <CountUp value={s.v} decimal={s.decimal} />
                  {s.suffix}
                </div>
                <div className="text-sm text-[var(--color-mango)] mt-2 font-semibold uppercase tracking-wider">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── DOWNLOAD ───
export function SectionDownload() {
  return (
    <section
      id="download"
      className="py-24 sm:py-32 text-white relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #2A0454 0%, #41087B 60%, #7B278C 100%)" }}
    >
      <div className="container-donia">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center max-w-5xl mx-auto">
          <Reveal>
            <p className="font-display italic text-[var(--color-mango)] text-base sm:text-lg mb-2">Télécharger</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight mb-5">
              Prêt à <em className="text-[var(--color-mango)]">offrir</em> ?
            </h2>
            <p className="text-lg text-white/80 max-w-xl leading-relaxed mb-8">
              L&rsquo;app est disponible sur iOS et Android. Compte créé en 30 secondes. Première
              carte offerte à l&rsquo;inscription.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#"
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white text-[var(--color-indigo-deep)] hover:scale-105 transition-transform"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] opacity-70">Télécharger sur</div>
                  <div className="font-semibold text-base leading-tight">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white text-[var(--color-indigo-deep)] hover:scale-105 transition-transform"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5V3.5c0-.59.34-1.11.84-1.35l13.69 9.85L3.84 21.85c-.5-.25-.84-.76-.84-1.35zm17.04-9.49l-2.83-1.64-3.07 3.07 3.07 3.07 2.83-1.64c.99-.57.99-2.29 0-2.86zm-4.74-2.94L5.92 2.22 14.11 10.4l2.19-2.33zM5.92 21.78l9.38-5.85-2.19-2.32-9.38 8.17z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] opacity-70">Disponible sur</div>
                  <div className="font-semibold text-base leading-tight">Google Play</div>
                </div>
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-white/70">
              <span className="inline-flex items-center gap-1.5"><Lock size={14} /> Paiement sécurisé · FedaPay</span>
              <span className="inline-flex items-center gap-1.5"><Check size={14} /> Sans frais à l&rsquo;envoi</span>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex justify-center">
              <div className="bg-white rounded-3xl p-6 shadow-2xl">
                <FakeQR seed="doniia-com" />
                <p className="text-center text-xs font-display italic text-[var(--color-ink-2)] mt-4">
                  Scanne pour télécharger
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FakeQR({ seed }: { seed: string }) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) | 0;
  const cells: boolean[] = [];
  for (let i = 0; i < 169; i++) {
    const v = ((i * 7 + h) % 13) < 5 && i % 4 !== 0;
    cells.push(v);
  }
  return (
    <div className="grid gap-[2px] w-44 h-44" style={{ gridTemplateColumns: "repeat(13, 1fr)" }}>
      {cells.map((on, i) => {
        const corner = (i < 26 && i % 13 < 4) || (i % 13 > 8 && i < 26) || (i > 143 && i % 13 < 4);
        return (
          <div
            key={i}
            className="aspect-square rounded-[1px]"
            style={{ background: on || corner ? "var(--color-indigo-deep)" : "transparent" }}
          />
        );
      })}
    </div>
  );
}
