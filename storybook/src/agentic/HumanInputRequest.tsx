import React from "react";

export interface HumanInputRequestProps {
  question: string;
  options: string[];
  onChoose?: (option: string) => void;
}

export const HumanInputRequest: React.FC<HumanInputRequestProps> = ({ question, options, onChoose }) => (
  <div style={{
    background: "var(--k-status-warning-10)",
    border: "1px solid var(--k-status-warning-20)",
    borderRadius: 8, padding: "12px 14px", maxWidth: 480,
    fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--k-status-warning-110)"
  }}>
    <div style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, marginBottom: 6 }}>HUMAN INPUT REQUIRED</div>
    <p style={{ margin: "0 0 10px", color: "var(--fg-1)", fontSize: 13.5, lineHeight: 1.5 }}>{question}</p>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
      {options.map(o => (
        <button key={o} onClick={() => onChoose?.(o)} style={{
          font: "inherit", fontSize: 12, padding: "5px 12px",
          background: "#fff", border: "1px solid var(--k-status-warning-20)",
          borderRadius: 4, color: "var(--fg-1)", cursor: "pointer"
        }}>{o}</button>
      ))}
    </div>
  </div>
);
