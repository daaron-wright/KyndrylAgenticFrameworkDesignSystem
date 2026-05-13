import React from "react";
import "./composites.css";

const StatusBanner: React.FC = () => (
  <div className="cmp-banner-page">
    <div className="cmp-banner-card">
      <div className="cmp-banner-strip cmp-banner-amber">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
        </svg>
        312 stale CIs detected overnight &middot; High severity
      </div>
      <div className="cmp-banner-body">
        <div>
          <p className="cmp-banner-t">Payments and Logistics domains below trust target</p>
          <p className="cmp-banner-s">Review recommended — 8 batch actions prepared</p>
        </div>
        <button>
          Investigate with AI
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

export default StatusBanner;
