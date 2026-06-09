"use client";

// Petite couche client : confettis discrets en fond du hero merci.
// On evite framer-motion ici pour rester leger.
export function MerciClient() {
  const items = Array.from({ length: 18 });
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {items.map((_, i) => (
        <span
          key={i}
          className="absolute text-white/30 select-none animate-float-slow"
          style={{
            left: `${(i * 11 + 7) % 95}%`,
            top: `${(i * 17 + 9) % 90}%`,
            fontSize: `${12 + (i % 5) * 4}px`,
            animationDelay: `${(i * 0.27) % 4}s`,
          }}
        >
          {i % 4 === 0 ? "💝" : i % 4 === 1 ? "✨" : i % 4 === 2 ? "🎉" : "❤"}
        </span>
      ))}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          50% { transform: translateY(-18px) translateX(8px) rotate(8deg); }
        }
        .animate-float-slow { animation: float-slow 5s ease-in-out infinite; }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
