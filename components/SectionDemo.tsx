"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Pause, Play } from "lucide-react";

const CHAPTERS = [
  {
    t: "Ton accueil",
    d: "Solde, fêtes du jour, envoi rapide — tout en un coup d'œil.",
    emoji: "🏠",
    color: "#41087B",
    src: "/screens/home.png",
  },
  {
    t: "Personnalise & envoie",
    d: "Carte, montant, message. Par email ou WhatsApp.",
    emoji: "✍️",
    color: "#F4486F",
    src: "/screens/send-confirm.png",
  },
  {
    t: "Le proche reçoit",
    d: "Carte + code de retrait à 8 caractères.",
    emoji: "🎁",
    color: "#ED4673",
    src: "/screens/receive.png",
  },
  {
    t: "Convertit en argent",
    d: "Mobile Money en 1 min : MTN, Moov, Orange, Wave…",
    emoji: "💸",
    color: "#5DBFA0",
    src: "/screens/redeem-success.png",
  },
];

const DUR = 5500;

export function SectionDemo() {
  const [ch, setCh] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [prog, setProg] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!playing) return;
    let start = performance.now() - prog * DUR;
    const tick = (t: number) => {
      const e = Math.min(1, (t - start) / DUR);
      setProg(e);
      if (e >= 1) {
        setCh((c) => (c + 1) % CHAPTERS.length);
        setProg(0);
        start = performance.now();
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing, ch]);

  const c = CHAPTERS[ch];

  return (
    <section id="demo" className="py-24 sm:py-32 bg-[var(--color-cream)]">
      <div className="container-donia">
        <div className="text-center mb-14">
          <p className="font-display italic text-[var(--color-coral)] text-base sm:text-lg mb-2">
            En vidéo
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight">
            Donia, <em className="text-[var(--color-coral)]">en 1 minute</em>
          </h2>
          <p className="mt-4 text-base text-[var(--color-ink-2)] max-w-2xl mx-auto">
            Regarde comment offrir un cadeau, le recevoir, et le convertir en argent — sur les
            vrais écrans de l&rsquo;app.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Player */}
          <div className="relative flex justify-center">
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-30 transition-colors duration-700"
              style={{ background: c.color, transform: "scale(0.7)" }}
            />

            <div className="relative">
              {/* Device bezel */}
              <div className="relative w-[260px] sm:w-[300px] h-[534px] sm:h-[616px] rounded-[42px] bg-[#1a032f] p-2.5 border-[3px] border-[#2A0454] shadow-[0_40px_80px_-20px_rgba(42,4,84,0.5)]">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 rounded-full bg-black z-10" />
                <div className="w-full h-full rounded-[34px] overflow-hidden relative bg-[#FDF7F6]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={ch}
                      initial={{ opacity: 0, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={c.src}
                        alt={c.t}
                        fill
                        sizes="300px"
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Play/Pause button */}
              <button
                onClick={() => setPlaying((p) => !p)}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[var(--color-ink)] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
                aria-label={playing ? "Pause" : "Lecture"}
              >
                {playing ? <Pause size={18} fill="white" /> : <Play size={18} fill="white" />}
              </button>
            </div>
          </div>

          {/* Chapters */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between mb-2">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[var(--color-ink-2)] font-bold">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-coral)] opacity-70 animate-ping" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-[var(--color-coral)]" />
                </span>
                Démo interactive
              </span>
              <span className="text-xs font-mono text-[var(--color-ink-3)]">
                {String(ch + 1).padStart(2, "0")} / {String(CHAPTERS.length).padStart(2, "0")}
              </span>
            </div>

            {CHAPTERS.map((d, i) => {
              const active = i === ch;
              return (
                <button
                  key={i}
                  onClick={() => {
                    setCh(i);
                    setProg(0);
                  }}
                  className={`relative text-left rounded-2xl p-4 border-2 transition-all overflow-hidden ${
                    active
                      ? "bg-white border-[var(--color-line)] shadow-[0_8px_24px_-12px_rgba(42,15,26,0.15)]"
                      : "bg-white/50 border-transparent hover:bg-white/80"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-colors"
                      style={{
                        background: active ? d.color : `${d.color}22`,
                        color: active ? "white" : d.color,
                      }}
                    >
                      {d.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-display font-semibold text-base">{d.t}</div>
                      <div className="text-xs text-[var(--color-ink-2)] mt-0.5">{d.d}</div>
                    </div>
                    <div className="font-mono text-xs text-[var(--color-ink-3)] tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  {active && (
                    <div
                      className="absolute bottom-0 left-0 h-0.5 transition-all duration-100"
                      style={{ width: `${prog * 100}%`, background: d.color }}
                    />
                  )}
                </button>
              );
            })}

            <a href="#download" className="btn btn-primary mt-3 self-start">
              Essayer maintenant →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
