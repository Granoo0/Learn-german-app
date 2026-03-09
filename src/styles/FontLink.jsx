import React from "react";

// ─── FONTS ───────────────────────────────────────────────────────────────────
const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=IBM+Plex+Sans:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg: #f7f5f0;
      --surface: #ffffff;
      --surface2: #f0ede6;
      --accent: #c8952c;
      --accent2: #1a3a5c;
      --text: #1a1a1a;
      --text2: #5a5a5a;
      --border: #ddd9d0;
      --correct: #16a34a;
      --incorrect: #dc2626;
      --correct-bg: #f0fdf4;
      --incorrect-bg: #fef2f2;
    }
    .dark {
      --bg: #0e1117;
      --surface: #161b25;
      --surface2: #1e2535;
      --accent: #f0b429;
      --accent2: #60a5fa;
      --text: #f0eee8;
      --text2: #9ca3af;
      --border: #2d3748;
      --correct: #4ade80;
      --incorrect: #f87171;
      --correct-bg: #052e16;
      --incorrect-bg: #450a0a;
    }
    html { overflow-y: scroll; }
    body { font-family: 'IBM Plex Sans', sans-serif; background: var(--bg); color: var(--text); scrollbar-gutter: stable; }
    
    /* Lightweight completely synced theme transitions */
    *, *::before, *::after {
      transition-property: background-color, border-color, color, box-shadow, fill, stroke;
      transition-duration: 0.35s;
      transition-timing-function: ease-in-out;
    }
    .playfair { font-family: 'Playfair Display', serif; }
    .mono { font-family: 'IBM Plex Mono', monospace; }

    /* Scrollbar */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: var(--bg); }
    ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }

    /* Animations */
    @keyframes fadeUp { from { opacity:0; transform: translateY(16px); } to { opacity:1; transform: translateY(0); } }
    @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
    @keyframes flipCard { 0% { transform: rotateY(0deg); } 100% { transform: rotateY(180deg); } }
    @keyframes shake { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-6px)} 75%{transform:translateX(6px)} }
    @keyframes subtleShake { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-3px)} 75%{transform:translateX(3px)} }
    @keyframes pop { 0%{transform:scale(1)} 50%{transform:scale(1.08)} 100%{transform:scale(1)} }
    @keyframes confetti-pop { 0% { transform: scale(0.5); opacity: 0; } 50% { transform: scale(1.5); opacity: 1; } 100% { transform: scale(1); opacity: 0; } }

    .fade-up { animation: fadeUp 0.4s ease forwards; }
    .fade-in { animation: fadeIn 0.3s ease forwards; }
    .slide-left { animation: slideLeft 0.3s ease forwards; }
    .slide-right { animation: slideRight 0.3s ease forwards; }
    @keyframes slideLeft { 0% { opacity: 0; transform: translateX(20px); } 100% { opacity: 1; transform: translateX(0); } }
    @keyframes slideRight { 0% { opacity: 0; transform: translateX(-20px); } 100% { opacity: 1; transform: translateX(0); } }
    
    .card-flip-container { perspective: 1000px; }
    .card-flip-inner { position: relative; width: 100%; transform-style: preserve-3d; transition: transform 0.6s cubic-bezier(0.4,0,0.2,1); }
    .card-flip-inner.flipped { transform: rotateY(180deg); }
    .card-face { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
    .card-back { transform: rotateY(180deg); }
    
    .shake { animation: shake 0.3s ease; }
    .subtleshake { animation: subtleShake 0.3s ease; }
    .pop { animation: pop 0.25s ease; }
    
    .confetti-effect { position: relative; }
    .confetti-effect::before, .confetti-effect::after { content: "✨"; position: absolute; font-size: 1.2rem; pointer-events: none; animation: confetti-pop 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; top: 50%; transform: translateY(-50%); }
    .confetti-effect::before { left: -1.5rem; }
    .confetti-effect::after { right: -1.5rem; }

    /* Level badge colors */
    [class*="badge-"] { transition: background-color 0.35s ease-in-out, color 0.35s ease-in-out, border-color 0.35s ease-in-out !important; }
    .badge-a1 { background: #dcfce7; color: #166534; border: 1px solid #bbf7d0; }
    .badge-a2 { background: #dbeafe; color: #1e40af; border: 1px solid #bfdbfe; }
    .badge-b1 { background: #fef3c7; color: #92400e; border: 1px solid #fde68a; }
    .badge-b2 { background: #ede9fe; color: #5b21b6; border: 1px solid #ddd6fe; }
    .badge-c1 { background: #fce7f3; color: #9d174d; border: 1px solid #fbcfe8; }
    .badge-c2 { background: #fee2e2; color: #991b1b; border: 1px solid #fecaca; }
    .dark .badge-a1 { background: #052e16; color: #4ade80; border-color: #166534; }
    .dark .badge-a2 { background: #0c1a3a; color: #93c5fd; border-color: #1e40af; }
    .dark .badge-b1 { background: #2d1a00; color: #fcd34d; border-color: #92400e; }
    .dark .badge-b2 { background: #1e0a3c; color: #c4b5fd; border-color: #5b21b6; }
    .dark .badge-c1 { background: #2d0a1e; color: #f9a8d4; border-color: #9d174d; }
    .dark .badge-c2 { background: #2d0a0a; color: #fca5a5; border-color: #991b1b; }

    /* Progress bar */
    .progress-bar { height: 4px; background: var(--border); border-radius: 2px; overflow: hidden; }
    .progress-fill { height: 100%; background: var(--accent); border-radius: 2px; transition: width 0.5s ease, background-color 0.35s ease-in-out !important; }

    /* Flashcard */
    .flashcard-wrap { min-height: 240px; }

    /* Word match */
    .match-item { cursor: pointer; transition: transform 0.15s, background-color 0.35s ease-in-out, border-color 0.35s ease-in-out, color 0.35s ease-in-out !important; user-select: none; }
    .match-item.selected { border-color: var(--accent) !important; background: var(--surface2) !important; }
    .match-item.matched { opacity: 0.4; pointer-events: none; }

    /* Tab underline */
    .tab-btn { position: relative; }
    .tab-btn.active::after { content: ''; position: absolute; bottom: -1px; left: 0; right: 0; height: 2px; background: var(--accent); transition: background-color 0.35s ease-in-out !important; }

    /* Hover states */
    .hover-lift { transition: transform 0.2s, box-shadow 0.2s, background-color 0.35s ease-in-out, border-color 0.35s ease-in-out, color 0.35s ease-in-out !important; }
    .hover-lift:hover { transform: translateY(-3px); box-shadow: 0 12px 28px -6px rgba(0,0,0,0.15), 0 8px 16px -8px rgba(0,0,0,0.1); }
    .dark .hover-lift:hover { box-shadow: 0 12px 28px -6px rgba(0,0,0,0.5), 0 8px 16px -8px rgba(0,0,0,0.4); }

    /* Grid stripes decoration */
    .grid-bg { background-image: repeating-linear-gradient(0deg, transparent, transparent 39px, var(--border) 39px, var(--border) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, var(--border) 39px, var(--border) 40px); }

    /* Sentence builder */
    .word-chip { cursor: pointer; user-select: none; transition: all 0.15s; }
    .word-chip:active { transform: scale(0.95); }
  `}</style>
);

export default FontLink;
