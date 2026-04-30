import React from "react";
import "./agentic.css";

type ToolState = "requested" | "executing" | "completed" | "failed" | "pending" | "running" | "ok" | "err";

export interface ToolCallCardProps {
  toolName: string;
  args: Record<string, unknown>;
  state?: ToolState;
  destructive?: boolean;
  stepLabel?: string;
  meta?: string;
  resultSummary?: string;
  gateLabel?: string;
  editableKeys?: string[];
  onApprove?: () => void;
  onApproveAll?: () => void;
  onEditArgs?: () => void;
  onReject?: () => void;
  onRetry?: () => void;
  onHandoff?: () => void;
}

const normalizeToolState = (state: ToolState = "pending") => {
  if (state === "requested") return "pending";
  if (state === "executing") return "running";
  if (state === "completed") return "ok";
  if (state === "failed") return "err";
  return state;
};

const statusCopy = {
  pending: { title: "About to call", status: "Awaiting approval" },
  running: { title: "Calling", status: "Running" },
  ok: { title: "Returned", status: "OK" },
  err: { title: "Failed", status: "Error" }
};

const formatValue = (value: unknown) => {
  if (typeof value === "string") return `"${value}"`;
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  return JSON.stringify(value);
};

const valueClass = (value: unknown) => typeof value === "number" || typeof value === "boolean" ? "ka-tool-number" : "ka-tool-string";

export const ToolCallCard: React.FC<ToolCallCardProps> = ({
  toolName,
  args,
  state = "pending",
  destructive,
  stepLabel = "step 2 of 6",
  meta,
  resultSummary,
  gateLabel = "step-through mode - on",
  editableKeys = [],
  onApprove,
  onApproveAll,
  onEditArgs,
  onReject,
  onRetry,
  onHandoff
}) => {
  const normalized = normalizeToolState(state);
  const isPending = normalized === "pending";
  const copy = statusCopy[normalized];
  const bodyMeta = meta ?? (normalized === "ok" ? resultSummary ?? "230ms - 22 rows - expand to view payload" : normalized === "err" ? "permission denied - retry budget 2 of 3 left" : `${stepLabel} - ServiceNow read`);

  return (
    <div className={`ka-tool ka-tool--${normalized} ka-edge ${destructive ? "ka-tool--destructive" : ""}`}>
      <div className="ka-tool-head">
        <span className="ka-tool-icon" aria-hidden="true">
          {normalized === "ok" ? <CheckIcon /> : normalized === "err" ? <AlertIcon /> : <CodeIcon />}
        </span>
        <div>
          <div className="ka-tool-title">
            {copy.title} <span className="ka-tool-name">{toolName}</span>{normalized === "ok" && resultSummary ? ` - ${resultSummary}` : ""}
          </div>
          <div className="ka-tool-meta">{bodyMeta}</div>
        </div>
        <div className="ka-tool-status"><span className="ka-tool-status-dot" />{copy.status}</div>
      </div>

      {(isPending || normalized === "err") && (
        <div className="ka-tool-body">
          {isPending && (
            <pre className="ka-tool-args" aria-label={`${toolName} arguments`}>
              {Object.entries(args).map(([key, value], index) => (
                <React.Fragment key={key}>
                  <span className="ka-tool-key">{key}</span>:{" "}
                  <span className={`${valueClass(value)} ${editableKeys.includes(key) ? "ka-tool-editable" : ""}`}>{formatValue(value)}</span>
                  {index < Object.keys(args).length - 1 ? "\n" : ""}
                </React.Fragment>
              ))}
            </pre>
          )}

          <div className="ka-tool-actions">
            {isPending ? (
              <>
                <button className="ka-button ka-button-primary" type="button" onClick={onApprove}><CheckIcon />Approve and run</button>
                <button className="ka-button" type="button" onClick={onEditArgs}>Edit args</button>
                <button className="ka-button" type="button" onClick={onReject}>Skip</button>
              </>
            ) : (
              <>
                <button className="ka-button" type="button" onClick={onRetry}>Retry as reviewer</button>
                <button className="ka-button" type="button" onClick={onHandoff}>Hand off to admin</button>
                <button className="ka-button" type="button" onClick={onReject}>Branch - readonly</button>
              </>
            )}
            {onApproveAll && isPending && <button className="ka-button" type="button" onClick={onApproveAll}>Approve all</button>}
            <span className="ka-tool-gate">{gateLabel}</span>
          </div>
        </div>
      )}
    </div>
  );
};

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const AlertIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);
