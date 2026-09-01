import { useState } from "react";

const SETS = {
  notes:    { symbols: ["♪", "♫", "♩", "♬"], dir: "down", sz: [14,22], op: [.12,.38], dur: [5,10] },
  hearts:   { symbols: ["💙", "🩵", "💙", "💫"], dir: "up",   sz: [12,20], op: [.18,.48], dur: [6,12] },
  bokeh:    { symbols: ["●", "◦", "•", "○"],   dir: "up",   sz: [4,9],   op: [.05,.15], dur: [9,18] },
  birthday: { symbols: ["🎈", "🎉", "✨", "🎂"], dir: "up",   sz: [16,26], op: [.35,.75], dur: [7,13] },
};

const rand = (a, b) => a + Math.random() * (b - a);

export default function Particles({ type = "notes", count = 12 }) {
  const [items] = useState(() => {
    const cfg = SETS[type] ?? SETS.notes;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      symbol:   cfg.symbols[i % cfg.symbols.length],
      left:     `${rand(3, 97)}%`,
      delay:    `${rand(0, 9)}s`,
      duration: `${rand(...cfg.dur)}s`,
      size:     `${rand(...cfg.sz)}px`,
      opacity:  rand(...cfg.op),
      dir:      cfg.dir,
    }));
  });

  return (
    <div className="particles" aria-hidden="true">
      {items.map((p) => (
        <span
          key={p.id}
          className={`particle particle--${p.dir}`}
          style={{
            left: p.left,
            fontSize: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
            opacity: p.opacity,
          }}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  );
}
