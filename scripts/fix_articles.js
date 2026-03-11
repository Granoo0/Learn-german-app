/**
 * fix_articles.js
 * Fixes any entries in levelData.js where the `german` field 
 * has a doubled article, e.g. "der der April" → "der April"
 * Run: node fix_articles.js
 */
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'levelData.js');
let content = fs.readFileSync(filePath, 'utf8');

let fixCount = 0;

// Replace any pattern like: "der der Xyz" | "die die Xyz" | "das das Xyz"
content = content.replace(
  /german:\s*"(der|die|das) (der|die|das) ([^"]+)"/g,
  (match, art1, art2, rest) => {
    // Use the first article (the one set by gender field)
    fixCount++;
    console.log(`  Fixed: "${art1} ${art2} ${rest}" → "${art1} ${rest}"`);
    return `german: "${art1} ${rest}"`;
  }
);

fs.writeFileSync(filePath, content, 'utf8');
console.log(`\n✅ Fixed ${fixCount} double-article entries.\n`);
