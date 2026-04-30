import React from "react";
import { AgenticMenu, type AgenticMenuAction } from "../_shared/AgenticMenu";
import "../_shared/dynamic.css";

export interface SourceAttributionProps {
  /** Dataset or source identifier. */
  dataset: string;
  /** Last-derived timestamp (display string). */
  timestamp: string;
  /** 0–100 confidence the agent has in this output. */
  confidence?: number;
  /** Optional short rationale or audit-trail link. */
  rationale?: string;
  actions?: AgenticMenuAction[];
}

export const SourceAttribution: React.FC<SourceAttributionProps> = ({ dataset, timestamp, confidence, rationale, actions }) => {
  const content = (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
      <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--k-spruce-60)" }} />
      <span className="agentic-label" style={{ fontWeight: 500, color: "var(--k-spruce-70)" }}>Powered by agentic AI</span>
      <span className="agentic-chev kds-agentic-chev" aria-hidden="true">•••</span>
    </span>
  );

  return (
    <footer style={{
      display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap",
      padding: "10px 14px",
      background: "var(--k-ai-spruce-06)",
      borderTop: "1px solid var(--border-1)",
      borderRadius: "0 0 8px 8px",
      fontFamily: "var(--font-sans)", fontSize: 11, color: "var(--fg-muted)"
    }}>
      <AgenticMenu
        title="Source controls"
        meta={dataset}
        actions={actions ?? [
          { id: "record", label: "Open source record", toast: "Opened source record" },
          { id: "trace", label: "Open provenance trace", toast: "Provenance trace opened" },
          { id: "dispute", label: "Dispute this source", destructive: true, toast: "Dispute queued - agent will relearn" }
        ]}
      >
        {content}
      </AgenticMenu>
      <span style={{ color: "var(--border-2)" }}>·</span>
      <span style={{ fontFamily: "var(--font-mono)" }}>dataset: {dataset}</span>
      <span style={{ color: "var(--border-2)" }}>·</span>
      <span style={{ fontFamily: "var(--font-mono)" }}>{timestamp}</span>
      {typeof confidence === "number" && (
        <>
          <span style={{ color: "var(--border-2)" }}>·</span>
          <span style={{ fontFamily: "var(--font-mono)" }}>confidence {confidence}%</span>
        </>
      )}
      {rationale && (
        <span style={{ marginLeft: "auto", color: "var(--k-spruce-60)", textDecoration: "underline", cursor: "pointer" }}>
          {rationale}
        </span>
      )}
    </footer>
  );
};
