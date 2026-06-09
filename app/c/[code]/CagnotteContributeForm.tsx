"use client";

import { useState } from "react";
import { Smartphone, CreditCard, Send, AlertCircle, ChevronDown } from "lucide-react";

type Props = {
  code: string;
  apiBase: string;
  ownerFirstName: string;
};

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
];

const OPERATORS_BY_COUNTRY: Record<string, { id: string; name: string }[]> = {
  BJ: [
    { id: "mtn", name: "MTN" },
    { id: "moov", name: "Moov" },
    { id: "card", name: "Carte bancaire" },
  ],
  CI: [
    { id: "mtn", name: "MTN" },
    { id: "orange", name: "Orange" },
    { id: "moov", name: "Moov" },
    { id: "card", name: "Carte bancaire" },
  ],
  SN: [
    { id: "orange", name: "Orange" },
    { id: "wave", name: "Wave" },
    { id: "card", name: "Carte bancaire" },
  ],
  TG: [
    { id: "tmoney", name: "T-Money" },
    { id: "flooz", name: "Flooz" },
    { id: "card", name: "Carte bancaire" },
  ],
  BF: [
    { id: "orange", name: "Orange" },
    { id: "moov", name: "Moov" },
    { id: "card", name: "Carte bancaire" },
  ],
  ML: [
    { id: "orange", name: "Orange" },
    { id: "moov", name: "Moov" },
    { id: "card", name: "Carte bancaire" },
  ],
  NE: [
    { id: "airtel", name: "Airtel" },
    { id: "orange", name: "Orange" },
    { id: "card", name: "Carte bancaire" },
  ],
  CM: [
    { id: "mtn", name: "MTN" },
    { id: "orange", name: "Orange" },
    { id: "card", name: "Carte bancaire" },
  ],
};

const PRESETS = ["1 000", "5 000", "10 000", "25 000"];

function normalizeWhatsApp(local: string, dial: string): string | null {
  let digits = local.replace(/\D/g, "");
  if (!digits) return null;
  if (dial === "+229" && digits.startsWith("01") && digits.length === 10) {
    digits = digits.slice(2);
  }
  const e164 = `${dial}${digits}`;
  if (!/^\+\d{8,15}$/.test(e164)) return null;
  return e164;
}

export function CagnotteContributeForm({ code, apiBase, ownerFirstName }: Props) {
  const [name, setName] = useState("");
  const [country, setCountry] = useState<Country>(COUNTRIES[0]!);
  const [countryOpen, setCountryOpen] = useState(false);
  const [phoneLocal, setPhoneLocal] = useState("");
  const [amount, setAmount] = useState("5000");
  const [operator, setOperator] = useState<string>("mtn");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const operators = OPERATORS_BY_COUNTRY[country.code] ?? [];
  const amountNum = Number(amount.replace(/\D/g, "")) || 0;
  const phoneE164 = normalizeWhatsApp(phoneLocal, country.dial);
  const canSubmit =
    name.trim().length >= 2 &&
    phoneE164 !== null &&
    amountNum >= 100 &&
    amountNum <= 1_000_000 &&
    operator.length > 0 &&
    !submitting;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!canSubmit) {
      setError("Vérifie tes informations (nom, numéro WhatsApp, montant ≥ 100 FCFA).");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(`${apiBase}/v1/public/cagnottes/${encodeURIComponent(code)}/contribute`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phoneE164,
          amount: amountNum,
          operator,
          country: country.code,
          message: message.trim() || undefined,
        }),
      });
      const data = (await res.json().catch(() => null)) as { paymentUrl?: string; error?: { message?: string } } | null;
      if (!res.ok || !data?.paymentUrl) {
        throw new Error(data?.error?.message ?? "Impossible de démarrer le paiement");
      }
      window.location.href = data.paymentUrl;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erreur réseau");
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-white rounded-3xl p-7 sm:p-9 shadow-xl">
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center text-white"
          style={{ background: "var(--gradient-coral)" }}
        >
          <CreditCard size={20} />
        </div>
        <div>
          <h2 className="font-display text-xl">Contribuer à la cagnotte</h2>
          <p className="text-xs text-[var(--color-ink-3)]">
            Tu paies directement en Mobile Money. Pas besoin de compte Donia.
          </p>
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        {/* Nom */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-ink-2)] mb-1">
            Ton nom <span className="text-[var(--color-coral)]">*</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ex: Marie"
            required
            maxLength={80}
            className="w-full px-4 py-3 rounded-2xl border-2 border-[var(--color-line)] focus:border-[var(--color-coral)] focus:ring-4 focus:ring-[var(--color-coral)]/15 outline-none transition"
          />
          <p className="text-xs text-[var(--color-ink-3)] mt-1">
            Apparaîtra sur la cagnotte (« {name.trim() || "Ton nom"} a contribué… »).
          </p>
        </div>

        {/* WhatsApp */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-ink-2)] mb-1">
            Ton WhatsApp <span className="text-[var(--color-coral)]">*</span>
          </label>
          <div className="flex gap-2 relative">
            <button
              type="button"
              onClick={() => setCountryOpen((o) => !o)}
              className="flex items-center gap-2 px-3 py-3 rounded-2xl border-2 border-[var(--color-line)] hover:border-[var(--color-indigo)] transition bg-white"
            >
              <span className="text-lg">{country.flag}</span>
              <span className="font-bold text-sm">{country.dial}</span>
              <ChevronDown size={14} className="text-[var(--color-ink-3)]" />
            </button>
            <input
              type="tel"
              value={phoneLocal}
              onChange={(e) => setPhoneLocal(e.target.value)}
              placeholder="90 12 34 56"
              required
              className="flex-1 px-4 py-3 rounded-2xl border-2 border-[var(--color-line)] focus:border-[var(--color-coral)] focus:ring-4 focus:ring-[var(--color-coral)]/15 outline-none transition"
            />
            {countryOpen && (
              <div className="absolute left-0 top-[58px] z-50 w-72 max-h-60 overflow-auto bg-white rounded-2xl border-2 border-[var(--color-line)] shadow-xl">
                {COUNTRIES.map((c) => (
                  <button
                    key={c.code}
                    type="button"
                    onClick={() => {
                      setCountry(c);
                      setOperator(OPERATORS_BY_COUNTRY[c.code]?.[0]?.id ?? "card");
                      setCountryOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-[var(--color-line)]/30 transition ${c.code === country.code ? "bg-[var(--color-coral)]/10" : ""}`}
                  >
                    <span className="text-xl">{c.flag}</span>
                    <span className="flex-1 text-sm">{c.name}</span>
                    <span className="text-xs font-bold text-[var(--color-ink-2)]">{c.dial}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <p className="text-xs text-[var(--color-ink-3)] mt-1">
            On t'enverra une notification WhatsApp quand {ownerFirstName} clôture la cagnotte.
          </p>
        </div>

        {/* Montant */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-ink-2)] mb-1">
            Montant (FCFA) <span className="text-[var(--color-coral)]">*</span>
          </label>
          <input
            type="text"
            inputMode="numeric"
            value={amount}
            onChange={(e) => setAmount(e.target.value.replace(/\D/g, ""))}
            placeholder="5 000"
            required
            className="w-full px-4 py-3 rounded-2xl border-2 border-[var(--color-line)] focus:border-[var(--color-coral)] focus:ring-4 focus:ring-[var(--color-coral)]/15 outline-none transition font-bold text-lg"
          />
          <div className="flex gap-2 mt-2 flex-wrap">
            {PRESETS.map((p) => {
              const v = p.replace(/\s/g, "");
              const on = v === amount;
              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => setAmount(v)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${on ? "bg-[var(--color-coral)] text-white" : "bg-[var(--color-line)]/40 text-[var(--color-ink)] hover:bg-[var(--color-line)]/60"}`}
                >
                  {p}
                </button>
              );
            })}
          </div>
        </div>

        {/* Opérateur Mobile Money */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-ink-2)] mb-1">
            Moyen de paiement <span className="text-[var(--color-coral)]">*</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {operators.map((op) => {
              const on = op.id === operator;
              return (
                <button
                  key={op.id}
                  type="button"
                  onClick={() => setOperator(op.id)}
                  className={`flex items-center justify-center gap-2 px-3 py-3 rounded-2xl border-2 text-sm font-medium transition ${on ? "border-[var(--color-coral)] bg-[var(--color-coral)]/10 text-[var(--color-coral-deep)]" : "border-[var(--color-line)] hover:border-[var(--color-ink-3)]"}`}
                >
                  {op.id === "card" ? <CreditCard size={15} /> : <Smartphone size={15} />}
                  {op.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Message optionnel */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-ink-2)] mb-1">
            Message <span className="text-[var(--color-ink-3)] font-normal">(optionnel)</span>
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Un petit mot pour l'organisateur..."
            maxLength={200}
            rows={2}
            className="w-full px-4 py-3 rounded-2xl border-2 border-[var(--color-line)] focus:border-[var(--color-coral)] focus:ring-4 focus:ring-[var(--color-coral)]/15 outline-none transition resize-none"
          />
        </div>

        {error && (
          <div className="flex items-start gap-2 p-3 rounded-xl bg-red-50 border border-red-200">
            <AlertCircle size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={!canSubmit}
          className="btn btn-primary w-full !py-4 !text-base disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? (
            "Redirection en cours…"
          ) : (
            <>
              <Send size={18} /> Contribuer {amountNum > 0 ? `${amountNum.toLocaleString("fr-FR").replace(/,/g, " ")} FCFA` : ""}
            </>
          )}
        </button>

        <p className="text-xs text-center text-[var(--color-ink-3)] leading-relaxed">
          🔒 Paiement 100 % sécurisé. Tu seras redirigé·e vers la page de paiement de notre partenaire.
        </p>
      </form>
    </div>
  );
}
