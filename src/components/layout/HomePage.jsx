import React from "react";
import { Link } from "react-router-dom";
import Badge from "../common/Badge";
import ProgressBar from "../common/ProgressBar";
import { LEVEL_META, VOCAB_COUNT, LEVELS, GRAMMAR } from "../../data/levelData";
import { useProgress } from "../../utils/useProgress.jsx";

function HomePage({ progress }) {
  const levels = LEVELS;
  const { progress: xpProgress } = useProgress();

  return (
    <div>
      {/* Gamification Header */}
      <div className="fade-up" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--surface)", border: "1.5px solid var(--border)", borderRadius: "1rem", padding: "1rem 1.5rem", marginBottom: "2rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{ fontSize: "1.8rem", filter: xpProgress.streakActiveToday ? "drop-shadow(0 0 8px rgba(240, 180, 41, 0.6))" : "grayscale(0.6) opacity(0.5)" }}>🔥</div>
          <div>
            <div style={{ fontSize: "0.75rem", color: "var(--text2)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>Streak</div>
            <div style={{ fontSize: "1.2rem", fontWeight: 700, color: xpProgress.streakActiveToday ? "var(--text)" : "var(--text2)" }}>{xpProgress.streak} Days</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{ fontSize: "1.8rem", filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}>⭐</div>
          <div>
            <div style={{ fontSize: "0.75rem", color: "var(--text2)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, textAlign: "right" }}>Daily XP</div>
            <div style={{ fontSize: "1.2rem", fontWeight: 700, textAlign: "right" }}>
              {xpProgress.dailyXp} <span style={{ fontSize: "0.9rem", color: "var(--text2)", fontWeight: 500 }}>/ 50</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div style={{ textAlign: "center", padding: "2rem 0 1.5rem", position: "relative" }}>
        <div style={{ display: "inline-block", background: "var(--accent)", color: "#fff", borderRadius: "0.5rem", padding: "4px 12px", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>Lernen mit Granit</div>
        <div className="playfair" style={{ fontSize: "clamp(2rem, 6vw, 3.2rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "0.75rem" }}>
          Dein Weg zum<br />
          <span style={{ color: "var(--accent)" }}>Deutschen.</span>
        </div>
        <p style={{ color: "var(--text2)", fontSize: "1rem", maxWidth: 480, margin: "0 auto 1.5rem" }}>
          Learn German from beginner to mastery with structured lessons, interactive quizzes, and real content — all six CEFR levels.
        </p>
        <div className="fade-up" style={{ display: "flex", gap: "1rem", justifyContent: "center", marginBottom: "1.5rem", flexWrap: "wrap", fontFamily: "IBM Plex Sans", animationDelay: "0.15s" }}>
          <Link to="/test" className="hover-lift" style={{
            background: "var(--accent)", color: "#fff", padding: "0.8rem 1.5rem", borderRadius: "0.6rem",
            fontWeight: 700, textDecoration: "none", fontSize: "1rem",
            boxShadow: "0 4px 12px rgba(200, 149, 44, 0.2)"
          }}>📝 Placement test</Link>
          <Link to="/practice" className="hover-lift" style={{
            background: "var(--surface)", color: "var(--text)", border: "2px solid var(--border)",
            padding: "0.8rem 1.5rem", borderRadius: "0.6rem", fontWeight: 700, textDecoration: "none",
            fontSize: "1rem"
          }}>🎯 Grammar Practice</Link>
        </div>
        <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", flexWrap: "wrap" }}>
          {[`25+ grammar topics`, `250+ vocabulary`, `500+ practice questions`, "Dark mode"].map(f => (
            <span key={f} style={{ fontSize: "0.78rem", padding: "4px 10px", borderRadius: "4px", background: "var(--surface2)", border: "1px solid var(--border)", color: "var(--text2)" }}>{f}</span>
          ))}
        </div>
      </div>

      {/* Decorative divider */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "1.5rem 0" }}>
        <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
        <span style={{ fontSize: "0.8rem", color: "var(--text2)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>Choose your level</span>
        <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
      </div>

      {/* Level cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
        {levels.map((lvl, i) => {
          const meta = LEVEL_META[lvl];
          const vocabCount = VOCAB_COUNT[lvl] || 0;

          const grammar = GRAMMAR[lvl] || [];
          const prog = progress[lvl] || 0;
          return (
            <Link key={lvl} to={`/${lvl}`} className="fade-up" style={{ animationDelay: `${i * 0.06}s`, display: "flex", flexDirection: "column", textDecoration: "none", color: "inherit" }}>
              <div className="hover-lift" style={{
                background: "var(--surface)", border: "1.5px solid var(--border)", borderRadius: "1rem",
                padding: "1.5rem", cursor: "pointer", position: "relative", overflow: "hidden",
                display: "flex", flexDirection: "column", flex: 1
              }}>
                {/* Accent stripe */}
                <div style={{ position: "absolute", top: 0, left: 0, width: "4px", height: "100%", background: meta.color }} />
                <div style={{ paddingLeft: "0.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                    <Badge level={lvl} />
                    <span style={{ fontSize: "1.2rem", color: "var(--text)" }}>{i === 0 ? "🌱" : i === 1 ? "🌿" : i === 2 ? "🌳" : i === 3 ? "🔥" : i === 4 ? "⚡" : "💎"}</span>
                  </div>
                  <div className="playfair" style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.25rem", color: "var(--text)" }}>{meta.name}</div>
                  <p style={{ fontSize: "0.85rem", color: "var(--text2)", lineHeight: 1.5, marginBottom: "1rem", flex: 1 }}>{meta.desc}</p>
                  <div style={{ display: "flex", gap: "1rem", fontSize: "0.78rem", color: "var(--text2)", marginBottom: "0.75rem", marginTop: "auto" }}>
                    <span>📚 {vocabCount}+ words</span>
                    <span>📐 {grammar.length} grammar</span>
                    <span>🧩 50+ questions</span>
                  </div>
                  {prog > 0 && (
                    <div style={{ marginTop: "auto" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--text2)", marginBottom: "0.3rem" }}>
                        <span>Progress</span><span>{prog}%</span>
                      </div>
                      <ProgressBar value={prog} max={100} color={meta.color} />
                    </div>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Footer info */}
      <div style={{ marginTop: "2rem", padding: "1.5rem", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "1rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem", textAlign: "center" }}>
        {[["6", "CEFR Levels"], ["250+", "Vocabulary Words"], ["25+", "Grammar Topics"], ["500+", "Practice Questions"]].map(([n, label]) => (
          <div key={label}>
            <div className="playfair" style={{ fontSize: "2rem", fontWeight: 900, color: "var(--accent)" }}>{n}</div>
            <div style={{ fontSize: "0.8rem", color: "var(--text2)" }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
