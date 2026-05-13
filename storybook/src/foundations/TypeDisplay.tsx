import React from "react";
import "./foundations.css";

export const TypeDisplay = () => (
  <div className="fdn-type-display">
    <div className="fdn-wrap">
      <div>
        <div className="fdn-bigAg">Ag</div>
        <div className="fdn-wtag">TWK EVERETT · DISPLAY · 20PX+</div>
        <div style={{ fontSize: "11px", color: "var(--fg-muted)", marginTop: "4px" }}>
          Page titles, section headings, card titles, KPI numbers.
        </div>
        <div className="fdn-weights">
          <div className="fdn-w"><b style={{ fontWeight: 300 }}>Ag</b><span>300 Light</span></div>
          <div className="fdn-w"><b style={{ fontWeight: 400 }}>Ag</b><span>400 Regular</span></div>
          <div className="fdn-w"><b style={{ fontWeight: 500 }}>Ag</b><span>500 Medium</span></div>
          <div className="fdn-w"><b style={{ fontWeight: 700 }}>Ag</b><span>700 Bold</span></div>
          <div className="fdn-w"><b style={{ fontWeight: 900 }}>Ag</b><span>900 Black</span></div>
        </div>
      </div>
      <div style={{ borderLeft: "1px solid var(--border-1)", paddingLeft: "28px" }}>
        <div className="fdn-scale">
          <div className="fdn-disp" style={{ fontSize: "28px", fontWeight: 500, letterSpacing: "-0.01em", color: "var(--fg-1)", lineHeight: 1 }}>
            Display · 28/500
          </div>
          <span className="fdn-lbl">Page title · KPI hero</span>

          <div className="fdn-disp" style={{ fontSize: "22px", fontWeight: 500, color: "var(--fg-1)", lineHeight: 1 }}>
            H1 · 22/500
          </div>
          <span className="fdn-lbl">Section heading</span>

          <div className="fdn-disp" style={{ fontSize: "18px", fontWeight: 500, color: "var(--fg-1)", lineHeight: 1 }}>
            H2 · 18/500
          </div>
          <span className="fdn-lbl">Card title</span>

          <div style={{ fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: 500, color: "var(--fg-1)", lineHeight: 1 }}>
            H3 · 14/500 <span className="fdn-lbl" style={{ fontWeight: 400 }}>— Roboto</span>
          </div>
          <span className="fdn-lbl">Strong label (body stack)</span>
        </div>
        <div style={{ marginTop: "14px", paddingTop: "10px", borderTop: "1px dashed var(--border-1)", fontSize: "10px", color: "var(--fg-muted)", maxWidth: "340px", lineHeight: 1.5 }}>
          <span className="fdn-role">Shidoka rule</span> — TWK Everett for <b>display</b> type 20px and above. Body copy 14–18px routes to Roboto.
        </div>
      </div>
    </div>
  </div>
);
