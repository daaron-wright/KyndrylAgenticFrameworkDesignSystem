import React from "react";
export type WorkflowStatus = "Pending" | "Approved" | "Executed" | "Rejected";
export type GraphStatus    = "Healthy" | "Degraded" | "Impacted" | "Unknown";
export type StatusValue = WorkflowStatus | GraphStatus;

const map: Record<StatusValue, [string, string, string]> = {
  Pending:  ["var(--wf-pending)",  "var(--k-status-warning-10)", "var(--k-status-warning-20)"],
  Approved: ["var(--wf-approved)", "var(--k-spruce-10)",         "var(--k-spruce-20)"],
  Executed: ["var(--wf-executed)", "var(--k-spruce-10)",         "var(--k-spruce-20)"],
  Rejected: ["var(--fg-muted)",    "var(--bg-2)",                "var(--border-1)"],
  Healthy:  ["var(--status-healthy)",  "var(--k-status-success-10)", "var(--k-status-success-20)"],
  Degraded: ["var(--status-degraded)", "var(--k-status-warning-10)", "var(--k-status-warning-20)"],
  Impacted: ["var(--status-impacted)", "var(--k-status-error-10)",   "var(--k-status-error-20)"],
  Unknown:  ["var(--fg-muted)",        "var(--bg-2)",                "var(--border-1)"]
};

export const StatusBadge: React.FC<{ status: StatusValue }> = ({ status }) => {
  const [fg, bg, bd] = map[status];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "4px 10px", borderRadius: 999,
      fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 500,
      color: fg, background: bg, border: `1px solid ${bd}`
    }}>
      <span style={{ width: 6, height: 6, borderRadius: 999, background: "currentColor" }} />
      {status}
    </span>
  );
};
