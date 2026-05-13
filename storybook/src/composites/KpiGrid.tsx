import React from "react";
import "./composites.css";

const KpiGrid: React.FC = () => (
  <div className="cmp-kpi-page">
    <div className="cmp-kpi-grid">
      {/* Total CIs tracked */}
      <div className="cmp-kpi">
        <div className="cmp-kpi-body">
          <p className="cmp-kpi-lbl">Total CIs tracked</p>
          <p className="cmp-kpi-val">4,812</p>
          <p className="cmp-kpi-delta cmp-up">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M7 17l10-10M17 7v10H7" />
            </svg>
            +124 WoW
          </p>
          <p className="cmp-kpi-sub">Discovered across 38 applications</p>
        </div>
      </div>

      {/* Stale CIs */}
      <div className="cmp-kpi">
        <div className="cmp-kpi-warn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
          </svg>
          Investigate with AI
        </div>
        <div className="cmp-kpi-body">
          <p className="cmp-kpi-lbl">Stale CIs</p>
          <p className="cmp-kpi-val">312</p>
          <p className="cmp-kpi-delta cmp-down">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M7 7l10 10M7 17h10V7" />
            </svg>
            +28 vs last week
          </p>
          <p className="cmp-kpi-sub">Not verified in 30d+</p>
        </div>
      </div>

      {/* Trust score */}
      <div className="cmp-kpi">
        <div className="cmp-kpi-body">
          <p className="cmp-kpi-lbl">Trust score</p>
          <p className="cmp-kpi-val">62%</p>
          <p className="cmp-kpi-delta cmp-up">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M7 17l10-10M17 7v10H7" />
            </svg>
            +1.4 pts YoY
          </p>
          <p className="cmp-kpi-sub">Target 95% &middot; gap 33 pts</p>
        </div>
      </div>
    </div>
  </div>
);

export default KpiGrid;
