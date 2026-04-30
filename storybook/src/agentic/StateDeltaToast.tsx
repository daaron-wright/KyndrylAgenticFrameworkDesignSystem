import React from "react";
import "./agentic.css";

export interface StateDeltaToastProps {
  field: string;
  oldValue: string | number;
  newValue: string | number;
  subject?: string;
  context?: string;
  tone?: "positive" | "warm";
  actions?: string[];
  onUndo?: () => void;
  onView?: () => void;
}

export const StateDeltaToast: React.FC<StateDeltaToastProps> = ({
  field,
  oldValue,
  newValue,
  subject,
  context,
  tone = "positive",
  actions,
  onUndo,
  onView
}) => {
  const actionLabels = actions ?? [onUndo ? "Undo" : undefined, onView ? "Why?" : "Open"].filter(Boolean) as string[];

  return (
    <div className={`ka-toast ${tone === "warm" ? "ka-toast--warm" : ""}`} role="status" aria-live="polite">
      <div className="ka-toast-glyph" aria-hidden="true">{tone === "warm" ? <CheckIcon /> : <PlusIcon />}</div>
      <div className="ka-toast-body">
        Agent updated <strong>{subject ?? field}</strong>
        <div className="ka-toast-diff">
          <span className="ka-toast-from">{String(oldValue)}</span>
          <span className="ka-toast-arrow">-&gt;</span>
          <span className="ka-toast-to">{String(newValue)}</span>
          {context && <span className="ka-toast-context">- {context}</span>}
        </div>
      </div>
      <div className="ka-toast-actions">
        {actionLabels.map((action) => (
          <button
            key={action}
            className="ka-toast-action"
            type="button"
            onClick={action.toLowerCase().includes("undo") ? onUndo : onView}
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
};

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
    <polyline points="6 12 10 16 18 8" />
  </svg>
);
