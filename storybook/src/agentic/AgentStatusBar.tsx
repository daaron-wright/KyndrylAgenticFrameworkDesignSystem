import React from "react";
import "./agentic.css";

export interface AgentStatusBarProps {
  state: "started" | "thinking" | "streaming" | "waiting" | "paused" | "done";
  agent?: string;
  label?: string;
  meta?: string;
  step?: string;
  stepThrough?: boolean;
  showStepThrough?: boolean;
  primaryAction?: string;
  secondaryAction?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
  onPauseResume?: () => void;
  onBranch?: () => void;
  onStepThroughChange?: (value: boolean) => void;
}

const copyByState: Record<AgentStatusBarProps["state"], { label: string; meta: string; primary: string; secondary: string }> = {
  started: { label: "Starting run", meta: "step 1 of 6", primary: "Pause", secondary: "Cancel" },
  thinking: { label: "Planning - gathering signals", meta: "step 2 of 6 - 4.2s", primary: "Pause", secondary: "Cancel" },
  streaming: { label: "Responding", meta: "142 tokens - 18 t/s", primary: "Stop", secondary: "Inject correction" },
  waiting: { label: "Waiting for you - approval required", meta: "on step 3 - write impact", primary: "Review", secondary: "Skip step" },
  paused: { label: "Paused by you", meta: "3 steps remaining", primary: "Resume", secondary: "Discard" },
  done: { label: "Done - 6 steps in 38s", meta: "2 tools - 1 handoff - 0 errors", primary: "View trace", secondary: "Branch from end" }
};

const normalizeState = (state: AgentStatusBarProps["state"]) => state === "started" ? "thinking" : state;

export const AgentStatusBar: React.FC<AgentStatusBarProps> = ({
  state,
  agent = "Reconciliation Agent",
  label,
  meta,
  step,
  stepThrough,
  showStepThrough,
  primaryAction,
  secondaryAction,
  onPrimary,
  onSecondary,
  onPauseResume,
  onBranch,
  onStepThroughChange
}) => {
  const copy = copyByState[state];
  const stateClass = normalizeState(state);
  const mainAction = primaryAction ?? copy.primary;
  const supportingAction = secondaryAction ?? copy.secondary;

  return (
    <div className={`ka-status ka-status--${stateClass} ${stateClass === "thinking" || stateClass === "streaming" ? "ka-edge" : ""}`} role="status" aria-live="polite">
      <span className="ka-status-dot" />
      <span className="ka-status-label">{label ?? copy.label}</span>
      <span className="ka-status-meta">{meta ?? step ?? copy.meta}</span>
      <div className="ka-status-controls">
        {(showStepThrough || onStepThroughChange) && (
          <label className="ka-status-step">
            <input type="checkbox" checked={!!stepThrough} onChange={(event) => onStepThroughChange?.(event.target.checked)} />
            Step-through
          </label>
        )}
        {supportingAction && (
          <button className={`ka-button ${state === "done" ? "" : "ka-button-danger"}`} type="button" onClick={onSecondary ?? onBranch}>
            {supportingAction}
          </button>
        )}
        {mainAction && (
          <button
            className={`ka-button ${state === "waiting" ? "ka-button-warn" : state === "paused" || state === "done" ? "ka-button-primary" : ""}`}
            type="button"
            onClick={onPrimary ?? onPauseResume}
          >
            {mainAction}
          </button>
        )}
      </div>
    </div>
  );
};
