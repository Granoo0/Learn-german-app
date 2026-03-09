import React from "react";

const Card = ({ children, style, className = "", onClick, hoverLift = true }) => (
    <div
        onClick={onClick}
        className={`${hoverLift ? 'hover-lift' : ''} ${className}`.trim()}
        style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "1rem",
            padding: "1.5rem",
            cursor: onClick ? "pointer" : "default",
            ...style,
        }}
    >
        {children}
    </div>
);

export default Card;
