import React, { useState, useEffect, useRef, useCallback } from "react";
import "./composites.css";

/* ============================================================
   DATA
============================================================ */
type NodeType = "orchestration" | "governance" | "ingestion" | "analysis" | "recommendation" | "execution" | "monitoring" | "snapshot" | "unmapped";
type NodeState = "s-idle" | "s-pending" | "s-running" | "s-success" | "s-failed" | "s-skipped" | "s-approving" | "s-cached";

interface GNode {
  id: string;
  type: NodeType;
  state: NodeState;
  x: number;
  y: number;
  title: string;
  code: string;
  meta: string;
}
interface GEdge {
  from: string;
  to: string;
  state: string;
  label?: string;
}
interface GData {
  nodes: GNode[];
  edges: GEdge[];
}

const TYPES: Array<[string, string, string, string]> = [
  ["orchestration", "Orchestration", "#29707A", "Session start and workflow initialization"],
  ["governance", "Governance", "#A8001F", "Approval and review lifecycle"],
  ["ingestion", "Data ingestion", "#3E8AC2", "Data fetch and source-collection tasks"],
  ["analysis", "Analysis", "#B45309", "Interpretation and scenario analysis steps"],
  ["recommendation", "Recommendation", "#7A3FB0", "Suggested actions and follow-up generation"],
  ["execution", "Execution", "#FF462D", "Action execution and operational steps"],
  ["monitoring", "Monitoring", "#1F8F4A", "Anomaly and performance monitoring"],
  ["snapshot", "Snapshot", "#0E91C9", "Point-in-time views of system state"],
  ["unmapped", "Unmapped", "#5C5C5C", "Events without a mapped node"],
];

const STATES: Array<[string, string, string]> = [
  ["s-idle", "Idle", "node.queued"],
  ["s-pending", "Pending", "node.pending"],
  ["s-running", "Running", "node.executing"],
  ["s-success", "Succeeded", "node.ok"],
  ["s-failed", "Failed", "node.err"],
  ["s-skipped", "Skipped", "node.skip"],
  ["s-approving", "Approving", "node.gate"],
  ["s-cached", "Cached", "node.replay"],
];

const WORKFLOW: GData = {
  nodes: [
    { id: "n1", type: "orchestration", state: "s-success", x: 140, y: 380, title: "Session start", code: "ORCH_SESSION_START", meta: "7s \u00b7 ok" },
    { id: "n2", type: "recommendation", state: "s-success", x: 380, y: 380, title: "Processing your request", code: "FUNC_STEP_PROCESSING_YOUR_REQUEST_LERNDK", meta: "6s \u00b7 ok" },
    { id: "n3", type: "analysis", state: "s-success", x: 620, y: 380, title: "Reviewing cross-functional signals", code: "FUNC_STEP_REVIEWING_CROSS_FUNCTIONAL_PERFORMANCE_SIGNALS_NRRSO", meta: "19s \u00b7 ok" },
    { id: "n4", type: "recommendation", state: "s-running", x: 860, y: 380, title: "Preparing response", code: "FUNC_STEP_PREPARING_RESPONSE_LYC4A20", meta: "1.4s \u00b7 \u2026" },
    { id: "n5", type: "snapshot", state: "s-pending", x: 1100, y: 380, title: "snapshot_dashboard", code: "SNAPSHOT_DASHBOARD", meta: "queued" },
    { id: "n6", type: "governance", state: "s-approving", x: 860, y: 560, title: "Approval gate", code: "GOV_HUMAN_APPROVAL", meta: "awaiting" },
    { id: "n7", type: "execution", state: "s-idle", x: 1100, y: 560, title: "execute_remediation", code: "EXEC_REMEDIATION_PLAN", meta: "blocked" },
  ],
  edges: [
    { from: "n1", to: "n2", state: "traversed" },
    { from: "n2", to: "n3", state: "traversed" },
    { from: "n3", to: "n4", state: "active" },
    { from: "n4", to: "n5", state: "conditional" },
    { from: "n4", to: "n6", state: "active" },
    { from: "n6", to: "n7", state: "conditional" },
  ],
};

const ONTOLOGY: GData = {
  nodes: [
    { id: "o1", type: "ingestion", state: "s-idle", x: 300, y: 200, title: "Application: Checkout", code: "app:checkout", meta: "CI \u00b7 application" },
    { id: "o2", type: "execution", state: "s-idle", x: 600, y: 160, title: "Service: payments-api", code: "svc:payments-api", meta: "CI \u00b7 service" },
    { id: "o3", type: "snapshot", state: "s-idle", x: 900, y: 240, title: "Server: ip-10-2-4-12", code: "host:ip-10-2-4-12", meta: "CI \u00b7 server" },
    { id: "o4", type: "analysis", state: "s-idle", x: 300, y: 480, title: "Database: orders-db", code: "db:orders-db", meta: "CI \u00b7 database" },
    { id: "o5", type: "recommendation", state: "s-idle", x: 600, y: 540, title: "Tier: Tier-0 critical", code: "tier:tier-0", meta: "class \u00b7 tier" },
    { id: "o6", type: "monitoring", state: "s-idle", x: 1080, y: 560, title: "Owner: Avery Parker", code: "owner:avery@kndryl", meta: "agent \u00b7 owner" },
    { id: "o7", type: "governance", state: "s-idle", x: 880, y: 420, title: "Policy: PCI-required", code: "policy:pci", meta: "class \u00b7 policy" },
  ],
  edges: [
    { from: "o1", to: "o2", state: "depends-on", label: "depends-on" },
    { from: "o2", to: "o3", state: "runs-on", label: "runs-on" },
    { from: "o1", to: "o4", state: "depends-on", label: "depends-on" },
    { from: "o4", to: "o3", state: "runs-on", label: "runs-on" },
    { from: "o2", to: "o5", state: "is-a", label: "is-a" },
    { from: "o5", to: "o7", state: "part-of", label: "part-of" },
    { from: "o3", to: "o6", state: "is-a", label: "owned-by" },
  ],
};

const EVENTS = [
  { type: "snapshot", title: "Reviewing cross-functional performance signals", code: "FUNC_STEP_REVIEWING_CROSS_FUNCTIONAL_PERFORMANCE_SIGNALS_NRRSO", ts: "4s ago \u00b7 6s since prev" },
  { type: "recommendation", title: "Preparing response", code: "FUNC_STEP_PREPARING_RESPONSE_LYC4A20", ts: "Just now \u00b7 0s since prev" },
  { type: "snapshot", title: "dashboard", code: "SNAPSHOT_DASHBOARD", ts: "Just now \u00b7 0s since prev" },
  { type: "recommendation", title: "Processing your request", code: "FUNC_STEP_PROCESSING_YOUR_REQUEST_LERNDK", ts: "15s ago" },
];

const EDGE_KINDS = [
  ["Active", ".e-active", "Currently traversing \u2014 flowing dash."],
  ["Traversed", ".e-traversed", "Already executed \u2014 solid spruce."],
  ["Conditional", ".e-conditional", "May or may not fire \u2014 dashed."],
  ["Retried", ".e-retried", "Re-run after failure \u2014 double stroke."],
];

/* ============================================================
   HELPERS
============================================================ */
function depthMap(data: GData): Record<string, number> {
  const d: Record<string, number> = {};
  data.nodes.forEach((n) => { d[n.id] = 0; });
  for (let i = 0; i < 6; i++) {
    data.edges.forEach((e) => { d[e.to] = Math.max(d[e.to], d[e.from] + 1); });
  }
  return d;
}

function layoutNodes(data: GData, layoutType: string): GNode[] {
  const nodes = data.nodes.map((n) => ({ ...n }));
  if (layoutType === "dag-h") {
    const depth = depthMap(data);
    const cols: Record<number, GNode[]> = {};
    nodes.forEach((n) => { (cols[depth[n.id]] = cols[depth[n.id]] || []).push(n); });
    Object.keys(cols).forEach((d) => {
      const col = cols[Number(d)];
      const x = 120 + Number(d) * 240;
      col.forEach((n, i) => { n.x = x; n.y = 200 + i * 150; });
    });
  } else if (layoutType === "dag-v") {
    const depth = depthMap(data);
    const rows: Record<number, GNode[]> = {};
    nodes.forEach((n) => { (rows[depth[n.id]] = rows[depth[n.id]] || []).push(n); });
    Object.keys(rows).forEach((d) => {
      const row = rows[Number(d)];
      const y = 120 + Number(d) * 180;
      row.forEach((n, i) => { n.x = 200 + i * 240; n.y = y; });
    });
  } else if (layoutType === "radial") {
    const cx = 600, cy = 380, R = 240;
    nodes.forEach((n, i) => {
      const a = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
      n.x = cx + Math.cos(a) * R;
      n.y = cy + Math.sin(a) * R;
    });
  } else {
    const cx = 620, cy = 380;
    nodes.forEach((n, i) => {
      const seed = (i * 97 % 7) / 7;
      const a = (i / nodes.length) * Math.PI * 2 + seed;
      const r = 180 + (i % 3) * 90;
      n.x = cx + Math.cos(a) * r;
      n.y = cy + Math.sin(a) * r;
    });
  }
  return nodes;
}

function edgePath(a: GNode, b: GNode, style: string): string {
  const dx = b.x - a.x;
  if (style === "curved") {
    const cx1 = a.x + dx * 0.5;
    return `M ${a.x} ${a.y} C ${cx1} ${a.y}, ${cx1} ${b.y}, ${b.x} ${b.y}`;
  }
  if (style === "orthogonal") {
    const mx = a.x + dx / 2;
    return `M ${a.x} ${a.y} L ${mx} ${a.y} L ${mx} ${b.y} L ${b.x} ${b.y}`;
  }
  return `M ${a.x} ${a.y} L ${b.x} ${b.y}`;
}

/* ============================================================
   COMPONENT
============================================================ */
export const DagGraphKit: React.FC = () => {
  const [layoutType, setLayoutType] = useState("dag-h");
  const [density, setDensity] = useState("compact");
  const [edgeStyle, setEdgeStyle] = useState("curved");
  const [dark, setDark] = useState(false);
  const [dataset, setDataset] = useState<"workflow" | "ontology">("workflow");
  const [zoom, setZoom] = useState(85);
  const [pan, setPan] = useState({ x: -30, y: 0 });
  const canvasRef = useRef<HTMLDivElement>(null);

  const data = dataset === "workflow" ? WORKFLOW : ONTOLOGY;
  const nodes = layoutNodes(data, layoutType);

  const handleSegClick = (group: string, value: string) => {
    if (group === "layout") {
      setLayoutType(value);
    } else if (group === "density") {
      setDensity(value);
    } else if (group === "edges") {
      setEdgeStyle(value);
    } else if (group === "dataset") {
      setDataset(value as "workflow" | "ontology");
      if (value === "ontology") setLayoutType("force");
      else setLayoutType("dag-h");
    }
  };

  const fitView = useCallback(() => {
    const xs = nodes.map((n) => n.x);
    const ys = nodes.map((n) => n.y);
    const minX = Math.min(...xs) - 160;
    const maxX = Math.max(...xs) + 160;
    const minY = Math.min(...ys) - 100;
    const maxY = Math.max(...ys) + 100;
    const W = 800;
    const H = 760;
    const k = Math.min(W / (maxX - minX), H / (maxY - minY));
    const newZoom = Math.round(k * 100);
    setPan({
      x: -minX * k + (W - (maxX - minX) * k) / 2,
      y: -minY * k + (H - (maxY - minY) * k) / 2,
    });
    setZoom(newZoom);
  }, [nodes]);

  useEffect(() => {
    fitView();
  }, [layoutType, dataset]);

  /* Render a single expanded node */
  const renderExpanded = (n: GNode) => (
    <div className={`cmp-nd cmp-nd-expanded cmp-t-${n.type} cmp-${n.state}`}>
      <div className="cmp-nd-hd">
        <span className="cmp-nd-pip" />
        <span className="cmp-ttl">{n.title}</span>
        <span className="cmp-nd-state">{n.state.replace("s-", "").toUpperCase()}</span>
      </div>
      <div className="cmp-nd-body">
        <div className="cmp-id">{n.code}</div>
        <dl className="cmp-kvs">
          <dt>Inputs</dt><dd>5 sources</dd>
          <dt>Tools</dt><dd>graph.expand &middot; sql.run</dd>
          <dt>Conf.</dt><dd>0.86</dd>
        </dl>
      </div>
      <div className="cmp-nd-redirs">
        <div className="cmp-rh">3 &middot; Redirections</div>
        <div className="cmp-rl">
          <div className="cmp-ri">Open trace<span className="cmp-arr">&rsaquo;</span></div>
          <div className="cmp-ri">Replay step<span className="cmp-arr">&rsaquo;</span></div>
          <div className="cmp-ri">Inspect args<span className="cmp-arr">&rsaquo;</span></div>
        </div>
      </div>
    </div>
  );

  /* Render a card node */
  const renderCard = (n: GNode) => (
    <div className={`cmp-nd cmp-nd-card cmp-t-${n.type} cmp-${n.state}`}>
      <div className="cmp-nd-hd">
        <span className="cmp-nd-pip" />
        <span className="cmp-ttl">{n.title}</span>
        <span className="cmp-nd-state">{n.state.replace("s-", "").toUpperCase()}</span>
      </div>
      <div className="cmp-nd-bd">
        <div className="cmp-id">{n.code}</div>
        <div className="cmp-nd-meta"><span>{n.meta}</span><span><b>{n.id}</b></span></div>
      </div>
    </div>
  );

  const isExpanded = (id: string) => id === "n3" || id === "o2";

  return (
    <div className={`cmp-dag-page ${dark ? "cmp-dark" : ""}`}>
      {/* HEADER */}
      <div className="cmp-page-hd">
        <h1>DAG &amp; Knowledge-Graph Kit</h1>
        <span className="cmp-crumb">/ ui-kit / graph</span>
        <span className="cmp-stamp"><span className="cmp-gl" /> Kyndryl CMDB Design System</span>
      </div>

      {/* TWEAKS BAR */}
      <div className="cmp-tweaks">
        <div className="cmp-grp">
          <span className="cmp-ll">Layout</span>
          <div className="cmp-seg">
            {[["dag-h", "DAG \u00b7 horizontal"], ["dag-v", "DAG \u00b7 vertical"], ["radial", "Radial"], ["force", "Force \u00b7 ontology"]].map(([v, l]) => (
              <button
                key={v}
                className={layoutType === v ? "cmp-active" : ""}
                type="button"
                onClick={() => handleSegClick("layout", v)}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
        <div className="cmp-grp">
          <span className="cmp-ll">Density</span>
          <div className="cmp-seg">
            {["compact", "comfortable"].map((v) => (
              <button
                key={v}
                className={density === v ? "cmp-active" : ""}
                type="button"
                onClick={() => handleSegClick("density", v)}
              >
                {v.charAt(0).toUpperCase() + v.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="cmp-grp">
          <span className="cmp-ll">Edges</span>
          <div className="cmp-seg">
            {["curved", "orthogonal", "straight"].map((v) => (
              <button
                key={v}
                className={edgeStyle === v ? "cmp-active" : ""}
                type="button"
                onClick={() => handleSegClick("edges", v)}
              >
                {v.charAt(0).toUpperCase() + v.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="cmp-grp">
          <span className="cmp-ll">Canvas</span>
          <div
            className={`cmp-sw ${dark ? "cmp-on" : ""}`}
            onClick={() => setDark(!dark)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setDark(!dark)}
          />
        </div>
        <div className="cmp-grp" style={{ marginLeft: "auto" }}>
          <span className="cmp-ll">Data</span>
          <div className="cmp-seg">
            {(["workflow", "ontology"] as const).map((v) => (
              <button
                key={v}
                className={dataset === v ? "cmp-active" : ""}
                type="button"
                onClick={() => handleSegClick("dataset", v)}
              >
                {v.charAt(0).toUpperCase() + v.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CANVAS WORKSPACE */}
      <div className="cmp-section" style={{ padding: 0 }}>
        <div className="cmp-ws">
          {/* Left rail */}
          <div className="cmp-ws-rail">
            <button className="cmp-rb cmp-active" title="Pan" type="button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M5 9V5h4M19 9V5h-4M5 15v4h4M19 15v4h-4" /></svg>
            </button>
            <button className="cmp-rb" title="Select" type="button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 4l7 14 2-6 6-2L4 4z" /></svg>
            </button>
            <button className="cmp-rb" title="Connect" type="button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="6" cy="6" r="3" /><circle cx="18" cy="18" r="3" /><path d="M9 9l6 6" /></svg>
            </button>
            <div className="cmp-sep" />
            <button className="cmp-rb" title="Add node" type="button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 5v14M5 12h14" /></svg>
            </button>
            <button className="cmp-rb" title="Comment" type="button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
            </button>
          </div>

          {/* Canvas */}
          <div className="cmp-ws-canvas-wrap" ref={canvasRef}>
            <div className="cmp-ws-canvas" style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom / 100})` }}>
              {/* Edges SVG */}
              <svg className="cmp-edges" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", overflow: "visible" }}>
                <defs>
                  <marker id="cmp-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#29707A" /></marker>
                  <marker id="cmp-ah-warm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#FF462D" /></marker>
                  <linearGradient id="cmp-g-active" x1="0" x2="1"><stop offset="0" stopColor="#29707A" /><stop offset="1" stopColor="#FF462D" /></linearGradient>
                </defs>
                {data.edges.map((e, i) => {
                  const a = nodes.find((n) => n.id === e.from);
                  const b = nodes.find((n) => n.id === e.to);
                  if (!a || !b) return null;
                  const isActive = e.state === "active";
                  const isCond = e.state === "conditional" || e.state === "depends-on";
                  const isWarm = e.state === "runs-on" || e.state === "retried";
                  const stroke = isActive ? "url(#cmp-g-active)" : isWarm ? "#FF462D" : isCond ? "#98A3AB" : "#29707A";
                  const dash = isCond ? "5 5" : isActive ? "7 5" : undefined;
                  const marker = isWarm ? "url(#cmp-ah-warm)" : "url(#cmp-ah)";
                  const d = edgePath(a, b, edgeStyle);
                  return (
                    <g key={`${e.from}-${e.to}-${i}`}>
                      <path
                        d={d}
                        fill="none"
                        stroke={stroke}
                        strokeWidth={e.state === "retried" ? 3 : 1.6}
                        strokeDasharray={dash}
                        markerEnd={marker}
                        className={isActive ? "cmp-ae" : undefined}
                      />
                      {e.label && (() => {
                        const lx = (a.x + b.x) / 2;
                        const ly = (a.y + b.y) / 2;
                        return (
                          <>
                            <rect x={lx - 38} y={ly - 9} width={76} height={18} rx={9} fill="#fff" stroke="#E6E6E6" />
                            <text x={lx} y={ly + 3} fontFamily="Geist Mono, monospace" fontSize="9.5" fill="#5C5C5C" textAnchor="middle">{e.label}</text>
                          </>
                        );
                      })()}
                    </g>
                  );
                })}
              </svg>

              {/* Nodes */}
              <div className="cmp-nodes">
                {nodes.map((n) => (
                  <div className="cmp-n" key={n.id} style={{ left: n.x, top: n.y }}>
                    {isExpanded(n.id) ? renderExpanded(n) : renderCard(n)}
                  </div>
                ))}
              </div>
            </div>

            {/* Overlays */}
            <div className="cmp-ws-overlay cmp-top-left">
              <button className="cmp-ob" title="Search" type="button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
              </button>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-2)", padding: "0 4px" }}>Agentic Workflow Pipeline</span>
            </div>

            <div className="cmp-ws-overlay cmp-top-right">
              <button className="cmp-ob" title="Auto-arrange" type="button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>
              </button>
              <button className="cmp-ob" title="Lock canvas" type="button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="5" y="11" width="14" height="9" rx="1" /><path d="M8 11V7a4 4 0 018 0v4" /></svg>
              </button>
              <div className="cmp-div" />
              <button className="cmp-ob cmp-active" title="Toggle log" type="button">Log</button>
            </div>

            {/* Bottom left: zoom + legend */}
            <div style={{ position: "absolute", bottom: 14, left: 14, display: "flex", flexDirection: "column", gap: 8, zIndex: 5 }}>
              <div className="cmp-ws-overlay" style={{ position: "relative", top: 0, left: 0 }}>
                <button className="cmp-ob" title="Zoom in" type="button" onClick={() => setZoom((z) => Math.min(240, Math.round(z * 1.15)))}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 5v14M5 12h14" /></svg>
                </button>
                <span className="cmp-zoom-val">{zoom}%</span>
                <button className="cmp-ob" title="Zoom out" type="button" onClick={() => setZoom((z) => Math.max(30, Math.round(z / 1.15)))}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14" /></svg>
                </button>
                <div className="cmp-div" />
                <button className="cmp-ob" title="Fit" type="button" onClick={fitView}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M3 9V3h6M21 9V3h-6M3 15v6h6M21 15v6h-6" /></svg>
                </button>
              </div>

              <div className="cmp-legend">
                <div className="cmp-lh">Workflow color key</div>
                {TYPES.map(([slug, name, color]) => (
                  <div className="cmp-li" key={slug}>
                    <span className="cmp-sw" style={{ background: color }} />
                    {name}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom right: minimap */}
            <div style={{ position: "absolute", bottom: 14, right: 14, zIndex: 5 }}>
              <div className="cmp-minimap">
                <div className="cmp-mh"><span>Overview</span><span>{nodes.length} nodes &middot; {data.edges.length} edges</span></div>
                <svg viewBox="0 100 1200 600" preserveAspectRatio="none">
                  {data.edges.map((e, i) => {
                    const a = nodes.find((n) => n.id === e.from);
                    const b = nodes.find((n) => n.id === e.to);
                    if (!a || !b) return null;
                    return <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#C1C8CD" strokeWidth="2" />;
                  })}
                  {nodes.map((n) => {
                    const t = TYPES.find((t) => t[0] === n.type);
                    return <rect key={n.id} x={n.x - 22} y={n.y - 12} width={44} height={24} rx={4} fill={t ? t[2] : "#29707A"} opacity={0.8} />;
                  })}
                </svg>
              </div>
            </div>
          </div>

          {/* Right rail — event log */}
          <aside className="cmp-ws-log">
            <div className="cmp-lh">
              <h3>Workflow Event Log</h3>
              <div className="cmp-opts">
                <button className="cmp-ob" type="button">JSON &#x25BE;</button>
                <button className="cmp-ob" type="button">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
                  {" "}Export
                </button>
              </div>
            </div>
            <div className="cmp-session">
              <div className="cmp-id">ID: 8cp4c12c&#x2011;f2&hellip;</div>
              <div className="cmp-who"><span className="cmp-av" /> Avery Parker <span className="cmp-role">DATA ADMIN</span></div>
              <div className="cmp-id">&#x23F1; Session 78s</div>
            </div>
            <div className="cmp-stats">
              <div className="cmp-s"><div className="cmp-v">4</div><div className="cmp-l">Events</div></div>
              <div className="cmp-s"><div className="cmp-v">6</div><div className="cmp-l">Nodes</div></div>
              <div className="cmp-s"><div className="cmp-v">5</div><div className="cmp-l">Edges</div></div>
            </div>
            <div className="cmp-feed">
              {EVENTS.map((e, i) => {
                const t = TYPES.find((t) => t[0] === e.type);
                return (
                  <div className="cmp-ev-item" key={i} style={{ borderLeftColor: t ? t[2] : "#29707A" }}>
                    <div className="cmp-nm">{e.title}</div>
                    <div className="cmp-eid">Node: {e.code}</div>
                    <div className="cmp-ts"><span>{e.ts}</span><a href="#trace" onClick={(ev) => ev.preventDefault()}>Open trace</a></div>
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      </div>

      {/* ATOMS — Node LOD */}
      <div className="cmp-section">
        <h2>Node atoms &middot; 3 levels of detail</h2>
        <p className="cmp-desc">Same model, three sizes. <b>Pill</b> for minimap, breadcrumbs, and chips. <b>Card</b> is the canvas default. <b>Expanded</b> opens on hover or selection and exposes redirections + agent metadata. All three share the same accent + tint variables so the taxonomy color flows through every level.</p>
        <div className="cmp-lod-grid">
          {/* Pill */}
          <div className="cmp-lod-cell">
            <div className="cmp-lod-lbl">.nd.pill &mdash; 24 px</div>
            <div className="cmp-lod-stage cmp-wrap">
              {[
                ["t-orchestration", "Session start"],
                ["t-analysis", "Reviewing signals"],
                ["t-recommendation", "Preparing response"],
                ["t-snapshot", "snapshot_dashboard"],
                ["t-execution", "execute_action"],
                ["t-unmapped", "unmapped_event"],
              ].map(([cls, label]) => (
                <span className={`cmp-nd cmp-nd-pill cmp-${cls}`} key={label}>
                  <span className="cmp-dot" /><span className="cmp-lbl">{label}</span>
                </span>
              ))}
            </div>
            <div className="cmp-lod-meta">For the minimap, breadcrumb trails, and node references inside the event log. <b>Single-line, mono-spaced label.</b></div>
          </div>

          {/* Card */}
          <div className="cmp-lod-cell">
            <div className="cmp-lod-lbl">.nd.card &mdash; 200 px</div>
            <div className="cmp-lod-stage">
              <div className="cmp-nd cmp-nd-card cmp-t-recommendation cmp-s-running">
                <div className="cmp-nd-hd">
                  <span className="cmp-nd-pip" />
                  <span className="cmp-ttl">Preparing response</span>
                  <span className="cmp-nd-state">RUNNING</span>
                </div>
                <div className="cmp-nd-bd">
                  <div className="cmp-id">FUNC_STEP_PREPARING_RESPONSE_LYC4A20</div>
                  <div className="cmp-nd-meta"><span>tools 2</span><span>elapsed <b>1.4s</b></span></div>
                </div>
              </div>
            </div>
            <div className="cmp-lod-meta">Default canvas representation. Header carries <b>state pip &middot; title &middot; state tag</b>; body carries <b>node ID + 1 row of metrics</b>. 200 px wide so a 6-step DAG fits comfortably in viewport.</div>
          </div>

          {/* Expanded */}
          <div className="cmp-lod-cell">
            <div className="cmp-lod-lbl">.nd.expanded &mdash; 280 px</div>
            <div className="cmp-lod-stage">
              <div className="cmp-nd cmp-nd-expanded cmp-t-recommendation cmp-s-running">
                <div className="cmp-nd-hd">
                  <span className="cmp-nd-pip" />
                  <span className="cmp-ttl">Reviewing cross-functional performance signals</span>
                  <span className="cmp-nd-state">RUNNING</span>
                </div>
                <div className="cmp-nd-body">
                  <div className="cmp-id">FUNC_STEP_REVIEWING_CROSS_FUNCTIONAL_PERFORMANCE_SIGNALS</div>
                  <dl className="cmp-kvs">
                    <dt>Inputs</dt><dd>5 sources</dd>
                    <dt>Tools</dt><dd>graph.expand &middot; sql.run</dd>
                    <dt>Conf.</dt><dd>0.86</dd>
                  </dl>
                </div>
                <div className="cmp-nd-redirs">
                  <div className="cmp-rh">5 &middot; Redirections</div>
                  <div className="cmp-rl">
                    <div className="cmp-ri"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg> Open trace<span className="cmp-arr">&rsaquo;</span></div>
                    <div className="cmp-ri"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.4 8.4 0 01-.9 3.8 8.5 8.5 0 01-15.4-1A8.5 8.5 0 0120 8" /><polyline points="22 4 22 10 16 10" /></svg> Replay step<span className="cmp-arr">&rsaquo;</span></div>
                    <div className="cmp-ri"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" /></svg> Inspect args<span className="cmp-arr">&rsaquo;</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cmp-lod-meta">On hover or selection. Adds <b>structured KV block + redirections</b> (jump-to-trace, replay, inspect, snapshot). Replaces tooltip patterns — never floats.</div>
          </div>
        </div>
      </div>

      {/* TAXONOMY */}
      <div className="cmp-section">
        <h2>Node taxonomy &middot; 9 types</h2>
        <p className="cmp-desc">Each node carries a single semantic class that drives accent + tint + glyph. Nine types cover the workflow + ontology surfaces. <b>Color is never the only signal</b> — every node also carries a state pip, a state tag, and an ID.</p>
        <div className="cmp-tax-grid">
          {TYPES.map(([slug, name, color, desc]) => (
            <div className="cmp-tax-cell" key={slug}>
              <div className="cmp-tax-head">
                <span className="cmp-tax-sw" style={{ background: color }} />
                <span className="cmp-tax-name">{name}</span>
                <span className="cmp-tax-tok">.t-{slug}</span>
              </div>
              <div className="cmp-tax-desc">{desc}</div>
              <div>
                <span className={`cmp-nd cmp-nd-pill cmp-t-${slug}`}>
                  <span className="cmp-dot" /><span className="cmp-lbl">{name.toLowerCase()}_node</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* STATES */}
      <div className="cmp-section">
        <h2>Lifecycle states &middot; 8 + selected</h2>
        <p className="cmp-desc">State is applied as <code>.s-*</code>. The accent stays the taxonomy color; the state changes <b>border treatment, fill, opacity, and the pip behavior</b>. A node can only be in one lifecycle state at a time.</p>
        <div className="cmp-states-grid">
          {STATES.map(([cls, name, ev], i) => (
            <div className="cmp-state-cell" key={cls}>
              <div className={`cmp-nd cmp-nd-card cmp-t-recommendation cmp-${cls}`} style={{ width: 160 }}>
                <div className="cmp-nd-hd">
                  <span className="cmp-nd-pip" />
                  <span className="cmp-ttl">{name} step</span>
                  <span className="cmp-nd-state">{name.toUpperCase()}</span>
                </div>
                <div className="cmp-nd-bd">
                  <div className="cmp-id">{cls.replace("s-", "").toUpperCase()}_NODE_E{i}</div>
                  <div className="cmp-nd-meta"><span>tools 2</span><span><b>{i + 1}.{i}s</b></span></div>
                </div>
              </div>
              <div className="cmp-state-lbl">{name}</div>
              <div className="cmp-state-ev">{ev}</div>
            </div>
          ))}
        </div>
      </div>

      {/* EDGES */}
      <div className="cmp-section">
        <h2>Edge styles &amp; states</h2>
        <p className="cmp-desc">Edges are SVG paths styled via stroke + dasharray + animation. <b>Active</b> traces a flowing dash; <b>traversed</b> is solid; <b>conditional</b> is dashed; <b>retried</b> doubles the stroke and tints. <b>Knowledge-graph</b> edges add a small label chip for the relation type (<code>depends-on</code>, <code>runs-on</code>, etc.).</p>
        <div className="cmp-edge-grid">
          {EDGE_KINDS.map(([name, tok, desc]) => {
            const stroke = name === "Active" ? "url(#cmp-eg-g1)" : name === "Traversed" ? "#29707A" : name === "Conditional" ? "#98A3AB" : "#FF462D";
            const sw = name === "Retried" ? 3 : 1.6;
            const dash = name === "Conditional" ? "4 4" : name === "Active" ? "6 6" : undefined;
            return (
              <div className="cmp-edge-cell" key={name}>
                <div className="cmp-edge-head"><span className="cmp-edge-name">{name}</span><span className="cmp-edge-tok">{tok}</span></div>
                <svg viewBox="0 0 200 48" preserveAspectRatio="none">
                  <defs><linearGradient id="cmp-eg-g1" x1="0" x2="1"><stop offset="0" stopColor="#29707A" /><stop offset="1" stopColor="#FF462D" /></linearGradient></defs>
                  <circle cx="14" cy="24" r="3.5" fill="#29707A" />
                  <circle cx="186" cy="24" r="3.5" fill="#29707A" />
                  <path
                    d="M14 24 C 70 24, 130 24, 186 24"
                    fill="none"
                    stroke={stroke}
                    strokeWidth={sw}
                    strokeDasharray={dash}
                    className={name === "Active" ? "cmp-ae" : undefined}
                  />
                </svg>
                <div className="cmp-edge-desc">{desc}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CANVAS STATES */}
      <div className="cmp-section">
        <h2>Canvas states &middot; loading / empty / error</h2>
        <p className="cmp-desc">When the canvas itself can&apos;t render the graph: a sweeping AI-loader bar, an illustration-free empty state, or an error explaining what failed. Mini-map and chrome stay in place; only the canvas swaps.</p>
        <div className="cmp-csv-grid">
          <div className="cmp-csv">
            <span className="cmp-csv-label">Resolving topology</span>
            <div className="cmp-csv-grid-layer" />
            <div className="cmp-csv-grid-layer cmp-csv-tint" />
            <div className="cmp-csv-grid-layer cmp-csv-spruce" />
            <div className="cmp-csv-pmeta"><span>graph &middot; 22 nodes</span><span>0:04</span></div>
          </div>
          <div className="cmp-csv cmp-dotted">
            <svg className="cmp-csv-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="6" cy="6" r="2" /><circle cx="18" cy="18" r="2" /><circle cx="6" cy="18" r="2" /><circle cx="18" cy="6" r="2" /></svg>
            <div className="cmp-csv-h">No nodes yet</div>
            <div className="cmp-csv-b">This workflow hasn&apos;t run. Trigger a session or import a graph from CMDB to populate.</div>
          </div>
          <div className="cmp-csv cmp-dotted">
            <svg className="cmp-csv-ico" viewBox="0 0 24 24" fill="none" stroke="#A1100F" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" /></svg>
            <div className="cmp-csv-h" style={{ color: "#A1100F" }}>Couldn&apos;t render graph</div>
            <div className="cmp-csv-b">3 nodes failed to resolve. Layout falls back to a list view. <a href="#inspect" style={{ color: "var(--k-spruce-60)", borderBottom: "1px dotted" }} onClick={(e) => e.preventDefault()}>Inspect failures</a>.</div>
          </div>
        </div>
      </div>

      <div className="cmp-ftr">
        <span>9 types &middot; 8 states &middot; 4 layouts &middot; 4 edge styles &middot; pill / card / expanded</span>
        <span>preview/dag-graph-kit.html</span>
      </div>
    </div>
  );
};

export default DagGraphKit;
