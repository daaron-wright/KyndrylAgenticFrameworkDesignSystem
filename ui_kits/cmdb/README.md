# CMDB Data Quality — UI Kit

Clickable, single-file recreation of the main workspace screens:

- **Login** (mock, mirrors the demo accounts: `anna_access` / `raj_security` / `tom_team`)
- **Dashboard** — Trust-score gauge with target marker, KPI grid with status-banner strip, Impacted-CIs-by-domain bar chart, correction-priority donut, Live Signals panel (optimisation vs. reconciliation triggers)
- **Access review** — Stale-CI triage table → detail drawer with Signals, Impact rollup, Provenance, and the three-way action row
- **Recommendations** — Full "explain + act" recommendation card: confidence %, agent-reason paragraph, Signals, Impact rollup (before action), Execute / Send for review / Dismiss
- **Investigation** — ReactFlow-style knowledge graph canvas (Domain → BU → Process → App → CI), filter rail + lens toggle + legend, inspector panel
- **Change requests** — Review queue: Pending → Approved → Executed lifecycle with owner, timestamp, reason, and audit-trail link

All screens are wired cosmetically. Nav state + logged-in state persist via localStorage. The graph is static SVG/DOM — see `components/cdp/investigation/cmdb-knowledge-graph.tsx` in the source repo for the real React Flow implementation.
