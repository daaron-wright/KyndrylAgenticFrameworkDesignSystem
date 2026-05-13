import React, { useState, useRef, useEffect } from "react";
import "./kits.css";

export const ShidokaComponents: React.FC = () => {
  const [ddOpen, setDdOpen] = useState<string | null>(null);

  // Set indeterminate on checkbox via ref
  const indeterminateRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (indeterminateRef.current) {
      indeterminateRef.current.indeterminate = true;
    }
  }, []);

  return (
    <div className="kit-wrapper kit-comp-wrapper">
      {/* Header */}
      <header className="kit-sh-header">
        <span className="kit-sh-header__logo">
          <span style={{ fontSize: 16, fontWeight: 700, color: "var(--fg-1)" }}>Kyndryl</span>
        </span>
        <span className="kit-sh-header__title">Shidoka -- Component Kit</span>
        <nav className="kit-sh-nav" aria-label="Primary">
          <span className="kit-sh-nav-link kit-active" style={{ cursor: "pointer" }}>Primitives</span>
          <span className="kit-sh-nav-link" style={{ cursor: "pointer" }}>AI</span>
        </nav>
        <div className="kit-sh-header__right">
          <button className="kit-sh-icon-btn" aria-label="Search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
          </button>
          <button className="kit-sh-icon-btn" aria-label="Notifications" style={{ position: "relative" }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
            <span style={{ position: "absolute", top: 6, right: 8, width: 8, height: 8, borderRadius: "50%", background: "#FF462D", border: "2px solid #fff" }} />
          </button>
          <button className="kit-sh-icon-btn" aria-label="Help">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
          </button>
          <div className="kit-sh-avatar" title="Dana Aaron">DA</div>
        </div>
      </header>

      <div className="kit-comp-layout">
        {/* Sidenav */}
        <aside className="kit-comp-sidenav">
          <h4>Foundations</h4>
          <a href="#kit-typography">Typography</a>
          <a href="#kit-buttons">Buttons</a>
          <h4>Forms</h4>
          <a href="#kit-inputs">Text input</a>
          <a href="#kit-dropdown">Dropdown</a>
          <a href="#kit-selection">Checkbox / Radio / Toggle</a>
          <h4>Data display</h4>
          <a href="#kit-badges">Badges &amp; Tags</a>
          <a href="#kit-table">Table</a>
          <h4>AI</h4>
          <a href="#kit-ai">AI primitives</a>
        </aside>

        {/* Main */}
        <main>
          {/* Typography */}
          <section id="kit-typography" className="kit-comp-section">
            <header>
              <h2>Typography</h2>
              <p>TWK Everett for headings &amp; display &middot; Roboto for body UI &middot; Geist Mono for code/IDs.</p>
            </header>
            <div className="kit-cols-2">
              <div>
                <div className="kit-demo-label">Display / Heading</div>
                <div style={{ fontFamily: "'TWK Everett',sans-serif", fontWeight: 300, fontSize: 44, lineHeight: 1.1, letterSpacing: "-.01em" }}>Display &middot; 44/52</div>
                <div style={{ fontFamily: "'TWK Everett',sans-serif", fontWeight: 300, fontSize: 32, lineHeight: 1.2, marginTop: 12 }}>Heading 1 &middot; 32/38</div>
                <div style={{ fontFamily: "'TWK Everett',sans-serif", fontWeight: 400, fontSize: 24, lineHeight: 1.25, marginTop: 12 }}>Heading 2 &middot; 24/30</div>
                <div style={{ fontFamily: "'TWK Everett',sans-serif", fontWeight: 500, fontSize: 18, lineHeight: 1.35, marginTop: 12 }}>Heading 3 &middot; 18/24</div>
              </div>
              <div>
                <div className="kit-demo-label">Body / UI</div>
                <div style={{ fontSize: 16, lineHeight: "24px" }}>Body L &middot; 16/24 -- Default paragraph text. The quick brown fox jumps over the lazy dog.</div>
                <div style={{ fontSize: 14, lineHeight: "20px", marginTop: 8 }}>Body M &middot; 14/20 -- Dense UI. The quick brown fox jumps over the lazy dog.</div>
                <div style={{ fontSize: 12, lineHeight: "16px", marginTop: 8, color: "var(--fg-2)" }}>Caption &middot; 12/16 -- meta &amp; helper text.</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, marginTop: 12 }}>Mono &middot; CI-0019837 &middot; v4.2.1 &middot; tabular-nums 1 234 567.89</div>
              </div>
            </div>
          </section>

          {/* Buttons */}
          <section id="kit-buttons" className="kit-comp-section">
            <header>
              <h2>Buttons</h2>
              <p>Primary (Spruce), Secondary (Stone), Tertiary (outline), Ghost, Destructive, AI -- sm / md / lg.</p>
            </header>
            <div className="kit-comp-subsec">
              <h3>Variants</h3>
              <div className="kit-demo-row">
                <button className="kit-kyn-btn kit-kyn-btn--primary">Primary</button>
                <button className="kit-kyn-btn kit-kyn-btn--secondary">Secondary</button>
                <button className="kit-kyn-btn kit-kyn-btn--tertiary">Tertiary</button>
                <button className="kit-kyn-btn kit-kyn-btn--ghost">Ghost</button>
                <button className="kit-kyn-btn kit-kyn-btn--destructive">Destructive</button>
                <button className="kit-kyn-btn kit-kyn-btn--outline-destructive">Outline destructive</button>
                <button className="kit-kyn-btn kit-kyn-btn--ai">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" /></svg>
                  Ask the agent
                </button>
              </div>
            </div>
            <div className="kit-comp-subsec">
              <h3>Sizes</h3>
              <div className="kit-demo-row">
                <button className="kit-kyn-btn kit-kyn-btn--primary kit-kyn-btn--sm">Small</button>
                <button className="kit-kyn-btn kit-kyn-btn--primary kit-kyn-btn--md">Medium</button>
                <button className="kit-kyn-btn kit-kyn-btn--primary kit-kyn-btn--lg">Large</button>
                <button className="kit-kyn-btn kit-kyn-btn--primary" disabled>Disabled</button>
              </div>
            </div>
            <div className="kit-comp-subsec">
              <h3>With icon</h3>
              <div className="kit-demo-row">
                <button className="kit-kyn-btn kit-kyn-btn--primary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  Run reconciliation
                </button>
                <button className="kit-kyn-btn kit-kyn-btn--tertiary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 1 1-3-6.7L21 8" /><path d="M21 3v5h-5" /></svg>
                  Refresh
                </button>
                <button className="kit-kyn-btn kit-kyn-btn--tertiary kit-kyn-btn--icon-only kit-kyn-btn--sm" aria-label="More">
                  <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" /></svg>
                </button>
              </div>
            </div>
          </section>

          {/* Text Inputs */}
          <section id="kit-inputs" className="kit-comp-section">
            <header>
              <h2>Text input</h2>
              <p>Sizes (sm / md / lg), icon slots, readonly, disabled, invalid.</p>
            </header>
            <div className="kit-cols-2">
              <div className="kit-kyn-field">
                <label className="kit-kyn-label">CI name <span className="kit-req">*</span></label>
                <input className="kit-kyn-input" placeholder="e.g. web-prod-12" defaultValue="web-prod-12" />
                <div className="kit-kyn-caption">Must match an existing asset in the CMDB.</div>
              </div>
              <div className="kit-kyn-field">
                <label className="kit-kyn-label">Search</label>
                <div className="kit-kyn-input-wrap">
                  <span className="kit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
                  </span>
                  <input className="kit-kyn-input kit-has-icon" placeholder="Search CIs, tickets, owners..." />
                </div>
              </div>
              <div className="kit-kyn-field">
                <label className="kit-kyn-label">Small</label>
                <input className="kit-kyn-input kit-kyn-input--sm" defaultValue="32px height" />
              </div>
              <div className="kit-kyn-field">
                <label className="kit-kyn-label">Large</label>
                <input className="kit-kyn-input kit-kyn-input--lg" defaultValue="56px height" />
              </div>
              <div className="kit-kyn-field">
                <label className="kit-kyn-label">Disabled</label>
                <input className="kit-kyn-input" defaultValue="Read-only value" disabled />
              </div>
              <div className="kit-kyn-field">
                <label className="kit-kyn-label">Invalid</label>
                <input className="kit-kyn-input kit-kyn-input--invalid" defaultValue="not-a-real-ci" />
                <div className="kit-kyn-error">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg>
                  CI not found in the registry.
                </div>
              </div>
              <div className="kit-kyn-field" style={{ gridColumn: "1/-1" }}>
                <label className="kit-kyn-label">Message</label>
                <textarea className="kit-kyn-input" placeholder="Describe the change..." />
              </div>
            </div>
          </section>

          {/* Dropdown */}
          <section id="kit-dropdown" className="kit-comp-section">
            <header>
              <h2>Dropdown</h2>
              <p>Single-select select control with listbox, hover and selected states.</p>
            </header>
            <div className="kit-cols-2">
              <div className="kit-kyn-field">
                <label className="kit-kyn-label">Environment</label>
                <div className="kit-kyn-dropdown">
                  <button
                    className="kit-kyn-select"
                    onClick={() => setDdOpen(ddOpen === "dd1" ? null : "dd1")}
                  >
                    <span>Production</span>
                    <span style={{ transition: "transform 150ms", transform: ddOpen === "dd1" ? "rotate(180deg)" : "none" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z" /></svg>
                    </span>
                  </button>
                  {ddOpen === "dd1" && (
                    <ul className="kit-kyn-options">
                      <li className="kit-selected">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5" /></svg>
                        Production
                      </li>
                      <li>Staging</li>
                      <li>Development</li>
                      <li>Sandbox</li>
                    </ul>
                  )}
                </div>
              </div>
              <div className="kit-kyn-field">
                <label className="kit-kyn-label">Status (multi)</label>
                <div className="kit-kyn-dropdown">
                  <button
                    className="kit-kyn-select"
                    onClick={() => setDdOpen(ddOpen === "dd2" ? null : "dd2")}
                  >
                    <span>2 selected</span>
                    <span style={{ transition: "transform 150ms", transform: ddOpen === "dd2" ? "rotate(180deg)" : "none" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z" /></svg>
                    </span>
                  </button>
                  {ddOpen === "dd2" && (
                    <ul className="kit-kyn-options">
                      <li className="kit-selected">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5" /></svg>
                        Stale
                      </li>
                      <li className="kit-selected">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5" /></svg>
                        Orphaned
                      </li>
                      <li>Reconciled</li>
                      <li>Under review</li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Selection */}
          <section id="kit-selection" className="kit-comp-section">
            <header><h2>Checkbox &middot; Radio &middot; Toggle</h2></header>
            <div className="kit-cols-3">
              <div>
                <div className="kit-demo-label">Checkbox</div>
                <div className="kit-demo-col">
                  <label className="kit-kyn-check"><input type="checkbox" defaultChecked /><span>Include reconciled CIs</span></label>
                  <label className="kit-kyn-check"><input type="checkbox" /><span>Exclude orphans</span></label>
                  <label className="kit-kyn-check"><input type="checkbox" ref={indeterminateRef} /><span>All environments</span></label>
                  <label className="kit-kyn-check"><input type="checkbox" disabled defaultChecked /><span>Disabled checked</span></label>
                </div>
              </div>
              <div>
                <div className="kit-demo-label">Radio</div>
                <div className="kit-demo-col">
                  <label className="kit-kyn-radio"><input type="radio" name="kit-r1" defaultChecked /><span>All teams</span></label>
                  <label className="kit-kyn-radio"><input type="radio" name="kit-r1" /><span>My team only</span></label>
                  <label className="kit-kyn-radio"><input type="radio" name="kit-r1" /><span>Specific owner...</span></label>
                  <label className="kit-kyn-radio"><input type="radio" name="kit-r1" disabled /><span>Disabled</span></label>
                </div>
              </div>
              <div>
                <div className="kit-demo-label">Toggle</div>
                <div className="kit-demo-col">
                  <label className="kit-kyn-toggle"><input type="checkbox" defaultChecked /><span>Auto-reconcile low-risk CIs</span></label>
                  <label className="kit-kyn-toggle"><input type="checkbox" /><span>Send Slack notification</span></label>
                  <label className="kit-kyn-toggle"><input type="checkbox" defaultChecked /><span>Require approval &gt; 50 CIs</span></label>
                </div>
              </div>
            </div>
          </section>

          {/* Badges & Tags */}
          <section id="kit-badges" className="kit-comp-section">
            <header><h2>Badges &amp; Tags</h2></header>
            <div className="kit-comp-subsec">
              <h3>Status badges</h3>
              <div className="kit-demo-row">
                <span className="kit-kyn-badge kit-kyn-badge--success">Reconciled</span>
                <span className="kit-kyn-badge kit-kyn-badge--warn">Stale 17d</span>
                <span className="kit-kyn-badge kit-kyn-badge--err">Orphaned</span>
                <span className="kit-kyn-badge kit-kyn-badge--info">In review</span>
                <span className="kit-kyn-badge kit-kyn-badge--subtle">Draft</span>
                <span className="kit-kyn-badge kit-kyn-badge--ai">AI suggested</span>
              </div>
            </div>
          </section>

          {/* Table */}
          <section id="kit-table" className="kit-comp-section">
            <header>
              <h2>Table</h2>
              <p>Dense CI list -- tabular-nums, zebra-free, hover row.</p>
            </header>
            <table className="kit-kyn-table">
              <thead>
                <tr>
                  <th>CI ID</th><th>Name</th><th>Env</th><th>Owner</th>
                  <th>Status</th><th className="kit-kyn-table__num">Last seen</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: "CI-0019837", name: "payments-api-prod-01", env: "Prod", owner: "Dana Aaron", status: "Stale 17d", badge: "warn", seen: "2025-11-03 14:02" },
                  { id: "CI-0019841", name: "ledger-worker-prod-04", env: "Prod", owner: "Mia Quin", status: "Orphaned", badge: "err", seen: "2025-10-18 09:14" },
                  { id: "CI-0019855", name: "checkout-gateway-stage", env: "Stage", owner: "Owen Lee", status: "Reconciled", badge: "success", seen: "2025-11-19 11:28" },
                  { id: "CI-0019902", name: "notif-queue-prod-02", env: "Prod", owner: "\u2014", status: "In review", badge: "info", seen: "2025-11-21 03:51" },
                ].map((row) => (
                  <tr key={row.id}>
                    <td style={{ fontFamily: "var(--font-mono)" }}>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.env}</td>
                    <td>{row.owner}</td>
                    <td><span className={`kit-kyn-badge kit-kyn-badge--${row.badge}`}>{row.status}</span></td>
                    <td className="kit-kyn-table__num">{row.seen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* AI Entry */}
          <section id="kit-ai" className="kit-comp-section">
            <header>
              <h2>AI primitives</h2>
              <p>The agent&#39;s surface signature -- gradient border (Spruce to Warm Red), never raw purple.</p>
            </header>
            <div className="kit-comp-subsec">
              <h3>Launch button</h3>
              <div className="kit-demo-row">
                <button className="kit-ai-launch">
                  <span className="kit-ai-dot">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" /></svg>
                  </span>
                  Ask the agent
                </button>
                <button className="kit-kyn-btn kit-kyn-btn--ai">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" /></svg>
                  Generate correction plan
                </button>
              </div>
            </div>
          </section>

          <footer style={{ textAlign: "center", padding: "24px 0 8px", fontSize: 12, color: "var(--fg-muted)" }}>
            Shidoka component kit &middot; Kyndryl CMDB DS
          </footer>
        </main>
      </div>
    </div>
  );
};
