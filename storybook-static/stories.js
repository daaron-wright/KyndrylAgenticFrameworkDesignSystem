/* =============================================================
   Stories registry — Kyndryl Agentic Framework
   -------------------------------------------------------------
   Each story is a flat record. The sidebar groups them by
   `group` then `component`. Stories load by setting the
   canvas iframe src to `iframe`. Optional fields:
     - args: initial control state
     - argTypes: control schema { name: {control, options, default} }
     - docs: rich docs object (overview, when, dont, do, a11y)
     - source: code snippet shown in the Source addon
     - height: preferred canvas height in px
   ============================================================= */
window.STORIES = [
  /* ---------- WELCOME ---------- */
  {
    id: "welcome--introduction",
    title: "Welcome / Introduction",
    group: "Welcome",
    component: "Welcome",
    name: "Introduction",
    iframe: "stories/welcome.html",
    height: 1200,
    docs: {
      eyebrow: "DESIGN SYSTEM",
      lead: "A design system derived from the Kyndryl Agentic Framework — CMDB Data Quality Next.js workspace. It captures the tokens, composite patterns, and UX themes the app uses to surface CMDB trust posture, triage stale or orphaned CIs, drive reconciliation and correction-request workflows, and investigate business impact through a knowledge graph.",
      overview: [
        "Aligned to Shidoka (Bridge) — Kyndryl's foundation design system.",
        "Warm Red #FF462D is the brand accent; Spruce #29707A is the interactive workhorse.",
        "Calm, dense, evidence-first: every number has a reason, every recommendation has provenance, every action shows its blast radius before it runs."
      ]
    }
  },

  /* ---------- FOUNDATIONS ---------- */
  { id: "foundations-colors--brand",     group: "Foundations", component: "Colors", name: "Brand",     iframe: "../preview/colors-brand.html",    height: 600 },
  { id: "foundations-colors--slate",     group: "Foundations", component: "Colors", name: "Neutrals",  iframe: "../preview/colors-slate.html",    height: 600 },
  { id: "foundations-colors--severity",  group: "Foundations", component: "Colors", name: "Severity",  iframe: "../preview/colors-severity.html", height: 500 },
  { id: "foundations-colors--status",    group: "Foundations", component: "Colors", name: "Status RAG",iframe: "../preview/colors-status.html",   height: 500 },
  { id: "foundations-colors--chart",     group: "Foundations", component: "Colors", name: "Chart palette", iframe: "../preview/colors-chart.html", height: 600 },

  { id: "foundations-type--display",     group: "Foundations", component: "Type",   name: "Display",   iframe: "../preview/type-display.html",    height: 500 },
  { id: "foundations-type--body",        group: "Foundations", component: "Type",   name: "Body",      iframe: "../preview/type-body.html",       height: 500 },

  { id: "foundations-spacing--scale",    group: "Foundations", component: "Spacing",name: "Scale",     iframe: "../preview/spacing-scale.html",   height: 400 },
  { id: "foundations-spacing--radii",    group: "Foundations", component: "Spacing",name: "Radii",     iframe: "../preview/spacing-radii.html",   height: 320 },
  { id: "foundations-spacing--elevation",group: "Foundations", component: "Spacing",name: "Elevation", iframe: "../preview/spacing-elevation.html", height: 320 },

  { id: "foundations-icons--library",    group: "Foundations", component: "Icons",  name: "Library",   iframe: "../preview/brand-icons.html",     height: 600 },
  { id: "foundations-brand--logo",       group: "Foundations", component: "Brand",  name: "Logo",      iframe: "../preview/brand-logo.html",      height: 360 },

  /* ---------- PRIMITIVES ---------- */
  {
    id: "primitives-severitypill--default",
    group: "Primitives", component: "SeverityPill", name: "Default",
    iframe: "stories/primitive-severity-pill.html",
    height: 220,
    args: { severity: "CRITICAL", label: "" },
    argTypes: {
      severity: { control: "radio", options: ["CRITICAL", "HIGH", "MEDIUM", "LOW"], default: "CRITICAL" },
      label:    { control: "text",  default: "" }
    },
    docs: {
      eyebrow: "PRIMITIVE",
      lead: "Severity is the canonical taxonomy for triage. SeverityPill renders a small uppercase chip whose color and label come from the same token.",
      whenToUse: [
        "Triage rows, finding cards, KPI tiles where the user has to skim severity quickly.",
        "Always paired with an icon or label — never color-only (a11y rule)."
      ],
      dont: ["Don't invent custom severities. The taxonomy is fixed: CRITICAL · HIGH · MEDIUM · LOW.", "Don't use it as a generic tag. For non-severity status use StatusBadge."],
      do:   ["Pair with a count or an icon when sitting next to other pills.", "Use sentence case in surrounding copy — only the pill itself is uppercase."],
      a11y: [
        "Color is paired with text — passes WCAG 1.4.1 (not color-only).",
        "Min hit area only required when interactive. Static pills don't need 44px."
      ]
    }
  },

  {
    id: "primitives-confidencebadge--default",
    group: "Primitives", component: "ConfidenceBadge", name: "Default",
    iframe: "stories/primitive-confidence-badge.html",
    height: 240,
    args: { value: 92, role: "full" },
    argTypes: {
      value: { control: "range", min: 0, max: 100, step: 1, default: 92 },
      role:  { control: "radio", options: ["full", "review", "readonly"], default: "full" }
    },
    docs: {
      eyebrow: "AGENTIC PRIMITIVE",
      lead: "Confidence the agent has in a recommendation. Click to override, ask for more evidence, snooze, or teach the agent.",
      whenToUse: ["Anywhere the agent surfaces a derived number — recommendations, scoring, scenario projections."],
      dont: ["Don't invent confidence values without an underlying reason paragraph (`Rationale`)."],
      do:   ["Pair with `SourceAttribution` so users can trace the evidence."],
      a11y: ["Popover is keyboard-reachable; Esc closes; focus returns to the badge."]
    }
  },

  {
    id: "primitives-freshnessbadge--default",
    group: "Primitives", component: "FreshnessBadge", name: "Default",
    iframe: "stories/primitive-freshness-badge.html",
    height: 240,
    args: { ageDays: 3, threshold: 7 },
    argTypes: {
      ageDays:   { control: "range", min: 0, max: 60, step: 1, default: 3 },
      threshold: { control: "range", min: 1, max: 30, step: 1, default: 7 }
    },
    docs: {
      eyebrow: "AGENTIC PRIMITIVE",
      lead: "How fresh the underlying data is. Crosses into a warning state once `ageDays > threshold`.",
      whenToUse: ["Every card backed by data: KPIs, recommendations, graph nodes."],
      dont: ["Don't approximate (\"recent\"). Always show a number or a relative time."],
      do:   ["Force-refresh, change threshold, notify owner — all available in the popover."],
      a11y: ["Stale state announces to screen readers via `aria-live=\"polite\"` when threshold is crossed."]
    }
  },

  {
    id: "primitives-deltaindicator--default",
    group: "Primitives", component: "DeltaIndicator", name: "Default",
    iframe: "stories/primitive-delta-indicator.html",
    height: 220,
    args: { delta: 3.4, unit: "%", direction: "up" },
    argTypes: {
      delta:     { control: "number", default: 3.4 },
      unit:      { control: "select", options: ["%", "pts", "CIs", ""], default: "%" },
      direction: { control: "radio", options: ["up", "down"], default: "up" }
    },
    docs: {
      eyebrow: "PRIMITIVE",
      lead: "Signed delta vs a reference period. Always prefixed with + or − and an arrow icon.",
      whenToUse: ["KPI tiles, scenario projections, anywhere a value is moving."],
      dont: ["Don't drop the sign or unit. \"3.4\" alone is ambiguous."],
      do:   ["Color the arrow according to whether the direction is desirable, not the sign."]
    }
  },

  {
    id: "primitives-statusbadge--default",
    group: "Primitives", component: "StatusBadge", name: "Default",
    iframe: "stories/primitive-status-badge.html",
    height: 240,
    args: { status: "Approved" },
    argTypes: {
      status: { control: "radio", options: ["Pending", "Approved", "Executed", "Rejected", "Healthy", "Degraded", "Impacted", "Unknown"], default: "Approved" }
    },
    docs: {
      eyebrow: "PRIMITIVE",
      lead: "Workflow and graph status chip. Sentence case (not uppercase like SeverityPill).",
      whenToUse: ["Review queue rows, graph node tooltips, audit trails."],
      dont: ["Don't use it for severity — that's SeverityPill."]
    }
  },

  {
    id: "primitives-sourceattribution--default",
    group: "Primitives", component: "SourceAttribution", name: "Default",
    iframe: "../preview/primitives-source.html",
    height: 280,
    docs: {
      eyebrow: "AGENTIC PRIMITIVE",
      lead: "Provenance footer that lives at the bottom of any agent-derived card. Dataset · timestamp · confidence.",
      whenToUse: ["Every card the agent generates."],
      dont: ["Don't bury this. Provenance is a first-class element, not a footnote."]
    }
  },

  /* ---------- AGENTIC PRIMITIVES (live surface) ---------- */
  { id: "agentic-states--all",        group: "Agentic", component: "States", name: "All states",       iframe: "../preview/agentic-states.html",    height: 1100 },
  { id: "agentic-flow--full-run",     group: "Agentic", component: "Flow",   name: "Full live run",    iframe: "../preview/agentic-flow.html",      height: 900 },
  { id: "agentic-inbox--learned",     group: "Agentic", component: "Inbox",  name: "Learned from you", iframe: "../preview/agentic-inbox.html",     height: 800 },
  { id: "agentic-states-deck--reference", group: "Agentic", component: "States", name: "Reference deck", iframe: "../preview/agentic-states-deck.html", height: 900 },

  /* ---------- COMPOSITES ---------- */
  { id: "composites-kpi--grid",          group: "Composites", component: "KPI", name: "Grid",                iframe: "../preview/components-kpi.html",            height: 380 },
  { id: "composites-gauge--trustscore",  group: "Composites", component: "Gauge", name: "Trust score",       iframe: "../preview/components-gauge.html",          height: 360 },
  { id: "composites-statusbanner--default", group: "Composites", component: "StatusBanner", name: "Default", iframe: "../preview/components-status-banner.html",  height: 320 },
  { id: "composites-recommendation--default", group: "Composites", component: "Recommendation", name: "Default", iframe: "../preview/components-recommendation.html", height: 600 },
  { id: "composites-execution--timeline", group: "Composites", component: "ExecutionTimeline", name: "In-flight & completed", iframe: "../preview/components-execution.html", height: 700 },
  { id: "composites-execsummary--card",  group: "Composites", component: "ExecutiveSummary", name: "Card",   iframe: "../preview/composite-exec-summary.html",    height: 600 },
  { id: "composites-impact--rollup",     group: "Composites", component: "ImpactRollup", name: "Card",       iframe: "../preview/composite-impact-rollup.html",   height: 600 },
  { id: "composites-scenario--projection", group: "Composites", component: "ScenarioProjection", name: "Card", iframe: "../preview/composite-scenario.html",      height: 600 },
  { id: "composites-chat--default",      group: "Composites", component: "Chat", name: "Conversation",       iframe: "../preview/composite-chat.html",            height: 800 },
  { id: "composites-chat--ai-modal",     group: "Composites", component: "Chat", name: "AI modal chat",      iframe: "../preview/ai-modal-chat.html",             height: 800 },
  { id: "composites-chat--history",      group: "Composites", component: "Chat", name: "AI chat history",    iframe: "../preview/ai-chat-history.html",           height: 600 },
  { id: "composites-chat--feedback",     group: "Composites", component: "Chat", name: "AI feedback / sources", iframe: "../preview/ai-feedback-sources.html",    height: 600 },
  { id: "composites-chat--launch-button",group: "Composites", component: "Chat", name: "AI launch button",   iframe: "../preview/ai-launch-button.html",          height: 240 },
  { id: "composites-chat--ai-loader",    group: "Composites", component: "Chat", name: "AI loader",          iframe: "../preview/ai-loader.html",                 height: 240 },
  { id: "composites-graph--dag",         group: "Composites", component: "Graph", name: "DAG kit",           iframe: "../preview/dag-graph-kit.html",             height: 700 },
  { id: "composites-table--default",     group: "Composites", component: "Table", name: "Default",           iframe: "../preview/components-table.html",          height: 600 },
  { id: "composites-buttons--default",   group: "Composites", component: "Buttons", name: "Default",         iframe: "../preview/components-buttons.html",        height: 200 },
  { id: "composites-badges--default",    group: "Composites", component: "Badges", name: "Default",          iframe: "../preview/components-badges.html",         height: 240 },

  /* ---------- TEMPLATES ---------- */
  { id: "templates--dashboard",     group: "Templates", component: "Dashboard",     name: "Default", iframe: "../preview/template-dashboard.html",     height: 1100 },
  { id: "templates--triage",        group: "Templates", component: "Triage",        name: "Default", iframe: "../preview/template-triage.html",        height: 1100 },
  { id: "templates--investigation", group: "Templates", component: "Investigation", name: "Default", iframe: "../preview/template-investigation.html", height: 1100 },
  { id: "templates--review",        group: "Templates", component: "ReviewQueue",   name: "Default", iframe: "../preview/template-review.html",        height: 1100 },
  { id: "templates--conversation",  group: "Templates", component: "Conversation",  name: "Default", iframe: "../preview/template-conversation.html",  height: 1100 },

  /* ---------- STATES MATRIX ---------- */
  { id: "states-matrix--all", group: "States", component: "Matrix", name: "All states", iframe: "../preview/states-matrix.html", height: 1400 },

  /* ---------- KITS ---------- */
  { id: "kits-cmdb--workspace",        group: "Kits", component: "CMDB",   name: "Workspace",          iframe: "../ui_kits/cmdb/index.html",              height: 1200 },
  { id: "kits-shidoka--components",    group: "Kits", component: "Shidoka", name: "Components",        iframe: "../ui_kits/shidoka-components/index.html", height: 1200 },
  { id: "kits-shidoka--shell",         group: "Kits", component: "Shidoka", name: "Shell",             iframe: "../ui_kits/shidoka-shell/index.html",      height: 1200 },
  { id: "kits-shidoka--charts",        group: "Kits", component: "Shidoka", name: "Charts",            iframe: "../ui_kits/shidoka-charts/index.html",     height: 1200 }
];
