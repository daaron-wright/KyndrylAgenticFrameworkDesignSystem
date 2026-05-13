import React, { useState } from "react";
import "./kits.css";

type Screen = "dashboard" | "triage";

export const ShidokaShell: React.FC = () => {
  const [navOpen, setNavOpen] = useState(true);
  const [screen, setScreen] = useState<Screen>("dashboard");
  const [appsFlyout, setAppsFlyout] = useState(false);
  const [wsFlyout, setWsFlyout] = useState(false);

  const closeFlyouts = () => {
    setAppsFlyout(false);
    setWsFlyout(false);
  };

  return (
    <div className="kit-wrapper kit-shell-wrapper" onClick={closeFlyouts}>
      {/* Header */}
      <header className="kit-sh-header">
        <span className="kit-sh-header__logo">
          <span style={{ fontSize: 16, fontWeight: 700, color: "var(--fg-1)" }}>Kyndryl</span>
        </span>
        <span className="kit-sh-header__title">Agentic Framework</span>

        <nav className="kit-sh-nav" aria-label="Primary">
          <a className={`kit-sh-nav-link ${screen === "dashboard" ? "kit-active" : ""}`} onClick={() => setScreen("dashboard")} style={{ cursor: "pointer" }}>Dashboard</a>
          <button
            className="kit-sh-nav-link"
            aria-haspopup="true"
            aria-expanded={appsFlyout ? "true" : "false"}
            onClick={(e) => { e.stopPropagation(); setWsFlyout(false); setAppsFlyout(!appsFlyout); }}
          >
            Products
            <span className="kit-chev">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z" /></svg>
            </span>
          </button>
          <a className={`kit-sh-nav-link ${screen === "triage" ? "kit-active" : ""}`} onClick={() => setScreen("triage")} style={{ cursor: "pointer" }}>Triage</a>
          <span className="kit-sh-nav-link" style={{ cursor: "pointer" }}>Docs</span>
        </nav>

        <div className="kit-sh-header__right">
          <button className="kit-sh-icon-btn" aria-label="Search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
          </button>
          <button className="kit-sh-icon-btn" aria-label="Notifications">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
            <span className="kit-dot" />
          </button>
          <button
            className="kit-sh-icon-btn"
            aria-label="Apps"
            onClick={(e) => { e.stopPropagation(); setWsFlyout(false); setAppsFlyout(!appsFlyout); }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" /></svg>
          </button>
          <button
            className="kit-sh-avatar"
            title="Workspace: Kyndryl Payments"
            onClick={(e) => { e.stopPropagation(); setAppsFlyout(false); setWsFlyout(!wsFlyout); }}
          >
            KP
          </button>
        </div>
      </header>

      {/* Apps flyout */}
      <div style={{ position: "relative" }}>
        <div className={`kit-flyout kit-flyout--apps ${appsFlyout ? "kit-open" : ""}`} onClick={(e) => e.stopPropagation()}>
          <h5>Kyndryl platforms</h5>
          {[
            { label: "CMDB Data Quality", desc: "Trust posture \u00b7 triage \u00b7 reconciliation", icon: <><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></> },
            { label: "Incident Intelligence", desc: "Correlate alerts \u00b7 accelerate MTTR", icon: <path d="M3 12h4l3-9 4 18 3-9h4" /> },
            { label: "Change Risk", desc: "Predict & review proposed changes", icon: <><circle cx="12" cy="12" r="9" /><path d="M12 3v9l6 3" /></> },
            { label: "Observability Graph", desc: "Service dependency & blast radius", icon: <><path d="M12 2l9 5-9 5-9-5z" /><path d="M3 17l9 5 9-5" /><path d="M3 12l9 5 9-5" /></> },
          ].map((item) => (
            <a href="#" key={item.label} onClick={(e) => e.preventDefault()}>
              <span className="kit-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{item.icon}</svg>
              </span>
              <span>{item.label}<small>{item.desc}</small></span>
            </a>
          ))}
          <h5 style={{ marginTop: 8 }}>Tools</h5>
          <a href="#" onClick={(e) => e.preventDefault()}>
            <span className="kit-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 1 1 3 3L7 19l-4 1 1-4z" /></svg>
            </span>
            <span>Admin console</span>
          </a>
          <a href="#" onClick={(e) => e.preventDefault()}>
            <span className="kit-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
            </span>
            <span>Help &amp; docs</span>
          </a>
        </div>

        {/* Workspace flyout */}
        <div className={`kit-flyout kit-flyout--workspace ${wsFlyout ? "kit-open" : ""}`} onClick={(e) => e.stopPropagation()}>
          <div className="kit-ws__left">
            <div className="kit-ws__meta">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1 14-4-4 1.4-1.4L11 13.2l5.6-5.6L18 9l-7 7z" /></svg>
              <div>
                <div className="kit-name">Dana Aaron</div>
                <div className="kit-sub">dana.aaron@kyndryl.com</div>
                <div className="kit-sub">Admin &middot; Payments</div>
              </div>
            </div>
            <div className="kit-ws__title">Workspaces</div>
            <a className="kit-ws-item kit-active"><span className="kit-ico kit-ws-k">KP</span>Kyndryl &middot; Payments</a>
            <a className="kit-ws-item"><span className="kit-ico kit-ws-s">SN</span>ServiceNow sandbox</a>
            <a className="kit-ws-item"><span className="kit-ico kit-ws-g">GL</span>Global ops</a>
            <div className="kit-ws__title" style={{ marginTop: 8 }}>Account</div>
            <a className="kit-ws-item"><span className="kit-ico">\u2699</span>Settings</a>
            <a className="kit-ws-item"><span className="kit-ico">\u238B</span>Sign out</a>
          </div>
          <div className="kit-ws__right">
            <h4>Recent workspaces</h4>
            <div className="kit-ws__card">
              <span className="kit-ico">KP</span>
              <div>
                <p className="kit-name">Kyndryl &middot; Payments</p>
                <p className="kit-sub">1,284 CIs &middot; last active 4 min ago</p>
              </div>
            </div>
            <div className="kit-ws__card">
              <span className="kit-ico" style={{ background: "#DBEAFE", color: "#1D4ED8" }}>SN</span>
              <div>
                <p className="kit-name">ServiceNow sandbox</p>
                <p className="kit-sub">342 CIs &middot; read-only &middot; last visited yesterday</p>
              </div>
            </div>
            <div className="kit-ws__card">
              <span className="kit-ico" style={{ background: "#DCFCE7", color: "#047857" }}>GL</span>
              <div>
                <p className="kit-name">Global ops</p>
                <p className="kit-sub">18,902 CIs &middot; member of 4 teams</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shell */}
      <div className="kit-shell">
        {/* Local nav */}
        <aside className={`kit-localnav ${navOpen ? "kit-open" : ""}`}>
          <button className="kit-localnav__toggle" onClick={() => setNavOpen(!navOpen)} aria-label="Toggle navigation">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
          </button>
          <a className={`kit-localnav__item ${screen === "dashboard" ? "kit-active" : ""}`} onClick={() => setScreen("dashboard")}>
            <span className="kit-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h4l3-9 4 18 3-9h4" /></svg></span>
            <span className="kit-label">Overview</span>
          </a>
          <a className={`kit-localnav__item ${screen === "triage" ? "kit-active" : ""}`} onClick={() => setScreen("triage")}>
            <span className="kit-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.3 3.3a2 2 0 0 1 3.4 0l7 11.7a2 2 0 0 1-1.7 3H5a2 2 0 0 1-1.7-3z" /><path d="M12 9v4M12 17h.01" /></svg></span>
            <span className="kit-label">Triage</span>
            <span className="kit-nav-badge">17</span>
          </a>
          <a className="kit-localnav__item">
            <span className="kit-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 3v9l6 3" /></svg></span>
            <span className="kit-label">Freshness</span>
          </a>
          <a className="kit-localnav__item">
            <span className="kit-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l9 5-9 5-9-5z" /><path d="M3 17l9 5 9-5" /><path d="M3 12l9 5 9-5" /></svg></span>
            <span className="kit-label">Knowledge graph</span>
          </a>
          <a className="kit-localnav__item">
            <span className="kit-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z" /><path d="M4 10h16M10 4v16" /></svg></span>
            <span className="kit-label">Requests</span>
          </a>
          <div className="kit-localnav__spacer" />
          <a className="kit-localnav__item">
            <span className="kit-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .4 1.9l.1.1a2 2 0 1 1-2.9 2.9l-.1-.1a1.7 1.7 0 0 0-1.9-.4 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.9.4l-.1.1a2 2 0 1 1-2.9-2.9l.1-.1a1.7 1.7 0 0 0 .4-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.4-1.9l-.1-.1a2 2 0 1 1 2.9-2.9l.1.1a1.7 1.7 0 0 0 1.9.4h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.4l.1-.1a2 2 0 1 1 2.9 2.9l-.1.1a1.7 1.7 0 0 0-.4 1.9v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" /></svg></span>
            <span className="kit-label">Settings</span>
          </a>
        </aside>

        {/* Main content */}
        <main className="kit-sh-main">
          {/* Dashboard Screen */}
          {screen === "dashboard" && (
            <section>
              <div className="kit-page-head">
                <ul className="kit-crumbs">
                  <li><a href="#">Kyndryl &middot; Payments</a></li>
                  <li><strong>Overview</strong></li>
                </ul>
                <div className="kit-page-actions">
                  <button className="kit-sh-btn kit-sh-btn--tertiary">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 1 1-3-6.7L21 8" /><path d="M21 3v5h-5" /></svg>
                    Refresh
                  </button>
                  <button className="kit-sh-btn kit-sh-btn--ai">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" /></svg>
                    Ask the agent
                  </button>
                </div>
              </div>
              <h1 className="kit-page-title">CMDB posture</h1>
              <p style={{ color: "var(--fg-muted)", margin: "0 0 24px" }}>1,284 configuration items &middot; last sync 4 minutes ago</p>

              {/* KPIs */}
              <div className="kit-dash-grid">
                <div className="kit-sh-card kit-sh-kpi">
                  <p className="kit-sh-eyebrow">Trust score</p>
                  <p className="kit-num">78.4<span style={{ fontSize: 18, color: "var(--fg-muted)", fontWeight: 300 }}> / 100</span></p>
                  <p className="kit-delta">+2.1 vs last week</p>
                  <p className="kit-sh-sub">Weighted across freshness, ownership, reconciliation.</p>
                </div>
                <div className="kit-sh-card kit-sh-kpi">
                  <p className="kit-sh-eyebrow">Stale Prod CIs</p>
                  <p className="kit-num">17</p>
                  <p className="kit-delta kit-down">+4 vs last week</p>
                  <p className="kit-sh-sub">Older than 14-day threshold.</p>
                </div>
                <div className="kit-sh-card kit-sh-kpi">
                  <p className="kit-sh-eyebrow">Open correction requests</p>
                  <p className="kit-num">6</p>
                  <p className="kit-delta">2 awaiting approval</p>
                  <p className="kit-sh-sub">Avg time to approve &middot; 42m</p>
                </div>
              </div>

              {/* Notifications + Activity */}
              <div className="kit-dash-row">
                <div className="kit-sh-card">
                  <div className="kit-notif-panel">
                    <div className="kit-notif kit-notif--ai">
                      <span className="kit-notif-icon" style={{ color: "#29707A" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" /></svg>
                      </span>
                      <div style={{ flex: 1 }}>
                        <p className="kit-notif-title">Agent recommendation &middot; 92% confidence</p>
                        <p className="kit-notif-msg">11 of the 17 stale Prod CIs share owner <strong>payments-team</strong> and region <strong>us-east-1</strong>. Batching them into one correction request cuts approval overhead by 91% and MTTR by ~4 h.</p>
                        <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                          <button className="kit-sh-btn kit-sh-btn--primary kit-sh-btn--sm">Review plan</button>
                          <button className="kit-sh-btn kit-sh-btn--ghost kit-sh-btn--sm">Show evidence</button>
                        </div>
                      </div>
                    </div>
                    <div className="kit-notif kit-notif--warn">
                      <span className="kit-notif-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2V10h2v4z" /></svg>
                      </span>
                      <div>
                        <p className="kit-notif-title">Stale threshold reached</p>
                        <p className="kit-notif-msg">17 Prod CIs have not reported inventory for 14+ days. Investigate before Friday&#39;s audit.</p>
                      </div>
                    </div>
                    <div className="kit-notif kit-notif--success">
                      <span className="kit-notif-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1 14-4-4 1.4-1.4L11 13.2l5.6-5.6L18 9l-7 7z" /></svg>
                      </span>
                      <div>
                        <p className="kit-notif-title">Reconciliation complete</p>
                        <p className="kit-notif-msg">48 CIs re-synced overnight. 2 required manual review.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="kit-sh-card kit-activity">
                  <header>
                    <h3>Recent activity</h3>
                    <a href="#" style={{ color: "#29707A", fontSize: 12, textDecoration: "none" }}>View all</a>
                  </header>
                  <ul>
                    {[
                      { init: "AM", name: "Amara Mwangi", time: "12 min", body: <>Approved correction request <a href="#" style={{ color: "#29707A", textDecoration: "none" }}>CR-2847</a>.</> },
                      { init: "AI", name: "Agent", time: "38 min", body: <>Flagged 4 new stale CIs in <strong>payments-prod</strong>.</>, ai: true },
                      { init: "OL", name: "Owen Lee", time: "1 h", body: <>Reconciled <strong>checkout-gateway-stage</strong>.</> },
                      { init: "DA", name: "Dana Aaron", time: "3 h", body: <>Updated owner on 6 CIs.</> },
                    ].map((item, i) => (
                      <li key={i}>
                        <div className="kit-av" style={item.ai ? { background: "#FFEDE8", color: "#FF462D" } : undefined}>{item.init}</div>
                        <div style={{ flex: 1 }}>
                          <div className="kit-who">{item.name} <span className="kit-time">&middot; {item.time}</span></div>
                          <div className="kit-body">{item.body}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* Triage Screen */}
          {screen === "triage" && (
            <section>
              <div className="kit-page-head">
                <ul className="kit-crumbs">
                  <li><a href="#">Kyndryl &middot; Payments</a></li>
                  <li><a href="#" onClick={() => setScreen("dashboard")}>CMDB</a></li>
                  <li><strong>Triage</strong></li>
                </ul>
                <div className="kit-page-actions">
                  <button className="kit-sh-btn kit-sh-btn--tertiary">Export</button>
                  <button className="kit-sh-btn kit-sh-btn--primary">Bulk reconcile</button>
                </div>
              </div>
              <h1 className="kit-page-title">Triage &middot; stale &amp; orphaned</h1>
              <p style={{ color: "var(--fg-muted)", margin: "0 0 20px" }}>17 items need attention &middot; filtered to Prod, last 30 days</p>

              <div className="kit-sh-card" style={{ overflow: "hidden" }}>
                <div className="kit-sh-toolbar">
                  <div className="kit-search">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
                    <input placeholder="Search by CI ID, name, owner..." />
                  </div>
                  <span className="kit-sh-tag">Env: Prod <button style={{ background: "none", border: 0, cursor: "pointer", color: "var(--fg-2)" }}>&times;</button></span>
                  <span className="kit-sh-tag">Status: Stale, Orphaned <button style={{ background: "none", border: 0, cursor: "pointer", color: "var(--fg-2)" }}>&times;</button></span>
                  <span className="kit-sh-tag">Last seen &lt; 30d <button style={{ background: "none", border: 0, cursor: "pointer", color: "var(--fg-2)" }}>&times;</button></span>
                  <button className="kit-sh-btn kit-sh-btn--ghost kit-sh-btn--sm" style={{ marginLeft: "auto" }}>+ Add filter</button>
                </div>
                <table className="kit-sh-table">
                  <thead>
                    <tr>
                      <th>CI ID</th><th>Name</th><th>Owner</th><th>Status</th>
                      <th style={{ textAlign: "right" }}>Last seen</th>
                      <th style={{ textAlign: "right" }}>Blast radius</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: "CI-0019837", name: "payments-api-prod-01", owner: "Dana Aaron", status: "Stale 17d", badge: "warn" as const, seen: "2025-11-03 14:02", radius: "14 dependents" },
                      { id: "CI-0019841", name: "ledger-worker-prod-04", owner: "Mia Quin", status: "Orphaned", badge: "err" as const, seen: "2025-10-18 09:14", radius: "3 dependents" },
                      { id: "CI-0019902", name: "notif-queue-prod-02", owner: "\u2014", status: "In review", badge: "info" as const, seen: "2025-11-21 03:51", radius: "7 dependents" },
                      { id: "CI-0019955", name: "auth-edge-prod-03", owner: "Dana Aaron", status: "Stale 22d", badge: "warn" as const, seen: "2025-10-29 08:40", radius: "22 dependents" },
                      { id: "CI-0019967", name: "fraud-scoring-prod-01", owner: "Owen Lee", status: "Orphaned", badge: "err" as const, seen: "2025-09-30 16:22", radius: "5 dependents" },
                    ].map((row) => (
                      <tr key={row.id}>
                        <td className="kit-mono">{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.owner}</td>
                        <td><span className={`kit-sh-badge kit-sh-badge--${row.badge}`}>{row.status}</span></td>
                        <td style={{ textAlign: "right" }}>{row.seen}</td>
                        <td style={{ textAlign: "right" }}>{row.radius}</td>
                        <td><button className="kit-sh-btn kit-sh-btn--ghost kit-sh-btn--sm">Open</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="kit-sh-footer">
        <div className="kit-sh-footer__links">
          <a href="#">Terms of use</a>
          <a href="#">Privacy</a>
          <a href="#">Cookie preferences</a>
          <a href="#">Accessibility</a>
        </div>
        <span className="kit-sh-footer__copy">&copy; 2026 Kyndryl Holdings, Inc.</span>
      </footer>
    </div>
  );
};
