import React, { useState, useEffect } from "react";
import Card from "../common/Card";
import Btn from "../common/Btn";
import ProgressBar from "../common/ProgressBar";
import { READING_TEXTS } from "../../data/readingData";
import { READING_QUESTIONS } from "../../data/readingQuestions";
import { useTTS } from "../../utils/useTTS";

function ReadingTab({ level, onBack, onProgress }) {
  const readings = READING_TEXTS[level] || READING_TEXTS.A1;
  const questionSetsRaw = READING_QUESTIONS[level] || READING_QUESTIONS.A1 || [];
  const questionSets = Array.isArray(questionSetsRaw) ? questionSetsRaw : [];

  const [ti, setTi] = useState(0); // text index
  const [qi, setQi] = useState(0);
  const [sel, setSel] = useState(null);
  const [done, setDone] = useState(false);
  const [score, setScore] = useState(0);
  const { speak, stop, playingText } = useTTS();

  const safeTi = Math.min(ti, readings.length - 1);
  const reading = readings[safeTi] || readings[0];
  const questions = questionSets[safeTi] || [];

  // If no questions are defined for this text, show only the reading safely.
  if (!Array.isArray(questions) || !questions.length) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {readings.length > 1 && (
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {readings.map((r, idx) => (
              <Btn
                key={idx}
                small
                variant={idx === safeTi ? "primary" : "ghost"}
                onClick={() => {
                  setTi(idx);
                  setQi(0);
                  setSel(null);
                  setDone(false);
                  setScore(0);
                }}
              >
                {r.shortLabel || `Text ${idx + 1}`}
              </Btn>
            ))}
          </div>
        )}
      <Card hoverLift={false}>
          <div
            style={{
              fontSize: "0.75rem",
              color: "var(--text2)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "0.5rem",
            }}
          >
            Reading Text
          </div>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "0.75rem" }}>
            <div
              className="playfair"
              style={{
                fontSize: "1.15rem",
                fontWeight: 700,
              }}
            >
              {reading.title}
            </div>
            <button
              onClick={() => playingText === reading.text ? stop() : speak(reading.text)}
              style={{
                background: playingText === reading.text ? "var(--incorrect-bg)" : "var(--surface2)",
                color: playingText === reading.text ? "var(--incorrect)" : "var(--text)",
                border: `1px solid ${playingText === reading.text ? 'var(--incorrect)' : 'var(--border)'}`,
                borderRadius: "0.4rem", padding: "0.3rem 0.6rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.85rem", fontWeight: 600,
                transition: "all 0.2s"
              }}
              title={playingText === reading.text ? "Stop reading" : "Read text aloud"}>
              {playingText === reading.text ? "⏹ Stop Reading" : "🔊 Read Aloud"}
            </button>
          </div>
          <div
            style={{
              fontSize: "0.92rem",
              lineHeight: 1.8,
              color: "var(--text2)",
              whiteSpace: "pre-line",
            }}
          >
            {reading.text}
          </div>
        </Card>
        <Card hoverLift={false}>
          <div style={{ fontSize: "0.9rem", color: "var(--text2)" }}>
            No questions available for this text yet.
          </div>
        </Card>
      </div>
    );
  }

  const q = questions[qi];

  const handleSelect = (i) => {
    if (sel !== null) return;
    setSel(i);
    if (i === q.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (qi + 1 < questions.length) {
      setQi(qi + 1);
      setSel(null);
    } else {
      setDone(true);
      if (onProgress) onProgress(15);
    }
  };

  const restart = () => {
    setQi(0);
    setSel(null);
    setDone(false);
    setScore(0);
  };

  const switchText = (idx) => {
    setTi(idx);
    setQi(0);
    setSel(null);
    setDone(false);
    setScore(0);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {readings.length > 1 && (
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {readings.map((r, idx) => (
            <Btn
              key={idx}
              small
              variant={idx === ti ? "primary" : "ghost"}
              onClick={() => switchText(idx)}
            >
              {r.shortLabel || `Text ${idx + 1}`}
            </Btn>
          ))}
        </div>
      )}
      <Card hoverLift={false}>
        <div
          style={{
            fontSize: "0.75rem",
            color: "var(--text2)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "0.5rem",
          }}
        >
          Reading Text
        </div>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "0.75rem" }}>
          <div
            className="playfair"
            style={{
              fontSize: "1.15rem",
              fontWeight: 700,
            }}
          >
            {reading.title}
          </div>
          <button
            onClick={() => playingText === reading.text ? stop() : speak(reading.text)}
            style={{
              background: playingText === reading.text ? "var(--incorrect-bg)" : "var(--surface2)",
              color: playingText === reading.text ? "var(--incorrect)" : "var(--text)",
              border: `1px solid ${playingText === reading.text ? 'var(--incorrect)' : 'var(--border)'}`,
              borderRadius: "0.4rem", padding: "0.3rem 0.6rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.85rem", fontWeight: 600,
              transition: "all 0.2s"
            }}
            title={playingText === reading.text ? "Stop reading" : "Read text aloud"}>
            {playingText === reading.text ? "⏹ Stop Reading" : "🔊 Read Aloud"}
          </button>
        </div>
        <div
          style={{
            fontSize: "0.92rem",
            lineHeight: 1.8,
            color: "var(--text2)",
            whiteSpace: "pre-line",
          }}
        >
          {reading.text}
        </div>
      </Card>
      <div
        style={{
          fontSize: "0.85rem",
          fontWeight: 700,
          color: "var(--text2)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}
      >
        Comprehension Questions
      </div>
      {!questions.length ? (
        <Card hoverLift={false}>
          <div style={{ fontSize: "0.9rem", color: "var(--text2)" }}>
            No questions available for this text yet.
          </div>
        </Card>
      ) : !done ? (
        <Card hoverLift={false}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "0.75rem",
            }}
          >
            <span
              style={{ fontSize: "0.82rem", color: "var(--text2)" }}
            >{`Q ${qi + 1} / ${questions.length}`}</span>
            <span style={{ fontSize: "0.82rem", color: "var(--text2)" }}>
              Score: {score}
            </span>
          </div>
          <ProgressBar value={qi} max={questions.length} />
          <div style={{ fontWeight: 600, margin: "1rem 0 0.75rem" }}>
            {q.q}
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            {q.options.map((opt, i) => {
              let bg = "var(--surface)";
              let borderColor = "var(--border)";
              let color = "var(--text)";
              let animationClass = "";

              if (sel !== null) {
                if (i === q.answer) {
                  bg = "var(--correct-bg)";
                  borderColor = "var(--correct)";
                  color = "var(--correct)";
                  if (sel === q.answer) animationClass = "confetti-effect";
                } else if (i === sel && sel !== q.answer) {
                  bg = "var(--incorrect-bg)";
                  borderColor = "var(--incorrect)";
                  color = "var(--incorrect)";
                  animationClass = "subtleshake";
                }
              }
              return (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className={animationClass}
                  style={{
                    boxSizing: "border-box", display: "flex", alignItems: "center",
                    background: bg,
                    border: `2px solid ${borderColor}`,
                    color,
                    borderRadius: "0.6rem",
                    padding: "1rem",
                    textAlign: "left",
                    fontFamily: "IBM Plex Sans, sans-serif",
                    fontSize: "0.95rem",
                    cursor: sel !== null ? "default" : "pointer",
                    transition: "all 0.2s",
                    minHeight: "3.5rem"
                  }}
                >
                  <span style={{ color: "var(--text2)", fontFamily: "IBM Plex Mono, monospace", fontSize: "0.85rem", width: "2rem", flexShrink: 0, fontWeight: 500 }}>{["A", "B", "C", "D"][i]}</span>
                  <span style={{ flex: 1, lineHeight: 1.4 }}>{opt}</span>
                  <span style={{ width: "1.5rem", textAlign: "right", flexShrink: 0, fontWeight: 700, fontSize: "1.1rem" }}>
                    {sel !== null && i === q.answer ? " ✓" : (sel !== null && i === sel && sel !== q.answer ? " ✗" : "")}
                  </span>
                </button>
              );
            })}
          </div>
          <div style={{ marginTop: "1.2rem", opacity: sel !== null ? 1 : 0, transition: "opacity 0.3s ease", visibility: sel !== null ? "visible" : "hidden" }}>
            <Btn onClick={next} style={{ width: "100%" }}>
              {qi + 1 < questions.length ? "Next Question →" : "Finish"}
            </Btn>
          </div>
        </Card>
      ) : ti + 1 < readings.length ? (
        <Card hoverLift={false} style={{ textAlign: "center" }}>
          <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>📖</div>
          <div
            className="playfair"
            style={{ fontSize: "1.3rem", fontWeight: 700 }}
          >
            Reading complete!
          </div>
          <div
            style={{
              color: "var(--text2)",
              margin: "0.5rem 0 1rem",
            }}
          >
            Score: {score} / {questions.length}
          </div>
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center" }}>
            <Btn variant="ghost" onClick={restart}>Try Again</Btn>
            <Btn onClick={() => switchText(ti + 1)}>Next Text →</Btn>
          </div>
        </Card>
      ) : (
        <Card hoverLift={false} style={{ textAlign: "center", padding: "3rem 1rem" }}>
          <div className="pop" style={{ fontSize: "5rem", marginBottom: "1rem", filter: "drop-shadow(0 10px 20px rgba(200, 149, 44, 0.4))" }}>🏆</div>
          <div
            className="playfair"
            style={{ fontSize: "2rem", fontWeight: 900, color: "var(--accent)", marginBottom: "0.5rem" }}
          >
            Level {level} Complete!
          </div>
          <div
            style={{
              color: "var(--text)",
              fontSize: "1.1rem",
              marginBottom: "1.5rem",
            }}
          >
            You have successfully completed all reading texts for this level. Excellent work!
          </div>
          <Btn onClick={onBack}>Return to Main Page</Btn>
        </Card>
      )}
    </div>
  );
}

export default ReadingTab;
