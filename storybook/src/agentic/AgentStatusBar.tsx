import React from "react";

/** Live agent status — sticky bar at the top of any agentic surface. */
export interface AgentStatusBarProps {
  state: "started" | "thinking" | "streaming" | "paused" | "done";
  agent?: string;
  step?: string;
  onPauseResume?: () => void;
  onBranch?: () => void;
  stepThrough?: boolean;
  onStepThroughChange?: (v: boolean) => void;
}

const stateMeta: Record<AgentStatusBarProps["state"], { label: string; color: string }> = {
  started:   { label: "Starting",  color: "var(--k-spruce-60)" },
  thinking:  { label: "Thinking",  color: "var(--k-spruce-60)" },
  streaming: { label: "Streaming", color: "var(--k-spruce-60)" },
  paused:    { label: "Paused",    color: "var(--k-status-warning-100)" },
  done:      { label: "Done",      color: "var(--k-status-success-100)" }
};

export const AgentStatusBar: React.FC<AgentStatusBarProps> = ({ state, agent = "Reconciliation Agent", step, onPauseResume, onBranch, stepThrough, onStepThroughChange }) => {
  const meta = stateMeta[state];
  const live = state === "thinking" || state === "streaming";
  return (
    <div role="status" aria-live="polite" style={{
      display: "flex", alignItems: "center", gap: 12,
      padding: "8px 14px",
      background: "linear-gradient(90deg, var(--k-ai-spruce-06), var(--k-ai-warm-red-06))",
      border: "1px solid rgba(41,112,122,0.25)", borderRadius: 8,
      fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--fg-1)"
    }}>
      <span style={{
        width: 8, height: 8, borderRadius: 999, background: meta.color,
        boxShadow: live ? `0 0 0 0 ${meta.color}` : "none",
        animation: live ? "kaPulse 1.4s ease-out infinite" : "none"
      }} />
      <span style={{ fontWeight: 500 }}>{agent}</span>
      <span style={{ color: "var(--fg-muted)" }}>·</span>
      <span style={{ color: meta.color, fontWeight: 500 }}>{meta.label}</span>
      {step && (
        <>
          <span style={{ color: "var(--fg-muted)" }}>·</span>
          <span style={{ fontFamily: "var(--font-mono)", color: "var(--fg-2)" }}>{step}</span>
        </>
      )}
      <div style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 6 }}>
        <label style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, color: "var(--fg-muted)" }}>
          <input type="checkbox" checked={!!stepThrough} onChange={e => onStepThroughChange?.(e.target.checked)} />
          Step-through
        </label>
        {onBranch && <button onClick={onBranch} style={btnStyle}>Branch</button>}
        {onPauseResume && <button onClick={onPauseResume} style={btnStyle}>{state === "paused" ? "Resume" : "Pause"}</button>}
      </div>
      <style>{`@keyframes kaPulse { 0% { box-shadow: 0 0 0 0 currentColor; } 70% { box-shadow: 0 0 0 6px transparent; } 100% { box-shadow: 0 0 0 0 transparent; } }`}</style>
    </div>
  );
};

const btnStyle: React.CSSProperties = {
  font: "inherit", fontSize: 11, padding: "3px 9px",
  border: "1px solid var(--border-1)", borderRadius: 4,
  background: "#fff", color: "var(--fg-1)", cursor: "pointer"
};
