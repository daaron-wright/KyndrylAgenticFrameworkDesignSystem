import React from "react";
import "./templates.css";

export const DashboardTemplate: React.FC = () => (
  <div className="tpl-dashboard">
    <div className="tpl-header-row">
      <h2>DashboardTemplate</h2>
      <span className="tpl-hd" style={{ margin: 0 }}>AppShell › header · KpiGrid · StatusBanner[] · chart row</span>
    </div>

    {/* KPI Grid */}
    <div className="tpl-grid tpl-kpi-grid" style={{ marginBottom: 10 }}>
      <div className="tpl-slot tpl-slot-filled" style={{ padding: 12 }}>
        <div>
          <div className="tpl-hd" style={{ margin: "0 0 2px" }}>Trust score</div>
          <div className="tpl-kpi-value">62%</div>
        </div>
      </div>
      <div className="tpl-slot tpl-slot-filled" style={{ padding: 12 }}>
        <div>
          <div className="tpl-hd" style={{ margin: "0 0 2px" }}>Stale CIs</div>
          <div className="tpl-kpi-value">312</div>
        </div>
      </div>
      <div className="tpl-slot tpl-slot-filled" style={{ padding: 12 }}>
        <div>
          <div className="tpl-hd" style={{ margin: "0 0 2px" }}>Orphans</div>
          <div className="tpl-kpi-value">47</div>
        </div>
      </div>
    </div>

    {/* Status banner */}
    <div className="tpl-slot" style={{ marginBottom: 10 }}>
      StatusBannerCard[] — severity alerts + Investigate CTA
    </div>

    {/* Chart row */}
    <div className="tpl-grid tpl-row2" style={{ marginBottom: 10 }}>
      <div className="tpl-slot" style={{ height: 110 }}>Chart · Impacted CIs by Domain</div>
      <div className="tpl-slot" style={{ height: 110 }}>Chart · Priority mix donut</div>
    </div>

    {/* Signals panel */}
    <div className="tpl-slot" style={{ height: 80 }}>
      SignalsPanel · Optimisation + Reconciliation triggers
    </div>
  </div>
);
