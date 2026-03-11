import React, { useState, useEffect } from "react";
import Btn from "../common/Btn";
import ProgressBar from "../common/ProgressBar";
import { useVocabulary } from "../../utils/useVocabulary.jsx";
import { useProgress } from "../../utils/useProgress.jsx";

function WordMatch({ level, onProgress }) {
  const { vocab, loading, error } = useVocabulary(level);
  const [pairs, setPairs] = useState([]);
  const [shuffledEnglish, setShuffledEnglish] = useState([]);
  const [selectedGerman, setSelectedGerman] = useState(null);
  const [selectedEnglish, setSelectedEnglish] = useState(null);
  const [matched, setMatched] = useState([]);
  const [wrong, setWrong] = useState(false);
  const [done, setDone] = useState(false);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const { addXp } = useProgress();

  const restart = () => {
    if (!vocab || vocab.length === 0) return;
    const shuffled = [...vocab].sort(() => 0.5 - Math.random()).slice(0, 6);
    const newPairs = shuffled.map(w => ({ german: w.german.replace(/^(der|die|das)\s+/, ""), english: w.english }));
    setPairs(newPairs);
    setShuffledEnglish([...newPairs.map(p => p.english)].sort(() => 0.5 - Math.random()));
    setMatched([]); setSelectedGerman(null); setSelectedEnglish(null); setDone(false); setScore(0); setAttempts(0);
  };

  useEffect(() => {
    if (!loading && !error && vocab.length > 0) {
      restart();
    }
  }, [level, vocab, loading, error]);

  useEffect(() => {
    if (selectedGerman && selectedEnglish) {
      setAttempts(a => a + 1);
      const pair = pairs.find(p => p.german === selectedGerman);
      if (pair && pair.english === selectedEnglish) {
        const newMatched = [...matched, selectedGerman];
        setMatched(newMatched);
        setScore(s => s + 1);
        setSelectedGerman(null); setSelectedEnglish(null);
        if (newMatched.length === pairs.length) {
          setTimeout(() => {
            setDone(true);
            if (onProgress) onProgress(10);
            addXp(pairs.length * 2); // 2 XP per pair
          }, 400);
        }
      } else {
        setWrong(true);
        setTimeout(() => { setSelectedGerman(null); setSelectedEnglish(null); setWrong(false); }, 700);
      }
    }
  }, [selectedGerman, selectedEnglish, pairs, matched, onProgress]);

  if (pairs.length === 0) return null;

  const germanWords = pairs.map(p => p.german);

  if (done) return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>🎯</div>
      <div className="playfair" style={{ fontSize: "1.5rem", fontWeight: 700 }}>All matched!</div>
      <div style={{ color: "var(--text2)", margin: "0.5rem 0 1rem" }}>Matched {pairs.length} pairs in {attempts} attempts</div>
      <Btn onClick={restart}>Play Again</Btn>
    </div>
  );

  const isGermanMatched = (w) => {
    return matched.includes(w);
  };
  const isEnglishMatched = (e) => {
    const pair = pairs.find(p => p.english === e);
    return pair && matched.includes(pair.german);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "0.85rem", color: "var(--text2)" }}>Match {pairs.length} pairs</span>
        <span style={{ fontSize: "0.85rem", color: "var(--text2)" }}>{matched.length} / {pairs.length} ✓</span>
      </div>
      <ProgressBar value={matched.length} max={pairs.length} color="var(--correct)" />
      <div style={{ fontSize: "0.82rem", color: "var(--text2)", textAlign: "center" }}>Tap a German word, then its English translation</div>
      {wrong && <div className="shake" style={{ textAlign: "center", color: "var(--incorrect)", fontWeight: 600 }}>✗ Not a match, try again!</div>}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <div style={{ fontSize: "0.75rem", color: "var(--text2)", textAlign: "center", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.25rem" }}>Deutsch</div>
          {germanWords.map((w, i) => (
            <div key={i} onClick={() => !isGermanMatched(w) && setSelectedGerman(w)} className={`match-item ${selectedGerman === w ? "selected" : ""} ${isGermanMatched(w) ? "matched" : "hover-lift"}`}
              style={{ background: "var(--surface)", border: "1.5px solid var(--border)", borderRadius: "0.5rem", padding: "0.6rem 0.8rem", fontSize: "0.9rem", fontWeight: 500, textAlign: "center", cursor: isGermanMatched(w) ? "default" : "pointer", opacity: isGermanMatched(w) ? 0.4 : 1 }}>
              {isGermanMatched(w) ? "✓ " : ""}{w}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <div style={{ fontSize: "0.75rem", color: "var(--text2)", textAlign: "center", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.25rem" }}>English</div>
          {shuffledEnglish.map((e, i) => (
            <div key={i} onClick={() => !isEnglishMatched(e) && setSelectedEnglish(e)} className={`match-item ${selectedEnglish === e ? "selected" : ""} ${isEnglishMatched(e) ? "matched" : "hover-lift"}`}
              style={{ background: "var(--surface)", border: "1.5px solid var(--border)", borderRadius: "0.5rem", padding: "0.6rem 0.8rem", fontSize: "0.9rem", textAlign: "center", cursor: isEnglishMatched(e) ? "default" : "pointer", opacity: isEnglishMatched(e) ? 0.4 : 1 }}>
              {isEnglishMatched(e) ? "✓ " : ""}{e}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WordMatch;
