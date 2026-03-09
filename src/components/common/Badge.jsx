import React from "react";

const Badge = ({ level }) => (
    <span className={`badge-${level.toLowerCase()} mono`} style={{ padding: "2px 10px", borderRadius: "4px", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.05em" }}>{level}</span>
);

export default Badge;
