import { useState, useEffect } from "react";
import { quiz, quizResults } from "../content";

export default function Quiz({ setCanAdvance }) {
  const [n, setN] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  // Locked until she answers; unlocked once the result is up.
  useEffect(() => {
    setCanAdvance(done);
  }, [done, setCanAdvance]);

    const choose = (i) => setPicked(i);

  const advance = () => {
    if (picked === quiz[n].answer) setScore((s) => s + 1);
    if (n + 1 < quiz.length) {
      setN(n + 1);
      setPicked(null);
    } else {
      setDone(true);
    }
  };

  if (done) {
    const result = [...quizResults].reverse().find((r) => score >= r.min);
    return (
      <div className="result">
        <div className="rs">{score} / {quiz.length}</div>
        <div className="rt">{result.title}</div>
        <div className="rb">{result.body}</div>
                <button className="reply" style={{ marginTop: 22 }} onClick={onNext}>
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