import React from "react";
import "./foundations.css";

export const SpacingScale = () => (
  <div className="fdn-spacing-scale">
    <div className="fdn-hdr">Shidoka space tokens — space-set-quarter-x → space-set-3-x</div>
    <div className="fdn-grid">
      <div className="fdn-tok">
        <div className="fdn-box" style={{ width: "4px", height: "4px" }} />
        <span className="fdn-lbl"><b>quarter-x</b>4px</span>
      </div>
      <div className="fdn-tok">
        <div className="fdn-box" style={{ width: "8px", height: "8px" }} />
        <span className="fdn-lbl"><b>half-x</b>8px</span>
      </div>
      <div className="fdn-tok">
        <div className="fdn-box" style={{ width: "12px", height: "12px" }} />
        <span className="fdn-lbl"><b>¾-x</b>12px</span>
      </div>
      <div className="fdn-tok">
        <div className="fdn-box" style={{ width: "16px", height: "16px" }} />
        <span className="fdn-lbl"><b>1-x</b>16px</span>
      </div>
      <div className="fdn-tok">
        <div className="fdn-box" style={{ width: "24px", height: "24px" }} />
        <span className="fdn-lbl"><b>1½-x</b>24px</span>
      </div>
      <div className="fdn-tok">
        <div className="fdn-box" style={{ width: "32px", height: "32px" }} />
        <span className="fdn-lbl"><b>2-x</b>32px</span>
      </div>
      <div className="fdn-tok">
        <div className="fdn-box" style={{ width: "48px", height: "48px" }} />
        <span className="fdn-lbl"><b>3-x</b>48px</span>
      </div>
      <div className="fdn-tok">
        <div className="fdn-box" style={{ width: "64px", height: "64px" }} />
        <span className="fdn-lbl"><b>4-x</b>64px</span>
      </div>
      <div className="fdn-tok">
        <div className="fdn-box" style={{ width: "96px", height: "96px" }} />
        <span className="fdn-lbl"><b>6-x</b>96px</span>
      </div>
    </div>
  </div>
);
