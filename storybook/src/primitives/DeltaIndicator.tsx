import React from "react";
import { AgenticMenu, type AgenticMenuAction } from "../_shared/AgenticMenu";
import "../_shared/dynamic.css";

export interface DeltaIndicatorProps {
  /** Signed numeric delta vs the reference period. */
  delta: number;
  /** Unit suffix. */
  unit?: "%" | "pts" | "CIs" | "" | string;
  /** Override direction (otherwise inferred from sign of delta). */
  direction?: "up" | "down";
  /** "+1.2% up means good" by default. Flip to invert color semantics. */
  invertSemantics?: boolean;
  /** Reference label (e.g. "vs last week"). */
  referenceLabel?: string;
  actions?: AgenticMenuAction[];
}

export const DeltaIndicator: React.FC<DeltaIndicatorProps> = ({
  delta, unit = "%", direction, invertSemantics = false, referenceLabel = "vs last week", actions
}) => {
  const dir = direction ?? (delta >= 0 ? "up" : "down");
  const desirable = invertSemantics ? dir === "down" : dir === "up";
  const sign = delta >= 0 ? "+" : "";
  const badge = (
    <span className="kds-badge-agentic" style={{
      display: "inline-flex", alignItems: "center", gap: 4,
      fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 500,
      fontVariantNumeric: "tabular-nums",
      color: desirable ? "var(--k-status-success-110)" : "var(--k-status-error-110)",
      background: "#fff",
      borderColor: "var(--border-1)"
    }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {dir === "up"
          ? (<><path d="M7 17 17 7" /><path d="M7 7h10v10" /></>)
          : (<><path d="M7 7l10 10" /><path d="M17 7v10H7" /></>)}
      </svg>
      <span>{sign}{delta}{unit}</span>
      {referenceLabel && (
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-muted)", marginLeft: 4 }}>
          {referenceLabel}
        </span>
      )}
      <span className="agentic-chev kds-agentic-chev" aria-hidden="true">•••</span>
    </span>
  );

  return (
    <AgenticMenu
      title="Metric change"
      meta={`${sign}${delta}${unit}`}
      actions={actions ?? [
        { id: "explain", label: "Explain this change", toast: "Opened change explanation" },
        { id: "alert", label: "Set alert threshold", toast: "Alert created" },
        { id: "compare", label: "Compare periods", toast: "Compare sidebar opened" },
        { id: "teach", label: "Teach the agent what caused this", destructive: true, toast: "Taught the agent - cause saved" }
      ]}
    >
      {badge}
    </AgenticMenu>
  );
};
