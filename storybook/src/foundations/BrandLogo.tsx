import React from "react";
import "./foundations.css";

export const BrandLogo = () => (
  <div className="fdn-brand-logo">
    <div className="fdn-mark">
      <img className="fdn-logo" src="/assets/kyndryl-logo.png" alt="Kyndryl" />
    </div>
    <div className="fdn-mark fdn-dark">
      <img className="fdn-logo" src="/assets/kyndryl-logo.png" alt="Kyndryl" style={{ filter: "brightness(0) invert(1)" }} />
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginLeft: "8px" }}>
      <span className="fdn-lbl">Primary · mono</span>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--fg-muted)" }}>public/kyndryl-logo.png · 126px rendered width</span>
    </div>
  </div>
);
