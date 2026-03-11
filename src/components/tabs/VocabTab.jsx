import React, { useState } from "react";
import Card from "../common/Card";
import Btn from "../common/Btn";
import FlashCard from "../practice/FlashCard";
import { useVocabulary } from "../../utils/useVocabulary.jsx";
import { getSrsQueue, recordSrsAnswer } from "../../utils/srsStore";
import { useTTS } from "../../utils/useTTS";
import { useProgress } from "../../utils/useProgress.jsx";

function VocabTab({ level, onProgress }) {
  const { vocab, loading, error } = useVocabulary(level);
  const [mode, setMode] = useState("list"); // list | flash
  const [filter, setFilter] = useState("all");
  const [direction, setDirection] = useState("none");
  const { speak, stop, playingText } = useTTS();
  const [srsQueue, setSrsQueue] = useState([]);
  const [cardsSeen, setCardsSeen] = useState(0);
  const { addXp } = useProgress();

  const filtered = filter === "all" ? vocab : vocab.filter(v => v.pos === filter);
  const posTypes = ["all", ...new Set(vocab.map(v => v.pos))];

  if (loading) return <div style={{ padding: "3rem", textAlign: "center", color: "var(--text2)" }}>Loading vocabulary from database...</div>;
  if (error) return <div style={{ padding: "3rem", textAlign: "center", color: "var(--incorrect)" }}>Failed to load vocabulary.</div>;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
        <Btn small variant={mode === "list" ? "primary" : "ghost"} onClick={() => {
          if (document.startViewTransition) document.startViewTransition(() => setMode("list")); else setMode("list");
        }}>📋 List</Btn>
        <Btn small variant={mode === "flash" ? "primary" : "ghost"} onClick={() => {
          const fn = () => {
            setMode("flash");
            // Initialize SRS queue with filtered words
            const initialQueue = filter === "all" ? [...vocab] : vocab.filter(v => v.pos === filter);
            // Use SRS to sort the queue, putting due words first and unseen later
            setSrsQueue(getSrsQueue(initialQueue));
            setCardsSeen(0);
          };
          if (document.startViewTransition) document.startViewTransition(fn); else fn();
        }}>🃏 Flashcards</Btn>
        <div style={{ flex: 1 }} />
        <span style={{ fontSize: "0.8rem", color: "var(--text2)" }}>{vocab.length} words</span>
      </div>

      {mode === "flash" && srsQueue.length > 0 && (
        <FlashCard
          word={srsQueue[0]}
          total={filtered.length}
          current={cardsSeen}
          direction={direction}
          onGotIt={() => {
            setDirection("left");
            addXp(1); // 1 XP for mastering a card
            setCardsSeen(c => {
              if (c + 1 === filtered.length && onProgress) onProgress(10);
              return Math.min(c + 1, filtered.length);
            });
            recordSrsAnswer(srsQueue[0].german, true);
            // Remove from front of queue
            setSrsQueue(q => q.slice(1));
          }}
          onStillLearning={() => {
            setDirection("right");
            recordSrsAnswer(srsQueue[0].german, false);
            // Move item to back of queue (or insert slightly earlier if queue is long)
            setSrsQueue(q => {
              const item = q[0];
              const rest = q.slice(1);
              // Insert somewhere in the middle (e.g., 3-5 cards back) so they see it again soon
              const insertAt = Math.min(Math.floor(Math.random() * 3) + 3, rest.length);
              rest.splice(insertAt, 0, item);
              return rest;
            });
          }} />
      )}

      {mode === "flash" && srsQueue.length === 0 && (
        <Card style={{ textAlign: "center", padding: "3rem 1rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🌟</div>
          <div className="playfair" style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>All caught up!</div>
          <div style={{ color: "var(--text2)", marginBottom: "1.5rem" }}>You've reviewed all flashcards in this set.</div>
          <Btn onClick={() => setMode("list")}>Back to List</Btn>
        </Card>
      )}

      {mode === "list" && (
        <>
          <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
            {posTypes.map(p => (
              <button key={p} onClick={() => {
                if (document.startViewTransition) document.startViewTransition(() => setFilter(p)); else setFilter(p);
              }} style={{
                border: "1px solid var(--border)", borderRadius: "0.4rem", padding: "3px 10px",
                background: filter === p ? "var(--accent)" : "transparent",
                color: filter === p ? "#fff" : "var(--text2)", cursor: "pointer", fontSize: "0.78rem",
                fontFamily: "IBM Plex Sans, sans-serif", fontWeight: filter === p ? 600 : 400
              }}>{p}</button>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {filtered.map((w, i) => (
              <div key={i} style={{
                background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "0.65rem",
                padding: "0.85rem 1rem", display: "flex", alignItems: "flex-start", gap: "1rem", flexWrap: "wrap"
              }}>
                <div style={{ flex: "0 0 auto", minWidth: 120, display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div>
                    {w.gender && <span style={{ fontSize: "0.78rem", color: "var(--accent)", fontWeight: 700, marginRight: "0.3rem" }}>{w.gender}</span>}
                    <span style={{ fontWeight: 700, fontSize: "1rem" }}>{w.german.replace(/^(der|die|das) /, "")}</span>
                  </div>
                  <button
                    onClick={() => playingText === w.german ? stop() : speak(w.german)}
                    style={{
                      background: playingText === w.german ? "var(--incorrect-bg)" : "none",
                      border: playingText === w.german ? "1px solid var(--incorrect)" : "none",
                      borderRadius: "50%",
                      width: "32px", height: "32px",
                      cursor: "pointer",
                      opacity: playingText === w.german ? 1 : 0.6,
                      fontSize: "1.1rem",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: playingText === w.german ? "var(--incorrect)" : "inherit"
                    }}
                    title={playingText === w.german ? "Stop pronunciation" : "Hear pronunciation"}>
                    {playingText === w.german ? "⏹" : "🔊"}
                  </button>
                </div>
                <div style={{ flex: 1, minWidth: 120 }}>
                  <div style={{ color: "var(--text2)", fontSize: "0.9rem", marginBottom: "0.2rem" }}>{w.english}</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text2)", fontStyle: "italic" }}>{w.example}</div>
                </div>
                <span style={{ fontSize: "0.72rem", color: "var(--text2)", background: "var(--surface2)", padding: "2px 7px", borderRadius: "4px", alignSelf: "flex-start" }}>{w.pos}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default VocabTab;
