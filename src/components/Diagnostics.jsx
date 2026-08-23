import { useState, useEffect, useRef } from "react";
import { diagnostics as d } from "../content";

const DOTS = ".".repeat(60);

export default function Diagnostics({ onDone }) {
  const [shown, setShown] = useState(0);
  const [scored, setScored] = useState(false);
  const timers = useRef([]);
  const endRef = useRef(null);

  const finish = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setShown(d.lines.length);
    setScored(true);
    onDone();
  };

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { finish(); return; }

    let t = 0;
    d.lines.forEach((line, n) => {
      t += line.delay;
      timers.current.push(setTimeout(() => setShown(n + 1), t));
    });
    t += d.scoreDelay;
    timers.current.push(setTimeout(() => {
      setScored(true);
      onDone();
    }, t));

    return () => { timers.current.forEach(clearTimeout); timers.current = []; };
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end", behavior: "smooth" });
  }, [shown, scored]);

  return (
    <>
      <div className="diag-header">
        <span className="eyebrow" style={{ marginBottom: 0 }}>System Check</span>
        {!scored && (
          <button className="skip-btn" onClick={finish}>skip →</button>
        )}
      </div>

      <div className="term-window">
        <div className="term-chrome">
          <span className="term-dot" />
          <span className="term-dot" />
          <span className="term-dot" />
          <span className="term-win-title">random_gril_scan.exe</span>
        </div>
        <div className="term">
          <div className="cmd">{d.command}</div>
          {d.lines.slice(0, shown).map((l, n) => (
            <div className={`row${l.warn ? " warn" : ""}`} key={n}>
              <span className="k">{l.warn ? "⚠" : "✓"} {l.label}</span>
              <span className="dots">{DOTS}</span>
              <span className="v">{l.value}</span>
            </div>
          ))}
          {!scored && (
            <div style={{ marginTop: 6 }}><span className="cursor" /></div>
          )}
        </div>
      </div>

      {scored && (
        <div className="scan-result">
          <div className="scan-main">{d.score}</div>
          <div className="scan-foot">
            <span className="scan-k">{d.footnote.label}</span>
            <span className="scan-v"> — {d.footnote.value}</span>
          </div>
        </div>
      )}

      <div ref={endRef} />
    </>
  );
}
