import React from "react";
import "./templates.css";

export const TriageTemplate: React.FC = () => (
  <div className="tpl-triage">
    <div className="tpl-hdr tpl-hdr-full">
      <h2>TriageTemplate</h2>
      <span>FilterBar · FindingCard stack · InspectorDrawer</span>
    </div>

    {/* Left column: filter bar + finding cards */}
    <div className="tpl-col">
      <div className="tpl-slot tpl-slot-solid" style={{ padding: "8px 12px" }}>
        FilterBar · severity · domain · age · owner · clear
      </div>
      <div className="tpl-slot" style={{ height: 90 }}>
        FindingCard · 312 stale CIs (KPI row + distribution chart + table)
      </div>
      <div className="tpl-slot" style={{ height: 60 }}>
        FindingCard · 47 orphans
      </div>
      <div className="tpl-slot" style={{ height: 60 }}>
        FindingCard · 14 duplicate records
      </div>
    </div>

    {/* Right column: inspector drawer */}
    <div className="tpl-col">
      <div className="tpl-slot tpl-slot-solid" style={{ padding: "8px 12px", justifyContent: "flex-start" }}>
        InspectorDrawer<br />
        <span style={{ fontSize: 9, color: "var(--fg-muted)", marginTop: 4 }}>(pinned right)</span>
      </div>
      <div className="tpl-slot" style={{ height: 50 }}>
        metadataGrid
      </div>
      <div className="tpl-slot" style={{ height: 50 }}>
        signalsList
      </div>
      <div className="tpl-slot" style={{ height: 40 }}>
        relatedItems
      </div>
      <div className="tpl-slot" style={{ height: 40 }}>
        actionBar · Execute · Review · Defer
      </div>
    </div>
  </div>
);
