import React, { useState } from "react";
import Btn from "../common/Btn";
import ProgressBar from "../common/ProgressBar";
import { FILL_BLANK } from "../../data/levelData";

function FillBlank({ level, onProgress }) {
  const sentences = FILL_BLANK[level] || FILL_BLANK.A1;
  const [si, setSi] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const s = sentences[si];

  const handleSelect = (opt) => {
    if (selected !== null) return;
    setSelected(opt);
    if (opt === s.blank) setScore(x => x + 1);
  };

  const next = () => {
    if (si + 1 < sentences.length) { setSi(si + 1); setSelected(null); }
    else {
      setDone(true);
      if (onProgress) onProgress(10);
    }
  };

  const restart = () => { setSi(0); setSelected(null); setScore(0); setDone(false); };

  if (done) return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📝</div>
      <div className="playfair" style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Fill-in-Blank Done!</div>
      <div style={{ fontSize: "1.1rem", color: "var(--text2)", marginBottom: "1rem" }}>Score: {score} / {sentences.length}</div>
      <Btn onClick={restart}>Try Again</Btn>
    </div>
  );

  const parts = s.sentence.split("___");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: "0.85rem", color: "var(--text2)" }}>{si + 1} / {sentences.length}</span>
        <span style={{ fontSize: "0.85rem", color: "var(--text2)" }}>Score: {score}</span>
      </div>
      <ProgressBar value={si} max={sentences.length} />
      <div style={{ background: "var(--surface2)", borderRadius: "0.75rem", padding: "1.5rem", border: "1px solid var(--border)", textAlign: "center" }}>
        <div style={{ fontSize: "1.15rem", fontWeight: 500, lineHeight: 2 }}>
          {parts[0]}
          <span style={{
            display: "inline-block", minWidth: "80px", borderBottom: `2px solid ${selected ? (selected === s.blank ? "var(--correct)" : "var(--incorrect)") : "var(--accent)"}`,
            padding: "0 0.5rem", fontWeight: 700, color: selected ? (selected === s.blank ? "var(--correct)" : "var(--incorrect)") : "var(--accent2)",
            fontFamily: "IBM Plex Mono, monospace",
          }}>
            {selected || "　　　"}
          </span>
          {parts[1]}
        </div>
        <div style={{ fontSize: "0.8rem", color: "var(--text2)", marginTop: "0.75rem", fontStyle: "italic" }}>💡 Hint: {s.hint}</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
        {s.options.map((opt, i) => {
          let bg = "var(--surface)", border = "1px solid var(--border)", color = "var(--text)";
          if (selected) {
            if (opt === s.blank) { bg = "var(--correct-bg)"; border = "1.5px solid var(--correct)"; color = "var(--correct)"; }
            else if (opt === selected) { bg = "var(--incorrect-bg)"; border = "1.5px solid var(--incorrect)"; color = "var(--incorrect)"; }
          }
          return (
            <button key={i} onClick={() => handleSelect(opt)} style={{
              background: bg, border, color, borderRadius: "0.5rem", padding: "0.65rem",
              fontFamily: "IBM Plex Mono, monospace", fontSize: "0.95rem", fontWeight: 600,
              cursor: selected ? "default" : "pointer", transition: "all 0.2s"
            }}>{opt}</button>
          );
        })}
      </div>
      {selected && <Btn onClick={next}>{si + 1 < sentences.length ? "Next →" : "Finish"}</Btn>}
    </div>
  );
}

export default FillBlank;
