import React from "react";
import "./states.css";

export const StatesMatrix: React.FC = () => (
  <div className="stm-wrapper">
    <div className="stm-grid">
      {/* Loading */}
      <div className="stm-card">
        <span className="stm-k">loading</span>
        <div className="stm-skel" style={{ height: 14, width: "60%" }} />
        <div className="stm-skel" style={{ height: 10, width: "85%" }} />
        <div className="stm-skel" style={{ height: 10, width: "70%" }} />
        <div
          className="stm-skel"
          style={{ height: 26, width: "40%", marginTop: "auto" }}
        />
      </div>

      {/* Empty */}
      <div className="stm-card">
        <span className="stm-k">empty</span>
        <p className="stm-t" style={{ textAlign: "center", margin: "auto 0 4px" }}>
          No stale CIs
        </p>
        <p className="stm-s" style={{ textAlign: "center" }}>
          Scan ran 4m ago &middot; nothing to triage
        </p>
        <button className="stm-btn stm-prim" style={{ alignSelf: "center" }}>
          Run scan again
        </button>
      </div>

      {/* Filtered-empty */}
      <div className="stm-card">
        <span className="stm-k">filtered-empty</span>
        <p className="stm-t" style={{ textAlign: "center", margin: "auto 0 4px" }}>
          No results match filters
        </p>
        <p className="stm-s" style={{ textAlign: "center" }}>
          3 filters active &middot; 312 rows hidden
        </p>
        <button className="stm-btn" style={{ alignSelf: "center" }}>
          Clear all filters
        </button>
      </div>

      {/* Error */}
      <div
        className="stm-card"
        style={{ background: "#FFF7ED", borderColor: "#FED7AA" }}
      >
        <span className="stm-k" style={{ color: "#9A3412" }}>
          error
        </span>
        <p className="stm-t">Couldn&#39;t load findings</p>
        <p className="stm-s">
          Upstream cmdb_sync returned 502 at 14:04. Agent has retried 2x
          unsuccessfully.
        </p>
        <div style={{ display: "flex", gap: 6 }}>
          <button className="stm-btn stm-prim">Retry</button>
          <button className="stm-btn">Escalate</button>
        </div>
      </div>

      {/* Stale */}
      <div className="stm-card">
        <span className="stm-k">stale</span>
        <span className="stm-sev stm-amber">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          94d old
        </span>
        <p className="stm-t">Payments domain trust</p>
        <p className="stm-s">
          Underlying data not refreshed in 94 days. Treat figures as advisory.
        </p>
      </div>

      {/* Unauthorized */}
      <div className="stm-card">
        <span className="stm-k">unauthorized</span>
        <p className="stm-t">Access review is approver-only</p>
        <p className="stm-s">
          Your role: <b>access.requestor</b>. Ask an admin to grant{" "}
          <code style={{ fontSize: 10 }}>access.reviewer</code> to see findings.
        </p>
        <button className="stm-btn">Request access</button>
      </div>

      {/* Executing */}
      <div className="stm-card">
        <span className="stm-k">executing</span>
        <p className="stm-t">Retiring 47 CIs&hellip;</p>
        <p className="stm-s stm-dots">
          <i />
          <i />
          <i /> Step 2 of 4 &middot; validating incidents
        </p>
        <div
          style={{
            background: "#F1F5F9",
            borderRadius: 9999,
            height: 4,
            overflow: "hidden",
          }}
        >
          <div style={{ background: "#29707A", height: "100%", width: "52%" }} />
        </div>
        <button
          className="stm-btn"
          disabled
          style={{ opacity: 0.5, cursor: "not-allowed" }}
        >
          Execute &middot; in flight
        </button>
      </div>

      {/* Success-after-action */}
      <div
        className="stm-card"
        style={{ background: "#E0F2E8", borderColor: "#A8DDBF" }}
      >
        <span className="stm-k" style={{ color: "#0D5C2E" }}>
          success-after-action
        </span>
        <span className="stm-sev stm-emerald">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Executed
        </span>
        <p className="stm-t">47 CIs retired &middot; +2.1 pts trust</p>
        <p className="stm-s">Agent is monitoring for regressions</p>
        <div style={{ display: "flex", gap: 6 }}>
          <button className="stm-btn">View audit</button>
          <button className="stm-btn">Undo (4:12)</button>
        </div>
      </div>
    </div>
  </div>
);
