"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// 14 phrases — Cahier des charges Site v1.1 section 7.
const PHRASES = [
  { lang: "Swahili", orig: "Pendo ni zawadi bora", fr: "L'amour est le plus beau des cadeaux" },
  { lang: "Yoruba", orig: "Fi ìfẹ́ ránṣẹ́", fr: "Envoie de l'amour" },
  { lang: "Lingala", orig: "Bolingo ezali likabo", fr: "L'amour est un cadeau" },
  { lang: "Wolof", orig: "Mayal sa mbeugel", fr: "Donne ton amour" },
  { lang: "Fon (Bénin)", orig: "Wanyi wɛ nyí nu ɖaxó", fr: "L'amour est ce qui compte le plus" },
  { lang: "Ewe (Togo)", orig: "Lɔlɔ̃ nye agbe", fr: "L'amour, c'est la vie" },
  { lang: "Bambara (Mali)", orig: "An ka kanu di ɲɔgɔn ma", fr: "Donnons-nous de l'amour" },
  { lang: "Akan / Twi (Ghana)", orig: "Ma me wo ɔdɔ", fr: "Donne-moi ton amour" },
  { lang: "Mooré (Burkina)", orig: "Nonglem yaa vɩɩm", fr: "L'amour, c'est la vie" },
  { lang: "Peul / Fulfulde", orig: "Yiɗde ko neɗɗo waawi", fr: "Aimer, c'est ce que l'humain peut offrir" },
  { lang: "Sango (RCA)", orig: "Ndoye ayeke matabisi", fr: "L'amour est un cadeau" },
  { lang: "Kinyarwanda", orig: "Urukundo ni impano", fr: "L'amour est un don" },
  { lang: "Zoulou", orig: "Uthando luyisipho", fr: "L'amour est un cadeau" },
  { lang: "Amharique", orig: "ፍቅር ሕይወት ነው", fr: "L'amour, c'est la vie" },
];

const VARIANTS = ["letters", "typewriter", "drop", "split"] as const;
type Variant = (typeof VARIANTS)[number];

const PHRASE_DUR = 4200;

export function HeroMultilingue() {
  const [idx, setIdx] = useState(-1);
  const [paused, setPaused] = useState(false);
  const [bursts, setBursts] = useState<Array<{ id: string; emoji: string; x: number; y: number; r: number; d: number; s: number }>>([]);
  const prefersReducedMotion = useReducedMotion();

  // Intro tagline first 1.5s
  useEffect(() => {
    if (prefersReducedMotion) {
      setIdx(0);
      return;
    }
    const t = setTimeout(() => setIdx(0), 1500);
    return () => clearTimeout(t);
  }, [prefersReducedMotion]);

  // Auto-advance loop
  useEffect(() => {
    if (idx < 0 || paused || prefersReducedMotion) return;
    const t = setTimeout(() => setIdx((i) => (i + 1) % PHRASES.length), PHRASE_DUR);
    return () => clearTimeout(t);
  }, [idx, paused, prefersReducedMotion]);

  // Confetti burst on each phrase change
  useEffect(() => {
    if (idx < 0 || prefersReducedMotion) return;
    const items = Array.from({ length: 12 }).map((_, i) => ({
      id: `${idx}-${i}-${Date.now()}`,
      emoji: ["❤️", "💖", "✨", "🌸", "💫", "🌼"][i % 6],
      x: (Math.random() - 0.5) * 540,
      y: (Math.random() - 0.5) * 200 - 80,
      r: (Math.random() - 0.5) * 90,
      d: Math.random() * 0.4,
      s: 0.7 + Math.random() * 0.7,
    }));
    setBursts(items);
    const t = setTimeout(() => setBursts([]), 1800);
    return () => clearTimeout(t);
  }, [idx, prefersReducedMotion]);

  const phrase = idx < 0 ? null : PHRASES[idx];
  const variant: Variant = idx < 0 ? "letters" : VARIANTS[idx % VARIANTS.length];

  return (
    <section
      className="relative pt-28 pb-20 sm:pt-32 sm:pb-24 lg:min-h-screen overflow-hidden flex items-center"
      style={{ background: "var(--gradient-hero)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background blobs */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full opacity-30 blur-3xl" style={{ background: "#F9A01C" }} />
        <div className="absolute top-40 -right-20 w-80 h-80 rounded-full opacity-25 blur-3xl" style={{ background: "#ED4673" }} />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 rounded-full opacity-20 blur-3xl" style={{ background: "#41087B" }} />
      </div>

      {/* Concentric rings */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ animation: "donia-spin 80s linear infinite" }}
      >
        <svg width="800" height="800" viewBox="0 0 800 800" className="opacity-25">
          <g transform="translate(400,400)">
            <circle r="380" stroke="#F9A01C" strokeWidth="1" fill="none" opacity="0.5" />
            <circle r="300" stroke="#F9A01C" strokeWidth="1" fill="none" strokeDasharray="4 6" />
            <circle r="220" stroke="#F9A01C" strokeWidth="1" fill="none" opacity="0.7" />
          </g>
        </svg>
      </div>

      {/* Floating hearts */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-white select-none"
            style={{
              left: `${10 + (i * 11) % 80}%`,
              top: `${15 + (i * 13) % 70}%`,
              fontSize: `${14 + (i % 3) * 6}px`,
              opacity: 0.08 + (i % 3) * 0.04,
              animation: `donia-float ${6 + (i % 5)}s ease-in-out infinite`,
              animationDelay: `${(i * 0.7) % 5}s`,
            }}
          >
            {i % 2 ? "❤" : "✦"}
          </span>
        ))}
      </div>

      <div className="container-donia relative z-10 grid lg:grid-cols-[1.1fr_320px] gap-10 lg:gap-12 items-center w-full">
        {/* Left content */}
        <div className="flex flex-col min-w-0">
          {/* Tag pill */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 self-start px-4 py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur text-white text-xs font-medium mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-mango)] animate-pulse" />
            L&rsquo;app cadeau panafricaine · v1.0 disponible
          </motion.div>

          {/* Phrase area */}
          <div className="relative min-h-[180px] sm:min-h-[220px] mb-4">
            {/* Confetti burst layer */}
            <div className="absolute left-1/2 top-1/2 pointer-events-none">
              <AnimatePresence>
                {bursts.map((b) => (
                  <motion.span
                    key={b.id}
                    initial={{ opacity: 0, scale: 0.5, x: 0, y: 0, rotate: 0 }}
                    animate={{ opacity: [0, 1, 1, 0], scale: [0.5, b.s, b.s, b.s * 0.7], x: b.x, y: b.y, rotate: b.r }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.8, delay: b.d, ease: "easeOut" }}
                    className="absolute select-none text-xl"
                  >
                    {b.emoji}
                  </motion.span>
                ))}
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              {phrase === null ? (
                <motion.div
                  key="intro"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-xs uppercase tracking-[0.25em] text-[var(--color-mango)] font-bold mb-3">
                    Bienvenue
                  </div>
                  <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight">
                    Donia — <em className="text-[var(--color-mango)]">l&rsquo;amour</em>
                    <br />
                    n&rsquo;a pas de frontières.
                  </h1>
                </motion.div>
              ) : (
                <motion.div
                  key={`p-${idx}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="text-xs uppercase tracking-[0.25em] text-[var(--color-mango)] font-bold mb-3 flex items-center gap-2">
                    <motion.span
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      ❤
                    </motion.span>
                    {phrase.lang}
                  </div>

                  <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight relative">
                    <AnimatedText text={phrase.orig} variant={variant} reduced={!!prefersReducedMotion} />
                  </h1>

                  {/* Underline drawn SVG */}
                  <motion.svg
                    viewBox="0 0 300 12"
                    preserveAspectRatio="none"
                    className="block mt-3 h-3 w-48 max-w-full"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  >
                    <defs>
                      <linearGradient id="under-grad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#F4486F" />
                        <stop offset="50%" stopColor="#F9A01C" />
                        <stop offset="100%" stopColor="#FDF7F6" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d="M2 8 Q 80 -2, 150 6 T 298 4"
                      stroke="url(#under-grad)"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.9, delay: 0.3 }}
                    />
                  </motion.svg>

                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 0.9, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-4 font-display italic text-xl sm:text-2xl text-white/85"
                  >
                    « {phrase.fr} »
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-white/80 max-w-xl leading-relaxed mt-2">
            Envoie une carte cadeau à un proche, où qu&rsquo;il soit.{" "}
            <strong className="text-white font-semibold">Avec son e-mail ou son WhatsApp.</strong> C&rsquo;est tout.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#download" className="btn btn-primary">
              Télécharger l&rsquo;app
              <ArrowRight size={18} />
            </a>
            <a
              href="#how"
              className="btn bg-white/12 text-white border border-white/22 hover:bg-white/18 backdrop-blur"
            >
              Comment ça marche
            </a>
          </div>

          {/* Trust counters */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-white">
            <TrustItem num="14 287" label="utilisateurs" />
            <Dot />
            <TrustItem num="8 pays" label="couverts" />
            <Dot />
            <TrustItem num="17" label="opérateurs M-Money" />
          </div>
        </div>

        {/* Right: Phone mockup with real screenshot (tilted like in mockup) */}
        <div className="hidden lg:flex justify-center items-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -4 }}
            animate={{ opacity: 1, y: 0, rotate: -7 }}
            whileHover={{ rotate: -3, scale: 1.02 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative"
            style={{
              filter: "drop-shadow(0 50px 80px rgba(42,4,84,0.55))",
              transformOrigin: "center center",
            }}
          >
            <div className="relative w-[260px] h-[534px] rounded-[38px] bg-[#1a032f] p-2 border-[3px] border-[#2A0454]">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-black z-10" />
              <div className="w-full h-full rounded-[30px] overflow-hidden relative">
                <Image
                  src="/screens/home.png"
                  alt="Donia app — écran d'accueil"
                  fill
                  sizes="260px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Floating mini-cards around phone */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-8 top-16 w-24 h-16 rounded-2xl flex flex-col items-start justify-end p-2.5 shadow-2xl"
              style={{ background: "var(--gradient-coral)" }}
            >
              <span className="text-xl">🎂</span>
              <span className="text-white font-display text-[10px] font-semibold">Anniversaire</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-6 top-36 w-24 h-16 rounded-2xl flex flex-col items-start justify-end p-2.5 shadow-2xl"
              style={{ background: "#F9A01C", color: "#2A0F1A" }}
            >
              <span className="text-xl">🏆</span>
              <span className="font-display text-[10px] font-semibold">Bravo</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -left-6 bottom-28 w-24 h-16 rounded-2xl flex flex-col items-start justify-end p-2.5 shadow-2xl"
              style={{ background: "#ED4673" }}
            >
              <span className="text-xl">💖</span>
              <span className="text-white font-display text-[10px] font-semibold">J&rsquo;aime</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes donia-float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(8px); }
        }
        @keyframes donia-spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </section>
  );
}

function TrustItem({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-display text-2xl tracking-tight">{num}</span>
      <span className="text-xs text-white/65 uppercase tracking-wider">{label}</span>
    </div>
  );
}
function Dot() {
  return <span className="w-1 h-1 rounded-full bg-white/40 hidden sm:inline-block" />;
}

// ─── Animated text variants ───
function AnimatedText({ text, variant, reduced }: { text: string; variant: Variant; reduced: boolean }) {
  if (reduced) return <span>{text}</span>;
  if (variant === "letters") return <StaggerLetters text={text} />;
  if (variant === "typewriter") return <Typewriter text={text} />;
  if (variant === "drop") return <DropLetters text={text} />;
  return <SplitWords text={text} />;
}

function StaggerLetters({ text }: { text: string }) {
  return (
    <span className="inline-block">
      {Array.from(text).map((c, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: i * 0.035, duration: 0.35, ease: "easeOut" }}
          className="inline-block"
        >
          {c === " " ? " " : c}
        </motion.span>
      ))}
    </span>
  );
}

function Typewriter({ text }: { text: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    setN(0);
    const iv = setInterval(() => {
      setN((prev) => {
        if (prev >= text.length) {
          clearInterval(iv);
          return prev;
        }
        return prev + 1;
      });
    }, 38);
    return () => clearInterval(iv);
  }, [text]);
  return (
    <span className="inline-block">
      {text.slice(0, n)}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block text-[var(--color-mango)] -mr-1"
      >
        |
      </motion.span>
    </span>
  );
}

function DropLetters({ text }: { text: string }) {
  return (
    <span className="inline-block">
      {Array.from(text).map((c, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: [-40, 8, 0] }}
          transition={{ delay: i * 0.04, duration: 0.55, ease: "easeOut" }}
          className="inline-block"
        >
          {c === " " ? " " : c}
        </motion.span>
      ))}
    </span>
  );
}

function SplitWords({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <span className="inline-block">
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.09, duration: 0.5, ease: "easeOut" }}
          className="inline-block mr-2"
        >
          {w}
        </motion.span>
      ))}
    </span>
  );
}
