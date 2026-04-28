import React from "react";

export interface StateDeltaToastProps {
  field: string;
  oldValue: string | number;
  newValue: string | number;
  onUndo?: () => void;
  onView?: () => void;
}

export const StateDeltaToast: React.FC<StateDeltaToastProps> = ({ field, oldValue, newValue, onUndo, onView }) => (
  <div role="status" aria-live="polite" style={{
    display: "inline-flex", alignItems: "center", gap: 12,
    padding: "10px 14px",
    background: "var(--fg-1)", color: "#fff",
    borderRadius: 8, fontFamily: "var(--font-sans)", fontSize: 12,
    boxShadow: "var(--shadow-pop)"
  }}>
    <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--k-spruce-30)" }} />
    <span style={{ fontFamily: "var(--font-mono)" }}>{field}</span>
    <span style={{ opacity: 0.7 }}>{String(oldValue)}</span>
    <span style={{ opacity: 0.7 }}>→</span>
    <span style={{ fontWeight: 500 }}>{String(newValue)}</span>
    {onView && <button onClick={onView} style={toastBtn}>View</button>}
    {onUndo && <button onClick={onUndo} style={toastBtn}>Undo</button>}
  </div>
);

const toastBtn: React.CSSProperties = {
  font: "inherit", fontSize: 11, padding: "2px 8px", marginLeft: 4,
  background: "transparent", color: "#fff",
  border: "1px solid rgba(255,255,255,0.3)", borderRadius: 4, cursor: "pointer"
};
