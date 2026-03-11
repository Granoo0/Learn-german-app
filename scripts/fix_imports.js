const fs = require('fs');
const path = require('path');

function traverse(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      traverse(p);
    } else if (p.endsWith('.jsx')) {
      let content = fs.readFileSync(p, 'utf8');
      let changed = false;
      if (content.includes('from "../../utils/useProgress"')) {
         content = content.replace(/from "\.\.\/\.\.\/utils\/useProgress"/g, 'from "../../utils/useProgress.jsx"');
         changed = true;
      }
      if (content.includes('from "./utils/useProgress"')) {
         content = content.replace(/from "\.\/utils\/useProgress"/g, 'from "./utils/useProgress.jsx"');
         changed = true;
      }
      if (changed) {
         fs.writeFileSync(p, content);
         console.log('Fixed', p);
      }
    }
  }
}
traverse('./src');
console.log('Done');
