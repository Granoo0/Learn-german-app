import React, { useState, useEffect, useRef } from "react";
import Btn from "../common/Btn";
import ProgressBar from "../common/ProgressBar";
import { useVocabulary } from "../../utils/useVocabulary.jsx";
import { useTTS } from "../../utils/useTTS";
import { useProgress } from "../../utils/useProgress.jsx";
import { getSrsQueue, recordSrsAnswer } from "../../utils/srsStore";

function DictationPractice({ level, onProgress }) {
    const { vocab, loading, error } = useVocabulary(level);
    const [queue, setQueue] = useState([]);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [inputVal, setInputVal] = useState("");
    const [feedback, setFeedback] = useState(null); // null | "correct" | "incorrect" | "finished"
    const [score, setScore] = useState(0);
    const { speak, stop, playingText } = useTTS();
    const { addXp } = useProgress();
    const inputRef = useRef(null);
    const [hasPlayedInitial, setHasPlayedInitial] = useState(false);

    useEffect(() => {
        if (loading || error) return;
        
        // Use SRS queue, fallback to random if empty
        const srsSorted = getSrsQueue(vocab).slice(0, 5); // 5 dictation words per session
        setQueue(srsSorted);
        setCurrentIdx(0);
        setScore(0);
        setFeedback(null);
        setInputVal("");
        setHasPlayedInitial(false);
    }, [vocab, level, loading, error]);

    const currentWord = queue[currentIdx];

    useEffect(() => {
        if (currentWord && feedback === null && !hasPlayedInitial) {
            speak(currentWord.german);
            setHasPlayedInitial(true);
        }
    }, [currentWord, feedback, hasPlayedInitial, speak]);

    if (loading) return <div style={{ padding: "3rem", textAlign: "center", color: "var(--text2)" }}>Loading dictation practice...</div>;
    if (error) return <div style={{ padding: "3rem", textAlign: "center", color: "var(--incorrect)" }}>Failed to load dictation data.</div>;
    if (queue.length === 0) return null;

    const checkAnswer = (e) => {
        if (e) e.preventDefault();
        if (!inputVal.trim()) return;

        const target = currentWord.german.toLowerCase().trim();
        const typed = inputVal.toLowerCase().trim();
        const targetNoArticle = target.replace(/^(der|die|das)\s+/, "");

        if (typed === target || typed === targetNoArticle) {
            setFeedback("correct");
            setScore(s => s + 1);
            speak(currentWord.german);
            recordSrsAnswer(currentWord.german, true);
        } else {
            setFeedback("incorrect");
            // Optionally play the word again on incorrect
            speak(currentWord.german);
            recordSrsAnswer(currentWord.german, false);
        }
    };

    const nextWord = () => {
        if (currentIdx + 1 < queue.length) {
            setCurrentIdx(i => i + 1);
            setFeedback(null);
            setInputVal("");
            setHasPlayedInitial(false);
            setTimeout(() => inputRef.current?.focus(), 50);
        } else {
            setFeedback("finished");
            if (onProgress) onProgress(score > 3 ? 15 : 5);
            addXp(score * 3); // 3 XP per dictated word (harder mode)
        }
    };

    const restart = () => {
        const srsSorted = getSrsQueue(vocab).slice(0, 5);
        setQueue(srsSorted);
        setCurrentIdx(0);
        setScore(0);
        setFeedback(null);
        setInputVal("");
        setHasPlayedInitial(false);
    };

    if (feedback === "finished") {
        return (
            <div style={{ textAlign: "center", padding: "2rem" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{score >= 4 ? "🎧🔥" : "🎧"}</div>
                <div className="playfair" style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Dictation Complete!</div>
                <div style={{ fontSize: "1.1rem", color: "var(--text2)", marginBottom: "1rem" }}>Score: {score} / {queue.length}</div>
                <div style={{ fontSize: "0.9rem", color: "var(--text2)", marginBottom: "1.5rem" }}>
                    {score === queue.length ? "Perfect ear!" : score >= 3 ? "Good listening skills!" : "Keep practicing your listening!"}
                </div>
                <Btn onClick={restart}>Try Again</Btn>
            </div>
        );
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.85rem", color: "var(--text2)" }}>Dictation {currentIdx + 1} of {queue.length}</span>
                <span style={{ fontSize: "0.85rem", color: "var(--text2)" }}>Score: {score}</span>
            </div>
            <ProgressBar value={currentIdx} max={queue.length} />

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem", padding: "2rem 0" }}>
                <button
                    onClick={() => speak(currentWord.german)}
                    style={{
                        width: "80px", height: "80px", borderRadius: "50%",
                        background: "var(--accent)", border: "none", color: "#fff",
                        fontSize: "2.5rem", display: "flex", alignItems: "center", justifyContent: "center",
                        cursor: "pointer", boxShadow: "0 8px 16px rgba(200, 149, 44, 0.3)",
                        transition: "transform 0.2s"
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                >
                    🔊
                </button>
                <div style={{ color: "var(--text2)", fontSize: "0.9rem", textAlign: "center" }}>
                    Tap to hear the word again.<br />Type what you hear.
                </div>
                
                {feedback && (
                    <div className="fade-up" style={{ textAlign: "center" }}>
                        <div style={{ fontSize: "1.5rem", fontWeight: 700, color: feedback === "correct" ? "var(--correct)" : "var(--incorrect)", marginBottom: "0.5rem" }}>
                            {currentWord.german}
                        </div>
                        <div style={{ color: "var(--text2)", fontSize: "0.9rem" }}>{currentWord.english}</div>
                    </div>
                )}
            </div>

            <form onSubmit={checkAnswer} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <input
                    ref={inputRef}
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder="Type the German word here..."
                    disabled={feedback !== null}
                    autoFocus
                    spellCheck={false}
                    autoComplete="off"
                    autoCapitalize="off"
                    style={{
                        width: "100%", padding: "1rem", fontSize: "1.1rem", fontFamily: "IBM Plex Mono, monospace",
                        borderRadius: "0.6rem", border: `2px solid ${feedback === 'correct' ? 'var(--correct)' : feedback === 'incorrect' ? 'var(--incorrect)' : 'var(--border)'}`,
                        background: feedback === 'correct' ? 'var(--correct-bg)' : feedback === 'incorrect' ? 'var(--incorrect-bg)' : 'var(--surface2)',
                        color: "var(--text)", textAlign: "center", outline: "none"
                    }}
                />
                {!feedback ? (
                    <Btn type="submit" style={{ width: "100%" }} disabled={!inputVal.trim()}>Check Answer</Btn>
                ) : (
                    <Btn type="button" onClick={nextWord} style={{ width: "100%" }}>Next</Btn>
                )}
            </form>
        </div>
    );
}

export default DictationPractice;
