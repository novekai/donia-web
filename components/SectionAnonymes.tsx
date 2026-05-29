"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FEATURES = [
  { emoji: "🔗", text: "Un lien unique à partager partout" },
  { emoji: "🕶️", text: "100 % anonyme côté expéditeur" },
  { emoji: "💌", text: "Tu lis tes messages dans l'app Donia" },
  { emoji: "🛡️", text: "Modération automatique anti-haine" },
];

const PREVIEW_MESSAGES = [
  { t: "Tu es la personne la plus inspirante que je connaisse.", fav: true, color: "#F4486F" },
  { t: "Je t'admire en silence depuis des mois…", fav: false, color: "#41087B" },
  { t: "On devrait se parler plus souvent, vraiment 💫", fav: false, color: "#F9A01C" },
  { t: "Ton sourire change ma journée à chaque fois.", fav: false, color: "#ED4673" },
  { t: "Merci d'exister, vraiment. ❤️", fav: true, color: "#7B278C" },
];

const BUBBLES = [
  { t: "Tu illumines chaque pièce où tu entres. 🌟", c: "#F4486F", x: -180, y: -180, delay: 0 },
  { t: "Je t'admire en silence depuis des mois…", c: "#41087B", x: -200, y: 60, delay: 0.6 },
  { t: "Merci d'exister, vraiment. ❤️", c: "#F9A01C", x: 200, y: -100, delay: 1.2 },
];

export function SectionAnonymes() {
  return (
    <section id="anonymes" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="container-donia">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight mb-6 leading-[1.05]">
              Reçois des messages
              <br />
              <em className="text-[var(--color-coral)]">anonymes</em>
            </h2>
            <p className="text-base sm:text-lg text-[var(--color-ink-2)] leading-relaxed mb-8 max-w-lg">
              Demande à tes proches de t&rsquo;envoyer des mots anonymes. Compliments, déclarations,
              encouragements… Tout est possible. Crée ton lien depuis l&rsquo;app, partage-le sur tes
              stories, et découvre ce qu&rsquo;on pense vraiment de toi.
            </p>

            <ul className="space-y-3 mb-8">
              {FEATURES.map((f) => (
                <li key={f.text} className="flex items-center gap-3 text-base text-[var(--color-ink)]">
                  <span className="w-10 h-10 rounded-full bg-[var(--color-coral)]/10 flex items-center justify-center text-lg flex-shrink-0">
                    {f.emoji}
                  </span>
                  {f.text}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <a href="/a/xK3Jq9P" className="btn btn-primary">
                Voir une page anonyme
                <ArrowRight size={18} />
              </a>
              <a href="#download" className="btn btn-secondary">
                Créer mon lien
              </a>
            </div>
          </motion.div>

          {/* Right: phone with anon inbox + floating bubbles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative flex justify-center items-center min-h-[500px]"
          >
            {/* Floating ANONYME bubbles around phone */}
            {BUBBLES.map((b, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: b.delay }}
                className="hidden md:block absolute z-20 max-w-[200px] bg-white rounded-2xl p-3.5 shadow-2xl border border-[var(--color-line)]"
                style={{
                  left: `calc(50% + ${b.x}px)`,
                  top: `calc(50% + ${b.y}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="text-xs">👀</span>
                  <span className="text-[10px] font-bold tracking-wider uppercase" style={{ color: b.c }}>
                    Anonyme
                  </span>
                </div>
                <p className="text-xs text-[var(--color-ink)] leading-snug">{b.t}</p>
              </motion.div>
            ))}

            {/* Phone */}
            <div
              className="relative w-[270px] h-[554px] rounded-[40px] bg-[#1a032f] p-2 border-[3px] border-[#2A0454] shadow-[0_40px_80px_-20px_rgba(42,4,84,0.5)]"
              style={{ filter: "drop-shadow(0 30px 60px rgba(65,8,123,0.35))" }}
            >
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-black z-10" />
              <div
                className="w-full h-full rounded-[32px] overflow-hidden p-5"
                style={{ background: "linear-gradient(160deg, #41087B 0%, #2A0454 100%)" }}
              >
                <div className="mt-6">
                  <div className="font-display italic text-xs text-white/70">Ta boîte</div>
                  <div className="font-display text-2xl text-white tracking-tight">
                    Anonymes <span className="text-[var(--color-mango)]">✨</span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {PREVIEW_MESSAGES.slice(0, 4).map((m, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.18 }}
                      className="rounded-xl bg-white/8 border-l-2 p-2.5"
                      style={{ borderColor: m.color }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span
                          className="text-[9px] font-bold uppercase tracking-wider"
                          style={{ color: m.color === "#41087B" ? "#F9A01C" : m.color }}
                        >
                          🕶️ Anonyme
                        </span>
                        {m.fav && <span className="text-xs">❤</span>}
                      </div>
                      <p className="text-xs text-white/90 leading-snug font-display">{m.t}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
