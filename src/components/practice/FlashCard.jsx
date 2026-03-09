import React, { useState, useEffect } from "react";
import Btn from "../common/Btn";
import ProgressBar from "../common/ProgressBar";
import { useTTS } from "../../utils/useTTS";

function FlashCard({ word, onGotIt, onStillLearning, total, current, direction }) {
  const [flipped, setFlipped] = useState(false);
  const [animateKey, setAnimateKey] = useState(0);
  const { speak, stop, playingText } = useTTS();

  useEffect(() => {
    setFlipped(false);
    setAnimateKey(k => k + 1);
  }, [word]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
      <div style={{ fontSize: "0.85rem", color: "var(--text2)" }}>{current + 1} / {total}</div>
      <ProgressBar value={current + 1} max={total} />
      <div className={`card-flip-container ${direction === "left" ? "slide-left" : direction === "right" ? "slide-right" : ""}`} key={animateKey} style={{ width: "100%", maxWidth: 420 }} onClick={() => setFlipped(f => !f)}>
        <div className={`card-flip-inner ${flipped ? "flipped" : ""}`} style={{ minHeight: 200 }}>
          {/* Front */}
          <div className="card-face" style={{
            position: "absolute", width: "100%", minHeight: 200,
            background: "var(--surface)", border: "2px solid var(--border)", borderRadius: "1rem",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", gap: "0.5rem"
          }}>
            <div style={{ fontSize: "0.75rem", color: "var(--text2)", textTransform: "uppercase", letterSpacing: "0.1em" }}>German</div>
            {word.gender && <span style={{ fontSize: "1rem", color: "var(--accent)", fontWeight: 600 }}>{word.gender}</span>}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <div className="playfair" style={{ fontSize: "2rem", fontWeight: 700, color: "var(--text)", textAlign: "center" }}>{word.german.replace(/^(der|die|das) /, "")}</div>
              <button
                onClick={(e) => { e.stopPropagation(); playingText === word.german ? stop() : speak(word.german); }}
                style={{
                  background: playingText === word.german ? "var(--incorrect-bg)" : "var(--surface2)",
                  border: `1px solid ${playingText === word.german ? 'var(--incorrect)' : 'var(--border)'}`,
                  color: playingText === word.german ? "var(--incorrect)" : "inherit",
                  borderRadius: "50%", width: "36px", height: "36px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem",
                  transition: "all 0.2s"
                }}
                title={playingText === word.german ? "Stop pronunciation" : "Hear pronunciation"}>
                {playingText === word.german ? "⏹" : "🔊"}
              </button>
            </div>
            <div style={{ fontSize: "0.8rem", color: "var(--text2)", background: "var(--surface2)", borderRadius: "0.5rem", padding: "0.4rem 0.8rem", marginTop: "0.5rem", textAlign: "center", fontStyle: "italic" }}>{word.example}</div>
            <div style={{ marginTop: "0.8rem", fontSize: "0.78rem", color: "var(--text2)" }}>Tap to reveal</div>
          </div>
          {/* Back */}
          <div className="card-face card-back" style={{
            position: "absolute", width: "100%", minHeight: 200,
            background: "var(--accent2)", border: "2px solid var(--accent)", borderRadius: "1rem",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", gap: "0.5rem"
          }}>
            <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: "0.1em" }}>English</div>
            <div className="playfair" style={{ fontSize: "2rem", fontWeight: 700, color: "#fff", textAlign: "center" }}>{word.english}</div>
            <span style={{ fontSize: "0.8rem", background: "rgba(255,255,255,0.15)", color: "#fff", padding: "2px 10px", borderRadius: "4px" }}>{word.pos}</span>
          </div>
        </div>
        {/* Spacer for height */}
        <div style={{ minHeight: 200, visibility: "hidden" }} />
      </div>
      <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap", width: "100%", maxWidth: 420 }}>
        {!flipped ? (
          <Btn style={{ width: "100%" }} onClick={() => setFlipped(true)}>Show English</Btn>
        ) : (
          <>
            {onStillLearning && <Btn style={{ flex: 1 }} variant="ghost" onClick={() => { setFlipped(false); onStillLearning(); }}>❌ Still Learning</Btn>}
            {onGotIt && <Btn style={{ flex: 1 }} variant="primary" onClick={() => { setFlipped(false); onGotIt(); }}>✅ Got It</Btn>}
          </>
        )}
      </div>
    </div>
  );
}

export default FlashCard;
