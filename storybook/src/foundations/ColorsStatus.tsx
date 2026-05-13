import React from "react";
import "./foundations.css";

export const ColorsStatus: React.FC = () => (
  <div className="fdn-colors-status">
    <div className="fdn-group">
      <div className="fdn-title">Graph node · status</div>
      <div className="fdn-row">
        <span className="fdn-chip"><span className="fdn-dot" style={{ background: "var(--status-healthy)" }} />Healthy</span>
        <span className="fdn-chip"><span className="fdn-dot" style={{ background: "var(--status-degraded)" }} />Degraded</span>
        <span className="fdn-chip"><span className="fdn-dot" style={{ background: "var(--status-impacted)" }} />Impacted</span>
        <span className="fdn-chip"><span className="fdn-dot" style={{ background: "var(--status-unknown)" }} />Unknown</span>
      </div>
    </div>
    <div className="fdn-group">
      <div className="fdn-title">Workflow · lifecycle</div>
      <div className="fdn-row">
        <span className="fdn-chip"><span className="fdn-dot" style={{ background: "var(--wf-pending)" }} />Pending</span>
        <span className="fdn-chip"><span className="fdn-dot" style={{ background: "var(--wf-approved)" }} />Approved</span>
        <span className="fdn-chip"><span className="fdn-dot" style={{ background: "var(--wf-executed)" }} />Executed</span>
        <span className="fdn-chip"><span className="fdn-dot" style={{ background: "var(--wf-rejected)" }} />Rejected</span>
      </div>
    </div>
  </div>
);
