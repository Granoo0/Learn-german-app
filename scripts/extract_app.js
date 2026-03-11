const fs = require('fs');
const lines = fs.readFileSync('lernpfad_2.jsx', 'utf8').split('\n');
const appCode = lines.slice(2082, 2205 + 1).join('\n');
const appFile = 'import React, { useState, useEffect } from "react";\nimport FontLink from "./styles/FontLink";\nimport HomePage from "./components/layout/HomePage";\nimport LevelPage from "./components/layout/LevelPage";\n\n' + appCode + '\n';
fs.writeFileSync('src/App.jsx', appFile);
console.log('App.jsx created');
