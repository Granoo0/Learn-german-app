import React, { useState, useEffect, useRef } from "react";
import Btn from "../common/Btn";
import ProgressBar from "../common/ProgressBar";
import { useVocabulary } from "../../utils/useVocabulary.jsx";
import { useTTS } from "../../utils/useTTS";
import { useProgress } from "../../utils/useProgress.jsx";
import { getSrsQueue, recordSrsAnswer } from "../../utils/srsStore";

function TypingPractice({ level, onProgress }) {
    const { vocab, loading, error } = useVocabulary(level);
    const [queue, setQueue] = useState([]);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [inputVal, setInputVal] = useState("");
    const [feedback, setFeedback] = useState(null); // null | "correct" | "incorrect"
    const [score, setScore] = useState(0);
    const { speak, stop, playingText } = useTTS();
    const { addXp } = useProgress();
    const inputRef = useRef(null);

    useEffect(() => {
        if (loading || error) return;
        
        // Use SRS queue, fallback to random if empty
        const srsSorted = getSrsQueue(vocab).slice(0, 5); // 5 typing words per session
        setQueue(srsSorted);
        setCurrentIdx(0);
        setScore(0);
        setFeedback(null);
        setInputVal("");
    }, [vocab, level, loading, error]);

    if (loading) return <div style={{ padding: "3rem", textAlign: "center", color: "var(--text2)" }}>Loading typing practice...</div>;
    if (error) return <div style={{ padding: "3rem", textAlign: "center", color: "var(--incorrect)" }}>Failed to load typing data.</div>;
    if (queue.length === 0) return null;

    const currentWord = queue[currentIdx];

    const checkAnswer = (e) => {
        if (e) e.preventDefault();
        if (!inputVal.trim()) return;

        // Check against german word (case insensitive for simplicity, but could be strict)
        // Remove articles from the strict check, but ideally they type the whole thing
        const target = currentWord.german.toLowerCase().trim();
        const typed = inputVal.toLowerCase().trim();

        // Accept either exactly "der hund" or just "hund"
        const targetNoArticle = target.replace(/^(der|die|das)\s+/, "");

        if (typed === target || typed === targetNoArticle) {
            setFeedback("correct");
            setScore(s => s + 1);
            speak(currentWord.german);
            recordSrsAnswer(currentWord.german, true);
        } else {
            setFeedback("incorrect");
            recordSrsAnswer(currentWord.german, false);
        }
    };

    const nextWord = () => {
        if (currentIdx + 1 < queue.length) {
            setCurrentIdx(i => i + 1);
            setFeedback(null);
            setInputVal("");
            setTimeout(() => inputRef.current?.focus(), 50);
        } else {
            // Finished
            setFeedback("finished");
            if (onProgress) onProgress(score > 5 ? 15 : 5);
            addXp(score * 2); // 2 XP per correct word
        }
    };

    if (feedback === "finished") {
        return (
            <div style={{ textAlign: "center", padding: "2rem 1rem" }}>
                <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>⌨️</div>
                <div className="playfair" style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "0.5rem" }}>Practice Complete!</div>
                <div style={{ color: "var(--text2)", marginBottom: "1.5rem" }}>You scored {score} out of {queue.length}.</div>
                <Btn onClick={() => {
                    const shuffled = [...vocab].sort(() => 0.5 - Math.random()).slice(0, 10);
                    setQueue(shuffled);
                    setCurrentIdx(0);
                    setScore(0);
                    setFeedback(null);
                    setInputVal("");
                }}>Practice Again</Btn>
            </div>
        );
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", alignItems: "center", width: "100%", maxWidth: 500, margin: "0 auto" }}>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-between", fontSize: "0.85rem", color: "var(--text2)" }}>
                <span>Word {currentIdx + 1} of {queue.length}</span>
                <span>Score: {score}</span>
            </div>
            <ProgressBar value={currentIdx} max={queue.length} />

            <div style={{
                width: "100%", background: "var(--surface)", border: "2px solid var(--border)",
                borderRadius: "1rem", padding: "2rem", display: "flex", flexDirection: "column",
                alignItems: "center", gap: "1.5rem", position: "relative"
            }}>
                <div style={{ fontSize: "0.8rem", color: "var(--text2)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Translate to German</div>

                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div className="playfair" style={{ fontSize: "2.2rem", fontWeight: 700, textAlign: "center" }}>
                        {currentWord.english}
                    </div>
                </div>

                <span style={{ fontSize: "0.8rem", background: "var(--surface2)", color: "var(--text2)", padding: "3px 10px", borderRadius: "12px" }}>
                    {currentWord.pos}
                </span>

                <form onSubmit={checkAnswer} style={{ width: "100%", display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
                    <input
                        ref={inputRef}
                        type="text"
                        value={inputVal}
                        onChange={(e) => setInputVal(e.target.value)}
                        disabled={feedback !== null}
                        placeholder="Type in German..."
                        autoFocus
                        style={{
                            width: "100%", padding: "1rem", fontSize: "1.2rem", borderRadius: "0.5rem",
                            border: `2px solid ${feedback === 'correct' ? 'var(--correct)' : feedback === 'incorrect' ? 'var(--incorrect)' : 'var(--border)'}`,
                            background: feedback === 'correct' ? 'var(--correct-bg)' : feedback === 'incorrect' ? 'var(--incorrect-bg)' : 'var(--bg)',
                            color: "var(--text)", outline: "none", textAlign: "center", fontFamily: "inherit"
                        }}
                    />

                    {!feedback ? (
                        <Btn submit style={{ width: "100%" }} disabled={!inputVal.trim()}>Check Answer</Btn>
                    ) : (
                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", animation: "slideUp 0.3s ease-out" }}>
                            <div style={{ textAlign: "center", padding: "1rem", borderRadius: "0.5rem", background: feedback === "correct" ? "var(--correct-bg)" : "var(--incorrect-bg)", border: `1px solid ${feedback === "correct" ? "var(--correct)" : "var(--incorrect)"}` }}>
                                {feedback === "correct" ? (
                                    <div style={{ color: "var(--correct)", fontWeight: 600, fontSize: "1.1rem" }}>✅ Richtig! (Correct)</div>
                                ) : (
                                    <div>
                                        <div style={{ color: "var(--incorrect)", fontWeight: 600, fontSize: "1.1rem" }}>❌ Falsch.</div>
                                        <div style={{ marginTop: "0.5rem", fontSize: "0.95rem" }}>
                                            The correct answer is: <br />
                                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginTop: "0.2rem" }}>
                                                <span style={{ fontWeight: 700, fontSize: "1.2rem", color: "var(--text)" }}>{currentWord.german}</span>
                                                <button
                                                    onClick={(e) => { e.preventDefault(); playingText === currentWord.german ? stop() : speak(currentWord.german); }}
                                                    style={{
                                                        background: playingText === currentWord.german ? "var(--incorrect-bg)" : "none",
                                                        border: playingText === currentWord.german ? "1px solid var(--incorrect)" : "none",
                                                        borderRadius: "50%", padding: "0.2rem", height: "28px", width: "28px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
                                                        color: playingText === currentWord.german ? "var(--incorrect)" : "inherit"
                                                    }}
                                                    title={playingText === currentWord.german ? "Stop pronunciation" : "Hear pronunciation"}>
                                                    {playingText === currentWord.german ? "⏹" : "🔊"}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <Btn onClick={nextWord} style={{ width: "100%" }}>Next Word →</Btn>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}

export default TypingPractice;
