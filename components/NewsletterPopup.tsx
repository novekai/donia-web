"use client";

// NewsletterPopup : apparait UNE SEULE FOIS par visiteur (memoire localStorage),
// quelques secondes apres son arrivee sur le site. Exclu sur les pages anonymes.
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Sparkles, Send } from "lucide-react";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE ?? "https://donia-backend-production.up.railway.app";

const STORAGE_KEY = "donia_newsletter_v1";
const DELAY_MS = 5000; // 5 secondes d'attente avant affichage

type Status = "idle" | "submitting" | "success" | "error";

export function NewsletterPopup() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Ne pas afficher sur les pages anonymes
  const blocked = pathname?.startsWith("/a/");

  useEffect(() => {
    if (blocked) return;
    if (typeof window === "undefined") return;

    // Si déjà vu/fermé/inscrit, ne pas reafficher
    if (localStorage.getItem(STORAGE_KEY)) return;

    const t = setTimeout(() => setVisible(true), DELAY_MS);
    return () => clearTimeout(t);
  }, [blocked]);

  function dismiss() {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ dismissedAt: new Date().toISOString() }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg(null);
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) {
      setErrorMsg("Vérifie le format de ton email");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch(`${API_BASE}/v1/public/newsletter/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          source: "popup",
          utmSource: searchParams.get("utm_source") || undefined,
          utmMedium: searchParams.get("utm_medium") || undefined,
          utmCampaign: searchParams.get("utm_campaign") || undefined,
          referrer: typeof document !== "undefined" ? document.referrer || undefined : undefined,
        }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: { message?: string } } | null;
        throw new Error(data?.error?.message ?? "Erreur, réessaie plus tard");
      }
      setStatus("success");
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ subscribedAt: new Date().toISOString(), email: email.trim() }),
      );
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erreur réseau");
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm"
          onClick={dismiss}
        >
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-white rounded-3xl p-7 sm:p-9 shadow-[0_30px_80px_-24px_rgba(42,15,26,0.6)]"
          >
            <button
              type="button"
              aria-label="Fermer"
              onClick={dismiss}
              className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-[var(--color-ink-3)] hover:bg-[var(--color-line)]/40 hover:text-[var(--color-ink)] transition"
            >
              <X size={18} />
            </button>

            {status !== "success" ? (
              <>
                <div className="flex justify-center mb-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: "var(--gradient-coral)" }}
                  >
                    <Mail size={22} className="text-white" />
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display tracking-tight text-center text-[var(--color-ink)]">
                  Suis les actualités de <span className="italic">Donia</span>
                </h3>
                <p className="mt-3 text-center text-sm text-[var(--color-ink-2)] leading-relaxed">
                  Sois averti·e du lancement officiel sur Play Store et App Store, des nouveautés,
                  et des gestes spéciaux que Donia prépare pour ses premiers utilisateurs.
                </p>

                <form onSubmit={onSubmit} className="mt-6 space-y-3">
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
                      autoFocus
                      className="w-full pl-10 pr-4 py-3 rounded-2xl border-2 border-[var(--color-line)] focus:border-[var(--color-coral)] focus:ring-4 focus:ring-[var(--color-coral)]/15 outline-none transition"
                    />
                  </div>

                  {errorMsg && (
                    <p className="text-xs text-red-600 text-center">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn btn-primary w-full !py-3.5 disabled:opacity-50"
                  >
                    {status === "submitting" ? (
                      "Inscription…"
                    ) : (
                      <>
                        <Send size={16} /> Me tenir informé·e
                      </>
                    )}
                  </button>
                </form>

                <p className="mt-4 text-xs text-center text-[var(--color-ink-3)] leading-relaxed">
                  Pas de spam. Tu peux te désabonner en un clic à tout moment.
                </p>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="text-5xl mb-3">💌</div>
                <h3 className="text-2xl font-display tracking-tight mb-2">
                  Merci ! <Sparkles className="inline w-6 h-6 text-[var(--color-mango)]" />
                </h3>
                <p className="text-sm text-[var(--color-ink-2)] mb-6">
                  On garde ton email précieusement. Tu recevras notre prochaine actu Donia bientôt.
                </p>
                <button
                  type="button"
                  onClick={dismiss}
                  className="btn btn-primary !py-3 !px-8"
                >
                  Continuer ma visite
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
