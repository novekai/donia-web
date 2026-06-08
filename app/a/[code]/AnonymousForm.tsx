"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Send, Sparkles, Mail, Smartphone, Lock, AlertCircle, Heart } from "lucide-react";

type Props = {
  code: string;
  firstName: string;
  avatarUrl: string | null;
  prompt: string;
  apiBase: string;
};

const MAX_MESSAGE = 500;

type ContactMode = "email" | "whatsapp";

function normalizeWhatsApp(raw: string): string | null {
  // Accepte +229..., 229..., 0022997..., 90... (suppose BJ par defaut si pas dindicatif).
  // Renvoie E.164 ou null si invalide.
  const cleaned = raw.replace(/[^\d+]/g, "");
  if (!cleaned) return null;
  let e164 = cleaned;
  if (e164.startsWith("00")) e164 = `+${e164.slice(2)}`;
  if (!e164.startsWith("+")) {
    // Si pas dindicatif, on assume Benin
    if (e164.length === 8 || e164.length === 10) e164 = `+229${e164}`;
    else e164 = `+${e164}`;
  }
  // Strip le 01 BJ pour aligner avec le backend WAHA
  if (e164.startsWith("+229")) {
    const local = e164.slice(4).replace(/\D/g, "");
    if (local.startsWith("01") && local.length === 10) {
      e164 = `+229${local.slice(2)}`;
    }
  }
  if (!/^\+\d{8,15}$/.test(e164)) return null;
  return e164;
}

export function AnonymousForm({ code, firstName, avatarUrl, prompt, apiBase }: Props) {
  const [content, setContent] = useState("");
  const [contactMode, setContactMode] = useState<ContactMode>("whatsapp");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [marketingOptIn, setMarketingOptIn] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const initial = firstName[0]?.toUpperCase() ?? "?";
  const emailValid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim());
  const phoneE164 = normalizeWhatsApp(phone);
  const contactValid = contactMode === "email" ? emailValid : Boolean(phoneE164);
  const canSubmit =
    content.trim().length > 0 && content.length <= MAX_MESSAGE && contactValid && !submitting;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!canSubmit) return;
    setSubmitting(true);
    try {
      const body: Record<string, unknown> = {
        content: content.trim(),
        marketingOptIn,
      };
      if (contactMode === "email") body.senderEmail = email.trim();
      else if (phoneE164) body.senderPhone = phoneE164;

      const res = await fetch(`${apiBase}/v1/public/anonymes/${code}/message`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: { message?: string } } | null;
        throw new Error(data?.error?.message ?? "Impossible d'envoyer le message");
      }
      setSent(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erreur réseau");
    } finally {
      setSubmitting(false);
    }
  }

  function reset() {
    setContent("");
    setEmail("");
    setPhone("");
    setContactMode("whatsapp");
    setMarketingOptIn(true);
    setSent(false);
    setError(null);
  }

  return (
    <main
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Ambient hearts */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-white/15 select-none"
            style={{
              left: `${(i * 17 + 8) % 95}%`,
              top: `${(i * 23 + 12) % 85}%`,
              fontSize: `${12 + (i % 4) * 4}px`,
              animation: `donia-float ${6 + (i % 5)}s ease-in-out infinite`,
              animationDelay: `${(i * 0.3) % 3}s`,
            }}
          >
            {i % 3 === 0 ? "✦" : i % 3 === 1 ? "❤" : "✿"}
          </span>
        ))}
      </div>

      <div className="container-donia max-w-xl relative z-10">
        <Link
          href="/"
          className="flex items-center gap-2.5 justify-center mb-8 text-white/85 hover:text-white transition"
        >
          <span className="wordmark text-2xl">
            Don<span className="accent">i</span>a
          </span>
        </Link>

        <AnimatePresence mode="wait">
          {!sent ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white rounded-3xl p-7 sm:p-10 shadow-[0_30px_80px_-24px_rgba(42,15,26,0.45)]"
            >
              {/* Avatar */}
              <div className="flex flex-col items-center mb-6">
                <motion.div
                  animate={prefersReducedMotion ? {} : { scale: [1, 1.03, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-20 h-20 rounded-full overflow-hidden shadow-[0_8px_24px_-6px_rgba(244,72,111,0.45)]"
                  style={{ background: "var(--gradient-coral)" }}
                >
                  {avatarUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={avatarUrl} alt={firstName} className="w-full h-full object-cover" />
                  ) : (
                    <span className="absolute inset-0 flex items-center justify-center text-white text-3xl font-display font-medium">
                      {initial}
                    </span>
                  )}
                </motion.div>
                <p className="mt-4 font-display italic text-sm text-[var(--color-ink-3)]">
                  Envoie un message anonyme à
                </p>
                <h1 className="font-display text-3xl sm:text-4xl tracking-tight text-[var(--color-ink)]">
                  {firstName}
                </h1>
                <p className="mt-3 text-center text-[var(--color-ink-2)] italic font-display">
                  « {prompt} »
                </p>
              </div>

              <form onSubmit={onSubmit} className="space-y-5">
                {/* Message textarea */}
                <div>
                  <label className="sr-only">Ton message anonyme</label>
                  <div className="relative">
                    <textarea
                      value={content}
                      onChange={(e) => e.target.value.length <= MAX_MESSAGE && setContent(e.target.value)}
                      placeholder={`Écris quelque chose à ${firstName}…`}
                      rows={5}
                      maxLength={MAX_MESSAGE}
                      required
                      className="w-full px-4 py-3 rounded-2xl border-2 border-[var(--color-line)] focus:border-[var(--color-coral)] focus:ring-4 focus:ring-[var(--color-coral)]/15 outline-none transition resize-none font-display text-base"
                    />
                    <div className="absolute bottom-2.5 right-3 text-xs text-[var(--color-ink-3)] font-mono">
                      {content.length} / {MAX_MESSAGE}
                    </div>
                  </div>
                </div>

                {/* Capture obligatoire : email OU WhatsApp (toggle) */}
                <div>
                  <label className="block text-sm font-medium text-[var(--color-ink-2)] mb-2">
                    Tes coordonnées <span className="text-[var(--color-coral)]">*</span>
                  </label>

                  {/* Toggle WhatsApp / Email */}
                  <div className="flex gap-2 p-1 rounded-2xl bg-[var(--color-line)]/40 mb-3">
                    <button
                      type="button"
                      onClick={() => setContactMode("whatsapp")}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition ${
                        contactMode === "whatsapp"
                          ? "bg-white text-[var(--color-ink)] shadow-sm"
                          : "text-[var(--color-ink-2)] hover:text-[var(--color-ink)]"
                      }`}
                    >
                      <Smartphone size={15} /> WhatsApp
                    </button>
                    <button
                      type="button"
                      onClick={() => setContactMode("email")}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition ${
                        contactMode === "email"
                          ? "bg-white text-[var(--color-ink)] shadow-sm"
                          : "text-[var(--color-ink-2)] hover:text-[var(--color-ink)]"
                      }`}
                    >
                      <Mail size={15} /> Email
                    </button>
                  </div>

                  {/* Champ selon le mode */}
                  {contactMode === "whatsapp" ? (
                    <div className="relative">
                      <Smartphone
                        size={16}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-ink-3)]"
                      />
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+229 90 12 34 56"
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-2xl border-2 border-[var(--color-line)] focus:border-[var(--color-indigo)] focus:ring-4 focus:ring-[var(--color-indigo)]/15 outline-none transition"
                      />
                    </div>
                  ) : (
                    <div className="relative">
                      <Mail
                        size={16}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-ink-3)]"
                      />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ton@email.com"
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-2xl border-2 border-[var(--color-line)] focus:border-[var(--color-indigo)] focus:ring-4 focus:ring-[var(--color-indigo)]/15 outline-none transition"
                      />
                    </div>
                  )}

                  <p className="text-xs text-[var(--color-ink-3)] mt-2 leading-relaxed">
                    Pour recevoir une notification quand l&rsquo;anniversaire de{" "}
                    <strong className="text-[var(--color-ink-2)]">{firstName}</strong> arrive et lui
                    offrir un cadeau. Ton identité reste anonyme côté message.
                  </p>

                  <label className="flex items-start gap-2.5 mt-3 text-xs text-[var(--color-ink-2)] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={marketingOptIn}
                      onChange={(e) => setMarketingOptIn(e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded accent-[var(--color-coral)]"
                    />
                    <span>
                      J&rsquo;accepte que Doniia conserve mes coordonnées pour me notifier des
                      occasions spéciales de {firstName}. Je peux me désabonner à tout moment.{" "}
                      <Link
                        href="/confidentialite"
                        className="underline underline-offset-2 hover:text-[var(--color-coral)]"
                      >
                        En savoir plus
                      </Link>
                      .
                    </span>
                  </label>
                </div>

                {/* Error display */}
                {error && (
                  <div className="flex items-start gap-2 p-3 rounded-xl bg-red-50 border border-red-200">
                    <AlertCircle size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="btn btn-primary w-full !py-4 !text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    "Envoi…"
                  ) : (
                    <>
                      <Send size={18} />
                      Envoyer anonymement
                    </>
                  )}
                </button>

                {/* Privacy notice */}
                <p className="text-xs text-center text-[var(--color-ink-3)] flex items-center justify-center gap-1.5">
                  <Lock size={12} />
                  Ton identité ne sera jamais révélée à {firstName}.
                </p>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="thanks"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-white rounded-3xl p-7 sm:p-10 shadow-[0_30px_80px_-24px_rgba(42,15,26,0.45)] text-center"
            >
              <motion.div
                animate={prefersReducedMotion ? {} : { y: [0, -10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-6xl mb-4"
              >
                💌
              </motion.div>
              <h2 className="font-display text-3xl sm:text-4xl tracking-tight mb-3">
                Message envoyé <Sparkles className="inline w-7 h-7 text-[var(--color-mango)]" />
              </h2>
              <p className="text-[var(--color-ink-2)] text-base leading-relaxed mb-8">
                Ton message anonyme a été livré. <strong>{firstName}</strong> le verra dans son app
                Doniia.
              </p>

              <div
                className="rounded-2xl p-6 text-white relative overflow-hidden mb-6"
                style={{ background: "var(--gradient-indigo)" }}
              >
                <Heart className="absolute -bottom-2 -right-2 w-24 h-24 opacity-10" />
                <p className="font-display italic text-[var(--color-mango)] text-sm uppercase tracking-[0.18em] mb-2">
                  À ton tour
                </p>
                <h3 className="font-display text-xl mb-3 tracking-tight">
                  Reçois des messages anonymes de tes proches
                </h3>
                <p className="text-sm text-white/80 mb-5">
                  Crée ton lien anonyme depuis l&rsquo;application Doniia.
                </p>
                <Link href="/#download" className="btn bg-white text-[var(--color-indigo-deep)] !w-full">
                  Télécharger Doniia
                </Link>
              </div>

              <button
                onClick={reset}
                className="text-sm text-[var(--color-coral)] font-medium hover:underline underline-offset-4"
              >
                Envoyer un autre message anonyme
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="mt-6 text-center text-xs text-white/70">
          En envoyant ce message, tu acceptes la{" "}
          <Link href="/charte-moderation" className="underline underline-offset-2 hover:text-white">
            charte Doniia
          </Link>
          . Tout abus pourra être signalé.
        </p>
      </div>

      <style>{`
        @keyframes donia-float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(8px); }
        }
      `}</style>
    </main>
  );
}
