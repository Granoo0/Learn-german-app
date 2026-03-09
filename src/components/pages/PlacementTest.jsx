import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../common/Card";
import Btn from "../common/Btn";
import ProgressBar from "../common/ProgressBar";

const TEST_QUESTIONS = [
    { q: "Ich bin ___ Berlin.", options: ["aus", "von", "in", "nach"], a: 0, levelHint: "A1" },
    { q: "Wo ___ du?", options: ["wohnt", "wohnst", "wohnen", "wohne"], a: 1, levelHint: "A1" },
    { q: "Ich habe gestern ein Buch ___.", options: ["kaufen", "kaufe", "gekauft", "kaufte"], a: 2, levelHint: "A2" },
    { q: "Er dachte, dass er das Spiel ___.", options: ["gewinnt", "gewonnen hat", "gewonnen hätte", "gewinnen wird"], a: 2, levelHint: "B1" },
    { q: "___ des Regens gingen wir spazieren.", options: ["Trotz", "Wegen", "Während", "Aufgrund"], a: 0, levelHint: "B2" },
    { q: "Es ist unabdingbar, dass der Prozess ___ wird.", options: ["beschleunigt", "beschleunigen", "beschleunigte", "zu beschleunigen"], a: 0, levelHint: "C1" },
];

export default function PlacementTest() {
    const [idx, setIdx] = useState(0);
    const [score, setScore] = useState(0);
    const navigate = useNavigate();

    if (idx >= TEST_QUESTIONS.length) {
        let result = "A1";
        if (score >= 2) result = "A2";
        if (score >= 3) result = "B1";
        if (score >= 4) result = "B2";
        if (score >= 5) result = "C1";
        if (score === 6) result = "C2";

        return (
            <div className="fade-up" style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🎯</div>
                <div className="playfair" style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Test Complete!</div>
                <div style={{ fontSize: "1.2rem", color: "var(--text2)", marginBottom: "1.5rem" }}>
                    Based on your answers, we recommend starting at level <strong style={{ color: "var(--text)" }}>{result}</strong>.
                </div>
                <Btn onClick={() => navigate(`/${result}`)}>Start Level {result}</Btn>
                <div style={{ marginTop: "1rem" }}>
                    <Link to="/" style={{ color: "var(--text2)", textDecoration: "none" }}>Back to Home</Link>
                </div>
            </div>
        );
    }

    const q = TEST_QUESTIONS[idx];

    return (
        <div className="fade-up" style={{ maxWidth: 600, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "1.5rem" }}>
                <Link to="/" style={{ color: "var(--text2)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.4rem", fontFamily: "IBM Plex Sans", fontWeight: 600 }}>
                    ← Back
                </Link>
            </div>
            <Card>
                <div style={{ fontSize: "0.85rem", color: "var(--text2)", marginBottom: "1rem" }}>Question {idx + 1} of {TEST_QUESTIONS.length}</div>
                <ProgressBar value={idx} max={TEST_QUESTIONS.length} />
                <div style={{ fontSize: "1.2rem", fontWeight: 600, margin: "1.5rem 0" }}>{q.q}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {q.options.map((opt, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                if (i === q.a) setScore(s => s + 1);
                                setIdx(idx + 1);
                            }}
                            style={{
                                background: "var(--surface)", border: "2px solid var(--border)", color: "var(--text)",
                                borderRadius: "0.6rem", padding: "1rem", textAlign: "left", fontSize: "1rem", cursor: "pointer",
                                transition: "all 0.2s"
                            }}
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            </Card>
        </div>
    );
}
