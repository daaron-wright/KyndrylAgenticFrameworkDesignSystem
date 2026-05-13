import React, { useState } from "react";
import "./agentic-showcase.css";

/* ======================== SVG HELPERS ======================== */

const AiGlyph = () => <span className="agsc-ai-glyph" aria-hidden="true" />;

const PauseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><rect x="6" y="5" width="4" height="14" /><rect x="14" y="5" width="4" height="14" /></svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
);

const WarnIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="6" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
);

const QuestionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M12 5v14M5 12h14" /></svg>
);

const CheckSmallIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><polyline points="6 12 10 16 18 8" /></svg>
);

/* ======================== COMPONENT ======================== */

export const AgenticFlow: React.FC = () => {
  const [showToasts, setShowToasts] = useState(true);

  return (
    <div className="agsc-flow-frame">
      {/* TOPBAR */}
      <header className="agsc-flow-topbar">
        <div>
          <h1>CMDB Triage Agent <span style={{ color: "var(--fg-muted)", fontWeight: 400, fontSize: 13 }}>· payments-svc</span></h1>
          <div className="agsc-flow-crumb">run · 8a3f12c · started 14:08:02 · payload v3</div>
        </div>
        <div className="agsc-flow-session">
          <span className="agsc-step-thru-badge"><span className="agsc-step-thru-sw" />STEP-THROUGH ON</span>
          <span>·</span>
          <span>D. Aaron · CMDB owner</span>
        </div>
      </header>

      {/* AGENT STATUS BAR (sticky) */}
      <div className="agsc-flow-asb-wrap">
        <div className="agsc-asb agsc-asb-thinking agsc-ai-edge-tint">
          <span className="agsc-asb-dot" />
          <span className="agsc-asb-label">Working through plan · 3 of 6</span>
          <span className="agsc-asb-meta">· 14.2s elapsed · 2 tool calls · 1 handoff</span>
          <div className="agsc-asb-controls">
            <button className="agsc-btn"><PauseIcon />Pause</button>
            <button className="agsc-btn">Inject correction</button>
            <button className="agsc-btn">Branch</button>
            <button className="agsc-btn agsc-btn-danger">Cancel</button>
          </div>
        </div>
      </div>

      {/* MESSAGE STREAM */}
      <main className="agsc-flow-stream">
        {/* USER opening message */}
        <div className="agsc-msg agsc-msg-user">
          <div className="agsc-bubble agsc-bubble-user">Why did payments trust drop overnight, and can you fix the ownership gaps?</div>
        </div>

        {/* AI thinking -> first message */}
        <div className="agsc-msg">
          <div className="agsc-msg-av" />
          <div className="agsc-bubble agsc-bubble-ai">
            Looking at the payments domain. I'll start by pulling the orphans flagged in the overnight scan, then expand the upstream graph to see what's affected. If the picture is clean, I'll propose owner assignments and hand off to you for sign-off.
          </div>
        </div>
        <span className="agsc-ev">step.completed · plan drafted</span>

        {/* TOOL CALL 1 -- completed (collapsed) */}
        <div className="agsc-flow-tcc">
          <div className="agsc-tcc agsc-tcc-ok agsc-ai-edge">
            <div className="agsc-tcc-head">
              <div className="agsc-tcc-icon" style={{ background: "#E0F2E8", color: "#0D5C2E" }}><CheckIcon /></div>
              <div>
                <div className="agsc-tcc-title">Returned <span className="agsc-tcc-tool">cmdb.query</span> · 22 rows</div>
                <div className="agsc-tcc-meta">230ms · 22 orphaned CIs in payments-svc · expand to view</div>
              </div>
              <div className="agsc-tcc-status"><span className="agsc-tcc-status-dot" />OK</div>
            </div>
          </div>
        </div>

        {/* AI follow-up message */}
        <div className="agsc-msg">
          <div className="agsc-msg-av" />
          <div className="agsc-bubble agsc-bubble-ai">
            I found <strong>22 orphaned CIs</strong>. Most cluster around <code className="agsc-code">web-gateway</code> and <code className="agsc-code">checkout-api</code>. Expanding the upstream graph now to see the blast radius.
          </div>
        </div>

        {/* TOOL CALL 2 -- running */}
        <span className="agsc-ev">tool.executing · graph.expand</span>
        <div className="agsc-flow-tcc">
          <div className="agsc-tcc agsc-tcc-running agsc-ai-edge">
            <div className="agsc-tcc-head">
              <div className="agsc-tcc-icon"><CodeIcon /></div>
              <div>
                <div className="agsc-tcc-title">Calling <span className="agsc-tcc-tool">graph.expand</span></div>
                <div className="agsc-tcc-meta">depth 2 · 22 root nodes · 1.4s elapsed</div>
              </div>
              <div className="agsc-tcc-status"><span className="agsc-tcc-status-dot" />Running</div>
            </div>
          </div>
        </div>

        {/* HANDOFF -- agent -> specialist */}
        <span className="agsc-ev">handoff.dispatched · needs SQL skill</span>
        <div className="agsc-flow-hoc">
          <div className="agsc-hoc agsc-ai-edge">
            <div className="agsc-hoc-from">
              <div className="agsc-hoc-av agsc-hoc-av-agent"><AiGlyph /></div>
              <div className="agsc-hoc-name">Triage</div>
              <div className="agsc-hoc-role">general agent</div>
            </div>
            <div className="agsc-hoc-arrow">
              <span className="agsc-hoc-reason">Handing off · needs SQL skill</span>
              <div className="agsc-flow-hoc-line" />
              <span className="agsc-hoc-ctx">Carrying: 22 orphan CI list · payments-svc context · user threshold ≤ 25</span>
            </div>
            <div className="agsc-hoc-to">
              <div className="agsc-hoc-av agsc-hoc-av-specialist">RA</div>
              <div className="agsc-hoc-name">Reconciliation</div>
              <div className="agsc-hoc-role">specialist agent</div>
            </div>
          </div>
        </div>

        {/* TOOL CALL 3 -- pending approval (with editable args) */}
        <span className="agsc-ev">tool.requested · awaiting approval</span>
        <div className="agsc-flow-tcc">
          <div className="agsc-tcc agsc-tcc-pending agsc-ai-edge">
            <div className="agsc-tcc-head">
              <div className="agsc-tcc-icon" style={{ background: "#FEF3C7", color: "#7A4800" }}><WarnIcon /></div>
              <div>
                <div className="agsc-tcc-title">About to call <span className="agsc-tcc-tool">graph.write</span></div>
                <div className="agsc-tcc-meta">step 4 · proposes 22 owner assignments · destructive · review args</div>
              </div>
              <div className="agsc-tcc-status"><span className="agsc-tcc-status-dot" style={{ background: "#B45309", animation: "agsc-pulse 1.4s ease-in-out infinite" }} />Awaiting approval</div>
            </div>
            <div className="agsc-tcc-body">
              <div className="agsc-tcc-args">
                <span className="agsc-arg-k">action</span>: <span className="agsc-arg-s">"assign_owner"</span>{"\n"}
                <span className="agsc-arg-k">scope</span>: <span className="agsc-arg-s">"</span><span className="agsc-arg-editable agsc-arg-s">payments-svc</span><span className="agsc-arg-s">"</span>{"\n"}
                <span className="agsc-arg-k">policy</span>: <span className="agsc-arg-s">"</span><span className="agsc-arg-editable agsc-arg-s">deploy_recency</span><span className="agsc-arg-s">"</span>{"\n"}
                <span className="agsc-arg-k">batch_size</span>: <span className="agsc-arg-editable agsc-arg-n">22</span>{"\n"}
                <span className="agsc-arg-k">notify</span>: <span className="agsc-arg-n">true</span>
              </div>
              <div className="agsc-tcc-actions">
                <button className="agsc-btn agsc-btn-prim"><CheckIcon />Approve &amp; run</button>
                <button className="agsc-btn">Edit args</button>
                <button className="agsc-btn">Skip</button>
                <span className="agsc-tcc-gate">retries · 0 of 3 used</span>
              </div>
            </div>
          </div>
        </div>

        {/* HUMAN INPUT REQUEST -- blocks the run */}
        <span className="agsc-ev">input.required · blocking</span>
        <div className="agsc-flow-hir">
          <div className="agsc-hir">
            <div className="agsc-hir-head">
              <span className="agsc-hir-glyph"><QuestionIcon /></span>
              <span className="agsc-hir-agent">Reconciliation Agent · needs your call</span>
              <span className="agsc-hir-ts">14:08:22</span>
            </div>
            <p className="agsc-hir-prompt">Two of the 22 CIs have ambiguous ownership. Pick a tie-break before I write.</p>
            <div className="agsc-hir-context">
              <code className="agsc-code">web-gateway-02</code> and <code className="agsc-code">checkout-api-canary</code> were last touched by <b>A. Ortiz</b> (deploy, structural) and <b>K. Patel</b> (config, cosmetic). Recency rule favours K. Patel; structural-edit rule favours A. Ortiz.
            </div>
            <div className="agsc-hir-actions">
              <button className="agsc-btn">Use structural-edit (A. Ortiz)</button>
              <button className="agsc-btn">Use recency (K. Patel)</button>
              <button className="agsc-btn">Defer · leave unassigned</button>
              <span className="agsc-hir-blocking">blocking · agent paused</span>
            </div>
          </div>
        </div>

        {/* AI streaming a tentative summary */}
        <div className="agsc-msg">
          <div className="agsc-msg-av" />
          <div className="agsc-bubble agsc-bubble-ai">
            While you decide on the tie-break, here's a draft of the summary I'll send to the payments owner once the writes land<span className="agsc-caret" />
          </div>
        </div>
      </main>

      {/* RIGHT RAIL -- STEP TIMELINE */}
      <aside className="agsc-flow-rail">
        <h3>Plan · 6 steps</h3>
        <div className="agsc-flow-rail-runid">run.8a3f12c</div>

        <div className="agsc-stl">
          <div className="agsc-stl-step agsc-stl-step-done">
            <div className="agsc-stl-rail"><div className="agsc-stl-marker" /></div>
            <div>
              <div className="agsc-stl-label">Pulled overnight orphans</div>
              <div className="agsc-stl-sub">cmdb.query · 22 rows</div>
            </div>
            <span className="agsc-stl-ts">+0.4s</span>
          </div>
          <div className="agsc-stl-step agsc-stl-step-done">
            <div className="agsc-stl-rail"><div className="agsc-stl-marker" /></div>
            <div>
              <div className="agsc-stl-label">Expanded upstream graph</div>
              <div className="agsc-stl-sub">graph.expand · depth 2</div>
            </div>
            <span className="agsc-stl-ts">+1.8s</span>
          </div>
          <div className="agsc-stl-step agsc-stl-step-done">
            <div className="agsc-stl-rail"><div className="agsc-stl-marker" /></div>
            <div>
              <div className="agsc-stl-label">Handed off to Reconciliation</div>
              <div className="agsc-stl-sub">SQL skill required</div>
            </div>
            <span className="agsc-stl-ts">+2.1s</span>
          </div>
          <div className="agsc-stl-step agsc-stl-step-active">
            <div className="agsc-stl-rail"><div className="agsc-stl-marker" /></div>
            <div>
              <div className="agsc-stl-label">Resolve ambiguous owners</div>
              <div className="agsc-stl-sub">awaiting your tie-break</div>
            </div>
            <span className="agsc-stl-ts">paused</span>
          </div>
          <div className="agsc-stl-step agsc-stl-step-pending">
            <div className="agsc-stl-rail"><div className="agsc-stl-marker" /></div>
            <div>
              <div className="agsc-stl-label">Write 22 owner assignments</div>
              <div className="agsc-stl-sub">graph.write · approval gate</div>
            </div>
            <span className="agsc-stl-ts">queued</span>
          </div>
          <div className="agsc-stl-step agsc-stl-step-pending">
            <div className="agsc-stl-rail"><div className="agsc-stl-marker" /></div>
            <div>
              <div className="agsc-stl-label">Notify payments-svc owner</div>
              <div className="agsc-stl-sub">incident.create + email</div>
            </div>
            <span className="agsc-stl-ts">queued</span>
          </div>
        </div>

        <div className="agsc-flow-rail-actions">
          <button className="agsc-btn">Edit plan</button>
          <button className="agsc-btn agsc-btn-prim">Approve all</button>
        </div>
      </aside>

      {/* COMPOSER */}
      <footer className="agsc-composer">
        <input placeholder="Inject a correction or ask a follow-up..." />
        <button className="agsc-composer-send">Send</button>
      </footer>

      {/* AMBIENT TOASTS */}
      {showToasts && (
        <div className="agsc-toasts">
          <div className="agsc-sdt">
            <div className="agsc-sdt-glyph"><PlusIcon /></div>
            <div className="agsc-sdt-body">
              Agent updated <b>20 CI owners</b>
              <div className="agsc-sdt-diff">
                <span className="agsc-sdt-from">unassigned</span>
                <span className="agsc-sdt-arr">→</span>
                <span className="agsc-sdt-to">resolved</span>
                <span className="agsc-sdt-ctx">· 2 still ambiguous</span>
              </div>
            </div>
            <div className="agsc-sdt-actions">
              <button className="agsc-sdt-action">Undo</button>
              <button className="agsc-sdt-action">View</button>
            </div>
          </div>

          <div className="agsc-sdt">
            <div className="agsc-sdt-glyph agsc-sdt-glyph-warm"><CheckSmallIcon /></div>
            <div className="agsc-sdt-body">
              Trust score <b>recomputed</b>
              <div className="agsc-sdt-diff">
                <span className="agsc-sdt-from">62%</span>
                <span className="agsc-sdt-arr">→</span>
                <span className="agsc-sdt-to-warm">58%</span>
                <span className="agsc-sdt-ctx">· payments domain</span>
              </div>
            </div>
            <div className="agsc-sdt-actions">
              <button className="agsc-sdt-action" onClick={() => setShowToasts(false)}>Why?</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
