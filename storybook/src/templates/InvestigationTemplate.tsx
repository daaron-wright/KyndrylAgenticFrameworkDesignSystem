import React from "react";
import "./templates.css";

export const InvestigationTemplate: React.FC = () => (
  <div className="tpl-investigation">
    <div className="tpl-hdr tpl-hdr-full">
      <h2>InvestigationTemplate</h2>
      <span>GraphControlRail · GraphCanvas · GraphInspector</span>
    </div>

    {/* Left column: filters rail */}
    <div className="tpl-col">
      <div className="tpl-slot">filters · domain · BU · status</div>
      <div className="tpl-slot">lensPicker · Full ▾</div>
      <div className="tpl-slot">searchInput</div>
      <div className="tpl-slot">legend</div>
    </div>

    {/* Center: graph canvas */}
    <div className="tpl-slot tpl-slot-solid tpl-graph-canvas">
      GraphCanvas · ReactFlow
    </div>

    {/* Right column: inspector */}
    <div className="tpl-col">
      <div className="tpl-slot">lineageBreadcrumb</div>
      <div className="tpl-slot">selection metadata</div>
      <div className="tpl-slot">upstream · downstream lists</div>
      <div className="tpl-slot">ImpactRollup</div>
      <div className="tpl-slot">actionBar</div>
    </div>
  </div>
);
