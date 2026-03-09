import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import FontLink from "./styles/FontLink";
import HomePage from "./components/layout/HomePage";
import LevelPage from "./components/layout/LevelPage";
import Badge from "./components/common/Badge";
import PlacementTest from "./components/pages/PlacementTest";
import GrammarPractice from "./components/pages/GrammarPractice";

function AppContent() {
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem("lernpfad-dark") === "true"; } catch { return false; }
  });
  const [progress, setProgress] = useState(() => {
    try { return JSON.parse(localStorage.getItem("lernpfad-progress") || "{}"); } catch { return {}; }
  });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.className = dark ? "dark" : "";
    try { localStorage.setItem("lernpfad-dark", dark); } catch { }
  }, [dark]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleUpdateProgress = (lvl, increment) => {
    setProgress(p => {
      const current = p[lvl] || 0;
      const updated = { ...p, [lvl]: Math.min(100, current + increment) };
      try { localStorage.setItem("lernpfad-progress", JSON.stringify(updated)); } catch { }
      return updated;
    });
  };

  const isHome = location.pathname === "/";

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)" }}>
      <FontLink />

      {/* Navigation */}
      <nav style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 1rem", display: "flex", alignItems: "center", height: "56px", gap: "1rem" }}>
          <Link to="/" style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
            <div style={{ width: 28, height: 28, background: "var(--accent)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontSize: "0.9rem", fontWeight: 900, fontFamily: "Playfair Display, serif" }}>L</span>
            </div>
            <span className="playfair" style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text)" }}>Lernen mit Granit</span>
          </Link>
          <div style={{ flex: 1 }} />
          <button onClick={() => setDark(d => !d)} style={{
            background: "var(--surface2)", border: "1px solid var(--border)", borderRadius: "0.5rem",
            padding: "0.3rem 0.7rem", cursor: "pointer", fontSize: "1rem", color: "var(--text)"
          }}>
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>

      {/* Main content */}
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "1.5rem 1rem 3rem", position: "relative" }}>
        <Routes>
          <Route path="/" element={<HomePage progress={progress} />} />
          <Route path="/test" element={<PlacementTest />} />
          <Route path="/practice" element={<GrammarPractice />} />
          <Route path="/:level" element={<LevelPage onProgress={handleUpdateProgress} />} />
          <Route path="/:level/:tabId" element={<LevelPage onProgress={handleUpdateProgress} />} />
        </Routes>
      </main>

      {/* Footer */}
      {isHome && (
        <footer style={{ borderTop: "1px solid var(--border)", padding: "1.5rem 1rem", textAlign: "center", color: "var(--text2)", fontSize: "0.8rem" }}>
          <span style={{ fontWeight: 700, color: "var(--text)" }}>Lernen mit Granit</span> · A German Learning Platform · Built with React
          <br />
          <span style={{ opacity: 0.7 }}>Content covers CEFR levels A1–C2 · Progress saved locally</span>
        </footer>
      )}

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        title="Go to the top"
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: "var(--accent)",
          color: "#fff",
          border: "none",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5rem",
          zIndex: 100,
          opacity: showScrollTop ? 1 : 0,
          visibility: showScrollTop ? "visible" : "hidden",
          pointerEvents: showScrollTop ? "auto" : "none",
          transition: "transform 0.2s, background 0.2s, opacity 0.3s ease, visibility 0.3s ease"
        }}
        onMouseEnter={(e) => { if (showScrollTop) e.currentTarget.style.transform = "translateY(-4px) scale(1.05)"; }}
        onMouseLeave={(e) => { if (showScrollTop) e.currentTarget.style.transform = "translateY(0) scale(1)"; }}
      >
        ↑
      </button>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

