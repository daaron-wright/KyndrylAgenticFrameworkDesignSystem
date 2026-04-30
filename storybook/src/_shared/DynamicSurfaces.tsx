import React from "react";
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

const kpis: KpiCardData[] = [
  { label: "Total CIs tracked", value: "4,812", delta: "+124 WoW", deltaTone: "up", subtext: "Discovered across 38 applications" },
  { label: "Stale CIs", value: "312", delta: "+28 vs last week", deltaTone: "down", subtext: "Not verified in 30d+", alert: "Investigate with AI" },
  { label: "Trust score", value: "62%", delta: "+1.4 pts YoY", deltaTone: "up", subtext: "Target 95% - gap 33 pts" }
];

const tableRows: TableRowData[] = [
  { ci: "web-gateway-02", owner: "A. Ortiz", severity: "HIGH", status: "Pending", confidence: 82, freshness: 34 },
  { ci: "payments-svc", owner: "Unassigned", severity: "CRITICAL", status: "Impacted", confidence: 64, freshness: 94 },
  { ci: "cmdb-sync-07", owner: "K. Patel", severity: "MEDIUM", status: "Approved", confidence: 92, freshness: 3 }
];

export const Surface: React.FC<{ children: React.ReactNode; app?: boolean; white?: boolean }> = ({ children, app, white }) => (
  <div className={`kds-story-surface ${app ? "is-app" : ""} ${white ? "is-white" : ""}`}>{children}</div>
);

export const SectionHeader: React.FC<{ eyebrow?: string; title: string; copy?: string }> = ({ eyebrow, title, copy }) => (
  <div style={{ marginBottom: 16 }}>
    {eyebrow && <div className="kds-eyebrow">{eyebrow}</div>}
    <h2 className="kds-title">{title}</h2>
    {copy && <p className="kds-copy">{copy}</p>}
  </div>
);

export const KpiCard: React.FC<KpiCardData> = ({ label, value, delta, deltaTone, subtext, alert }) => (
  <div className="kds-app-card kds-kpi">
    {alert && <div className="kds-kpi-alert"><span>{alert}</span><span>Explain</span></div>}
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
  <div className="kds-panel">
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
      <div>
        <div className="kds-eyebrow">Trust score</div>
        <h3 className="kds-title">CMDB data quality</h3>
      </div>
      <strong style={{ fontSize: 36, letterSpacing: "-.03em" }}>{value}%</strong>
    </div>
    <div className="kds-meter"><div className="kds-meter-fill" style={{ width: `${value}%` }} /></div>
    <p className="kds-copy">Target 95%. Largest gaps are stale ownership and orphaned payments services.</p>
  </div>
);

export const StatusBannerCard: React.FC = () => (
  <div className="kds-panel kds-status-banner">
    <SeverityPill severity="HIGH" label="312 stale CIs" />
    <div style={{ flex: 1 }}>
      <h3 className="kds-title">Payments domain needs review</h3>
      <p className="kds-copy">Agent found a stale ownership cluster with 47 orphaned dependencies and 3 downstream apps at risk.</p>
      <div className="kds-button-row" style={{ marginTop: 10 }}>
        <button className="kds-button primary" type="button">Investigate</button>
        <button className="kds-button" type="button">Ask for evidence</button>
      </div>
    </div>
    <ConfidenceBadge value={82} showCheck={false} />
  </div>
);

export const RecommendationCard: React.FC = () => (
  <div className="kds-panel">
    <div className="kds-row" style={{ justifyContent: "space-between" }}>
      <div>
        <div className="kds-eyebrow">Agent recommendation</div>
        <h3 className="kds-title">Assign orphaned payments services to A. Ortiz</h3>
      </div>
      <ConfidenceBadge value={82} showCheck={false} />
    </div>
    <p className="kds-copy" style={{ marginTop: 14 }}>
      The deployment history, incident ownership, and recent config touches converge on A. Ortiz as the most likely accountable owner.
    </p>
    <div className="kds-grid kds-grid-3" style={{ marginTop: 14 }}>
      <div className="kds-template-slot filled">Last deploy owner matched</div>
      <div className="kds-template-slot filled">Incident chain confirms team</div>
      <div className="kds-template-slot filled">Blast radius under threshold</div>
    </div>
    <div className="kds-button-row" style={{ marginTop: 14 }}>
      <button className="kds-button primary" type="button">Approve plan</button>
      <button className="kds-button" type="button">Edit</button>
      <button className="kds-button ghost" type="button">Why?</button>
    </div>
    <SourceAttribution dataset="servicenow.cmdb_ci" timestamp="derived 14:08:22" confidence={82} rationale="View rationale" />
  </div>
);

export const ExecutionTimelineCard: React.FC = () => (
  <div className="kds-panel">
    <SectionHeader eyebrow="Execution" title="Retire orphaned CIs" copy="Step-through mode remains on until destructive writes are approved." />
    <StepTimeline
      steps={[
        { title: "Read CI graph", state: "done", note: "depth=2 - 147 nodes", timestamp: "+0.4s" },
        { title: "Detect stale records", state: "done", note: "23 candidates", timestamp: "+1.2s" },
        { title: "Resolve owners", state: "active", note: "4/23 unresolved", timestamp: "running..." },
        { title: "Draft correction request", state: "pending", timestamp: "queued" }
      ]}
    />
  </div>
);

export const ExecutiveSummary: React.FC = () => (
  <div className="kds-panel">
    <SectionHeader eyebrow="Executive summary" title="Data quality moved from advisory to actionable" />
    <div className="kds-grid kds-grid-3">
      <KpiCard {...kpis[0]} />
      <KpiCard {...kpis[1]} />
      <KpiCard {...kpis[2]} />
    </div>
    <p className="kds-copy" style={{ marginTop: 14 }}>Main risk: payments ownership drift. Recommended next action: approve owner correction and monitor regressions for 24h.</p>
  </div>
);

export const ImpactRollup: React.FC = () => (
  <div className="kds-panel">
    <SectionHeader eyebrow="Impact rollup" title="47 CIs affect 3 apps and 2 domains" />
    <div className="kds-grid kds-grid-3">
      <div className="kds-template-slot filled"><strong>3 apps</strong><br />checkout-api, billing, portal</div>
      <div className="kds-template-slot filled"><strong>2 domains</strong><br />payments, identity</div>
      <div className="kds-template-slot filled"><strong>+2.1 pts</strong><br />projected trust lift</div>
    </div>
  </div>
);

export const ScenarioPanel: React.FC = () => (
  <div className="kds-panel">
    <SectionHeader eyebrow="Scenario" title="What if we split the 47 CI retirement?" />
    <div className="kds-grid kds-grid-2">
      <div className="kds-template-slot filled">Batch A: 24 CIs - no threshold exception</div>
      <div className="kds-template-slot filled">Batch B: 23 CIs - monitor incidents first</div>
    </div>
    <div className="kds-button-row" style={{ marginTop: 14 }}>
      <button className="kds-button primary" type="button">Use split plan</button>
      <button className="kds-button" type="button">Simulate blast radius</button>
    </div>
  </div>
);

export const ChatSurface: React.FC = () => (
  <div className="kds-panel">
    <SectionHeader eyebrow="Conversation" title="Agentic chat" />
    <div className="kds-chat">
      <div className="kds-message user">Show stale payments CIs with no clear owner.</div>
      <div className="kds-message agent">I found 47 records. The strongest cluster points to A. Ortiz, confidence 82%.</div>
      <div className="kds-message user">Ask for evidence before applying.</div>
      <div className="kds-message agent">Evidence queued: deploy history, incident ownership, and config changes.</div>
    </div>
  </div>
);

export const AiModalChat: React.FC = () => (
  <div className="kds-panel" style={{ maxWidth: 720 }}>
    <SectionHeader eyebrow="Modal" title="Ask Kyndryl AI" copy="A dynamic modal-style surface with chat, confidence, sources, and feedback." />
    <ChatSurface />
  </div>
);

export const AiChatHistory: React.FC = () => (
  <div className="kds-panel">
    <SectionHeader eyebrow="History" title="Recent agent sessions" />
    {["Owner reconciliation", "Trust score explanation", "Rollback review"].map((item, index) => (
      <div className="kds-template-slot filled" key={item} style={{ justifyContent: "space-between", marginTop: index ? 8 : 0 }}>
        <span>{item}</span><span className="kds-mono">{index + 1}h ago</span>
      </div>
    ))}
  </div>
);

export const AiFeedbackSources: React.FC = () => (
  <div className="kds-panel">
    <SectionHeader eyebrow="Feedback / sources" title="Evidence and learning loop" />
    <SourceAttribution dataset="servicenow.cmdb_ci" timestamp="14:08:22" confidence={82} rationale="Open trace" />
    <div className="kds-button-row" style={{ marginTop: 14 }}>
      <button className="kds-button" type="button">Helpful</button>
      <button className="kds-button" type="button">Needs correction</button>
      <button className="kds-button primary" type="button">Teach agent</button>
    </div>
  </div>
);

export const AiLaunchButton: React.FC = () => (
  <div className="kds-panel">
    <button className="kds-button spruce" type="button"><span className="ka-glyph" /> Ask Kyndryl AI</button>
  </div>
);

export const AiLoader: React.FC = () => (
  <div className="kds-panel">
    <AgentStatusBar state="thinking" agent="Reconciliation Agent" meta="planning - gathering signals" />
  </div>
);

export const DagGraph: React.FC = () => (
  <div className="kds-panel kds-graph">
    <div className="kds-node hot" style={{ left: "42%", top: "42%" }}><strong>payments-svc</strong><br /><span className="kds-mono">impacted</span></div>
    <div className="kds-node" style={{ left: "12%", top: "20%" }}>checkout-api<br /><span className="kds-mono">upstream</span></div>
    <div className="kds-node" style={{ right: "12%", top: "20%" }}>billing-worker<br /><span className="kds-mono">downstream</span></div>
    <div className="kds-node" style={{ left: "18%", bottom: "16%" }}>identity-gateway<br /><span className="kds-mono">shared owner</span></div>
    <div className="kds-node" style={{ right: "16%", bottom: "18%" }}>portal-web<br /><span className="kds-mono">monitor</span></div>
  </div>
);

export const DataTable: React.FC = () => (
  <div className="kds-panel">
    <table className="kds-table">
      <thead><tr><th>CI</th><th>Owner</th><th>Severity</th><th>Status</th><th>Confidence</th><th>Freshness</th></tr></thead>
      <tbody>
        {tableRows.map((row) => (
          <tr key={row.ci}>
            <td className="kds-mono">{row.ci}</td>
            <td>{row.owner}</td>
            <td><SeverityPill severity={row.severity} /></td>
            <td><StatusBadge status={row.status} /></td>
            <td><ConfidenceBadge value={row.confidence} showCheck={false} /></td>
            <td><FreshnessBadge ageDays={row.freshness} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const ButtonsSurface: React.FC = () => (
  <div className="kds-panel">
    <div className="kds-button-row">
      <button className="kds-button primary" type="button">Primary action</button>
      <button className="kds-button" type="button">Secondary</button>
      <button className="kds-button ghost" type="button">Ghost</button>
      <button className="kds-button spruce" type="button">Agent action</button>
    </div>
  </div>
);

export const BadgesSurface: React.FC = () => (
  <div className="kds-panel">
    <div className="kds-row">
      <SeverityPill severity="CRITICAL" />
      <StatusBadge status="Pending" />
      <ConfidenceBadge value={82} showCheck={false} />
      <FreshnessBadge ageDays={3} />
      <DeltaIndicator delta={2.1} unit="pp" referenceLabel="vs last wk" />
    </div>
  </div>
);

export const BrandLogoSurface: React.FC = () => (
  <Surface white>
    <div className="kds-surface-card">
      <SectionHeader eyebrow="Brand" title="Kyndryl Agentic Framework" copy="Warm red for brand energy, spruce for interaction, and evidence-first typography." />
      <div className="kds-template-slot filled" style={{ minHeight: 120, fontSize: 28, fontWeight: 750 }}>Kyndryl</div>
    </div>
  </Surface>
);

export const BrandIconsSurface: React.FC = () => (
  <Surface white>
    <div className="kds-surface-card">
      <SectionHeader eyebrow="Iconography" title="Operational icons" />
      <div className="kds-grid kds-grid-4">
        {["Dashboard", "Graph", "Agent", "Evidence", "Alert", "Check", "Source", "Settings"].map((name) => (
          <div className="kds-template-slot filled" key={name}><span className="ka-glyph" /> {name}</div>
        ))}
      </div>
    </div>
  </Surface>
);

export const ColorSurface: React.FC<{ palette: "brand" | "neutrals" | "severity" | "status" | "chart" }> = ({ palette }) => {
  const palettes = {
    brand: [["Warm Red 50", "#FF462D"], ["Spruce 60", "#29707A"], ["Spruce 70", "#1F5D65"]],
    neutrals: [["Slate 50", "#F8FAFC"], ["Slate 200", "#E2E8F0"], ["Slate 900", "#0F172A"]],
    severity: [["Critical", "#FFE4E6"], ["High", "#FEF3C7"], ["Medium", "#F1F5F9"], ["Low", "#D1FAE5"]],
    status: [["Healthy", "#10B981"], ["Degraded", "#F59E0B"], ["Impacted", "#E11D48"]],
    chart: [["Spruce", "#29707A"], ["Blue", "#1D4ED8"], ["Amber", "#F59E0B"], ["Rose", "#E11D48"]]
  }[palette];

  return (
    <Surface white>
      <div className="kds-surface-card">
        <SectionHeader eyebrow="Colors" title={`${palette} palette`} />
        <div className="kds-grid kds-grid-4">
          {palettes.map(([name, color]) => (
            <div className="kds-panel" key={name}>
              <div style={{ height: 72, borderRadius: 8, background: color, marginBottom: 10 }} />
              <strong>{name}</strong>
              <div className="kds-mono">{color}</div>
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
      <div style={{ fontFamily: mode === "display" ? "var(--font-display)" : "var(--font-sans)" }}>
        <h1 style={{ margin: "0 0 8px", fontSize: mode === "display" ? 42 : 28 }}>Evidence-first agentic operations</h1>
        <p className="kds-copy" style={{ maxWidth: 720 }}>Numbers are specific, actions are explicit, and every agent-derived recommendation keeps provenance visible.</p>
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
            <div style={{
              width: mode === "scale" ? size * 2 : 72,
              height: mode === "scale" ? size * 2 : 72,
              borderRadius: mode === "radii" ? size : 8,
              boxShadow: mode === "elevation" ? `0 ${size / 2}px ${size * 1.5}px rgba(15,23,42,.12)` : "none",
              background: "var(--k-ai-spruce-12)"
            }} />
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
      <div className="kds-panel kds-state-card" style={{ background: "#fff7ed", borderColor: "#fed7aa" }}><span className="kds-eyebrow">error</span><h3 className="kds-title">Could not load findings</h3><p className="kds-copy">cmdb_sync returned 502 at 14:04.</p><div className="kds-button-row"><button className="kds-button primary" type="button">Retry</button><button className="kds-button" type="button">Escalate</button></div></div>
      <div className="kds-panel kds-state-card"><span className="kds-eyebrow">stale</span><FreshnessBadge ageDays={94} /><h3 className="kds-title">Payments domain trust</h3><p className="kds-copy">Underlying data has not refreshed in 94 days.</p></div>
      <div className="kds-panel kds-state-card"><span className="kds-eyebrow">unauthorized</span><h3 className="kds-title">Approver-only access</h3><p className="kds-copy">Your role: access.requestor.</p><button className="kds-button" type="button">Request access</button></div>
      <div className="kds-panel kds-state-card"><span className="kds-eyebrow">executing</span><AgentStatusBar state="streaming" meta="step 2 of 4" /><div className="kds-meter"><div className="kds-meter-fill" style={{ width: "52%" }} /></div><button className="kds-button" type="button">Pause</button></div>
      <div className="kds-panel kds-state-card" style={{ background: "#e0f2e8", borderColor: "#a8ddbf" }}><span className="kds-eyebrow">success-after-action</span><StatusBadge status="Executed" /><h3 className="kds-title">47 CIs retired</h3><p className="kds-copy">Agent is monitoring for regressions.</p></div>
    </div>
  </Surface>
);

export const DashboardTemplate: React.FC = () => (
  <Surface>
    <div className="kds-panel">
      <SectionHeader eyebrow="DashboardTemplate" title="CMDB data quality overview" copy="App shell header, KPI grid, status banner, chart row, and signal triggers." />
      <KpiGrid />
      <div style={{ marginTop: 16 }}><StatusBannerCard /></div>
      <div className="kds-grid kds-grid-2" style={{ marginTop: 16 }}><BarChart /><DonutChart /></div>
      <div style={{ marginTop: 16 }}><RecommendationCard /></div>
    </div>
  </Surface>
);

export const TriageTemplate: React.FC = () => (
  <Surface>
    <SectionHeader eyebrow="TriageTemplate" title="Findings queue" />
    <StatusBannerCard />
    <div style={{ marginTop: 16 }}><DataTable /></div>
  </Surface>
);

export const InvestigationTemplate: React.FC = () => (
  <Surface>
    <div className="kds-grid kds-grid-2">
      <RecommendationCard />
      <div className="kds-grid"><DagGraph /><ExecutionTimelineCard /></div>
    </div>
  </Surface>
);

export const ReviewQueueTemplate: React.FC = () => (
  <Surface>
    <SectionHeader eyebrow="ReviewQueueTemplate" title="Approvals and handoffs" />
    <div className="kds-grid">
      <ToolCallCard toolName="cmdb.write" args={{ ci: "bINC4429181", action: "decommission" }} destructive state="pending" />
      <HandoffCard from="Reconciliation" to="D. Aaron" kind="human" reason="Handing back - review needed" showActions />
      <HumanInputRequest question="The orphan has two plausible owners. Which one should I assign?" options={["Assign to A. Ortiz", "Assign to K. Patel", "Leave unassigned"]} />
    </div>
  </Surface>
);

export const ConversationTemplate: React.FC = () => (
  <Surface>
    <div className="kds-grid kds-grid-2">
      <ChatSurface />
      <AiFeedbackSources />
    </div>
  </Surface>
);

export const CMDBWorkspaceKit: React.FC = () => (
  <Surface app>
    <div className="kds-app-shell">
      <aside className="kds-sidebar">
        <div className="kds-sidebar-head"><strong>Kyndryl</strong></div>
        <nav className="kds-nav">
          {["Dashboard", "Triage", "Graph", "Recommendations", "Audit"].map((item, index) => <span className={`kds-nav-item ${index === 0 ? "active" : ""}`} key={item}>{item}<span>{index === 1 ? "47" : ""}</span></span>)}
        </nav>
      </aside>
      <main className="kds-app-main">
        <header className="kds-app-header"><h1 className="kds-title">CMDB data quality</h1><ConfidenceBadge value={82} showCheck={false} /></header>
        <div className="kds-app-content"><DashboardTemplate /></div>
      </main>
    </div>
  </Surface>
);

export const ShidokaComponentsKit: React.FC = () => (
  <Surface>
    <SectionHeader eyebrow="Shidoka kit" title="Component inventory" />
    <div className="kds-grid kds-grid-2">
      <ButtonsSurface />
      <BadgesSurface />
      <DataTable />
      <RecommendationCard />
    </div>
  </Surface>
);

export const ShidokaShellKit: React.FC = () => (
  <Surface app>
    <CMDBWorkspaceKit />
  </Surface>
);

export const ShidokaChartsKit: React.FC = () => (
  <Surface>
    <div className="kds-grid kds-grid-2">
      <BarChart />
      <DonutChart />
      <TrustGauge />
      <ImpactRollup />
    </div>
  </Surface>
);

export const AgenticStatesReference: React.FC = () => (
  <Surface>
    <div className="kds-grid">
      <AgentStatusBar state="thinking" />
      <ToolCallCard toolName="cmdb.query" state="pending" args={{ filter: "status:orphaned AND domain:payments", window: "24h", limit: 50 }} editableKeys={["filter", "window", "limit"]} />
      <HumanInputRequest question="The orphan has two plausible owners. Which one should I assign?" options={["Assign to A. Ortiz", "Assign to K. Patel", "Leave unassigned - escalate"]} />
      <ExecutionTimelineCard />
      <HandoffCard from="Triage" to="Reconciliation" toKind="specialist" reason="Handing off - needs SQL skill" />
      <StateDeltaToast field="owner" subject="payments-svc owner" oldValue="unassigned" newValue="A. Ortiz" context="confidence 0.78" actions={["Undo", "Why?"]} />
    </div>
  </Surface>
);

export const BarChart: React.FC = () => (
  <div className="kds-panel">
    <SectionHeader eyebrow="Chart" title="Impacted CIs by domain" />
    <div className="kds-chart-bars">
      {[72, 48, 38, 26, 18].map((height, index) => (
        <div className="kds-bar" style={{ height: `${height}%` }} key={height}>
          <span>{height}</span>
        </div>
      ))}
    </div>
  </div>
);

export const DonutChart: React.FC = () => (
  <div className="kds-panel">
    <SectionHeader eyebrow="Chart" title="Priority mix" />
    <div className="kds-donut" />
    <div className="kds-row">
      <SeverityPill severity="CRITICAL" />
      <SeverityPill severity="HIGH" />
      <SeverityPill severity="MEDIUM" />
      <SeverityPill severity="LOW" />
    </div>
  </div>
);
