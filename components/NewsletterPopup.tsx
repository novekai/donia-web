"use client";

// NewsletterPopup : apparait UNE SEULE FOIS par visiteur (memoire localStorage),
// quelques secondes apres son arrivee sur le site. Exclu sur les pages anonymes.
// Capture email OU numero WhatsApp (toggle), avec selecteur indicatif pays.
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Smartphone, Sparkles, Send, ChevronDown } from "lucide-react";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE ?? "https://donia-api-production.up.railway.app";

const STORAGE_KEY = "donia_newsletter_v2";
const DELAY_MS = 5000;

type Status = "idle" | "submitting" | "success" | "error";
type ContactMode = "email" | "whatsapp";

type Country = { code: string; flag: string; name: string; dial: string };

const COUNTRIES: Country[] = [
  { code: "BJ", flag: "🇧🇯", name: "Bénin", dial: "+229" },
  { code: "CI", flag: "🇨🇮", name: "Côte d'Ivoire", dial: "+225" },
  { code: "SN", flag: "🇸🇳", name: "Sénégal", dial: "+221" },
  { code: "TG", flag: "🇹🇬", name: "Togo", dial: "+228" },
  { code: "BF", flag: "🇧🇫", name: "Burkina Faso", dial: "+226" },
  { code: "ML", flag: "🇲🇱", name: "Mali", dial: "+223" },
  { code: "NE", flag: "🇳🇪", name: "Niger", dial: "+227" },
  { code: "CM", flag: "🇨🇲", name: "Cameroun", dial: "+237" },
  { code: "GH", flag: "🇬🇭", name: "Ghana", dial: "+233" },
  { code: "GN", flag: "🇬🇳", name: "Guinée", dial: "+224" },
  { code: "FR", flag: "🇫🇷", name: "France", dial: "+33" },
  { code: "BE", flag: "🇧🇪", name: "Belgique", dial: "+32" },
  { code: "CA", flag: "🇨🇦", name: "Canada", dial: "+1" },
  { code: "US", flag: "🇺🇸", name: "États-Unis", dial: "+1" },
  { code: "GB", flag: "🇬🇧", name: "Royaume-Uni", dial: "+44" },
  { code: "DE", flag: "🇩🇪", name: "Allemagne", dial: "+49" },
  { code: "CH", flag: "🇨🇭", name: "Suisse", dial: "+41" },
  { code: "ES", flag: "🇪🇸", name: "Espagne", dial: "+34" },
  { code: "IT", flag: "🇮🇹", name: "Italie", dial: "+39" },
  { code: "PT", flag: "🇵🇹", name: "Portugal", dial: "+351" },
];

function normalizeLocal(local: string, dial: string): string | null {
  let digits = local.replace(/\D/g, "");
  if (!digits) return null;
  // Pour le Benin : strip le 01 d'office (cohérent avec backend WAHA)
  if (dial === "+229" && digits.startsWith("01") && digits.length === 10) {
    digits = digits.slice(2);
  }
  const e164 = `${dial}${digits}`;
  if (!/^\+\d{8,15}$/.test(e164)) return null;
  return e164;
}

export function NewsletterPopup() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [visible, setVisible] = useState(false);
  const [contactMode, setContactMode] = useState<ContactMode>("whatsapp");
  const [email, setEmail] = useState("");
  const [phoneLocal, setPhoneLocal] = useState("");
  const [country, setCountry] = useState<Country>(COUNTRIES[0]!);
  const [countryOpen, setCountryOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const blocked = pathname?.startsWith("/a/");

  useEffect(() => {
    if (blocked || typeof window === "undefined") return;
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

    const body: Record<string, unknown> = {
      source: "popup",
      utmSource: searchParams.get("utm_source") || undefined,
      utmMedium: searchParams.get("utm_medium") || undefined,
      utmCampaign: searchParams.get("utm_campaign") || undefined,
      referrer: typeof document !== "undefined" ? document.referrer || undefined : undefined,
    };

    if (contactMode === "email") {
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) {
        setErrorMsg("Vérifie le format de ton email");
        return;
      }
      body.email = email.trim();
    } else {
      const e164 = normalizeLocal(phoneLocal, country.dial);
      if (!e164) {
        setErrorMsg("Vérifie ton numéro WhatsApp");
        return;
      }
      body.phone = e164;
    }

    setStatus("submitting");
    try {
      const res = await fetch(`${API_BASE}/v1/public/newsletter/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: { message?: string } } | null;
        throw new Error(data?.error?.message ?? "Erreur, réessaie plus tard");
      }
      setStatus("success");
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ subscribedAt: new Date().toISOString() }));
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

                {/* Toggle WhatsApp / Email */}
                <div className="flex gap-2 p-1 rounded-2xl bg-[var(--color-line)]/40 mt-5 mb-3">
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

                <form onSubmit={onSubmit} className="space-y-3">
                  {contactMode === "whatsapp" ? (
                    <div className="flex gap-2 relative">
                      {/* Selecteur d'indicatif */}
                      <button
                        type="button"
                        onClick={() => setCountryOpen((o) => !o)}
                        className="flex items-center gap-2 px-3 py-3 rounded-2xl border-2 border-[var(--color-line)] hover:border-[var(--color-indigo)] transition bg-white"
                      >
                        <span className="text-lg">{country.flag}</span>
                        <span className="font-bold text-sm text-[var(--color-ink)]">{country.dial}</span>
                        <ChevronDown size={14} className="text-[var(--color-ink-3)]" />
                      </button>
                      <input
                        type="tel"
                        value={phoneLocal}
                        onChange={(e) => setPhoneLocal(e.target.value)}
                        placeholder="90 12 34 56"
                        required
                        autoFocus
                        className="flex-1 px-4 py-3 rounded-2xl border-2 border-[var(--color-line)] focus:border-[var(--color-coral)] focus:ring-4 focus:ring-[var(--color-coral)]/15 outline-none transition"
                      />

                      {/* Dropdown indicatifs */}
                      {countryOpen && (
                        <div
                          className="absolute left-0 top-[58px] z-50 w-72 max-h-72 overflow-auto bg-white rounded-2xl border-2 border-[var(--color-line)] shadow-xl"
                          role="listbox"
                        >
                          {COUNTRIES.map((c) => (
                            <button
                              key={c.code}
                              type="button"
                              onClick={() => {
                                setCountry(c);
                                setCountryOpen(false);
                              }}
                              className={`w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-[var(--color-line)]/30 transition ${
                                c.code === country.code ? "bg-[var(--color-coral)]/10" : ""
                              }`}
                            >
                              <span className="text-xl">{c.flag}</span>
                              <span className="flex-1 text-sm text-[var(--color-ink)]">{c.name}</span>
                              <span className="text-xs font-bold text-[var(--color-ink-2)]">{c.dial}</span>
                            </button>
                          ))}
                        </div>
                      )}
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
                        autoFocus
                        className="w-full pl-10 pr-4 py-3 rounded-2xl border-2 border-[var(--color-line)] focus:border-[var(--color-coral)] focus:ring-4 focus:ring-[var(--color-coral)]/15 outline-none transition"
                      />
                    </div>
                  )}

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
                  On garde tes coordonnées précieusement. Tu recevras notre prochaine actu Donia bientôt.
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
