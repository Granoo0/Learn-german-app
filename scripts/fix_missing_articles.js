/**
 * fix_missing_articles.js
 * Fixes any entries in levelData.js where the `german` field 
 * starts with an article (der/die/das) but `gender` is null or missing.
 * This caused the UI to strip the article without displaying it in the badge.
 * Run: node fix_missing_articles.js
 */
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'levelData.js');
let content = fs.readFileSync(filePath, 'utf8');

let fixCount = 0;

const lines = content.split('\n');
const newLines = lines.map(line => {
  // Check if it's a vocabulary entry
  if (!line.includes('german: "')) return line;
  
  // Extract gender value
  const genderMatch = line.match(/gender:\s*([^,]+)/);
  if (!genderMatch) return line;
  const genderVal = genderMatch[1].replace(/['"]/g, '').trim();

  // Extract german article if present
  const gerMatch = line.match(/german:\s*"((der|die|das)\s+[^"]+)"/);
  
  if (gerMatch) {
    const art = gerMatch[2]; // "der", "die", or "das"
    // If gender is null or doesn't match the article, fix it
    if (genderVal === 'null' || genderVal !== art) {
      if (genderVal === 'null') {
          line = line.replace(/gender:\s*null/, `gender: "${art}"`);
      } else {
          // It had a wrong gender mismatch (very rare, but let's fix)
          line = line.replace(/gender:\s*"([^"]+)"/, `gender: "${art}"`);
      }
      fixCount++;
      console.log(`  Fixed missing/wrong gender for: "${gerMatch[1]}" → added gender: "${art}"`);
    }
  }
  return line;
});

fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
console.log(`\n✅ Fixed ${fixCount} missing article entries.\n`);
