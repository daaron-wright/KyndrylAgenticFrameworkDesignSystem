import React from "react";
import { AgenticMenu, type AgenticMenuAction } from "../_shared/AgenticMenu";
import "../_shared/dynamic.css";
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

const statusActions = (status: StatusValue): AgenticMenuAction[] => {
  if (status === "Pending") {
    return [
      { id: "approve", label: "Advance to Approved", toast: "Advanced to Approved" },
      { id: "reassign", label: "Reassign reviewer", toast: "Reassigned to A. Ortiz" },
      { id: "note", label: "Add note", toast: "Note added to audit trail" },
      { id: "reject", label: "Reject and close", destructive: true, toast: "Rejected and closed" }
    ];
  }
  if (status === "Executed") {
    return [
      { id: "timeline", label: "View execution timeline", toast: "Timeline opened" },
      { id: "note", label: "Add note", toast: "Note added" },
      { id: "rollback", label: "Rollback change", destructive: true, toast: "Rollback requested" }
    ];
  }
  return [
    { id: "open", label: "Open details", toast: "Details opened" },
    { id: "audit", label: "View audit trail", toast: "Audit trail opened" }
  ];
};

export const StatusBadge: React.FC<{ status: StatusValue; actions?: AgenticMenuAction[] }> = ({ status, actions }) => {
  const [fg, bg, bd] = map[status];
  const badge = (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "4px 10px", borderRadius: 999,
      fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 500,
      color: fg, background: bg, border: `1px solid ${bd}`
    }}>
      <span style={{ width: 6, height: 6, borderRadius: 999, background: "currentColor" }} />
      <span className="agentic-label">{status}</span>
      <span className="agentic-chev kds-agentic-chev" aria-hidden="true">•••</span>
    </span>
  );

  return (
    <AgenticMenu title="Status actions" meta={status} actions={actions ?? statusActions(status)}>
      {badge}
    </AgenticMenu>
  );
};
