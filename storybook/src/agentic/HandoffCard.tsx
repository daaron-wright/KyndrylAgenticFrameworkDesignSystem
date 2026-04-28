import React from "react";

export interface HandoffCardProps {
  from: string;
  to: string;
  /** "agent" → another agent, "human" → a person. */
  kind?: "agent" | "human";
  reason?: string;
  onAck?: () => void;
}

export const HandoffCard: React.FC<HandoffCardProps> = ({ from, to, kind = "agent", reason, onAck }) => (
  <div style={{
    border: "1px solid rgba(41,112,122,0.25)",
    background: "linear-gradient(90deg, var(--k-ai-spruce-06), var(--k-ai-warm-red-06))",
    borderRadius: 8, padding: "10px 14px", maxWidth: 480,
    fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--fg-1)"
  }}>
    <div style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, color: "var(--k-spruce-70)", marginBottom: 6 }}>HANDOFF · {kind === "human" ? "TO HUMAN" : "AGENT → AGENT"}</div>
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: reason ? 8 : 0 }}>
      <span style={{ fontWeight: 500 }}>{from}</span>
      <svg width="16" height="12" viewBox="0 0 16 12" fill="none" stroke="currentColor" strokeWidth={1.5} style={{ color: "var(--fg-muted)" }} aria-hidden="true">
        <path d="M1 6h13M10 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span style={{ fontWeight: 500, color: kind === "human" ? "var(--k-warm-red-50)" : "var(--k-spruce-70)" }}>{to}</span>
      {onAck && <button onClick={onAck} style={{ marginLeft: "auto", font: "inherit", fontSize: 11, padding: "3px 9px", border: "1px solid var(--border-1)", borderRadius: 4, background: "#fff", cursor: "pointer" }}>Acknowledge</button>}
    </div>
    {reason && <div style={{ fontSize: 11.5, color: "var(--fg-2)", lineHeight: 1.5 }}>{reason}</div>}
  </div>
);
