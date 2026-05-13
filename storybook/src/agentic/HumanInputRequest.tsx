import React from "react";
import "./agentic.css";

export interface HumanInputRequestProps {
  question: string;
  options: string[];
  agent?: string;
  timestamp?: string;
  context?: string;
  blockingLabel?: string;
  primaryOption?: string;
  onChoose?: (option: string) => void;
}

export const HumanInputRequest: React.FC<HumanInputRequestProps> = ({
  question,
  options,
  agent = "Reconciliation Agent - needs your call",
  timestamp = "14:08:22",
  context = "CI web-gateway-02 has two plausible owners. The deploy edit is structural, the config edit is cosmetic, but the recency rule would pick the later config owner.",
  blockingLabel = "blocking - agent paused",
  primaryOption,
  onChoose
}) => (
  <div className="ka-hir" role="group" aria-label="Human input required">
    <div className="ka-hir-head">
      <span className="ka-hir-glyph" aria-hidden="true"><QuestionIcon /></span>
      <span className="ka-hir-agent">{agent}</span>
      <span className="ka-hir-time">{timestamp}</span>
    </div>
    <p className="ka-hir-question">{question}</p>
    {context && <div className="ka-hir-context">{context}</div>}
    <div className="ka-hir-actions">
      {options.map((option) => (
        <button
          key={option}
          className={`ka-button ${option === primaryOption ? "ka-button-primary" : ""}`}
          type="button"
          onClick={() => onChoose?.(option)}
        >
          {option}
        </button>
      ))}
      <span className="ka-hir-blocking">{blockingLabel}</span>
    </div>
  </div>
);

const QuestionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
