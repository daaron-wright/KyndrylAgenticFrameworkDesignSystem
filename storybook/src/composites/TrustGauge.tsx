import React from "react";
import "./composites.css";

const TrustGauge: React.FC = () => (
  <div className="cmp-gauge-page">
    <div className="cmp-gauge-card">
      <div className="cmp-gauge-eyebrow">CMDB Trust Score</div>
      <div className="cmp-gauge-head">
        <h3>Current posture &middot; reconciled CIs</h3>
        <span className="cmp-gauge-target">Target 95% &middot; gap 33 pts</span>
      </div>
      <div className="cmp-gauge-pct">
        62<span style={{ fontSize: 16, color: "var(--fg-muted)", fontWeight: 500 }}>%</span>
      </div>
      <div className="cmp-gauge-bar">
        <div className="cmp-gauge-fill" />
        <div className="cmp-gauge-gap" />
        <div className="cmp-gauge-marker" />
      </div>
      <div className="cmp-gauge-legend">
        <span>0%</span>
        <span>current 62%</span>
        <span>target 95%</span>
      </div>
    </div>
  </div>
);

export default TrustGauge;
