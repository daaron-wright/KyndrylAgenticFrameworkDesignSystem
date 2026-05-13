import React from "react";
import "./composites.css";

const ExecutionTimeline: React.FC = () => (
  <div className="cmp-exec-page">
    <div className="cmp-exec-col">
      {/* LIVE / IN-FLIGHT VARIANT */}
      <div>
        <div className="cmp-exec-eyebrow">live &middot; agent running</div>
        <p className="cmp-exec-sub-h">
          Step-by-step plan as it executes — pause, edit, branch, or step-through approve.
        </p>
      </div>

      <div className="cmp-exec-card cmp-live">
        <div className="cmp-exec-head">
          <span className="cmp-badge-live">
            <span className="cmp-dot" />
            Running
          </span>
          <h3 className="cmp-exec-h">Retire 47 stale CIs &middot; payments-svc</h3>
          <span className="cmp-exec-h-meta">step 2 of 4 &middot; 12.4s elapsed</span>
        </div>
        <div className="cmp-timeline">
          {/* Step 1: Done */}
          <div className="cmp-step cmp-done">
            <div className="cmp-rail"><div className="cmp-step-marker" /></div>
            <div>
              <div className="cmp-label">Planned retirement batch</div>
              <div className="cmp-sub">cmdb.query &middot; 47 candidates &middot; threshold &le; 50</div>
            </div>
            <span className="cmp-ts">14:02:11</span>
          </div>
          {/* Step 2: Active */}
          <div className="cmp-step cmp-active">
            <div className="cmp-rail"><div className="cmp-step-marker" /></div>
            <div>
              <div className="cmp-label">Validating against open incidents</div>
              <div className="cmp-sub">incident.search &middot; 4 of 47 checked &middot; no blockers yet</div>
              <div className="cmp-row-actions">
                <button className="cmp-btn">Edit step</button>
                <button className="cmp-btn">Approve once</button>
                <button className="cmp-btn cmp-prim">Approve all</button>
              </div>
            </div>
            <span className="cmp-ts">running&hellip;</span>
          </div>
          {/* Step 3: Pending */}
          <div className="cmp-step cmp-pending">
            <div className="cmp-rail"><div className="cmp-step-marker" /></div>
            <div>
              <div className="cmp-label">Retire 47 CIs in ServiceNow CMDB</div>
              <div className="cmp-sub">cmdb.write &middot; destructive &middot; approval gate</div>
            </div>
            <span className="cmp-ts">queued</span>
          </div>
          {/* Step 4: Pending */}
          <div className="cmp-step cmp-pending">
            <div className="cmp-rail"><div className="cmp-step-marker" /></div>
            <div>
              <div className="cmp-label">Update downstream graph nodes</div>
              <div className="cmp-sub">graph.write &middot; 47 nodes &middot; 18 edges</div>
            </div>
            <span className="cmp-ts">queued</span>
          </div>
        </div>
        <div className="cmp-exec-footer">
          <span className="cmp-pulse" />
          Step-through mode on &middot; pause to edit args
          <div className="cmp-controls">
            <button className="cmp-btn">Pause</button>
            <button className="cmp-btn">Branch</button>
            <button className="cmp-btn cmp-danger">Cancel</button>
          </div>
        </div>
      </div>

      {/* COMPLETED VARIANT */}
      <div style={{ marginTop: 6 }}>
        <div className="cmp-exec-eyebrow" style={{ color: "#0D5C2E" }}>
          completed &middot; audit view
        </div>
        <p className="cmp-exec-sub-h">Same component, frozen state. Always rendered after the run lands.</p>
      </div>

      <div className="cmp-exec-card">
        <div className="cmp-exec-head">
          <span className="cmp-badge-done">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          <h3 className="cmp-exec-h">Executed &middot; Retire 47 stale CIs</h3>
          <span className="cmp-exec-h-meta">38s &middot; 4 steps &middot; 0 errors</span>
        </div>
        <div className="cmp-timeline">
          <div className="cmp-step cmp-done">
            <div className="cmp-rail"><div className="cmp-step-marker" /></div>
            <div><div className="cmp-label">Planned retirement batch</div></div>
            <span className="cmp-ts">14:02:11</span>
          </div>
          <div className="cmp-step cmp-done">
            <div className="cmp-rail"><div className="cmp-step-marker" /></div>
            <div><div className="cmp-label">Validated against open incidents</div></div>
            <span className="cmp-ts">14:02:14</span>
          </div>
          <div className="cmp-step cmp-done">
            <div className="cmp-rail"><div className="cmp-step-marker" /></div>
            <div><div className="cmp-label">Retired 47 CIs in ServiceNow CMDB</div></div>
            <span className="cmp-ts">14:02:22</span>
          </div>
          <div className="cmp-step cmp-done">
            <div className="cmp-rail"><div className="cmp-step-marker" /></div>
            <div><div className="cmp-label">Updated downstream graph nodes</div></div>
            <span className="cmp-ts">14:02:24</span>
          </div>
        </div>
        <div className="cmp-exec-footer">
          <span className="cmp-pulse" />
          Agent is now monitoring &middot; next scan in 12 minutes
          <div className="cmp-controls">
            <button className="cmp-btn">View trace</button>
            <button className="cmp-btn">Branch from end</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ExecutionTimeline;
