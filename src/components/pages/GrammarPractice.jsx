import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../common/Card";
import Btn from "../common/Btn";
import ProgressBar from "../common/ProgressBar";
import { GRAMMAR_PRACTICE_DATA } from "../../data/grammarPracticeData";

export default function GrammarPractice() {
    const [questions, setQuestions] = useState([]);
    const [idx, setIdx] = useState(0);
    const [inputVal, setInputVal] = useState("");
    const [feedback, setFeedback] = useState(null);
    const [score, setScore] = useState(0);

    useEffect(() => {
        const shuffled = [...GRAMMAR_PRACTICE_DATA].sort(() => 0.5 - Math.random());
        setQuestions(shuffled);
    }, []);

    const next = () => {
        setIdx(prev => prev + 1);
        setFeedback(null);
        setInputVal("");
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Enter" && feedback !== null) {
                e.preventDefault();
                next();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [feedback]);

    if (questions.length === 0) return null;

    if (idx >= questions.length || idx >= 15) { // Stop after 15 questions per practice session to keep it engaging
        return (
            <div className="fade-up" style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🏆</div>
                <div className="playfair" style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Practice Finished!</div>
                <div style={{ fontSize: "1.2rem", color: "var(--text2)", marginBottom: "1.5rem" }}>
                    You scored {score} out of {Math.min(questions.length, 15)}. Great job practicing your cases!
                </div>
                <Btn onClick={() => {
                    const shuffled = [...GRAMMAR_PRACTICE_DATA].sort(() => 0.5 - Math.random());
                    setQuestions(shuffled);
                    setIdx(0);
                    setScore(0);
                    setFeedback(null);
                    setInputVal("");
                }}>Practice Again</Btn>
                <div style={{ marginTop: "1rem" }}>
                    <Link to="/" style={{ color: "var(--text2)", textDecoration: "none" }}>Back to Home</Link>
                </div>
            </div>
        );
    }

    const q = questions[idx];

    const checkAnswer = (e) => {
        e.preventDefault();
        if (!inputVal.trim()) return;
        const isCorrect = q.a.includes(inputVal.trim().toLowerCase());

        setFeedback(isCorrect ? "correct" : "incorrect");
        if (isCorrect) setScore(s => s + 1);
    };

    return (
        <div className="fade-up" style={{ maxWidth: 600, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "1.5rem" }}>
                <Link to="/" style={{ color: "var(--text2)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.4rem", fontFamily: "IBM Plex Sans", fontWeight: 600 }}>
                    ← Back
                </Link>
            </div>
            <Card hoverLift={false} style={{ padding: "2rem" }}>
                <div style={{ fontSize: "0.85rem", color: "var(--text2)", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 700 }}>Grammar Cases Practice</div>
                <ProgressBar value={idx} max={Math.min(questions.length, 15)} />

                <div style={{ fontSize: "1.4rem", fontWeight: 600, margin: "2rem 0 1rem", textAlign: "center" }}>{q.q}</div>
                <div style={{ fontSize: "0.9rem", color: "var(--text2)", marginBottom: "1.5rem", textAlign: "center", fontStyle: "italic" }}>💡 Hint: {q.hint}</div>

                <form onSubmit={checkAnswer} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <input
                        type="text"
                        value={inputVal}
                        onChange={e => setInputVal(e.target.value)}
                        disabled={feedback !== null}
                        placeholder="Type your answer..."
                        autoFocus
                        style={{
                            padding: "1rem", fontSize: "1.2rem", borderRadius: "0.5rem", textAlign: "center",
                            border: `2px solid ${feedback === 'correct' ? 'var(--correct)' : feedback === 'incorrect' ? 'var(--incorrect)' : 'var(--border)'}`,
                            background: feedback === 'correct' ? 'var(--correct-bg)' : feedback === 'incorrect' ? 'var(--incorrect-bg)' : 'var(--bg)',
                            color: "var(--text)", outline: "none", fontFamily: "inherit"
                        }}
                    />
                    {!feedback ? (
                        <Btn submit disabled={!inputVal.trim()} style={{ width: "100%" }}>Check Answer</Btn>
                    ) : (
                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", animation: "slideUp 0.3s ease-out" }}>
                            <div style={{ textAlign: "center", padding: "1rem", borderRadius: "0.5rem", background: feedback === "correct" ? "var(--correct-bg)" : "var(--incorrect-bg)", border: `1px solid ${feedback === "correct" ? "var(--correct)" : "var(--incorrect)"}` }}>
                                {feedback === "correct" ? (
                                    <div style={{ color: "var(--correct)", fontWeight: 700 }}>✅ Correct!</div>
                                ) : (
                                    <div style={{ textAlign: "left" }}>
                                        <div style={{ color: "var(--incorrect)", fontWeight: 700, textAlign: "center", marginBottom: "0.5rem" }}>❌ Incorrect.</div>
                                        <div style={{ marginTop: "0.5rem", fontSize: "0.95rem", textAlign: "center" }}>Accepted answers: <strong style={{ color: "var(--text)" }}>{q.a.join(" / ")}</strong></div>
                                        {q.exp && (
                                            <div style={{ marginTop: "1.2rem", padding: "1rem", background: "rgba(230, 57, 70, 0.08)", borderLeft: "4px solid var(--incorrect)", borderRadius: "0 0.5rem 0.5rem 0", fontSize: "0.95rem", lineHeight: 1.5 }}>
                                                💡 <strong style={{ color: "var(--text)" }}>Why is this the answer?</strong><br />
                                                <span style={{ color: "var(--text2)" }}>{q.exp}</span>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                            <Btn onClick={next} style={{ width: "100%" }}>Next Question →</Btn>
                        </div>
                    )}
                </form>
            </Card>
        </div>
    );
}
