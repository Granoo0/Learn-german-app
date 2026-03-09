import React, { useState } from "react";
import { GRAMMAR } from "../../data/levelData";

function GrammarTab({ level, onProgress }) {
  const topics = GRAMMAR[level] || [];
  const [open, setOpen] = useState(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      {topics.map((topic, i) => (
        <div key={i} style={{ background: "var(--surface)", border: `1.5px solid ${open === i ? "var(--accent)" : "var(--border)"}`, borderRadius: "0.75rem", overflow: "hidden", transition: "border-color 0.3s ease" }}>
          <button onClick={() => { setOpen(open === i ? null : i); if (open !== i && onProgress) onProgress(2); }} style={{
            width: "100%", background: "none", border: "none", padding: "1rem 1.25rem",
            display: "flex", justifyContent: "space-between", alignItems: "center",
            cursor: "pointer", fontFamily: "IBM Plex Sans, sans-serif", fontWeight: 600, fontSize: "0.97rem",
            color: "var(--text)", textAlign: "left"
          }}>
            <span>{topic.title}</span>
            <span style={{ fontSize: "1.2rem", color: "var(--accent)", transform: open === i ? "rotate(180deg)" : "none", transition: "transform 0.3s ease-out" }}>›</span>
          </button>

          <div style={{
            display: "grid",
            gridTemplateRows: open === i ? "1fr" : "0fr",
            transition: "grid-template-rows 0.3s ease-out, opacity 0.3s ease-out",
            opacity: open === i ? 1 : 0
          }}>
            <div style={{ overflow: "hidden" }}>
              <div style={{ padding: "0 1.25rem 1.25rem", borderTop: "1px solid var(--border)" }}>
                <p style={{ color: "var(--text2)", fontSize: "0.9rem", lineHeight: 1.7, margin: "1rem 0 0.75rem" }}>{topic.explanation}</p>
                {topic.table && (
                  <div style={{ marginBottom: "0.75rem" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.87rem" }}>
                      <thead>
                        <tr>
                          {topic.table.headers.map((h, j) => (
                            <th key={j} style={{ padding: "0.5rem 0.75rem", background: "var(--surface2)", borderBottom: "2px solid var(--border)", textAlign: "left", fontWeight: 600, whiteSpace: "nowrap" }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {topic.table.rows.map((row, j) => (
                          <tr key={j} style={{ background: j % 2 === 0 ? "var(--surface)" : "var(--surface2)" }}>
                            {row.map((cell, k) => (
                              <td key={k} style={{ padding: "0.5rem 0.75rem", borderBottom: "1px solid var(--border)", fontFamily: k > 0 ? "IBM Plex Mono, monospace" : "inherit", fontSize: k > 0 ? "0.84rem" : "inherit", color: k === 0 ? "var(--text)" : "var(--accent2)" }}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {topic.examples && (
                  <div style={{ margin: "0.75rem 0" }}>
                    {topic.examples.map((ex, j) => (
                      <div key={j} style={{ padding: "0.4rem 0.75rem", borderLeft: "3px solid var(--accent)", marginBottom: "0.4rem", background: "var(--surface2)", borderRadius: "0 0.4rem 0.4rem 0", fontFamily: "IBM Plex Mono, monospace", fontSize: "0.85rem", color: "var(--text2)" }}>{ex}</div>
                    ))}
                  </div>
                )}
                {topic.tip && (
                  <div style={{ background: "var(--surface2)", border: "1px solid var(--border)", borderRadius: "0.5rem", padding: "0.6rem 1rem", fontSize: "0.83rem", color: "var(--text2)", borderLeft: "4px solid var(--accent)" }}>
                    <span style={{ fontWeight: 700, color: "var(--accent)" }}>💡 Tip: </span>{topic.tip}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GrammarTab;
