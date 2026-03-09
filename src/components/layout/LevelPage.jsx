import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import VocabTab from "../tabs/VocabTab";
import GrammarTab from "../tabs/GrammarTab";
import PracticeTab from "../tabs/PracticeTab";
import ReadingTab from "../tabs/ReadingTab";
import Badge from "../common/Badge";
import { LEVEL_META } from "../../data/levelData";
function LevelPage({ onProgress }) {
  const { level, tabId } = useParams();
  const navigate = useNavigate();
  const tab = tabId || "vocab";

  // Default fallback if level is invalid
  const meta = LEVEL_META[level] || LEVEL_META["A1"];
  const safeLevel = LEVEL_META[level] ? level : "A1";

  const handleProgress = (increment) => {
    if (onProgress) onProgress(safeLevel, increment);
  };

  return (
    <div className="fade-up">
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
        <Link to="/" style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text2)", fontSize: "1.2rem", display: "flex", alignItems: "center", gap: "0.3rem", fontFamily: "IBM Plex Sans", padding: "0.3rem 0", textDecoration: "none" }}>
          ← Back
        </Link>
        <div style={{ flex: 1 }} />
        <Badge level={safeLevel} />
      </div>
      <div style={{ marginBottom: "1.5rem" }}>
        <div className="playfair" style={{ fontSize: "1.8rem", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.2 }}>{meta.label}</div>
        <div style={{ fontSize: "1rem", color: "var(--text2)", marginTop: "0.25rem" }}>{meta.name} · {meta.desc}</div>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: "0", borderBottom: "1px solid var(--border)", marginBottom: "1.5rem", flexWrap: "wrap" }}>
        {[["vocab", "📚 Vocabulary"], ["grammar", "📐 Grammar"], ["practice", "🎯 Practice"], ["reading", "📖 Reading"]].map(([t, label]) => (
          <Link key={t} to={`/${safeLevel}/${t}`} className={`tab-btn ${tab === t ? "active" : ""}`} style={{
            background: "none", border: "none", borderBottom: tab === t ? "2px solid var(--accent)" : "2px solid transparent",
            padding: "0.7rem 1rem", cursor: "pointer", marginBottom: "-1px", textDecoration: "none",
            fontFamily: "IBM Plex Sans", fontWeight: 600, fontSize: "0.9rem",
            color: tab === t ? "var(--accent)" : "var(--text2)", whiteSpace: "nowrap", transition: "color 0.2s, border-color 0.2s"
          }}>{label}</Link>
        ))}
      </div>

      <div key={tab} className="fade-up">
        {tab === "vocab" && <VocabTab level={safeLevel} onProgress={handleProgress} />}
        {tab === "grammar" && <GrammarTab level={safeLevel} onProgress={handleProgress} />}
        {tab === "practice" && <PracticeTab level={safeLevel} onProgress={handleProgress} />}
        {tab === "reading" && <ReadingTab level={safeLevel} onBack={() => navigate("/")} onProgress={handleProgress} />}
      </div>
    </div>
  );
}

export default LevelPage;
