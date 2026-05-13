import React from "react";
import "./agentic-showcase.css";

/* ======================== SVG HELPERS ======================== */

const SparkSvg = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" /></svg>
);

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

const ErrorIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
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

const ListIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
);

const InfoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M12 8v4M12 16h.01" /><circle cx="12" cy="12" r="10" /></svg>
);

const ArrowSvg = () => (
  <svg viewBox="0 0 200 10" preserveAspectRatio="none" aria-hidden="true">
    <line x1="0" y1="5" x2="194" y2="5" stroke="#475569" strokeWidth="1" vectorEffect="non-scaling-stroke" />
    <polyline points="189,1 194,5 189,9" fill="none" stroke="#475569" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
  </svg>
);

/* ======================== COMPONENT ======================== */

export const AgenticStates: React.FC = () => (
  <div className="agsc-wrap">
    {/* INTRO */}
    <section className="agsc-card agsc-card-full">
      <div className="agsc-eyebrow">
        <SparkSvg />
        Agentic interaction states
      </div>
      <h2>Agentic interaction states</h2>
      <p className="agsc-sub">
        Six primitives that surface what the agent is doing <em>right now</em> — thinking, calling tools, asking for input, walking through a plan, handing off, and updating shared state.
        They complement the <em>post-hoc</em> agentic primitives (ConfidenceBadge, FreshnessBadge, etc.) that let users override decisions <em>after</em> the fact:
        these new components let users <strong>pause, edit, approve, branch, and correct</strong> the agent <strong>during</strong> a run.
      </p>
      <div className="agsc-kicker">Visual contract</div>
      <div className="agsc-specs">
        <ul>
          <li>All live agentic surfaces use the AI gradient border (<code className="agsc-code">spruce-60 ↔ warm-red-50</code>, 28% α) on white — the same vocabulary as <code className="agsc-code">ChatMessage</code> and <code className="agsc-code">SnapshotCard</code>.</li>
          <li>Activity is signalled by a single moving element: a pulsing dot (thinking), a streaming caret (response), an animated timeline marker (step active). No spinners, no progress bars except inside <code className="agsc-code">StepTimeline</code> rows.</li>
          <li>Every primitive ships with a <strong>step-through gate</strong>: the user can pause, edit args, approve individually, branch, or inject a correction without leaving the surface.</li>
          <li>Audit-trail consequence: every interactive state, when actioned, writes to the <em>Learned from you</em> inbox via <code className="agsc-code">preview/agentic.js</code>.</li>
        </ul>
      </div>
    </section>

    {/* AGENT STATUS BAR */}
    <section className="agsc-card agsc-card-full">
      <div className="agsc-eyebrow">
        <AiGlyph />
        AgentStatusBar · 5 states
      </div>
      <h2>AgentStatusBar</h2>
      <p className="agsc-sub">A persistent header above any agentic surface (chat, modal, side panel, DAG). Communicates the agent's current state in two lines: an animated dot, a verb, and a step counter — plus controls to pause/resume/cancel.</p>

      <div className="agsc-demo-grid">
        {/* thinking */}
        <div className="agsc-asb agsc-asb-thinking agsc-ai-edge">
          <span className="agsc-asb-dot" />
          <span className="agsc-asb-label">Planning · gathering signals</span>
          <span className="agsc-asb-meta">step 2 of 6 · 4.2s</span>
          <div className="agsc-asb-controls">
            <button className="agsc-btn"><PauseIcon />Pause</button>
            <button className="agsc-btn agsc-btn-danger">Cancel</button>
          </div>
        </div>

        {/* streaming */}
        <div className="agsc-asb agsc-asb-streaming agsc-ai-edge">
          <span className="agsc-asb-dot" />
          <span className="agsc-asb-label">Responding<span className="agsc-caret" /></span>
          <span className="agsc-asb-meta">142 tokens · 18 t/s</span>
          <div className="agsc-asb-controls">
            <button className="agsc-btn">Stop</button>
            <button className="agsc-btn">Inject correction</button>
          </div>
        </div>

        {/* waiting */}
        <div className="agsc-asb agsc-asb-waiting">
          <span className="agsc-asb-dot" />
          <span className="agsc-asb-label">Waiting for you · approval required</span>
          <span className="agsc-asb-meta">on step 3 · drop-table impact</span>
          <div className="agsc-asb-controls">
            <button className="agsc-btn">Skip step</button>
            <button className="agsc-btn agsc-btn-warn">Review</button>
          </div>
        </div>

        {/* paused */}
        <div className="agsc-asb agsc-asb-paused">
          <span className="agsc-asb-dot" />
          <span className="agsc-asb-label">Paused by you</span>
          <span className="agsc-asb-meta">at 14:08:22 · 3 steps remaining</span>
          <div className="agsc-asb-controls">
            <button className="agsc-btn">Discard</button>
            <button className="agsc-btn agsc-btn-prim">Resume</button>
          </div>
        </div>

        {/* done */}
        <div className="agsc-asb agsc-asb-done">
          <span className="agsc-asb-dot" />
          <span className="agsc-asb-label">Done · 6 steps in 38s</span>
          <span className="agsc-asb-meta">2 tools · 1 handoff · 0 errors</span>
          <div className="agsc-asb-controls">
            <button className="agsc-btn">View trace</button>
            <button className="agsc-btn">Branch from end</button>
          </div>
        </div>
      </div>

      <div className="agsc-kicker">Rules</div>
      <div className="agsc-specs">
        <ul>
          <li>Always pinned to the top of the agentic surface — sticky on scroll. Never inline in the message stream.</li>
          <li>State changes animate the dot, never the bar; the bar's chrome is stable so the user's eye doesn't jitter.</li>
          <li><strong>Pause</strong> is universal — present on every active state, never replaced by Cancel.</li>
          <li><strong>Branch from end</strong> on <code className="agsc-code">.done</code> creates a fork in the conversation: same priors, new instructions.</li>
        </ul>
      </div>
    </section>

    {/* TOOL CALL CARD */}
    <section className="agsc-card agsc-card-full">
      <div className="agsc-eyebrow">
        <SparkSvg />
        ToolCallCard · 4 states
      </div>
      <h2>ToolCallCard</h2>
      <p className="agsc-sub">Inline in the chat stream, between messages. Shows the tool the agent is about to invoke (or just invoked), with editable arguments, an approval gate, and a result preview.</p>

      <div className="agsc-demo-grid">
        {/* PENDING */}
        <div className="agsc-tcc agsc-tcc-pending agsc-ai-edge">
          <div className="agsc-tcc-head">
            <div className="agsc-tcc-icon"><CodeIcon /></div>
            <div>
              <div className="agsc-tcc-title">About to call <span className="agsc-tcc-tool">cmdb.query</span></div>
              <div className="agsc-tcc-meta">step 2 of 6 · ServiceNow read · ~80ms expected</div>
            </div>
            <div className="agsc-tcc-status"><span className="agsc-tcc-status-dot" />Awaiting approval</div>
          </div>
          <div className="agsc-tcc-body">
            <div className="agsc-tcc-args">
              <span className="agsc-arg-k">filter</span>: <span className="agsc-arg-s">"status:orphaned AND domain:</span><span className="agsc-arg-editable agsc-arg-s">payments</span><span className="agsc-arg-s">"</span>{"\n"}
              <span className="agsc-arg-k">window</span>: <span className="agsc-arg-editable agsc-arg-s">"24h"</span>{"\n"}
              <span className="agsc-arg-k">limit</span>: <span className="agsc-arg-editable agsc-arg-n">50</span>
            </div>
            <div className="agsc-tcc-actions">
              <button className="agsc-btn agsc-btn-prim"><CheckIcon />Approve &amp; run</button>
              <button className="agsc-btn">Edit args</button>
              <button className="agsc-btn">Skip</button>
              <span className="agsc-tcc-gate">step-through mode · on</span>
            </div>
          </div>
        </div>

        {/* RUNNING */}
        <div className="agsc-tcc agsc-tcc-running agsc-ai-edge">
          <div className="agsc-tcc-head">
            <div className="agsc-tcc-icon"><CodeIcon /></div>
            <div>
              <div className="agsc-tcc-title">Calling <span className="agsc-tcc-tool">graph.expand</span></div>
              <div className="agsc-tcc-meta">step 3 of 6 · upstream-1 · 1.4s elapsed</div>
            </div>
            <div className="agsc-tcc-status"><span className="agsc-tcc-status-dot" />Running</div>
          </div>
        </div>

        {/* OK */}
        <div className="agsc-tcc agsc-tcc-ok agsc-ai-edge">
          <div className="agsc-tcc-head">
            <div className="agsc-tcc-icon" style={{ background: "#E0F2E8", color: "#0D5C2E" }}><CheckIcon /></div>
            <div>
              <div className="agsc-tcc-title">Returned <span className="agsc-tcc-tool">cmdb.query</span> · 22 rows</div>
              <div className="agsc-tcc-meta">230ms · 22 orphaned CIs · expand to view payload</div>
            </div>
            <div className="agsc-tcc-status"><span className="agsc-tcc-status-dot" />OK · used in step 4</div>
          </div>
        </div>

        {/* ERR */}
        <div className="agsc-tcc agsc-tcc-err agsc-ai-edge">
          <div className="agsc-tcc-head">
            <div className="agsc-tcc-icon" style={{ background: "#FDE7E2", color: "#8A1E0D" }}><ErrorIcon /></div>
            <div>
              <div className="agsc-tcc-title"><span className="agsc-tcc-tool">graph.write</span> · permission denied</div>
              <div className="agsc-tcc-meta">role <code className="agsc-code" style={{ fontSize: "10px" }}>access.requestor</code> can read but not mutate the graph</div>
            </div>
            <div className="agsc-tcc-status"><span className="agsc-tcc-status-dot" />Error</div>
          </div>
          <div className="agsc-tcc-body">
            <div className="agsc-tcc-actions">
              <button className="agsc-btn">Retry as reviewer</button>
              <button className="agsc-btn">Hand off to admin</button>
              <button className="agsc-btn">Branch · readonly</button>
              <span className="agsc-tcc-gate">retry budget · 2 of 3 left</span>
            </div>
          </div>
        </div>
      </div>

      <div className="agsc-kicker">Rules</div>
      <div className="agsc-specs">
        <ul>
          <li>The <strong>tool name is monospaced</strong> and reads like a function — <code className="agsc-code">cmdb.query</code>, <code className="agsc-code">graph.expand</code>, <code className="agsc-code">incident.create</code>. Always <code className="agsc-code">namespace.verb</code>, never free text.</li>
          <li>Args are <strong>editable in place</strong> (dashed underline) when the card is in <code className="agsc-code">pending</code>. Edits trigger a rationale prompt before re-arming.</li>
          <li>Step-through mode is a session toggle on the AgentStatusBar — when off, only destructive tools surface a <code className="agsc-code">pending</code> card; reads run silently and collapse to the <code className="agsc-code">ok</code> state.</li>
          <li>Result rows collapse by default; click the title to expand. Long payloads paginate at 200 lines with <em>"Show in inspector"</em>.</li>
        </ul>
      </div>
    </section>

    {/* HUMAN INPUT REQUEST */}
    <section className="agsc-card agsc-card-full">
      <div className="agsc-eyebrow">
        <SparkSvg />
        HumanInputRequest · blocking
      </div>
      <h2>HumanInputRequest</h2>
      <p className="agsc-sub">When the agent must stop and ask a question to proceed. Inline in the message stream, amber-tinted to break the AI gradient pattern — this is intentionally <em>not</em> just another bubble.</p>

      <div className="agsc-demo-grid">
        {/* HIR 1 */}
        <div className="agsc-hir">
          <div className="agsc-hir-head">
            <span className="agsc-hir-glyph"><QuestionIcon /></span>
            <span className="agsc-hir-agent">Reconciliation Agent · needs your call</span>
            <span className="agsc-hir-ts">14:08:22</span>
          </div>
          <p className="agsc-hir-prompt">The orphan has two plausible owners. Which one should I assign?</p>
          <div className="agsc-hir-context">
            CI <code className="agsc-code">web-gateway-02</code> (payments-svc) was last touched by <b>A. Ortiz</b> on 12-Mar (deploy) and <b>K. Patel</b> on 14-Mar (config). The deploy edit is structural, the config edit is cosmetic — but the recency rule would pick K. Patel.
          </div>
          <div className="agsc-hir-actions">
            <button className="agsc-btn">Assign to A. Ortiz (structural)</button>
            <button className="agsc-btn">Assign to K. Patel (recency)</button>
            <button className="agsc-btn">Leave unassigned · escalate</button>
            <span className="agsc-hir-blocking">blocking · agent paused</span>
          </div>
        </div>

        {/* HIR 2 */}
        <div className="agsc-hir">
          <div className="agsc-hir-head">
            <span className="agsc-hir-glyph"><QuestionIcon /></span>
            <span className="agsc-hir-agent">Triage Agent · confirmation</span>
            <span className="agsc-hir-ts">14:09:01</span>
          </div>
          <p className="agsc-hir-prompt">I'm about to retire 47 CIs. The blast radius extends past your usual threshold — should I proceed?</p>
          <div className="agsc-hir-context">
            Threshold: <b>≤ 25 CIs / batch</b>. This batch: <b>47 CIs</b> across <b>4 BUs</b>. Past 30 days you've approved 3 batches over threshold (avg 38) — none rolled back.
          </div>
          <div className="agsc-hir-actions">
            <button className="agsc-btn agsc-btn-prim">Proceed (47)</button>
            <button className="agsc-btn">Split into 2 batches</button>
            <button className="agsc-btn">Lower threshold &amp; cancel</button>
            <span className="agsc-hir-blocking">blocking · 14m at this prompt</span>
          </div>
        </div>
      </div>

      <div className="agsc-kicker">Rules</div>
      <div className="agsc-specs">
        <ul>
          <li>HIRs <strong>break the visual rhythm on purpose</strong> — amber surface, never the AI gradient. The user's eye must catch it on a long scroll.</li>
          <li>Always carry: a one-line question, a 2–3 sentence context block with named priors, and 2–4 named choices. Never <em>"Yes / No"</em> alone.</li>
          <li><strong>Blocking</strong> indicator pulses while the prompt is open. The AgentStatusBar above flips to <code className="agsc-code">waiting</code>.</li>
          <li>Choosing an option records the rationale; the agent uses it as a teaching signal for similar future moments (writes to <em>Learned from you</em>).</li>
        </ul>
      </div>
    </section>

    {/* STEP TIMELINE */}
    <section className="agsc-card">
      <div className="agsc-eyebrow">
        <SparkSvg />
        StepTimeline · live
      </div>
      <h2>StepTimeline</h2>
      <p className="agsc-sub">A stepped plan rendered live as the agent walks it. Right-rail companion to chat; also embeds inline in the execution composite.</p>

      <div className="agsc-stl">
        <div className="agsc-stl-step agsc-stl-step-done">
          <div className="agsc-stl-rail"><div className="agsc-stl-marker" /></div>
          <div>
            <div className="agsc-stl-label">Identified 22 orphans in payments-svc</div>
            <div className="agsc-stl-sub">via <code className="agsc-code">cmdb.query</code> · 230ms · 22 rows</div>
          </div>
          <span className="agsc-stl-ts">+0.4s</span>
        </div>
        <div className="agsc-stl-step agsc-stl-step-done">
          <div className="agsc-stl-rail"><div className="agsc-stl-marker" /></div>
          <div>
            <div className="agsc-stl-label">Expanded upstream graph</div>
            <div className="agsc-stl-sub">via <code className="agsc-code">graph.expand</code> · 1 affected app · checkout-api</div>
          </div>
          <span className="agsc-stl-ts">+1.8s</span>
        </div>
        <div className="agsc-stl-step agsc-stl-step-active">
          <div className="agsc-stl-rail"><div className="agsc-stl-marker" /></div>
          <div>
            <div className="agsc-stl-label">Inferring most likely owners</div>
            <div className="agsc-stl-sub">cross-checking 12-week commit + deploy history</div>
            <div className="agsc-stl-approve">
              <button className="agsc-btn">Edit step</button>
              <button className="agsc-btn">Approve once</button>
              <button className="agsc-btn agsc-btn-prim">Approve all</button>
            </div>
          </div>
          <span className="agsc-stl-ts">running...</span>
        </div>
        <div className="agsc-stl-step agsc-stl-step-pending">
          <div className="agsc-stl-rail"><div className="agsc-stl-marker" /></div>
          <div>
            <div className="agsc-stl-label">Draft owner-assignment plan</div>
            <div className="agsc-stl-sub">requires approval before write</div>
          </div>
          <span className="agsc-stl-ts">queued</span>
        </div>
        <div className="agsc-stl-step agsc-stl-step-pending">
          <div className="agsc-stl-rail"><div className="agsc-stl-marker" /></div>
          <div>
            <div className="agsc-stl-label">Notify owners and open correction request</div>
            <div className="agsc-stl-sub">writes to <code className="agsc-code">graph</code>, sends 1 email</div>
          </div>
          <span className="agsc-stl-ts">queued</span>
        </div>
      </div>

      <div className="agsc-kicker">Rules</div>
      <div className="agsc-specs">
        <ul>
          <li>Active marker pulses spruce; done is solid green; failed is solid warm-red with an ✕. Never use color alone — every state pairs with a glyph.</li>
          <li>The <strong>active step</strong> reveals row-level controls (Edit · Approve once · Approve all). Other rows are read-only.</li>
          <li>"Approve all" disengages step-through mode for the rest of the run; flips the AgentStatusBar to <code className="agsc-code">thinking</code>/<code className="agsc-code">streaming</code> with no further gates.</li>
        </ul>
      </div>
    </section>

    {/* HANDOFF CARD */}
    <section className="agsc-card">
      <div className="agsc-eyebrow">
        <SparkSvg />
        HandoffCard · 2 patterns
      </div>
      <h2>HandoffCard</h2>
      <p className="agsc-sub">Marks the moment one agent passes work to another agent or to a human. Inline in chat, between messages.</p>

      <div className="agsc-demo-grid">
        {/* agent -> specialist */}
        <div className="agsc-hoc agsc-ai-edge">
          <div className="agsc-hoc-from">
            <div className="agsc-hoc-av agsc-hoc-av-agent"><AiGlyph /></div>
            <div className="agsc-hoc-name">Triage</div>
            <div className="agsc-hoc-role">general agent</div>
          </div>
          <div className="agsc-hoc-arrow">
            <span className="agsc-hoc-reason">Handing off · needs SQL skill</span>
            <div className="agsc-hoc-line"><ArrowSvg /></div>
            <span className="agsc-hoc-ctx">Carrying: 22 orphan CI list · payments-svc context · user threshold ≤ 25</span>
          </div>
          <div className="agsc-hoc-to">
            <div className="agsc-hoc-av agsc-hoc-av-specialist">RA</div>
            <div className="agsc-hoc-name">Reconciliation</div>
            <div className="agsc-hoc-role">specialist agent</div>
          </div>
        </div>

        {/* agent -> human */}
        <div className="agsc-hoc agsc-ai-edge">
          <div className="agsc-hoc-from">
            <div className="agsc-hoc-av agsc-hoc-av-agent"><AiGlyph /></div>
            <div className="agsc-hoc-name">Reconciliation</div>
            <div className="agsc-hoc-role">specialist agent</div>
          </div>
          <div className="agsc-hoc-arrow">
            <span className="agsc-hoc-reason">Handing back · review needed</span>
            <div className="agsc-hoc-line"><ArrowSvg /></div>
            <span className="agsc-hoc-ctx">Plan ready · 47 retire actions · over batch threshold · awaiting your sign-off</span>
          </div>
          <div className="agsc-hoc-to">
            <div className="agsc-hoc-av agsc-hoc-av-human">DA</div>
            <div className="agsc-hoc-name">D. Aaron</div>
            <div className="agsc-hoc-role">CMDB owner</div>
          </div>
        </div>

        <div className="agsc-hoc-actions">
          <button className="agsc-btn" style={{ height: 26, padding: "0 10px", fontSize: 11 }}>View handoff trace</button>
          <button className="agsc-btn agsc-btn-prim" style={{ height: 26, padding: "0 10px", fontSize: 11 }}>Accept &amp; continue</button>
        </div>
      </div>

      <div className="agsc-kicker">Rules</div>
      <div className="agsc-specs">
        <ul>
          <li>Always two-sided. Left = origin, right = recipient. Both nodes show identity (avatar) and role (function).</li>
          <li>The <strong>reason chip</strong> is required and must name a capability — <em>"needs SQL skill"</em>, <em>"review needed"</em>, <em>"out-of-policy escalation"</em>.</li>
          <li>The <strong>carrying ctx</strong> line lists the priors travelling with the handoff. Click to inspect the full state envelope.</li>
          <li>Agent → Human handoffs flip the AgentStatusBar to <code className="agsc-code">waiting</code>; Agent → Agent handoffs keep it <code className="agsc-code">thinking</code>.</li>
        </ul>
      </div>
    </section>

    {/* STATE DELTA TOAST */}
    <section className="agsc-card agsc-card-full">
      <div className="agsc-eyebrow">
        <SparkSvg />
        StateDeltaToast · ambient updates
      </div>
      <h2>StateDeltaToast</h2>
      <p className="agsc-sub">Passive notification surfacing when the agent updates a value the user can see elsewhere on the screen. Bottom-left, non-blocking, dismissable. Always shows the diff inline.</p>

      <div className="agsc-row-2">
        {/* toast 1 */}
        <div className="agsc-sdt">
          <div className="agsc-sdt-glyph"><PlusIcon /></div>
          <div className="agsc-sdt-body">
            Agent updated <b>payments-svc owner</b>
            <div className="agsc-sdt-diff">
              <span className="agsc-sdt-from">unassigned</span>
              <span className="agsc-sdt-arr">→</span>
              <span className="agsc-sdt-to">A. Ortiz</span>
              <span className="agsc-sdt-ctx">· confidence 0.78</span>
            </div>
          </div>
          <div className="agsc-sdt-actions">
            <button className="agsc-sdt-action">Undo</button>
            <button className="agsc-sdt-action">Why?</button>
          </div>
        </div>

        {/* toast 2 */}
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
            <button className="agsc-sdt-action">Why?</button>
            <button className="agsc-sdt-action">Open</button>
          </div>
        </div>

        {/* toast 3 */}
        <div className="agsc-sdt">
          <div className="agsc-sdt-glyph"><ListIcon /></div>
          <div className="agsc-sdt-body">
            Filter applied · <b>severity ≥ Warning</b>
            <div className="agsc-sdt-diff">
              <span className="agsc-sdt-from">312 rows</span>
              <span className="agsc-sdt-arr">→</span>
              <span className="agsc-sdt-to">94 rows</span>
              <span className="agsc-sdt-ctx">· per your earlier instruction</span>
            </div>
          </div>
          <div className="agsc-sdt-actions">
            <button className="agsc-sdt-action">Undo</button>
          </div>
        </div>

        {/* toast 4 */}
        <div className="agsc-sdt">
          <div className="agsc-sdt-glyph"><InfoIcon /></div>
          <div className="agsc-sdt-body">
            Threshold suggestion · <b>stale window</b>
            <div className="agsc-sdt-diff">
              <span className="agsc-sdt-from">24h</span>
              <span className="agsc-sdt-arr">→</span>
              <span className="agsc-sdt-to">72h</span>
              <span className="agsc-sdt-ctx">· proposed, not applied</span>
            </div>
          </div>
          <div className="agsc-sdt-actions">
            <button className="agsc-sdt-action">Apply</button>
            <button className="agsc-sdt-action">Dismiss</button>
          </div>
        </div>
      </div>

      <div className="agsc-kicker">Rules</div>
      <div className="agsc-specs">
        <ul>
          <li>Toasts <strong>always carry the diff</strong> (<code className="agsc-code">from → to</code>). Never just <em>"Updated owner"</em> — show the actual values.</li>
          <li>Auto-dismiss at 5s for non-destructive deltas; sticky for proposed deltas (<em>"not applied"</em>) until the user accepts or dismisses.</li>
          <li>Stack vertically, max 3 visible. Older toasts collapse into a single <em>"+ 4 more"</em> chip.</li>
          <li>Every toast is also written to <em>Learned from you</em> — the toast is ephemeral, the audit row is permanent.</li>
        </ul>
      </div>
    </section>

    {/* EVENT MAP TABLE */}
    <section className="agsc-card agsc-card-full">
      <div className="agsc-eyebrow">
        <SparkSvg />
        Mapping
      </div>
      <h2>Which primitive renders which agent event</h2>
      <div className="agsc-specs" style={{ marginTop: 4 }}>
        <table className="agsc-event-table">
          <thead>
            <tr>
              <th>Agent event</th>
              <th>Primitive</th>
              <th>Surface</th>
              <th>Blocking?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code className="agsc-code">run.started</code> / <code className="agsc-code">run.thinking</code></td>
              <td>AgentStatusBar · <em>thinking</em></td>
              <td className="agsc-td-sans">Top of surface</td>
              <td className="agsc-td-sans">No</td>
            </tr>
            <tr>
              <td><code className="agsc-code">step.started</code> / <code className="agsc-code">step.completed</code></td>
              <td>StepTimeline row</td>
              <td className="agsc-td-sans">Right rail or inline</td>
              <td className="agsc-td-sans">No</td>
            </tr>
            <tr>
              <td><code className="agsc-code">tool.requested</code></td>
              <td>ToolCallCard · <em>pending</em></td>
              <td className="agsc-td-sans">Inline in stream</td>
              <td className="agsc-td-sans"><b>Yes (step-through on)</b></td>
            </tr>
            <tr>
              <td><code className="agsc-code">tool.executing</code> / <code className="agsc-code">tool.completed</code></td>
              <td>ToolCallCard · <em>running / ok / err</em></td>
              <td className="agsc-td-sans">Inline in stream</td>
              <td className="agsc-td-sans">No</td>
            </tr>
            <tr>
              <td><code className="agsc-code">response.streaming</code></td>
              <td>AgentStatusBar · <em>streaming</em> + ChatMessage</td>
              <td className="agsc-td-sans">Top + stream</td>
              <td className="agsc-td-sans">No</td>
            </tr>
            <tr>
              <td><code className="agsc-code">input.required</code></td>
              <td>HumanInputRequest</td>
              <td className="agsc-td-sans">Inline in stream</td>
              <td className="agsc-td-sans"><b>Yes</b></td>
            </tr>
            <tr>
              <td><code className="agsc-code">handoff.dispatched</code> / <code className="agsc-code">handoff.received</code></td>
              <td>HandoffCard</td>
              <td className="agsc-td-sans">Inline in stream</td>
              <td className="agsc-td-sans">Sometimes (→ human)</td>
            </tr>
            <tr>
              <td><code className="agsc-code">state.delta</code></td>
              <td>StateDeltaToast</td>
              <td className="agsc-td-sans">Bottom-left ambient</td>
              <td className="agsc-td-sans">No</td>
            </tr>
            <tr>
              <td><code className="agsc-code">run.paused</code> (by user)</td>
              <td>AgentStatusBar · <em>paused</em></td>
              <td className="agsc-td-sans">Top</td>
              <td className="agsc-td-sans">No</td>
            </tr>
            <tr>
              <td><code className="agsc-code">run.completed</code> / <code className="agsc-code">run.failed</code></td>
              <td>AgentStatusBar · <em>done</em> + ExecutionTimeline</td>
              <td className="agsc-td-sans">Top + stream</td>
              <td className="agsc-td-sans">No</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
);
