import React from "react";
import "./agentic.css";

export interface StepTimelineProps {
  steps: Array<{
    title: string;
    state: "pending" | "active" | "done" | "failed";
    note?: string;
    timestamp?: string;
  }>;
  showActiveControls?: boolean;
  onEditStep?: (index: number) => void;
  onApproveOnce?: (index: number) => void;
  onApproveAll?: () => void;
}

export const StepTimeline: React.FC<StepTimelineProps> = ({
  steps,
  showActiveControls = true,
  onEditStep,
  onApproveOnce,
  onApproveAll
}) => (
  <div className="ka-timeline">
    {steps.map((step, index) => (
      <div className={`ka-step ka-step--${step.state}`} key={`${step.title}-${index}`}>
        <div className="ka-step-rail"><div className="ka-step-marker" /></div>
        <div>
          <div className="ka-step-label">{step.title}</div>
          {step.note && <div className="ka-step-note">{step.note}</div>}
          {step.state === "active" && showActiveControls && (
            <div className="ka-step-actions">
              <button className="ka-button" type="button" onClick={() => onEditStep?.(index)}>Edit step</button>
              <button className="ka-button" type="button" onClick={() => onApproveOnce?.(index)}>Approve once</button>
              <button className="ka-button ka-button-primary" type="button" onClick={onApproveAll}>Approve all</button>
            </div>
          )}
        </div>
        <span className="ka-step-time">{step.timestamp ?? (step.state === "active" ? "running..." : step.state === "pending" ? "queued" : "")}</span>
      </div>
    ))}
  </div>
);
