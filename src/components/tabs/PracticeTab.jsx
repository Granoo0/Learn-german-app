import React, { useState } from "react";
import Card from "../common/Card";
import Btn from "../common/Btn";
import QuizSection from "../practice/QuizSection";
import WordMatch from "../practice/WordMatch";
import FillBlank from "../practice/FillBlank";
import TypingPractice from "../practice/TypingPractice";
import DictationPractice from "../practice/DictationPractice";

function PracticeTab({ level, onProgress }) {
  const [mode, setMode] = useState("quiz");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        {[["quiz", "🧩 Quiz"], ["fill", "✏️ Fill-Blank"], ["match", "🎯 Match"], ["type", "⌨️ Typing"], ["dictation", "🎧 Dictation"]].map(([m, label]) => (
          <Btn key={m} small variant={mode === m ? "primary" : "ghost"} onClick={() => setMode(m)}>{label}</Btn>
        ))}
      </div>
      <Card hoverLift={false}>
        {mode === "quiz" && <QuizSection level={level} onProgress={onProgress} />}
        {mode === "fill" && <FillBlank level={level} onProgress={onProgress} />}
        {mode === "match" && <WordMatch level={level} onProgress={onProgress} />}
        {mode === "type" && <TypingPractice level={level} onProgress={onProgress} />}
        {mode === "dictation" && <DictationPractice level={level} onProgress={onProgress} />}
      </Card>
    </div>
  );
}

export default PracticeTab;
