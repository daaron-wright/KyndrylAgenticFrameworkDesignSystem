import React from "react";
import { AgenticMenu, type AgenticMenuAction } from "../_shared/AgenticMenu";
import "../_shared/dynamic.css";

export interface FreshnessBadgeProps {
  /** Age of the underlying data, in days. */
  ageDays: number;
  /** When ageDays > threshold, the badge crosses into a warning state. */
  threshold?: number;
  /** Optional override label (e.g. "Today", "Last verified 3d ago"). */
  label?: string;
  actions?: AgenticMenuAction[];
}

const freshnessActions = (stale: boolean): AgenticMenuAction[] => [
  { id: "refresh", label: "Force refresh", description: stale ? "Queue a source re-sync" : "Re-check this source now", toast: stale ? "Refresh queued - ETA 2m" : "Refresh queued - ETA 30s" },
  { id: "threshold", label: "Change stale threshold", toast: "Threshold editor opened" },
  ...(stale ? [{ id: "notify", label: "Notify owner", description: "Ask the data owner to verify", toast: "Owner notified - slack + email" }] : []),
  { id: "pin", label: "Pin as trusted source", destructive: true, toast: "Pinned as trusted source", confirmText: "Pinning this source changes freshness handling for similar cards. Continue?", confirmLabel: "Pin source" }
];

export const FreshnessBadge: React.FC<FreshnessBadgeProps> = ({ ageDays, threshold = 7, label, actions }) => {
  const stale = ageDays > threshold;
  const display = label ?? (ageDays === 0 ? "Fresh - updated 12 min ago" : stale ? `Stale - ${ageDays} days` : `${ageDays}d ago`);
  const badge = (
    <span
      className="kds-badge-agentic"
      style={{
        background: stale ? "var(--k-status-warning-10)" : "var(--bg-2)",
        color: stale ? "var(--k-status-warning-110)" : "var(--fg-2)",
        borderColor: stale ? "var(--k-status-warning-20)" : "var(--border-1)"
      }}
      role="status"
      aria-live="polite"
    >
      <span className="kds-dot" />
      <span className="agentic-label">{display}</span>
      <span className="agentic-chev kds-agentic-chev" aria-hidden="true">•••</span>
    </span>
  );

  return (
    <AgenticMenu title="Freshness controls" meta={`${ageDays}d / ${threshold}d threshold`} actions={actions ?? freshnessActions(stale)}>
      {badge}
    </AgenticMenu>
  );
};
