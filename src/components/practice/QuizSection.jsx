import React, { useState, useEffect } from "react";
import Btn from "../common/Btn";
import { QUIZZES } from "../../data/levelData";
import { useVocabulary } from "../../utils/useVocabulary.jsx";
import { useProgress } from "../../utils/useProgress.jsx";
import ProgressBar from "../common/ProgressBar";

function QuizSection({ level, onProgress }) {
  const baseQuestions = QUIZZES[level] || [];
  const { vocab, loading, error } = useVocabulary(level);
  const [questions, setQuestions] = useState([]);
  const { addXp } = useProgress();
  const [qi, setQi] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [shake, setShake] = useState(false);

  const initQuiz = () => {
    const generated = [];
    if (vocab.length >= 4) {
      for (let i = 0; i < 5; i++) {
        const correct = vocab[Math.floor(Math.random() * vocab.length)];
        const isEnToDe = Math.random() > 0.5;
        let options = [correct];
        let attempts = 0;
        while (options.length < 4 && attempts < 50) {
          attempts++;
          const wrong = vocab[Math.floor(Math.random() * vocab.length)];
          if (!options.find(o => o.german === wrong.german)) options.push(wrong);
        }
        options.sort(() => 0.5 - Math.random());
        
        let targetAnsText = isEnToDe ? correct.german : correct.english;
        // Strip articles from German option choices so it's not a dead giveaway if the prompt has gender
        const optText = (o) => isEnToDe ? o.german.replace(/^(der|die|das)\s+/, "") : o.english;

        if (isEnToDe) {
          generated.push({
            q: `Translate: "${correct.english}"`,
            options: options.map(optText),
            answer: options.indexOf(correct)
          });
        } else {
          generated.push({
            q: `What does "${correct.german.replace(/^(der|die|das)\s+/, "")}" mean?`,
            options: options.map(optText),
            answer: options.indexOf(correct)
          });
        }
      }
    }
    const combined = [...baseQuestions.sort(() => 0.5 - Math.random()).slice(0, 5), ...generated].sort(() => 0.5 - Math.random());
    setQuestions(combined.length > 0 ? combined : baseQuestions);
    setQi(0); setSelected(null); setScore(0); setDone(false);
  };

  useEffect(() => {
    if (loading || error) return;
    initQuiz();
  }, [level, vocab, loading, error]);

  if (loading) return <div>Loading vocabulary...</div>;
  if (error) return <div>Error loading vocabulary.</div>;
  if (questions.length === 0) return null;

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
      addXp(score * 2); // 2 XP per correct answer
    }
  };

  const restart = () => { initQuiz(); };

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
            <button key={i} onClick={() => handleSelect(i)} className={`${animationClass} ${selected === null ? "hover-lift" : ""}`.trim()} style={{
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
