import React, { useState } from "react";
import "./composites.css";

const SparkSvg = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" /></svg>
);

export const AiModalChat: React.FC = () => {
  const [tab, setTab] = useState<"Chat" | "History" | "Settings">("Chat");
  const [approved, setApproved] = useState(false);

  return (
    <div className="cmp-modal-wrap">
      {/* LEFT — spec */}
      <section className="cmp-spec">
        <div className="cmp-eyebrow">
          <SparkSvg />
          AI Modal Chat &middot; Pattern
        </div>
        <h2>Modal Chat</h2>
        <div className="cmp-sub">
          The full conversational surface used inside any Kyndryl product to host Bridge Assist.
          Sits in a 14px-radius dark modal, scoped to the product context.
        </div>

        <div className="cmp-kicker">Anatomy</div>
        <div className="cmp-anatomy">
          <div className="cmp-arow"><span className="cmp-adot" /><strong>Header</strong></div><div>title + Beta + New chat / X</div>
          <div className="cmp-arow"><span className="cmp-adot" /><strong>Tabs</strong></div><div>Chat &middot; History &middot; Settings</div>
          <div className="cmp-arow"><span className="cmp-adot" /><strong>Stream</strong></div><div>AI bubble (gradient border)</div>
          <div className="cmp-arow"><span className="cmp-adot" /><strong>&mdash;</strong></div><div>User bubble (warm red)</div>
          <div className="cmp-arow"><span className="cmp-adot" /><strong>&mdash;</strong></div><div>Inline SnapshotCard</div>
          <div className="cmp-arow"><span className="cmp-adot" /><strong>Prompts</strong></div><div>Suggested chips &middot; &ldquo;Show more&rdquo;</div>
          <div className="cmp-arow"><span className="cmp-adot" /><strong>Composer</strong></div><div>input + send + tools</div>
          <div className="cmp-arow"><span className="cmp-adot" /><strong>Footer</strong></div><div>disclaimer + source link</div>
        </div>

        <div className="cmp-kicker">Bubble system</div>
        <div className="cmp-specs">
          <ul>
            <li><strong>AI</strong> &middot; gradient border (Spruce 60 &#x2194; Warm Red 50, 50% opacity), <code>#1A2024</code> fill, 10px radius.</li>
            <li><strong>User</strong> &middot; solid Warm Red 50 &#x2192; 60 gradient fill, no border, right-aligned, max 380px.</li>
            <li><strong>SnapshotCard</strong> &middot; same gradient-border treatment at 25% &#x03B1;, tighter radius (8px) and dark <code>#0E1417</code> fill — embedded inside the AI bubble&apos;s response area. Highlight state keeps the same gradient border and adds a soft 10% gradient tint behind it (no solid outline).</li>
          </ul>
        </div>

        <div className="cmp-kicker">Suggested prompts</div>
        <div className="cmp-specs">
          Always shown <strong>above</strong> the composer. Maximum 3 visible &middot; &ldquo;Show more&rdquo; expands rail. Chips share the same gradient border as the AI bubble — they ARE little AI suggestions.
        </div>

        <div className="cmp-kicker">Disclaimer + provenance</div>
        <div className="cmp-specs">
          Below the composer, two pieces of evidence: Bridge Assist disclaimer (left) and a &ldquo;Knowledge and AI Foundation&rdquo; link (right). Never hide either — provenance is a Shidoka requirement.
        </div>

        <div className="cmp-kicker">Light vs dark</div>
        <div className="cmp-specs">
          Dark surface is the default for Modal Chat. The light variant exists only for inline-embed (sidebar/right rail). All other rules — bubble system, sources, feedback — are identical across themes.
        </div>
      </section>

      {/* RIGHT — live modal */}
      <section className="cmp-modal">
        <header className="cmp-modal-head">
          <span className="cmp-modal-glyph" />
          <h2>Bridge Assist</h2>
          <span className="cmp-beta">Beta</span>
          <div className="cmp-head-actions">
            <a href="#new-chat" onClick={(e) => e.preventDefault()}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
              {" "}New chat
            </a>
            <button className="cmp-head-x" type="button">&times;</button>
          </div>
        </header>

        <nav className="cmp-tabs">
          {(["Chat", "History", "Settings"] as const).map((t) => (
            <button
              className={`cmp-tab ${tab === t ? "cmp-on" : ""}`}
              type="button"
              key={t}
              onClick={() => setTab(t)}
            >
              {t === "Chat" && (
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
              )}
              {t === "History" && (
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              )}
              {t === "Settings" && (
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 005 15a1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 005 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.6 1.65 1.65 0 0010 3.09V3a2 2 0 114 0v.09A1.65 1.65 0 0015 4.6a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019.4 9c.43.18.78.5 1 .91" /></svg>
              )}
              {" "}{t}
            </button>
          ))}
        </nav>

        {/* AGENT STATUS BAR */}
        <div className="cmp-asb">
          <span className="cmp-asb-dot" />
          <span className="cmp-asb-label">Working through plan</span>
          <span className="cmp-asb-meta">step 3 of 5 &middot; 9.4s &middot; 1 tool</span>
          <div className="cmp-controls">
            <button className="cmp-ab" type="button">Pause</button>
            <button className="cmp-ab" type="button">Inject correction</button>
            <button className="cmp-ab" type="button">Branch</button>
            <button className="cmp-ab cmp-danger" type="button">Stop</button>
          </div>
        </div>

        <div className="cmp-stream">
          {/* AI 1 */}
          <div className="cmp-msg">
            <div className="cmp-av" />
            <div className="cmp-bubble">
              <strong>The benefits of adopting Hybrid IT Modernization:</strong>
              <ol>
                <li><strong>Cost Efficiency:</strong> Hybrid IT allows organizations to combine on-premises infrastructure with cloud solutions, optimizing costs by only utilizing cloud services for what is needed. It helps avoid over-provisioning and can scale as needed without large upfront investments.</li>
              </ol>
            </div>
          </div>

          {/* USER */}
          <div className="cmp-msg cmp-user">
            <div className="cmp-bubble">User input description</div>
          </div>

          {/* INLINE TOOL CALL CARD */}
          <span className="cmp-ev">tool.requested &middot; {approved ? "approved" : "awaiting approval"}</span>
          <div style={{ paddingLeft: 36 }}>
            <div className={`cmp-tcc ${approved ? "" : "cmp-pending"}`}>
              <div className="cmp-tcc-head">
                <div className="cmp-tcc-icon cmp-warn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><circle cx="12" cy="12" r="10" /><line x1="12" y1="6" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                </div>
                <div>
                  <div className="cmp-tcc-title">About to call <span className="cmp-tool">graph.write</span></div>
                  <div className="cmp-tcc-meta">step 3 &middot; destructive &middot; review args before running</div>
                </div>
                <div className="cmp-tcc-status">
                  {!approved && <span className="cmp-sd" />}
                  {approved ? "Approved" : "Awaiting approval"}
                </div>
              </div>
              <div className="cmp-tcc-body">
                <div className="cmp-tcc-args">
                  <span className="cmp-k">action</span>: <span className="cmp-s">&quot;assign_owner&quot;</span>{"\n"}
                  <span className="cmp-k">scope</span>: <span className="cmp-s">&quot;</span><span className="cmp-editable cmp-s">payments-svc</span><span className="cmp-s">&quot;</span>{"\n"}
                  <span className="cmp-k">batch</span>: <span className="cmp-editable cmp-n">22</span>
                </div>
                <div className="cmp-tcc-actions">
                  <button className="cmp-btn cmp-prim" type="button" onClick={() => setApproved(true)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
                    Approve &amp; run
                  </button>
                  <button className="cmp-btn" type="button">Edit args</button>
                  <button className="cmp-btn" type="button">Skip</button>
                  <span className="cmp-gate">retries &middot; 0 of 3</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI 2 — with embedded SnapshotCard */}
          <div className="cmp-msg">
            <div className="cmp-av" />
            <div className="cmp-bubble">
              <strong>The benefits of adopting Hybrid IT Modernization:</strong>
              <p style={{ margin: "6px 0 0" }}>
                Cost Efficiency: Hybrid IT allows organizations to combine on-premises infrastructure
                with cloud solutions, optimizing costs by only utilizing cloud services for what is needed.
                It helps avoid over-provisioning and can scale as needed without large upfront investments.
              </p>
              <div className="cmp-snap">
                <div className="cmp-ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  </svg>
                </div>
                <div>
                  <p className="cmp-t">Hybrid IT Modernization &middot; Source pack</p>
                  <p className="cmp-s">8 docs &middot; last sync 02:14 UTC</p>
                </div>
                <span className="cmp-arr">Open &rarr;</span>
              </div>
            </div>
          </div>
        </div>

        {/* Suggested prompts */}
        <div className="cmp-prompts">
          <button className="cmp-prompt" type="button">I want to learn about Cloud Services</button>
          <button className="cmp-prompt" type="button">Create a New record</button>
          <button className="cmp-prompt" type="button">Tell me more about Hybrid IT Modernization</button>
          <button className="cmp-more" type="button">Show more &darr;</button>
        </div>

        {/* Composer */}
        <div className="cmp-composer">
          <div className="cmp-input-row">
            <input className="cmp-input" placeholder="Type your message\u2026" />
            <button className="cmp-modal-send" aria-label="Send" type="button">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4z" /></svg>
            </button>
          </div>
          <div className="cmp-composer-tools">
            <button className="cmp-tbtn" type="button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" /></svg>
              {" "}Attach
            </button>
            <button className="cmp-tbtn" type="button">Option <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg></button>
            <button className="cmp-tbtn" type="button">Option <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg></button>
            <a
              href="#knowledge"
              onClick={(e) => e.preventDefault()}
              style={{ marginLeft: "auto", fontSize: "11.5px", color: "#91C4CC", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 5 }}
            >
              Knowledge and AI Foundation Sharepoint
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" /></svg>
            </a>
          </div>
          <div className="cmp-disclaimer">
            Bridge Assist may occasionally generate incorrect or misleading information.
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiModalChat;
