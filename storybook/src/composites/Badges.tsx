import React from "react";
import "./composites.css";

const Badges: React.FC = () => (
  <div className="cmp-badges">
    <span className="cmp-b cmp-conf">92% Confidence</span>
    <span className="cmp-b cmp-fresh">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
      Today
    </span>
    <span className="cmp-b cmp-stale">Last verified 3d ago</span>
    <span className="cmp-b cmp-fresh">12-week trend</span>
    <span className="cmp-b cmp-src">source: ServiceNow</span>
    <span className="cmp-b cmp-role">Approver-only</span>
  </div>
);

export default Badges;
