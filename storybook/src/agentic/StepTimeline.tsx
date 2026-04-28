import React from "react";

export interface StepTimelineProps {
  steps: Array<{
    title: string;
    state: "pending" | "active" | "done" | "failed";
    note?: string;
  }>;
  onApproveOnce?: (i: number) => void;
  onApproveAll?: () => void;
}

const dotStyles: Record<string, React.CSSProperties> = {
  pending: { background: "var(--bg-3)" },
  active:  { background: "var(--k-spruce-60)", boxShadow: "0 0 0 4px rgba(41,112,122,0.15)" },
  done:    { background: "var(--k-status-success-100)" },
  failed:  { background: "var(--k-status-error-100)" }
};

export const StepTimeline: React.FC<StepTimelineProps> = ({ steps, onApproveOnce, onApproveAll }) => (
  <div style={{
    border: "1px solid var(--border-1)", borderRadius: 8, padding: 12,
    fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--fg-1)", maxWidth: 420, background: "#fff"
  }}>
    <header style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
      <span style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, color: "var(--fg-muted)" }}>STEP TIMELINE</span>
      {onApproveAll && <button onClick={onApproveAll} style={{ marginLeft: "auto", font: "inherit", fontSize: 11, padding: "3px 9px", border: "1px solid var(--border-1)", borderRadius: 4, background: "#fff", cursor: "pointer" }}>Approve all</button>}
    </header>
    <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
      {steps.map((s, i) => (
        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
          <span style={{ width: 10, height: 10, borderRadius: 999, marginTop: 4, flexShrink: 0, ...dotStyles[s.state] }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: s.state === "active" ? 500 : 400, color: s.state === "pending" ? "var(--fg-muted)" : "var(--fg-1)" }}>{s.title}</div>
            {s.note && <div style={{ fontSize: 11, color: "var(--fg-muted)" }}>{s.note}</div>}
          </div>
          {s.state === "active" && onApproveOnce && (
            <button onClick={() => onApproveOnce(i)} style={{ font: "inherit", fontSize: 11, padding: "2px 8px", border: "1px solid var(--k-spruce-30)", borderRadius: 4, background: "var(--k-ai-spruce-12)", color: "var(--k-spruce-80)", cursor: "pointer" }}>Approve once</button>
          )}
        </li>
      ))}
    </ol>
  </div>
);
