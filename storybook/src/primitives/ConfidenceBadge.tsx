import React from "react";
import { AgenticMenu, type AgenticMenuAction } from "../_shared/AgenticMenu";
import "../_shared/dynamic.css";

export interface ConfidenceBadgeProps {
  /** 0-100, or null when the agent has not derived a score yet. */
  value: number | null;
  /** Permission role — 'readonly' downgrades to a static badge with no popover. */
  role?: "full" | "review" | "readonly";
  showCheck?: boolean;
  actions?: AgenticMenuAction[];
  onOverride?: () => void;
  onTeach?: () => void;
}

const confidenceTone = (value: number | null, role: ConfidenceBadgeProps["role"]) => {
  if (role === "readonly") return "readonly";
  if (value === null) return "none";
  if (value < 50) return "advisory";
  if (value < 70) return "caution";
  return "high";
};

const defaultActions = (value: number | null, onOverride?: () => void, onTeach?: () => void): AgenticMenuAction[] => value === null
  ? [
      { id: "run", label: "Run agent scoring", description: "Derive a confidence value now", toast: "Agent triggered - scoring now", onSelect: onOverride },
      { id: "manual", label: "Mark as manually tracked", toast: "Set to manual tracking" }
    ]
  : [
      { id: "override", label: "Override confidence", description: "Set your own value for this item", toast: "Override queued - agent re-scoring now", onSelect: onOverride },
      { id: "evidence", label: "Ask for more evidence", description: "Agent will re-derive with extra sources", toast: "Asked agent for additional evidence" },
      { id: "snooze", label: "Snooze for 24h", description: "Hide from triage, keep score", toast: "Snoozed for 24h" },
      {
        id: "teach",
        label: "Teach the agent",
        description: "Adjusts future scoring for similar items",
        toast: "Taught the agent - added to inbox",
        destructive: true,
        confirmText: "Teaching the agent will affect how similar items are scored going forward. Continue?",
        confirmLabel: "Yes, teach",
        onSelect: onTeach
      }
    ];

export const ConfidenceBadge: React.FC<ConfidenceBadgeProps> = ({
  value,
  role = "full",
  showCheck = value !== null && value >= 90,
  actions,
  onOverride,
  onTeach
}) => {
  const tone = confidenceTone(value, role);
  const display = value === null ? "no confidence" : `${value}% confidence`;
  const badge = (
    <span className={`kds-confidence kds-confidence--${tone}`}>
      {showCheck && <span aria-hidden="true">✓</span>}
      <span className="agentic-label">{value === null ? `- ${display}` : display}</span>
      {role !== "readonly" && <span className="agentic-chev kds-agentic-chev" aria-hidden="true">•••</span>}
    </span>
  );

  return (
    <AgenticMenu
      title={value === null ? "No score yet" : "Agent decision"}
      meta={value === null ? "value null" : `score ${(value / 100).toFixed(2)}`}
      actions={actions ?? defaultActions(value, onOverride, onTeach)}
      disabled={role === "readonly"}
      accent={tone === "caution" ? "#B45309" : undefined}
    >
      {badge}
    </AgenticMenu>
  );
};
