import { useState, useRef, useEffect } from "react";
import { sections } from "./content";
import Intro from "./components/Intro";
import Diagnostics from "./components/Diagnostics";
import Archive from "./components/Archive";
import Soundtrack from "./components/Soundtrack";
import Awards from "./components/Awards";
import Quiz from "./components/Quiz";
import Sincere from "./components/Sincere";

export default function App() {
  const [i, setI] = useState(0);
  const [canAdvance, setCanAdvance] = useState(true);
  const screenRef = useRef(null);
  const touch = useRef(null);

  const last = i === sections.length - 1;
  const nextLabel = last ? null : sections[i + 1].label;

  const go = (n) => {
    if (n < 0 || n >= sections.length) return;
    setI(n);
    if (screenRef.current) screenRef.current.scrollTop = 0;
  };

  const next = () => canAdvance && go(i + 1);
  const back = () => go(i - 1);

  // Diagnostics locks the button until the boot finishes.
  useEffect(() => {
    const id = sections[i].id;
    setCanAdvance(id !== "diagnostics" && id !== "quiz");
  }, [i]);

  // Swipe as a secondary way to move. Vertical drags are ignored.
  const onStart = (e) => {
    const t = e.changedTouches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  };
  const onEnd = (e) => {
    if (!touch.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touch.current.x;
    const dy = t.clientY - touch.current.y;
    touch.current = null;
    if (Math.abs(dx) < 60 || Math.abs(dy) > Math.abs(dx)) return;
    dx < 0 ? next() : back();
  };

  const props = { onDone: () => setCanAdvance(true), onNext: next };

  const view = () => {
    switch (sections[i].id) {
      case "intro":       return <Intro {...props} />;
      case "diagnostics": return <Diagnostics {...props} />;
      case "archive":     return <Archive {...props} />;
      case "soundtrack":  return <Soundtrack {...props} />;
      case "awards":      return <Awards {...props} />;
      case "quiz":        return <Quiz {...props} setCanAdvance={setCanAdvance} />;
      case "sincere":     return <Sincere {...props} />;
      default:            return null;
    }
  };

  return (
    <div className="app" onTouchStart={onStart} onTouchEnd={onEnd}>
      <div className="prog">
        {sections.map((s, n) => (
          <i key={s.id} className={n <= i ? "on" : ""} />
        ))}
      </div>

      <div className="screen" ref={screenRef} key={i}>
        <div className="page" style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          {i > 0  && (
            <button className="back" onClick={back}>← back</button>
          )}
          {view()}
        </div>
      </div>

      {!last && sections[i].id !== "quiz" && (
        <div className="nav">
          <button className="next" onClick={next} disabled={!canAdvance}>
            <span>
              <small>{canAdvance ? (i === 0 ? "Start" : "Next") : "Running"}</small>
              {canAdvance ? (i === 0 ? "Run diagnostics" : nextLabel) : "Please wait"}
            </span>
            <span className="arrow">{canAdvance ? "→" : "·"}</span>
          </button>
        </div>
      )}
    </div>
  );
}