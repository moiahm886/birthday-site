import { useEffect } from "react";
import { awards } from "../content";
import { awardsBurst } from "../confetti";

const THEMES = [
  { icon: "🎙️", accent: "#4A8FE0", glow: "rgba(74,143,224,.18)",  bd: "rgba(74,143,224,.3)"  },
  { icon: "🔮", accent: "#9170E0", glow: "rgba(145,112,224,.18)", bd: "rgba(145,112,224,.3)" },
  { icon: "💬", accent: "#38B8C4", glow: "rgba(56,184,196,.18)",  bd: "rgba(56,184,196,.3)"  },
  { icon: "👄", accent: "#D4527A", glow: "rgba(212,82,122,.18)",  bd: "rgba(212,82,122,.3)"  },
  { icon: "🕊️", accent: "#3AAF8A", glow: "rgba(58,175,138,.18)",  bd: "rgba(58,175,138,.3)"  },
  { icon: "👑", accent: "#C49445", glow: "rgba(196,148,69,.18)",  bd: "rgba(196,148,69,.3)"  },
  { icon: "💙", accent: "#6B8FEE", glow: "rgba(107,143,238,.18)", bd: "rgba(107,143,238,.3)" },
];

export default function Awards() {
  useEffect(() => { awardsBurst(); }, []);

  return (
    <>
      <div className="eyebrow">Section 04</div>
      <h2>Annual Awards</h2>
      {awards.map((a, n) => {
        const t = THEMES[n % THEMES.length];
        return (
          <div
            className="cert"
            key={n}
            data-n={String(n + 1).padStart(2, "0")}
            style={{ "--ca": t.accent, "--cg": t.glow, "--cb": t.bd }}
          >
            <div className="tr">{t.icon}</div>
            <div className="tt">{a.title}</div>
            <div className="sep" />
            <div className="ct">{a.citation}</div>
          </div>
        );
      })}
    </>
  );
}
