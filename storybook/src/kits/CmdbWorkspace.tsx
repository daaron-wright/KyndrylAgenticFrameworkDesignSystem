import React, { useState } from "react";
import "./kits.css";

type View = "dashboard" | "triage" | "recommendations" | "investigation" | "changes" | "chat" | "incidents" | "reports";

const viewLabels: Record<View, string> = {
  dashboard: "Dashboard",
  triage: "Access review",
  recommendations: "Recommendations",
  investigation: "Investigation",
  changes: "Change requests",
  chat: "Assistant",
  incidents: "Incidents",
  reports: "Reports",
};

const navItems: { view: View; label: string; badge?: string }[] = [
  { view: "chat", label: "Assistant" },
  { view: "dashboard", label: "Dashboard", badge: "3" },
  { view: "investigation", label: "Investigation" },
  { view: "triage", label: "Access review" },
  { view: "recommendations", label: "Recommendations" },
  { view: "changes", label: "Change requests" },
  { view: "incidents", label: "Incidents" },
  { view: "reports", label: "Reports" },
];

export const CmdbWorkspace: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("anna_access");
  const [password, setPassword] = useState("password");
  const [currentView, setCurrentView] = useState<View>("dashboard");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerTarget, setDrawerTarget] = useState<"ci" | "app">("ci");
  const [expandedSignals, setExpandedSignals] = useState<Set<string>>(new Set());
  const [recExecuted, setRecExecuted] = useState(false);
  const [approvedRows, setApprovedRows] = useState<Set<number>>(new Set());

  const displayName = username
    .split("_")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
  const initials = username.slice(0, 2).toUpperCase();

  const doLogin = () => {
    setLoggedIn(true);
  };

  const signout = () => {
    setLoggedIn(false);
  };

  const openDrawer = (target: "ci" | "app") => {
    setDrawerTarget(target);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const toggleSignal = (id: string) => {
    setExpandedSignals((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const approveRow = (idx: number) => {
    setApprovedRows((prev) => new Set(prev).add(idx));
  };

  if (!loggedIn) {
    return (
      <div className="kit-wrapper kit-cmdb">
        <div className="kit-login-screen">
          <div className="kit-login-box">
            <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 20, color: "#29707A" }}>Kyndryl</div>
            <h2>Sign in</h2>
            <p>CMDB Data Quality workspace</p>
            <div className="kit-field">
              <label>Username</label>
              <input value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="kit-field">
              <label>Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="kit-login-btn" onClick={doLogin}>
              Sign in
            </button>
            <div className="kit-demo-accounts">
              <strong>Demo accounts</strong>
              <code>anna_access</code> &middot; <code>raj_security</code> &middot; <code>tom_team</code>
              <br />
              <span style={{ marginTop: 4, display: "inline-block" }}>
                Password: <code>password</code>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="kit-wrapper kit-cmdb">
      <div className="kit-cmdb-app">
        {/* Sidebar */}
        <aside className="kit-side">
          <div className="kit-side-head">
            <span style={{ fontSize: 20, fontWeight: 700, color: "#29707A" }}>Kyndryl</span>
          </div>
          <nav className="kit-nav">
            <ul>
              {navItems.map((item) => (
                <li key={item.view}>
                  <a
                    className={currentView === item.view ? "kit-active" : ""}
                    onClick={() => setCurrentView(item.view)}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      {item.view === "chat" && <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></>}
                      {item.view === "dashboard" && <><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></>}
                      {item.view === "investigation" && <><circle cx="12" cy="12" r="9" /><path d="M12 3v9l6 3" /></>}
                      {item.view === "triage" && <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>}
                      {item.view === "recommendations" && <><path d="M12 2l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" /></>}
                      {item.view === "changes" && <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>}
                      {item.view === "incidents" && <><circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" /></>}
                      {item.view === "reports" && <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M16 13H8M16 17H8M10 9H8" /></>}
                    </svg>
                    {item.label}
                    {item.badge && <span className="kit-badge">{item.badge}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="kit-side-foot">
            <button className="kit-explain-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 15, height: 15 }}>
                <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
              </svg>
              Explainability
            </button>
            <div style={{ borderTop: "1px solid var(--border-1)", paddingTop: 8 }}>
              <div className="kit-user-info">
                <div className="kit-name">{displayName}</div>
                <button className="kit-signout" onClick={signout}>
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </aside>

        {/* Main */}
        <div className="kit-main">
          <header className="kit-header">
            <h1>{viewLabels[currentView]}</h1>
            <div className="kit-avatar">{initials}</div>
          </header>
          <div className="kit-content">
            {/* Dashboard */}
            {currentView === "dashboard" && (
              <div>
                {/* Gauge */}
                <div className="kit-gauge-card kit-card">
                  <div className="kit-eyebrow" style={{ marginBottom: 6 }}>CMDB Trust Score</div>
                  <div className="kit-gauge-head">
                    <h3>Reconciled &amp; verified CIs &middot; production domains</h3>
                    <span style={{ fontSize: 11, color: "var(--fg-muted)" }}>Target 95% &middot; gap 33 pts</span>
                  </div>
                  <div className="kit-gauge-pct">
                    62<span style={{ fontSize: 20, color: "var(--fg-muted)", fontWeight: 500 }}>%</span>
                  </div>
                  <div className="kit-gauge-bar">
                    <div className="kit-gauge-fill" />
                    <div className="kit-gauge-gap" />
                    <div className="kit-gauge-mark" />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--fg-muted)", fontFamily: "var(--font-mono)", marginTop: 6 }}>
                    <span>0%</span><span>current 62%</span><span>target 95%</span>
                  </div>
                </div>

                {/* KPIs */}
                <div className="kit-kpi-grid">
                  <div className="kit-kpi kit-card">
                    <div style={{ padding: "16px 20px" }}>
                      <p className="kit-kpi-lbl">Total CIs tracked</p>
                      <p className="kit-kpi-val">4,812</p>
                      <p className="kit-kpi-delta kit-up">+124 WoW</p>
                      <p className="kit-kpi-sub">Discovered across 38 applications</p>
                    </div>
                  </div>
                  <div className="kit-kpi kit-card" style={{ padding: 0 }}>
                    <div className="kit-kpi-warn">
                      <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 14, height: 14, color: "#B45309" }}>
                          <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2V10h2v4z" />
                        </svg>
                        Unreviewed for 30d+
                      </span>
                      <button className="kit-kpi-warn-btn" onClick={() => setCurrentView("triage")}>
                        Investigate with AI &rarr;
                      </button>
                    </div>
                    <div style={{ padding: "14px 20px" }}>
                      <p className="kit-kpi-lbl">Stale CIs</p>
                      <p className="kit-kpi-val">312</p>
                      <p className="kit-kpi-delta kit-down">+28 vs last week</p>
                      <p className="kit-kpi-sub">Not verified in 30d+</p>
                    </div>
                  </div>
                  <div className="kit-kpi kit-card">
                    <div style={{ padding: "16px 20px" }}>
                      <p className="kit-kpi-lbl">Orphaned CIs</p>
                      <p className="kit-kpi-val">47</p>
                      <p className="kit-kpi-delta kit-up">&minus;8 vs last week</p>
                      <p className="kit-kpi-sub">No upstream/downstream edges</p>
                    </div>
                  </div>
                </div>

                {/* Charts row */}
                <div className="kit-row-2">
                  <div className="kit-chart-card kit-card">
                    <div className="kit-chart-head">
                      <h3>Impacted CIs by Domain</h3>
                      <p>Rolled up from active impact set &middot; last 24h</p>
                    </div>
                    <div className="kit-chart-body">
                      {[
                        { h: "85%", v: "142", l: "Payments" },
                        { h: "68%", v: "118", l: "Logistics" },
                        { h: "52%", v: "91", l: "Retail" },
                        { h: "38%", v: "66", l: "HR" },
                        { h: "22%", v: "38", l: "Shared" },
                      ].map((b) => (
                        <div className="kit-bar" key={b.l} style={{ height: b.h }}>
                          <span>{b.v}</span>
                          <small>{b.l}</small>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="kit-chart-card kit-card">
                    <div className="kit-chart-head">
                      <h3>Correction priority mix</h3>
                      <p>124 open correction requests</p>
                    </div>
                    <div className="kit-donut" />
                    <div className="kit-donut-legend">
                      <span><i style={{ background: "#E11D48" }} />Immediate &middot; 22%</span>
                      <span><i style={{ background: "#F59E0B" }} />Urgent &middot; 26%</span>
                      <span><i style={{ background: "#29707A" }} />High &middot; 30%</span>
                      <span><i style={{ background: "#10B981" }} />Medium &middot; 22%</span>
                    </div>
                  </div>
                </div>

                {/* Signals */}
                <div className="kit-sig-panel kit-card">
                  <div className="kit-sig-head">
                    <span style={{ fontWeight: 600, color: "var(--fg-1)" }}>Live Signals</span>
                    <span style={{ color: "var(--fg-muted)" }}>&middot;</span>
                    <span style={{ color: "var(--fg-muted)", fontSize: 11 }}>6 active &middot; 1 Critical &middot; 3 High &middot; 2 Medium</span>
                  </div>
                  <div className="kit-sig-grid">
                    <div className="kit-sig-col">
                      <div className="kit-sig-col-head">
                        <i style={{ background: "#10B981" }} />
                        <span className="kit-lbl">Optimisation</span>
                        <span className="kit-cnt">3 signals</span>
                      </div>
                      <div className={`kit-sig-card kit-high ${expandedSignals.has("s1") ? "kit-expanded" : ""}`} onClick={() => toggleSignal("s1")}>
                        <div className="kit-sig-row-top">
                          <span className="kit-sev-pill kit-high">High</span>
                          <span className="kit-sig-title">Retire 47 unused CIs</span>
                        </div>
                        <p className="kit-sig-metric">+5.1 pts domain trust lift</p>
                        <div className="kit-sig-detail">
                          None of these 47 CIs appeared in discovery for 90+ days and no incidents reference them. Safe to retire in batch.
                          <div className="kit-sig-actions">
                            <button className="kit-btn-xs kit-primary">Ask AI</button>
                            <button className="kit-btn-xs kit-secondary">View &rarr;</button>
                          </div>
                        </div>
                      </div>
                      <div className={`kit-sig-card kit-medium ${expandedSignals.has("s2") ? "kit-expanded" : ""}`} onClick={() => toggleSignal("s2")}>
                        <div className="kit-sig-row-top">
                          <span className="kit-sev-pill kit-medium">Medium</span>
                          <span className="kit-sig-title">Consolidate 14 duplicate records</span>
                        </div>
                        <p className="kit-sig-metric">Estimated 2h analyst time saved</p>
                      </div>
                    </div>
                    <div className="kit-sig-col">
                      <div className="kit-sig-col-head">
                        <i style={{ background: "#E11D48" }} />
                        <span className="kit-lbl">Reconciliation triggers</span>
                        <span className="kit-cnt">3 signals</span>
                      </div>
                      <div className={`kit-sig-card kit-critical ${expandedSignals.has("s3") ? "kit-expanded" : ""}`} onClick={() => toggleSignal("s3")}>
                        <div className="kit-sig-row-top">
                          <span className="kit-sev-pill kit-critical">Critical</span>
                          <span className="kit-sig-title">Payments domain below 60%</span>
                        </div>
                        <p className="kit-sig-metric">Trust dropped 4 pts overnight</p>
                        <div className="kit-sig-detail">
                          22 new orphaned CIs in payments-svc cluster since the 02:00 discovery scan. Upstream app <code>checkout-api</code> marked Degraded.
                          <div className="kit-sig-actions">
                            <button className="kit-btn-xs kit-primary">Investigate</button>
                            <button className="kit-btn-xs kit-secondary">View &rarr;</button>
                          </div>
                        </div>
                      </div>
                      <div className={`kit-sig-card kit-high ${expandedSignals.has("s4") ? "kit-expanded" : ""}`} onClick={() => toggleSignal("s4")}>
                        <div className="kit-sig-row-top">
                          <span className="kit-sev-pill kit-high">High</span>
                          <span className="kit-sig-title">Owner missing &middot; 8 CIs</span>
                        </div>
                        <p className="kit-sig-metric">Logistics domain &middot; since 3d</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Triage */}
            {currentView === "triage" && (
              <div>
                <div className="kit-card" style={{ marginBottom: 16 }}>
                  <div className="kit-triage-header">
                    <h3>Stale CIs &middot; 312 findings</h3>
                    <div className="kit-filters">
                      <button className="kit-filter">All domains</button>
                      <button className="kit-filter">All priorities</button>
                      <button className="kit-filter">Clear all</button>
                    </div>
                  </div>
                  <table className="kit-triage-table">
                    <thead>
                      <tr><th>CI</th><th>Application</th><th>Last verified</th><th>Priority</th><th>Signals</th><th></th></tr>
                    </thead>
                    <tbody>
                      {[
                        { ci: "payments-db-03", app: "checkout-api", age: "94 days ago", sev: "critical" as const, sig: 3 },
                        { ci: "logistics-cache-11", app: "shipment-tracker", age: "62 days ago", sev: "high" as const, sig: 2 },
                        { ci: "hr-audit-svc-04", app: "people-hub", age: "44 days ago", sev: "medium" as const, sig: 1 },
                        { ci: "retail-session-02", app: "pos-gateway", age: "38 days ago", sev: "medium" as const, sig: 2 },
                        { ci: "shared-auth-proxy-01", app: "iam-core", age: "33 days ago", sev: "low" as const, sig: 1 },
                      ].map((row) => (
                        <tr key={row.ci} onClick={() => openDrawer("ci")}>
                          <td className="kit-mono">{row.ci}</td>
                          <td>{row.app}</td>
                          <td>{row.age}</td>
                          <td><span className={`kit-sev-pill kit-${row.sev}`}>{row.sev.charAt(0).toUpperCase() + row.sev.slice(1)}</span></td>
                          <td>{row.sig}</td>
                          <td><button className="kit-link">Investigate &rarr;</button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Recommendations */}
            {currentView === "recommendations" && (
              <div>
                <div className="kit-rec-card kit-card">
                  <div className="kit-rec-head">
                    <div className="kit-rec-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20 }}>
                        <path d="M12 2l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" />
                      </svg>
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 className="kit-rec-title">Retire 47 stale CIs in payments-svc cluster</h3>
                      <div className="kit-rec-meta">
                        <span className="kit-rec-b kit-conf">92% confidence</span>
                        <span className="kit-rec-b kit-lift">+5.1 pts trust lift</span>
                        <span className="kit-rec-b" style={{ background: "#F1F5F9", color: "#475569", borderColor: "#E2E8F0" }}>Last verified today</span>
                      </div>
                    </div>
                  </div>
                  <div className="kit-rec-reason">
                    <strong>Agent reason &middot; </strong>None of these 47 CIs have appeared in discovery scans for 90+ days and no active incidents reference them. Retiring now lifts Payments domain trust from 58% to 63% and removes 47 orphaned nodes from the graph.
                  </div>
                  <div className="kit-rec-sig-head">Signals</div>
                  <div className="kit-rec-sigs">
                    <div className="kit-rec-sig"><i style={{ background: "#F59E0B" }} />No discovery heartbeat &middot; 94d average</div>
                    <div className="kit-rec-sig"><i style={{ background: "#64748B" }} />0 open incidents reference these CIs</div>
                    <div className="kit-rec-sig"><i style={{ background: "#10B981" }} />All upstream apps show Healthy status</div>
                  </div>
                  <div className="kit-rec-sig-head">Impact rollup -- before action</div>
                  <div className="kit-rollup" style={{ marginTop: 8 }}>
                    <div className="kit-rollup-tile"><div className="kit-rk">Impacted CIs</div><div className="kit-rv">47</div></div>
                    <div className="kit-rollup-tile"><div className="kit-rk">Applications</div><div className="kit-rv">3</div></div>
                    <div className="kit-rollup-tile"><div className="kit-rk">Processes</div><div className="kit-rv">2</div></div>
                    <div className="kit-rollup-tile"><div className="kit-rk">Business units</div><div className="kit-rv">1</div></div>
                  </div>
                  <div className="kit-rec-actions">
                    <button
                      className="kit-btn-sm kit-primary"
                      onClick={() => setRecExecuted(true)}
                      disabled={recExecuted}
                      style={recExecuted ? { background: "#047857" } : undefined}
                    >
                      {recExecuted ? "Executed \u2713" : "Execute"}
                    </button>
                    <button className="kit-btn-sm kit-secondary">Send for review</button>
                    <button className="kit-btn-sm kit-ghost">Dismiss</button>
                    <span className="kit-rec-attrib">Powered by agentic AI &middot; 3m ago</span>
                  </div>
                </div>
              </div>
            )}

            {/* Investigation */}
            {currentView === "investigation" && (
              <div className="kit-graph-layout">
                <div className="kit-graph-rail">
                  <h4>Filters</h4>
                  <div className="kit-lens" style={{ marginBottom: 6 }}>
                    <button style={{ textAlign: "left" }}>All domains &#x25BE;</button>
                    <button style={{ textAlign: "left" }}>All business units &#x25BE;</button>
                    <button style={{ textAlign: "left" }}>All statuses &#x25BE;</button>
                  </div>
                  <h4>Lens</h4>
                  <div className="kit-lens">
                    <button className="kit-active">Full context</button>
                    <button>Upstream</button>
                    <button>Downstream</button>
                    <button>Business impact</button>
                  </div>
                  <h4>Legend</h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 11 }}>
                    {[
                      { color: "#10B981", label: "Healthy" },
                      { color: "#F59E0B", label: "Degraded" },
                      { color: "#F97316", label: "Impacted" },
                      { color: "#94A3B8", label: "Unknown" },
                    ].map((item) => (
                      <div key={item.label} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        <i style={{ width: 8, height: 8, borderRadius: "50%", background: item.color, display: "inline-block" }} />
                        {item.label}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="kit-graph-canvas">
                  {/* Edges */}
                  <div className="kit-edge" style={{ top: 84, left: 170, width: 180 }} />
                  <div className="kit-edge" style={{ top: 84, left: 170, width: 180, transform: "rotate(30deg)" }} />
                  <div className="kit-edge kit-impacted" style={{ top: 174, left: 370, width: 150, transform: "rotate(20deg)" }} />
                  <div className="kit-edge" style={{ top: 244, left: 530, width: 120 }} />
                  <div className="kit-edge" style={{ top: 244, left: 530, width: 120, transform: "rotate(-25deg)" }} />
                  <div className="kit-edge kit-impacted" style={{ top: 334, left: 680, width: 130 }} />
                  {/* Nodes */}
                  <div className="kit-node kit-domain kit-healthy" style={{ top: 60, left: 24 }}><i />Retail</div>
                  <div className="kit-node kit-healthy" style={{ top: 60, left: 180 }}><i />BU &middot; Commerce</div>
                  <div className="kit-node kit-degraded" style={{ top: 160, left: 380 }}><i />Process &middot; Checkout</div>
                  <div className="kit-node kit-impacted kit-selected" style={{ top: 230, left: 540 }} onClick={() => openDrawer("app")}><i />App &middot; checkout-api</div>
                  <div className="kit-node kit-impacted" style={{ top: 320, left: 690 }} onClick={() => openDrawer("ci")}><i />CI &middot; payments-db-03</div>
                  <div className="kit-node kit-healthy" style={{ top: 400, left: 690 }}><i />CI &middot; payments-cache-02</div>
                  <div className="kit-node kit-healthy" style={{ top: 150, left: 180 }}><i />BU &middot; Support</div>
                  <div className="kit-node kit-healthy" style={{ top: 250, left: 380 }}><i />Process &middot; Returns</div>
                </div>
                <div className="kit-graph-inspector">
                  <div className="kit-breadcrumb">Retail &rsaquo; Commerce &rsaquo; Checkout &rsaquo; checkout-api</div>
                  <h3>checkout-api</h3>
                  <p style={{ fontSize: 11, color: "var(--fg-muted)", margin: "0 0 12px" }}>Application &middot; Impacted</p>
                  <div className="kit-prop"><span className="kit-pk">Status</span><span className="kit-pv"><span className="kit-sev-pill" style={{ background: "#FFEDD5", color: "#C2410C", border: "1px solid #FED7AA" }}>Impacted</span></span></div>
                  <div className="kit-prop"><span className="kit-pk">Owner</span><span className="kit-pv">payments-platform@kyndryl</span></div>
                  <div className="kit-prop"><span className="kit-pk">Last verified</span><span className="kit-pv">14-04-2026 14:02</span></div>
                  <div className="kit-prop"><span className="kit-pk">Downstream CIs</span><span className="kit-pv">6 &middot; 1 impacted</span></div>
                  <div className="kit-drawer-section">
                    <h4>Impact rollup</h4>
                    <div className="kit-rollup">
                      <div className="kit-rollup-tile"><div className="kit-rk">CIs</div><div className="kit-rv">6</div></div>
                      <div className="kit-rollup-tile"><div className="kit-rk">Apps</div><div className="kit-rv">1</div></div>
                      <div className="kit-rollup-tile"><div className="kit-rk">Processes</div><div className="kit-rv">1</div></div>
                      <div className="kit-rollup-tile"><div className="kit-rk">BUs</div><div className="kit-rv">1</div></div>
                    </div>
                  </div>
                  <div className="kit-drawer-section">
                    <h4>Actions</h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      <button className="kit-btn-sm kit-primary" style={{ justifyContent: "center" }}>Investigate with AI</button>
                      <button className="kit-btn-sm kit-secondary" style={{ justifyContent: "center" }}>Open in chat</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Changes / review queue */}
            {currentView === "changes" && (
              <div>
                <div className="kit-card">
                  <div className="kit-triage-header">
                    <h3>Correction requests &middot; 12 pending review</h3>
                    <div className="kit-filters">
                      <button className="kit-filter">All states</button>
                      <button className="kit-filter">All owners</button>
                    </div>
                  </div>
                  {[
                    { state: "pending" as const, title: "Retire 47 stale CIs in payments-svc cluster", meta: 'Submitted by agentic-remediation \u00b7 bCRQ-3102 \u00b7 12m ago \u00b7 reason "No discovery heartbeat 90d+"', idx: 0 },
                    { state: "pending" as const, title: "Re-assign owner \u00b7 8 logistics CIs", meta: "Submitted by anna_access \u00b7 bCRQ-3098 \u00b7 42m ago", idx: 1 },
                    { state: "approved" as const, title: "Merge 14 duplicate CI records \u00b7 hr-audit-svc", meta: "Approved by raj_security \u00b7 bCRQ-3085 \u00b7 2h ago \u00b7 execution queued", idx: 2 },
                    { state: "executed" as const, title: "Retire 11 orphaned CIs \u00b7 retail-session cluster", meta: "Executed \u00b7 bCRQ-3072 \u00b7 5h ago \u00b7 +2.1 pts domain trust", idx: 3 },
                  ].map((row) => {
                    const isApproved = approvedRows.has(row.idx);
                    const effectiveState = row.state === "pending" && isApproved ? "approved" : row.state;
                    return (
                      <div className="kit-queue-row" key={row.idx}>
                        <span className={`kit-queue-state kit-${effectiveState}`}>
                          {effectiveState.charAt(0).toUpperCase() + effectiveState.slice(1)}
                        </span>
                        <div>
                          <p className="kit-queue-title">{row.title}</p>
                          <p className="kit-queue-meta">{row.meta}</p>
                        </div>
                        <div className="kit-queue-actions">
                          {effectiveState === "pending" ? (
                            <>
                              <button className="kit-btn-sm kit-primary" onClick={() => approveRow(row.idx)}>Approve</button>
                              <button className="kit-btn-sm kit-secondary">Defer</button>
                              <button className="kit-btn-sm kit-ghost">Reject</button>
                            </>
                          ) : (
                            <button className="kit-btn-sm kit-secondary">View audit trail</button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Stubs */}
            {currentView === "chat" && (
              <div className="kit-card" style={{ padding: 32, textAlign: "center", color: "var(--fg-muted)" }}>
                Assistant surface &middot; see dashboard Signals panel for the primary agent entry point.
              </div>
            )}
            {currentView === "incidents" && (
              <div className="kit-card" style={{ padding: 32, textAlign: "center", color: "var(--fg-muted)" }}>
                Incidents queue (stub) &middot; shares table + drawer pattern with Access review.
              </div>
            )}
            {currentView === "reports" && (
              <div className="kit-card" style={{ padding: 32, textAlign: "center", color: "var(--fg-muted)" }}>
                Reports (stub) &middot; uses the Dashboard&#39;s chart components.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scrim + Drawer */}
      <div className={`kit-scrim ${drawerOpen ? "kit-open" : ""}`} onClick={closeDrawer} />
      <div className={`kit-drawer ${drawerOpen ? "kit-open" : ""}`}>
        <div className="kit-drawer-head">
          <div>
            <h2>{drawerTarget === "app" ? "checkout-api" : "payments-db-03"}</h2>
            <p>{drawerTarget === "app" ? "Application \u00b7 Impacted" : "CI \u00b7 Database \u00b7 Impacted"}</p>
          </div>
          <button className="kit-drawer-close" onClick={closeDrawer}>
            <svg viewBox="0 0 16 16" style={{ width: 16, height: 16 }}>
              <path d="M 3.22 3.22 L 12.78 12.78 M 12.78 3.22 L 3.22 12.78" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            </svg>
          </button>
        </div>
        <div className="kit-drawer-body">
          <div className="kit-prop"><span className="kit-pk">Status</span><span className="kit-pv"><span className="kit-sev-pill" style={{ background: "#FFEDD5", color: "#C2410C", border: "1px solid #FED7AA" }}>Impacted</span></span></div>
          <div className="kit-prop"><span className="kit-pk">Last verified</span><span className="kit-pv">94 days ago &middot; 20-01-2026 02:14</span></div>
          <div className="kit-prop"><span className="kit-pk">Owner</span><span className="kit-pv">payments-platform@kyndryl</span></div>
          <div className="kit-prop"><span className="kit-pk">Application</span><span className="kit-pv">checkout-api</span></div>
          <div className="kit-prop"><span className="kit-pk">Ticket</span><span className="kit-pv" style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>bINC4219003</span></div>
          <div className="kit-prop"><span className="kit-pk">Priority</span><span className="kit-pv"><span className="kit-sev-pill kit-critical">1- Immediate</span></span></div>

          <div className="kit-drawer-section">
            <h4>Signals</h4>
            <div className="kit-rec-sigs">
              <div className="kit-rec-sig"><i style={{ background: "#F59E0B" }} />No discovery heartbeat &middot; 94d</div>
              <div className="kit-rec-sig"><i style={{ background: "#E11D48" }} />Referenced by 3 open incidents</div>
              <div className="kit-rec-sig"><i style={{ background: "#F59E0B" }} />Owner email bounced 2d ago</div>
            </div>
          </div>

          <div className="kit-drawer-section">
            <h4>Impact rollup</h4>
            <div className="kit-rollup">
              <div className="kit-rollup-tile"><div className="kit-rk">CIs</div><div className="kit-rv">1</div></div>
              <div className="kit-rollup-tile"><div className="kit-rk">Apps</div><div className="kit-rv">3</div></div>
              <div className="kit-rollup-tile"><div className="kit-rk">Processes</div><div className="kit-rv">2</div></div>
              <div className="kit-rollup-tile"><div className="kit-rk">BUs</div><div className="kit-rv">1</div></div>
            </div>
          </div>

          <div className="kit-drawer-section">
            <h4>Provenance</h4>
            <p style={{ fontSize: 11, color: "var(--fg-muted)", lineHeight: 1.55, margin: 0 }}>
              Source: ServiceNow CMDB &middot; table cmdb_ci_db_mssql &middot; last discovery sync 20-01-2026 02:14. Agent reviewed against incident feed and knowledge-graph on 23-04-2026.
            </p>
          </div>
        </div>
        <div className="kit-drawer-actions">
          <button className="kit-btn-sm kit-primary" style={{ flex: 1, justifyContent: "center" }}>Investigate with AI</button>
          <button className="kit-btn-sm kit-secondary">Retire</button>
          <button className="kit-btn-sm kit-ghost">Defer</button>
        </div>
      </div>
    </div>
  );
};
