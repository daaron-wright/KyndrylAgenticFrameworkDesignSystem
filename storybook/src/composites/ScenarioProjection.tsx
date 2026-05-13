import React from "react";
import "./composites.css";

const tiles = [
  { k: "Trust", v: "67%", vd: "+5.1 pts" },
  { k: "Stale CIs", v: "265", vd: "\u221247" },
  { k: "Orphans", v: "0", vd: "\u221212" },
  { k: "Graph nodes", v: "4,765", vd: "cleaner" },
];

const ScenarioProjection: React.FC = () => (
  <div className="cmp-scenario-page">
    <div className="cmp-scenario-card">
      <h3>Projected outcome &middot; retire 47 stale CIs</h3>

      <div className="cmp-scenario-tiles">
        {tiles.map((tile) => (
          <div className="cmp-scenario-tile" key={tile.k}>
            <div className="cmp-scenario-k">{tile.k}</div>
            <div className="cmp-scenario-v">{tile.v}</div>
            <div className="cmp-scenario-vd">{tile.vd}</div>
          </div>
        ))}
      </div>

      <div className="cmp-scenario-chart">
        <svg viewBox="0 0 600 140" preserveAspectRatio="none">
          <defs>
            <pattern id="cmp-scn-g" width="60" height="28" patternUnits="userSpaceOnUse">
              <path d="M0 28H60M0 0H60" stroke="#F1F5F9" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="600" height="140" fill="url(#cmp-scn-g)" />
          {/* baseline */}
          <path
            d="M10 90 Q 120 85 220 92 T 420 95 T 590 98"
            fill="none"
            stroke="#CBD5E1"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
          {/* actual */}
          <path
            d="M10 88 Q 120 82 220 85 T 420 82"
            fill="none"
            stroke="#64748B"
            strokeWidth="2"
          />
          {/* scenario */}
          <path
            d="M420 82 Q 480 60 530 45 T 590 25"
            fill="none"
            stroke="#29707A"
            strokeWidth="2.5"
          />
          <circle cx="420" cy="82" r="3" fill="#141414" />
          <text x="430" y="76" fontSize="9" fill="#141414" fontFamily="ui-monospace,monospace">
            now
          </text>
          <text
            x="540"
            y="20"
            fontSize="9"
            fill="#29707A"
            fontFamily="ui-monospace,monospace"
            fontWeight="600"
          >
            +30d &middot; 67%
          </text>
        </svg>
      </div>

      <div className="cmp-scenario-legend">
        <span>
          <i style={{ background: "#64748B" }} />
          Actual
        </span>
        <span>
          <i style={{ background: "#CBD5E1", borderTop: "1px dashed #CBD5E1", height: 0 }} />
          Baseline (no action)
        </span>
        <span>
          <i style={{ background: "#29707A" }} />
          Scenario (execute)
        </span>
      </div>

      <p className="cmp-scenario-src">
        Powered by agentic AI &middot; trained on 12-week CMDB history &middot; 92% confidence
      </p>
    </div>
  </div>
);

export default ScenarioProjection;
