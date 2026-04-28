import React from "react";

export interface FreshnessBadgeProps {
  /** Age of the underlying data, in days. */
  ageDays: number;
  /** When ageDays > threshold, the badge crosses into a warning state. */
  threshold?: number;
  /** Optional override label (e.g. "Today", "Last verified 3d ago"). */
  label?: string;
}

export const FreshnessBadge: React.FC<FreshnessBadgeProps> = ({ ageDays, threshold = 7, label }) => {
  const stale = ageDays > threshold;
  const display = label ?? (ageDays === 0 ? "Today" : `${ageDays}d ago`);
  return (
    <span
      role="status"
      aria-live="polite"
      style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        padding: "4px 10px", borderRadius: 999,
        fontFamily: "var(--font-sans)", fontSize: 12,
        background: stale ? "var(--k-status-warning-10)" : "var(--bg-2)",
        color:      stale ? "var(--k-status-warning-110)" : "var(--fg-2)",
        border: `1px solid ${stale ? "var(--k-status-warning-20)" : "var(--border-1)"}`
      }}
    >
      <span style={{
        width: 6, height: 6, borderRadius: 999,
        background: stale ? "var(--k-status-warning-100)" : "var(--k-status-success-100)"
      }} />
      <span style={{ fontWeight: 500, borderBottom: "1px dotted currentColor" }}>{display}</span>
      <span style={{ opacity: 0.7 }}>{stale ? "stale" : "verified"}</span>
    </span>
  );
};
