import React from "react";
import "./foundations.css";

export const SpacingElevation = () => (
  <div className="fdn-spacing-elevation">
    <div className="fdn-s">
      <div className="fdn-box" style={{ border: "1px solid #E2E8F0" }}>border only</div>
      <span className="fdn-lbl">default card</span>
    </div>
    <div className="fdn-s">
      <div className="fdn-box" style={{ border: "1px solid #E2E8F0", boxShadow: "0 1px 2px rgba(15,23,42,.04)" }}>sm</div>
      <span className="fdn-lbl">shadow-sm</span>
    </div>
    <div className="fdn-s">
      <div className="fdn-box" style={{ border: "1px solid #E2E8F0", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 1px 3px rgba(15,23,42,.03)" }}>card</div>
      <span className="fdn-lbl">shadow-card</span>
    </div>
    <div className="fdn-s">
      <div className="fdn-box" style={{ border: "1px solid #E2E8F0", boxShadow: "0 4px 16px rgba(15,23,42,.08),0 1px 2px rgba(15,23,42,.06)" }}>pop</div>
      <span className="fdn-lbl">popover · menu</span>
    </div>
    <div className="fdn-s">
      <div className="fdn-box" style={{ border: "1px solid #E2E8F0", boxShadow: "0 20px 48px rgba(15,23,42,.18)" }}>drawer</div>
      <span className="fdn-lbl">sheet · DAG panel</span>
    </div>
  </div>
);
