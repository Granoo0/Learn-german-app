import React, { useState } from "react";
import Btn from "../common/Btn";
import { QUIZZES } from "../../data/levelData";
import ProgressBar from "../common/ProgressBar";
function QuizSection({ level, onProgress }) {
  const questions = QUIZZES[level] || [];
  const [qi, setQi] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [shake, setShake] = useState(false);

  const q = questions[qi];

  const handleSelect = (i) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === q.answer) { setScore(s => s + 1); }
    else { setShake(true); setTimeout(() => setShake(false), 400); }
  };

  const next = () => {
    if (qi + 1 < questions.length) { setQi(qi + 1); setSelected(null); }
    else {
      setDone(true);
      if (onProgress) onProgress(10);
    }
  };

  const restart = () => { setQi(0); setSelected(null); setScore(0); setDone(false); };

  if (done) return (
    <div style={{ textAlign: "center", padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
      <div style={{ fontSize: "3.5rem" }}>{score >= questions.length * 0.8 ? "🏆" : score >= questions.length * 0.5 ? "👍" : "📚"}</div>
      <div className="playfair" style={{ fontSize: "1.8rem", fontWeight: 700 }}>Quiz Complete!</div>
      <div style={{ fontSize: "1.2rem", color: "var(--text2)" }}>Score: <strong style={{ color: "var(--text)" }}>{score} / {questions.length}</strong></div>
      <ProgressBar value={score} max={questions.length} color={score >= questions.length * 0.8 ? "var(--correct)" : score >= questions.length * 0.5 ? "var(--accent)" : "var(--incorrect)"} />
      <div style={{ fontSize: "0.9rem", color: "var(--text2)" }}>
        {score === questions.length ? "Perfect score! Ausgezeichnet! 🎉" : score >= questions.length * 0.8 ? "Excellent work! Sehr gut!" : score >= questions.length * 0.5 ? "Good effort! Keep practicing!" : "Keep studying and try again!"}
      </div>
      <Btn onClick={restart}>Try Again</Btn>
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.25rem" }}>
        <span style={{ fontSize: "0.85rem", color: "var(--text2)" }}>Question {qi + 1} of {questions.length}</span>
        <span style={{ fontSize: "0.85rem", color: "var(--text2)" }}>Score: {score}</span>
      </div>
      <ProgressBar value={qi} max={questions.length} />
      <div className={shake ? "shake" : ""} style={{ background: "var(--surface2)", borderRadius: "0.75rem", padding: "1.25rem", border: "1px solid var(--border)" }}>
        <div style={{ fontWeight: 600, fontSize: "1.05rem", lineHeight: 1.5 }}>{q.q}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        {q.options.map((opt, i) => {
          let bg = "var(--surface)";
          let borderColor = "var(--border)";
          let color = "var(--text)";
          let animationClass = "";

          if (selected !== null) {
            if (i === q.answer) {
              bg = "var(--correct-bg)"; borderColor = "var(--correct)"; color = "var(--correct)";
              if (selected === q.answer) animationClass = "confetti-effect";
            } else if (i === selected && selected !== q.answer) {
              bg = "var(--incorrect-bg)"; borderColor = "var(--incorrect)"; color = "var(--incorrect)";
              animationClass = "subtleshake";
            }
          }
          return (
            <button key={i} onClick={() => handleSelect(i)} className={animationClass} style={{
              boxSizing: "border-box", display: "flex", alignItems: "center",
              background: bg, border: `2px solid ${borderColor}`, color, borderRadius: "0.6rem",
              padding: "1rem", textAlign: "left", fontFamily: "IBM Plex Sans, sans-serif",
              fontSize: "0.95rem", cursor: selected !== null ? "default" : "pointer",
              transition: "all 0.2s",
              minHeight: "3.5rem"
            }}>
              <span style={{ color: "var(--text2)", fontFamily: "IBM Plex Mono, monospace", fontSize: "0.85rem", width: "2rem", flexShrink: 0, fontWeight: 500 }}>{["A", "B", "C", "D"][i]}</span>
              <span style={{ flex: 1, lineHeight: 1.4 }}>{opt}</span>
              <span style={{ width: "1.5rem", textAlign: "right", flexShrink: 0, fontWeight: 700, fontSize: "1.1rem" }}>
                {selected !== null && i === q.answer ? " ✓" : (selected !== null && i === selected && selected !== q.answer ? " ✗" : "")}
              </span>
            </button>
          );
        })}
      </div>
      <div style={{ marginTop: "1.2rem", opacity: selected !== null ? 1 : 0, transition: "opacity 0.3s ease", visibility: selected !== null ? "visible" : "hidden" }}>
        <Btn onClick={next} style={{ width: "100%" }}>
          {qi + 1 < questions.length ? "Next Question →" : "See Results"}
        </Btn>
      </div>
    </div>
  );
}

export default QuizSection;
