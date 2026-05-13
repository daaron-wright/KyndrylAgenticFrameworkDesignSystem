import React from "react";
import "../_shared/dynamic.css";

export type Severity = "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";

export interface SeverityPillProps {
  /** Canonical severity. Never invent new values. */
  severity: Severity;
  /** Optional trailing label, e.g. a count. */
  label?: string;
}

const styles: Record<Severity, React.CSSProperties> = {
  CRITICAL: { color: "var(--sev-critical-fg)", background: "var(--sev-critical-bg)", borderColor: "var(--sev-critical-border)" },
  HIGH:     { color: "var(--sev-high-fg)",     background: "var(--sev-high-bg)",     borderColor: "var(--sev-high-border)" },
  MEDIUM:   { color: "var(--sev-medium-fg)",   background: "var(--sev-medium-bg)",   borderColor: "var(--sev-medium-border)" },
  LOW:      { color: "var(--sev-low-fg)",      background: "var(--sev-low-bg)",      borderColor: "var(--sev-low-border)" }
};

export const SeverityPill: React.FC<SeverityPillProps> = ({ severity, label }) => (
  <span style={{
    display: "inline-flex", alignItems: "center", gap: 6,
    padding: "4px 10px", borderRadius: 999,
    fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
    fontFamily: "var(--font-sans)", border: "1px solid", ...styles[severity]
  }}>
    <span style={{ width: 6, height: 6, borderRadius: 999, background: "currentColor" }} />
    <span>{severity}</span>
    {label ? <span style={{ fontWeight: 500, letterSpacing: 0, textTransform: "none", opacity: 0.75, marginLeft: 4 }}>· {label}</span> : null}
  </span>
);
