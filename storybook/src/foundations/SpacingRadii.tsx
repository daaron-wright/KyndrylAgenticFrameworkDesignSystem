import React from "react";
import "./foundations.css";

export const SpacingRadii = () => (
  <div className="fdn-spacing-radii">
    <div className="fdn-hdr">Shidoka radii — 2 / 4 / 8 / 16 · pill</div>
    <div className="fdn-row">
      <div className="fdn-s">
        <div className="fdn-box" style={{ borderRadius: "2px" }}>xs</div>
        <span className="fdn-lbl"><b>2px</b>xs · dense table</span>
      </div>
      <div className="fdn-s">
        <div className="fdn-box" style={{ borderRadius: "4px" }}>sm</div>
        <span className="fdn-lbl"><b>4px</b>button · input · chip</span>
      </div>
      <div className="fdn-s">
        <div className="fdn-box" style={{ borderRadius: "8px" }}>md</div>
        <span className="fdn-lbl"><b>8px</b>card · default</span>
      </div>
      <div className="fdn-s">
        <div className="fdn-box" style={{ borderRadius: "16px" }}>lg</div>
        <span className="fdn-lbl"><b>16px</b>dialog · drawer</span>
      </div>
      <div className="fdn-s">
        <div className="fdn-box" style={{ borderRadius: "9999px" }}>pill</div>
        <span className="fdn-lbl"><b>full</b>badge · avatar · dot</span>
      </div>
    </div>
  </div>
);
