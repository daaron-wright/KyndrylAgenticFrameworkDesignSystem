import React from "react";
import "./foundations.css";

export const TypeBody = () => (
  <div className="fdn-type-body">
    <div className="fdn-hdr">Roboto — body 14–18px · Geist Mono — code</div>

    <div className="fdn-row">
      <span className="fdn-lbl">lg · 18/400</span>
      <span style={{ fontSize: "18px", color: "var(--fg-2)" }}>Trust posture is within target across 8 of 12 domains.</span>
      <span className="fdn-note">Roboto Regular · dense UI headline</span>
    </div>

    <div className="fdn-row">
      <span className="fdn-lbl">body · 14/400</span>
      <span style={{ fontSize: "14px", color: "var(--fg-2)" }}>Sensors report 4,812 CIs across 38 applications.</span>
      <span className="fdn-note">Roboto Regular · default</span>
    </div>

    <div className="fdn-row">
      <span className="fdn-lbl">small · 12/400</span>
      <span style={{ fontSize: "12px", color: "var(--fg-muted)" }}>Last verified 3 days ago · source ServiceNow CMDB</span>
      <span className="fdn-note">Helper · caption</span>
    </div>

    <div className="fdn-row">
      <span className="fdn-lbl">micro · 11/500</span>
      <span style={{ fontSize: "11px", color: "var(--fg-muted)", fontWeight: 500 }}>12/18 steps complete</span>
      <span className="fdn-note">Table meta · badge micro</span>
    </div>

    <div className="fdn-row">
      <span className="fdn-lbl">caption · 10/700</span>
      <span className="t-caption" style={{ fontSize: "10px" }}>EXECUTION PIPELINE</span>
      <span className="fdn-note">Uppercase eyebrow · 0.14em</span>
    </div>

    <div className="fdn-row">
      <span className="fdn-lbl">mono · 13</span>
      <span className="t-mono" style={{ fontSize: "13px", background: "transparent", padding: 0 }}>bINC4219003 · dd-mm-yyyy HH:mm</span>
      <span className="fdn-note">Geist Mono · IDs · timestamps</span>
    </div>
  </div>
);
