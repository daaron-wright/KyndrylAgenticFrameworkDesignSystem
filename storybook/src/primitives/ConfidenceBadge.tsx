import React from "react";

export interface ConfidenceBadgeProps {
  /** 0–100 */
  value: number;
  /** Permission role — 'readonly' downgrades to a static badge with no popover. */
  role?: "full" | "review" | "readonly";
  onOverride?: () => void;
  onTeach?: () => void;
}

export const ConfidenceBadge: React.FC<ConfidenceBadgeProps> = ({ value, role = "full" }) => {
  const low = value < 70;
  return (
    <span
      tabIndex={role === "readonly" ? -1 : 0}
      style={{
        display: "inline-flex", alignItems: "baseline", gap: 6,
        padding: "5px 10px 5px 12px", borderRadius: 999,
        fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 500,
        background: low ? "var(--k-status-warning-10)" : "var(--k-ai-spruce-12)",
        color:      low ? "var(--k-status-warning-110)" : "var(--k-spruce-80)",
        border: `1px solid ${low ? "var(--k-status-warning-20)" : "rgba(41,112,122,0.25)"}`,
        cursor: role === "readonly" ? "default" : "pointer"
      }}
    >
      <span style={{
        fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 500,
        borderBottom: role === "readonly" ? "0" : "1px dotted currentColor"
      }}>{value}%</span>
      <span style={{ fontSize: 11, opacity: 0.85 }}>confidence</span>
      {role !== "readonly" && <span style={{ opacity: 0.6, fontSize: 10 }}>▾</span>}
    </span>
  );
};
