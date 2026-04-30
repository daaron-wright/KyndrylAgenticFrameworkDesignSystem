export type StaticScriptMode = "iife" | "global";

export interface StaticSurfaceSpec {
  id: string;
  title: string;
  sourcePath: string;
  height: number;
  scriptMode?: StaticScriptMode;
}

const htmlModules = {
  ...import.meta.glob("../preview/*.html", { eager: true, query: "?raw", import: "default" }),
  ...import.meta.glob("../ui_kits/*/index.html", { eager: true, query: "?raw", import: "default" }),
  ...import.meta.glob("../storybook-static/stories/*.html", { eager: true, query: "?raw", import: "default" })
} as Record<string, string>;

export const STATIC_SURFACES = {
  "welcome--introduction": { id: "welcome--introduction", title: "Welcome / Introduction", sourcePath: "storybook-static/stories/welcome.html", height: 1200 },

  "foundations-colors--brand": { id: "foundations-colors--brand", title: "Foundations / Colors / Brand", sourcePath: "preview/colors-brand.html", height: 600 },
  "foundations-colors--slate": { id: "foundations-colors--slate", title: "Foundations / Colors / Neutrals", sourcePath: "preview/colors-slate.html", height: 600 },
  "foundations-colors--severity": { id: "foundations-colors--severity", title: "Foundations / Colors / Severity", sourcePath: "preview/colors-severity.html", height: 500 },
  "foundations-colors--status": { id: "foundations-colors--status", title: "Foundations / Colors / Status RAG", sourcePath: "preview/colors-status.html", height: 500 },
  "foundations-colors--chart": { id: "foundations-colors--chart", title: "Foundations / Colors / Chart palette", sourcePath: "preview/colors-chart.html", height: 600 },
  "foundations-type--display": { id: "foundations-type--display", title: "Foundations / Type / Display", sourcePath: "preview/type-display.html", height: 500 },
  "foundations-type--body": { id: "foundations-type--body", title: "Foundations / Type / Body", sourcePath: "preview/type-body.html", height: 500 },
  "foundations-spacing--scale": { id: "foundations-spacing--scale", title: "Foundations / Spacing / Scale", sourcePath: "preview/spacing-scale.html", height: 400 },
  "foundations-spacing--radii": { id: "foundations-spacing--radii", title: "Foundations / Spacing / Radii", sourcePath: "preview/spacing-radii.html", height: 320 },
  "foundations-spacing--elevation": { id: "foundations-spacing--elevation", title: "Foundations / Spacing / Elevation", sourcePath: "preview/spacing-elevation.html", height: 320 },
  "foundations-icons--library": { id: "foundations-icons--library", title: "Foundations / Icons / Library", sourcePath: "preview/brand-icons.html", height: 600 },
  "foundations-brand--logo": { id: "foundations-brand--logo", title: "Foundations / Brand / Logo", sourcePath: "preview/brand-logo.html", height: 360 },

  "primitives-severitypill--default": { id: "primitives-severitypill--default", title: "Primitives / SeverityPill / Default", sourcePath: "storybook-static/stories/primitive-severity-pill.html", height: 220 },
  "primitives-confidencebadge--default": { id: "primitives-confidencebadge--default", title: "Primitives / ConfidenceBadge / Default", sourcePath: "storybook-static/stories/primitive-confidence-badge.html", height: 240 },
  "primitives-freshnessbadge--default": { id: "primitives-freshnessbadge--default", title: "Primitives / FreshnessBadge / Default", sourcePath: "storybook-static/stories/primitive-freshness-badge.html", height: 240 },
  "primitives-deltaindicator--default": { id: "primitives-deltaindicator--default", title: "Primitives / DeltaIndicator / Default", sourcePath: "storybook-static/stories/primitive-delta-indicator.html", height: 220 },
  "primitives-statusbadge--default": { id: "primitives-statusbadge--default", title: "Primitives / StatusBadge / Default", sourcePath: "storybook-static/stories/primitive-status-badge.html", height: 240 },
  "primitives-confidence--matrix": { id: "primitives-confidence--matrix", title: "Primitives / ConfidenceBadge / Matrix", sourcePath: "preview/primitives-confidence.html", height: 620 },
  "primitives-freshness--matrix": { id: "primitives-freshness--matrix", title: "Primitives / FreshnessBadge / Matrix", sourcePath: "preview/primitives-freshness.html", height: 560 },
  "primitives-delta--matrix": { id: "primitives-delta--matrix", title: "Primitives / DeltaIndicator / Matrix", sourcePath: "preview/primitives-delta.html", height: 520 },
  "primitives-status--matrix": { id: "primitives-status--matrix", title: "Primitives / StatusBadge / Matrix", sourcePath: "preview/primitives-status.html", height: 560 },
  "primitives-sourceattribution--default": { id: "primitives-sourceattribution--default", title: "Primitives / SourceAttribution / Default", sourcePath: "preview/primitives-source.html", height: 420 },

  "agentic-states--all": { id: "agentic-states--all", title: "Agentic / States / All states", sourcePath: "preview/agentic-states.html", height: 1100 },
  "agentic-flow--full-run": { id: "agentic-flow--full-run", title: "Agentic / Flow / Full live run", sourcePath: "preview/agentic-flow.html", height: 900 },
  "agentic-inbox--learned": { id: "agentic-inbox--learned", title: "Agentic / Inbox / Learned from you", sourcePath: "preview/agentic-inbox.html", height: 800 },
  "agentic-states-deck--reference": { id: "agentic-states-deck--reference", title: "Agentic / States / Reference deck", sourcePath: "preview/agentic-states-deck.html", height: 900 },

  "composites-kpi--grid": { id: "composites-kpi--grid", title: "Composites / KPI / Grid", sourcePath: "preview/components-kpi.html", height: 380 },
  "composites-gauge--trustscore": { id: "composites-gauge--trustscore", title: "Composites / Gauge / Trust score", sourcePath: "preview/components-gauge.html", height: 360 },
  "composites-statusbanner--default": { id: "composites-statusbanner--default", title: "Composites / StatusBanner / Default", sourcePath: "preview/components-status-banner.html", height: 320 },
  "composites-recommendation--default": { id: "composites-recommendation--default", title: "Composites / Recommendation / Default", sourcePath: "preview/components-recommendation.html", height: 600 },
  "composites-execution--timeline": { id: "composites-execution--timeline", title: "Composites / ExecutionTimeline / In-flight & completed", sourcePath: "preview/components-execution.html", height: 700 },
  "composites-execsummary--card": { id: "composites-execsummary--card", title: "Composites / ExecutiveSummary / Card", sourcePath: "preview/composite-exec-summary.html", height: 600 },
  "composites-impact--rollup": { id: "composites-impact--rollup", title: "Composites / ImpactRollup / Card", sourcePath: "preview/composite-impact-rollup.html", height: 600 },
  "composites-scenario--projection": { id: "composites-scenario--projection", title: "Composites / ScenarioProjection / Card", sourcePath: "preview/composite-scenario.html", height: 600 },
  "composites-chat--default": { id: "composites-chat--default", title: "Composites / Chat / Conversation", sourcePath: "preview/composite-chat.html", height: 800 },
  "composites-chat--ai-modal": { id: "composites-chat--ai-modal", title: "Composites / Chat / AI modal chat", sourcePath: "preview/ai-modal-chat.html", height: 800 },
  "composites-chat--history": { id: "composites-chat--history", title: "Composites / Chat / AI chat history", sourcePath: "preview/ai-chat-history.html", height: 600 },
  "composites-chat--feedback": { id: "composites-chat--feedback", title: "Composites / Chat / AI feedback / sources", sourcePath: "preview/ai-feedback-sources.html", height: 600 },
  "composites-chat--launch-button": { id: "composites-chat--launch-button", title: "Composites / Chat / AI launch button", sourcePath: "preview/ai-launch-button.html", height: 520 },
  "composites-chat--ai-loader": { id: "composites-chat--ai-loader", title: "Composites / Chat / AI loader", sourcePath: "preview/ai-loader.html", height: 320 },
  "composites-graph--dag": { id: "composites-graph--dag", title: "Composites / Graph / DAG kit", sourcePath: "preview/dag-graph-kit.html", height: 700 },
  "composites-table--default": { id: "composites-table--default", title: "Composites / Table / Default", sourcePath: "preview/components-table.html", height: 600 },
  "composites-buttons--default": { id: "composites-buttons--default", title: "Composites / Buttons / Default", sourcePath: "preview/components-buttons.html", height: 200 },
  "composites-badges--default": { id: "composites-badges--default", title: "Composites / Badges / Default", sourcePath: "preview/components-badges.html", height: 240 },

  "templates--dashboard": { id: "templates--dashboard", title: "Templates / Dashboard", sourcePath: "preview/template-dashboard.html", height: 1100 },
  "templates--triage": { id: "templates--triage", title: "Templates / Triage", sourcePath: "preview/template-triage.html", height: 1100 },
  "templates--investigation": { id: "templates--investigation", title: "Templates / Investigation", sourcePath: "preview/template-investigation.html", height: 1100 },
  "templates--review": { id: "templates--review", title: "Templates / ReviewQueue", sourcePath: "preview/template-review.html", height: 1100 },
  "templates--conversation": { id: "templates--conversation", title: "Templates / Conversation", sourcePath: "preview/template-conversation.html", height: 1100 },
  "states-matrix--all": { id: "states-matrix--all", title: "States / Matrix / All states", sourcePath: "preview/states-matrix.html", height: 1400 },

  "kits-cmdb--workspace": { id: "kits-cmdb--workspace", title: "Kits / CMDB / Workspace", sourcePath: "ui_kits/cmdb/index.html", height: 1200, scriptMode: "global" },
  "kits-shidoka--components": { id: "kits-shidoka--components", title: "Kits / Shidoka / Components", sourcePath: "ui_kits/shidoka-components/index.html", height: 1200, scriptMode: "global" },
  "kits-shidoka--shell": { id: "kits-shidoka--shell", title: "Kits / Shidoka / Shell", sourcePath: "ui_kits/shidoka-shell/index.html", height: 1200 },
  "kits-shidoka--charts": { id: "kits-shidoka--charts", title: "Kits / Shidoka / Charts", sourcePath: "ui_kits/shidoka-charts/index.html", height: 1200 }
} as const satisfies Record<string, StaticSurfaceSpec>;

export type StaticSurfaceId = keyof typeof STATIC_SURFACES;

export const getStaticSurfaceSpec = (id: StaticSurfaceId): StaticSurfaceSpec => STATIC_SURFACES[id];

export const getStaticHtml = (sourcePath: string) => {
  const html = htmlModules[`../${sourcePath}`];
  if (!html) {
    throw new Error(`Missing static HTML source for ${sourcePath}`);
  }
  return html;
};
