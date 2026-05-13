import React from "react";
import "./composites.css";

const Recommendation: React.FC = () => (
  <div className="cmp-rec-page">
    <div className="cmp-rec-card">
      <div className="cmp-rec-head">
        <div className="cmp-rec-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        </div>
        <div style={{ flex: 1 }}>
          <h3 className="cmp-rec-title">Retire 47 stale CIs in payments-svc cluster</h3>
          <div className="cmp-rec-meta">
            <span className="cmp-rec-b cmp-rec-conf">92% confidence</span>
            <span className="cmp-rec-b cmp-rec-lift">+5.1 pts trust lift</span>
          </div>
        </div>
      </div>

      <div className="cmp-rec-reason">
        <strong>Agent reason &middot; </strong>
        None of these 47 CIs have appeared in discovery scans for 90+ days and no active incidents
        reference them. Retiring now lifts Payments domain trust from 58% to 63% and removes 47
        orphaned nodes from the graph.
      </div>

      <div className="cmp-rec-sig-label">Signals</div>
      <div className="cmp-rec-sigs">
        <div className="cmp-rec-sig-row">
          <span className="cmp-rec-dot" style={{ background: "#E68A00" }} />
          No discovery heartbeat 94d avg
        </div>
        <div className="cmp-rec-sig-row">
          <span className="cmp-rec-dot" style={{ background: "#64748B" }} />
          0 open incidents reference these CIs
        </div>
        <div className="cmp-rec-sig-row">
          <span className="cmp-rec-dot" style={{ background: "#1F8F4A" }} />
          Upstream apps show Healthy status
        </div>
      </div>

      <div className="cmp-rec-actions">
        <button className="cmp-ex">Execute</button>
        <button className="cmp-rev">Send for review</button>
        <button className="cmp-dis">Dismiss</button>
        <span className="cmp-rec-attrib">Powered by agentic AI &middot; 3m ago</span>
      </div>
    </div>
  </div>
);

export default Recommendation;
