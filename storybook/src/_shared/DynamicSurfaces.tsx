import React, { useEffect, useState } from "react";
import { AgentStatusBar } from "../agentic/AgentStatusBar";
import { HandoffCard } from "../agentic/HandoffCard";
import { HumanInputRequest } from "../agentic/HumanInputRequest";
import { StateDeltaToast } from "../agentic/StateDeltaToast";
import { StepTimeline } from "../agentic/StepTimeline";
import { ToolCallCard } from "../agentic/ToolCallCard";
import { ConfidenceBadge } from "../primitives/ConfidenceBadge";
import { DeltaIndicator } from "../primitives/DeltaIndicator";
import { FreshnessBadge } from "../primitives/FreshnessBadge";
import { SeverityPill, type Severity } from "../primitives/SeverityPill";
import { SourceAttribution } from "../primitives/SourceAttribution";
import { StatusBadge, type StatusValue } from "../primitives/StatusBadge";
import "./dynamic.css";

export interface KpiCardData {
  label: string;
  value: string;
  delta: string;
  deltaTone: "up" | "down" | "flat";
  subtext: string;
  alert?: string;
}

export interface TableRowData {
  ci: string;
  owner: string;
  severity: Severity;
  status: StatusValue;
  confidence: number | null;
  freshness: number;
}

interface SignalData {
  tone: "critical" | "high" | "medium";
  title: string;
  metric: string;
  detail: string;
}

type CmdbView = "chat" | "dashboard" | "investigation" | "triage" | "recommendations" | "changes" | "incidents" | "reports";

const kpis: KpiCardData[] = [
  { label: "Total CIs tracked", value: "4,812", delta: "+124 WoW", deltaTone: "up", subtext: "Discovered across 38 applications" },
  { label: "Stale CIs", value: "312", delta: "+28 vs last week", deltaTone: "down", subtext: "Not verified in 30d+", alert: "Unreviewed for 30d+" },
  { label: "Orphaned CIs", value: "47", delta: "-8 vs last week", deltaTone: "up", subtext: "No upstream/downstream edges" }
];

const tableRows: TableRowData[] = [
  { ci: "payments-db-03", owner: "payments-platform", severity: "CRITICAL", status: "Impacted", confidence: 82, freshness: 94 },
  { ci: "logistics-cache-11", owner: "shipment-tracker", severity: "HIGH", status: "Pending", confidence: 77, freshness: 62 },
  { ci: "hr-audit-svc-04", owner: "people-hub", severity: "MEDIUM", status: "Pending", confidence: 64, freshness: 44 },
  { ci: "retail-session-02", owner: "pos-gateway", severity: "MEDIUM", status: "Pending", confidence: 58, freshness: 38 },
  { ci: "shared-auth-proxy-01", owner: "iam-core", severity: "LOW", status: "Approved", confidence: 92, freshness: 33 }
];

const signals: SignalData[] = [
  { tone: "high", title: "Retire 47 unused CIs", metric: "+5.1 pts domain trust lift", detail: "None of these 47 CIs appeared in discovery for 90+ days and no incidents reference them. Safe to retire in batch." },
  { tone: "medium", title: "Consolidate 14 duplicate records", metric: "Estimated 2h analyst time saved", detail: "Duplicate CI records share owner, hostname, discovery source, and environment. Agent recommends merge-before-retire." },
  { tone: "critical", title: "Payments domain below 60%", metric: "Trust dropped 4 pts overnight", detail: "22 new orphaned CIs in payments-svc cluster since the 02:00 discovery scan. Upstream app checkout-api marked Degraded." },
  { tone: "high", title: "Owner missing - 8 CIs", metric: "Logistics domain - since 3d", detail: "Deploy and incident ownership agree on shipment-platform. Agent can submit a correction request for reviewer approval." }
];

const cmdbViews: Array<{ id: CmdbView; label: string; badge?: string }> = [
  { id: "chat", label: "Assistant" },
  { id: "dashboard", label: "Dashboard", badge: "3" },
  { id: "investigation", label: "Investigation" },
  { id: "triage", label: "Access review" },
  { id: "recommendations", label: "Recommendations" },
  { id: "changes", label: "Change requests" },
  { id: "incidents", label: "Incidents" },
  { id: "reports", label: "Reports" }
];

const titleForView: Record<CmdbView, string> = {
  chat: "Assistant",
  dashboard: "Dashboard",
  investigation: "Investigation",
  triage: "Access review",
  recommendations: "Recommendations",
  changes: "Change requests",
  incidents: "Incidents",
  reports: "Reports"
};

const sourceChips = ["CMDB-Trust-Q3.pdf", "orphan-policy-v4", "ServiceNow CR-2914", "payments-runbook"];

const SparkGlyph = ({ className = "" }: { className?: string }) => <span className={`ka-glyph ${className}`} aria-hidden="true" />;

const MiniIcon = ({ label }: { label: string }) => (
  <span className="kds-mini-icon" aria-hidden="true">{label.slice(0, 1)}</span>
);

export const Surface: React.FC<{ children: React.ReactNode; app?: boolean; white?: boolean; className?: string }> = ({ children, app, white, className = "" }) => (
  <div className={`kds-story-surface ${app ? "is-app" : ""} ${white ? "is-white" : ""} ${className}`}>{children}</div>
);

export const SectionHeader: React.FC<{ eyebrow?: string; title: string; copy?: string; action?: React.ReactNode }> = ({ eyebrow, title, copy, action }) => (
  <div className="kds-section-head">
    <div>
      {eyebrow && <div className="kds-eyebrow">{eyebrow}</div>}
      <h2 className="kds-title">{title}</h2>
      {copy && <p className="kds-copy">{copy}</p>}
    </div>
    {action}
  </div>
);

export const KpiCard: React.FC<KpiCardData> = ({ label, value, delta, deltaTone, subtext, alert }) => (
  <div className="kds-app-card kds-kpi">
    {alert && (
      <div className="kds-kpi-alert">
        <span>⚠ {alert}</span>
        <button className="kds-link-button" type="button">Investigate with AI →</button>
      </div>
    )}
    <div className="kds-kpi-body">
      <p className="kds-kpi-label">{label}</p>
      <p className="kds-kpi-value">{value}</p>
      <p className={`kds-delta ${deltaTone}`}>{delta}</p>
      <p className="kds-copy">{subtext}</p>
    </div>
  </div>
);

export const KpiGrid: React.FC = () => (
  <div className="kds-grid kds-grid-3">
    {kpis.map((item) => <KpiCard key={item.label} {...item} />)}
  </div>
);

export const TrustGauge: React.FC<{ value?: number }> = ({ value = 62 }) => (
  <div className="kds-panel kds-gauge-card">
    <div className="kds-eyebrow">CMDB Trust Score</div>
    <div className="kds-gauge-head">
      <div>
        <h3>Overall data quality</h3>
        <p>Target 95% - largest gaps are stale ownership and orphaned payments services.</p>
      </div>
      <div className="kds-gauge-pct">{value}<span>%</span></div>
    </div>
    <div className="kds-gauge-bar">
      <div className="kds-gauge-fill" style={{ width: `${value}%` }} />
      <div className="kds-gauge-gap" />
      <div className="kds-gauge-mark" />
    </div>
    <div className="kds-gauge-meta">
      <span>Current</span>
      <span>Target 95</span>
    </div>
  </div>
);

export const StatusBannerCard: React.FC = () => (
  <div className="kds-panel kds-status-banner">
    <SeverityPill severity="HIGH" label="312 stale CIs" />
    <div className="kds-status-banner-body">
      <h3 className="kds-title">Payments domain needs review</h3>
      <p className="kds-copy">Agent found a stale ownership cluster with 47 orphaned dependencies and 3 downstream apps at risk.</p>
      <div className="kds-button-row">
        <button className="kds-button primary" type="button">Investigate</button>
        <button className="kds-button" type="button">Ask for evidence</button>
      </div>
    </div>
    <ConfidenceBadge value={82} showCheck={false} />
  </div>
);

export const RecommendationCard: React.FC = () => {
  const [executed, setExecuted] = useState(false);
  const [reviewQueued, setReviewQueued] = useState(false);

  return (
    <div className={`kds-panel kds-rec-card ${executed ? "is-executed" : ""}`}>
      <div className="kds-rec-head">
        <div className="kds-rec-icon"><SparkGlyph /></div>
        <div>
          <div className="kds-eyebrow">Agent recommendation</div>
          <h3 className="kds-rec-title">Retire 47 stale CIs in payments-svc cluster</h3>
          <div className="kds-rec-meta">
            <ConfidenceBadge value={executed ? 100 : 92} showCheck={executed} />
            <span className="kds-rec-b lift">+5.1 pts trust lift</span>
            <span className="kds-rec-b">Last verified today</span>
          </div>
        </div>
      </div>
      <div className="kds-rec-reason">
        <strong>Agent reason - </strong>
        None of these 47 CIs have appeared in discovery scans for 90+ days and no active incidents reference them. Retiring now lifts Payments domain trust from 58% to 63% and removes 47 orphaned nodes from the graph.
      </div>
      <div className="kds-rec-sig-head">Signals</div>
      <div className="kds-rec-sigs">
        <div className="kds-rec-sig"><i style={{ background: "#F59E0B" }} />No discovery heartbeat - 94d average</div>
        <div className="kds-rec-sig"><i style={{ background: "#64748B" }} />0 open incidents reference these CIs</div>
        <div className="kds-rec-sig"><i style={{ background: "#10B981" }} />All upstream apps show Healthy status</div>
      </div>
      <div className="kds-rec-sig-head">Impact rollup - before action</div>
      <ImpactRollup compact />
      <div className="kds-rec-actions">
        <button className="kds-button primary" type="button" onClick={() => setExecuted(true)}>{executed ? "Executed" : "Execute"}</button>
        <button className="kds-button" type="button" onClick={() => setReviewQueued(true)}>{reviewQueued ? "Review queued" : "Send for review"}</button>
        <button className="kds-button ghost" type="button">Dismiss</button>
        <span className="kds-rec-attrib">Powered by agentic AI - {executed ? "just now" : "3m ago"}</span>
      </div>
      <SourceAttribution dataset="servicenow.cmdb_ci" timestamp={executed ? "write executed 14:12:04" : "derived 14:08:22"} confidence={executed ? 100 : 92} rationale="View rationale" />
    </div>
  );
};

export const ExecutionTimelineCard: React.FC = () => (
  <div className="kds-panel">
    <SectionHeader eyebrow="Execution" title="Retire orphaned CIs" copy="Step-through mode remains on until destructive writes are approved." />
    <StepTimeline
      showActiveControls
      steps={[
        { title: "Identified 22 orphans in payments-svc", state: "done", note: "via cmdb.query - 230ms - 22 rows", timestamp: "+0.4s" },
        { title: "Expanded upstream graph", state: "done", note: "via graph.expand - checkout-api", timestamp: "+1.8s" },
        { title: "Inferring most likely owners", state: "active", note: "cross-checking 12-week commit + deploy history", timestamp: "running..." },
        { title: "Draft owner-assignment plan", state: "pending", note: "requires approval before write", timestamp: "queued" },
        { title: "Notify owners and open correction request", state: "pending", note: "writes to graph, sends 1 email", timestamp: "queued" }
      ]}
    />
  </div>
);

export const ExecutiveSummary: React.FC = () => (
  <div className="kds-panel">
    <SectionHeader eyebrow="Executive summary" title="Data quality moved from advisory to actionable" />
    <KpiGrid />
    <p className="kds-copy kds-spaced">Main risk: payments ownership drift. Recommended next action: approve owner correction and monitor regressions for 24h.</p>
  </div>
);

export const ImpactRollup: React.FC<{ compact?: boolean }> = ({ compact }) => (
  <div className={compact ? "kds-rollup" : "kds-panel"}>
    {!compact && <SectionHeader eyebrow="Impact rollup" title="47 CIs affect 3 apps and 2 domains" />}
    <div className="kds-rollup">
      {[
        ["Impacted CIs", "47"],
        ["Applications", "3"],
        ["Processes", "2"],
        ["Business units", "1"]
      ].map(([label, value]) => (
        <div className="kds-rollup-tile" key={label}>
          <div className="kds-rollup-k">{label}</div>
          <div className="kds-rollup-v">{value}</div>
        </div>
      ))}
    </div>
  </div>
);

export const ScenarioPanel: React.FC = () => {
  const [scenario, setScenario] = useState("Split into two batches");
  return (
    <div className="kds-panel">
      <SectionHeader eyebrow="Scenario" title="What if we split the 47 CI retirement?" />
      <div className="kds-grid kds-grid-2">
        {["Split into two batches", "One low-risk request"].map((item) => (
          <button className={`kds-template-slot filled ${scenario === item ? "is-selected" : ""}`} key={item} type="button" onClick={() => setScenario(item)}>
            <strong>{item}</strong><br />{item === "Split into two batches" ? "Batch A 24 CIs - monitor Batch B" : "One request - approval threshold exception"}
          </button>
        ))}
      </div>
      <div className="kds-button-row kds-spaced">
        <button className="kds-button primary" type="button">Use scenario</button>
        <button className="kds-button" type="button">Simulate blast radius</button>
      </div>
    </div>
  );
};

export const ChatSurface: React.FC = () => {
  const [messages, setMessages] = useState([
    { from: "user", text: "Show stale payments CIs with no clear owner." },
    { from: "agent", text: "I found 47 records. The strongest cluster points to A. Ortiz, confidence 82%." },
    { from: "user", text: "Ask for evidence before applying." },
    { from: "agent", text: "Evidence queued: deploy history, incident ownership, and config changes." }
  ]);
  const addPrompt = (text: string) => setMessages((items) => [...items, { from: "user", text }, { from: "agent", text: "I am checking CMDB, incident, and graph sources. Approval gates remain on for writes." }]);

  return (
    <div className="kds-panel kds-chat-panel">
      <SectionHeader eyebrow="Conversation" title="Agentic chat" action={<AgentStatusBar state="streaming" agent="Bridge Assist" meta="142 tokens - 18 t/s" />} />
      <div className="kds-chat">
        {messages.map((message, index) => (
          <div className={`kds-message ${message.from}`} key={`${message.text}-${index}`}>{message.text}</div>
        ))}
      </div>
      <div className="kds-prompt-row">
        {["Show evidence", "Draft correction request", "Explain confidence"].map((prompt) => (
          <button className="kds-chip" type="button" key={prompt} onClick={() => addPrompt(prompt)}>{prompt}</button>
        ))}
      </div>
    </div>
  );
};

export const AiModalChat: React.FC = () => {
  const [tab, setTab] = useState("Chat");
  const [approved, setApproved] = useState(false);
  return (
    <div className="kds-ai-modal-frame">
      <div className="kds-ai-modal">
        <header className="kds-ai-modal-head">
          <div><SparkGlyph /><strong>Ask Kyndryl AI</strong><span>Beta</span></div>
          <div className="kds-button-row"><button className="kds-button ghost" type="button">New chat</button><button className="kds-button ghost" type="button">×</button></div>
        </header>
        <div className="kds-ai-tabs">
          {["Chat", "Sources", "Settings"].map((item) => <button className={tab === item ? "on" : ""} type="button" key={item} onClick={() => setTab(item)}>{item}</button>)}
        </div>
        <AgentStatusBar state={approved ? "done" : "waiting"} agent="Reconciliation Agent" meta={approved ? "2 tools - 1 handoff - 0 errors" : "approval required - destructive write"} />
        {tab === "Chat" && (
          <div className="kds-ai-stream">
            <div className="kds-message user">How do we prioritise which applications to modernise first?</div>
            <div className="kds-message agent">Start with applications that combine high business criticality, brittle dependencies, and low CMDB trust. I can build the ranked view from ServiceNow, incidents, and topology.</div>
            <ToolCallCard
              toolName="cmdb.query"
              state={approved ? "ok" : "pending"}
              args={{ filter: "domain:payments AND stale:true", window: "24h", limit: 50 }}
              editableKeys={["filter", "window", "limit"]}
              resultSummary="22 rows"
              onApprove={() => setApproved(true)}
            />
            <div className="kds-snapshot">
              <strong>Snapshot</strong>
              <span>payments-svc has 47 stale CIs, 3 impacted apps, and a projected +5.1 trust lift.</span>
            </div>
          </div>
        )}
        {tab === "Sources" && <AiFeedbackSources />}
        {tab === "Settings" && <div className="kds-specs"><div>Step-through mode: on</div><div>Destructive writes: approval required</div><div>Source citations: always show</div></div>}
        <div className="kds-ai-composer">
          <input aria-label="Ask Kyndryl AI" defaultValue="Prioritise by trust lift and blast radius" />
          <button className="kds-button primary" type="button">Send</button>
        </div>
        <footer>Bridge Assist may occasionally generate incorrect or misleading information. Verify critical actions before approval.</footer>
      </div>
    </div>
  );
};

export const AiChatHistory: React.FC = () => {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("Hybrid IT Modernization");
  const threads = ["Hybrid IT Modernization", "CMDB drift Q3", "Payments stale CI review", "Rollback review"];
  const visible = threads.filter((thread) => thread.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="kds-ai-history">
      <section className="kds-ai-history-list">
        <div className="kds-eyebrow"><SparkGlyph /> Chat History list</div>
        <h3>Bridge Assist</h3>
        <div className="kds-ai-tabs"><button type="button">Chat</button><button className="on" type="button">Chat History</button><button type="button">Settings</button></div>
        <input className="kds-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search chat history" />
        <div className="kds-group-label">Today - 30 Apr 2026</div>
        {visible.map((thread, index) => (
          <button className={`kds-history-row ${active === thread ? "active" : ""}`} type="button" key={thread} onClick={() => setActive(thread)}>
            <SparkGlyph /><span>{thread}</span><small>{index + 1}h ago</small>
          </button>
        ))}
        <button className="kds-show-older" type="button">Show older ↓</button>
      </section>
      <section className="kds-ai-history-detail">
        <div className="kds-ai-tabs"><button type="button">Chat</button><button className="on" type="button">Chat History</button><button type="button">Settings</button></div>
        <div className="kds-detail-head">
          <div className="kds-eyebrow"><SparkGlyph /> Chat Detail</div>
          <button className="kds-button" type="button">Resume</button>
        </div>
        <h3>{active}</h3>
        <div className="kds-message user">How do we prioritise which applications to modernise first?</div>
        <div className="kds-response-load"><div className="dot" /><div className="bars"><i /><i /><i /></div></div>
        <div className="kds-specs"><div>Workspace: Kyndryl - Payments</div><div>Sources: 10</div><div>Mode: step-through</div></div>
        <div className="kds-ai-composer"><input defaultValue="Continue from this answer" /><button className="kds-button primary" type="button">Send</button></div>
      </section>
    </div>
  );
};

export const AiFeedbackSources: React.FC = () => {
  const [mode, setMode] = useState<"idle" | "sources" | "feedback">("idle");
  return (
    <div className="kds-panel kds-feedback-card">
      <SectionHeader eyebrow="Feedback / sources" title="Evidence and learning loop" copy="Three states: collapsed actions, expanded sources, and feedback form." />
      <div className="kds-feedback-actions">
        <button className="kds-ico-btn" type="button">Copy</button>
        <button className="kds-ico-btn" type="button">Regenerate</button>
        <button className="kds-ico-btn" type="button" onClick={() => setMode("feedback")}>Thumbs down</button>
        <button className="kds-ico-btn" type="button" onClick={() => setMode(mode === "sources" ? "idle" : "sources")}>Sources used ({sourceChips.length})</button>
      </div>
      {mode === "sources" && (
        <div className="kds-sources">
          <button className="close" type="button" onClick={() => setMode("idle")}>×</button>
          <span className="label">Used {sourceChips.length}</span>
          {sourceChips.map((chip, index) => <span className="src-chip" key={chip}><span className="num">{index + 1}</span>{chip}</span>)}
          <button className="show-more" type="button">Show more ↓</button>
        </div>
      )}
      {mode === "feedback" && (
        <div className="kds-feedback">
          <button className="close" type="button" onClick={() => setMode("idle")}>×</button>
          <strong>What should Bridge Assist improve?</strong>
          <div className="kds-feedback-opts">
            {["Wrong source", "Outdated answer", "Missing context", "Unsafe action"].map((item) => <button type="button" key={item}>{item}</button>)}
          </div>
          <textarea defaultValue="The owner inference should weigh incident commander rotation less heavily." />
          <div className="kds-button-row"><button className="kds-button primary" type="button" onClick={() => setMode("idle")}>Submit</button><button className="kds-button ghost" type="button" onClick={() => setMode("idle")}>Cancel</button></div>
        </div>
      )}
    </div>
  );
};

export const AiLaunchButton: React.FC = () => {
  const [dark, setDark] = useState(false);
  const states = ["Default", "Hover", "Focused", "Pressed", "Disabled"];
  return (
    <div className={`kds-launch-card ${dark ? "dark" : ""}`}>
      <SectionHeader eyebrow="AI Launch Button" title="Single AI entry point" copy="Circular, gradient-bordered, and stamped with the AI glyph." />
      <div className="kds-toggle-row">
        <button className={!dark ? "on" : ""} type="button" onClick={() => setDark(false)}>Light surface</button>
        <button className={dark ? "on" : ""} type="button" onClick={() => setDark(true)}>Dark surface</button>
      </div>
      <div className="kds-launch-matrix">
        {states.map((state) => (
          <React.Fragment key={state}>
            <div className="lab">{state}</div>
            <div className="cell">
              <button className={`ai-launch ${dark ? "dark" : ""} ${state.toLowerCase()}`} type="button" disabled={state === "Disabled"} aria-label="Launch AI"><span className="glyph" /></button>
              <span className="meta">{state === "Default" ? "spruce-60 ↔ warm-red-50 - 1.5px" : state.toLowerCase()}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export const AiLoader: React.FC = () => (
  <div className="kds-loader-grid">
    <section className="kds-panel">
      <SectionHeader eyebrow="AI Loader" title="Thinking ring" copy="Opposite arcs in Warm Red 50 and Spruce 60." />
      <div className="kds-loader-matrix"><span className="ai-loader xl" /><span className="ai-loader" /><span className="ai-loader md" /><span className="ai-loader sm" /></div>
      <div className="kds-specs"><div>.ai-loader xl - 96px</div><div>.ai-loader - 64px</div><div>.ai-loader sm - inline</div></div>
    </section>
    <section className="kds-panel">
      <SectionHeader eyebrow="In-context" title="Composer and response loading" />
      <div className="kds-prompt-row"><span className="kds-chip">Cloud Services ×</span><span className="kds-chip">CMDB Drift Q3 ×</span><span className="kds-chip"><span className="ai-loader sm" /> Generating more...</span></div>
      <div className="kds-ai-composer"><input defaultValue="Bridge Assist is thinking" /><span className="ai-loader sm" /><button className="kds-button primary" type="button">Send</button></div>
      <div className="kds-response-load"><div className="dot" /><div className="bars"><i /><i /><i /></div></div>
    </section>
    <section className="kds-panel full">
      <SectionHeader eyebrow="Panel loader" title="Generative work panel" copy="Dot-grid clusters drift across a panel while graph/image work is in progress." />
      <div className="kds-panel-load-row">
        {["Sketching it out", "Creating image", "Drafting topology"].map((label) => <div className="panel-load" key={label}><span>{label}</span><i /><i /><i /></div>)}
      </div>
    </section>
  </div>
);

export const DagGraph: React.FC = () => {
  const [layout, setLayout] = useState("Layered");
  const [density, setDensity] = useState("Comfortable");
  const [edgeStyle, setEdgeStyle] = useState("Impact");
  const [dark, setDark] = useState(false);
  const [zoom, setZoom] = useState(100);
  const [selected, setSelected] = useState("App - checkout-api");
  const nodes = [
    ["Retail", "domain healthy", 8, 14],
    ["BU - Commerce", "healthy", 24, 14],
    ["Process - Checkout", "degraded", 43, 32],
    ["App - checkout-api", "impacted selected", 58, 45],
    ["CI - payments-db-03", "impacted", 75, 61],
    ["CI - payments-cache-02", "healthy", 75, 76],
    ["BU - Support", "healthy", 24, 33],
    ["Process - Returns", "healthy", 43, 52]
  ] as const;
  return (
    <div className={`kds-dag-kit ${dark ? "dark" : ""}`}>
      <div className="kds-dag-toolbar">
        {[["Layout", layout, ["Layered", "Force", "Radial"]], ["Density", density, ["Compact", "Comfortable", "Sparse"]], ["Edges", edgeStyle, ["Impact", "Lineage", "Dependency"]]].map(([label, value, options]) => (
          <label key={label as string}>{label as string}
            <select value={value as string} onChange={(event) => label === "Layout" ? setLayout(event.target.value) : label === "Density" ? setDensity(event.target.value) : setEdgeStyle(event.target.value)}>
              {(options as string[]).map((option) => <option key={option}>{option}</option>)}
            </select>
          </label>
        ))}
        <button className="kds-button" type="button" onClick={() => setDark((value) => !value)}>{dark ? "Light canvas" : "Dark canvas"}</button>
      </div>
      <div className="kds-dag-grid">
        <aside className="kds-dag-rail">
          <h4>Lens</h4>
          {["Full context", "Blast radius", "Ownership", "Freshness"].map((item, index) => <button className={index === 0 ? "active" : ""} type="button" key={item}>{item}</button>)}
          <h4>Legend</h4>
          {["Healthy", "Degraded", "Impacted", "Selected"].map((item) => <div className="legend" key={item}><i className={item.toLowerCase()} />{item}</div>)}
          <h4>Log</h4>
          <div className="kds-dag-log">layout={layout}<br />density={density}<br />edge={edgeStyle}<br />zoom={zoom}%</div>
        </aside>
        <div className="kds-dag-canvas" style={{ transform: `scale(${zoom / 100})`, transformOrigin: "center" }}>
          <i className="dag-edge e1" /><i className="dag-edge e2" /><i className="dag-edge e3 impacted" /><i className="dag-edge e4" /><i className="dag-edge e5 impacted" />
          {nodes.map(([label, tone, left, top]) => (
            <button className={`dag-node ${tone}`} style={{ left: `${left}%`, top: `${top}%` }} type="button" key={label} onClick={() => setSelected(label)}>
              <i />{label}
            </button>
          ))}
          <div className="kds-zoom">
            <button type="button" onClick={() => setZoom((value) => Math.max(70, value - 10))}>−</button>
            <span>{zoom}%</span>
            <button type="button" onClick={() => setZoom((value) => Math.min(130, value + 10))}>+</button>
          </div>
        </div>
        <aside className="kds-dag-inspector">
          <div className="kds-breadcrumb">Retail › Commerce › Checkout › checkout-api</div>
          <h3>{selected}</h3>
          <div className="kds-prop"><span>Status</span><b>Impacted</b></div>
          <div className="kds-prop"><span>Owner</span><b>payments-platform@kyndryl</b></div>
          <div className="kds-prop"><span>Last verified</span><b>14-04-2026 14:02</b></div>
          <ImpactRollup compact />
          <div className="kds-button-row"><button className="kds-button primary" type="button">Investigate with AI</button><button className="kds-button" type="button">Open in chat</button></div>
        </aside>
      </div>
      <div className="kds-dag-catalog">
        <div><strong>Node LOD</strong><span>micro / compact / expanded / inspector</span></div>
        <div><strong>Taxonomy</strong><span>domain / BU / process / app / CI</span></div>
        <div><strong>States</strong><span>healthy / degraded / impacted / selected</span></div>
        <div><strong>Edge styles</strong><span>lineage / dependency / impact</span></div>
      </div>
    </div>
  );
};

export const DataTable: React.FC = () => {
  const [selected, setSelected] = useState(tableRows[0]);
  return (
    <div className="kds-panel">
      <table className="kds-table">
        <thead><tr><th>CI</th><th>Application</th><th>Last verified</th><th>Severity</th><th>Status</th><th>Confidence</th><th>Freshness</th></tr></thead>
        <tbody>
          {tableRows.map((row) => (
            <tr className={selected.ci === row.ci ? "active" : ""} key={row.ci} onClick={() => setSelected(row)}>
              <td className="kds-mono">{row.ci}</td>
              <td>{row.owner}</td>
              <td>{row.freshness} days ago</td>
              <td><SeverityPill severity={row.severity} /></td>
              <td><StatusBadge status={row.status} /></td>
              <td><ConfidenceBadge value={row.confidence} showCheck={false} /></td>
              <td><FreshnessBadge ageDays={row.freshness} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="kds-copy kds-spaced">Selected: <span className="kds-mono">{selected.ci}</span> - click rows to update the dynamic detail state.</p>
    </div>
  );
};

export const ButtonsSurface: React.FC = () => (
  <div className="kds-panel">
    <div className="kds-button-row">
      <button className="kds-button primary" type="button">Primary</button>
      <button className="kds-button" type="button">Secondary</button>
      <button className="kds-button tertiary" type="button">Tertiary</button>
      <button className="kds-button ghost" type="button">Ghost</button>
      <button className="kds-button destructive" type="button">Destructive</button>
      <button className="kds-button spruce" type="button"><SparkGlyph /> Ask the agent</button>
    </div>
  </div>
);

export const BadgesSurface: React.FC = () => (
  <div className="kds-panel">
    <div className="kds-row">
      <SeverityPill severity="CRITICAL" />
      <SeverityPill severity="HIGH" />
      <StatusBadge status="Pending" />
      <StatusBadge status="Executed" />
      <ConfidenceBadge value={82} showCheck={false} />
      <ConfidenceBadge value={null} showCheck={false} />
      <FreshnessBadge ageDays={3} />
      <DeltaIndicator delta={2.1} unit="pp" referenceLabel="vs last wk" />
    </div>
  </div>
);

export const BrandLogoSurface: React.FC = () => (
  <Surface white>
    <div className="kds-surface-card kds-brand-card">
      <SectionHeader eyebrow="Brand" title="Kyndryl Agentic Framework" copy="Warm red for brand energy, spruce for interaction, and evidence-first typography." />
      <img src="/assets/kyndryl-logo.png" alt="Kyndryl" />
    </div>
  </Surface>
);

export const BrandIconsSurface: React.FC = () => (
  <Surface white>
    <div className="kds-surface-card">
      <SectionHeader eyebrow="Iconography" title="Operational icons" />
      <div className="kds-grid kds-grid-4">
        {["Dashboard", "Graph", "Agent", "Evidence", "Alert", "Check", "Source", "Settings"].map((name) => (
          <div className="kds-template-slot filled" key={name}><MiniIcon label={name} /> {name}</div>
        ))}
      </div>
    </div>
  </Surface>
);

export const ColorSurface: React.FC<{ palette: "brand" | "neutrals" | "severity" | "status" | "chart" }> = ({ palette }) => {
  const palettes = {
    brand: [["Warm Red 50", "#FF462D"], ["Spruce 60", "#29707A"], ["Spruce 70", "#1F5D65"], ["AI tint", "#E8F2F4"]],
    neutrals: [["Stone 10", "#F5F5F5"], ["Cool Gray 10", "#F2F4F5"], ["Stone 80", "#242424"], ["Stone 100", "#000000"]],
    severity: [["Critical", "#FDE7E2"], ["High", "#FEF3C7"], ["Medium", "#F1F5F9"], ["Low", "#D1FAE5"]],
    status: [["Healthy", "#10B981"], ["Degraded", "#F59E0B"], ["Impacted", "#E11D48"], ["In review", "#3E8AC2"]],
    chart: [["Spruce", "#29707A"], ["Warm red", "#FF462D"], ["Blue", "#3E8AC2"], ["Amber", "#E68A00"]]
  }[palette];

  return (
    <Surface white>
      <div className="kds-surface-card">
        <SectionHeader eyebrow="Colors" title={`${palette} palette`} />
        <div className="kds-grid kds-grid-4">
          {palettes.map(([name, color]) => (
            <div className="kds-panel kds-swatch" key={name}>
              <div style={{ background: color }} />
              <strong>{name}</strong>
              <span className="kds-mono">{color}</span>
            </div>
          ))}
        </div>
      </div>
    </Surface>
  );
};

export const TypeSurface: React.FC<{ mode: "display" | "body" }> = ({ mode }) => (
  <Surface white>
    <div className="kds-surface-card">
      <SectionHeader eyebrow="Typography" title={mode === "display" ? "Display scale" : "Body scale"} />
      <div className={`kds-type-sample ${mode}`}>
        <h1>Evidence-first agentic operations</h1>
        <h2>Human approval stays visible at every write boundary.</h2>
        <p>Numbers are specific, actions are explicit, and every agent-derived recommendation keeps provenance visible.</p>
        <code>cmdb.query({`{ filter: "domain:payments" }`})</code>
      </div>
    </div>
  </Surface>
);

export const SpacingSurface: React.FC<{ mode: "scale" | "radii" | "elevation" }> = ({ mode }) => (
  <Surface white>
    <div className="kds-surface-card">
      <SectionHeader eyebrow="Foundations" title={mode === "scale" ? "Spacing scale" : mode === "radii" ? "Radii" : "Elevation"} />
      <div className="kds-row">
        {[4, 8, 12, 16, 24, 32].map((size) => (
          <div key={size} className="kds-primitive-cell">
            <div
              style={{
                width: mode === "scale" ? size * 2 : 72,
                height: mode === "scale" ? size * 2 : 72,
                borderRadius: mode === "radii" ? size : 8,
                boxShadow: mode === "elevation" ? `0 ${size / 2}px ${size * 1.5}px rgba(15,23,42,.12)` : "none",
                background: "var(--k-ai-spruce-12)"
              }}
            />
            <span className="kds-mono">{size}px</span>
          </div>
        ))}
      </div>
    </div>
  </Surface>
);

export const StatesMatrix: React.FC = () => (
  <Surface>
    <div className="kds-grid kds-grid-4">
      <div className="kds-panel kds-state-card"><span className="kds-eyebrow">loading</span><div className="kds-skeleton" /><div className="kds-skeleton" style={{ width: "82%" }} /><div className="kds-skeleton" style={{ width: "56%" }} /></div>
      <div className="kds-panel kds-state-card"><span className="kds-eyebrow">empty</span><h3 className="kds-title">No stale CIs</h3><p className="kds-copy">Scan ran 4m ago - nothing to triage.</p><button className="kds-button primary" type="button">Run scan again</button></div>
      <div className="kds-panel kds-state-card"><span className="kds-eyebrow">filtered-empty</span><h3 className="kds-title">No results match filters</h3><p className="kds-copy">3 filters active - 312 rows hidden.</p><button className="kds-button" type="button">Clear filters</button></div>
      <div className="kds-panel kds-state-card warn"><span className="kds-eyebrow">error</span><h3 className="kds-title">Could not load findings</h3><p className="kds-copy">cmdb_sync returned 502 at 14:04.</p><div className="kds-button-row"><button className="kds-button primary" type="button">Retry</button><button className="kds-button" type="button">Escalate</button></div></div>
      <div className="kds-panel kds-state-card"><span className="kds-eyebrow">stale</span><FreshnessBadge ageDays={94} /><h3 className="kds-title">Payments domain trust</h3><p className="kds-copy">Underlying data has not refreshed in 94 days.</p></div>
      <div className="kds-panel kds-state-card"><span className="kds-eyebrow">unauthorized</span><h3 className="kds-title">Approver-only access</h3><p className="kds-copy">Your role: access.requestor.</p><button className="kds-button" type="button">Request access</button></div>
      <div className="kds-panel kds-state-card"><span className="kds-eyebrow">executing</span><AgentStatusBar state="streaming" meta="step 2 of 4" /><div className="kds-meter"><div className="kds-meter-fill" style={{ width: "52%" }} /></div><button className="kds-button" type="button">Pause</button></div>
      <div className="kds-panel kds-state-card success"><span className="kds-eyebrow">success-after-action</span><StatusBadge status="Executed" /><h3 className="kds-title">47 CIs retired</h3><p className="kds-copy">Agent is monitoring for regressions.</p></div>
      <div className="kds-panel kds-state-card"><span className="kds-eyebrow">waiting</span><AgentStatusBar state="waiting" meta="approval required" /><p className="kds-copy">Human input pauses the run.</p></div>
      <div className="kds-panel kds-state-card"><span className="kds-eyebrow">paused</span><AgentStatusBar state="paused" meta="3 steps remaining" /><p className="kds-copy">Resume or branch safely.</p></div>
      <div className="kds-panel kds-state-card"><span className="kds-eyebrow">readonly</span><ConfidenceBadge value={92} role="readonly" showCheck={false} /><p className="kds-copy">Static score with no override affordance.</p></div>
      <div className="kds-panel kds-state-card"><span className="kds-eyebrow">no confidence</span><ConfidenceBadge value={null} showCheck={false} /><p className="kds-copy">Agent scoring can be triggered from the badge.</p></div>
    </div>
  </Surface>
);

export const DashboardTemplate: React.FC = () => (
  <Surface>
    <div className="kds-grid">
      <TrustGauge />
      <KpiGrid />
      <div className="kds-grid kds-grid-2"><BarChart /><DonutChart /></div>
      <LiveSignals />
    </div>
  </Surface>
);

export const TriageTemplate: React.FC = () => (
  <Surface>
    <SectionHeader eyebrow="TriageTemplate" title="Findings queue" action={<div className="kds-button-row"><button className="kds-button" type="button">All domains</button><button className="kds-button" type="button">All priorities</button></div>} />
    <StatusBannerCard />
    <div className="kds-spaced"><DataTable /></div>
  </Surface>
);

export const InvestigationTemplate: React.FC = () => (
  <Surface>
    <DagGraph />
  </Surface>
);

export const ReviewQueueTemplate: React.FC = () => {
  const [approved, setApproved] = useState(false);
  return (
    <Surface>
      <SectionHeader eyebrow="ReviewQueueTemplate" title="Approvals and handoffs" />
      <div className="kds-grid">
        <ToolCallCard toolName="cmdb.write" args={{ ci: "bINC4429181", action: "decommission" }} destructive state={approved ? "ok" : "pending"} resultSummary="write queued" onApprove={() => setApproved(true)} />
        <HandoffCard from="Reconciliation" to="D. Aaron" kind="human" reason="Handing back - review needed" showActions />
        <HumanInputRequest question="The orphan has two plausible owners. Which one should I assign?" options={["Assign to A. Ortiz", "Assign to K. Patel", "Leave unassigned"]} />
      </div>
    </Surface>
  );
};

export const ConversationTemplate: React.FC = () => (
  <Surface>
    <div className="kds-grid kds-grid-2">
      <ChatSurface />
      <AiFeedbackSources />
    </div>
  </Surface>
);

const LiveSignals: React.FC = () => {
  const [expanded, setExpanded] = useState("Retire 47 unused CIs");
  return (
    <div className="kds-panel kds-sig-panel">
      <div className="kds-sig-head"><SparkGlyph /><strong>Live Signals</strong><span>6 active - 1 Critical - 3 High - 2 Medium</span></div>
      <div className="kds-sig-grid">
        {signals.map((signal) => (
          <button className={`kds-sig-card ${signal.tone} ${expanded === signal.title ? "expanded" : ""}`} key={signal.title} type="button" onClick={() => setExpanded((current) => current === signal.title ? "" : signal.title)}>
            <div className="kds-sig-row-top"><span className={`sev-pill ${signal.tone}`}>{signal.tone}</span><span className="sig-title">{signal.title}</span></div>
            <p className="kds-sig-metric">{signal.metric}</p>
            {expanded === signal.title && <div className="kds-sig-detail">{signal.detail}<div className="kds-sig-actions"><span className="kds-button primary">Ask AI</span><span className="kds-button">View →</span></div></div>}
          </button>
        ))}
      </div>
    </div>
  );
};

export const CMDBWorkspaceKit: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [view, setView] = useState<CmdbView>("dashboard");
  const [drawer, setDrawer] = useState<"ci" | "app" | null>(null);
  const [approvedRows, setApprovedRows] = useState<string[]>([]);

  useEffect(() => {
    const storedView = window.localStorage.getItem("kyn-view") as CmdbView | null;
    if (storedView && titleForView[storedView]) setView(storedView);
  }, []);

  const navigate = (next: CmdbView) => {
    setView(next);
    window.localStorage.setItem("kyn-view", next);
  };

  if (!loggedIn) {
    return (
      <div className="cmdb-login-screen">
        <div className="cmdb-login-box">
          <img src="/assets/kyndryl-logo.png" alt="Kyndryl" />
          <h2>CMDB Data Quality</h2>
          <p>Sign in with a demo account to restore the dynamic app state.</p>
          <label>Username<input defaultValue="anna_access" /></label>
          <label>Password<input defaultValue="password" type="password" /></label>
          <button className="cmdb-login-btn" type="button" onClick={() => setLoggedIn(true)}>Sign in</button>
          <div className="cmdb-demo-accounts">anna_access - raj_security - dana_admin</div>
        </div>
      </div>
    );
  }

  return (
    <Surface app>
      <div className="cmdb-app">
        <aside className="cmdb-side">
          <div className="cmdb-side-head"><img src="/assets/kyndryl-logo.png" alt="Kyndryl" /></div>
          <nav className="cmdb-nav">
            {cmdbViews.map((item) => (
              <button className={view === item.id ? "active" : ""} type="button" key={item.id} onClick={() => navigate(item.id)}>
                <MiniIcon label={item.label} />{item.label}{item.badge && <span className="badge">{item.badge}</span>}
              </button>
            ))}
          </nav>
          <div className="cmdb-side-foot">
            <button className="cmdb-explain" type="button">Explainability</button>
            <div className="cmdb-user"><div className="name">Anna Access</div><button type="button" onClick={() => setLoggedIn(false)}>Sign out</button></div>
          </div>
        </aside>
        <main className="cmdb-main">
          <header className="cmdb-header"><h1>{titleForView[view]}</h1><div className="cmdb-avatar">AA</div></header>
          <div className="cmdb-content">
            {view === "dashboard" && <><TrustGauge /><KpiGrid /><div className="kds-grid kds-grid-2 kds-spaced"><BarChart /><DonutChart /></div><LiveSignals /></>}
            {view === "triage" && <CmdbTriage onOpen={() => setDrawer("ci")} />}
            {view === "recommendations" && <RecommendationCard />}
            {view === "investigation" && <CmdbInvestigation onOpen={(kind) => setDrawer(kind)} />}
            {view === "changes" && <CmdbChangeQueue approvedRows={approvedRows} onApprove={(id) => setApprovedRows((rows) => [...rows, id])} />}
            {view === "chat" && <AiModalChat />}
            {view === "incidents" && <div className="kds-panel kds-empty-state">Incidents queue (stub) - shares table + drawer pattern with Access review.</div>}
            {view === "reports" && <div className="kds-panel kds-empty-state">Reports (stub) - uses the Dashboard chart components.</div>}
          </div>
        </main>
      </div>
      {drawer && <CmdbDrawer kind={drawer} onClose={() => setDrawer(null)} />}
    </Surface>
  );
};

const CmdbTriage: React.FC<{ onOpen: () => void }> = ({ onOpen }) => (
  <div className="kds-panel">
    <SectionHeader title="Stale CIs requiring access review" action={<div className="kds-button-row"><button className="kds-button" type="button">All domains</button><button className="kds-button" type="button">All priorities</button><button className="kds-button ghost" type="button">Clear all</button></div>} />
    <table className="kds-table">
      <thead><tr><th>CI</th><th>Application</th><th>Last verified</th><th>Priority</th><th>Incidents</th><th>Action</th></tr></thead>
      <tbody>
        {tableRows.map((row, index) => (
          <tr key={row.ci} onClick={index === 0 ? onOpen : undefined}>
            <td className="kds-mono">{row.ci}</td><td>{row.owner}</td><td>{row.freshness} days ago</td><td><SeverityPill severity={row.severity} /></td><td>{index + 1}</td><td><button className="kds-link-button" type="button">Investigate →</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const CmdbInvestigation: React.FC<{ onOpen: (kind: "ci" | "app") => void }> = ({ onOpen }) => (
  <div className="cmdb-graph-layout">
    <div className="cmdb-graph-rail">
      <h4>Lens</h4>
      {["Full context", "Blast radius", "Ownership"].map((item, index) => <button className={index === 0 ? "active" : ""} type="button" key={item}>{item}</button>)}
      <h4>Legend</h4>
      <div className="legend"><i className="healthy" />Healthy</div><div className="legend"><i className="degraded" />Degraded</div><div className="legend"><i className="impacted" />Impacted</div>
    </div>
    <div className="cmdb-graph-canvas">
      <button className="dag-node impacted selected" style={{ left: "54%", top: "42%" }} type="button" onClick={() => onOpen("app")}><i />App - checkout-api</button>
      <button className="dag-node impacted" style={{ left: "72%", top: "58%" }} type="button" onClick={() => onOpen("ci")}><i />CI - payments-db-03</button>
      <button className="dag-node healthy" style={{ left: "20%", top: "16%" }} type="button"><i />BU - Commerce</button>
      <button className="dag-node degraded" style={{ left: "40%", top: "28%" }} type="button"><i />Process - Checkout</button>
      <i className="dag-edge e1" /><i className="dag-edge e3 impacted" /><i className="dag-edge e5 impacted" />
    </div>
    <div className="cmdb-graph-inspector">
      <div className="kds-breadcrumb">Retail › Commerce › Checkout › checkout-api</div>
      <h3>checkout-api</h3>
      <div className="kds-prop"><span>Status</span><b>Impacted</b></div>
      <div className="kds-prop"><span>Owner</span><b>payments-platform@kyndryl</b></div>
      <ImpactRollup compact />
      <div className="kds-button-row"><button className="kds-button primary" type="button">Investigate with AI</button><button className="kds-button" type="button">Open in chat</button></div>
    </div>
  </div>
);

const CmdbChangeQueue: React.FC<{ approvedRows: string[]; onApprove: (id: string) => void }> = ({ approvedRows, onApprove }) => {
  const rows = [
    ["crq-3102", "Retire 47 stale CIs in payments-svc cluster", "Submitted by agentic-remediation - bCRQ-3102 - 12m ago"],
    ["crq-3098", "Re-assign owner - 8 logistics CIs", "Submitted by anna_access - bCRQ-3098 - 42m ago"],
    ["crq-3085", "Merge 14 duplicate CI records - hr-audit-svc", "Approved by raj_security - bCRQ-3085 - execution queued"],
    ["crq-3072", "Retire 11 orphaned CIs - retail-session cluster", "Executed - bCRQ-3072 - 5h ago"]
  ];
  return (
    <div className="kds-panel">
      <SectionHeader title="Correction requests - 12 pending review" action={<div className="kds-button-row"><button className="kds-button" type="button">All states</button><button className="kds-button" type="button">All owners</button></div>} />
      <div className="cmdb-queue">
        {rows.map(([id, title, meta], index) => {
          const approved = approvedRows.includes(id) || index === 2;
          const executed = index === 3;
          return (
            <div className="cmdb-queue-row" key={id}>
              <span className={`queue-state ${executed ? "executed" : approved ? "approved" : "pending"}`}>{executed ? "Executed" : approved ? "Approved" : "Pending"}</span>
              <div><p className="queue-title">{title}</p><p className="queue-meta">{meta}</p></div>
              <div className="queue-actions">{approved || executed ? <button className="kds-button" type="button">View audit trail</button> : <><button className="kds-button primary" type="button" onClick={() => onApprove(id)}>Approve</button><button className="kds-button" type="button">Defer</button><button className="kds-button ghost" type="button">Reject</button></>}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CmdbDrawer: React.FC<{ kind: "ci" | "app"; onClose: () => void }> = ({ kind, onClose }) => (
  <>
    <button className="cmdb-scrim" type="button" aria-label="Close drawer" onClick={onClose} />
    <aside className="cmdb-drawer open">
      <div className="cmdb-drawer-head">
        <div><h2>{kind === "app" ? "checkout-api" : "payments-db-03"}</h2><p>{kind === "app" ? "Application - Impacted" : "CI - Database - Impacted"}</p></div>
        <button className="cmdb-drawer-close" type="button" onClick={onClose}>×</button>
      </div>
      <div className="cmdb-drawer-body">
        <div className="kds-prop"><span>Status</span><b>Impacted</b></div>
        <div className="kds-prop"><span>Last verified</span><b>{kind === "app" ? "14-04-2026 14:02" : "94 days ago - 20-01-2026 02:14"}</b></div>
        <div className="kds-prop"><span>Owner</span><b>payments-platform@kyndryl</b></div>
        <div className="kds-prop"><span>Ticket</span><b className="kds-mono">bINC4219003</b></div>
        <div className="kds-rec-sig-head">Signals</div>
        <div className="kds-rec-sigs"><div className="kds-rec-sig"><i style={{ background: "#F59E0B" }} />No discovery heartbeat - 94d</div><div className="kds-rec-sig"><i style={{ background: "#E11D48" }} />Referenced by 3 open incidents</div><div className="kds-rec-sig"><i style={{ background: "#F59E0B" }} />Owner email bounced 2d ago</div></div>
        <ImpactRollup compact />
        <p className="kds-copy">Source: ServiceNow CMDB - table cmdb_ci_db_mssql - agent reviewed against incident feed and knowledge graph on 23-04-2026.</p>
      </div>
      <div className="cmdb-drawer-actions"><button className="kds-button primary" type="button">Investigate with AI</button><button className="kds-button" type="button">Retire</button><button className="kds-button ghost" type="button">Defer</button></div>
    </aside>
  </>
);

export const ShidokaComponentsKit: React.FC = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <Surface app className="shidoka-kit">
      <header className="shidoka-header"><img src="/assets/kyndryl-logo.png" alt="Kyndryl" /><span>Shidoka - Component Kit</span><nav><a>Primitives</a><a>AI</a><a>CMDB kit ↗</a></nav><div className="shidoka-avatar">DA</div></header>
      <div className="shidoka-layout">
        <aside className="shidoka-sidenav">{["Typography", "Buttons", "Inputs", "Dropdown", "Selection", "Breadcrumbs", "Links", "Pagination", "Table", "AI"].map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</aside>
        <main className="shidoka-main">
          <section className="kit-section"><SectionHeader eyebrow="Typography" title="Display / Heading" /><div className="kds-type-sample display"><h1>Build trust into every action</h1><p>Roboto body, TWK Everett display, Geist Mono for identifiers.</p></div></section>
          <section className="kit-section"><SectionHeader eyebrow="Buttons" title="Button variants" /><ButtonsSurface /></section>
          <section className="kit-section"><SectionHeader eyebrow="Inputs" title="Form fields" /><div className="kds-grid kds-grid-2"><label className="kyn-field">CI name<input className="kyn-input" defaultValue="web-prod-12" /></label><label className="kyn-field">Search<input className="kyn-input" placeholder="Search CIs, tickets, owners..." /></label><label className="kyn-field">Invalid<input className="kyn-input invalid" aria-invalid="true" defaultValue="not-a-real-ci" /><span>CI not found in registry.</span></label><label className="kyn-field">Message<textarea className="kyn-input" defaultValue="Describe the change..." /></label></div></section>
          <section className="kit-section"><SectionHeader eyebrow="Dropdown" title="Single and multi select" /><div className="kyn-dropdown"><button className="kyn-select" type="button" onClick={() => setDropdown((value) => !value)}>Prod <span>⌄</span></button>{dropdown && <ul className="kyn-options"><li>Prod</li><li>Stage</li><li>Dev</li></ul>}</div></section>
          <section className="kit-section"><SectionHeader eyebrow="Selection" title="Checkbox, radio, toggle" /><div className="kds-grid kds-grid-3"><label className="kyn-check"><input type="checkbox" defaultChecked />Include reconciled CIs</label><label className="kyn-radio"><input name="r1" type="radio" defaultChecked />All teams</label><label className="kyn-toggle"><input type="checkbox" defaultChecked /><span>Auto-reconcile low-risk CIs</span></label></div></section>
          <section className="kit-section"><SectionHeader eyebrow="Badges and table" title="Operational inventory" /><BadgesSurface /><div className="kds-spaced"><DataTable /></div></section>
          <section className="kit-section"><SectionHeader eyebrow="AI" title="Agent entry and feedback" /><AiLaunchButton /><div className="kds-spaced"><AiFeedbackSources /></div></section>
        </main>
      </div>
    </Surface>
  );
};

export const ShidokaShellKit: React.FC = () => {
  const [navOpen, setNavOpen] = useState(true);
  const [screen, setScreen] = useState<"dashboard" | "triage">("dashboard");
  const [flyout, setFlyout] = useState<"apps" | "workspace" | null>(null);
  return (
    <Surface app className="shidoka-shell-surface">
      <header className="shidoka-header shell"><img src="/assets/kyndryl-logo.png" alt="Kyndryl" /><span>Agentic Framework</span><nav><button type="button" onClick={() => setScreen("dashboard")}>Dashboard</button><button type="button" onClick={() => setFlyout(flyout === "apps" ? null : "apps")}>Products ▾</button><button type="button" onClick={() => setScreen("triage")}>Triage</button><a>Docs</a></nav><button className="shidoka-avatar" type="button" onClick={() => setFlyout(flyout === "workspace" ? null : "workspace")}>KP</button></header>
      {flyout === "apps" && <div className="shidoka-flyout apps">{["CMDB Data Quality", "Incident Intelligence", "Change Risk", "Observability Graph", "Admin console", "Help & docs"].map((item) => <a key={item}>{item}<small>Trust posture - triage - reconciliation</small></a>)}</div>}
      {flyout === "workspace" && <div className="shidoka-flyout workspace"><strong>Dana Aaron</strong><small>dana.aaron@kyndryl.com</small>{["Kyndryl - Payments", "ServiceNow sandbox", "Global ops"].map((item) => <a key={item}>{item}</a>)}</div>}
      <div className={`shidoka-shell ${navOpen ? "nav-open" : ""}`}>
        <aside className="shidoka-localnav"><button type="button" onClick={() => setNavOpen((value) => !value)}>☰</button>{["Overview", "Triage", "Freshness", "Knowledge graph", "Requests", "Settings"].map((item, index) => <button className={index === 0 && screen === "dashboard" || index === 1 && screen === "triage" ? "is-active" : ""} type="button" key={item} onClick={() => index === 1 ? setScreen("triage") : setScreen("dashboard")}><MiniIcon label={item} /><span>{item}</span>{item === "Triage" && <b>17</b>}</button>)}</aside>
        <main className="shidoka-shell-main">
          {screen === "dashboard" ? <ShidokaDashboard /> : <ShidokaTriage />}
        </main>
      </div>
      <footer className="shidoka-footer"><span>Privacy</span><span>Terms</span><img src="/assets/kyndryl-logo.png" alt="Kyndryl" /><span>© 2026 Kyndryl Holdings, Inc.</span></footer>
    </Surface>
  );
};

const ShidokaDashboard = () => (
  <>
    <SectionHeader eyebrow="Kyndryl / CMDB" title="CMDB posture" copy="Overview of trust, freshness, ownership, and reconciliation." action={<button className="kds-button spruce" type="button"><SparkGlyph /> Ask the agent</button>} />
    <div className="kds-grid kds-grid-3"><KpiCard label="Trust score" value="78.4 / 100" delta="+2.1 vs last week" deltaTone="up" subtext="Weighted across freshness, ownership, reconciliation." /><KpiCard label="Stale Prod CIs" value="17" delta="+4 vs last week" deltaTone="down" subtext="Older than 14-day threshold." /><KpiCard label="Open correction requests" value="6" delta="2 awaiting approval" deltaTone="flat" subtext="Avg time to approve - 42m." /></div>
    <div className="kds-grid kds-grid-2 kds-spaced"><StatusBannerCard /><ExecutionTimelineCard /></div>
  </>
);

const ShidokaTriage = () => (
  <>
    <SectionHeader eyebrow="CMDB / Triage" title="Triage - stale & orphaned" action={<div className="kds-button-row"><button className="kds-button" type="button">Export</button><button className="kds-button primary" type="button">Bulk reconcile</button></div>} />
    <DataTable />
  </>
);

export const ShidokaChartsKit: React.FC = () => {
  const [dark, setDark] = useState(false);
  return (
    <Surface className={`shidoka-charts ${dark ? "dark" : ""}`}>
      <SectionHeader eyebrow="Shidoka charts" title="Data viz catalog" copy="Uses CSS/SVG chart primitives and design-system chart color order." action={<button className="kds-button" type="button" onClick={() => setDark((value) => !value)}>{dark ? "Light" : "Dark"} charts</button>} />
      <div className="kds-grid kds-grid-2"><BarChart /><DonutChart /><TrustGauge value={78} /><ImpactRollup /></div>
      <div className="kds-chart-catalog"><div>Line chart</div><div>Stacked bar</div><div>Heatmap</div><div>Gauge</div><div>Donut</div><div>Timeline</div></div>
    </Surface>
  );
};

export const AgenticFlowSurface: React.FC = () => {
  const [approved, setApproved] = useState(false);
  return (
    <Surface>
      <div className="kds-agent-flow">
        <main>
          <AgentStatusBar state={approved ? "done" : "thinking"} stepThrough showStepThrough meta={approved ? "6 steps in 38s" : "step 2 of 6 - gathering signals"} />
          <ChatSurface />
          <ToolCallCard toolName="cmdb.query" state={approved ? "ok" : "pending"} args={{ filter: "status:orphaned AND domain:payments", window: "24h", limit: 50 }} editableKeys={["filter", "window", "limit"]} onApprove={() => setApproved(true)} resultSummary="22 rows" />
          <HumanInputRequest question="The orphan has two plausible owners. Which one should I assign?" options={["Assign to A. Ortiz", "Assign to K. Patel", "Leave unassigned - escalate"]} />
          <HandoffCard from="Triage" to="Reconciliation" toKind="specialist" reason="Handing off - needs SQL skill" showActions />
        </main>
        <aside><ExecutionTimelineCard /><StateDeltaToast field="owner" subject="payments-svc owner" oldValue="unassigned" newValue="A. Ortiz" context="confidence 0.78" actions={["Undo", "Why?"]} /></aside>
      </div>
    </Surface>
  );
};

export const AgenticInboxSurface: React.FC = () => (
  <Surface>
    <div className="kds-inbox">
      <div className="kds-inbox-head"><div><h2>Learned from you</h2><p>Every override is a teaching signal. The agent applied these to future decisions.</p></div><span>7 this week</span></div>
      <div className="kds-ai-tabs"><button className="on" type="button">All - 7</button><button type="button">Teach signals - 3</button><button type="button">Overrides - 3</button><button type="button">Disputes - 1</button></div>
      {[
        ["teach", "Taught the agent to lower confidence for AWS auto-scaling group records", "From 64% confidence on CI-8421 - pattern applies to all ASG-derived CIs.", "applied to 147 similar items - avg confidence -0.18", "2h ago"],
        ["override", "Overrode confidence - web-gateway-02", "Agent said 82%, you set 40%. Agent is monitoring for drift.", "isolated override - not generalised", "5h ago"],
        ["dispute", "Disputed derivation - payment-svc owner", "You marked Reconciliation Agent's owner inference as wrong.", "23 similar inferences re-derived - 4 changed", "yesterday"],
        ["teach", "Labeled change cause - Q3 migration wave", "DeltaIndicator +2.1 pp tagged as migration-driven.", "will auto-annotate similar future moves", "2 days ago"]
      ].map(([tone, title, meta, impact, time]) => (
        <div className={`kds-inbox-row ${tone}`} key={title}><span className="icon"><SparkGlyph /></span><div><div className="title">{title}</div><div className="meta">{meta}</div><div className="impact">{impact}</div></div><span className="time">{time}</span></div>
      ))}
      <div className="kds-inbox-footer">Teaching signals are scoped to your workspace unless promoted by an admin.</div>
    </div>
  </Surface>
);

export const AgenticStatesReference: React.FC = () => (
  <Surface>
    <div className="ka-showcase">
      <section className="ka-showcase-card ka-showcase-card-full">
        <div className="ka-eyebrow"><SparkGlyph /> Agentic interaction states</div>
        <h2>Agentic interaction states</h2>
        <p className="ka-sub">Six primitives surface what the agent is doing right now: thinking, calling tools, asking for input, walking through a plan, handing off, and updating shared state.</p>
        <div className="kds-specs"><div>Gradient border: spruce-60 to warm-red-50 at 28% alpha</div><div>Every action writes to Learned from you when it changes future behavior</div></div>
      </section>
      <section className="ka-showcase-card ka-showcase-card-full">
        <div className="ka-eyebrow"><SparkGlyph /> AgentStatusBar - 5 states</div>
        <p className="ka-sub">Persistent header above any agentic surface.</p>
        <div className="ka-demo-grid">
          <AgentStatusBar state="thinking" />
          <AgentStatusBar state="streaming" />
          <AgentStatusBar state="waiting" />
          <AgentStatusBar state="paused" />
          <AgentStatusBar state="done" />
        </div>
      </section>
      <section className="ka-showcase-card ka-showcase-card-full">
        <div className="ka-eyebrow">ToolCallCard - 4 states</div>
        <div className="ka-demo-grid">
          <ToolCallCard toolName="cmdb.query" state="pending" args={{ filter: "status:orphaned AND domain:payments", window: "24h", limit: 50 }} editableKeys={["filter", "window", "limit"]} />
          <ToolCallCard toolName="graph.expand" state="running" args={{ ci: "checkout-api", depth: 2 }} meta="step 3 of 6 - upstream-1 - 1.4s elapsed" />
          <ToolCallCard toolName="cmdb.query" state="ok" args={{ rows: 22 }} resultSummary="22 rows" />
          <ToolCallCard toolName="graph.write" state="err" args={{ operation: "mutate", target: "payments-svc" }} />
        </div>
      </section>
      <section className="ka-showcase-card">
        <div className="ka-eyebrow">HumanInputRequest</div>
        <HumanInputRequest question="The orphan has two plausible owners. Which one should I assign?" options={["Assign to A. Ortiz (structural)", "Assign to K. Patel (recency)", "Leave unassigned - escalate"]} context="A. Ortiz owns 8 adjacent services. K. Patel deployed the latest change." />
        <HumanInputRequest question="I'm about to retire 47 CIs. Should I proceed?" options={["Proceed (47)", "Split into 2 batches", "Lower threshold and cancel"]} context="Blast radius extends past your usual threshold." />
      </section>
      <section className="ka-showcase-card">
        <div className="ka-eyebrow">StepTimeline</div>
        <ExecutionTimelineCard />
      </section>
      <section className="ka-showcase-card ka-showcase-card-full">
        <div className="ka-eyebrow">Handoff and state delta</div>
        <div className="ka-demo-grid">
          <HandoffCard from="Triage" to="Reconciliation" toKind="specialist" reason="Handing off - needs SQL skill" />
          <HandoffCard from="Reconciliation" to="D. Aaron" kind="human" reason="Handing back - review needed" showActions />
          <div className="ka-toast-grid">
            <StateDeltaToast field="owner" subject="payments-svc owner" oldValue="unassigned" newValue="A. Ortiz" context="confidence 0.78" actions={["Undo", "Why?"]} />
            <StateDeltaToast field="status" subject="47 CIs" oldValue="pending" newValue="retired" context="+5.1 pts trust lift" tone="warm" actions={["Undo", "Audit"]} />
          </div>
        </div>
      </section>
      <section className="ka-showcase-card ka-showcase-card-full"><AgenticFlowSurface /></section>
      <section className="ka-showcase-card ka-showcase-card-full"><AgenticInboxSurface /></section>
    </div>
  </Surface>
);

export const BarChart: React.FC = () => (
  <div className="kds-panel kds-chart-card">
    <SectionHeader eyebrow="Chart" title="Impacted CIs by Domain" copy="Rolled up from active impact set - last 24h" />
    <div className="kds-chart-bars">
      {[
        ["Payments", 85, 142],
        ["Logistics", 68, 118],
        ["Retail", 52, 91],
        ["HR", 38, 66],
        ["Shared", 22, 38]
      ].map(([label, height, value]) => (
        <div className="kds-bar" style={{ height: `${height}%` }} key={label}>
          <span>{value}</span><small>{label}</small>
        </div>
      ))}
    </div>
  </div>
);

export const DonutChart: React.FC = () => (
  <div className="kds-panel kds-chart-card">
    <SectionHeader eyebrow="Chart" title="Correction priority mix" copy="124 open correction requests" />
    <div className="kds-donut" />
    <div className="kds-donut-legend">
      <span><i style={{ background: "#E11D48" }} />Critical</span>
      <span><i style={{ background: "#F59E0B" }} />High</span>
      <span><i style={{ background: "#29707A" }} />Medium</span>
      <span><i style={{ background: "#10B981" }} />Low</span>
    </div>
  </div>
);
