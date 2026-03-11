const fs = require('fs');
const qA = JSON.parse(fs.readFileSync('questions_A.json', 'utf8'));
const qB = JSON.parse(fs.readFileSync('questions_B.json', 'utf8'));
const qC = JSON.parse(fs.readFileSync('questions_C.json', 'utf8'));

const READING_QUESTIONS = {
    ...qA,
    ...qB,
    ...qC
};

fs.writeFileSync('readingQuestions.js', `export const READING_QUESTIONS = ${JSON.stringify(READING_QUESTIONS, null, 2)};\n`);
console.log("Merged questions successfully");
