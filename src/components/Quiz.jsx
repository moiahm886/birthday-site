import { useState, useEffect } from "react";
import { quiz, quizResults } from "../content";

export default function Quiz({ setCanAdvance, onNext }) {
  const [n, setN] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (setCanAdvance) setCanAdvance(done);
  }, [done, setCanAdvance]);

  const choose = (i) => setPicked(i);

  const advance = () => {
    const correct = picked === quiz[n].answer;
    if (correct) setScore((s) => s + 1);
    if (n + 1 < quiz.length) {
      setN(n + 1);
      setPicked(null);
    } else {
      setDone(true);
    }
  };

  if (done) {
    const sorted = [...quizResults].sort((a, b) => b.min - a.min);
    const result = sorted.find((r) => score >= r.min) || sorted[sorted.length - 1] || {};
    return (
      <div className="result">
        <div className="rs">{score} / {quiz.length}</div>
        <div className="rt">{result.title || ""}</div>
        <div className="rb">{result.body || ""}</div>
        <button className="reply" style={{ marginTop: 22 }} onClick={() => onNext && onNext()}>
          One last thing →
        </button>
      </div>
    );
  }

  const q = quiz[n];

  return (
    <>
      <div className="qmeta">Question {n + 1} of {quiz.length}</div>
      <div className="q">{q.q}</div>

      {q.options.map((o, i) => (
        <button
          key={i}
          className={`opt${picked === i ? " sel" : ""}`}
          onClick={() => choose(i)}
        >
          <b>{"ABCD"[i]}</b> {o}
        </button>
      ))}

      {picked !== null && (
        <button className="reply" style={{ marginTop: 14 }} onClick={advance}>
          {n + 1 < quiz.length ? "Next question" : "See result"}
        </button>
      )}
    </>
  );
}