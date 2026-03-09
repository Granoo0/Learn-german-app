import React from "react";

const Btn = ({ children, onClick, variant = "primary", disabled, small, style }) => {
  const base = {
    border: "none",
    borderRadius: "0.6rem",
    fontFamily: "IBM Plex Sans, sans-serif",
    fontWeight: 600,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "all 0.15s",
    fontSize: small ? "0.82rem" : "0.95rem",
    padding: small ? "0.35rem 0.9rem" : "0.65rem 1.4rem",
    ...style,
  };
  const styles = {
    primary: { background: "var(--accent)", color: "#fff" },
    secondary: { background: "var(--surface2)", color: "var(--text)", border: "1px solid var(--border)" },
    ghost: { background: "transparent", color: "var(--text)", border: "1px solid var(--border)" },
    danger: { background: "var(--incorrect)", color: "#fff" },
    success: { background: "var(--correct)", color: "#fff" },
  };
  return <button style={{ ...base, ...styles[variant] }} onClick={onClick} disabled={disabled}>{children}</button>;
};

export default Btn;
