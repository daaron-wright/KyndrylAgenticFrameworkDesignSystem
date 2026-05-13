import React from "react";
import "./kits.css";

const CAT = ["#29707A","#FF462D","#3E8AC2","#8A4FBF","#E68A00","#5C6A73","#5BA2AE","#FF8766","#1F5580","#B82915"];
const RAG3 = ["#16A34A","#F59E0B","#DC2626"];
const SEQ = ["#E8F2F4","#BEDDE2","#91C4CC","#5BA2AE","#3D8590","#29707A","#1F5A63","#17444B","#0F2E33","#07191C"];
const DIV = ["#B82915","#FF462D","#FF8766","#E2E8F0","#91C4CC","#3D8590","#17444B"];
const RAG5 = ["#16A34A","#F59E0B","#DC2626","#2563EB","#7F1D1D"];

// Heatmap data
const matrixRows = ["payments","checkout","ledger","fraud","auth","infra"];
const matrixCols = ["W27","W28","W29","W30","W31","W32","W33","W34","W35","W36","W37","W38"];
const palette7 = ["#F1F5F9","#BEDDE2","#91C4CC","#5BA2AE","#3D8590","#29707A","#17444B"];

function matrixVal(ri: number, ci: number) {
  return Math.max(0, Math.round(Math.sin(ri*0.9+ci*0.4)*3 + 2));
}

export const ShidokaCharts: React.FC = () => (
  <div className="kit-wrapper kit-charts-wrapper">
    {/* Header */}
    <header className="kit-sh-header">
      <span style={{ fontSize: 16, fontWeight: 700, color: "var(--fg-1)" }}>Kyndryl</span>
      <span className="kit-sh-header__title">Shidoka -- Charts Kit</span>
      <nav className="kit-sh-nav">
        <span className="kit-sh-nav-link">Components</span>
        <span className="kit-sh-nav-link">Shell</span>
        <span className="kit-sh-nav-link kit-active">Charts</span>
      </nav>
      <div className="kit-sh-header__right">
        <span style={{ display: "inline-flex", alignItems: "center", padding: "2px 8px", background: "#F1F5F9", color: "var(--fg-2)", fontSize: 11, borderRadius: 4 }}>
          Chart.js 4 &middot; Shidoka palette
        </span>
        <div className="kit-sh-avatar">DA</div>
      </div>
    </header>

    <div className="kit-charts-layout">
      {/* Sidenav */}
      <aside className="kit-charts-sidenav">
        <h4>Palette</h4>
        <a href="#kit-palettes">Categorical &middot; Sequential &middot; Divergent</a>
        <h4>Rectilinear</h4>
        <a href="#kit-bar">Bar (grouped, stacked, 100%)</a>
        <a href="#kit-line">Line &amp; area</a>
        <a href="#kit-scatter">Scatter &amp; bubble</a>
        <h4>Radial</h4>
        <a href="#kit-doughnut">Doughnut &amp; pie</a>
        <a href="#kit-polar">Polar &amp; radar</a>
        <a href="#kit-meter">Meter-gauge &amp; KPI</a>
        <h4>Flow &amp; relation</h4>
        <a href="#kit-sankey">Sankey</a>
        <a href="#kit-tree">Tree / dendrogram</a>
        <h4>Matrix &amp; map</h4>
        <a href="#kit-matrix">Heatmap / matrix</a>
        <a href="#kit-choropleth">Choropleth (concept)</a>
        <h4>Distribution</h4>
        <a href="#kit-box">Boxplot</a>
      </aside>

      <main>
        {/* PALETTES */}
        <section id="kit-palettes" className="kit-chart-section">
          <header>
            <div>
              <h2>Palette</h2>
              <p>Categorical slots (10, order-locked) &middot; sequential (single hue, 10 steps) &middot; divergent (negative - neutral - positive) &middot; RAG.</p>
            </div>
            <span className="kit-meta">colorPalettes.js</span>
          </header>
          <p className="kit-chart-title">Categorical (<code>categorical</code>)</p>
          <p className="kit-chart-sub">Start at slot 1; repeat in order. Don&#39;t sort by hue affinity.</p>
          <div className="kit-swatches">
            {CAT.map((c, i) => <div key={i} style={{ background: c }}>{String(i+1).padStart(2,"0")}</div>)}
          </div>

          <div className="kit-two-col" style={{ marginTop: 20 }}>
            <div>
              <p className="kit-chart-title">Sequential 01 (<code>sequential01</code>)</p>
              <p className="kit-chart-sub">Spruce. For ordinal magnitude -- heatmaps, choropleth.</p>
              <div className="kit-swatches">
                {SEQ.map((c, i) => <div key={i} style={{ background: c, color: i < 3 ? "var(--fg-1)" : "#fff" }}>{(i+1)*10}</div>)}
              </div>
            </div>
            <div>
              <p className="kit-chart-title">Divergent 01 (<code>divergent01</code>)</p>
              <p className="kit-chart-sub">Warm Red - neutral - Spruce. For signed deltas.</p>
              <div className="kit-swatches kit-swatches--7">
                {DIV.map((c, i) => <div key={i} style={{ background: c, color: i === 3 ? "var(--fg-1)" : "#fff" }}>{i < 3 ? -(3-i) : i === 3 ? "0" : `+${i-3}`}</div>)}
              </div>
            </div>
          </div>

          <div className="kit-two-col" style={{ marginTop: 20 }}>
            <div>
              <p className="kit-chart-title">RAG-3 / RAG-8</p>
              <p className="kit-chart-sub">Status-coded series. Pair with icon + label.</p>
              <div className="kit-swatches kit-swatches--5">
                {["OK","Warn","Err","Info","Crit"].map((label, i) => (
                  <div key={label} style={{ background: RAG5[i], color: i === 1 ? "var(--fg-1)" : "#fff" }}>{label}</div>
                ))}
              </div>
            </div>
            <div style={{ fontSize: 13, color: "var(--fg-2)" }}>
              <p className="kit-chart-title">When to pick which</p>
              <p style={{ margin: 0 }}>&bull; <strong>Categorical</strong> when series are mutually exclusive &amp; unordered (products, teams).</p>
              <p style={{ margin: 0 }}>&bull; <strong>Sequential</strong> for a single dimension of magnitude (counts, density).</p>
              <p style={{ margin: 0 }}>&bull; <strong>Divergent</strong> when values cross a meaningful mid (variance vs target, sentiment).</p>
              <p style={{ margin: 0 }}>&bull; <strong>RAG</strong> only to encode operational status -- never for neutral categories.</p>
            </div>
          </div>
        </section>

        {/* BAR */}
        <section id="kit-bar" className="kit-chart-section">
          <header><div><h2>Bar charts</h2><p>Grouped &middot; stacked &middot; 100% stacked &middot; horizontal.</p></div></header>
          <div className="kit-two-col">
            <div>
              <p className="kit-chart-title">CIs by environment &amp; status</p>
              <p className="kit-chart-sub">Grouped vertical bars &middot; categorical slots 1-3.</p>
              <div className="kit-css-bar-chart" style={{ marginBottom: 28 }}>
                {["Prod","Stage","Dev","Sandbox"].map((env, gi) => {
                  const data = [[612,142,204,118],[184,62,38,22],[48,18,8,4]];
                  return (
                    <div key={env} className="kit-css-bar-group">
                      {data.map((series, si) => (
                        <div key={si} className="kit-css-bar" style={{ height: `${(series[gi]/612)*100}%`, background: CAT[si] }}>
                          {gi === 0 && si === 0 && <span className="kit-css-bar-val">{series[gi]}</span>}
                        </div>
                      ))}
                      <span className="kit-css-bar-label">{env}</span>
                    </div>
                  );
                })}
              </div>
              <div className="kit-legend">
                <span className="kit-sw"><i style={{ background: CAT[0] }} />Reconciled</span>
                <span className="kit-sw"><i style={{ background: CAT[1] }} />Stale</span>
                <span className="kit-sw"><i style={{ background: CAT[2] }} />Orphaned</span>
              </div>
            </div>
            <div>
              <p className="kit-chart-title">Stale vs reconciled vs orphaned</p>
              <p className="kit-chart-sub">Stacked &middot; RAG-3 palette.</p>
              <div className="kit-css-bar-chart" style={{ marginBottom: 28 }}>
                {["Oct 27","Nov 3","Nov 10","Nov 17","Nov 24"].map((w, i) => {
                  const rec = [620,640,665,684,728];
                  const stale = [210,205,198,220,214];
                  const orph = [410,388,362,350,342];
                  const total = rec[i] + stale[i] + orph[i];
                  return (
                    <div key={w} style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%", position: "relative" }}>
                      <div style={{ background: RAG3[2], height: `${(orph[i]/total)*100}%`, borderRadius: "2px 2px 0 0" }} />
                      <div style={{ background: RAG3[1], height: `${(stale[i]/total)*100}%` }} />
                      <div style={{ background: RAG3[0], height: `${(rec[i]/total)*100}%` }} />
                      <span className="kit-css-bar-label">{w}</span>
                    </div>
                  );
                })}
              </div>
              <div className="kit-legend">
                <span className="kit-sw"><i style={{ background: RAG3[0] }} />Reconciled</span>
                <span className="kit-sw"><i style={{ background: RAG3[1] }} />Stale</span>
                <span className="kit-sw"><i style={{ background: RAG3[2] }} />Orphaned</span>
              </div>
            </div>
            <div>
              <p className="kit-chart-title">Top 8 owners by open findings</p>
              <p className="kit-chart-sub">Horizontal &middot; sorted desc.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 4, marginTop: 8 }}>
                {[
                  { name: "payments-team", v: 48 },
                  { name: "data-platform", v: 41 },
                  { name: "fraud-eng", v: 33 },
                  { name: "checkout", v: 28 },
                  { name: "auth", v: 24 },
                  { name: "infra-ops", v: 18 },
                  { name: "web", v: 14 },
                  { name: "mobile", v: 9 },
                ].map((row) => (
                  <div key={row.name} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11 }}>
                    <span style={{ width: 90, textAlign: "right", color: "var(--fg-muted)", flexShrink: 0 }}>{row.name}</span>
                    <div style={{ height: 14, background: CAT[0], borderRadius: 2, width: `${(row.v/48)*100}%`, maxWidth: "100%", flex: 1 }} />
                    <span style={{ fontSize: 10, fontWeight: 600, color: "var(--fg-2)", width: 24 }}>{row.v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="kit-chart-title">Data-source contribution</p>
              <p className="kit-chart-sub">100%-stacked &middot; sequential spruce.</p>
              <div className="kit-css-bar-chart" style={{ marginBottom: 28 }}>
                {["Week 1","Week 2","Week 3","Week 4"].map((w, i) => {
                  const d = [[52,48,50,54],[28,32,30,28],[20,20,20,18]];
                  const colors = [SEQ[5],SEQ[3],SEQ[1]];
                  return (
                    <div key={w} style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%", position: "relative" }}>
                      {d.map((series, si) => (
                        <div key={si} style={{ background: colors[si], height: `${series[i]}%` }} />
                      ))}
                      <span className="kit-css-bar-label">{w}</span>
                    </div>
                  );
                })}
              </div>
              <div className="kit-legend">
                <span className="kit-sw"><i style={{ background: SEQ[5] }} />ServiceNow</span>
                <span className="kit-sw"><i style={{ background: SEQ[3] }} />Cloud inventory</span>
                <span className="kit-sw"><i style={{ background: SEQ[1] }} />Manual</span>
              </div>
            </div>
          </div>
        </section>

        {/* LINE */}
        <section id="kit-line" className="kit-chart-section">
          <header><div><h2>Line &amp; area</h2><p>Time series &middot; smoothed &middot; filled area &middot; stacked area.</p></div></header>
          <div className="kit-two-col">
            <div>
              <p className="kit-chart-title">Trust score -- last 90 days</p>
              <p className="kit-chart-sub">Line with target marker. Fill below.</p>
              <svg viewBox="0 0 500 200" style={{ width: "100%", height: 200 }}>
                <line x1="40" y1="170" x2="480" y2="170" stroke="#E2E8F0" />
                <line x1="40" y1="10" x2="40" y2="170" stroke="#E2E8F0" />
                {/* Target line */}
                <line x1="40" y1="42" x2="480" y2="42" stroke="#94A3B8" strokeDasharray="4 4" />
                <text x="485" y="46" fontSize="9" fill="#94A3B8">85</text>
                {/* Trust line */}
                <polygon points="40,130 80,122 120,130 160,114 200,106 240,98 280,98 320,90 360,82 400,90 440,82 480,78 480,170 40,170" fill="rgba(41,112,122,.12)" />
                <polyline points="40,130 80,122 120,130 160,114 200,106 240,98 280,98 320,90 360,82 400,90 440,82 480,78" fill="none" stroke={CAT[0]} strokeWidth="2" />
                {[40,80,120,160,200,240,280,320,360,400,440,480].map((x, i) => {
                  const y = [130,122,130,114,106,98,98,90,82,90,82,78];
                  return <circle key={i} cx={x} cy={y[i]} r="3" fill={CAT[0]} />;
                })}
                <text x="40" y="185" fontSize="9" fill="#64748B">S1</text>
                <text x="480" y="185" fontSize="9" fill="#64748B" textAnchor="end">S12</text>
              </svg>
              <div className="kit-legend">
                <span className="kit-sw"><i style={{ background: CAT[0] }} />Trust score</span>
                <span className="kit-sw"><i style={{ background: "#94A3B8" }} />Target 85</span>
              </div>
            </div>
            <div>
              <p className="kit-chart-title">Reconciliation throughput</p>
              <p className="kit-chart-sub">Stacked area across 3 sources.</p>
              <svg viewBox="0 0 500 200" style={{ width: "100%", height: 200 }}>
                <line x1="40" y1="170" x2="480" y2="170" stroke="#E2E8F0" />
                <line x1="40" y1="10" x2="40" y2="170" stroke="#E2E8F0" />
                {/* Stacked areas */}
                <polygon points="40,110 120,90 200,95 280,80 360,60 440,120 480,130 480,170 40,170" fill="rgba(41,112,122,.35)" />
                <polygon points="40,130 120,115 200,120 280,105 360,85 440,140 480,145 480,170 40,170" fill="rgba(62,138,194,.32)" />
                <polygon points="40,150 120,148 200,146 280,140 360,130 440,155 480,158 480,170 40,170" fill="rgba(91,162,174,.32)" />
                {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d, i) => (
                  <text key={d} x={40 + i*73} y="185" fontSize="9" fill="#64748B">{d}</text>
                ))}
              </svg>
              <div className="kit-legend">
                <span className="kit-sw"><i style={{ background: CAT[0] }} />ServiceNow</span>
                <span className="kit-sw"><i style={{ background: CAT[2] }} />Cloud inventory</span>
                <span className="kit-sw"><i style={{ background: CAT[6] }} />Manual</span>
              </div>
            </div>
          </div>
        </section>

        {/* SCATTER */}
        <section id="kit-scatter" className="kit-chart-section">
          <header><div><h2>Scatter &amp; bubble</h2><p>Two-axis primitive for risk / confidence plots.</p></div></header>
          <div className="kit-two-col">
            <div>
              <p className="kit-chart-title">Confidence x blast radius</p>
              <p className="kit-chart-sub">Each dot = one agent recommendation. Size = # affected CIs.</p>
              <svg viewBox="0 0 400 280" style={{ width: "100%", height: 280 }}>
                <line x1="50" y1="250" x2="380" y2="250" stroke="#E2E8F0" />
                <line x1="50" y1="20" x2="50" y2="250" stroke="#E2E8F0" />
                <text x="215" y="270" fontSize="9" fill="#64748B" textAnchor="middle">Confidence %</text>
                <text x="10" y="135" fontSize="9" fill="#64748B" transform="rotate(-90,10,135)">Blast radius</text>
                {/* High confidence dots */}
                {[{x:300,y:130,r:14},{x:280,y:70,r:9},{x:320,y:160,r:18},{x:260,y:110,r:6},{x:290,y:150,r:12}].map((d, i) => (
                  <circle key={`h${i}`} cx={d.x} cy={d.y} r={d.r} fill="rgba(41,112,122,.55)" stroke={CAT[0]} />
                ))}
                {/* Low confidence dots */}
                {[{x:140,y:50,r:15},{x:120,y:35,r:10},{x:160,y:65,r:8},{x:100,y:25,r:18},{x:180,y:55,r:12}].map((d, i) => (
                  <circle key={`l${i}`} cx={d.x} cy={d.y} r={d.r} fill="rgba(255,70,45,.5)" stroke={CAT[1]} />
                ))}
              </svg>
              <div className="kit-legend">
                <span className="kit-sw"><i style={{ background: "rgba(41,112,122,.55)" }} />High confidence</span>
                <span className="kit-sw"><i style={{ background: "rgba(255,70,45,.5)" }} />Low confidence</span>
              </div>
            </div>
            <div>
              <p className="kit-chart-title">Freshness x CI count</p>
              <p className="kit-chart-sub">Scatter, two series (Prod / Non-Prod).</p>
              <svg viewBox="0 0 400 280" style={{ width: "100%", height: 280 }}>
                <line x1="50" y1="250" x2="380" y2="250" stroke="#E2E8F0" />
                <line x1="50" y1="20" x2="50" y2="250" stroke="#E2E8F0" />
                <text x="215" y="270" fontSize="9" fill="#64748B" textAnchor="middle">Days since last seen</text>
                <text x="10" y="135" fontSize="9" fill="#64748B" transform="rotate(-90,10,135)">CIs</text>
                {Array.from({ length: 20 }, (_, i) => (
                  <circle key={`p${i}`} cx={60 + Math.sin(i*1.3)*100 + i*15} cy={30 + Math.cos(i*0.7)*80 + i*8} r="4" fill={CAT[1]} opacity="0.6" />
                ))}
                {Array.from({ length: 20 }, (_, i) => (
                  <circle key={`n${i}`} cx={70 + Math.cos(i*0.9)*120 + i*14} cy={50 + Math.sin(i*1.1)*60 + i*7} r="4" fill={CAT[0]} opacity="0.6" />
                ))}
              </svg>
              <div className="kit-legend">
                <span className="kit-sw"><i style={{ background: CAT[1] }} />Prod</span>
                <span className="kit-sw"><i style={{ background: CAT[0] }} />Non-Prod</span>
              </div>
            </div>
          </div>
        </section>

        {/* DOUGHNUT */}
        <section id="kit-doughnut" className="kit-chart-section">
          <header><div><h2>Doughnut &amp; pie</h2><p>Part-to-whole. Doughnut allows a centered label.</p></div></header>
          <div className="kit-three-col">
            <div>
              <p className="kit-chart-title">CI status distribution</p>
              <p className="kit-chart-sub">Doughnut &middot; RAG-3.</p>
              <div className="kit-css-doughnut kit-css-doughnut--md" style={{ background: `conic-gradient(${RAG3[0]} 0 57%, ${RAG3[1]} 57% 73%, ${RAG3[2]} 73% 100%)` }} />
              <div className="kit-legend" style={{ justifyContent: "center" }}>
                <span className="kit-sw"><i style={{ background: RAG3[0] }} />Reconciled 728</span>
                <span className="kit-sw"><i style={{ background: RAG3[1] }} />Stale 214</span>
                <span className="kit-sw"><i style={{ background: RAG3[2] }} />Orphaned 342</span>
              </div>
            </div>
            <div>
              <p className="kit-chart-title">Ownership coverage</p>
              <p className="kit-chart-sub">Pie &middot; categorical.</p>
              <div style={{ width: 160, height: 160, borderRadius: "50%", margin: "0 auto", background: `conic-gradient(${CAT[0]} 0 32%, ${CAT[1]} 32% 53%, ${CAT[2]} 53% 69%, ${CAT[3]} 69% 83%, ${CAT[4]} 83% 94%, ${CAT[5]} 94% 100%)` }} />
              <div className="kit-legend" style={{ justifyContent: "center", marginTop: 10 }}>
                {["Payments","Data platform","Fraud","Checkout","Auth","Other"].map((l, i) => (
                  <span key={l} className="kit-sw"><i style={{ background: CAT[i] }} />{l}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="kit-chart-title">Change requests by risk</p>
              <p className="kit-chart-sub">Doughnut &middot; divergent (neg - pos).</p>
              <div className="kit-css-doughnut kit-css-doughnut--sm" style={{ background: `conic-gradient(${DIV[0]} 0 12%, ${DIV[1]} 12% 36%, ${DIV[2]} 36% 76%, ${DIV[4]} 76% 91%, ${DIV[5]} 91% 100%)` }} />
              <div className="kit-legend" style={{ justifyContent: "center" }}>
                {["High risk","Med risk","Low risk","Benign","Improvement"].map((l, i) => (
                  <span key={l} className="kit-sw"><i style={{ background: [DIV[0],DIV[1],DIV[2],DIV[4],DIV[5]][i] }} />{l}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* POLAR / RADAR */}
        <section id="kit-polar" className="kit-chart-section">
          <header><div><h2>Polar &amp; radar</h2><p>Radar for multi-dim assessments (SLO coverage, trust dimensions).</p></div></header>
          <div className="kit-two-col">
            <div>
              <p className="kit-chart-title">Trust posture by dimension</p>
              <p className="kit-chart-sub">Radar &middot; this month vs last.</p>
              <svg viewBox="0 0 300 300" style={{ width: "100%", height: 260 }}>
                {/* Grid */}
                {[80,60,40,20].map((r) => (
                  <polygon key={r} points={[0,1,2,3,4,5].map((i) => {
                    const angle = (Math.PI*2/6)*i - Math.PI/2;
                    return `${150+Math.cos(angle)*r*1.2},${150+Math.sin(angle)*r*1.2}`;
                  }).join(" ")} fill="none" stroke="#F1F5F9" />
                ))}
                {/* Labels */}
                {["Freshness","Ownership","Reconciliation","Automation","Coverage","Accuracy"].map((l, i) => {
                  const angle = (Math.PI*2/6)*i - Math.PI/2;
                  const x = 150+Math.cos(angle)*110;
                  const y = 150+Math.sin(angle)*110;
                  return <text key={l} x={x} y={y} fontSize="9" fill="#334155" textAnchor="middle" dominantBaseline="middle">{l}</text>;
                })}
                {/* This month */}
                <polygon points={[78,82,68,41,74,86].map((v, i) => {
                  const angle = (Math.PI*2/6)*i - Math.PI/2;
                  return `${150+Math.cos(angle)*v},${150+Math.sin(angle)*v}`;
                }).join(" ")} fill="rgba(41,112,122,.22)" stroke={CAT[0]} strokeWidth="1.5" />
                {/* Last month */}
                <polygon points={[72,80,62,35,72,84].map((v, i) => {
                  const angle = (Math.PI*2/6)*i - Math.PI/2;
                  return `${150+Math.cos(angle)*v},${150+Math.sin(angle)*v}`;
                }).join(" ")} fill="rgba(255,70,45,.18)" stroke={CAT[1]} strokeWidth="1.5" />
              </svg>
              <div className="kit-legend">
                <span className="kit-sw"><i style={{ background: CAT[0] }} />This month</span>
                <span className="kit-sw"><i style={{ background: CAT[1] }} />Last month</span>
              </div>
            </div>
            <div>
              <p className="kit-chart-title">Volume by region</p>
              <p className="kit-chart-sub">Polar area &middot; categorical.</p>
              <svg viewBox="0 0 300 300" style={{ width: "100%", height: 260 }}>
                {[612,284,342,218,184,122].map((v, i) => {
                  const maxR = 120;
                  const r = (v/612)*maxR;
                  const startAngle = (Math.PI*2/6)*i - Math.PI/2;
                  const endAngle = (Math.PI*2/6)*(i+1) - Math.PI/2;
                  const x1 = 150 + Math.cos(startAngle)*r;
                  const y1 = 150 + Math.sin(startAngle)*r;
                  const x2 = 150 + Math.cos(endAngle)*r;
                  const y2 = 150 + Math.sin(endAngle)*r;
                  return (
                    <path key={i} d={`M150,150 L${x1},${y1} A${r},${r} 0 0,1 ${x2},${y2} Z`} fill={CAT[i]} opacity="0.7" stroke="#fff" strokeWidth="1" />
                  );
                })}
              </svg>
              <div className="kit-legend">
                {["us-east-1","us-west-2","eu-west-1","eu-central-1","ap-south-1","ap-ne-1"].map((l, i) => (
                  <span key={l} className="kit-sw"><i style={{ background: CAT[i] }} />{l}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* METER */}
        <section id="kit-meter" className="kit-chart-section">
          <header><div><h2>Meter-gauge &amp; KPI</h2><p>Single-value dials paired with target markers and status pills.</p></div></header>
          <div className="kit-meter-grid">
            {[
              { lab: "Trust score", val: "78.4", unit: " / 100", pct: 78, color: CAT[0], sub: <>Target 85 &middot; <span className="kit-ch-delta kit-up">+2.1</span></> },
              { lab: "Freshness", val: "92", unit: "%", pct: 92, color: CAT[0], sub: <>Target 95 &middot; <span className="kit-pill kit-pill--warn">Below</span></> },
              { lab: "Reconciliation rate", val: "68", unit: "%", pct: 68, color: "#F59E0B", sub: <>Target 80 &middot; <span className="kit-pill kit-pill--err">Gap</span></> },
              { lab: "Automation coverage", val: "41", unit: "%", pct: 41, color: "#DC2626", sub: <>Target 60 &middot; <span className="kit-pill kit-pill--err">Gap</span></> },
            ].map((m) => (
              <div className="kit-meter" key={m.lab}>
                <p className="kit-lab">{m.lab}</p>
                <div className="kit-trust-gauge">
                  <svg viewBox="0 0 200 120" style={{ width: "100%", height: "100%" }}>
                    <path d="M10,110 A90,90 0 0,1 190,110" fill="none" stroke="#E2E8F0" strokeWidth="16" strokeLinecap="round" />
                    <path d="M10,110 A90,90 0 0,1 190,110" fill="none" stroke={m.color} strokeWidth="16" strokeLinecap="round" strokeDasharray={`${(m.pct/100)*283} 283`} />
                  </svg>
                </div>
                <p className="kit-trust-label">{m.val}<small>{m.unit}</small></p>
                <p className="kit-trust-sub">{m.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SANKEY */}
        <section id="kit-sankey" className="kit-chart-section">
          <header><div><h2>Sankey</h2><p>Flow from data source - CI state - disposition. Widths = CI counts.</p></div></header>
          <svg className="kit-sankey-svg" viewBox="0 0 900 320" aria-label="Sankey">
            <defs>
              <linearGradient id="kitlk1" x1="0" x2="1"><stop offset="0" stopColor="#29707A" /><stop offset="1" stopColor="#FF462D" /></linearGradient>
              <linearGradient id="kitlk2" x1="0" x2="1"><stop offset="0" stopColor="#3E8AC2" /><stop offset="1" stopColor="#29707A" /></linearGradient>
              <linearGradient id="kitlk3" x1="0" x2="1"><stop offset="0" stopColor="#5BA2AE" /><stop offset="1" stopColor="#B82915" /></linearGradient>
            </defs>
            {/* Nodes col 1 */}
            <rect x="60" y="30" width="20" height="70" fill="#29707A" rx="2" />
            <text className="kit-sankey-label" x="20" y="50">ServiceNow</text><text className="kit-sankey-sub" x="20" y="66">612 CIs</text>
            <rect x="60" y="120" width="20" height="100" fill="#3E8AC2" rx="2" />
            <text className="kit-sankey-label" x="20" y="140">Cloud inventory</text><text className="kit-sankey-sub" x="20" y="156">442 CIs</text>
            <rect x="60" y="240" width="20" height="50" fill="#5BA2AE" rx="2" />
            <text className="kit-sankey-label" x="20" y="260">Manual</text><text className="kit-sankey-sub" x="20" y="276">230 CIs</text>
            {/* Links col1->col2 */}
            <path className="kit-sankey-link" d="M80 30 C 260 30 260 30 440 20 L 440 90 C 260 100 260 100 80 100 Z" fill="url(#kitlk1)" />
            <path className="kit-sankey-link" d="M80 120 C 260 120 260 140 440 130 L 440 200 C 260 210 260 210 80 220 Z" fill="url(#kitlk2)" />
            <path className="kit-sankey-link" d="M80 240 C 260 240 260 260 440 230 L 440 290 C 260 300 260 300 80 290 Z" fill="url(#kitlk3)" />
            {/* Nodes col 2 */}
            <rect x="440" y="20" width="20" height="70" fill="#16A34A" rx="2" />
            <text className="kit-sankey-label" x="470" y="40">Reconciled</text><text className="kit-sankey-sub" x="470" y="56">728 CIs</text>
            <rect x="440" y="130" width="20" height="70" fill="#F59E0B" rx="2" />
            <text className="kit-sankey-label" x="470" y="150">Stale</text><text className="kit-sankey-sub" x="470" y="166">214 CIs</text>
            <rect x="440" y="230" width="20" height="60" fill="#DC2626" rx="2" />
            <text className="kit-sankey-label" x="470" y="250">Orphaned</text><text className="kit-sankey-sub" x="470" y="266">342 CIs</text>
            {/* Links col2->col3 */}
            <path className="kit-sankey-link" d="M460 20 C 640 20 640 30 820 25 L 820 90 C 640 95 640 90 460 90 Z" fill="#16A34A" />
            <path className="kit-sankey-link" d="M460 130 C 640 130 640 115 820 110 L 820 150 C 640 160 640 200 460 200 Z" fill="#F59E0B" />
            <path className="kit-sankey-link" d="M460 230 C 640 230 640 195 820 175 L 820 260 C 640 285 640 290 460 290 Z" fill="#DC2626" />
            {/* Nodes col 3 */}
            <rect x="820" y="25" width="20" height="65" fill="#29707A" rx="2" />
            <text className="kit-sankey-label" x="848" y="45">Automated</text>
            <rect x="820" y="110" width="20" height="40" fill="#5BA2AE" rx="2" />
            <text className="kit-sankey-label" x="848" y="130">Agent queue</text>
            <rect x="820" y="175" width="20" height="85" fill="#B82915" rx="2" />
            <text className="kit-sankey-label" x="848" y="200">Manual review</text>
          </svg>
          <p className="kit-hint">SVG reference -- the real component uses chartjs-chart-sankey with <code>sankey</code> chart type.</p>
        </section>

        {/* TREE */}
        <section id="kit-tree" className="kit-chart-section">
          <header><div><h2>Tree / dendrogram</h2><p>Hierarchical relationships -- service - BU - app - CI.</p></div></header>
          <svg className="kit-tree-svg" viewBox="0 0 900 320" aria-label="Service tree">
            <g className="kit-tree-link">
              <path d="M80 160 C 200 160 200 60  320 60" />
              <path d="M80 160 C 200 160 200 160 320 160" />
              <path d="M80 160 C 200 160 200 260 320 260" />
              <path d="M320 60  C 440 60  440 30  560 30" />
              <path d="M320 60  C 440 60  440 90  560 90" />
              <path d="M320 160 C 440 160 440 130 560 130" />
              <path d="M320 160 C 440 160 440 190 560 190" />
              <path d="M320 260 C 440 260 440 240 560 240" />
              <path d="M320 260 C 440 260 440 290 560 290" />
              <path d="M560 30  C 680 30  680 20  800 20" />
              <path d="M560 30  C 680 30  680 50  800 50" />
              <path d="M560 130 C 680 130 680 130 800 130" />
              <path d="M560 190 C 680 190 680 190 800 190" />
              <path d="M560 240 C 680 240 680 240 800 240" />
              <path d="M560 290 C 680 290 680 290 800 290" />
            </g>
            <g>
              <g className="kit-tree-node"><circle cx="80" cy="160" r="6" /><text x="60" y="145" textAnchor="end">Payments</text></g>
              <g className="kit-tree-node"><circle cx="320" cy="60" r="5" /><text x="310" y="52" textAnchor="end">Checkout</text></g>
              <g className="kit-tree-node"><circle cx="320" cy="160" r="5" /><text x="310" y="152" textAnchor="end">Ledger</text></g>
              <g className="kit-tree-node"><circle cx="320" cy="260" r="5" /><text x="310" y="252" textAnchor="end">Fraud</text></g>
              <g className="kit-tree-node"><circle cx="560" cy="30" r="4" /><text x="572" y="34">checkout-api</text></g>
              <g className="kit-tree-node kit-warn"><circle cx="560" cy="90" r="4" /><text x="572" y="94">checkout-worker</text></g>
              <g className="kit-tree-node"><circle cx="560" cy="130" r="4" /><text x="572" y="134">ledger-db</text></g>
              <g className="kit-tree-node kit-err"><circle cx="560" cy="190" r="4" /><text x="572" y="194">ledger-worker</text></g>
              <g className="kit-tree-node"><circle cx="560" cy="240" r="4" /><text x="572" y="244">fraud-score</text></g>
              <g className="kit-tree-node"><circle cx="560" cy="290" r="4" /><text x="572" y="294">fraud-rules</text></g>
              <g className="kit-tree-node kit-leaf"><circle cx="800" cy="20" r="3" /><text x="810" y="23">CI-0019837</text></g>
              <g className="kit-tree-node kit-leaf"><circle cx="800" cy="50" r="3" /><text x="810" y="53">CI-0019841</text></g>
              <g className="kit-tree-node kit-leaf"><circle cx="800" cy="130" r="3" /><text x="810" y="133">CI-0019855</text></g>
              <g className="kit-tree-node kit-leaf"><circle cx="800" cy="190" r="3" /><text x="810" y="193">CI-0019902</text></g>
              <g className="kit-tree-node kit-leaf"><circle cx="800" cy="240" r="3" /><text x="810" y="243">CI-0019911</text></g>
              <g className="kit-tree-node kit-leaf"><circle cx="800" cy="290" r="3" /><text x="810" y="293">CI-0019955</text></g>
            </g>
          </svg>
          <p className="kit-hint">SVG reference. The real component uses <code>tree</code> / <code>dendrogram</code> / <code>forceDirectedGraph</code> chart types.</p>
        </section>

        {/* MATRIX */}
        <section id="kit-matrix" className="kit-chart-section">
          <header><div><h2>Heatmap / matrix</h2><p>Stale CIs by service &amp; week. Sequential01 scale.</p></div></header>
          <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 4 }}>
            <div />
            <div className="kit-matrix" style={{ gridTemplateColumns: `repeat(${matrixCols.length},1fr)` }}>
              {matrixCols.map((c) => <div key={c} className="kit-axisX">{c}</div>)}
            </div>
            <div style={{ display: "grid", gridTemplateRows: `repeat(${matrixRows.length},32px)`, gap: 2 }}>
              {matrixRows.map((r) => <div key={r} className="kit-axisY" style={{ height: 32, display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: 6, fontSize: 11, color: "var(--fg-muted)" }}>{r}</div>)}
            </div>
            <div className="kit-matrix" style={{ gridTemplateColumns: `repeat(${matrixCols.length},1fr)`, gridTemplateRows: `repeat(${matrixRows.length},32px)` }}>
              {matrixRows.map((_, ri) =>
                matrixCols.map((_, ci) => {
                  const v = matrixVal(ri, ci);
                  const idx = Math.min(palette7.length - 1, v);
                  return (
                    <div key={`${ri}-${ci}`} className="kit-cell" style={{ background: palette7[idx], color: idx > 3 ? "#fff" : "#334155" }} title={`${matrixRows[ri]} \u00b7 ${matrixCols[ci]} \u00b7 ${v} stale CIs`}>
                      {v}
                    </div>
                  );
                })
              )}
            </div>
          </div>
          <div className="kit-legend" style={{ marginTop: 16 }}>
            <span>Low</span>
            <span style={{ display: "inline-flex", gap: 2 }}>
              {[SEQ[1],SEQ[3],SEQ[5],SEQ[7],SEQ[9]].map((c, i) => (
                <i key={i} style={{ width: 16, height: 10, background: c, display: "inline-block" }} />
              ))}
            </span>
            <span>High</span>
          </div>
        </section>

        {/* CHOROPLETH */}
        <section id="kit-choropleth" className="kit-chart-section">
          <header><div><h2>Choropleth (concept)</h2><p>Region-coded density. Sequential01 with bubble markers for outliers.</p></div></header>
          <div className="kit-choropleth">
            <div className="kit-marker" style={{ left: "22%", top: "38%" }} />
            <div className="kit-marker" style={{ left: "68%", top: "52%" }} />
            <div className="kit-marker" style={{ left: "80%", top: "64%" }} />
            <div className="kit-caption">Placeholder visual -- real component renders as <code>choropleth</code> or <code>bubbleMap</code> with GeoJSON.</div>
          </div>
        </section>

        {/* BOXPLOT */}
        <section id="kit-box" className="kit-chart-section">
          <header><div><h2>Boxplot</h2><p>Reconciliation latency (min) &middot; by source.</p></div></header>
          <div className="kit-two-col">
            <div>
              <p className="kit-chart-title">Latency distribution</p>
              <svg viewBox="0 0 600 300" style={{ width: "100%", height: 300, display: "block" }} aria-label="Boxplot">
                <line x1="60" x2="60" y1="30" y2="260" stroke="#CBD5E1" />
                <line x1="60" x2="580" y1="260" y2="260" stroke="#CBD5E1" />
                <g fontSize="10" fill="#64748B">
                  <text x="56" y="264" textAnchor="end">0</text>
                  <text x="56" y="204" textAnchor="end">30</text>
                  <text x="56" y="144" textAnchor="end">60</text>
                  <text x="56" y="84" textAnchor="end">90</text>
                  <text x="56" y="34" textAnchor="end">120</text>
                </g>
                {/* ServiceNow */}
                <line x1="140" x2="140" y1="90" y2="240" stroke="#29707A" strokeWidth="1.5" />
                <rect x="110" y="130" width="60" height="70" fill="#BEDDE2" stroke="#29707A" />
                <line x1="110" x2="170" y1="170" y2="170" stroke="#29707A" strokeWidth="2" />
                <text x="140" y="278" textAnchor="middle" fill="#64748B" fontSize="11">ServiceNow</text>
                {/* Cloud */}
                <line x1="300" x2="300" y1="60" y2="230" stroke="#FF462D" strokeWidth="1.5" />
                <rect x="270" y="110" width="60" height="100" fill="#FFE8E0" stroke="#FF462D" />
                <line x1="270" x2="330" y1="150" y2="150" stroke="#FF462D" strokeWidth="2" />
                <text x="300" y="278" textAnchor="middle" fill="#64748B" fontSize="11">Cloud inv.</text>
                {/* Manual */}
                <line x1="460" x2="460" y1="40" y2="250" stroke="#3E8AC2" strokeWidth="1.5" />
                <rect x="430" y="90" width="60" height="120" fill="#DBEAFE" stroke="#3E8AC2" />
                <line x1="430" x2="490" y1="130" y2="130" stroke="#3E8AC2" strokeWidth="2" />
                <text x="460" y="278" textAnchor="middle" fill="#64748B" fontSize="11">Manual</text>
              </svg>
            </div>
            <div>
              <p className="kit-chart-title">When to reach for this</p>
              <p style={{ color: "var(--fg-2)", fontSize: 13, margin: "0 0 12px" }}>Distributions, outliers, SLO tails. Pair with p50/p95 annotation. Shidoka provides <code>boxplot</code> and <code>violin</code> chart types for this.</p>
              <p style={{ color: "var(--fg-muted)", fontSize: 12 }}>Pattern reference -- chart.js-chart-boxplot in the real component.</p>
            </div>
          </div>
        </section>

        <footer style={{ textAlign: "center", padding: "24px 0 8px", fontSize: 12, color: "var(--fg-muted)" }}>
          Shidoka charts kit &middot; recreated for Kyndryl CMDB DS
        </footer>
      </main>
    </div>
  </div>
);
