import React from "react";
import "./foundations.css";

export const ColorsBrand: React.FC = () => (
  <div className="fdn-colors-brand">
    <div className="fdn-brand">
      <div className="fdn-big">
        <div>
          <div className="fdn-label">Brand accent</div>
          <div className="fdn-val">Warm Red 50</div>
        </div>
        <div>
          <div className="fdn-use">Logo · brand moments · destructive attention</div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", marginTop: "4px", opacity: 0.8 }}>
            #FF462D · --k-warm-red-50
          </div>
        </div>
      </div>
      <div className="fdn-big fdn-spruce">
        <div>
          <div className="fdn-label">Interactive primary</div>
          <div className="fdn-val">Spruce 60</div>
        </div>
        <div>
          <div className="fdn-use">Links · primary buttons · focus · selected</div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", marginTop: "4px", opacity: 0.8 }}>
            #29707A · --k-spruce-60
          </div>
        </div>
      </div>
    </div>

    <div className="fdn-row">
      <h4>Warm Red — brand accent ramp</h4>
      <div className="fdn-grid">
        <div className="fdn-sw">
          <div className="fdn-chip fdn-dark" style={{ background: "var(--k-warm-red-10)" }}>10</div>
          <div className="fdn-meta"><div className="fdn-name">Warm Red 10</div><div className="fdn-hex">#FFE8E0</div></div>
        </div>
        <div className="fdn-sw">
          <div className="fdn-chip fdn-dark" style={{ background: "var(--k-warm-red-20)" }}>20</div>
          <div className="fdn-meta"><div className="fdn-name">20</div><div className="fdn-hex">#FFB8A3</div></div>
        </div>
        <div className="fdn-sw">
          <div className="fdn-chip fdn-dark" style={{ background: "var(--k-warm-red-30)" }}>30</div>
          <div className="fdn-meta"><div className="fdn-name">30</div><div className="fdn-hex">#FF8766</div></div>
        </div>
        <div className="fdn-sw">
          <div className="fdn-chip" style={{ background: "var(--k-warm-red-40)" }}>40</div>
          <div className="fdn-meta"><div className="fdn-name">40</div><div className="fdn-hex">#FF6647</div></div>
        </div>
        <div className="fdn-sw">
          <div className="fdn-chip" style={{ background: "var(--k-warm-red-50)", outline: "2px solid var(--k-warm-red-50)", outlineOffset: "-2px" }}>50 ★</div>
          <div className="fdn-meta"><div className="fdn-name">50 · brand</div><div className="fdn-hex">#FF462D</div></div>
        </div>
        <div className="fdn-sw">
          <div className="fdn-chip" style={{ background: "var(--k-warm-red-60)" }}>60</div>
          <div className="fdn-meta"><div className="fdn-name">60</div><div className="fdn-hex">#E63A22</div></div>
        </div>
        <div className="fdn-sw">
          <div className="fdn-chip" style={{ background: "var(--k-warm-red-70)" }}>70</div>
          <div className="fdn-meta"><div className="fdn-name">70</div><div className="fdn-hex">#B82915</div></div>
        </div>
        <div className="fdn-sw">
          <div className="fdn-chip" style={{ background: "var(--k-warm-red-80)" }}>80</div>
          <div className="fdn-meta"><div className="fdn-name">80</div><div className="fdn-hex">#8A1E0D</div></div>
        </div>
        <div className="fdn-sw">
          <div className="fdn-chip" style={{ background: "var(--k-warm-red-90)" }}>90</div>
          <div className="fdn-meta"><div className="fdn-name">90</div><div className="fdn-hex">#5C1408</div></div>
        </div>
        <div className="fdn-sw">
          <div className="fdn-chip" style={{ background: "var(--k-warm-red-100)" }}>100</div>
          <div className="fdn-meta"><div className="fdn-name">100</div><div className="fdn-hex">#2E0A04</div></div>
        </div>
        <div className="fdn-sw">
          <div className="fdn-chip" style={{ background: "var(--k-warm-red-110)" }}>110</div>
          <div className="fdn-meta"><div className="fdn-name">110</div><div className="fdn-hex">#1A0602</div></div>
        </div>
      </div>
    </div>

    <div className="fdn-row">
      <h4>Spruce — UI workhorse ramp</h4>
      <div className="fdn-grid fdn-grid-spruce">
        <div className="fdn-sw">
          <div className="fdn-chip fdn-dark" style={{ background: "var(--k-spruce-10)" }}>10</div>
          <div className="fdn-meta"><div className="fdn-name">Spruce 10</div><div className="fdn-hex">#E8F2F4</div></div>
        </div>
        <div className="fdn-sw">
          <div className="fdn-chip fdn-dark" style={{ background: "var(--k-spruce-20)" }}>20</div>
          <div className="fdn-meta"><div className="fdn-name">20</div><div className="fdn-hex">#BEDDE2</div></div>
        </div>
        <div className="fdn-sw">
          <div className="fdn-chip fdn-dark" style={{ background: "var(--k-spruce-30)" }}>30</div>
          <div className="fdn-meta"><div className="fdn-name">30</div><div className="fdn-hex">#91C4CC</div></div>
        </div>
        <div className="fdn-sw">
          <div className="fdn-chip" style={{ background: "var(--k-spruce-40)" }}>40</div>
          <div className="fdn-meta"><div className="fdn-name">40</div><div className="fdn-hex">#5BA2AE</div></div>
        </div>
        <div className="fdn-sw">
          <div className="fdn-chip" style={{ background: "var(--k-spruce-50)" }}>50</div>
          <div className="fdn-meta"><div className="fdn-name">50</div><div className="fdn-hex">#3D8590</div></div>
        </div>
        <div className="fdn-sw">
          <div className="fdn-chip" style={{ background: "var(--k-spruce-60)", outline: "2px solid var(--k-spruce-60)", outlineOffset: "-2px" }}>60 ★</div>
          <div className="fdn-meta"><div className="fdn-name">60 · primary</div><div className="fdn-hex">#29707A</div></div>
        </div>
        <div className="fdn-sw">
          <div className="fdn-chip" style={{ background: "var(--k-spruce-70)" }}>70</div>
          <div className="fdn-meta"><div className="fdn-name">70 · hover</div><div className="fdn-hex">#1F5A63</div></div>
        </div>
        <div className="fdn-sw">
          <div className="fdn-chip" style={{ background: "var(--k-spruce-80)" }}>80</div>
          <div className="fdn-meta"><div className="fdn-name">80 · pressed</div><div className="fdn-hex">#17444B</div></div>
        </div>
        <div className="fdn-sw">
          <div className="fdn-chip" style={{ background: "var(--k-spruce-90)" }}>90</div>
          <div className="fdn-meta"><div className="fdn-name">90</div><div className="fdn-hex">#0F2E33</div></div>
        </div>
        <div className="fdn-sw">
          <div className="fdn-chip" style={{ background: "var(--k-spruce-100)" }}>100</div>
          <div className="fdn-meta"><div className="fdn-name">100</div><div className="fdn-hex">#07191C</div></div>
        </div>
      </div>
    </div>

    <div className="fdn-row">
      <h4>AI-surface tints — Opacity.AI convention</h4>
      <div className="fdn-grid" style={{ gridTemplateColumns: "repeat(6, 1fr)" }}>
        <div className="fdn-sw">
          <div className="fdn-chip fdn-dark" style={{ background: "var(--k-ai-spruce-06)" }}>06</div>
          <div className="fdn-meta"><div className="fdn-name">AI Spruce 06</div><div className="fdn-hex">rgba(41,112,122,.06)</div></div>
        </div>
        <div className="fdn-sw">
          <div className="fdn-chip fdn-dark" style={{ background: "var(--k-ai-spruce-12)" }}>12</div>
          <div className="fdn-meta"><div className="fdn-name">AI Spruce 12</div><div className="fdn-hex">rgba(41,112,122,.12)</div></div>
        </div>
        <div className="fdn-sw">
          <div className="fdn-chip fdn-dark" style={{ background: "var(--k-ai-spruce-20)" }}>20</div>
          <div className="fdn-meta"><div className="fdn-name">AI Spruce 20</div><div className="fdn-hex">rgba(41,112,122,.20)</div></div>
        </div>
        <div className="fdn-sw">
          <div className="fdn-chip fdn-dark" style={{ background: "var(--k-ai-warm-red-06)" }}>06</div>
          <div className="fdn-meta"><div className="fdn-name">AI Warm Red 06</div><div className="fdn-hex">rgba(255,70,45,.06)</div></div>
        </div>
        <div className="fdn-sw">
          <div className="fdn-chip fdn-dark" style={{ background: "var(--k-ai-warm-red-12)" }}>12</div>
          <div className="fdn-meta"><div className="fdn-name">AI Warm Red 12</div><div className="fdn-hex">rgba(255,70,45,.12)</div></div>
        </div>
        <div className="fdn-sw">
          <div className="fdn-chip fdn-dark" style={{ background: "var(--k-ai-warm-red-20)" }}>20</div>
          <div className="fdn-meta"><div className="fdn-name">AI Warm Red 20</div><div className="fdn-hex">rgba(255,70,45,.20)</div></div>
        </div>
      </div>
    </div>
  </div>
);
