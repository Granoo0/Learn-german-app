import React from "react";

const ProgressBar = ({ value, max, color }) => (
    <div className="progress-bar" style={{ width: "100%" }}>
        <div className="progress-fill" style={{ width: `${Math.round((value / max) * 100)}%`, background: color || "var(--accent)" }} />
    </div>
);

export default ProgressBar;
