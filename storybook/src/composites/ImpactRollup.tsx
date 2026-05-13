import React from "react";
import "./composites.css";

const rows = [
  { name: "CIs", color: "#29707A", fillColor: "#29707A", width: "88%", count: "47", value: "47" },
  { name: "Applications", color: "#5BA2AE", fillColor: "#5BA2AE", width: "28%", count: "3", value: "3" },
  { name: "Processes", color: "#91C4CC", fillColor: "#91C4CC", width: "18%", count: "2", value: "2" },
  { name: "Business units", color: "#3D8590", fillColor: "#3D8590", width: "10%", count: "1", value: "1" },
  { name: "Domains", color: "#334155", fillColor: "#334155", width: "10%", count: "1", value: "1" },
];

const ImpactRollup: React.FC = () => (
  <div className="cmp-impact-page">
    <div className="cmp-impact-card">
      <div className="cmp-impact-head">
        <h3>Impact rollup &middot; before action</h3>
        <span className="cmp-impact-lbl">Blast radius</span>
      </div>
      <div className="cmp-impact-rows">
        {rows.map((row) => (
          <div className="cmp-impact-r" key={row.name}>
            <span className="cmp-impact-name">
              <i style={{ background: row.color }} />
              {row.name}
            </span>
            <div className="cmp-impact-bar">
              <div
                className="cmp-impact-fill"
                style={{ background: row.fillColor, width: row.width }}
              >
                {row.count}
              </div>
            </div>
            <span className="cmp-impact-v">{row.value}</span>
          </div>
        ))}
      </div>
      <div className="cmp-impact-tot">
        <b>Total impact footprint &middot; 54 items</b>
        <span>Embeddable before every Execute</span>
      </div>
    </div>
  </div>
);

export default ImpactRollup;
