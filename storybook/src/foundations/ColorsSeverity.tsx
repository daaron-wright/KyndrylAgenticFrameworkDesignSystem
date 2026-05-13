import React from "react";
import "./foundations.css";

export const ColorsSeverity: React.FC = () => (
  <div className="fdn-colors-severity">
    <h4>Shidoka RAG taxonomy — stops 10 / 20 / 100 / 110</h4>
    <div className="fdn-grid">

      <div className="fdn-cell">
        <span className="fdn-pill" style={{ background: "var(--k-status-critical-10)", color: "var(--k-status-critical-110)", borderColor: "var(--k-status-critical-20)" }}>
          <span className="fdn-dot" style={{ background: "var(--k-status-critical-100)" }} />Critical
        </span>
        <div className="fdn-hdr">Critical</div>
        <div className="fdn-meta">Severe failure · data loss risk</div>
        <div className="fdn-stops">
          <div className="fdn-stop fdn-l" style={{ background: "var(--k-status-critical-10)" }}>10</div>
          <div className="fdn-stop fdn-l" style={{ background: "var(--k-status-critical-20)" }}>20</div>
          <div className="fdn-stop fdn-d" style={{ background: "var(--k-status-critical-100)" }}>100</div>
          <div className="fdn-stop fdn-d" style={{ background: "var(--k-status-critical-110)" }}>110</div>
        </div>
      </div>

      <div className="fdn-cell">
        <span className="fdn-pill" style={{ background: "var(--k-status-error-10)", color: "var(--k-status-error-110)", borderColor: "var(--k-status-error-20)" }}>
          <span className="fdn-dot" style={{ background: "var(--k-status-error-100)" }} />Error
        </span>
        <div className="fdn-hdr">Error</div>
        <div className="fdn-meta">Actionable failure</div>
        <div className="fdn-stops">
          <div className="fdn-stop fdn-l" style={{ background: "var(--k-status-error-10)" }}>10</div>
          <div className="fdn-stop fdn-l" style={{ background: "var(--k-status-error-20)" }}>20</div>
          <div className="fdn-stop fdn-d" style={{ background: "var(--k-status-error-100)" }}>100</div>
          <div className="fdn-stop fdn-d" style={{ background: "var(--k-status-error-110)" }}>110</div>
        </div>
      </div>

      <div className="fdn-cell">
        <span className="fdn-pill" style={{ background: "var(--k-status-warning-10)", color: "var(--k-status-warning-110)", borderColor: "var(--k-status-warning-20)" }}>
          <span className="fdn-dot" style={{ background: "var(--k-status-warning-100)" }} />Warning
        </span>
        <div className="fdn-hdr">Warning</div>
        <div className="fdn-meta">Attention required</div>
        <div className="fdn-stops">
          <div className="fdn-stop fdn-l" style={{ background: "var(--k-status-warning-10)" }}>10</div>
          <div className="fdn-stop fdn-l" style={{ background: "var(--k-status-warning-20)" }}>20</div>
          <div className="fdn-stop fdn-d" style={{ background: "var(--k-status-warning-100)" }}>100</div>
          <div className="fdn-stop fdn-d" style={{ background: "var(--k-status-warning-110)" }}>110</div>
        </div>
      </div>

      <div className="fdn-cell">
        <span className="fdn-pill" style={{ background: "var(--k-status-success-10)", color: "var(--k-status-success-110)", borderColor: "var(--k-status-success-20)" }}>
          <span className="fdn-dot" style={{ background: "var(--k-status-success-100)" }} />Success
        </span>
        <div className="fdn-hdr">Success</div>
        <div className="fdn-meta">Healthy · verified</div>
        <div className="fdn-stops">
          <div className="fdn-stop fdn-l" style={{ background: "var(--k-status-success-10)" }}>10</div>
          <div className="fdn-stop fdn-l" style={{ background: "var(--k-status-success-20)" }}>20</div>
          <div className="fdn-stop fdn-d" style={{ background: "var(--k-status-success-100)" }}>100</div>
          <div className="fdn-stop fdn-d" style={{ background: "var(--k-status-success-110)" }}>110</div>
        </div>
      </div>

      <div className="fdn-cell">
        <span className="fdn-pill" style={{ background: "var(--k-status-info-10)", color: "var(--k-status-info-110)", borderColor: "var(--k-status-info-20)" }}>
          <span className="fdn-dot" style={{ background: "var(--k-status-info-100)" }} />Info
        </span>
        <div className="fdn-hdr">Information</div>
        <div className="fdn-meta">Spruce ramp · neutral note</div>
        <div className="fdn-stops">
          <div className="fdn-stop fdn-l" style={{ background: "var(--k-status-info-10)" }}>10</div>
          <div className="fdn-stop fdn-l" style={{ background: "var(--k-status-info-20)" }}>20</div>
          <div className="fdn-stop fdn-d" style={{ background: "var(--k-status-info-100)" }}>100</div>
          <div className="fdn-stop fdn-d" style={{ background: "var(--k-status-info-110)" }}>110</div>
        </div>
      </div>

    </div>
  </div>
);
