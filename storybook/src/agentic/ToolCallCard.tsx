import React from "react";

export interface ToolCallCardProps {
  toolName: string;
  args: Record<string, unknown>;
  state?: "requested" | "executing" | "completed" | "failed";
  destructive?: boolean;
  onApprove?: () => void;
  onApproveAll?: () => void;
  onReject?: () => void;
}

export const ToolCallCard: React.FC<ToolCallCardProps> = ({
  toolName, args, state = "requested", destructive, onApprove, onApproveAll, onReject
}) => {
  const isGate = state === "requested";
  return (
    <div style={{
      border: `1px solid ${destructive ? "var(--k-status-error-20)" : "rgba(41,112,122,0.25)"}`,
      background: destructive ? "var(--k-status-error-10)" : "#fff",
      borderRadius: 8, padding: "10px 12px",
      fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--fg-1)",
      maxWidth: 480
    }}>
      <header style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
        <span style={{
          fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700,
          color: destructive ? "var(--k-status-error-110)" : "var(--k-spruce-70)"
        }}>{state === "completed" ? "TOOL · COMPLETED" : state === "executing" ? "TOOL · EXECUTING" : state === "failed" ? "TOOL · FAILED" : "TOOL · GATE"}</span>
        {destructive && <span style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, color: "var(--k-status-error-110)" }}>· DESTRUCTIVE</span>}
        <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--fg-muted)" }}>{toolName}</span>
      </header>
      <pre style={{
        margin: 0, padding: "8px 10px",
        background: "var(--bg-2)", borderRadius: 4,
        fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-1)",
        overflowX: "auto", lineHeight: 1.45
      }}>{JSON.stringify(args, null, 2)}</pre>
      {isGate && (
        <div style={{ display: "flex", gap: 6, marginTop: 8, justifyContent: "flex-end" }}>
          {onReject && <button onClick={onReject} style={ghostBtn}>Reject</button>}
          {onApproveAll && <button onClick={onApproveAll} style={ghostBtn}>Approve all</button>}
          {onApprove && <button onClick={onApprove} style={destructive ? destructiveBtn : primaryBtn}>Approve once</button>}
        </div>
      )}
    </div>
  );
};

const baseBtn: React.CSSProperties = { font: "inherit", fontSize: 11.5, padding: "5px 12px", borderRadius: 4, border: "1px solid var(--border-1)", cursor: "pointer" };
const ghostBtn:       React.CSSProperties = { ...baseBtn, background: "#fff", color: "var(--fg-1)" };
const primaryBtn:     React.CSSProperties = { ...baseBtn, background: "var(--k-spruce-60)", color: "#fff", borderColor: "var(--k-spruce-60)" };
const destructiveBtn: React.CSSProperties = { ...baseBtn, background: "var(--k-status-error-100)", color: "#fff", borderColor: "var(--k-status-error-100)" };
