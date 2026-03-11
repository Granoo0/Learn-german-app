const fs = require('fs');

const code = fs.readFileSync('lernpfad_2.jsx', 'utf8');
const lines = code.split('\n');

function sliceExactLines(startIdx, endIdx) {
    return lines.slice(startIdx, endIdx + 1).join('\n');
}

function extractComponentFull(name) {
    let startIdx = lines.findIndex(l => l.match(new RegExp(`^\\s*(export\\s+)?function\\s+${name}\\s*\\(`)));
    if (startIdx === -1) {
        startIdx = lines.findIndex(l => l.match(new RegExp(`^\\s*(export\\s+)?const\\s+${name}\\s*=`)));
    }

    if (startIdx === -1) {
        console.error(`Component ${name} not found!`);
        return null;
    }

    let braces = 0;
    let endIdx = -1;
    let started = false;
    let parens = 0;

    for (let i = startIdx; i < lines.length; i++) {
        const l = lines[i];
        if (l.includes('{')) {
            started = true;
            braces += (l.match(/\{/g) || []).length;
        }
        if (l.includes('}')) {
            braces -= (l.match(/\}/g) || []).length;
        }

        // some arrow functions use () instead of {}
        if (!started && l.includes('(')) parens += (l.match(/\(/g) || []).length;
        if (!started && l.includes(')')) parens -= (l.match(/\)/g) || []).length;

        if (started && braces <= 0) {
            endIdx = i;
            break;
        }
        // If it's pure parens returning JSX `const Badge = () => (...)`
        if (!started && parens <= 0 && i > startIdx && l.includes(')')) {
            endIdx = i;
            break;
        }
    }

    if (endIdx === -1) {
        console.error(`End of component ${name} not found!`);
        return null;
    }

    // check for trailing semicolons
    let nextLine = lines[endIdx];
    if (nextLine && nextLine.trim() === '}' && lines[endIdx + 1] && lines[endIdx + 1].trim() === '};') {
        endIdx += 1;
    }
    if (!lines[endIdx].includes(';') && lines[endIdx + 1] && lines[endIdx + 1].trim() === ';') {
        endIdx += 1;
    }

    let block = sliceExactLines(startIdx, endIdx);
    if (!block.trim().endsWith(';') && block.trim().endsWith('}')) {
        // It's a function Component(), no semicolon needed usually, but okay.
    } else if (!block.trim().endsWith(';')) {
        block += ';';
    }

    // App is natively exported at the end of lernpfad_2.jsx, so we don't append export if it's App
    if (name !== 'App') {
        block += `\n\nexport default ${name};\n`;
    }

    return block;
}

// Ensure Directories
['src/data', 'src/components/common', 'src/components/practice', 'src/components/tabs', 'src/components/layout', 'src/styles'].forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// Write Components
fs.writeFileSync('src/components/common/Badge.jsx', 'import React from "react";\n\n' + extractComponentFull('Badge'));
fs.writeFileSync('src/components/common/ProgressBar.jsx', 'import React from "react";\n\n' + extractComponentFull('ProgressBar'));
fs.writeFileSync('src/components/common/Card.jsx', 'import React from "react";\n\n' + extractComponentFull('Card'));
fs.writeFileSync('src/components/common/Btn.jsx', 'import React from "react";\n\n' + extractComponentFull('Btn'));

fs.writeFileSync('src/components/practice/FlashCard.jsx', 'import React, { useState } from "react";\nimport Card from "../common/Card";\nimport Btn from "../common/Btn";\n\n' + extractComponentFull('FlashCard'));
fs.writeFileSync('src/components/practice/QuizSection.jsx', 'import React, { useState } from "react";\nimport Card from "../common/Card";\nimport Btn from "../common/Btn";\n\n' + extractComponentFull('QuizSection'));
fs.writeFileSync('src/components/practice/FillBlank.jsx', 'import React, { useState } from "react";\nimport Card from "../common/Card";\nimport Btn from "../common/Btn";\nimport { FILL_BLANK } from "../../data/levelData";\n\n' + extractComponentFull('FillBlank'));
fs.writeFileSync('src/components/practice/WordMatch.jsx', 'import React, { useState, useEffect } from "react";\nimport Card from "../common/Card";\nimport Btn from "../common/Btn";\nimport { WORD_MATCH } from "../../data/levelData";\n\n' + extractComponentFull('WordMatch'));

fs.writeFileSync('src/components/tabs/VocabTab.jsx', 'import React, { useState } from "react";\nimport Card from "../common/Card";\nimport ProgressBar from "../common/ProgressBar";\nimport Btn from "../common/Btn";\nimport FlashCard from "../practice/FlashCard";\nimport { VOCABULARY } from "../../data/levelData";\n\n' + extractComponentFull('VocabTab'));
fs.writeFileSync('src/components/tabs/GrammarTab.jsx', 'import React, { useState } from "react";\nimport Card from "../common/Card";\nimport { GRAMMAR_TOPICS } from "../../data/levelData";\n\n' + extractComponentFull('GrammarTab'));
fs.writeFileSync('src/components/tabs/PracticeTab.jsx', 'import React, { useState } from "react";\nimport Card from "../common/Card";\nimport Btn from "../common/Btn";\nimport QuizSection from "../practice/QuizSection";\nimport WordMatch from "../practice/WordMatch";\nimport FillBlank from "../practice/FillBlank";\n\n' + extractComponentFull('PracticeTab'));
fs.writeFileSync('src/components/tabs/ReadingTab.jsx', 'import React, { useState, useEffect } from "react";\nimport Card from "../common/Card";\nimport Btn from "../common/Btn";\nimport { READING_TEXTS } from "../../data/readingData";\nimport { READING_QUESTIONS } from "../../data/readingQuestions";\n\n' + extractComponentFull('ReadingTab'));

fs.writeFileSync('src/components/layout/LevelPage.jsx', 'import React, { useState } from "react";\nimport Card from "../common/Card";\nimport Btn from "../common/Btn";\nimport VocabTab from "../tabs/VocabTab";\nimport GrammarTab from "../tabs/GrammarTab";\nimport PracticeTab from "../tabs/PracticeTab";\nimport ReadingTab from "../tabs/ReadingTab";\n\n' + extractComponentFull('LevelPage'));
fs.writeFileSync('src/components/layout/HomePage.jsx', 'import React from "react";\nimport Card from "../common/Card";\nimport Badge from "../common/Badge";\nimport ProgressBar from "../common/ProgressBar";\nimport { LEVEL_META } from "../../data/levelData";\n\n' + extractComponentFull('HomePage'));

fs.writeFileSync('src/App.jsx', 'import React, { useState, useEffect } from "react";\nimport FontLink from "./styles/FontLink";\nimport HomePage from "./components/layout/HomePage";\nimport LevelPage from "./components/layout/LevelPage";\n\n' + extractComponentFull('App') + '\nexport default App;\n');

console.log("Rewriting code complete!");
