import React from "react";
import "./foundations.css";

export const ColorsChart: React.FC = () => (
  <div className="fdn-colors-chart">
    <h4>Data-viz categorical — order-locked, Spruce primary + Warm Red secondary</h4>
    <div className="fdn-grid">
      <div className="fdn-sw">
        <div className="fdn-chip" style={{ background: "#29707A" }} />
        <div className="fdn-name">cat-1</div>
        <div className="fdn-hex">spruce-60</div>
      </div>
      <div className="fdn-sw">
        <div className="fdn-chip" style={{ background: "#FF462D" }} />
        <div className="fdn-name">cat-2</div>
        <div className="fdn-hex">warm-red-50</div>
      </div>
      <div className="fdn-sw">
        <div className="fdn-chip" style={{ background: "#3E8AC2" }} />
        <div className="fdn-name">cat-3</div>
        <div className="fdn-hex">blue-50</div>
      </div>
      <div className="fdn-sw">
        <div className="fdn-chip" style={{ background: "#8A4FBF" }} />
        <div className="fdn-name">cat-4</div>
        <div className="fdn-hex">violet</div>
      </div>
      <div className="fdn-sw">
        <div className="fdn-chip" style={{ background: "#E68A00" }} />
        <div className="fdn-name">cat-5</div>
        <div className="fdn-hex">amber</div>
      </div>
      <div className="fdn-sw">
        <div className="fdn-chip" style={{ background: "#5C6A73" }} />
        <div className="fdn-name">cat-6</div>
        <div className="fdn-hex">cool-gray</div>
      </div>
      <div className="fdn-sw">
        <div className="fdn-chip" style={{ background: "#5BA2AE" }} />
        <div className="fdn-name">cat-7</div>
        <div className="fdn-hex">spruce-40</div>
      </div>
      <div className="fdn-sw">
        <div className="fdn-chip" style={{ background: "#FF8766" }} />
        <div className="fdn-name">cat-8</div>
        <div className="fdn-hex">warm-red-30</div>
      </div>
      <div className="fdn-sw">
        <div className="fdn-chip" style={{ background: "#1F5580" }} />
        <div className="fdn-name">cat-9</div>
        <div className="fdn-hex">blue-70</div>
      </div>
      <div className="fdn-sw">
        <div className="fdn-chip" style={{ background: "#B82915" }} />
        <div className="fdn-name">cat-10</div>
        <div className="fdn-hex">warm-red-70</div>
      </div>
    </div>
  </div>
);
