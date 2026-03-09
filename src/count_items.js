import fs from 'fs';
import { parse } from 'acorn';

const content = fs.readFileSync('lernpfad_2.jsx', 'utf-8');

// I will just use a regex to count the items or I can just print it inside the React app.
