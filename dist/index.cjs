"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AgentStatusBar: () => AgentStatusBar,
  AgenticFlow: () => AgenticFlow,
  AgenticInbox: () => AgenticInbox,
  AgenticMenu: () => AgenticMenu,
  AgenticStates: () => AgenticStates,
  AiChatHistory: () => AiChatHistory,
  AiFeedbackSources: () => AiFeedbackSources,
  AiLaunchButton: () => AiLaunchButton,
  AiLoader: () => AiLoader,
  AiModalChat: () => AiModalChat,
  Badges: () => Badges_default,
  BrandIcons: () => BrandIcons,
  BrandLogo: () => BrandLogo,
  Buttons: () => Buttons_default,
  Chat: () => Chat_default,
  CmdbWorkspace: () => CmdbWorkspace,
  ColorsBrand: () => ColorsBrand,
  ColorsChart: () => ColorsChart,
  ColorsSeverity: () => ColorsSeverity,
  ColorsSlate: () => ColorsSlate,
  ColorsStatus: () => ColorsStatus,
  ConfidenceBadge: () => ConfidenceBadge,
  ConversationTemplate: () => ConversationTemplate,
  DagGraphKit: () => DagGraphKit,
  DashboardTemplate: () => DashboardTemplate,
  DataTable: () => DataTable_default,
  DeltaIndicator: () => DeltaIndicator,
  ExecSummary: () => ExecSummary_default,
  ExecutionTimeline: () => ExecutionTimeline_default,
  FreshnessBadge: () => FreshnessBadge,
  HandoffCard: () => HandoffCard,
  HumanInputRequest: () => HumanInputRequest,
  ImpactRollup: () => ImpactRollup_default,
  InvestigationTemplate: () => InvestigationTemplate,
  KpiGrid: () => KpiGrid_default,
  PrimitivesConfidence: () => PrimitivesConfidence,
  PrimitivesDelta: () => PrimitivesDelta,
  PrimitivesFreshness: () => PrimitivesFreshness,
  PrimitivesSource: () => PrimitivesSource,
  PrimitivesStatus: () => PrimitivesStatus,
  Recommendation: () => Recommendation_default,
  ReviewTemplate: () => ReviewTemplate,
  ScenarioProjection: () => ScenarioProjection_default,
  SeverityPill: () => SeverityPill,
  ShidokaCharts: () => ShidokaCharts,
  ShidokaComponents: () => ShidokaComponents,
  ShidokaShell: () => ShidokaShell,
  SourceAttribution: () => SourceAttribution,
  SpacingElevation: () => SpacingElevation,
  SpacingRadii: () => SpacingRadii,
  SpacingScale: () => SpacingScale,
  StateDeltaToast: () => StateDeltaToast,
  StatesMatrix: () => StatesMatrix,
  StatusBadge: () => StatusBadge,
  StatusBanner: () => StatusBanner_default,
  StepTimeline: () => StepTimeline,
  ToolCallCard: () => ToolCallCard,
  TriageTemplate: () => TriageTemplate,
  TrustGauge: () => TrustGauge_default,
  TypeBody: () => TypeBody,
  TypeDisplay: () => TypeDisplay
});
module.exports = __toCommonJS(index_exports);

// storybook/src/primitives/SeverityPill.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var styles = {
  CRITICAL: { color: "var(--sev-critical-fg)", background: "var(--sev-critical-bg)", borderColor: "var(--sev-critical-border)" },
  HIGH: { color: "var(--sev-high-fg)", background: "var(--sev-high-bg)", borderColor: "var(--sev-high-border)" },
  MEDIUM: { color: "var(--sev-medium-fg)", background: "var(--sev-medium-bg)", borderColor: "var(--sev-medium-border)" },
  LOW: { color: "var(--sev-low-fg)", background: "var(--sev-low-bg)", borderColor: "var(--sev-low-border)" }
};
var SeverityPill = ({ severity, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { style: {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  padding: "4px 10px",
  borderRadius: 999,
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  fontFamily: "var(--font-sans)",
  border: "1px solid",
  ...styles[severity]
}, children: [
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { width: 6, height: 6, borderRadius: 999, background: "currentColor" } }),
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: severity }),
  label ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { style: { fontWeight: 500, letterSpacing: 0, textTransform: "none", opacity: 0.75, marginLeft: 4 }, children: [
    "\xB7 ",
    label
  ] }) : null
] });

// storybook/src/_shared/AgenticMenu.tsx
var import_react = __toESM(require("react"));
var import_jsx_runtime2 = require("react/jsx-runtime");
var AgenticMenu = ({ title, meta, actions, disabled, accent, children }) => {
  const rootRef = (0, import_react.useRef)(null);
  const [open, setOpen] = (0, import_react.useState)(false);
  const [confirming, setConfirming] = (0, import_react.useState)(null);
  const [toast, setToast] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    if (!open) return void 0;
    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) {
        setOpen(false);
        setConfirming(null);
      }
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        setConfirming(null);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);
  (0, import_react.useEffect)(() => {
    if (!toast) return void 0;
    const timeout = window.setTimeout(() => setToast(null), 3600);
    return () => window.clearTimeout(timeout);
  }, [toast]);
  const runAction = (action) => {
    action.onSelect?.();
    setToast(action.toast ?? action.label);
    setOpen(false);
    setConfirming(null);
  };
  if (disabled) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "kds-agentic-wrap", ref: rootRef, style: accent ? { "--agentic-accent": accent } : void 0, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "span",
      {
        className: "agentic",
        tabIndex: 0,
        role: "button",
        "aria-haspopup": "menu",
        "aria-expanded": open,
        onClick: () => {
          setOpen((value) => !value);
          setConfirming(null);
        },
        onKeyDown: (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setOpen((value) => !value);
            setConfirming(null);
          }
        },
        children
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "agentic-pop", role: "menu", "data-open": open ? "true" : void 0, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("header", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "ap-title", children: title }),
        meta && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "ap-meta", children: meta })
      ] }),
      !confirming ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "ap-actions", children: actions.map((action, index) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react.default.Fragment, { children: [
        index === actions.length - 1 && action.destructive && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "ap-divider" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "button",
          {
            type: "button",
            className: `ap-action ${action.destructive ? "is-destructive" : ""}`,
            onClick: () => {
              if (action.destructive) {
                setConfirming(action);
                return;
              }
              runAction(action);
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { children: [
              action.label,
              action.description && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "ap-sub", children: action.description })
            ] })
          }
        )
      ] }, action.id)) }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "ap-confirm", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { children: confirming.confirmText ?? "This teaches the agent and may affect future similar items. Continue?" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "ap-confirm-row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", onClick: () => setConfirming(null), children: "Cancel" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: "ap-primary", onClick: () => runAction(confirming), children: confirming.confirmLabel ?? "Yes, continue" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "agentic-toast", "data-show": toast ? "true" : void 0, role: "status", "aria-live": "polite", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "at-dot" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: toast }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", onClick: () => setToast(null), children: "Undo" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", onClick: () => setToast(null), children: "View inbox" })
    ] })
  ] });
};

// storybook/src/primitives/ConfidenceBadge.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var confidenceTone = (value, role) => {
  if (role === "readonly") return "readonly";
  if (value === null) return "none";
  if (value < 50) return "advisory";
  if (value < 70) return "caution";
  return "high";
};
var defaultActions = (value, onOverride, onTeach) => value === null ? [
  { id: "run", label: "Run agent scoring", description: "Derive a confidence value now", toast: "Agent triggered - scoring now", onSelect: onOverride },
  { id: "manual", label: "Mark as manually tracked", toast: "Set to manual tracking" }
] : [
  { id: "override", label: "Override confidence", description: "Set your own value for this item", toast: "Override queued - agent re-scoring now", onSelect: onOverride },
  { id: "evidence", label: "Ask for more evidence", description: "Agent will re-derive with extra sources", toast: "Asked agent for additional evidence" },
  { id: "snooze", label: "Snooze for 24h", description: "Hide from triage, keep score", toast: "Snoozed for 24h" },
  {
    id: "teach",
    label: "Teach the agent",
    description: "Adjusts future scoring for similar items",
    toast: "Taught the agent - added to inbox",
    destructive: true,
    confirmText: "Teaching the agent will affect how similar items are scored going forward. Continue?",
    confirmLabel: "Yes, teach",
    onSelect: onTeach
  }
];
var ConfidenceBadge = ({
  value,
  role = "full",
  showCheck = value !== null && value >= 90,
  actions,
  onOverride,
  onTeach
}) => {
  const tone = confidenceTone(value, role);
  const display = value === null ? "no confidence" : `${value}% confidence`;
  const badge = /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: `kds-confidence kds-confidence--${tone}`, children: [
    showCheck && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { "aria-hidden": "true", children: "\u2713" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "agentic-label", children: value === null ? `- ${display}` : display }),
    role !== "readonly" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "agentic-chev kds-agentic-chev", "aria-hidden": "true", children: "\u2022\u2022\u2022" })
  ] });
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    AgenticMenu,
    {
      title: value === null ? "No score yet" : "Agent decision",
      meta: value === null ? "value null" : `score ${(value / 100).toFixed(2)}`,
      actions: actions ?? defaultActions(value, onOverride, onTeach),
      disabled: role === "readonly",
      accent: tone === "caution" ? "#B45309" : void 0,
      children: badge
    }
  );
};

// storybook/src/primitives/FreshnessBadge.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var freshnessActions = (stale) => [
  { id: "refresh", label: "Force refresh", description: stale ? "Queue a source re-sync" : "Re-check this source now", toast: stale ? "Refresh queued - ETA 2m" : "Refresh queued - ETA 30s" },
  { id: "threshold", label: "Change stale threshold", toast: "Threshold editor opened" },
  ...stale ? [{ id: "notify", label: "Notify owner", description: "Ask the data owner to verify", toast: "Owner notified - slack + email" }] : [],
  { id: "pin", label: "Pin as trusted source", destructive: true, toast: "Pinned as trusted source", confirmText: "Pinning this source changes freshness handling for similar cards. Continue?", confirmLabel: "Pin source" }
];
var FreshnessBadge = ({ ageDays, threshold = 7, label, actions }) => {
  const stale = ageDays > threshold;
  const display = label ?? (ageDays === 0 ? "Fresh - updated 12 min ago" : stale ? `Stale - ${ageDays} days` : `${ageDays}d ago`);
  const badge = /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "span",
    {
      className: "kds-badge-agentic",
      style: {
        background: stale ? "var(--k-status-warning-10)" : "var(--bg-2)",
        color: stale ? "var(--k-status-warning-110)" : "var(--fg-2)",
        borderColor: stale ? "var(--k-status-warning-20)" : "var(--border-1)"
      },
      role: "status",
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "kds-dot" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "agentic-label", children: display }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "agentic-chev kds-agentic-chev", "aria-hidden": "true", children: "\u2022\u2022\u2022" })
      ]
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(AgenticMenu, { title: "Freshness controls", meta: `${ageDays}d / ${threshold}d threshold`, actions: actions ?? freshnessActions(stale), children: badge });
};

// storybook/src/primitives/StatusBadge.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var map = {
  Pending: ["var(--wf-pending)", "var(--k-status-warning-10)", "var(--k-status-warning-20)"],
  Approved: ["var(--wf-approved)", "var(--k-spruce-10)", "var(--k-spruce-20)"],
  Executed: ["var(--wf-executed)", "var(--k-spruce-10)", "var(--k-spruce-20)"],
  Rejected: ["var(--fg-muted)", "var(--bg-2)", "var(--border-1)"],
  Healthy: ["var(--status-healthy)", "var(--k-status-success-10)", "var(--k-status-success-20)"],
  Degraded: ["var(--status-degraded)", "var(--k-status-warning-10)", "var(--k-status-warning-20)"],
  Impacted: ["var(--status-impacted)", "var(--k-status-error-10)", "var(--k-status-error-20)"],
  Unknown: ["var(--fg-muted)", "var(--bg-2)", "var(--border-1)"]
};
var statusActions = (status) => {
  if (status === "Pending") {
    return [
      { id: "approve", label: "Advance to Approved", toast: "Advanced to Approved" },
      { id: "reassign", label: "Reassign reviewer", toast: "Reassigned to A. Ortiz" },
      { id: "note", label: "Add note", toast: "Note added to audit trail" },
      { id: "reject", label: "Reject and close", destructive: true, toast: "Rejected and closed" }
    ];
  }
  if (status === "Executed") {
    return [
      { id: "timeline", label: "View execution timeline", toast: "Timeline opened" },
      { id: "note", label: "Add note", toast: "Note added" },
      { id: "rollback", label: "Rollback change", destructive: true, toast: "Rollback requested" }
    ];
  }
  return [
    { id: "open", label: "Open details", toast: "Details opened" },
    { id: "audit", label: "View audit trail", toast: "Audit trail opened" }
  ];
};
var StatusBadge = ({ status, actions }) => {
  const [fg, bg, bd] = map[status];
  const badge = /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("span", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "4px 10px",
    borderRadius: 999,
    fontFamily: "var(--font-sans)",
    fontSize: 12,
    fontWeight: 500,
    color: fg,
    background: bg,
    border: `1px solid ${bd}`
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { style: { width: 6, height: 6, borderRadius: 999, background: "currentColor" } }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "agentic-label", children: status }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "agentic-chev kds-agentic-chev", "aria-hidden": "true", children: "\u2022\u2022\u2022" })
  ] });
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(AgenticMenu, { title: "Status actions", meta: status, actions: actions ?? statusActions(status), children: badge });
};

// storybook/src/primitives/DeltaIndicator.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var DeltaIndicator = ({
  delta,
  unit = "%",
  direction,
  invertSemantics = false,
  referenceLabel = "vs last week",
  actions
}) => {
  const dir = direction ?? (delta >= 0 ? "up" : "down");
  const desirable = invertSemantics ? dir === "down" : dir === "up";
  const sign = delta >= 0 ? "+" : "";
  const badge = /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: "kds-badge-agentic", style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    fontFamily: "var(--font-display)",
    fontSize: 18,
    fontWeight: 500,
    fontVariantNumeric: "tabular-nums",
    color: desirable ? "var(--k-status-success-110)" : "var(--k-status-error-110)",
    background: "#fff",
    borderColor: "var(--border-1)"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "svg",
      {
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        children: dir === "up" ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M7 17 17 7" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M7 7h10v10" })
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M7 7l10 10" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M17 7v10H7" })
        ] })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { children: [
      sign,
      delta,
      unit
    ] }),
    referenceLabel && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { style: { fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-muted)", marginLeft: 4 }, children: referenceLabel }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "agentic-chev kds-agentic-chev", "aria-hidden": "true", children: "\u2022\u2022\u2022" })
  ] });
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    AgenticMenu,
    {
      title: "Metric change",
      meta: `${sign}${delta}${unit}`,
      actions: actions ?? [
        { id: "explain", label: "Explain this change", toast: "Opened change explanation" },
        { id: "alert", label: "Set alert threshold", toast: "Alert created" },
        { id: "compare", label: "Compare periods", toast: "Compare sidebar opened" },
        { id: "teach", label: "Teach the agent what caused this", destructive: true, toast: "Taught the agent - cause saved" }
      ],
      children: badge
    }
  );
};

// storybook/src/primitives/SourceAttribution.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var SourceAttribution = ({ dataset, timestamp, confidence, rationale, actions }) => {
  const content = /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { style: { display: "inline-flex", alignItems: "center", gap: 6 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { style: { width: 6, height: 6, borderRadius: 999, background: "var(--k-spruce-60)" } }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "agentic-label", style: { fontWeight: 500, color: "var(--k-spruce-70)" }, children: "Powered by agentic AI" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "agentic-chev kds-agentic-chev", "aria-hidden": "true", children: "\u2022\u2022\u2022" })
  ] });
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("footer", { style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    flexWrap: "wrap",
    padding: "10px 14px",
    background: "var(--k-ai-spruce-06)",
    borderTop: "1px solid var(--border-1)",
    borderRadius: "0 0 8px 8px",
    fontFamily: "var(--font-sans)",
    fontSize: 11,
    color: "var(--fg-muted)"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      AgenticMenu,
      {
        title: "Source controls",
        meta: dataset,
        actions: actions ?? [
          { id: "record", label: "Open source record", toast: "Opened source record" },
          { id: "trace", label: "Open provenance trace", toast: "Provenance trace opened" },
          { id: "dispute", label: "Dispute this source", destructive: true, toast: "Dispute queued - agent will relearn" }
        ],
        children: content
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { style: { color: "var(--border-2)" }, children: "\xB7" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { style: { fontFamily: "var(--font-mono)" }, children: [
      "dataset: ",
      dataset
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { style: { color: "var(--border-2)" }, children: "\xB7" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { style: { fontFamily: "var(--font-mono)" }, children: timestamp }),
    typeof confidence === "number" && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { style: { color: "var(--border-2)" }, children: "\xB7" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { style: { fontFamily: "var(--font-mono)" }, children: [
        "confidence ",
        confidence,
        "%"
      ] })
    ] }),
    rationale && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { style: { marginLeft: "auto", color: "var(--k-spruce-60)", textDecoration: "underline", cursor: "pointer" }, children: rationale })
  ] });
};

// storybook/src/primitives/PrimitivesConfidence.tsx
var import_react2 = __toESM(require("react"));
var import_jsx_runtime8 = require("react/jsx-runtime");
var badges = [
  {
    label: "98% confidence",
    cls: "psc-c-1",
    accent: "#1D4ED8",
    hasSvg: true,
    popTitle: "Agent decision",
    popMeta: "score 0.98",
    actions: [
      {
        act: "override",
        toast: "Override queued \xB7 agent re-scoring now",
        label: "Override confidence",
        sub: "Set your own value for this item",
        icon: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("svg", { className: "ap-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { d: "M3 12h18M3 6h18M3 18h18" }) })
      },
      {
        act: "evidence",
        toast: "Asked agent for additional evidence",
        label: "Ask for more evidence",
        sub: "Agent will re-derive with extra sources",
        icon: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("svg", { className: "ap-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("circle", { cx: "12", cy: "12", r: "9" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { d: "M12 17v.01M12 7a2.5 2.5 0 1 1 2.5 2.5c-1 .5-2 1.5-2 3" })
        ] })
      },
      {
        act: "snooze",
        toast: "Snoozed for 24h",
        label: "Snooze for 24h",
        sub: "Hide from triage, keep score",
        icon: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("svg", { className: "ap-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("circle", { cx: "12", cy: "12", r: "9" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { d: "M12 7v5l3 2" })
        ] })
      },
      {
        dividerBefore: true,
        act: "teach",
        destructive: true,
        label: "Teach the agent",
        sub: "Adjusts future scoring for similar items",
        icon: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("svg", { className: "ap-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v16" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20" })
        ] })
      }
    ],
    confirm: {
      forAct: "teach",
      message: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
        "Teaching the agent will affect how ",
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("b", { children: "all" }),
        " similar items are scored going forward. Continue?"
      ] }),
      cancelLabel: "Cancel",
      confirmLabel: "Yes, teach",
      confirmToast: "Taught the agent \xB7 added to inbox"
    },
    footLabel: "value \u2265 0.9 \xB7 high confidence"
  },
  {
    label: "82% confidence",
    cls: "psc-c-1",
    popTitle: "Agent decision",
    popMeta: "score 0.82",
    actions: [
      { toast: "Override applied", label: "Override confidence" },
      { toast: "Evidence requested", label: "Ask for more evidence" },
      { toast: "Snoozed", label: "Snooze for 24h" },
      { dividerBefore: true, act: "teach", destructive: true, label: "Teach the agent" }
    ],
    confirm: {
      forAct: "teach",
      message: "Future scoring for similar items will shift. Continue?",
      cancelLabel: "Cancel",
      confirmLabel: "Yes, teach"
    },
    footLabel: "value 0.7\u20130.9"
  },
  {
    label: "64% confidence",
    cls: "psc-c-3",
    accent: "#B45309",
    popTitle: "Agent decision",
    popMeta: "score 0.64 \xB7 caution",
    actions: [
      { toast: "Override applied", label: "Override confidence" },
      { toast: "Evidence requested \xB7 3 sources queued", label: "Ask for more evidence" },
      { toast: "Snoozed", label: "Snooze for 24h" },
      { dividerBefore: true, act: "teach", destructive: true, label: "Teach the agent" }
    ],
    confirm: {
      forAct: "teach",
      message: "This will adjust future scoring for items with similar traits. Continue?",
      cancelLabel: "Cancel",
      confirmLabel: "Yes, teach"
    },
    footLabel: "value 0.5\u20130.7 \xB7 caution"
  },
  {
    label: "41% confidence",
    cls: "psc-c-2",
    popTitle: "Agent decision",
    popMeta: "score 0.41 \xB7 advisory",
    actions: [
      { toast: "Override applied", label: "Override confidence" },
      { toast: "Evidence requested", label: "Ask for more evidence" },
      { toast: "Snoozed", label: "Snooze for 24h" },
      { dividerBefore: true, act: "teach", destructive: true, label: "Teach the agent" }
    ],
    confirm: {
      forAct: "teach",
      message: "Future scoring will shift. Continue?",
      cancelLabel: "Cancel",
      confirmLabel: "Yes, teach"
    },
    footLabel: "value < 0.5 \xB7 advisory"
  },
  {
    label: "\u2014 no confidence",
    cls: "psc-c-2",
    popTitle: "No score yet",
    popMeta: "value null",
    actions: [
      {
        toast: "Agent triggered \xB7 scoring now",
        label: "Run agent scoring",
        sub: "Derive a confidence value now",
        icon: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("svg", { className: "ap-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { d: "M21 2v6h-6" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { d: "M3 12a9 9 0 0 1 15-6.7L21 8" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { d: "M3 22v-6h6" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { d: "M21 12a9 9 0 0 1-15 6.7L3 16" })
        ] })
      },
      { toast: "Set to manual tracking", label: "Mark as manually tracked" }
    ],
    footLabel: "value null"
  }
];
function PrimitivesConfidence() {
  const [openPop, setOpenPop] = (0, import_react2.useState)(null);
  const [confirmFor, setConfirmFor] = (0, import_react2.useState)(null);
  const [toast, setToast] = (0, import_react2.useState)(null);
  (0, import_react2.useEffect)(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpenPop(null);
        setConfirmFor(null);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  (0, import_react2.useEffect)(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3800);
    return () => clearTimeout(t);
  }, [toast]);
  const handleTrigger = (key) => {
    if (openPop === key) {
      setOpenPop(null);
      setConfirmFor(null);
    } else {
      setOpenPop(key);
      setConfirmFor(null);
    }
  };
  const handleAction = (action, badgeKey) => {
    if (action.destructive && action.act) {
      setConfirmFor(`${badgeKey}:${action.act}`);
      return;
    }
    const msg = action.toast || action.label;
    setOpenPop(null);
    setConfirmFor(null);
    setToast({ text: msg });
  };
  const handleConfirm = (confirmToast) => {
    setOpenPop(null);
    setConfirmFor(null);
    if (confirmToast) {
      setToast({ text: confirmToast });
    } else {
      setToast({ text: "Taught the agent \xB7 added to inbox" });
    }
  };
  const handleCancel = () => {
    setOpenPop(null);
    setConfirmFor(null);
  };
  const handleOutsideClick = (e) => {
    const target = e.target;
    if (!target.closest(".agentic") && !target.closest(".agentic-pop")) {
      setOpenPop(null);
      setConfirmFor(null);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "psc-body", onClick: handleOutsideClick, children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "psc-hdr", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "psc-t", children: "ConfidenceBadge \xB7 agentic" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { className: "psc-hint", children: [
        "Click a badge \xB7 ",
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("b", { children: "override" }),
        ", ",
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("b", { children: "ask for evidence" }),
        ", ",
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("b", { children: "snooze" }),
        ", or",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("b", { children: "teach the agent" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "psc-row", children: badges.map((b, i) => {
      const key = `conf-${i}`;
      const isOpen = openPop === key;
      const showConfirm = b.confirm && confirmFor === `${key}:${b.confirm.forAct}`;
      return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "psc-cell", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          "span",
          {
            className: "agentic",
            tabIndex: 0,
            "aria-haspopup": "true",
            "aria-expanded": isOpen,
            role: "button",
            style: b.accent ? { "--agentic-accent": b.accent } : void 0,
            onClick: (e) => {
              e.stopPropagation();
              handleTrigger(key);
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { className: `psc-badge ${b.cls}`, children: [
              b.hasSvg && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                "svg",
                {
                  width: "10",
                  height: "10",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2.5",
                  strokeLinecap: "round",
                  children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("polyline", { points: "20 6 9 17 4 12" })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "agentic-label", children: b.label }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "agentic-chev", "aria-hidden": "true", children: "\u2022\u2022\u2022" })
            ] })
          }
        ),
        isOpen && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
          "div",
          {
            className: "agentic-pop",
            role: "menu",
            "data-open": "true",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("header", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "ap-title", children: b.popTitle }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "ap-meta", children: b.popMeta })
              ] }),
              !showConfirm && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "ap-actions", children: b.actions.map((a, ai) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_react2.default.Fragment, { children: [
                a.dividerBefore && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "ap-divider" }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
                  "button",
                  {
                    type: "button",
                    className: `ap-action${a.destructive ? " is-destructive" : ""}`,
                    onClick: () => handleAction(a, key),
                    children: [
                      a.icon,
                      a.label,
                      a.sub && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "ap-sub", children: a.sub })
                    ]
                  }
                )
              ] }, ai)) }),
              showConfirm && b.confirm && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "ap-confirm", children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { children: b.confirm.message }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "ap-confirm-row", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("button", { type: "button", onClick: handleCancel, children: b.confirm.cancelLabel }),
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                    "button",
                    {
                      type: "button",
                      className: "ap-primary",
                      onClick: () => handleConfirm(b.confirm.confirmToast),
                      children: b.confirm.confirmLabel
                    }
                  )
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "psc-lbl", children: b.footLabel })
      ] }, key);
    }) }),
    toast && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "agentic-toast", "data-show": "true", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "at-dot" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "at-msg", children: toast.text }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("button", { type: "button", onClick: () => setToast(null), children: "Undo" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("button", { type: "button", onClick: () => setToast(null), children: "View inbox" })
    ] })
  ] });
}

// storybook/src/primitives/PrimitivesDelta.tsx
var import_react3 = __toESM(require("react"));
var import_jsx_runtime9 = require("react/jsx-runtime");
var cells = [
  {
    value: "92.4%",
    deltaLabel: "+2.1 pp vs last wk",
    deltaCls: "psc-up",
    arrowSvg: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "svg",
      {
        width: "10",
        height: "10",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "3",
        strokeLinecap: "round",
        children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("polyline", { points: "18 15 12 9 6 15" })
      }
    ),
    popTitle: "Change driver",
    popMeta: "7d window",
    actions: [
      {
        toast: "Opened change explanation",
        label: "Explain this change",
        sub: "Agent will surface top contributing CIs",
        icon: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("svg", { className: "ap-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("circle", { cx: "12", cy: "12", r: "9" }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", { d: "M12 17v.01M12 7a2.5 2.5 0 1 1 2.5 2.5c-1 .5-2 1.5-2 3" })
        ] })
      },
      {
        toast: "Alert created \xB7 > \xB13 pp",
        label: "Set alert threshold",
        sub: "Notify me when change exceeds \xB1X pp",
        icon: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("svg", { className: "ap-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", { d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", { d: "M13.7 21a2 2 0 0 1-3.4 0" })
        ] })
      },
      {
        toast: "Compare sidebar opened",
        label: "Compare periods",
        sub: "7d vs 30d vs QoQ",
        icon: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("svg", { className: "ap-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", { d: "M3 3v18h18" }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", { d: "M7 14l4-4 4 4 5-5" })
        ] })
      },
      {
        dividerBefore: true,
        act: "teach",
        destructive: true,
        label: "Teach the agent what caused this"
      }
    ],
    confirm: {
      forAct: "teach",
      message: "Labels this change with a cause the agent will use to detect similar patterns. Continue?",
      cancelLabel: "Cancel",
      confirmLabel: "Label & teach",
      confirmToast: "Labeled \xB7 pattern added to detection model"
    },
    footLabel: "up \xB7 good"
  },
  {
    value: "418",
    deltaLabel: "\u221214 vs yesterday",
    deltaCls: "psc-dn",
    arrowSvg: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "svg",
      {
        width: "10",
        height: "10",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "3",
        strokeLinecap: "round",
        children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("polyline", { points: "6 9 12 15 18 9" })
      }
    ),
    popTitle: "Change driver",
    popMeta: "24h window",
    actions: [
      { toast: "Opened change explanation", label: "Explain this change" },
      { toast: "Alert created", label: "Set alert threshold" },
      { toast: "Compare sidebar opened", label: "Compare periods" }
    ],
    footLabel: "down \xB7 attention"
  },
  {
    value: "1,204",
    deltaLabel: "\xB10.0% \xB7 stable",
    deltaCls: "psc-flat",
    popTitle: "Change driver",
    popMeta: "30d window",
    actions: [
      { toast: "Stability rationale shown", label: "Why so stable?" },
      { toast: "Alert created", label: "Alert me on any movement" },
      { toast: "Compare sidebar opened", label: "Compare periods" }
    ],
    footLabel: "flat"
  }
];
function PrimitivesDelta() {
  const [openPop, setOpenPop] = (0, import_react3.useState)(null);
  const [confirmFor, setConfirmFor] = (0, import_react3.useState)(null);
  const [toast, setToast] = (0, import_react3.useState)(null);
  (0, import_react3.useEffect)(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpenPop(null);
        setConfirmFor(null);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  (0, import_react3.useEffect)(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3800);
    return () => clearTimeout(t);
  }, [toast]);
  const handleTrigger = (key) => {
    if (openPop === key) {
      setOpenPop(null);
      setConfirmFor(null);
    } else {
      setOpenPop(key);
      setConfirmFor(null);
    }
  };
  const handleAction = (action, badgeKey) => {
    if (action.destructive && action.act) {
      setConfirmFor(`${badgeKey}:${action.act}`);
      return;
    }
    const msg = action.toast || action.label;
    setOpenPop(null);
    setConfirmFor(null);
    setToast({ text: msg });
  };
  const handleConfirm = (confirmToast) => {
    setOpenPop(null);
    setConfirmFor(null);
    if (confirmToast) {
      setToast({ text: confirmToast });
    }
  };
  const handleCancel = () => {
    setOpenPop(null);
    setConfirmFor(null);
  };
  const handleOutsideClick = (e) => {
    const target = e.target;
    if (!target.closest(".agentic") && !target.closest(".agentic-pop")) {
      setOpenPop(null);
      setConfirmFor(null);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "psc-body", onClick: handleOutsideClick, children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "psc-hdr psc-hdr--wide", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "psc-t", children: "DeltaIndicator \xB7 agentic" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("span", { className: "psc-hint", children: [
        "Click to ",
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("b", { children: "explain change" }),
        ", ",
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("b", { children: "set alert" }),
        ", or ",
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("b", { children: "compare periods" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "psc-row psc-row--wide", children: cells.map((c, i) => {
      const key = `delta-${i}`;
      const isOpen = openPop === key;
      const showConfirm = c.confirm && confirmFor === `${key}:${c.confirm.forAct}`;
      return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "psc-cell", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "psc-num", children: c.value }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "span",
          {
            className: "agentic",
            tabIndex: 0,
            "aria-haspopup": "true",
            "aria-expanded": isOpen,
            role: "button",
            onClick: (e) => {
              e.stopPropagation();
              handleTrigger(key);
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("span", { className: `psc-delta ${c.deltaCls}`, children: [
              c.arrowSvg,
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "agentic-label", children: c.deltaLabel }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "agentic-chev", "aria-hidden": "true", children: "\u2022\u2022\u2022" })
            ] })
          }
        ),
        isOpen && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
          "div",
          {
            className: "agentic-pop",
            role: "menu",
            "data-open": "true",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("header", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "ap-title", children: c.popTitle }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "ap-meta", children: c.popMeta })
              ] }),
              !showConfirm && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "ap-actions", children: c.actions.map((a, ai) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_react3.default.Fragment, { children: [
                a.dividerBefore && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "ap-divider" }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
                  "button",
                  {
                    type: "button",
                    className: `ap-action${a.destructive ? " is-destructive" : ""}`,
                    onClick: () => handleAction(a, key),
                    children: [
                      a.icon,
                      a.label,
                      a.sub && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "ap-sub", children: a.sub })
                    ]
                  }
                )
              ] }, ai)) }),
              showConfirm && c.confirm && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "ap-confirm", children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { children: c.confirm.message }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "ap-confirm-row", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { type: "button", onClick: handleCancel, children: c.confirm.cancelLabel }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                    "button",
                    {
                      type: "button",
                      className: "ap-primary",
                      onClick: () => handleConfirm(c.confirm.confirmToast),
                      children: c.confirm.confirmLabel
                    }
                  )
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "psc-lbl", children: c.footLabel })
      ] }, key);
    }) }),
    toast && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "agentic-toast", "data-show": "true", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "at-dot" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "at-msg", children: toast.text }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { type: "button", onClick: () => setToast(null), children: "Undo" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { type: "button", onClick: () => setToast(null), children: "View inbox" })
    ] })
  ] });
}

// storybook/src/primitives/PrimitivesFreshness.tsx
var import_react4 = __toESM(require("react"));
var import_jsx_runtime10 = require("react/jsx-runtime");
var cells2 = [
  {
    badgeLabel: "Fresh \xB7 updated 12 min ago",
    badgeCls: "psc-f-fresh",
    popTitle: "Data freshness",
    popMeta: "source \xB7 svc-discovery",
    actions: [
      {
        toast: "Refresh queued \xB7 ETA 30s",
        label: "Force refresh",
        sub: "Re-pull from source of record",
        icon: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("svg", { className: "ap-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", { d: "M21 2v6h-6" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", { d: "M3 12a9 9 0 0 1 15-6.7L21 8" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", { d: "M3 22v-6h6" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", { d: "M21 12a9 9 0 0 1-15 6.7L3 16" })
        ] })
      },
      {
        toast: "Threshold editor opened",
        label: "Change stale threshold",
        sub: "Currently > 24h \xB7 per-source",
        icon: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", { className: "ap-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", { d: "M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" }) })
      },
      {
        dividerBefore: true,
        act: "pin",
        destructive: true,
        label: "Pin as trusted source",
        sub: "Bypass freshness checks for this CI",
        icon: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", { className: "ap-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", { d: "M12 17v5M5 3l14 14M9 3h10v10" }) })
      }
    ],
    confirm: {
      forAct: "pin",
      message: "Pinning will let this CI pass validation even when stale. Safe for golden sources only.",
      cancelLabel: "Cancel",
      confirmLabel: "Pin as trusted",
      confirmToast: "Pinned \xB7 freshness checks bypassed for this CI"
    },
    footLabel: "< 1h"
  },
  {
    badgeLabel: "3d 4h ago",
    badgeCls: "psc-f-ok",
    popTitle: "Data freshness",
    popMeta: "within threshold",
    actions: [
      { toast: "Refresh queued", label: "Force refresh" },
      { toast: "Threshold editor opened", label: "Change stale threshold" },
      { dividerBefore: true, act: "pin", destructive: true, label: "Pin as trusted source" }
    ],
    confirm: {
      forAct: "pin",
      message: "Pinning bypasses freshness checks. Continue?",
      cancelLabel: "Cancel",
      confirmLabel: "Pin as trusted"
    },
    footLabel: "1h \u2013 7d"
  },
  {
    badgeLabel: "Stale \xB7 34 days",
    badgeCls: "psc-f-stale",
    popTitle: "Stale \u2014 action suggested",
    popMeta: "threshold 14d",
    actions: [
      { toast: "Refresh queued \xB7 ETA 2m", label: "Force refresh" },
      { toast: "Threshold editor opened", label: "Change stale threshold" },
      {
        toast: "Owner notified \xB7 slack + email",
        label: "Notify owner",
        sub: "Alex Kim (svc-inventory)",
        icon: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("svg", { className: "ap-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", { d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", { d: "M13.7 21a2 2 0 0 1-3.4 0" })
        ] })
      },
      { dividerBefore: true, act: "pin", destructive: true, label: "Pin as trusted source" }
    ],
    confirm: {
      forAct: "pin",
      message: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
        "This source is ",
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("b", { children: "34 days" }),
        " stale. Pinning is rarely correct here. Confirm?"
      ] }),
      cancelLabel: "Cancel",
      confirmLabel: "Pin anyway"
    },
    footLabel: "past threshold"
  },
  {
    badgeLabel: "Never synced",
    badgeCls: "psc-f-dead",
    popTitle: "No data",
    popMeta: "source inactive",
    actions: [
      { toast: "Sync triggered", label: "Run initial sync" },
      { toast: "Opened connector settings", label: "Open connector" }
    ],
    footLabel: "value null"
  }
];
function PrimitivesFreshness() {
  const [openPop, setOpenPop] = (0, import_react4.useState)(null);
  const [confirmFor, setConfirmFor] = (0, import_react4.useState)(null);
  const [toast, setToast] = (0, import_react4.useState)(null);
  (0, import_react4.useEffect)(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpenPop(null);
        setConfirmFor(null);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  (0, import_react4.useEffect)(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3800);
    return () => clearTimeout(t);
  }, [toast]);
  const handleTrigger = (key) => {
    if (openPop === key) {
      setOpenPop(null);
      setConfirmFor(null);
    } else {
      setOpenPop(key);
      setConfirmFor(null);
    }
  };
  const handleAction = (action, cellKey) => {
    if (action.destructive && action.act) {
      setConfirmFor(`${cellKey}:${action.act}`);
      return;
    }
    const msg = action.toast || action.label;
    setOpenPop(null);
    setConfirmFor(null);
    setToast({ text: msg });
  };
  const handleConfirm = (confirmToast) => {
    setOpenPop(null);
    setConfirmFor(null);
    if (confirmToast) {
      setToast({ text: confirmToast });
    }
  };
  const handleCancel = () => {
    setOpenPop(null);
    setConfirmFor(null);
  };
  const handleOutsideClick = (e) => {
    const target = e.target;
    if (!target.closest(".agentic") && !target.closest(".agentic-pop")) {
      setOpenPop(null);
      setConfirmFor(null);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "psc-body", onClick: handleOutsideClick, children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "psc-hdr", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "psc-t", children: "FreshnessBadge \xB7 agentic" }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { className: "psc-hint", children: [
        "Click to ",
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("b", { children: "force refresh" }),
        ", ",
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("b", { children: "change threshold" }),
        ", or ",
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("b", { children: "pin as trusted" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "psc-row", children: cells2.map((c, i) => {
      const key = `fresh-${i}`;
      const isOpen = openPop === key;
      const showConfirm = c.confirm && confirmFor === `${key}:${c.confirm.forAct}`;
      return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "psc-cell", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "span",
          {
            className: "agentic",
            tabIndex: 0,
            "aria-haspopup": "true",
            "aria-expanded": isOpen,
            role: "button",
            onClick: (e) => {
              e.stopPropagation();
              handleTrigger(key);
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { className: `psc-badge ${c.badgeCls}`, children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "psc-dot" }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "agentic-label", children: c.badgeLabel }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "agentic-chev", "aria-hidden": "true", children: "\u2022\u2022\u2022" })
            ] })
          }
        ),
        isOpen && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
          "div",
          {
            className: "agentic-pop",
            role: "menu",
            "data-open": "true",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("header", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "ap-title", children: c.popTitle }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "ap-meta", children: c.popMeta })
              ] }),
              !showConfirm && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "ap-actions", children: c.actions.map((a, ai) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_react4.default.Fragment, { children: [
                a.dividerBefore && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "ap-divider" }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                  "button",
                  {
                    type: "button",
                    className: `ap-action${a.destructive ? " is-destructive" : ""}`,
                    onClick: () => handleAction(a, key),
                    children: [
                      a.icon,
                      a.label,
                      a.sub && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "ap-sub", children: a.sub })
                    ]
                  }
                )
              ] }, ai)) }),
              showConfirm && c.confirm && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "ap-confirm", children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { children: c.confirm.message }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "ap-confirm-row", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", { type: "button", onClick: handleCancel, children: c.confirm.cancelLabel }),
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                    "button",
                    {
                      type: "button",
                      className: "ap-primary",
                      onClick: () => handleConfirm(c.confirm.confirmToast),
                      children: c.confirm.confirmLabel
                    }
                  )
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "psc-lbl", children: c.footLabel })
      ] }, key);
    }) }),
    toast && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "agentic-toast", "data-show": "true", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "at-dot" }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "at-msg", children: toast.text }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", { type: "button", onClick: () => setToast(null), children: "Undo" }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", { type: "button", onClick: () => setToast(null), children: "View inbox" })
    ] })
  ] });
}

// storybook/src/primitives/PrimitivesSource.tsx
var import_react5 = __toESM(require("react"));
var import_jsx_runtime11 = require("react/jsx-runtime");
var cells3 = [
  {
    badgeContent: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }) }),
      "from ",
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("b", { children: "ServiceNow CMDB" })
    ] }),
    badgeCls: "psc-src",
    popTitle: "Source of record",
    popMeta: "sync 12m ago",
    actions: [
      {
        toast: "Opened ServiceNow record",
        label: "Open in ServiceNow",
        sub: "svc.123 \xB7 asset management",
        icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("svg", { className: "ap-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("polyline", { points: "15 3 21 3 21 9" }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("line", { x1: "10", y1: "14", x2: "21", y2: "3" })
        ] })
      },
      {
        toast: "Provenance trace opened",
        label: "View provenance trace",
        sub: "Who wrote, when, via which pipeline",
        icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("svg", { className: "ap-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("circle", { cx: "6", cy: "6", r: "3" }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("circle", { cx: "18", cy: "18", r: "3" }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: "M6 9v6a3 3 0 0 0 3 3h6" })
        ] })
      },
      {
        dividerBefore: true,
        act: "dispute",
        destructive: true,
        label: "Dispute this source"
      }
    ],
    confirm: {
      forAct: "dispute",
      message: "Dispute flags the source for owner review and removes its data from live dashboards until resolved.",
      cancelLabel: "Cancel",
      confirmLabel: "File dispute",
      confirmToast: "Source disputed \xB7 flagged to owner"
    },
    footLabel: "system of record"
  },
  {
    badgeContent: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: "M12 2l2.4 5.2L20 8l-4 4 1 5.6L12 15l-5 2.6L8 12l-4-4 5.6-.8z" }) }),
      "derived by ",
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("b", { children: "Reconciliation Agent" })
    ] }),
    badgeCls: "psc-src psc-ai",
    popTitle: "Agentic source",
    popMeta: "confidence 0.84",
    actions: [
      {
        toast: "Derivation chain opened",
        label: "Show derivation chain",
        sub: "6 inputs \xB7 2 rules \xB7 1 LLM call",
        icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("svg", { className: "ap-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("circle", { cx: "6", cy: "6", r: "3" }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("circle", { cx: "18", cy: "18", r: "3" }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: "M6 9v6a3 3 0 0 0 3 3h6" })
        ] })
      },
      {
        toast: "Re-derivation queued \xB7 ETA 45s",
        label: "Request re-derivation",
        sub: "With current inputs, fresh pass",
        icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("svg", { className: "ap-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: "M21 2v6h-6" }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: "M3 12a9 9 0 0 1 15-6.7L21 8" }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: "M3 22v-6h6" }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: "M21 12a9 9 0 0 1-15 6.7L3 16" })
        ] })
      },
      { toast: "Alternative hypotheses shown", label: "Show alternatives" },
      {
        dividerBefore: true,
        act: "dispute",
        destructive: true,
        label: "Dispute & teach the agent"
      }
    ],
    confirm: {
      forAct: "dispute",
      message: "Marks this derivation as incorrect. The agent updates its priors for similar cases.",
      cancelLabel: "Cancel",
      confirmLabel: "Dispute & teach",
      confirmToast: "Disputed \xB7 agent priors updated \xB7 added to inbox"
    },
    footLabel: "agentic \xB7 inspectable"
  },
  {
    badgeContent: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: "M16 21v-2a4 4 0 0 0-8 0v2" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("circle", { cx: "12", cy: "7", r: "4" })
      ] }),
      "entered by ",
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("b", { children: "A. Kim" })
    ] }),
    badgeCls: "psc-src",
    popTitle: "Human-entered",
    popMeta: "13 days ago",
    actions: [
      { toast: "Profile opened", label: "View who entered this" },
      { toast: "Verification requested from owner", label: "Ask owner to verify" },
      {
        dividerBefore: true,
        act: "dispute",
        destructive: true,
        label: "Dispute this value"
      }
    ],
    confirm: {
      forAct: "dispute",
      message: "Owner will be notified and the value flagged for re-entry.",
      cancelLabel: "Cancel",
      confirmLabel: "File dispute"
    },
    footLabel: "human \xB7 attributable"
  }
];
function PrimitivesSource() {
  const [openPop, setOpenPop] = (0, import_react5.useState)(null);
  const [confirmFor, setConfirmFor] = (0, import_react5.useState)(null);
  const [toast, setToast] = (0, import_react5.useState)(null);
  (0, import_react5.useEffect)(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpenPop(null);
        setConfirmFor(null);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  (0, import_react5.useEffect)(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3800);
    return () => clearTimeout(t);
  }, [toast]);
  const handleTrigger = (key) => {
    if (openPop === key) {
      setOpenPop(null);
      setConfirmFor(null);
    } else {
      setOpenPop(key);
      setConfirmFor(null);
    }
  };
  const handleAction = (action, cellKey) => {
    if (action.destructive && action.act) {
      setConfirmFor(`${cellKey}:${action.act}`);
      return;
    }
    const msg = action.toast || action.label;
    setOpenPop(null);
    setConfirmFor(null);
    setToast({ text: msg });
  };
  const handleConfirm = (confirmToast) => {
    setOpenPop(null);
    setConfirmFor(null);
    if (confirmToast) {
      setToast({ text: confirmToast });
    }
  };
  const handleCancel = () => {
    setOpenPop(null);
    setConfirmFor(null);
  };
  const handleOutsideClick = (e) => {
    const target = e.target;
    if (!target.closest(".agentic") && !target.closest(".agentic-pop")) {
      setOpenPop(null);
      setConfirmFor(null);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "psc-body", onClick: handleOutsideClick, children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "psc-hdr", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "psc-t", children: "SourceAttribution \xB7 agentic" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { className: "psc-hint", children: [
        "Click to ",
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("b", { children: "open source" }),
        ", ",
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("b", { children: "dispute" }),
        ", or ",
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("b", { children: "request re-derivation" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "psc-row", children: cells3.map((c, i) => {
      const key = `src-${i}`;
      const isOpen = openPop === key;
      const showConfirm = c.confirm && confirmFor === `${key}:${c.confirm.forAct}`;
      return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "psc-cell", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          "span",
          {
            className: "agentic",
            tabIndex: 0,
            "aria-haspopup": "true",
            "aria-expanded": isOpen,
            role: "button",
            onClick: (e) => {
              e.stopPropagation();
              handleTrigger(key);
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { className: c.badgeCls, children: [
              c.badgeContent,
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "agentic-label", style: { display: "none" } }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "agentic-chev", "aria-hidden": "true", children: "\u2022\u2022\u2022" })
            ] })
          }
        ),
        isOpen && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
          "div",
          {
            className: "agentic-pop",
            role: "menu",
            "data-open": "true",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("header", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "ap-title", children: c.popTitle }),
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "ap-meta", children: c.popMeta })
              ] }),
              !showConfirm && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "ap-actions", children: c.actions.map((a, ai) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_react5.default.Fragment, { children: [
                a.dividerBefore && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "ap-divider" }),
                /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
                  "button",
                  {
                    type: "button",
                    className: `ap-action${a.destructive ? " is-destructive" : ""}`,
                    onClick: () => handleAction(a, key),
                    children: [
                      a.icon,
                      a.label,
                      a.sub && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "ap-sub", children: a.sub })
                    ]
                  }
                )
              ] }, ai)) }),
              showConfirm && c.confirm && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "ap-confirm", children: [
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { children: c.confirm.message }),
                /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "ap-confirm-row", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("button", { type: "button", onClick: handleCancel, children: c.confirm.cancelLabel }),
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                    "button",
                    {
                      type: "button",
                      className: "ap-primary",
                      onClick: () => handleConfirm(c.confirm.confirmToast),
                      children: c.confirm.confirmLabel
                    }
                  )
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "psc-lbl", children: c.footLabel })
      ] }, key);
    }) }),
    toast && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "agentic-toast", "data-show": "true", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "at-dot" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "at-msg", children: toast.text }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("button", { type: "button", onClick: () => setToast(null), children: "Undo" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("button", { type: "button", onClick: () => setToast(null), children: "View inbox" })
    ] })
  ] });
}

// storybook/src/primitives/PrimitivesStatus.tsx
var import_react6 = __toESM(require("react"));
var import_jsx_runtime12 = require("react/jsx-runtime");
var cells4 = [
  {
    pillLabel: "Pending review",
    pillCls: "psc-p-pending",
    popTitle: "Workflow state",
    popMeta: "step 1/3",
    actions: [
      {
        toast: "Advanced to Approved",
        label: "Approve & advance",
        sub: "Moves to Executed queue",
        icon: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("svg", { className: "ap-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("polyline", { points: "20 6 9 17 4 12" }) })
      },
      {
        toast: "Reassigned to A. Ortiz",
        label: "Reassign reviewer",
        sub: "Pick from team \xB7 routes notification",
        icon: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("svg", { className: "ap-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("path", { d: "M16 21v-2a4 4 0 0 0-8 0v2" }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("circle", { cx: "12", cy: "7", r: "4" })
        ] })
      },
      {
        toast: "Note added to audit trail",
        label: "Add note",
        sub: "Visible on the audit trail",
        icon: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("svg", { className: "ap-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v16" }) })
      },
      {
        dividerBefore: true,
        act: "reject",
        destructive: true,
        label: "Reject & close"
      }
    ],
    confirm: {
      forAct: "reject",
      message: "Rejection is logged permanently. Owner will be notified with your reason.",
      cancelLabel: "Cancel",
      confirmLabel: "Reject",
      confirmToast: "Rejected \xB7 owner notified"
    },
    footLabel: "awaiting human"
  },
  {
    pillLabel: "Approved",
    pillCls: "psc-p-approved",
    popTitle: "Workflow state",
    popMeta: "step 2/3",
    actions: [
      { toast: "Execution scheduled", label: "Advance to Execute" },
      { toast: "Note added", label: "Add note" },
      {
        dividerBefore: true,
        act: "revert",
        destructive: true,
        label: "Revert approval"
      }
    ],
    confirm: {
      forAct: "revert",
      message: "This will move the item back to Pending and notify the previous reviewer.",
      cancelLabel: "Cancel",
      confirmLabel: "Revert"
    },
    footLabel: "ready to run"
  },
  {
    pillLabel: "Executed \xB7 2h ago",
    pillCls: "psc-p-executed",
    popTitle: "Workflow state",
    popMeta: "step 3/3",
    actions: [
      { toast: "Timeline opened", label: "View execution timeline" },
      { toast: "Note added", label: "Add note" },
      {
        dividerBefore: true,
        act: "rollback",
        destructive: true,
        label: "Rollback change"
      }
    ],
    confirm: {
      forAct: "rollback",
      message: "Rollback will undo 14 downstream writes. This is audit-logged and notifies the CAB.",
      cancelLabel: "Cancel",
      confirmLabel: "Roll back",
      confirmToast: "Rollback started \xB7 CAB notified"
    },
    footLabel: "done \xB7 reversible"
  },
  {
    pillLabel: "Rejected",
    pillCls: "psc-p-rejected",
    popTitle: "Closed",
    popMeta: "final",
    actions: [
      { toast: "Reopened \xB7 Pending", label: "Reopen" },
      { toast: "Audit trail opened", label: "View audit trail" }
    ],
    footLabel: "closed"
  },
  {
    pillLabel: "Monitoring",
    pillCls: "psc-p-monitoring",
    popTitle: "Agent watching",
    popMeta: "auto-escalate in 48h",
    actions: [
      { toast: "Escalated now", label: "Escalate now" },
      { toast: "Monitoring stopped", label: "Stop monitoring" }
    ],
    footLabel: "agent-owned"
  }
];
function PrimitivesStatus() {
  const [openPop, setOpenPop] = (0, import_react6.useState)(null);
  const [confirmFor, setConfirmFor] = (0, import_react6.useState)(null);
  const [toast, setToast] = (0, import_react6.useState)(null);
  (0, import_react6.useEffect)(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpenPop(null);
        setConfirmFor(null);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  (0, import_react6.useEffect)(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3800);
    return () => clearTimeout(t);
  }, [toast]);
  const handleTrigger = (key) => {
    if (openPop === key) {
      setOpenPop(null);
      setConfirmFor(null);
    } else {
      setOpenPop(key);
      setConfirmFor(null);
    }
  };
  const handleAction = (action, cellKey) => {
    if (action.destructive && action.act) {
      setConfirmFor(`${cellKey}:${action.act}`);
      return;
    }
    const msg = action.toast || action.label;
    setOpenPop(null);
    setConfirmFor(null);
    setToast({ text: msg });
  };
  const handleConfirm = (confirmToast) => {
    setOpenPop(null);
    setConfirmFor(null);
    if (confirmToast) {
      setToast({ text: confirmToast });
    }
  };
  const handleCancel = () => {
    setOpenPop(null);
    setConfirmFor(null);
  };
  const handleOutsideClick = (e) => {
    const target = e.target;
    if (!target.closest(".agentic") && !target.closest(".agentic-pop")) {
      setOpenPop(null);
      setConfirmFor(null);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "psc-body", onClick: handleOutsideClick, children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "psc-hdr", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "psc-t", children: "StatusBadge (workflow) \xB7 agentic" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("span", { className: "psc-hint", children: [
        "Click to ",
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("b", { children: "advance" }),
        ", ",
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("b", { children: "reject" }),
        ", ",
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("b", { children: "reassign" }),
        ", or ",
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("b", { children: "add note" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "psc-row", children: cells4.map((c, i) => {
      const key = `status-${i}`;
      const isOpen = openPop === key;
      const showConfirm = c.confirm && confirmFor === `${key}:${c.confirm.forAct}`;
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "psc-cell", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          "span",
          {
            className: "agentic",
            tabIndex: 0,
            "aria-haspopup": "true",
            "aria-expanded": isOpen,
            role: "button",
            onClick: (e) => {
              e.stopPropagation();
              handleTrigger(key);
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("span", { className: `psc-pill ${c.pillCls}`, children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "psc-status-dot" }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "agentic-label", children: c.pillLabel }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "agentic-chev", "aria-hidden": "true", children: "\u2022\u2022\u2022" })
            ] })
          }
        ),
        isOpen && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
          "div",
          {
            className: "agentic-pop",
            role: "menu",
            "data-open": "true",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("header", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "ap-title", children: c.popTitle }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "ap-meta", children: c.popMeta })
              ] }),
              !showConfirm && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "ap-actions", children: c.actions.map((a, ai) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_react6.default.Fragment, { children: [
                a.dividerBefore && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "ap-divider" }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
                  "button",
                  {
                    type: "button",
                    className: `ap-action${a.destructive ? " is-destructive" : ""}`,
                    onClick: () => handleAction(a, key),
                    children: [
                      a.icon,
                      a.label,
                      a.sub && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "ap-sub", children: a.sub })
                    ]
                  }
                )
              ] }, ai)) }),
              showConfirm && c.confirm && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "ap-confirm", children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { children: c.confirm.message }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "ap-confirm-row", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("button", { type: "button", onClick: handleCancel, children: c.confirm.cancelLabel }),
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                    "button",
                    {
                      type: "button",
                      className: "ap-primary",
                      onClick: () => handleConfirm(c.confirm.confirmToast),
                      children: c.confirm.confirmLabel
                    }
                  )
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "psc-lbl", children: c.footLabel })
      ] }, key);
    }) }),
    toast && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "agentic-toast", "data-show": "true", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "at-dot" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "at-msg", children: toast.text }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("button", { type: "button", onClick: () => setToast(null), children: "Undo" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("button", { type: "button", onClick: () => setToast(null), children: "View inbox" })
    ] })
  ] });
}

// storybook/src/agentic/AgentStatusBar.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
var copyByState = {
  started: { label: "Starting run", meta: "step 1 of 6", primary: "Pause", secondary: "Cancel" },
  thinking: { label: "Planning - gathering signals", meta: "step 2 of 6 - 4.2s", primary: "Pause", secondary: "Cancel" },
  streaming: { label: "Responding", meta: "142 tokens - 18 t/s", primary: "Stop", secondary: "Inject correction" },
  waiting: { label: "Waiting for you - approval required", meta: "on step 3 - write impact", primary: "Review", secondary: "Skip step" },
  paused: { label: "Paused by you", meta: "3 steps remaining", primary: "Resume", secondary: "Discard" },
  done: { label: "Done - 6 steps in 38s", meta: "2 tools - 1 handoff - 0 errors", primary: "View trace", secondary: "Branch from end" }
};
var normalizeState = (state) => state === "started" ? "thinking" : state;
var AgentStatusBar = ({
  state,
  agent = "Reconciliation Agent",
  label,
  meta,
  step,
  stepThrough,
  showStepThrough,
  primaryAction,
  secondaryAction,
  onPrimary,
  onSecondary,
  onPauseResume,
  onBranch,
  onStepThroughChange
}) => {
  const copy = copyByState[state];
  const stateClass = normalizeState(state);
  const mainAction = primaryAction ?? copy.primary;
  const supportingAction = secondaryAction ?? copy.secondary;
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: `ka-status ka-status--${stateClass} ${stateClass === "thinking" || stateClass === "streaming" ? "ka-edge" : ""}`, role: "status", "aria-live": "polite", children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "ka-status-dot" }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "ka-status-label", children: label ?? copy.label }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "ka-status-meta", children: meta ?? step ?? copy.meta }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "ka-status-controls", children: [
      (showStepThrough || onStepThroughChange) && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("label", { className: "ka-status-step", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("input", { type: "checkbox", checked: !!stepThrough, onChange: (event) => onStepThroughChange?.(event.target.checked) }),
        "Step-through"
      ] }),
      supportingAction && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("button", { className: `ka-button ${state === "done" ? "" : "ka-button-danger"}`, type: "button", onClick: onSecondary ?? onBranch, children: supportingAction }),
      mainAction && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "button",
        {
          className: `ka-button ${state === "waiting" ? "ka-button-warn" : state === "paused" || state === "done" ? "ka-button-primary" : ""}`,
          type: "button",
          onClick: onPrimary ?? onPauseResume,
          children: mainAction
        }
      )
    ] })
  ] });
};

// storybook/src/agentic/ToolCallCard.tsx
var import_react7 = __toESM(require("react"));
var import_jsx_runtime14 = require("react/jsx-runtime");
var normalizeToolState = (state = "pending") => {
  if (state === "requested") return "pending";
  if (state === "executing") return "running";
  if (state === "completed") return "ok";
  if (state === "failed") return "err";
  return state;
};
var statusCopy = {
  pending: { title: "About to call", status: "Awaiting approval" },
  running: { title: "Calling", status: "Running" },
  ok: { title: "Returned", status: "OK" },
  err: { title: "Failed", status: "Error" }
};
var formatValue = (value) => {
  if (typeof value === "string") return `"${value}"`;
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  return JSON.stringify(value);
};
var valueClass = (value) => typeof value === "number" || typeof value === "boolean" ? "ka-tool-number" : "ka-tool-string";
var ToolCallCard = ({
  toolName,
  args,
  state = "pending",
  destructive,
  stepLabel = "step 2 of 6",
  meta,
  resultSummary,
  gateLabel = "step-through mode - on",
  editableKeys = [],
  onApprove,
  onApproveAll,
  onEditArgs,
  onReject,
  onRetry,
  onHandoff
}) => {
  const normalized = normalizeToolState(state);
  const isPending = normalized === "pending";
  const copy = statusCopy[normalized];
  const bodyMeta = meta ?? (normalized === "ok" ? resultSummary ?? "230ms - 22 rows - expand to view payload" : normalized === "err" ? "permission denied - retry budget 2 of 3 left" : `${stepLabel} - ServiceNow read`);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: `ka-tool ka-tool--${normalized} ka-edge ${destructive ? "ka-tool--destructive" : ""}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "ka-tool-head", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "ka-tool-icon", "aria-hidden": "true", children: normalized === "ok" ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CheckIcon, {}) : normalized === "err" ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(AlertIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CodeIcon, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "ka-tool-title", children: [
          copy.title,
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "ka-tool-name", children: toolName }),
          normalized === "ok" && resultSummary ? ` - ${resultSummary}` : ""
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "ka-tool-meta", children: bodyMeta })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "ka-tool-status", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "ka-tool-status-dot" }),
        copy.status
      ] })
    ] }),
    (isPending || normalized === "err") && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "ka-tool-body", children: [
      isPending && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("pre", { className: "ka-tool-args", "aria-label": `${toolName} arguments`, children: Object.entries(args).map(([key, value], index) => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_react7.default.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "ka-tool-key", children: key }),
        ":",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: `${valueClass(value)} ${editableKeys.includes(key) ? "ka-tool-editable" : ""}`, children: formatValue(value) }),
        index < Object.keys(args).length - 1 ? "\n" : ""
      ] }, key)) }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "ka-tool-actions", children: [
        isPending ? /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("button", { className: "ka-button ka-button-primary", type: "button", onClick: onApprove, children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CheckIcon, {}),
            "Approve and run"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("button", { className: "ka-button", type: "button", onClick: onEditArgs, children: "Edit args" }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("button", { className: "ka-button", type: "button", onClick: onReject, children: "Skip" })
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("button", { className: "ka-button", type: "button", onClick: onRetry, children: "Retry as reviewer" }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("button", { className: "ka-button", type: "button", onClick: onHandoff, children: "Hand off to admin" }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("button", { className: "ka-button", type: "button", onClick: onReject, children: "Branch - readonly" })
        ] }),
        onApproveAll && isPending && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("button", { className: "ka-button", type: "button", onClick: onApproveAll, children: "Approve all" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "ka-tool-gate", children: gateLabel })
      ] })
    ] })
  ] });
};
var CodeIcon = () => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M16 18l6-6-6-6M8 6l-6 6 6 6" }) });
var CheckIcon = () => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("polyline", { points: "20 6 9 17 4 12" }) });
var AlertIcon = () => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", "aria-hidden": "true", children: [
  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
] });

// storybook/src/agentic/HumanInputRequest.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
var HumanInputRequest = ({
  question,
  options,
  agent = "Reconciliation Agent - needs your call",
  timestamp = "14:08:22",
  context = "CI web-gateway-02 has two plausible owners. The deploy edit is structural, the config edit is cosmetic, but the recency rule would pick the later config owner.",
  blockingLabel = "blocking - agent paused",
  primaryOption,
  onChoose
}) => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "ka-hir", role: "group", "aria-label": "Human input required", children: [
  /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "ka-hir-head", children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "ka-hir-glyph", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(QuestionIcon, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "ka-hir-agent", children: agent }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "ka-hir-time", children: timestamp })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "ka-hir-question", children: question }),
  context && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "ka-hir-context", children: context }),
  /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "ka-hir-actions", children: [
    options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      "button",
      {
        className: `ka-button ${option === primaryOption ? "ka-button-primary" : ""}`,
        type: "button",
        onClick: () => onChoose?.(option),
        children: option
      },
      option
    )),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "ka-hir-blocking", children: blockingLabel })
  ] })
] });
var QuestionIcon = () => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", "aria-hidden": "true", children: [
  /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
  /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
] });

// storybook/src/agentic/HandoffCard.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
var initials = (name) => name.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase();
var HandoffCard = ({
  from,
  to,
  kind = "agent",
  fromRole = "general agent",
  toRole,
  fromKind = "agent",
  toKind,
  fromInitials,
  toInitials,
  reason = "Handing off - needs specialist skill",
  context = "Carrying: 22 orphan CI list - payments-svc context - user threshold <= 25",
  showActions,
  onTrace,
  onAck
}) => {
  const resolvedToKind = toKind ?? (kind === "human" ? "human" : "specialist");
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "ka-handoff ka-edge", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Party, { name: from, role: fromRole, kind: fromKind, initials: fromInitials }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "ka-handoff-arrow", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "ka-handoff-reason", children: reason }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("svg", { className: "ka-handoff-line", viewBox: "0 0 200 10", preserveAspectRatio: "none", "aria-hidden": "true", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("line", { x1: "0", y1: "5", x2: "194", y2: "5", stroke: "#475569", strokeWidth: "1", vectorEffect: "non-scaling-stroke" }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("polyline", { points: "189,1 194,5 189,9", fill: "none", stroke: "#475569", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", vectorEffect: "non-scaling-stroke" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "ka-handoff-context", children: context })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Party, { name: to, role: toRole ?? (resolvedToKind === "human" ? "CMDB owner" : "specialist agent"), kind: resolvedToKind, initials: toInitials })
    ] }),
    (showActions || onTrace || onAck) && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "ka-handoff-actions", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("button", { className: "ka-button", type: "button", onClick: onTrace, children: "View handoff trace" }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("button", { className: "ka-button ka-button-primary", type: "button", onClick: onAck, children: "Accept and continue" })
    ] })
  ] });
};
var Party = ({ name, role, kind, initials: providedInitials }) => /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "ka-handoff-party", children: [
  /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: `ka-handoff-avatar ka-handoff-avatar--${kind}`, children: kind === "agent" ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "ka-glyph" }) : providedInitials ?? initials(name) }),
  /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "ka-handoff-name", children: name }),
  /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "ka-handoff-role", children: role })
] });

// storybook/src/agentic/StateDeltaToast.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
var StateDeltaToast = ({
  field,
  oldValue,
  newValue,
  subject,
  context,
  tone = "positive",
  actions,
  onUndo,
  onView
}) => {
  const actionLabels = actions ?? [onUndo ? "Undo" : void 0, onView ? "Why?" : "Open"].filter(Boolean);
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: `ka-toast ${tone === "warm" ? "ka-toast--warm" : ""}`, role: "status", "aria-live": "polite", children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "ka-toast-glyph", "aria-hidden": "true", children: tone === "warm" ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(CheckIcon2, {}) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(PlusIcon, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "ka-toast-body", children: [
      "Agent updated ",
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("strong", { children: subject ?? field }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "ka-toast-diff", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "ka-toast-from", children: String(oldValue) }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "ka-toast-arrow", children: "->" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "ka-toast-to", children: String(newValue) }),
        context && /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { className: "ka-toast-context", children: [
          "- ",
          context
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "ka-toast-actions", children: actionLabels.map((action) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "button",
      {
        className: "ka-toast-action",
        type: "button",
        onClick: action.toLowerCase().includes("undo") ? onUndo : onView,
        children: action
      },
      action
    )) })
  ] });
};
var PlusIcon = () => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("path", { d: "M12 5v14M5 12h14" }) });
var CheckIcon2 = () => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("polyline", { points: "6 12 10 16 18 8" }) });

// storybook/src/agentic/StepTimeline.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
var StepTimeline = ({
  steps,
  showActiveControls = true,
  onEditStep,
  onApproveOnce,
  onApproveAll
}) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "ka-timeline", children: steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: `ka-step ka-step--${step.state}`, children: [
  /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "ka-step-rail", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "ka-step-marker" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "ka-step-label", children: step.title }),
    step.note && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "ka-step-note", children: step.note }),
    step.state === "active" && showActiveControls && /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "ka-step-actions", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("button", { className: "ka-button", type: "button", onClick: () => onEditStep?.(index), children: "Edit step" }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("button", { className: "ka-button", type: "button", onClick: () => onApproveOnce?.(index), children: "Approve once" }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("button", { className: "ka-button ka-button-primary", type: "button", onClick: onApproveAll, children: "Approve all" })
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "ka-step-time", children: step.timestamp ?? (step.state === "active" ? "running..." : step.state === "pending" ? "queued" : "") })
] }, `${step.title}-${index}`)) });

// storybook/src/agentic/AgenticStates.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
var SparkSvg = () => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("path", { d: "M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" }) });
var AiGlyph = () => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-ai-glyph", "aria-hidden": "true" });
var PauseIcon = () => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", children: [
  /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("rect", { x: "6", y: "5", width: "4", height: "14" }),
  /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("rect", { x: "14", y: "5", width: "4", height: "14" })
] });
var CodeIcon2 = () => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("path", { d: "M16 18l6-6-6-6M8 6l-6 6 6 6" }) });
var CheckIcon3 = () => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("polyline", { points: "20 6 9 17 4 12" }) });
var ErrorIcon = () => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", children: [
  /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
  /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
] });
var QuestionIcon2 = () => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", children: [
  /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
  /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
] });
var PlusIcon2 = () => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("path", { d: "M12 5v14M5 12h14" }) });
var CheckSmallIcon = () => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("polyline", { points: "6 12 10 16 18 8" }) });
var ListIcon = () => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("path", { d: "M3 12h18M3 6h18M3 18h18" }) });
var InfoIcon = () => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", children: [
  /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("path", { d: "M12 8v4M12 16h.01" }),
  /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("circle", { cx: "12", cy: "12", r: "10" })
] });
var ArrowSvg = () => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("svg", { viewBox: "0 0 200 10", preserveAspectRatio: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("line", { x1: "0", y1: "5", x2: "194", y2: "5", stroke: "#475569", strokeWidth: "1", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("polyline", { points: "189,1 194,5 189,9", fill: "none", stroke: "#475569", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", vectorEffect: "non-scaling-stroke" })
] });
var AgenticStates = () => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-wrap", children: [
  /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("section", { className: "agsc-card agsc-card-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-eyebrow", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(SparkSvg, {}),
      "Agentic interaction states"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h2", { children: "Agentic interaction states" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("p", { className: "agsc-sub", children: [
      "Six primitives that surface what the agent is doing ",
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("em", { children: "right now" }),
      " \u2014 thinking, calling tools, asking for input, walking through a plan, handing off, and updating shared state. They complement the ",
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("em", { children: "post-hoc" }),
      " agentic primitives (ConfidenceBadge, FreshnessBadge, etc.) that let users override decisions ",
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("em", { children: "after" }),
      " the fact: these new components let users ",
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "pause, edit, approve, branch, and correct" }),
      " the agent ",
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "during" }),
      " a run."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-kicker", children: "Visual contract" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-specs", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("li", { children: [
        "All live agentic surfaces use the AI gradient border (",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "spruce-60 \u2194 warm-red-50" }),
        ", 28% \u03B1) on white \u2014 the same vocabulary as ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "ChatMessage" }),
        " and ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "SnapshotCard" }),
        "."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("li", { children: [
        "Activity is signalled by a single moving element: a pulsing dot (thinking), a streaming caret (response), an animated timeline marker (step active). No spinners, no progress bars except inside ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "StepTimeline" }),
        " rows."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("li", { children: [
        "Every primitive ships with a ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "step-through gate" }),
        ": the user can pause, edit args, approve individually, branch, or inject a correction without leaving the surface."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("li", { children: [
        "Audit-trail consequence: every interactive state, when actioned, writes to the ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("em", { children: "Learned from you" }),
        " inbox via ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "preview/agentic.js" }),
        "."
      ] })
    ] }) })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("section", { className: "agsc-card agsc-card-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-eyebrow", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(AiGlyph, {}),
      "AgentStatusBar \xB7 5 states"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h2", { children: "AgentStatusBar" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "agsc-sub", children: "A persistent header above any agentic surface (chat, modal, side panel, DAG). Communicates the agent's current state in two lines: an animated dot, a verb, and a step counter \u2014 plus controls to pause/resume/cancel." }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-demo-grid", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-asb agsc-asb-thinking agsc-ai-edge", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-asb-dot" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-asb-label", children: "Planning \xB7 gathering signals" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-asb-meta", children: "step 2 of 6 \xB7 4.2s" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-asb-controls", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("button", { className: "agsc-btn", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(PauseIcon, {}),
            "Pause"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "agsc-btn agsc-btn-danger", children: "Cancel" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-asb agsc-asb-streaming agsc-ai-edge", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-asb-dot" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("span", { className: "agsc-asb-label", children: [
          "Responding",
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-caret" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-asb-meta", children: "142 tokens \xB7 18 t/s" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-asb-controls", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "agsc-btn", children: "Stop" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "agsc-btn", children: "Inject correction" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-asb agsc-asb-waiting", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-asb-dot" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-asb-label", children: "Waiting for you \xB7 approval required" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-asb-meta", children: "on step 3 \xB7 drop-table impact" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-asb-controls", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "agsc-btn", children: "Skip step" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "agsc-btn agsc-btn-warn", children: "Review" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-asb agsc-asb-paused", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-asb-dot" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-asb-label", children: "Paused by you" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-asb-meta", children: "at 14:08:22 \xB7 3 steps remaining" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-asb-controls", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "agsc-btn", children: "Discard" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "agsc-btn agsc-btn-prim", children: "Resume" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-asb agsc-asb-done", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-asb-dot" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-asb-label", children: "Done \xB7 6 steps in 38s" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-asb-meta", children: "2 tools \xB7 1 handoff \xB7 0 errors" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-asb-controls", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "agsc-btn", children: "View trace" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "agsc-btn", children: "Branch from end" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-kicker", children: "Rules" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-specs", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("li", { children: "Always pinned to the top of the agentic surface \u2014 sticky on scroll. Never inline in the message stream." }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("li", { children: "State changes animate the dot, never the bar; the bar's chrome is stable so the user's eye doesn't jitter." }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "Pause" }),
        " is universal \u2014 present on every active state, never replaced by Cancel."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "Branch from end" }),
        " on ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: ".done" }),
        " creates a fork in the conversation: same priors, new instructions."
      ] })
    ] }) })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("section", { className: "agsc-card agsc-card-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-eyebrow", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(SparkSvg, {}),
      "ToolCallCard \xB7 4 states"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h2", { children: "ToolCallCard" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "agsc-sub", children: "Inline in the chat stream, between messages. Shows the tool the agent is about to invoke (or just invoked), with editable arguments, an approval gate, and a result preview." }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-demo-grid", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-tcc agsc-tcc-pending agsc-ai-edge", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-tcc-head", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-tcc-icon", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(CodeIcon2, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-tcc-title", children: [
              "About to call ",
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-tcc-tool", children: "cmdb.query" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-tcc-meta", children: "step 2 of 6 \xB7 ServiceNow read \xB7 ~80ms expected" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-tcc-status", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-tcc-status-dot" }),
            "Awaiting approval"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-tcc-body", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-tcc-args", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-arg-k", children: "filter" }),
            ": ",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-arg-s", children: '"status:orphaned AND domain:' }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-arg-editable agsc-arg-s", children: "payments" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-arg-s", children: '"' }),
            "\n",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-arg-k", children: "window" }),
            ": ",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-arg-editable agsc-arg-s", children: '"24h"' }),
            "\n",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-arg-k", children: "limit" }),
            ": ",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-arg-editable agsc-arg-n", children: "50" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-tcc-actions", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("button", { className: "agsc-btn agsc-btn-prim", children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(CheckIcon3, {}),
              "Approve & run"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "agsc-btn", children: "Edit args" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "agsc-btn", children: "Skip" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-tcc-gate", children: "step-through mode \xB7 on" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-tcc agsc-tcc-running agsc-ai-edge", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-tcc-head", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-tcc-icon", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(CodeIcon2, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-tcc-title", children: [
            "Calling ",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-tcc-tool", children: "graph.expand" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-tcc-meta", children: "step 3 of 6 \xB7 upstream-1 \xB7 1.4s elapsed" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-tcc-status", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-tcc-status-dot" }),
          "Running"
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-tcc agsc-tcc-ok agsc-ai-edge", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-tcc-head", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-tcc-icon", style: { background: "#E0F2E8", color: "#0D5C2E" }, children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(CheckIcon3, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-tcc-title", children: [
            "Returned ",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-tcc-tool", children: "cmdb.query" }),
            " \xB7 22 rows"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-tcc-meta", children: "230ms \xB7 22 orphaned CIs \xB7 expand to view payload" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-tcc-status", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-tcc-status-dot" }),
          "OK \xB7 used in step 4"
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-tcc agsc-tcc-err agsc-ai-edge", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-tcc-head", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-tcc-icon", style: { background: "#FDE7E2", color: "#8A1E0D" }, children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(ErrorIcon, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-tcc-title", children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-tcc-tool", children: "graph.write" }),
              " \xB7 permission denied"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-tcc-meta", children: [
              "role ",
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", style: { fontSize: "10px" }, children: "access.requestor" }),
              " can read but not mutate the graph"
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-tcc-status", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-tcc-status-dot" }),
            "Error"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-tcc-body", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-tcc-actions", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "agsc-btn", children: "Retry as reviewer" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "agsc-btn", children: "Hand off to admin" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "agsc-btn", children: "Branch \xB7 readonly" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-tcc-gate", children: "retry budget \xB7 2 of 3 left" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-kicker", children: "Rules" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-specs", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("li", { children: [
        "The ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "tool name is monospaced" }),
        " and reads like a function \u2014 ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "cmdb.query" }),
        ", ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "graph.expand" }),
        ", ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "incident.create" }),
        ". Always ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "namespace.verb" }),
        ", never free text."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("li", { children: [
        "Args are ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "editable in place" }),
        " (dashed underline) when the card is in ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "pending" }),
        ". Edits trigger a rationale prompt before re-arming."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("li", { children: [
        "Step-through mode is a session toggle on the AgentStatusBar \u2014 when off, only destructive tools surface a ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "pending" }),
        " card; reads run silently and collapse to the ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "ok" }),
        " state."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("li", { children: [
        "Result rows collapse by default; click the title to expand. Long payloads paginate at 200 lines with ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("em", { children: '"Show in inspector"' }),
        "."
      ] })
    ] }) })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("section", { className: "agsc-card agsc-card-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-eyebrow", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(SparkSvg, {}),
      "HumanInputRequest \xB7 blocking"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h2", { children: "HumanInputRequest" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("p", { className: "agsc-sub", children: [
      "When the agent must stop and ask a question to proceed. Inline in the message stream, amber-tinted to break the AI gradient pattern \u2014 this is intentionally ",
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("em", { children: "not" }),
      " just another bubble."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-demo-grid", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-hir", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-hir-head", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-hir-glyph", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(QuestionIcon2, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-hir-agent", children: "Reconciliation Agent \xB7 needs your call" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-hir-ts", children: "14:08:22" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "agsc-hir-prompt", children: "The orphan has two plausible owners. Which one should I assign?" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-hir-context", children: [
          "CI ",
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "web-gateway-02" }),
          " (payments-svc) was last touched by ",
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("b", { children: "A. Ortiz" }),
          " on 12-Mar (deploy) and ",
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("b", { children: "K. Patel" }),
          " on 14-Mar (config). The deploy edit is structural, the config edit is cosmetic \u2014 but the recency rule would pick K. Patel."
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-hir-actions", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "agsc-btn", children: "Assign to A. Ortiz (structural)" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "agsc-btn", children: "Assign to K. Patel (recency)" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "agsc-btn", children: "Leave unassigned \xB7 escalate" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-hir-blocking", children: "blocking \xB7 agent paused" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-hir", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-hir-head", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-hir-glyph", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(QuestionIcon2, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-hir-agent", children: "Triage Agent \xB7 confirmation" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-hir-ts", children: "14:09:01" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "agsc-hir-prompt", children: "I'm about to retire 47 CIs. The blast radius extends past your usual threshold \u2014 should I proceed?" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-hir-context", children: [
          "Threshold: ",
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("b", { children: "\u2264 25 CIs / batch" }),
          ". This batch: ",
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("b", { children: "47 CIs" }),
          " across ",
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("b", { children: "4 BUs" }),
          ". Past 30 days you've approved 3 batches over threshold (avg 38) \u2014 none rolled back."
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-hir-actions", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "agsc-btn agsc-btn-prim", children: "Proceed (47)" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "agsc-btn", children: "Split into 2 batches" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "agsc-btn", children: "Lower threshold & cancel" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-hir-blocking", children: "blocking \xB7 14m at this prompt" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-kicker", children: "Rules" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-specs", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("li", { children: [
        "HIRs ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "break the visual rhythm on purpose" }),
        " \u2014 amber surface, never the AI gradient. The user's eye must catch it on a long scroll."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("li", { children: [
        "Always carry: a one-line question, a 2\u20133 sentence context block with named priors, and 2\u20134 named choices. Never ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("em", { children: '"Yes / No"' }),
        " alone."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "Blocking" }),
        " indicator pulses while the prompt is open. The AgentStatusBar above flips to ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "waiting" }),
        "."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("li", { children: [
        "Choosing an option records the rationale; the agent uses it as a teaching signal for similar future moments (writes to ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("em", { children: "Learned from you" }),
        ")."
      ] })
    ] }) })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("section", { className: "agsc-card", children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-eyebrow", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(SparkSvg, {}),
      "StepTimeline \xB7 live"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h2", { children: "StepTimeline" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "agsc-sub", children: "A stepped plan rendered live as the agent walks it. Right-rail companion to chat; also embeds inline in the execution composite." }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-stl", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-stl-step agsc-stl-step-done", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-stl-rail", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-stl-marker" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-stl-label", children: "Identified 22 orphans in payments-svc" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-stl-sub", children: [
            "via ",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "cmdb.query" }),
            " \xB7 230ms \xB7 22 rows"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-stl-ts", children: "+0.4s" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-stl-step agsc-stl-step-done", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-stl-rail", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-stl-marker" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-stl-label", children: "Expanded upstream graph" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-stl-sub", children: [
            "via ",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "graph.expand" }),
            " \xB7 1 affected app \xB7 checkout-api"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-stl-ts", children: "+1.8s" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-stl-step agsc-stl-step-active", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-stl-rail", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-stl-marker" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-stl-label", children: "Inferring most likely owners" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-stl-sub", children: "cross-checking 12-week commit + deploy history" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-stl-approve", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "agsc-btn", children: "Edit step" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "agsc-btn", children: "Approve once" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "agsc-btn agsc-btn-prim", children: "Approve all" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-stl-ts", children: "running..." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-stl-step agsc-stl-step-pending", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-stl-rail", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-stl-marker" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-stl-label", children: "Draft owner-assignment plan" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-stl-sub", children: "requires approval before write" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-stl-ts", children: "queued" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-stl-step agsc-stl-step-pending", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-stl-rail", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-stl-marker" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-stl-label", children: "Notify owners and open correction request" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-stl-sub", children: [
            "writes to ",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "graph" }),
            ", sends 1 email"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-stl-ts", children: "queued" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-kicker", children: "Rules" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-specs", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("li", { children: "Active marker pulses spruce; done is solid green; failed is solid warm-red with an \u2715. Never use color alone \u2014 every state pairs with a glyph." }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("li", { children: [
        "The ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "active step" }),
        " reveals row-level controls (Edit \xB7 Approve once \xB7 Approve all). Other rows are read-only."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("li", { children: [
        '"Approve all" disengages step-through mode for the rest of the run; flips the AgentStatusBar to ',
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "thinking" }),
        "/",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "streaming" }),
        " with no further gates."
      ] })
    ] }) })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("section", { className: "agsc-card", children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-eyebrow", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(SparkSvg, {}),
      "HandoffCard \xB7 2 patterns"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h2", { children: "HandoffCard" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "agsc-sub", children: "Marks the moment one agent passes work to another agent or to a human. Inline in chat, between messages." }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-demo-grid", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-hoc agsc-ai-edge", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-hoc-from", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-hoc-av agsc-hoc-av-agent", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(AiGlyph, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-hoc-name", children: "Triage" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-hoc-role", children: "general agent" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-hoc-arrow", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-hoc-reason", children: "Handing off \xB7 needs SQL skill" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-hoc-line", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(ArrowSvg, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-hoc-ctx", children: "Carrying: 22 orphan CI list \xB7 payments-svc context \xB7 user threshold \u2264 25" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-hoc-to", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-hoc-av agsc-hoc-av-specialist", children: "RA" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-hoc-name", children: "Reconciliation" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-hoc-role", children: "specialist agent" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-hoc agsc-ai-edge", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-hoc-from", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-hoc-av agsc-hoc-av-agent", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(AiGlyph, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-hoc-name", children: "Reconciliation" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-hoc-role", children: "specialist agent" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-hoc-arrow", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-hoc-reason", children: "Handing back \xB7 review needed" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-hoc-line", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(ArrowSvg, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-hoc-ctx", children: "Plan ready \xB7 47 retire actions \xB7 over batch threshold \xB7 awaiting your sign-off" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-hoc-to", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-hoc-av agsc-hoc-av-human", children: "DA" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-hoc-name", children: "D. Aaron" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-hoc-role", children: "CMDB owner" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-hoc-actions", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "agsc-btn", style: { height: 26, padding: "0 10px", fontSize: 11 }, children: "View handoff trace" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "agsc-btn agsc-btn-prim", style: { height: 26, padding: "0 10px", fontSize: 11 }, children: "Accept & continue" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-kicker", children: "Rules" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-specs", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("li", { children: "Always two-sided. Left = origin, right = recipient. Both nodes show identity (avatar) and role (function)." }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("li", { children: [
        "The ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "reason chip" }),
        " is required and must name a capability \u2014 ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("em", { children: '"needs SQL skill"' }),
        ", ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("em", { children: '"review needed"' }),
        ", ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("em", { children: '"out-of-policy escalation"' }),
        "."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("li", { children: [
        "The ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "carrying ctx" }),
        " line lists the priors travelling with the handoff. Click to inspect the full state envelope."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("li", { children: [
        "Agent \u2192 Human handoffs flip the AgentStatusBar to ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "waiting" }),
        "; Agent \u2192 Agent handoffs keep it ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "thinking" }),
        "."
      ] })
    ] }) })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("section", { className: "agsc-card agsc-card-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-eyebrow", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(SparkSvg, {}),
      "StateDeltaToast \xB7 ambient updates"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h2", { children: "StateDeltaToast" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "agsc-sub", children: "Passive notification surfacing when the agent updates a value the user can see elsewhere on the screen. Bottom-left, non-blocking, dismissable. Always shows the diff inline." }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-row-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-sdt", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-sdt-glyph", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(PlusIcon2, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-sdt-body", children: [
          "Agent updated ",
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("b", { children: "payments-svc owner" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-sdt-diff", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-sdt-from", children: "unassigned" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-sdt-arr", children: "\u2192" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-sdt-to", children: "A. Ortiz" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-sdt-ctx", children: "\xB7 confidence 0.78" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-sdt-actions", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "agsc-sdt-action", children: "Undo" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "agsc-sdt-action", children: "Why?" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-sdt", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-sdt-glyph agsc-sdt-glyph-warm", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(CheckSmallIcon, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-sdt-body", children: [
          "Trust score ",
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("b", { children: "recomputed" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-sdt-diff", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-sdt-from", children: "62%" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-sdt-arr", children: "\u2192" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-sdt-to-warm", children: "58%" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-sdt-ctx", children: "\xB7 payments domain" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-sdt-actions", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "agsc-sdt-action", children: "Why?" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "agsc-sdt-action", children: "Open" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-sdt", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-sdt-glyph", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(ListIcon, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-sdt-body", children: [
          "Filter applied \xB7 ",
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("b", { children: "severity \u2265 Warning" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-sdt-diff", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-sdt-from", children: "312 rows" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-sdt-arr", children: "\u2192" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-sdt-to", children: "94 rows" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-sdt-ctx", children: "\xB7 per your earlier instruction" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-sdt-actions", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "agsc-sdt-action", children: "Undo" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-sdt", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-sdt-glyph", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(InfoIcon, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-sdt-body", children: [
          "Threshold suggestion \xB7 ",
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("b", { children: "stale window" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-sdt-diff", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-sdt-from", children: "24h" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-sdt-arr", children: "\u2192" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-sdt-to", children: "72h" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "agsc-sdt-ctx", children: "\xB7 proposed, not applied" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-sdt-actions", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "agsc-sdt-action", children: "Apply" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "agsc-sdt-action", children: "Dismiss" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-kicker", children: "Rules" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-specs", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("li", { children: [
        "Toasts ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "always carry the diff" }),
        " (",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "from \u2192 to" }),
        "). Never just ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("em", { children: '"Updated owner"' }),
        " \u2014 show the actual values."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("li", { children: [
        "Auto-dismiss at 5s for non-destructive deltas; sticky for proposed deltas (",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("em", { children: '"not applied"' }),
        ") until the user accepts or dismisses."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("li", { children: [
        "Stack vertically, max 3 visible. Older toasts collapse into a single ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("em", { children: '"+ 4 more"' }),
        " chip."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("li", { children: [
        "Every toast is also written to ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("em", { children: "Learned from you" }),
        " \u2014 the toast is ephemeral, the audit row is permanent."
      ] })
    ] }) })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("section", { className: "agsc-card agsc-card-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "agsc-eyebrow", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(SparkSvg, {}),
      "Mapping"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h2", { children: "Which primitive renders which agent event" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "agsc-specs", style: { marginTop: 4 }, children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("table", { className: "agsc-event-table", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("th", { children: "Agent event" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("th", { children: "Primitive" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("th", { children: "Surface" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("th", { children: "Blocking?" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("tbody", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("td", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "run.started" }),
            " / ",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "run.thinking" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("td", { children: [
            "AgentStatusBar \xB7 ",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("em", { children: "thinking" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { className: "agsc-td-sans", children: "Top of surface" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { className: "agsc-td-sans", children: "No" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("td", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "step.started" }),
            " / ",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "step.completed" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { children: "StepTimeline row" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { className: "agsc-td-sans", children: "Right rail or inline" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { className: "agsc-td-sans", children: "No" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "tool.requested" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("td", { children: [
            "ToolCallCard \xB7 ",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("em", { children: "pending" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { className: "agsc-td-sans", children: "Inline in stream" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { className: "agsc-td-sans", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("b", { children: "Yes (step-through on)" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("td", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "tool.executing" }),
            " / ",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "tool.completed" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("td", { children: [
            "ToolCallCard \xB7 ",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("em", { children: "running / ok / err" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { className: "agsc-td-sans", children: "Inline in stream" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { className: "agsc-td-sans", children: "No" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "response.streaming" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("td", { children: [
            "AgentStatusBar \xB7 ",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("em", { children: "streaming" }),
            " + ChatMessage"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { className: "agsc-td-sans", children: "Top + stream" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { className: "agsc-td-sans", children: "No" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "input.required" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { children: "HumanInputRequest" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { className: "agsc-td-sans", children: "Inline in stream" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { className: "agsc-td-sans", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("b", { children: "Yes" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("td", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "handoff.dispatched" }),
            " / ",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "handoff.received" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { children: "HandoffCard" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { className: "agsc-td-sans", children: "Inline in stream" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { className: "agsc-td-sans", children: "Sometimes (\u2192 human)" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "state.delta" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { children: "StateDeltaToast" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { className: "agsc-td-sans", children: "Bottom-left ambient" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { className: "agsc-td-sans", children: "No" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("td", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "run.paused" }),
            " (by user)"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("td", { children: [
            "AgentStatusBar \xB7 ",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("em", { children: "paused" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { className: "agsc-td-sans", children: "Top" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { className: "agsc-td-sans", children: "No" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("td", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "run.completed" }),
            " / ",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("code", { className: "agsc-code", children: "run.failed" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("td", { children: [
            "AgentStatusBar \xB7 ",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("em", { children: "done" }),
            " + ExecutionTimeline"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { className: "agsc-td-sans", children: "Top + stream" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { className: "agsc-td-sans", children: "No" })
        ] })
      ] })
    ] }) })
  ] })
] });

// storybook/src/agentic/AgenticFlow.tsx
var import_react8 = require("react");
var import_jsx_runtime20 = require("react/jsx-runtime");
var AiGlyph2 = () => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-ai-glyph", "aria-hidden": "true" });
var PauseIcon2 = () => /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", children: [
  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("rect", { x: "6", y: "5", width: "4", height: "14" }),
  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("rect", { x: "14", y: "5", width: "4", height: "14" })
] });
var CodeIcon3 = () => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("path", { d: "M16 18l6-6-6-6M8 6l-6 6 6 6" }) });
var CheckIcon4 = () => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("polyline", { points: "20 6 9 17 4 12" }) });
var WarnIcon = () => /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("line", { x1: "12", y1: "6", x2: "12", y2: "12" }),
  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
] });
var QuestionIcon3 = () => /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", children: [
  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
] });
var PlusIcon3 = () => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("path", { d: "M12 5v14M5 12h14" }) });
var CheckSmallIcon2 = () => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("polyline", { points: "6 12 10 16 18 8" }) });
var AgenticFlow = () => {
  const [showToasts, setShowToasts] = (0, import_react8.useState)(true);
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-flow-frame", children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("header", { className: "agsc-flow-topbar", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("h1", { children: [
          "CMDB Triage Agent ",
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { style: { color: "var(--fg-muted)", fontWeight: 400, fontSize: 13 }, children: "\xB7 payments-svc" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-flow-crumb", children: "run \xB7 8a3f12c \xB7 started 14:08:02 \xB7 payload v3" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-flow-session", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("span", { className: "agsc-step-thru-badge", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-step-thru-sw" }),
          "STEP-THROUGH ON"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: "\xB7" }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: "D. Aaron \xB7 CMDB owner" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-flow-asb-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-asb agsc-asb-thinking agsc-ai-edge-tint", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-asb-dot" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-asb-label", children: "Working through plan \xB7 3 of 6" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-asb-meta", children: "\xB7 14.2s elapsed \xB7 2 tool calls \xB7 1 handoff" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-asb-controls", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("button", { className: "agsc-btn", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(PauseIcon2, {}),
          "Pause"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("button", { className: "agsc-btn", children: "Inject correction" }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("button", { className: "agsc-btn", children: "Branch" }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("button", { className: "agsc-btn agsc-btn-danger", children: "Cancel" })
      ] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("main", { className: "agsc-flow-stream", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-msg agsc-msg-user", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-bubble agsc-bubble-user", children: "Why did payments trust drop overnight, and can you fix the ownership gaps?" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-msg", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-msg-av" }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-bubble agsc-bubble-ai", children: "Looking at the payments domain. I'll start by pulling the orphans flagged in the overnight scan, then expand the upstream graph to see what's affected. If the picture is clean, I'll propose owner assignments and hand off to you for sign-off." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-ev", children: "step.completed \xB7 plan drafted" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-flow-tcc", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-tcc agsc-tcc-ok agsc-ai-edge", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-tcc-head", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-tcc-icon", style: { background: "#E0F2E8", color: "#0D5C2E" }, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(CheckIcon4, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-tcc-title", children: [
            "Returned ",
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-tcc-tool", children: "cmdb.query" }),
            " \xB7 22 rows"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-tcc-meta", children: "230ms \xB7 22 orphaned CIs in payments-svc \xB7 expand to view" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-tcc-status", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-tcc-status-dot" }),
          "OK"
        ] })
      ] }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-msg", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-msg-av" }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-bubble agsc-bubble-ai", children: [
          "I found ",
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("strong", { children: "22 orphaned CIs" }),
          ". Most cluster around ",
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("code", { className: "agsc-code", children: "web-gateway" }),
          " and ",
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("code", { className: "agsc-code", children: "checkout-api" }),
          ". Expanding the upstream graph now to see the blast radius."
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-ev", children: "tool.executing \xB7 graph.expand" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-flow-tcc", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-tcc agsc-tcc-running agsc-ai-edge", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-tcc-head", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-tcc-icon", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(CodeIcon3, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-tcc-title", children: [
            "Calling ",
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-tcc-tool", children: "graph.expand" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-tcc-meta", children: "depth 2 \xB7 22 root nodes \xB7 1.4s elapsed" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-tcc-status", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-tcc-status-dot" }),
          "Running"
        ] })
      ] }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-ev", children: "handoff.dispatched \xB7 needs SQL skill" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-flow-hoc", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-hoc agsc-ai-edge", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-hoc-from", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-hoc-av agsc-hoc-av-agent", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(AiGlyph2, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-hoc-name", children: "Triage" }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-hoc-role", children: "general agent" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-hoc-arrow", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-hoc-reason", children: "Handing off \xB7 needs SQL skill" }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-flow-hoc-line" }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-hoc-ctx", children: "Carrying: 22 orphan CI list \xB7 payments-svc context \xB7 user threshold \u2264 25" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-hoc-to", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-hoc-av agsc-hoc-av-specialist", children: "RA" }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-hoc-name", children: "Reconciliation" }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-hoc-role", children: "specialist agent" })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-ev", children: "tool.requested \xB7 awaiting approval" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-flow-tcc", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-tcc agsc-tcc-pending agsc-ai-edge", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-tcc-head", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-tcc-icon", style: { background: "#FEF3C7", color: "#7A4800" }, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(WarnIcon, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-tcc-title", children: [
              "About to call ",
              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-tcc-tool", children: "graph.write" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-tcc-meta", children: "step 4 \xB7 proposes 22 owner assignments \xB7 destructive \xB7 review args" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-tcc-status", children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-tcc-status-dot", style: { background: "#B45309", animation: "agsc-pulse 1.4s ease-in-out infinite" } }),
            "Awaiting approval"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-tcc-body", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-tcc-args", children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-arg-k", children: "action" }),
            ": ",
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-arg-s", children: '"assign_owner"' }),
            "\n",
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-arg-k", children: "scope" }),
            ": ",
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-arg-s", children: '"' }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-arg-editable agsc-arg-s", children: "payments-svc" }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-arg-s", children: '"' }),
            "\n",
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-arg-k", children: "policy" }),
            ": ",
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-arg-s", children: '"' }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-arg-editable agsc-arg-s", children: "deploy_recency" }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-arg-s", children: '"' }),
            "\n",
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-arg-k", children: "batch_size" }),
            ": ",
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-arg-editable agsc-arg-n", children: "22" }),
            "\n",
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-arg-k", children: "notify" }),
            ": ",
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-arg-n", children: "true" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-tcc-actions", children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("button", { className: "agsc-btn agsc-btn-prim", children: [
              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(CheckIcon4, {}),
              "Approve & run"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("button", { className: "agsc-btn", children: "Edit args" }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("button", { className: "agsc-btn", children: "Skip" }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-tcc-gate", children: "retries \xB7 0 of 3 used" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-ev", children: "input.required \xB7 blocking" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-flow-hir", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-hir", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-hir-head", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-hir-glyph", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(QuestionIcon3, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-hir-agent", children: "Reconciliation Agent \xB7 needs your call" }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-hir-ts", children: "14:08:22" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "agsc-hir-prompt", children: "Two of the 22 CIs have ambiguous ownership. Pick a tie-break before I write." }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-hir-context", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("code", { className: "agsc-code", children: "web-gateway-02" }),
          " and ",
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("code", { className: "agsc-code", children: "checkout-api-canary" }),
          " were last touched by ",
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("b", { children: "A. Ortiz" }),
          " (deploy, structural) and ",
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("b", { children: "K. Patel" }),
          " (config, cosmetic). Recency rule favours K. Patel; structural-edit rule favours A. Ortiz."
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-hir-actions", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("button", { className: "agsc-btn", children: "Use structural-edit (A. Ortiz)" }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("button", { className: "agsc-btn", children: "Use recency (K. Patel)" }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("button", { className: "agsc-btn", children: "Defer \xB7 leave unassigned" }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-hir-blocking", children: "blocking \xB7 agent paused" })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-msg", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-msg-av" }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-bubble agsc-bubble-ai", children: [
          "While you decide on the tie-break, here's a draft of the summary I'll send to the payments owner once the writes land",
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-caret" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("aside", { className: "agsc-flow-rail", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("h3", { children: "Plan \xB7 6 steps" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-flow-rail-runid", children: "run.8a3f12c" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-stl", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-stl-step agsc-stl-step-done", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-stl-rail", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-stl-marker" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-stl-label", children: "Pulled overnight orphans" }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-stl-sub", children: "cmdb.query \xB7 22 rows" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-stl-ts", children: "+0.4s" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-stl-step agsc-stl-step-done", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-stl-rail", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-stl-marker" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-stl-label", children: "Expanded upstream graph" }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-stl-sub", children: "graph.expand \xB7 depth 2" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-stl-ts", children: "+1.8s" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-stl-step agsc-stl-step-done", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-stl-rail", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-stl-marker" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-stl-label", children: "Handed off to Reconciliation" }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-stl-sub", children: "SQL skill required" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-stl-ts", children: "+2.1s" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-stl-step agsc-stl-step-active", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-stl-rail", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-stl-marker" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-stl-label", children: "Resolve ambiguous owners" }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-stl-sub", children: "awaiting your tie-break" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-stl-ts", children: "paused" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-stl-step agsc-stl-step-pending", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-stl-rail", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-stl-marker" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-stl-label", children: "Write 22 owner assignments" }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-stl-sub", children: "graph.write \xB7 approval gate" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-stl-ts", children: "queued" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-stl-step agsc-stl-step-pending", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-stl-rail", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-stl-marker" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-stl-label", children: "Notify payments-svc owner" }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-stl-sub", children: "incident.create + email" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-stl-ts", children: "queued" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-flow-rail-actions", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("button", { className: "agsc-btn", children: "Edit plan" }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("button", { className: "agsc-btn agsc-btn-prim", children: "Approve all" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("footer", { className: "agsc-composer", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("input", { placeholder: "Inject a correction or ask a follow-up..." }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("button", { className: "agsc-composer-send", children: "Send" })
    ] }),
    showToasts && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-toasts", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-sdt", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-sdt-glyph", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(PlusIcon3, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-sdt-body", children: [
          "Agent updated ",
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("b", { children: "20 CI owners" }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-sdt-diff", children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-sdt-from", children: "unassigned" }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-sdt-arr", children: "\u2192" }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-sdt-to", children: "resolved" }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-sdt-ctx", children: "\xB7 2 still ambiguous" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-sdt-actions", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("button", { className: "agsc-sdt-action", children: "Undo" }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("button", { className: "agsc-sdt-action", children: "View" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-sdt", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-sdt-glyph agsc-sdt-glyph-warm", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(CheckSmallIcon2, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-sdt-body", children: [
          "Trust score ",
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("b", { children: "recomputed" }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "agsc-sdt-diff", children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-sdt-from", children: "62%" }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-sdt-arr", children: "\u2192" }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-sdt-to-warm", children: "58%" }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "agsc-sdt-ctx", children: "\xB7 payments domain" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "agsc-sdt-actions", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("button", { className: "agsc-sdt-action", onClick: () => setShowToasts(false), children: "Why?" }) })
      ] })
    ] })
  ] });
};

// storybook/src/agentic/AgenticInbox.tsx
var import_react9 = require("react");
var import_jsx_runtime21 = require("react/jsx-runtime");
var StarIcon = () => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", style: { color: "var(--kyn-primary)" }, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("path", { d: "M12 2l2.4 5.2L20 8l-4 4 1 5.6L12 15l-5 2.6L8 12l-4-4 5.6-.8z" }) });
var BookIcon = () => /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("svg", { width: "10", height: "10", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: [
  /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v16" }),
  /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("path", { d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20" })
] });
var LineIcon = () => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("svg", { width: "10", height: "10", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("path", { d: "M3 12h18" }) });
var AlertIcon2 = () => /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("svg", { width: "10", height: "10", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: [
  /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
  /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
] });
var rows = [
  {
    type: "teach",
    title: "Taught the agent to lower confidence for AWS auto-scaling group records",
    meta: "From <b>64% confidence</b> on <b>CI-8421</b> \xB7 you confirmed this pattern applies to all ASG-derived CIs.",
    impact: "applied to 147 similar items \xB7 avg confidence \u22120.18",
    time: "2h ago"
  },
  {
    type: "override",
    title: "Overrode confidence \xB7 web-gateway-02",
    meta: "Agent said <b>82%</b>, you set <b>40%</b>. Agent is monitoring for drift.",
    impact: "isolated override \xB7 not generalised",
    time: "5h ago"
  },
  {
    type: "dispute",
    title: "Disputed derivation \xB7 payment-svc owner",
    meta: "You marked <b>Reconciliation Agent</b>'s owner inference as wrong. Priors updated for the <b>payments</b> BU.",
    impact: "23 similar inferences re-derived \xB7 4 changed",
    time: "yesterday"
  },
  {
    type: "teach",
    title: "Labeled change cause \xB7 Q3 migration wave",
    meta: 'DeltaIndicator <b>+2.1 pp</b> on Data Quality score tagged as "migration-driven". Detector now recognises the pattern.',
    impact: "will auto-annotate similar future moves",
    time: "2 days ago"
  },
  {
    type: "override",
    title: "Pinned as trusted \xB7 svc-inventory-primary",
    meta: "Freshness checks bypassed. Agent will still warn at <b>> 60 days</b>.",
    impact: "1 item pinned \xB7 auto-review in 90 days",
    time: "3 days ago"
  },
  {
    type: "override",
    title: "Stale threshold changed \xB7 observability sources",
    meta: "Raised from <b>24h</b> to <b>72h</b> across 8 source connectors.",
    impact: "freshness alerts \u221262%",
    time: "5 days ago"
  },
  {
    type: "teach",
    title: "Reassigned reviewer pattern \xB7 change-queue APAC",
    meta: "Agent now auto-routes APAC-tagged changes to <b>A. Ortiz</b> when primary is out-of-hours.",
    impact: "routing rule active \xB7 12 changes affected",
    time: "1 week ago"
  }
];
var tabs = [
  { label: "All \xB7 7", filter: null },
  { label: "Teach signals \xB7 3", filter: "teach" },
  { label: "Overrides \xB7 3", filter: "override" },
  { label: "Disputes \xB7 1", filter: "dispute" }
];
var AgenticInbox = () => {
  const [activeTab, setActiveTab] = (0, import_react9.useState)(null);
  const visibleRows = activeTab ? rows.filter((r) => r.type === activeTab) : rows;
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "agsc-inbox", children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "agsc-inbox-head", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(StarIcon, {}),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("h2", { children: "Learned from you" }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "agsc-inbox-head-sub", children: "Every override is a teaching signal. The agent applied these to future decisions." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "agsc-inbox-count", children: "7 this week" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "agsc-inbox-tabs", children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      "button",
      {
        className: `agsc-inbox-tab ${activeTab === tab.filter ? "agsc-inbox-tab-on" : ""}`,
        onClick: () => setActiveTab(tab.filter),
        children: tab.label
      },
      tab.label
    )) }),
    visibleRows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: `agsc-inbox-row agsc-inbox-row-${row.type}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "agsc-inbox-icon", children: [
        row.type === "teach" && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(BookIcon, {}),
        row.type === "override" && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(LineIcon, {}),
        row.type === "dispute" && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(AlertIcon2, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "agsc-inbox-title", children: row.title }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "agsc-inbox-meta", dangerouslySetInnerHTML: { __html: row.meta } }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "agsc-inbox-impact", children: row.impact })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "agsc-inbox-time", children: row.time })
    ] }, row.title)),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "agsc-inbox-footer", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { children: "Every row here came from a single primitive interaction." }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("a", { href: "#", children: "See how the agent changed \u2192" })
    ] })
  ] });
};

// storybook/src/foundations/ColorsBrand.tsx
var import_jsx_runtime22 = require("react/jsx-runtime");
var ColorsBrand = () => /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-colors-brand", children: [
  /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-brand", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-big", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-label", children: "Brand accent" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-val", children: "Warm Red 50" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-use", children: "Logo \xB7 brand moments \xB7 destructive attention" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { style: { fontFamily: "var(--font-mono)", fontSize: "10px", marginTop: "4px", opacity: 0.8 }, children: "#FF462D \xB7 --k-warm-red-50" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-big fdn-spruce", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-label", children: "Interactive primary" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-val", children: "Spruce 60" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-use", children: "Links \xB7 primary buttons \xB7 focus \xB7 selected" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { style: { fontFamily: "var(--font-mono)", fontSize: "10px", marginTop: "4px", opacity: 0.8 }, children: "#29707A \xB7 --k-spruce-60" })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-row", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h4", { children: "Warm Red \u2014 brand accent ramp" }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-grid", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-sw", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-chip fdn-dark", style: { background: "var(--k-warm-red-10)" }, children: "10" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-meta", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-name", children: "Warm Red 10" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-hex", children: "#FFE8E0" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-sw", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-chip fdn-dark", style: { background: "var(--k-warm-red-20)" }, children: "20" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-meta", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-name", children: "20" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-hex", children: "#FFB8A3" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-sw", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-chip fdn-dark", style: { background: "var(--k-warm-red-30)" }, children: "30" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-meta", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-name", children: "30" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-hex", children: "#FF8766" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-sw", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-chip", style: { background: "var(--k-warm-red-40)" }, children: "40" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-meta", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-name", children: "40" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-hex", children: "#FF6647" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-sw", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-chip", style: { background: "var(--k-warm-red-50)", outline: "2px solid var(--k-warm-red-50)", outlineOffset: "-2px" }, children: "50 \u2605" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-meta", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-name", children: "50 \xB7 brand" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-hex", children: "#FF462D" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-sw", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-chip", style: { background: "var(--k-warm-red-60)" }, children: "60" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-meta", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-name", children: "60" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-hex", children: "#E63A22" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-sw", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-chip", style: { background: "var(--k-warm-red-70)" }, children: "70" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-meta", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-name", children: "70" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-hex", children: "#B82915" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-sw", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-chip", style: { background: "var(--k-warm-red-80)" }, children: "80" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-meta", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-name", children: "80" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-hex", children: "#8A1E0D" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-sw", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-chip", style: { background: "var(--k-warm-red-90)" }, children: "90" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-meta", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-name", children: "90" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-hex", children: "#5C1408" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-sw", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-chip", style: { background: "var(--k-warm-red-100)" }, children: "100" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-meta", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-name", children: "100" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-hex", children: "#2E0A04" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-sw", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-chip", style: { background: "var(--k-warm-red-110)" }, children: "110" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-meta", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-name", children: "110" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-hex", children: "#1A0602" })
        ] })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-row", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h4", { children: "Spruce \u2014 UI workhorse ramp" }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-grid fdn-grid-spruce", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-sw", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-chip fdn-dark", style: { background: "var(--k-spruce-10)" }, children: "10" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-meta", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-name", children: "Spruce 10" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-hex", children: "#E8F2F4" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-sw", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-chip fdn-dark", style: { background: "var(--k-spruce-20)" }, children: "20" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-meta", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-name", children: "20" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-hex", children: "#BEDDE2" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-sw", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-chip fdn-dark", style: { background: "var(--k-spruce-30)" }, children: "30" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-meta", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-name", children: "30" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-hex", children: "#91C4CC" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-sw", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-chip", style: { background: "var(--k-spruce-40)" }, children: "40" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-meta", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-name", children: "40" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-hex", children: "#5BA2AE" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-sw", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-chip", style: { background: "var(--k-spruce-50)" }, children: "50" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-meta", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-name", children: "50" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-hex", children: "#3D8590" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-sw", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-chip", style: { background: "var(--k-spruce-60)", outline: "2px solid var(--k-spruce-60)", outlineOffset: "-2px" }, children: "60 \u2605" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-meta", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-name", children: "60 \xB7 primary" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-hex", children: "#29707A" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-sw", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-chip", style: { background: "var(--k-spruce-70)" }, children: "70" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-meta", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-name", children: "70 \xB7 hover" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-hex", children: "#1F5A63" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-sw", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-chip", style: { background: "var(--k-spruce-80)" }, children: "80" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-meta", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-name", children: "80 \xB7 pressed" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-hex", children: "#17444B" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-sw", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-chip", style: { background: "var(--k-spruce-90)" }, children: "90" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-meta", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-name", children: "90" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-hex", children: "#0F2E33" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-sw", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-chip", style: { background: "var(--k-spruce-100)" }, children: "100" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-meta", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-name", children: "100" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-hex", children: "#07191C" })
        ] })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-row", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h4", { children: "AI-surface tints \u2014 Opacity.AI convention" }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-grid", style: { gridTemplateColumns: "repeat(6, 1fr)" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-sw", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-chip fdn-dark", style: { background: "var(--k-ai-spruce-06)" }, children: "06" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-meta", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-name", children: "AI Spruce 06" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-hex", children: "rgba(41,112,122,.06)" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-sw", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-chip fdn-dark", style: { background: "var(--k-ai-spruce-12)" }, children: "12" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-meta", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-name", children: "AI Spruce 12" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-hex", children: "rgba(41,112,122,.12)" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-sw", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-chip fdn-dark", style: { background: "var(--k-ai-spruce-20)" }, children: "20" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-meta", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-name", children: "AI Spruce 20" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-hex", children: "rgba(41,112,122,.20)" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-sw", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-chip fdn-dark", style: { background: "var(--k-ai-warm-red-06)" }, children: "06" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-meta", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-name", children: "AI Warm Red 06" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-hex", children: "rgba(255,70,45,.06)" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-sw", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-chip fdn-dark", style: { background: "var(--k-ai-warm-red-12)" }, children: "12" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-meta", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-name", children: "AI Warm Red 12" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-hex", children: "rgba(255,70,45,.12)" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-sw", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-chip fdn-dark", style: { background: "var(--k-ai-warm-red-20)" }, children: "20" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "fdn-meta", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-name", children: "AI Warm Red 20" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fdn-hex", children: "rgba(255,70,45,.20)" })
        ] })
      ] })
    ] })
  ] })
] });

// storybook/src/foundations/ColorsSlate.tsx
var import_jsx_runtime23 = require("react/jsx-runtime");
var ColorsSlate = () => /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "fdn-colors-slate", children: [
  /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "fdn-group", children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h4", { children: "Dark Stone \u2014 default UI neutral" }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "fdn-desc", children: "Text, borders, default surfaces. The workhorse." }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "fdn-row", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "fdn-sw fdn-light", style: { background: "var(--k-dark-stone-10)" }, children: "#F5F5F5" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "fdn-sw fdn-light", style: { background: "var(--k-dark-stone-20)" }, children: "#E6E6E6" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "fdn-sw fdn-light", style: { background: "var(--k-dark-stone-30)" }, children: "#CFCFCF" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "fdn-sw fdn-light", style: { background: "var(--k-dark-stone-40)" }, children: "#A8A8A8" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "fdn-sw fdn-dark", style: { background: "var(--k-dark-stone-50)" }, children: "#808080" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "fdn-sw fdn-dark", style: { background: "var(--k-dark-stone-60)" }, children: "#5C5C5C" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "fdn-sw fdn-dark", style: { background: "var(--k-dark-stone-70)" }, children: "#3D3D3D" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "fdn-sw fdn-dark", style: { background: "var(--k-dark-stone-80)" }, children: "#242424" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "fdn-sw fdn-dark", style: { background: "var(--k-dark-stone-90)" }, children: "#141414" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "fdn-sw fdn-dark", style: { background: "var(--k-dark-stone-100)" }, children: "#000000" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "fdn-labels fdn-g10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: "10" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: "20" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: "30" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: "40" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: "50" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: "60" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: "70" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: "80" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: "90" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: "100" })
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "fdn-group", children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h4", { children: "Cool Gray \u2014 dashboards, charts, chrome" }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "fdn-desc", children: "Dashboard chrome, table stripe, chart axes." }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "fdn-row", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "fdn-sw fdn-light", style: { background: "var(--k-cool-gray-10)" }, children: "#F2F4F5" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "fdn-sw fdn-light", style: { background: "var(--k-cool-gray-20)" }, children: "#E1E5E8" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "fdn-sw fdn-light", style: { background: "var(--k-cool-gray-30)" }, children: "#C1C8CD" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "fdn-sw fdn-light", style: { background: "var(--k-cool-gray-40)" }, children: "#98A3AB" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "fdn-sw fdn-dark", style: { background: "var(--k-cool-gray-50)" }, children: "#6B7780" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "fdn-sw fdn-dark", style: { background: "var(--k-cool-gray-60)" }, children: "#4F5A63" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "fdn-sw fdn-dark", style: { background: "var(--k-cool-gray-70)" }, children: "#3A434B" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "fdn-sw fdn-dark", style: { background: "var(--k-cool-gray-80)" }, children: "#252B31" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "fdn-sw fdn-dark", style: { background: "var(--k-cool-gray-90)" }, children: "#161A1E" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "fdn-labels fdn-g9", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: "10" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: "20" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: "30" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: "40" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: "50" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: "60" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: "70" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: "80" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: "90" })
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "fdn-group", children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h4", { children: "Warm Gray \u2014 marketing / brand surfaces" }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "fdn-desc", children: "Reserved for brand and marketing surfaces only." }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "fdn-row", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "fdn-sw fdn-light", style: { background: "var(--k-warm-gray-10)" }, children: "#F5F3F0" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "fdn-sw fdn-light", style: { background: "var(--k-warm-gray-20)" }, children: "#E7E3DD" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "fdn-sw fdn-light", style: { background: "var(--k-warm-gray-30)" }, children: "#CFC8BD" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "fdn-sw fdn-dark", style: { background: "var(--k-warm-gray-50)" }, children: "#857E73" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "fdn-sw fdn-dark", style: { background: "var(--k-warm-gray-70)" }, children: "#40382D" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "fdn-labels fdn-g5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: "10" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: "20" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: "30" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: "50" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: "70" })
    ] })
  ] })
] });

// storybook/src/foundations/ColorsSeverity.tsx
var import_jsx_runtime24 = require("react/jsx-runtime");
var ColorsSeverity = () => /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "fdn-colors-severity", children: [
  /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("h4", { children: "Shidoka RAG taxonomy \u2014 stops 10 / 20 / 100 / 110" }),
  /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "fdn-grid", children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "fdn-cell", children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("span", { className: "fdn-pill", style: { background: "var(--k-status-critical-10)", color: "var(--k-status-critical-110)", borderColor: "var(--k-status-critical-20)" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "fdn-dot", style: { background: "var(--k-status-critical-100)" } }),
        "Critical"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "fdn-hdr", children: "Critical" }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "fdn-meta", children: "Severe failure \xB7 data loss risk" }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "fdn-stops", children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "fdn-stop fdn-l", style: { background: "var(--k-status-critical-10)" }, children: "10" }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "fdn-stop fdn-l", style: { background: "var(--k-status-critical-20)" }, children: "20" }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "fdn-stop fdn-d", style: { background: "var(--k-status-critical-100)" }, children: "100" }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "fdn-stop fdn-d", style: { background: "var(--k-status-critical-110)" }, children: "110" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "fdn-cell", children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("span", { className: "fdn-pill", style: { background: "var(--k-status-error-10)", color: "var(--k-status-error-110)", borderColor: "var(--k-status-error-20)" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "fdn-dot", style: { background: "var(--k-status-error-100)" } }),
        "Error"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "fdn-hdr", children: "Error" }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "fdn-meta", children: "Actionable failure" }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "fdn-stops", children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "fdn-stop fdn-l", style: { background: "var(--k-status-error-10)" }, children: "10" }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "fdn-stop fdn-l", style: { background: "var(--k-status-error-20)" }, children: "20" }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "fdn-stop fdn-d", style: { background: "var(--k-status-error-100)" }, children: "100" }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "fdn-stop fdn-d", style: { background: "var(--k-status-error-110)" }, children: "110" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "fdn-cell", children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("span", { className: "fdn-pill", style: { background: "var(--k-status-warning-10)", color: "var(--k-status-warning-110)", borderColor: "var(--k-status-warning-20)" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "fdn-dot", style: { background: "var(--k-status-warning-100)" } }),
        "Warning"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "fdn-hdr", children: "Warning" }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "fdn-meta", children: "Attention required" }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "fdn-stops", children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "fdn-stop fdn-l", style: { background: "var(--k-status-warning-10)" }, children: "10" }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "fdn-stop fdn-l", style: { background: "var(--k-status-warning-20)" }, children: "20" }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "fdn-stop fdn-d", style: { background: "var(--k-status-warning-100)" }, children: "100" }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "fdn-stop fdn-d", style: { background: "var(--k-status-warning-110)" }, children: "110" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "fdn-cell", children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("span", { className: "fdn-pill", style: { background: "var(--k-status-success-10)", color: "var(--k-status-success-110)", borderColor: "var(--k-status-success-20)" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "fdn-dot", style: { background: "var(--k-status-success-100)" } }),
        "Success"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "fdn-hdr", children: "Success" }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "fdn-meta", children: "Healthy \xB7 verified" }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "fdn-stops", children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "fdn-stop fdn-l", style: { background: "var(--k-status-success-10)" }, children: "10" }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "fdn-stop fdn-l", style: { background: "var(--k-status-success-20)" }, children: "20" }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "fdn-stop fdn-d", style: { background: "var(--k-status-success-100)" }, children: "100" }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "fdn-stop fdn-d", style: { background: "var(--k-status-success-110)" }, children: "110" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "fdn-cell", children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("span", { className: "fdn-pill", style: { background: "var(--k-status-info-10)", color: "var(--k-status-info-110)", borderColor: "var(--k-status-info-20)" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "fdn-dot", style: { background: "var(--k-status-info-100)" } }),
        "Info"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "fdn-hdr", children: "Information" }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "fdn-meta", children: "Spruce ramp \xB7 neutral note" }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "fdn-stops", children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "fdn-stop fdn-l", style: { background: "var(--k-status-info-10)" }, children: "10" }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "fdn-stop fdn-l", style: { background: "var(--k-status-info-20)" }, children: "20" }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "fdn-stop fdn-d", style: { background: "var(--k-status-info-100)" }, children: "100" }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "fdn-stop fdn-d", style: { background: "var(--k-status-info-110)" }, children: "110" })
      ] })
    ] })
  ] })
] });

// storybook/src/foundations/ColorsStatus.tsx
var import_jsx_runtime25 = require("react/jsx-runtime");
var ColorsStatus = () => /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "fdn-colors-status", children: [
  /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "fdn-group", children: [
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "fdn-title", children: "Graph node \xB7 status" }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "fdn-row", children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("span", { className: "fdn-chip", children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "fdn-dot", style: { background: "var(--status-healthy)" } }),
        "Healthy"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("span", { className: "fdn-chip", children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "fdn-dot", style: { background: "var(--status-degraded)" } }),
        "Degraded"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("span", { className: "fdn-chip", children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "fdn-dot", style: { background: "var(--status-impacted)" } }),
        "Impacted"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("span", { className: "fdn-chip", children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "fdn-dot", style: { background: "var(--status-unknown)" } }),
        "Unknown"
      ] })
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "fdn-group", children: [
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "fdn-title", children: "Workflow \xB7 lifecycle" }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "fdn-row", children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("span", { className: "fdn-chip", children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "fdn-dot", style: { background: "var(--wf-pending)" } }),
        "Pending"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("span", { className: "fdn-chip", children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "fdn-dot", style: { background: "var(--wf-approved)" } }),
        "Approved"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("span", { className: "fdn-chip", children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "fdn-dot", style: { background: "var(--wf-executed)" } }),
        "Executed"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("span", { className: "fdn-chip", children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "fdn-dot", style: { background: "var(--wf-rejected)" } }),
        "Rejected"
      ] })
    ] })
  ] })
] });

// storybook/src/foundations/ColorsChart.tsx
var import_jsx_runtime26 = require("react/jsx-runtime");
var ColorsChart = () => /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "fdn-colors-chart", children: [
  /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("h4", { children: "Data-viz categorical \u2014 order-locked, Spruce primary + Warm Red secondary" }),
  /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "fdn-grid", children: [
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "fdn-sw", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "fdn-chip", style: { background: "#29707A" } }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "fdn-name", children: "cat-1" }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "fdn-hex", children: "spruce-60" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "fdn-sw", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "fdn-chip", style: { background: "#FF462D" } }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "fdn-name", children: "cat-2" }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "fdn-hex", children: "warm-red-50" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "fdn-sw", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "fdn-chip", style: { background: "#3E8AC2" } }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "fdn-name", children: "cat-3" }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "fdn-hex", children: "blue-50" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "fdn-sw", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "fdn-chip", style: { background: "#8A4FBF" } }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "fdn-name", children: "cat-4" }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "fdn-hex", children: "violet" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "fdn-sw", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "fdn-chip", style: { background: "#E68A00" } }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "fdn-name", children: "cat-5" }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "fdn-hex", children: "amber" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "fdn-sw", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "fdn-chip", style: { background: "#5C6A73" } }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "fdn-name", children: "cat-6" }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "fdn-hex", children: "cool-gray" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "fdn-sw", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "fdn-chip", style: { background: "#5BA2AE" } }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "fdn-name", children: "cat-7" }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "fdn-hex", children: "spruce-40" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "fdn-sw", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "fdn-chip", style: { background: "#FF8766" } }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "fdn-name", children: "cat-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "fdn-hex", children: "warm-red-30" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "fdn-sw", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "fdn-chip", style: { background: "#1F5580" } }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "fdn-name", children: "cat-9" }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "fdn-hex", children: "blue-70" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "fdn-sw", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "fdn-chip", style: { background: "#B82915" } }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "fdn-name", children: "cat-10" }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "fdn-hex", children: "warm-red-70" })
    ] })
  ] })
] });

// storybook/src/foundations/TypeDisplay.tsx
var import_jsx_runtime27 = require("react/jsx-runtime");
var TypeDisplay = () => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "fdn-type-display", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "fdn-wrap", children: [
  /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "fdn-bigAg", children: "Ag" }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "fdn-wtag", children: "TWK EVERETT \xB7 DISPLAY \xB7 20PX+" }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { style: { fontSize: "11px", color: "var(--fg-muted)", marginTop: "4px" }, children: "Page titles, section headings, card titles, KPI numbers." }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "fdn-weights", children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "fdn-w", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("b", { style: { fontWeight: 300 }, children: "Ag" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "300 Light" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "fdn-w", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("b", { style: { fontWeight: 400 }, children: "Ag" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "400 Regular" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "fdn-w", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("b", { style: { fontWeight: 500 }, children: "Ag" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "500 Medium" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "fdn-w", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("b", { style: { fontWeight: 700 }, children: "Ag" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "700 Bold" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "fdn-w", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("b", { style: { fontWeight: 900 }, children: "Ag" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "900 Black" })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { style: { borderLeft: "1px solid var(--border-1)", paddingLeft: "28px" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "fdn-scale", children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "fdn-disp", style: { fontSize: "28px", fontWeight: 500, letterSpacing: "-0.01em", color: "var(--fg-1)", lineHeight: 1 }, children: "Display \xB7 28/500" }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "fdn-lbl", children: "Page title \xB7 KPI hero" }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "fdn-disp", style: { fontSize: "22px", fontWeight: 500, color: "var(--fg-1)", lineHeight: 1 }, children: "H1 \xB7 22/500" }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "fdn-lbl", children: "Section heading" }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "fdn-disp", style: { fontSize: "18px", fontWeight: 500, color: "var(--fg-1)", lineHeight: 1 }, children: "H2 \xB7 18/500" }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "fdn-lbl", children: "Card title" }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { style: { fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: 500, color: "var(--fg-1)", lineHeight: 1 }, children: [
        "H3 \xB7 14/500 ",
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "fdn-lbl", style: { fontWeight: 400 }, children: "\u2014 Roboto" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "fdn-lbl", children: "Strong label (body stack)" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { style: { marginTop: "14px", paddingTop: "10px", borderTop: "1px dashed var(--border-1)", fontSize: "10px", color: "var(--fg-muted)", maxWidth: "340px", lineHeight: 1.5 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "fdn-role", children: "Shidoka rule" }),
      " \u2014 TWK Everett for ",
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("b", { children: "display" }),
      " type 20px and above. Body copy 14\u201318px routes to Roboto."
    ] })
  ] })
] }) });

// storybook/src/foundations/TypeBody.tsx
var import_jsx_runtime28 = require("react/jsx-runtime");
var TypeBody = () => /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "fdn-type-body", children: [
  /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "fdn-hdr", children: "Roboto \u2014 body 14\u201318px \xB7 Geist Mono \u2014 code" }),
  /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "fdn-row", children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "fdn-lbl", children: "lg \xB7 18/400" }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { style: { fontSize: "18px", color: "var(--fg-2)" }, children: "Trust posture is within target across 8 of 12 domains." }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "fdn-note", children: "Roboto Regular \xB7 dense UI headline" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "fdn-row", children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "fdn-lbl", children: "body \xB7 14/400" }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { style: { fontSize: "14px", color: "var(--fg-2)" }, children: "Sensors report 4,812 CIs across 38 applications." }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "fdn-note", children: "Roboto Regular \xB7 default" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "fdn-row", children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "fdn-lbl", children: "small \xB7 12/400" }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { style: { fontSize: "12px", color: "var(--fg-muted)" }, children: "Last verified 3 days ago \xB7 source ServiceNow CMDB" }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "fdn-note", children: "Helper \xB7 caption" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "fdn-row", children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "fdn-lbl", children: "micro \xB7 11/500" }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { style: { fontSize: "11px", color: "var(--fg-muted)", fontWeight: 500 }, children: "12/18 steps complete" }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "fdn-note", children: "Table meta \xB7 badge micro" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "fdn-row", children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "fdn-lbl", children: "caption \xB7 10/700" }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "t-caption", style: { fontSize: "10px" }, children: "EXECUTION PIPELINE" }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "fdn-note", children: "Uppercase eyebrow \xB7 0.14em" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "fdn-row", children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "fdn-lbl", children: "mono \xB7 13" }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "t-mono", style: { fontSize: "13px", background: "transparent", padding: 0 }, children: "bINC4219003 \xB7 dd-mm-yyyy HH:mm" }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "fdn-note", children: "Geist Mono \xB7 IDs \xB7 timestamps" })
  ] })
] });

// storybook/src/foundations/SpacingScale.tsx
var import_jsx_runtime29 = require("react/jsx-runtime");
var SpacingScale = () => /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "fdn-spacing-scale", children: [
  /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "fdn-hdr", children: "Shidoka space tokens \u2014 space-set-quarter-x \u2192 space-set-3-x" }),
  /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "fdn-grid", children: [
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "fdn-tok", children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "fdn-box", style: { width: "4px", height: "4px" } }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("span", { className: "fdn-lbl", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("b", { children: "quarter-x" }),
        "4px"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "fdn-tok", children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "fdn-box", style: { width: "8px", height: "8px" } }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("span", { className: "fdn-lbl", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("b", { children: "half-x" }),
        "8px"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "fdn-tok", children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "fdn-box", style: { width: "12px", height: "12px" } }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("span", { className: "fdn-lbl", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("b", { children: "\xBE-x" }),
        "12px"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "fdn-tok", children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "fdn-box", style: { width: "16px", height: "16px" } }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("span", { className: "fdn-lbl", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("b", { children: "1-x" }),
        "16px"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "fdn-tok", children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "fdn-box", style: { width: "24px", height: "24px" } }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("span", { className: "fdn-lbl", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("b", { children: "1\xBD-x" }),
        "24px"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "fdn-tok", children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "fdn-box", style: { width: "32px", height: "32px" } }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("span", { className: "fdn-lbl", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("b", { children: "2-x" }),
        "32px"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "fdn-tok", children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "fdn-box", style: { width: "48px", height: "48px" } }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("span", { className: "fdn-lbl", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("b", { children: "3-x" }),
        "48px"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "fdn-tok", children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "fdn-box", style: { width: "64px", height: "64px" } }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("span", { className: "fdn-lbl", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("b", { children: "4-x" }),
        "64px"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "fdn-tok", children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "fdn-box", style: { width: "96px", height: "96px" } }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("span", { className: "fdn-lbl", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("b", { children: "6-x" }),
        "96px"
      ] })
    ] })
  ] })
] });

// storybook/src/foundations/SpacingRadii.tsx
var import_jsx_runtime30 = require("react/jsx-runtime");
var SpacingRadii = () => /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "fdn-spacing-radii", children: [
  /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "fdn-hdr", children: "Shidoka radii \u2014 2 / 4 / 8 / 16 \xB7 pill" }),
  /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "fdn-row", children: [
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "fdn-s", children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "fdn-box", style: { borderRadius: "2px" }, children: "xs" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("span", { className: "fdn-lbl", children: [
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("b", { children: "2px" }),
        "xs \xB7 dense table"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "fdn-s", children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "fdn-box", style: { borderRadius: "4px" }, children: "sm" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("span", { className: "fdn-lbl", children: [
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("b", { children: "4px" }),
        "button \xB7 input \xB7 chip"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "fdn-s", children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "fdn-box", style: { borderRadius: "8px" }, children: "md" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("span", { className: "fdn-lbl", children: [
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("b", { children: "8px" }),
        "card \xB7 default"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "fdn-s", children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "fdn-box", style: { borderRadius: "16px" }, children: "lg" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("span", { className: "fdn-lbl", children: [
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("b", { children: "16px" }),
        "dialog \xB7 drawer"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "fdn-s", children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "fdn-box", style: { borderRadius: "9999px" }, children: "pill" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("span", { className: "fdn-lbl", children: [
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("b", { children: "full" }),
        "badge \xB7 avatar \xB7 dot"
      ] })
    ] })
  ] })
] });

// storybook/src/foundations/SpacingElevation.tsx
var import_jsx_runtime31 = require("react/jsx-runtime");
var SpacingElevation = () => /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "fdn-spacing-elevation", children: [
  /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "fdn-s", children: [
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "fdn-box", style: { border: "1px solid #E2E8F0" }, children: "border only" }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { className: "fdn-lbl", children: "default card" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "fdn-s", children: [
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "fdn-box", style: { border: "1px solid #E2E8F0", boxShadow: "0 1px 2px rgba(15,23,42,.04)" }, children: "sm" }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { className: "fdn-lbl", children: "shadow-sm" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "fdn-s", children: [
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "fdn-box", style: { border: "1px solid #E2E8F0", boxShadow: "0 1px 2px rgba(15,23,42,.04),0 1px 3px rgba(15,23,42,.03)" }, children: "card" }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { className: "fdn-lbl", children: "shadow-card" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "fdn-s", children: [
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "fdn-box", style: { border: "1px solid #E2E8F0", boxShadow: "0 4px 16px rgba(15,23,42,.08),0 1px 2px rgba(15,23,42,.06)" }, children: "pop" }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { className: "fdn-lbl", children: "popover \xB7 menu" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "fdn-s", children: [
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "fdn-box", style: { border: "1px solid #E2E8F0", boxShadow: "0 20px 48px rgba(15,23,42,.18)" }, children: "drawer" }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { className: "fdn-lbl", children: "sheet \xB7 DAG panel" })
  ] })
] });

// storybook/src/foundations/BrandLogo.tsx
var import_jsx_runtime32 = require("react/jsx-runtime");
var BrandLogo = () => /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "fdn-brand-logo", children: [
  /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "fdn-mark", children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("img", { className: "fdn-logo", src: "/assets/kyndryl-logo.png", alt: "Kyndryl" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "fdn-mark fdn-dark", children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("img", { className: "fdn-logo", src: "/assets/kyndryl-logo.png", alt: "Kyndryl", style: { filter: "brightness(0) invert(1)" } }) }),
  /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: "4px", marginLeft: "8px" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { className: "fdn-lbl", children: "Primary \xB7 mono" }),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { style: { fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--fg-muted)" }, children: "public/kyndryl-logo.png \xB7 126px rendered width" })
  ] })
] });

// storybook/src/foundations/BrandIcons.tsx
var import_jsx_runtime33 = require("react/jsx-runtime");
var icons = {
  dashboard: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("path", { d: "M 2 3 C 2 2.401 2.45 2 2.905 2 L 9.095 2 C 9.55 2 10 2.401 10 3 L 10 6 C 10 6.599 9.55 7 9.095 7 L 2.905 7 C 2.45 7 2 6.599 2 6 L 2 3 Z M 2.905 0 C 1.255 0 0 1.39 0 3 L 0 6 C 0 7.61 1.255 9 2.905 9 L 9.095 9 C 10.745 9 12 7.61 12 6 L 12 3 C 12 1.39 10.745 0 9.095 0 L 2.905 0 Z M 2 13.905 C 2 13.405 2.405 13 2.905 13 L 9.095 13 C 9.595 13 10 13.405 10 13.905 L 10 25.095 C 10 25.595 9.595 26 9.095 26 L 2.905 26 C 2.405 26 2 25.595 2 25.095 L 2 13.905 Z M 2.905 11 C 1.301 11 0 12.301 0 13.905 L 0 25.095 C 0 26.699 1.301 28 2.905 28 L 9.095 28 C 10.699 28 12 26.699 12 25.095 L 12 13.905 C 12 12.301 10.699 11 9.095 11 L 2.905 11 Z M 25.095 26 C 25.55 26 26 25.599 26 25 L 26 22 C 26 21.401 25.55 21 25.095 21 L 18.905 21 C 18.45 21 18 21.401 18 22 L 18 25 C 18 25.599 18.45 26 18.905 26 L 25.095 26 Z M 28 25 C 28 26.61 26.745 28 25.095 28 L 18.905 28 C 17.255 28 16 26.61 16 25 L 16 22 C 16 20.39 17.255 19 18.905 19 L 25.095 19 C 26.745 19 28 20.39 28 22 L 28 25 Z M 26 14.095 C 26 14.595 25.595 15 25.095 15 L 18.905 15 C 18.405 15 18 14.595 18 14.095 L 18 2.905 C 18 2.405 18.405 2 18.905 2 L 25.095 2 C 25.595 2 26 2.405 26 2.905 L 26 14.095 Z M 25.095 17 C 26.699 17 28 15.699 28 14.095 L 28 2.905 C 28 1.301 26.699 0 25.095 0 L 18.905 0 C 17.301 0 16 1.301 16 2.905 L 16 14.095 C 16 15.699 17.301 17 18.905 17 L 25.095 17 Z", fill: "currentColor", fillRule: "evenodd" }),
  analytics: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("path", { d: "M 1 0 C 1.552 0 2 0.448 2 1 L 2 25 C 2 25.552 2.448 26 3 26 L 27 26 C 27.552 26 28 26.448 28 27 C 28 27.552 27.552 28 27 28 L 3 28 C 1.343 28 0 26.657 0 25 L 0 1 C 0 0.448 0.448 0 1 0 Z M 24.844 1.745 C 25.679 1.644 26.434 2.251 26.517 3.088 L 26.989 7.897 C 27.043 8.447 26.641 8.936 26.092 8.99 C 25.542 9.044 25.052 8.642 24.998 8.093 L 24.717 5.227 L 18.146 15.085 C 17.646 15.834 16.604 15.977 15.921 15.392 L 10.453 10.705 L 5.941 23.336 C 5.756 23.856 5.184 24.127 4.664 23.941 C 4.144 23.756 3.873 23.184 4.059 22.664 L 8.569 10.032 C 9.041 8.712 10.69 8.274 11.755 9.187 L 16.794 13.506 L 23.155 3.963 L 20.118 4.329 C 19.57 4.395 19.072 4.004 19.006 3.456 C 18.94 2.908 19.331 2.41 19.879 2.344 L 24.844 1.745 Z", fill: "currentColor", fillRule: "nonzero" }),
  network: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("path", { d: "M 0.014 13.835 C 0.105 13.29 0.62 12.923 1.165 13.014 C 5.67 13.768 9.224 17.321 9.986 21.833 C 10.078 22.377 9.711 22.894 9.167 22.986 C 8.622 23.078 8.106 22.711 8.014 22.166 C 7.393 18.492 4.497 15.6 0.835 14.986 C 0.29 14.895 -0.077 14.38 0.014 13.835 Z M 1.1 7.005 C 8.955 7.789 15.214 14.049 15.995 21.901 C 16.05 22.451 15.648 22.94 15.099 22.995 C 14.549 23.05 14.06 22.648 14.005 22.099 C 13.318 15.195 7.809 9.685 0.9 8.995 C 0.351 8.94 -0.05 8.45 0.005 7.9 C 0.06 7.351 0.55 6.95 1.1 7.005 Z M 0.147 19.479 C 0.436 19.008 1.05 18.859 1.521 19.146 C 2.477 19.731 3.28 20.524 3.857 21.485 C 4.142 21.959 3.989 22.573 3.516 22.857 C 3.042 23.142 2.427 22.988 2.143 22.515 C 1.738 21.841 1.171 21.277 0.479 20.854 C 0.007 20.565 -0.141 19.95 0.147 19.479 Z M 24.112 0 C 26.252 0 28 1.721 28 3.855 L 28 18.145 C 28 20.29 26.25 22 24.112 22 L 19 22 C 18.448 22 18 21.552 18 21 C 18 20.448 18.448 20 19 20 L 24.112 20 C 25.168 20 26 19.163 26 18.145 L 26 3.855 C 26 2.844 25.166 2 24.112 2 L 3.888 2 C 2.895 2 2 2.917 2 4 C 2 4.552 1.552 5 1 5 C 0.448 5 0 4.552 0 4 C 0 1.918 1.687 0 3.888 0 L 24.112 0 Z", fill: "currentColor", fillRule: "nonzero" }),
  group: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("path", { d: "M 17.578 18 C 19.402 18 21.011 19.385 21 21.256 L 21 21.259 L 20.979 23.793 C 20.993 23.86 21 23.929 21 24 C 21 24.552 20.552 25 20 25 L 8.023 25 C 7.475 25 7.028 24.558 7.023 24.009 L 7 21.256 C 6.989 19.385 8.598 18 10.422 18 L 17.578 18 Z M 10.422 20 C 9.554 20 8.997 20.63 9 21.244 L 9.015 23 L 18.985 23 L 19 21.244 C 19.003 20.63 18.446 20 17.578 20 L 10.422 20 Z M 8 10 C 8.552 10 9 10.448 9 11 C 9 11.552 8.552 12 8 12 L 3.391 12 C 2.553 12 1.997 12.617 2 13.243 L 2 13.244 L 2.015 15 L 8 15 C 8.552 15 9 15.448 9 16 C 9 16.552 8.552 17 8 17 L 1 17 C 0.448 17 0 16.552 0 16 C 0 15.929 0.008 15.86 0.022 15.794 L 0 13.259 L 0 13.256 C -0.011 11.397 1.571 10 3.391 10 L 8 10 Z M 24.609 10 C 26.429 10 28.011 11.397 28 13.256 L 28 13.259 L 27.979 15.794 C 27.992 15.86 28 15.929 28 16 C 28 16.552 27.552 17 27 17 L 20 17 C 19.448 17 19 16.552 19 16 C 19 15.448 19.448 15 20 15 L 25.985 15 L 26 13.244 L 26 13.243 C 26.003 12.617 25.447 12 24.609 12 L 20 12 C 19.448 12 19 11.552 19 11 C 19 10.448 19.448 10 20 10 L 24.609 10 Z M 14 8 C 16.209 8 18 9.791 18 12 C 18 14.209 16.209 16 14 16 C 11.791 16 10 14.209 10 12 C 10 9.791 11.791 8 14 8 Z M 14 10 C 12.895 10 12 10.895 12 12 C 12 13.105 12.895 14 14 14 C 15.105 14 16 13.105 16 12 C 16 10.895 15.105 10 14 10 Z M 6 0 C 8.209 0 10 1.791 10 4 C 10 6.209 8.209 8 6 8 C 3.791 8 2 6.209 2 4 C 2 1.791 3.791 0 6 0 Z M 22 0 C 24.209 0 26 1.791 26 4 C 26 6.209 24.209 8 22 8 C 19.791 8 18 6.209 18 4 C 18 1.791 19.791 0 22 0 Z M 6 2 C 4.895 2 4 2.895 4 4 C 4 5.105 4.895 6 6 6 C 7.105 6 8 5.105 8 4 C 8 2.895 7.105 2 6 2 Z M 22 2 C 20.895 2 20 2.895 20 4 C 20 5.105 20.895 6 22 6 C 23.105 6 24 5.105 24 4 C 24 2.895 23.105 2 22 2 Z", fill: "currentColor", fillRule: "nonzero" }),
  "chat-bot": /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("path", { d: "M 6.857 0 C 4.545 0 3 2.216 3 4.502 L 3 6 C 1.343 6 0 7.343 0 9 L 0 11 C 0 12.657 1.343 14 3 14 L 3 15.89 C 3 18.177 4.381 20.188 6.692 20.188 L 6.846 20.188 L 6.846 22.06 C 6.846 22.783 7.25 23.376 7.744 23.699 C 8.231 24.019 9.045 24.199 9.722 23.64 C 9.732 23.632 9.741 23.624 9.75 23.616 L 13.611 20.188 L 21.308 20.188 C 23.622 20.188 25 18.164 25 15.881 L 25 14 C 26.657 14 28 12.657 28 11 L 28 9 C 28 7.343 26.657 6 25 6 L 25 4.502 C 25 2.216 23.455 0 21.143 0 L 6.857 0 Z M 25 8 L 25 12 C 25.552 12 26 11.552 26 11 L 26 9 C 26 8.448 25.552 8 25 8 Z M 3 12 L 3 8 C 2.448 8 2 8.448 2 9 L 2 11 C 2 11.552 2.448 12 3 12 Z M 5 4.502 C 5 2.92 6.012 2 6.857 2 L 21.143 2 C 21.988 2 23 2.92 23 4.502 L 23 15.881 C 23 17.466 22.151 18.188 21.308 18.188 L 13.231 18.188 C 12.986 18.188 12.75 18.278 12.567 18.441 L 8.846 21.744 L 8.846 19.188 C 8.846 18.636 8.398 18.188 7.846 18.188 L 6.692 18.188 C 5.846 18.188 5 17.471 5 15.89 L 5 4.502 Z M 10 9 C 11.105 9 12 8.105 12 7 C 12 5.895 11.105 5 10 5 C 8.895 5 8 5.895 8 7 C 8 8.105 8.895 9 10 9 Z M 10.743 11.331 C 11.794 12.499 12.939 13 14 13 C 15.061 13 16.206 12.499 17.257 11.331 C 17.626 10.921 18.258 10.887 18.669 11.257 C 19.079 11.626 19.113 12.258 18.743 12.669 C 17.394 14.168 15.739 15 14 15 C 12.261 15 10.606 14.168 9.257 12.669 C 8.887 12.258 8.921 11.626 9.331 11.257 C 9.742 10.887 10.374 10.921 10.743 11.331 Z M 20 7 C 20 8.105 19.105 9 18 9 C 16.895 9 16 8.105 16 7 C 16 5.895 16.895 5 18 5 C 19.105 5 20 5.895 20 7 Z", fill: "currentColor", fillRule: "evenodd" }),
  recommend: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("path", { d: "M 13.423 2.326 C 13.423 2.326 13.423 2.326 13.423 2.326 L 10.185 8.344 C 10.037 8.619 9.77 8.809 9.462 8.858 L 2.543 9.964 C 2.543 9.964 2.542 9.964 2.542 9.964 C 1.986 10.057 1.864 10.642 2.18 10.952 C 2.18 10.953 2.18 10.952 2.18 10.952 L 7.116 15.766 C 7.348 15.992 7.456 16.317 7.406 16.637 L 6.358 23.322 L 6.357 23.325 C 6.291 23.739 6.761 24.185 7.282 23.932 L 13.576 20.899 C 13.85 20.767 14.169 20.767 14.444 20.899 L 20.732 23.929 C 20.732 23.93 20.733 23.93 20.733 23.93 C 21.253 24.177 21.724 23.733 21.662 23.32 C 21.662 23.32 21.662 23.321 21.662 23.32 L 20.613 16.637 C 20.563 16.317 20.671 15.992 20.902 15.766 L 25.82 10.962 C 26.143 10.646 26.007 10.059 25.464 9.974 L 25.461 9.974 L 18.538 8.867 C 18.231 8.818 17.964 8.628 17.816 8.353 L 14.613 2.4 C 14.597 2.376 14.582 2.351 14.569 2.326 C 14.334 1.892 13.658 1.892 13.423 2.326 Z M 16.283 1.295 C 15.258 -0.458 12.64 -0.431 11.664 1.375 L 11.663 1.376 L 8.659 6.961 L 2.224 7.99 L 2.22 7.99 C 0.142 8.331 -0.775 10.857 0.782 12.382 L 0.784 12.384 L 5.351 16.837 L 4.383 23.01 C 4.383 23.01 4.383 23.011 4.383 23.011 C 4.042 25.152 6.299 26.631 8.153 25.732 C 8.153 25.733 8.153 25.732 8.153 25.732 L 14.01 22.91 L 19.868 25.733 L 19.871 25.735 C 21.726 26.62 23.964 25.14 23.638 23.016 L 22.668 16.837 L 27.219 12.391 C 28.77 10.872 27.868 8.328 25.776 7.998 C 25.775 7.998 25.775 7.998 25.774 7.998 L 19.342 6.97 L 16.338 1.385 C 16.321 1.354 16.303 1.324 16.283 1.295 Z", fill: "currentColor", fillRule: "evenodd" }),
  lightbulb: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_jsx_runtime33.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("path", { d: "M 14.999 1 C 14.999 0.448 14.551 0 13.999 0 C 13.446 0 12.999 0.448 12.999 1 L 12.999 3 C 12.999 3.552 13.446 4 13.999 4 C 14.551 4 14.999 3.552 14.999 3 L 14.999 1 Z", fill: "currentColor", fillRule: "nonzero" }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("path", { d: "M 0 14 C 0 13.448 0.448 13 1 13 L 3 13 C 3.552 13 4 13.448 4 14 C 4 14.552 3.552 15 3 15 L 1 15 C 0.448 15 0 14.552 0 14 Z", fill: "currentColor", fillRule: "nonzero" }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("path", { d: "M 24 14 C 24 13.448 24.448 13 25 13 L 27 13 C 27.552 13 28 13.448 28 14 C 28 14.552 27.552 15 27 15 L 25 15 C 24.448 15 24 14.552 24 14 Z", fill: "currentColor", fillRule: "nonzero" }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("path", { d: "M 24.158 4.305 C 24.542 4.703 24.531 5.336 24.133 5.719 L 22.695 7.109 C 22.297 7.492 21.664 7.481 21.281 7.084 C 20.897 6.687 20.908 6.054 21.305 5.67 L 22.744 4.281 C 23.141 3.897 23.774 3.908 24.158 4.305 Z", fill: "currentColor", fillRule: "nonzero" }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("path", { d: "M 24.133 21.67 C 24.531 22.054 24.542 22.687 24.158 23.084 C 23.774 23.481 23.141 23.492 22.744 23.109 L 21.305 21.719 C 20.908 21.336 20.897 20.703 21.281 20.305 C 21.664 19.908 22.297 19.897 22.695 20.281 L 24.133 21.67 Z", fill: "currentColor", fillRule: "nonzero" }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("path", { d: "M 3.281 4.305 C 2.897 4.703 2.908 5.336 3.305 5.719 L 4.744 7.109 C 5.141 7.492 5.774 7.481 6.158 7.084 C 6.542 6.687 6.531 6.054 6.133 5.67 L 4.695 4.281 C 4.297 3.897 3.664 3.908 3.281 4.305 Z", fill: "currentColor", fillRule: "nonzero" }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("path", { d: "M 3.305 21.67 C 2.908 22.054 2.897 22.687 3.281 23.084 C 3.664 23.481 4.297 23.492 4.695 23.109 L 6.133 21.719 C 6.531 21.336 6.542 20.703 6.158 20.305 C 5.774 19.908 5.141 19.897 4.744 20.281 L 3.305 21.67 Z", fill: "currentColor", fillRule: "nonzero" }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("path", { d: "M 13.938 5 C 18.352 4.965 22 8.432 22 12.777 C 22 15.114 20.933 17.196 19.281 18.613 C 18.523 19.266 18.098 20.189 18.098 21.15 C 18.098 21.381 18.056 21.6 17.98 21.801 C 17.993 21.865 18 21.932 18 22 L 18 25.166 C 18 26.761 16.675 28 15.107 28 L 12.893 28 C 11.325 28 10 26.761 10 25.166 L 10 22 C 10 21.94 10.005 21.88 10.016 21.823 C 9.934 21.616 9.889 21.39 9.889 21.15 C 9.889 20.189 9.465 19.266 8.707 18.613 C 7.058 17.2 6.008 15.124 6 12.806 L 8.624 10.225 C 8.222 11.005 7.997 11.88 8 12.799 C 8.005 14.502 8.774 16.038 10.009 17.095 L 10.01 17.096 C 11.161 18.086 11.844 19.497 11.887 21 L 16.1 21 C 16.143 19.497 16.826 18.086 17.977 17.096 L 17.978 17.095 C 19.222 16.029 20 14.487 20 12.777 C 20 9.601 17.317 6.973 13.954 7 C 12.974 7.008 12.052 7.243 11.241 7.652 L 13.938 5 Z M 16 23 L 12 23 L 12 25.166 C 12 25.598 12.369 26 12.893 26 L 15.107 26 C 15.631 26 16 25.598 16 25.166 L 16 23 Z", fill: "currentColor", fillRule: "evenodd" }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("path", { d: "M 11.241 7.652 L 13.938 5 C 9.58 5.035 5.985 8.507 6 12.806 L 8.624 10.225 C 9.19 9.129 10.109 8.222 11.241 7.652 Z", fill: "currentColor", fillRule: "evenodd" })
  ] }),
  anomaly: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("path", { d: "M 11.762 0 C 18.257 0 23.522 5.266 23.522 11.762 C 23.522 14.649 22.48 17.292 20.753 19.339 L 27.841 26.426 C 28.231 26.816 28.231 27.45 27.841 27.841 C 27.45 28.231 26.816 28.231 26.426 27.841 L 19.339 20.753 C 17.292 22.48 14.649 23.522 11.762 23.522 C 5.266 23.522 0 18.257 0 11.762 C 0 5.266 5.266 0 11.762 0 Z M 11.762 2 C 6.371 2 2 6.371 2 11.762 C 2 17.153 6.371 21.522 11.762 21.522 C 17.152 21.522 21.522 17.152 21.522 11.762 C 21.522 6.371 17.153 2 11.762 2 Z M 12.598 6.067 C 13.009 6.08 13.37 6.343 13.509 6.73 L 15.771 13.066 L 19.066 13.066 C 19.619 13.066 20.066 13.514 20.066 14.066 C 20.066 14.619 19.619 15.066 19.066 15.066 L 15.066 15.066 C 14.644 15.066 14.267 14.801 14.125 14.403 L 12.482 9.803 L 10.485 14.461 C 10.328 14.828 9.966 15.066 9.566 15.066 L 5.066 15.066 C 4.514 15.066 4.066 14.619 4.066 14.066 C 4.067 13.514 4.514 13.067 5.066 13.066 L 8.907 13.066 L 11.647 6.673 C 11.809 6.295 12.187 6.055 12.598 6.067 Z", fill: "currentColor", fillRule: "nonzero" }),
  "document-chart": /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("path", { d: "M 15 0 C 15.271 0 15.517 0.109 15.697 0.284 L 15.699 0.285 L 22.699 7.126 L 22.837 7.453 C 22.901 7.552 22.948 7.663 22.975 7.781 L 23 7.841 L 23 11 C 23 11.552 22.552 12 22 12 C 21.448 12 21 11.552 21 11 L 21 9 L 16.398 9 C 15.076 9 14 7.924 14 6.602 L 14 2 L 3.802 2 C 2.784 2 2 2.799 2 3.738 L 2 24.262 C 2 25.201 2.784 26 3.802 26 L 5 26 C 5.552 26 6 26.448 6 27 C 6 27.552 5.552 28 5 28 L 3.802 28 C 1.723 28 0 26.348 0 24.262 L 0 3.738 C 0 1.652 1.723 0 3.802 0 L 15 0 Z M 24 14 C 24.552 14 25 14.448 25 15 L 25 26 C 25.552 26 26 26.448 26 27 C 26 27.552 25.552 28 25 28 L 8 28 C 7.448 28 7 27.552 7 27 C 7 26.448 7.448 26 8 26 L 8 22 C 8 21.448 8.448 21 9 21 L 12 21 C 12.552 21 13 21.448 13 22 L 13 26 L 14 26 L 14 19 C 14 18.448 14.448 18 15 18 L 18 18 C 18.552 18 19 18.448 19 19 L 19 26 L 20 26 L 20 15 C 20 14.448 20.448 14 21 14 L 24 14 Z M 10 26 L 11 26 L 11 23 L 10 23 L 10 26 Z M 16 26 L 17 26 L 17 20 L 16 20 L 16 26 Z M 22 26 L 23 26 L 23 16 L 22 16 L 22 26 Z M 16 6.602 C 16 6.82 16.18 7 16.398 7 L 19.709 7 L 16 3.375 L 16 6.602 Z", fill: "currentColor", fillRule: "nonzero" }),
  filter: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("path", { d: "M 23.237 0 C 24.327 0 25.258 0.554 25.714 1.397 C 26.185 2.269 26.094 3.373 25.281 4.187 C 25.273 4.194 25.265 4.202 25.257 4.209 L 17 11.942 L 17 19.016 C 17 19.201 16.948 19.383 16.851 19.541 L 13.563 24.868 L 13.564 24.869 C 13.204 25.465 12.606 25.766 12.07 25.898 C 11.525 26.033 10.933 26.027 10.393 25.92 C 9.856 25.813 9.295 25.591 8.845 25.223 C 8.383 24.844 7.999 24.268 7.999 23.521 L 7.999 11.906 L 0.698 4.165 L 0.699 4.164 C -0.095 3.352 -0.182 2.261 0.285 1.397 C 0.737 0.561 1.656 0.01 2.735 0.001 C 2.741 0.001 2.748 0 2.754 0 L 23.237 0 Z M 9.999 23.521 C 9.999 23.525 9.991 23.575 10.114 23.676 C 10.249 23.786 10.481 23.898 10.783 23.958 C 11.081 24.017 11.372 24.011 11.589 23.957 C 11.785 23.908 11.844 23.844 11.852 23.835 L 11.857 23.827 L 15 18.731 L 15 11.51 C 15 11.233 15.115 10.968 15.317 10.779 L 23.873 2.765 C 23.966 2.668 23.991 2.592 23.998 2.545 C 24.005 2.492 23.996 2.425 23.955 2.349 C 23.873 2.197 23.646 2 23.237 2 L 2.762 2 C 2.353 2 2.126 2.197 2.044 2.349 C 2.003 2.425 1.994 2.492 2.001 2.545 C 2.006 2.581 2.022 2.635 2.071 2.701 L 2.132 2.772 L 2.153 2.793 L 9.727 10.823 C 9.902 11.009 9.999 11.255 9.999 11.51 L 9.999 23.521 Z", fill: "currentColor", fillRule: "nonzero" }),
  information: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("path", { d: "M 14 0 C 21.732 0 28 6.268 28 14 C 28 21.732 21.732 28 14 28 C 6.268 28 0 21.732 0 14 C 0 6.268 6.268 0 14 0 Z M 14 2 C 7.373 2 2 7.373 2 14 C 2 20.627 7.373 26 14 26 C 20.627 26 26 20.627 26 14 C 26 7.373 20.627 2 14 2 Z M 14 10.996 C 14.69 10.996 15.25 11.556 15.25 12.246 L 15.25 20.75 C 15.25 21.44 14.69 22 14 22 C 13.31 22 12.75 21.44 12.75 20.75 L 12.75 12.246 C 12.75 11.556 13.31 10.996 14 10.996 Z M 14 6 C 14.828 6 15.5 6.672 15.5 7.5 C 15.5 8.328 14.828 9 14 9 C 13.172 9 12.5 8.328 12.5 7.5 C 12.5 6.672 13.172 6 14 6 Z", fill: "currentColor", fillRule: "nonzero" }),
  "log-out": /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("path", { d: "M 15 0 C 17.761 0 20 2.239 20 5 L 20 6 C 20 6.552 19.552 7 19 7 C 18.448 7 18 6.552 18 6 L 18 5 C 18 3.343 16.657 2 15 2 L 5 2 C 3.343 2 2 3.343 2 5 L 2 23 C 2 24.657 3.343 26 5 26 L 15 26 C 16.657 26 18 24.657 18 23 L 18 22 C 18 21.448 18.448 21 19 21 C 19.552 21 20 21.448 20 22 L 20 23 C 20 25.761 17.761 28 15 28 L 5 28 C 2.239 28 0 25.761 0 23 L 0 5 C 0 2.239 2.239 0 5 0 L 15 0 Z M 17.327 8.26 C 17.736 7.888 18.369 7.919 18.74 8.327 L 23.286 13.332 C 23.632 13.714 23.632 14.296 23.285 14.677 L 18.739 19.673 C 18.368 20.081 17.736 20.111 17.327 19.739 C 16.919 19.368 16.889 18.736 17.261 18.327 L 20.246 15.045 L 11 15.045 C 10.448 15.045 10 14.597 10 14.045 C 10 13.493 10.448 13.045 11 13.045 L 20.324 13.045 L 17.26 9.673 C 16.888 9.264 16.919 8.631 17.327 8.26 Z", fill: "currentColor", fillRule: "nonzero" }),
  "checkmark-filled": /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("path", { d: "M 28 14 C 28 21.732 21.732 28 14 28 C 6.268 28 0 21.732 0 14 C 0 6.268 6.268 0 14 0 C 21.732 0 28 6.268 28 14 Z M 20.737 9.676 C 21.11 9.269 21.083 8.636 20.676 8.263 C 20.269 7.89 19.636 7.917 19.263 8.324 L 11.75 16.52 L 8.737 13.233 C 8.364 12.826 7.731 12.799 7.324 13.172 C 6.917 13.545 6.89 14.178 7.263 14.585 L 11.013 18.676 C 11.202 18.882 11.47 19 11.75 19 C 12.03 19 12.298 18.882 12.487 18.676 L 20.737 9.676 Z", fill: "currentColor", fillRule: "evenodd" }),
  "error-filled": /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("path", { d: "M 14 28 C 21.732 28 28 21.732 28 14 C 28 6.268 21.732 0 14 0 C 6.268 0 0 6.268 0 14 C 0 21.732 6.268 28 14 28 Z M 15.5 20.496 C 15.5 21.325 14.828 21.996 14 21.996 C 13.172 21.996 12.5 21.325 12.5 20.496 C 12.5 19.668 13.172 18.996 14 18.996 C 14.828 18.996 15.5 19.668 15.5 20.496 Z M 15.25 7.25 C 15.25 6.56 14.69 6 14 6 C 13.31 6 12.75 6.56 12.75 7.25 L 12.75 15.781 C 12.75 16.472 13.31 17.031 14 17.031 C 14.69 17.031 15.25 16.472 15.25 15.781 L 15.25 7.25 Z", fill: "currentColor", fillRule: "evenodd" }),
  "warning-alt": /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("path", { d: "M 14 2 L 27 25 L 1 25 Z M 14 5.5 L 4.5 23 L 23.5 23 Z M 13 11 L 13 17 L 15 17 L 15 11 Z M 13 19 L 13 21 L 15 21 L 15 19 Z", fillRule: "evenodd" }),
  "arrow-up-right": /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("path", { d: "M 19 0 C 19.267 0 19.523 0.107 19.711 0.297 C 19.899 0.487 20.003 0.744 20 1.011 L 19.843 16.011 C 19.837 16.563 19.384 17.006 18.832 17 C 18.28 16.994 17.837 16.541 17.843 15.989 L 17.974 3.439 L 1.707 19.707 C 1.317 20.098 0.683 20.098 0.293 19.707 C -0.098 19.317 -0.098 18.683 0.293 18.293 L 16.586 2 L 4 2 C 3.448 2 3 1.552 3 1 C 3 0.448 3.448 0 4 0 L 19 0 Z", fillRule: "evenodd" }),
  "arrow-down-right": /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("path", { d: "M 19 20 C 19.267 20 19.523 19.893 19.711 19.703 C 19.899 19.513 20.003 19.256 20 18.989 L 19.843 3.989 C 19.837 3.437 19.384 2.994 18.832 3 C 18.28 3.006 17.837 3.459 17.843 4.011 L 17.974 16.561 L 1.707 0.293 C 1.317 -0.098 0.683 -0.098 0.293 0.293 C -0.098 0.683 -0.098 1.317 0.293 1.707 L 16.586 18 L 4 18 C 3.448 18 3 18.448 3 19 C 3 19.552 3.448 20 4 20 L 19 20 Z", fillRule: "evenodd" })
};
var viewBoxMap = {
  dashboard: "0 0 28 28",
  analytics: "0 0 28 28",
  network: "0 0 28 23",
  group: "0 0 28 25",
  "chat-bot": "0 0 28 24.001",
  recommend: "0 0 28 26",
  lightbulb: "0 0 28 28",
  anomaly: "0 0 28.134 28.134",
  "document-chart": "0 0 26 28",
  filter: "0 0 25.999 26",
  information: "0 0 28 28",
  "log-out": "0 0 23.545 28",
  "checkmark-filled": "0 0 28 28",
  "error-filled": "0 0 28 28",
  "warning-alt": "0 0 28 28",
  "arrow-up-right": "0 0 20 20",
  "arrow-down-right": "0 0 20 20"
};
var Icon = ({
  name,
  size,
  className,
  style
}) => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: viewBoxMap[name] || "0 0 28 28",
    fill: "currentColor",
    width: size || void 0,
    height: size || void 0,
    className,
    style,
    children: icons[name]
  }
);
var navIcons = [
  "dashboard",
  "analytics",
  "network",
  "group",
  "chat-bot",
  "recommend",
  "lightbulb",
  "anomaly",
  "document-chart",
  "filter",
  "information",
  "log-out",
  "checkmark-filled",
  "error-filled",
  "warning-alt",
  "arrow-up-right",
  "arrow-down-right"
];
var BrandIcons = () => /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "fdn-brand-icons", children: [
  /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "fdn-head", children: [
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("h1", { children: "Iconography \u2014 Shidoka Icon Library" }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("p", { children: [
      "Icons pulled from ",
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("code", { style: { fontFamily: "var(--font-mono)", fontSize: "11px" }, children: "@kyndryl-design-system/shidoka-icons" }),
      " (Shidoka Icon Library). Authored on a 32\xD732 grid with 2px padding; rendered via inline sprite so strokes follow ",
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("code", { style: { fontFamily: "var(--font-mono)", fontSize: "11px" }, children: "currentColor" }),
      "."
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "fdn-section", children: [
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("h2", { children: "Size scale \xB7 pairs with type" }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "fdn-icon-scale", children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "fdn-scale-item", children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Icon, { name: "dashboard", size: 14 }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { children: "14 \xB7 inline" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "fdn-scale-item", children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Icon, { name: "dashboard", size: 16 }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { children: "16 \xB7 default" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "fdn-scale-item", children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Icon, { name: "dashboard", size: 20 }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { children: "20 \xB7 heads" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "fdn-scale-item", children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Icon, { name: "dashboard", size: 24 }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { children: "24 \xB7 toolbars" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "fdn-scale-item", children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Icon, { name: "dashboard", size: 32 }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { children: "32 \xB7 feature" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "fdn-scale-item", children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Icon, { name: "dashboard", size: 48 }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { children: "48 \xB7 empty state" })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "fdn-section", children: [
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("h2", { children: "Navigation & product set \xB7 17 icons" }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "fdn-icon-grid", children: navIcons.map((name) => /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "fdn-ic", children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Icon, { name }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { children: name })
    ] }, name)) })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "fdn-section", children: [
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("h2", { children: "Tonal chips \xB7 icon + surface pairing" }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "fdn-chips", children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "ki-chip", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Icon, { name: "dashboard" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "fdn-chip-label", children: ".ki-chip \xB7 neutral" }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "ki-chip is-brand", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Icon, { name: "recommend" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "fdn-chip-label", children: ".ki-chip.is-brand \xB7 warm-red" }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "ki-chip is-spruce", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Icon, { name: "lightbulb" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "fdn-chip-label", children: ".ki-chip.is-spruce" })
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "fdn-section", children: [
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("h2", { children: "In\u2011context pairings" }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { style: { display: "flex", gap: "18px", flexWrap: "wrap", alignItems: "center", padding: "14px 0" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
        "button",
        {
          style: {
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            height: "36px",
            padding: "0 14px",
            borderRadius: "6px",
            background: "#171717",
            color: "#fff",
            border: "none",
            font: "500 13px var(--font-sans)",
            cursor: "pointer"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Icon, { name: "lightbulb", size: 14 }),
            " Investigate with AI"
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("span", { style: { display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#047857" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Icon, { name: "arrow-up-right", size: 14 }),
        " +124 WoW"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("span", { style: { display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#B91C1C" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Icon, { name: "arrow-down-right", size: 14 }),
        " \u22124 pts"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
        "span",
        {
          style: {
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "4px 10px",
            borderRadius: "9999px",
            background: "#FEF3C7",
            color: "#B45309",
            fontSize: "11px",
            fontWeight: 500
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Icon, { name: "warning-alt", size: 14 }),
            " 30d+ unreviewed"
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
        "span",
        {
          style: {
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "4px 10px",
            borderRadius: "9999px",
            background: "#D1FAE5",
            color: "#047857",
            fontSize: "11px",
            fontWeight: 500
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Icon, { name: "checkmark-filled", size: 14 }),
            " Reconciled"
          ]
        }
      )
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "fdn-notes", children: [
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("strong", { children: "Load pattern." }),
    " Include ",
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("code", { children: '<script src="../assets/icons/ki.js" defer></script>' }),
    " once per page \u2014 the loader fetches ",
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("code", { children: "sprite.svg" }),
    " and injects it at ",
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("code", { children: "<body>" }),
    " start so ",
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("code", { children: '<use href="#icon-\u2026"/>' }),
    " resolves without CORS quirks on ",
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("code", { children: "file://" }),
    ". Size with ",
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("code", { children: ".ki-14" }),
    "/",
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("code", { children: ".ki-16" }),
    "/",
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("code", { children: ".ki-20" }),
    "/",
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("code", { children: ".ki-24" }),
    "/",
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("code", { children: ".ki-32" }),
    "/",
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("code", { children: ".ki-48" }),
    "; color via ",
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("code", { children: "currentColor" }),
    "."
  ] })
] });

// storybook/src/composites/AiChatHistory.tsx
var import_react10 = require("react");
var import_jsx_runtime34 = require("react/jsx-runtime");
var SparkSvg2 = () => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("path", { d: "M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" }) });
var todayThreads = [
  "Why did payments trust drop overnight?",
  "Tell me more about Hybrid IT Modernization",
  "How do I prioritise applications to modernise?"
];
var yesterdayThreads = [
  "Walk me through the orphan-CI policy v4"
];
var AiChatHistory = () => {
  const [query, setQuery] = (0, import_react10.useState)("");
  const [activeThread, setActiveThread] = (0, import_react10.useState)(todayThreads[0]);
  const [detailTab, setDetailTab] = (0, import_react10.useState)("Chat History");
  const [listTab, setListTab] = (0, import_react10.useState)("Chat History");
  const filteredToday = todayThreads.filter(
    (t) => t.toLowerCase().includes(query.toLowerCase())
  );
  const filteredYesterday = yesterdayThreads.filter(
    (t) => t.toLowerCase().includes(query.toLowerCase())
  );
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "cmp-history-wrap", children: [
    /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("section", { className: "cmp-card", children: [
      /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "cmp-eyebrow", children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(SparkSvg2, {}),
        "Chat List"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "cmp-hist-tabs", children: ["Chat", "Chat History", "Settings"].map((t) => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
        "button",
        {
          className: `cmp-hist-tab ${listTab === t ? "cmp-on" : ""}`,
          type: "button",
          onClick: () => setListTab(t),
          children: t
        },
        t
      )) }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("h2", { className: "cmp-h2", children: "Chat History" }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "cmp-search", style: { marginTop: 12 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("circle", { cx: "11", cy: "11", r: "8" }),
          /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("path", { d: "M21 21l-4.35-4.35" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
          "input",
          {
            placeholder: "Search",
            value: query,
            onChange: (e) => setQuery(e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "cmp-optional-text", children: "Optional text" }),
      filteredToday.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_jsx_runtime34.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "cmp-group", children: "Today \xB7 26 Apr 2026" }),
        filteredToday.map((thread) => /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(
          "button",
          {
            className: `cmp-hist-row ${activeThread === thread ? "cmp-active" : ""}`,
            type: "button",
            onClick: () => setActiveThread(thread),
            children: [
              thread,
              /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("span", { className: "cmp-ai-glyph-sm" })
            ]
          },
          thread
        ))
      ] }),
      filteredYesterday.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_jsx_runtime34.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "cmp-group", children: "Yesterday \xB7 25 Apr 2026" }),
        filteredYesterday.map((thread) => /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(
          "button",
          {
            className: `cmp-hist-row ${activeThread === thread ? "cmp-active" : ""}`,
            type: "button",
            onClick: () => setActiveThread(thread),
            children: [
              thread,
              /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("span", { className: "cmp-ai-glyph-sm" })
            ]
          },
          thread
        ))
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("button", { className: "cmp-show-older", type: "button", children: [
        "Show older",
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("polyline", { points: "6 9 12 15 18 9" }) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("section", { className: "cmp-detail-card", children: [
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "cmp-d-tabs", children: ["Chat", "Chat History", "Settings"].map((t) => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
        "button",
        {
          className: `cmp-hist-tab ${detailTab === t ? "cmp-on" : ""}`,
          type: "button",
          onClick: () => setDetailTab(t),
          children: t
        },
        t
      )) }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "cmp-d-head", children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "cmp-eyebrow", children: [
          /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(SparkSvg2, {}),
          "Response load"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("h3", { children: "Chat History" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "cmp-q", children: "What are the benefits of adopting Hybrid IT Modernization?" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "cmp-hist-stream", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "cmp-user-msg", children: "How do we prioritise which applications to modernise first?" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "cmp-hist-resp-load", children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "cmp-dot" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "cmp-bars", children: [
          /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "cmp-bar" }),
          /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "cmp-bar" }),
          /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "cmp-bar" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "cmp-hist-specs", children: [
        "Reuses the ",
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("strong", { children: "AI Loader \xB7 response load" }),
        " skeleton \u2014 Warm Red dot avatar + 3 shimmer bars sized 62 / 88 / 74 %. Swap to streamed Markdown when first token arrives."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "cmp-hist-composer", children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "cmp-hist-input-row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("input", { placeholder: "Type your message\\u2026" }),
          /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("button", { className: "cmp-hist-send", "aria-label": "Send", type: "button", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("path", { d: "M22 2 11 13M22 2l-7 20-4-9-9-4z" }) }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "cmp-hist-tools", children: [
          /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("button", { className: "cmp-tbtn", type: "button", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
            /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("button", { className: "cmp-tbtn", type: "button", children: [
            "Option ",
            /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("polyline", { points: "6 9 12 15 18 9" }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("button", { className: "cmp-tbtn", type: "button", children: [
            "Option ",
            /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("polyline", { points: "6 9 12 15 18 9" }) })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "cmp-hist-disclaimer", children: "Bridge Assist may occasionally generate incorrect or misleading information." })
      ] })
    ] })
  ] });
};

// storybook/src/composites/AiFeedbackSources.tsx
var import_react11 = require("react");
var import_jsx_runtime35 = require("react/jsx-runtime");
var SparkSvg3 = () => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("path", { d: "M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" }) });
var CopyIcon = () => /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
  /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
  /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("path", { d: "M5 15V5a2 2 0 012-2h10" })
] });
var RegenIcon = () => /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("polyline", { points: "23 4 23 10 17 10" }),
  /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("polyline", { points: "1 20 1 14 7 14" }),
  /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" })
] });
var ThumbsUpIcon = () => /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("svg", { viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("path", { d: "M5 13h6v14H5a1 1 0 0 1-1-1V14a1 1 0 0 1 1-1Z" }),
  /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("path", { d: "M11 13l4-9a1 1 0 0 1 .9-.5 3 3 0 0 1 3 3v6h7.5a2 2 0 0 1 1.97 2.34l-1.83 11A2 2 0 0 1 24.58 27H11V13Z" })
] });
var ThumbsDownIcon = () => /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("svg", { viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("path", { d: "M27 19h-6V5h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1Z" }),
  /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("path", { d: "M21 19l-4 9a1 1 0 0 1-.9.5 3 3 0 0 1-3-3v-6H5.6a2 2 0 0 1-1.97-2.34l1.83-11A2 2 0 0 1 7.42 5H21V19Z" })
] });
var ChevDown = () => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("polyline", { points: "6 9 12 15 18 9" }) });
var ChevUp = () => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("polyline", { points: "18 15 12 9 6 15" }) });
var sourceChips = [
  "CMDB-Trust-Q3.pdf",
  "orphan-policy-v4",
  "ServiceNow CR-2914",
  "payments-runbook"
];
var AiFeedbackSources = () => {
  const [mode, setMode] = (0, import_react11.useState)("idle");
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "cmp-feedback-wrap", children: [
    /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("section", { className: "cmp-card", children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "cmp-eyebrow", children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(SparkSvg3, {}),
        "Feedback & Sources \xB7 Component"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("h2", { className: "cmp-h2", children: "Feedback & Sources" }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "cmp-sub", children: "Sits beneath every AI response. Three states: collapsed action row, expanded sources, expanded feedback form." }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "cmp-kicker", children: "Collapsed (idle)" }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "cmp-actions", children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("button", { className: "cmp-ico-btn", type: "button", children: [
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(CopyIcon, {}),
          " Copy"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("button", { className: "cmp-ico-btn", type: "button", "aria-label": "Regenerate", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(RegenIcon, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("button", { className: "cmp-ico-btn", type: "button", "aria-label": "Thumbs up", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(ThumbsUpIcon, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("button", { className: "cmp-ico-btn", type: "button", "aria-label": "Thumbs down", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(ThumbsDownIcon, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(
          "button",
          {
            className: "cmp-ico-btn",
            type: "button",
            onClick: () => setMode(mode === "sources" ? "idle" : "sources"),
            children: [
              "Sources used ",
              /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(ChevDown, {})
            ]
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "cmp-kicker", children: "Sources expanded" }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "cmp-actions", children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("button", { className: "cmp-ico-btn", type: "button", children: [
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(CopyIcon, {}),
          " Copy"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("button", { className: "cmp-ico-btn", type: "button", "aria-label": "Regenerate", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(RegenIcon, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("button", { className: "cmp-ico-btn", type: "button", children: [
          "Sources used (10) ",
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(ChevUp, {})
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "cmp-sources", children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("button", { className: "cmp-close-src", type: "button", onClick: () => setMode("idle"), children: "\xD7" }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "cmp-sources-label", children: "Used 10" }),
        sourceChips.map((chip, i) => /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("span", { className: "cmp-src-chip", children: [
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "cmp-num", children: i + 1 }),
          " ",
          chip
        ] }, chip)),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("button", { className: "cmp-show-more-src", type: "button", children: "Show more \u2193" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "cmp-kicker", children: "Feedback expanded" }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "cmp-actions", children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("button", { className: "cmp-ico-btn", type: "button", children: [
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(CopyIcon, {}),
          " Copy"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("button", { className: "cmp-ico-btn", type: "button", "aria-label": "Regenerate", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(RegenIcon, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
          "button",
          {
            className: "cmp-ico-btn cmp-flag cmp-is-active",
            type: "button",
            "aria-label": "Thumbs down",
            onClick: () => setMode(mode === "feedback" ? "idle" : "feedback"),
            children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(ThumbsDownIcon, {})
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "cmp-feedback", children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("button", { className: "cmp-close-fb", type: "button", onClick: () => setMode("idle"), children: "\xD7" }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("h3", { children: [
          "Could you tell us a little more? ",
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { style: { color: "var(--fg-muted)", fontWeight: 400 }, children: "(optional)" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "cmp-opts", children: [
          /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("label", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("input", { type: "checkbox" }),
            " Inaccurate"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("label", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("input", { type: "checkbox" }),
            " Outdated source"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("label", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("input", { type: "checkbox" }),
            " Missing context"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("textarea", { placeholder: "Enter detailed feedback" }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "cmp-fb-row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("button", { className: "cmp-fb-btn cmp-primary", type: "button", children: "Submit" }),
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("button", { className: "cmp-fb-btn cmp-ghost", type: "button", children: "Cancel" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("section", { className: "cmp-card", children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "cmp-eyebrow", children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(SparkSvg3, {}),
        "Feedback & Sources \xB7 Base"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("h2", { className: "cmp-h2", children: "Anatomy" }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "cmp-sub", children: "Tokens, slots, and the order actions appear in." }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "cmp-kicker", children: "Action order (LTR)" }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "cmp-anatomy-specs", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("ol", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("strong", { children: "Copy" }),
          " \u2014 primary, always present"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("strong", { children: "Regenerate" }),
          " \u2014 only on AI messages, never on user"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("strong", { children: "Thumbs up / down" }),
          " \u2014 capture qualitative signal"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("strong", { children: "Flag / Report" }),
          " \u2014 escalation to human review"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("strong", { children: "Sources used (n)" }),
          " \u2014 trailing, expands the rail below"
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "cmp-kicker", children: "Source-chip variants" }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "cmp-actions", style: { flexWrap: "wrap" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("span", { className: "cmp-src-chip", children: [
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "cmp-num", children: "1" }),
          " Source label"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("span", { className: "cmp-src-chip", style: { borderColor: "var(--k-spruce-60)", background: "rgba(41,112,122,.06)" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "cmp-num", children: "2" }),
          " Hovered"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("span", { className: "cmp-src-chip", style: { borderStyle: "dashed" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "cmp-num", children: "3" }),
          " Citing CMDB"
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "cmp-kicker", children: "Feedback form" }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "cmp-anatomy-specs", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("li", { children: "Form opens INLINE, never in a modal \u2014 the response stays visible above." }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("li", { children: [
          "Checkboxes are a fixed taxonomy of ",
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("code", { children: "3\u20135" }),
          " options \u2014 never freeform-only."
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("li", { children: "Submit posts to the \u201CLearned from you\u201D inbox, mirroring agentic feedback signals." })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "cmp-kicker", children: "Don't" }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "cmp-anatomy-specs", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("li", { children: "Don't combine sources + feedback in the same expansion \u2014 keep one open at a time." }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("li", { children: "Don't show feedback panel without a thumbs-down event first." }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("li", { children: "Don't paginate sources beyond 10 \u2014 collapse with \u201CShow more\u201D." })
      ] }) })
    ] })
  ] });
};

// storybook/src/composites/AiLaunchButton.tsx
var import_react12 = __toESM(require("react"));
var import_jsx_runtime36 = require("react/jsx-runtime");
var SparkSvg4 = () => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("path", { d: "M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" }) });
var AiLaunchButton = () => {
  const [dark, setDark] = (0, import_react12.useState)(false);
  const states = [
    { label: "Default", cls: "", meta: "spruce-60 \u2194 warm-red-50 \xB7 1.5px" },
    { label: "Hover", cls: "cmp-hover", meta: "+ ring rgba(warm-red, .12) \xB7 3px" },
    { label: "Focused", cls: "cmp-focused", meta: "ring rgba(spruce, .30) \xB7 3px" },
    { label: "Pressed", cls: "cmp-pressed", meta: "scale .96 \xB7 inset shadow + glow" },
    { label: "Disabled", cls: "cmp-disabled", meta: "opacity .4 \xB7 grayscale .4", disabled: true }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "cmp-launch-wrap", children: [
    /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("section", { className: "cmp-card", children: [
      /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "cmp-eyebrow", children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(SparkSvg4, {}),
        "AI Launch Button \xB7 Component"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("h2", { className: "cmp-h2", children: "Launch Button" }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "cmp-sub", children: "Single entry point that hands control to the AI assistant. Always circular, gradient-bordered, and stamped with the AI \u2756 glyph." }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "cmp-toggle-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          "button",
          {
            className: `cmp-toggle ${!dark ? "cmp-on" : ""}`,
            type: "button",
            onClick: () => setDark(false),
            children: "Light surface"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          "button",
          {
            className: `cmp-toggle ${dark ? "cmp-on" : ""}`,
            type: "button",
            onClick: () => setDark(true),
            children: "Dark surface"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: `cmp-matrix ${dark ? "cmp-dark-matrix" : ""}`, children: states.map((s) => /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(import_react12.default.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "cmp-lab", children: s.label }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "cmp-cell", children: [
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
            "button",
            {
              className: `cmp-ai-launch ${dark ? "cmp-dark" : ""} ${s.cls}`,
              "aria-label": "Launch AI",
              type: "button",
              disabled: s.disabled,
              children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { className: "cmp-glyph" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { className: "cmp-meta", children: s.meta })
        ] })
      ] }, s.label)) }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "cmp-kicker", children: "In context" }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "cmp-preview", children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "cmp-frame", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("button", { className: "cmp-ai-launch", "aria-label": "Launch AI", type: "button", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { className: "cmp-glyph" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "cmp-frame cmp-dk", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("button", { className: "cmp-ai-launch cmp-dark", "aria-label": "Launch AI", type: "button", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { className: "cmp-glyph" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "cmp-specs", children: [
          "Drop the launcher into ",
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("strong", { children: "app shell headers" }),
          ", table-row trailing slots, or floating dock \u2014 never inline with primary CTAs.",
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("br", {}),
          "Pair with tooltip ",
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("code", { children: "Ask Bridge Assist" }),
          " when not contextually obvious."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("section", { className: "cmp-card", children: [
      /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "cmp-eyebrow", children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(SparkSvg4, {}),
        "AI Launch Button \xB7 Core"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("h2", { className: "cmp-h2", children: "Glyph (Core)" }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "cmp-sub", children: "The bare \u2756 AI mark. Fill is always the Spruce\u2194Warm-Red gradient. Use anywhere AI authorship needs to be flagged." }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "cmp-kicker", children: "Sizes" }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "cmp-var-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "cmp-v", children: [
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { className: "cmp-ai-glyph cmp-sm" }),
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { className: "cmp-tag", children: "16px \xB7 inline label / chip" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "cmp-v", children: [
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { className: "cmp-ai-glyph" }),
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { className: "cmp-tag", children: "24px \xB7 default UI" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "cmp-v", children: [
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { className: "cmp-ai-glyph cmp-lg" }),
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { className: "cmp-tag", children: "32px \xB7 feature / empty state" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "cmp-kicker", children: "When to use" }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "cmp-specs", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("strong", { children: "Eyebrow" }),
          " on AI-authored sections (titles, panels, modals)"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("strong", { children: "Avatar" }),
          " on agent chat messages \u2014 never user messages"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("strong", { children: "Trailing badge" }),
          " on suggestions, generated values, AI-only fields"
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "cmp-kicker", children: "Don't" }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "cmp-specs", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("li", { children: "Don't recolor the gradient (no solid fills, no brand accent swaps)" }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("li", { children: "Don't pair with secondary chrome \u2014 the glyph IS the moment" }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("li", { children: "Don't animate spin/pulse permanently \u2014 only during a generating state" })
      ] }) })
    ] })
  ] });
};

// storybook/src/composites/AiLoader.tsx
var import_jsx_runtime37 = require("react/jsx-runtime");
var SparkSvg5 = () => /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("path", { d: "M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" }) });
var AiLoader = () => /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "cmp-loader-wrap", children: [
  /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("section", { className: "cmp-card", children: [
    /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "cmp-eyebrow", children: [
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(SparkSvg5, {}),
      "AI Loader \xB7 Base"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("h2", { className: "cmp-h2", children: "AI Loader" }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "cmp-sub", children: "Spinning ring composed of two opposite arcs \u2014 Warm Red 50 and Spruce 60. Used whenever the agent is actively thinking." }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "cmp-loader-matrix", children: [
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { className: "cmp-ai-loader cmp-xl" }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { className: "cmp-ai-loader" }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { className: "cmp-ai-loader cmp-md" }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { className: "cmp-ai-loader cmp-sm" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "cmp-kicker", children: "Sizes" }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "cmp-specs", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("code", { children: ".sm" }),
        " 16px \u2014 inside chips, inline labels"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("code", { children: ".md" }),
        " 32px \u2014 input fields, table rows"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("code", { children: ".ai-loader" }),
        " 64px \u2014 page-level / panel"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("code", { children: ".xl" }),
        " 96px \u2014 full-screen blocking"
      ] })
    ] }) })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("section", { className: "cmp-card", children: [
    /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "cmp-eyebrow", children: [
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(SparkSvg5, {}),
      "AI Loader \xB7 In Context"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("h2", { className: "cmp-h2", children: "Loading patterns" }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "cmp-sub", children: "Three places the loader appears: input field, suggested chips, and streaming response." }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "cmp-kicker", children: "Suggested-prompt chips (loading)" }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "cmp-chips", children: [
      /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("span", { className: "cmp-chip", children: [
        "Cloud Services ",
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { className: "cmp-x", children: "\xD7" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("span", { className: "cmp-chip", children: [
        "CMDB Drift Q3 ",
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { className: "cmp-x", children: "\xD7" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("span", { className: "cmp-chip", children: [
        "Hybrid IT Mod ",
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { className: "cmp-x", children: "\xD7" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("span", { style: { display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--fg-muted)" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { className: "cmp-ai-loader cmp-sm" }),
        " Generating more\u2026"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "cmp-kicker", children: "Composer (AI thinking)" }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "cmp-lozenges", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "cmp-ai-input", children: [
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { style: { opacity: 0.7 }, children: "Type your message\u2026" }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { className: "cmp-ai-loader cmp-sm", style: { marginLeft: "auto" } }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("button", { className: "cmp-send", "aria-label": "send", type: "button", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("path", { d: "M22 2 11 13M22 2l-7 20-4-9-9-4z" }) }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "cmp-kicker", children: "Response load (streaming)" }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "cmp-resp-load", children: [
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "cmp-dot" }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "cmp-bars", children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "cmp-bar" }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "cmp-bar" }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "cmp-bar" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "cmp-kicker", children: "Rules" }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "cmp-specs", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("li", { children: "Never show a generic spinner inside an AI surface \u2014 always this ring." }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("li", { children: "If the wait exceeds 4s, swap to the streaming skeleton above with a status line." }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("li", { children: "Reduced-motion clients: rotation slows to 6s instead of stopping." })
    ] }) })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("section", { className: "cmp-card cmp-full-span", children: [
    /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "cmp-eyebrow", children: [
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(SparkSvg5, {}),
      "AI Loader \xB7 Panel render"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("h2", { className: "cmp-h2", children: "Panel render" }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "cmp-sub", children: "For full-panel generative work \u2014 sketching a graph, drafting a diagram, rendering an image. A soft dot grid where Warm Red and Spruce clusters drift across the canvas. Always paired with a status label (\u201CSketching it out\u201D, \u201CCreating image\u201D, etc.)." }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "cmp-panel-grid", children: ["Sketching it out", "Creating image", "Drafting topology"].map((label) => /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "cmp-panel-load", children: [
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { className: "cmp-label", children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "cmp-grid" }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "cmp-grid cmp-tint" }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "cmp-grid cmp-spruce" })
    ] }, label)) }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "cmp-kicker", children: "Rules" }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "cmp-specs", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("li", { children: [
        "Use only when the AI is generating something ",
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("strong", { children: "visual and bounded" }),
        " \u2014 never as a generic page loader."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("li", { children: "Status label is required, top-left, with a blinking caret. Update the label as the agent moves through stages." }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("li", { children: "Three drift layers (neutral \xB7 Warm Red \xB7 Spruce) at 5.5 / 7 / 8.5s \u2014 slow on purpose. Never speed them up." }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("li", { children: "Reduced-motion clients: drift slows to 14\u201320s but never stops." })
    ] }) })
  ] })
] });

// storybook/src/composites/AiModalChat.tsx
var import_react13 = require("react");
var import_jsx_runtime38 = require("react/jsx-runtime");
var SparkSvg6 = () => /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("path", { d: "M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" }) });
var AiModalChat = () => {
  const [tab, setTab] = (0, import_react13.useState)("Chat");
  const [approved, setApproved] = (0, import_react13.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "cmp-modal-wrap", children: [
    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("section", { className: "cmp-spec", children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "cmp-eyebrow", children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(SparkSvg6, {}),
        "AI Modal Chat \xB7 Pattern"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("h2", { children: "Modal Chat" }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "cmp-sub", children: "The full conversational surface used inside any Kyndryl product to host Bridge Assist. Sits in a 14px-radius dark modal, scoped to the product context." }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "cmp-kicker", children: "Anatomy" }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "cmp-anatomy", children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "cmp-arow", children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "cmp-adot" }),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("strong", { children: "Header" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { children: "title + Beta + New chat / X" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "cmp-arow", children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "cmp-adot" }),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("strong", { children: "Tabs" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { children: "Chat \xB7 History \xB7 Settings" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "cmp-arow", children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "cmp-adot" }),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("strong", { children: "Stream" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { children: "AI bubble (gradient border)" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "cmp-arow", children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "cmp-adot" }),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("strong", { children: "\u2014" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { children: "User bubble (warm red)" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "cmp-arow", children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "cmp-adot" }),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("strong", { children: "\u2014" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { children: "Inline SnapshotCard" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "cmp-arow", children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "cmp-adot" }),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("strong", { children: "Prompts" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { children: "Suggested chips \xB7 \u201CShow more\u201D" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "cmp-arow", children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "cmp-adot" }),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("strong", { children: "Composer" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { children: "input + send + tools" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "cmp-arow", children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "cmp-adot" }),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("strong", { children: "Footer" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { children: "disclaimer + source link" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "cmp-kicker", children: "Bubble system" }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "cmp-specs", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("strong", { children: "AI" }),
          " \xB7 gradient border (Spruce 60 \u2194 Warm Red 50, 50% opacity), ",
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("code", { children: "#1A2024" }),
          " fill, 10px radius."
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("strong", { children: "User" }),
          " \xB7 solid Warm Red 50 \u2192 60 gradient fill, no border, right-aligned, max 380px."
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("strong", { children: "SnapshotCard" }),
          " \xB7 same gradient-border treatment at 25% \u03B1, tighter radius (8px) and dark ",
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("code", { children: "#0E1417" }),
          " fill \u2014 embedded inside the AI bubble's response area. Highlight state keeps the same gradient border and adds a soft 10% gradient tint behind it (no solid outline)."
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "cmp-kicker", children: "Suggested prompts" }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "cmp-specs", children: [
        "Always shown ",
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("strong", { children: "above" }),
        " the composer. Maximum 3 visible \xB7 \u201CShow more\u201D expands rail. Chips share the same gradient border as the AI bubble \u2014 they ARE little AI suggestions."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "cmp-kicker", children: "Disclaimer + provenance" }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "cmp-specs", children: "Below the composer, two pieces of evidence: Bridge Assist disclaimer (left) and a \u201CKnowledge and AI Foundation\u201D link (right). Never hide either \u2014 provenance is a Shidoka requirement." }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "cmp-kicker", children: "Light vs dark" }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "cmp-specs", children: "Dark surface is the default for Modal Chat. The light variant exists only for inline-embed (sidebar/right rail). All other rules \u2014 bubble system, sources, feedback \u2014 are identical across themes." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("section", { className: "cmp-modal", children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("header", { className: "cmp-modal-head", children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "cmp-modal-glyph" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("h2", { children: "Bridge Assist" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "cmp-beta", children: "Beta" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "cmp-head-actions", children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("a", { href: "#new-chat", onClick: (e) => e.preventDefault(), children: [
            /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("path", { d: "M12 5v14M5 12h14" }) }),
            " ",
            "New chat"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("button", { className: "cmp-head-x", type: "button", children: "\xD7" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("nav", { className: "cmp-tabs", children: ["Chat", "History", "Settings"].map((t) => /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(
        "button",
        {
          className: `cmp-tab ${tab === t ? "cmp-on" : ""}`,
          type: "button",
          onClick: () => setTab(t),
          children: [
            t === "Chat" && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("path", { d: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" }) }),
            t === "History" && /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
              /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("polyline", { points: "12 6 12 12 16 14" })
            ] }),
            t === "Settings" && /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("circle", { cx: "12", cy: "12", r: "3" }),
              /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 005 15a1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 005 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.6 1.65 1.65 0 0010 3.09V3a2 2 0 114 0v.09A1.65 1.65 0 0015 4.6a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019.4 9c.43.18.78.5 1 .91" })
            ] }),
            " ",
            t
          ]
        },
        t
      )) }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "cmp-asb", children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "cmp-asb-dot" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "cmp-asb-label", children: "Working through plan" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "cmp-asb-meta", children: "step 3 of 5 \xB7 9.4s \xB7 1 tool" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "cmp-controls", children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("button", { className: "cmp-ab", type: "button", children: "Pause" }),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("button", { className: "cmp-ab", type: "button", children: "Inject correction" }),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("button", { className: "cmp-ab", type: "button", children: "Branch" }),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("button", { className: "cmp-ab cmp-danger", type: "button", children: "Stop" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "cmp-stream", children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "cmp-msg", children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "cmp-av" }),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "cmp-bubble", children: [
            /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("strong", { children: "The benefits of adopting Hybrid IT Modernization:" }),
            /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("ol", { children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("li", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("strong", { children: "Cost Efficiency:" }),
              " Hybrid IT allows organizations to combine on-premises infrastructure with cloud solutions, optimizing costs by only utilizing cloud services for what is needed. It helps avoid over-provisioning and can scale as needed without large upfront investments."
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "cmp-msg cmp-user", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "cmp-bubble", children: "User input description" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("span", { className: "cmp-ev", children: [
          "tool.requested \xB7 ",
          approved ? "approved" : "awaiting approval"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { style: { paddingLeft: 36 }, children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: `cmp-tcc ${approved ? "" : "cmp-pending"}`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "cmp-tcc-head", children: [
            /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "cmp-tcc-icon cmp-warn", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
              /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("line", { x1: "12", y1: "6", x2: "12", y2: "12" }),
              /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "cmp-tcc-title", children: [
                "About to call ",
                /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "cmp-tool", children: "graph.write" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "cmp-tcc-meta", children: "step 3 \xB7 destructive \xB7 review args before running" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "cmp-tcc-status", children: [
              !approved && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "cmp-sd" }),
              approved ? "Approved" : "Awaiting approval"
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "cmp-tcc-body", children: [
            /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "cmp-tcc-args", children: [
              /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "cmp-k", children: "action" }),
              ": ",
              /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "cmp-s", children: '"assign_owner"' }),
              "\n",
              /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "cmp-k", children: "scope" }),
              ": ",
              /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "cmp-s", children: '"' }),
              /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "cmp-editable cmp-s", children: "payments-svc" }),
              /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "cmp-s", children: '"' }),
              "\n",
              /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "cmp-k", children: "batch" }),
              ": ",
              /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "cmp-editable cmp-n", children: "22" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "cmp-tcc-actions", children: [
              /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("button", { className: "cmp-btn cmp-prim", type: "button", onClick: () => setApproved(true), children: [
                /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("polyline", { points: "20 6 9 17 4 12" }) }),
                "Approve & run"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("button", { className: "cmp-btn", type: "button", children: "Edit args" }),
              /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("button", { className: "cmp-btn", type: "button", children: "Skip" }),
              /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "cmp-gate", children: "retries \xB7 0 of 3" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "cmp-msg", children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "cmp-av" }),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "cmp-bubble", children: [
            /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("strong", { children: "The benefits of adopting Hybrid IT Modernization:" }),
            /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("p", { style: { margin: "6px 0 0" }, children: "Cost Efficiency: Hybrid IT allows organizations to combine on-premises infrastructure with cloud solutions, optimizing costs by only utilizing cloud services for what is needed. It helps avoid over-provisioning and can scale as needed without large upfront investments." }),
            /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "cmp-snap", children: [
              /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "cmp-ico", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("path", { d: "M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" }),
                /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" })
              ] }) }),
              /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("p", { className: "cmp-t", children: "Hybrid IT Modernization \xB7 Source pack" }),
                /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("p", { className: "cmp-s", children: "8 docs \xB7 last sync 02:14 UTC" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "cmp-arr", children: "Open \u2192" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "cmp-prompts", children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("button", { className: "cmp-prompt", type: "button", children: "I want to learn about Cloud Services" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("button", { className: "cmp-prompt", type: "button", children: "Create a New record" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("button", { className: "cmp-prompt", type: "button", children: "Tell me more about Hybrid IT Modernization" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("button", { className: "cmp-more", type: "button", children: "Show more \u2193" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "cmp-composer", children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "cmp-input-row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("input", { className: "cmp-input", placeholder: "Type your message\\u2026" }),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("button", { className: "cmp-modal-send", "aria-label": "Send", type: "button", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("path", { d: "M22 2 11 13M22 2l-7 20-4-9-9-4z" }) }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "cmp-composer-tools", children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("button", { className: "cmp-tbtn", type: "button", children: [
            /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("path", { d: "M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" }) }),
            " ",
            "Attach"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("button", { className: "cmp-tbtn", type: "button", children: [
            "Option ",
            /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("polyline", { points: "6 9 12 15 18 9" }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("button", { className: "cmp-tbtn", type: "button", children: [
            "Option ",
            /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("polyline", { points: "6 9 12 15 18 9" }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(
            "a",
            {
              href: "#knowledge",
              onClick: (e) => e.preventDefault(),
              style: { marginLeft: "auto", fontSize: "11.5px", color: "#91C4CC", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 5 },
              children: [
                "Knowledge and AI Foundation Sharepoint",
                /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" }) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "cmp-disclaimer", children: "Bridge Assist may occasionally generate incorrect or misleading information." })
      ] })
    ] })
  ] });
};

// storybook/src/composites/Badges.tsx
var import_jsx_runtime39 = require("react/jsx-runtime");
var Badges = () => /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "cmp-badges", children: [
  /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { className: "cmp-b cmp-conf", children: "92% Confidence" }),
  /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("span", { className: "cmp-b cmp-fresh", children: [
    /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("polyline", { points: "12 6 12 12 16 14" })
    ] }),
    "Today"
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { className: "cmp-b cmp-stale", children: "Last verified 3d ago" }),
  /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { className: "cmp-b cmp-fresh", children: "12-week trend" }),
  /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { className: "cmp-b cmp-src", children: "source: ServiceNow" }),
  /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { className: "cmp-b cmp-role", children: "Approver-only" })
] });
var Badges_default = Badges;

// storybook/src/composites/Buttons.tsx
var import_jsx_runtime40 = require("react/jsx-runtime");
var Buttons = () => /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { className: "cmp-buttons", children: [
  /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("button", { className: "cmp-primary", children: [
    "Execute",
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("path", { d: "M5 12h14M13 5l7 7-7 7" }) })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("button", { className: "cmp-outline", children: "Send for review" }),
  /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("button", { className: "cmp-ghost", children: "Dismiss" }),
  /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("button", { className: "cmp-brand", children: "Investigate" }),
  /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("button", { className: "cmp-destructive", children: "Reject" }),
  /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("button", { className: "cmp-outline cmp-sm", children: "Filter" }),
  /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("button", { className: "cmp-primary cmp-sm", children: [
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" }) }),
    "Ask AI"
  ] })
] });
var Buttons_default = Buttons;

// storybook/src/composites/Chat.tsx
var import_react14 = require("react");
var import_jsx_runtime41 = require("react/jsx-runtime");
var Chat = () => {
  const [highlightKey, setHighlightKey] = (0, import_react14.useState)("orphans");
  const handleHighlight = (key) => {
    setHighlightKey(key);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "cmp-chat-page", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "cmp-chat-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("section", { className: "cmp-chat-card", children: [
    /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { className: "cmp-chat-eyebrow", children: [
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("path", { d: "M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" }) }),
      "ChatMessage & SnapshotCard"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("h2", { children: "ChatMessage \xB7 SnapshotCard" }),
    /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "cmp-chat-sub", children: "The two CMDB chat primitives, refreshed against the Shidoka AI vocabulary. Every AI bubble uses the gradient border, every user bubble uses the warm-red fill, and every embedded card carries the Bridge AI mark. Inline AG-UI states (AgentStatusBar above, ToolCallCard between messages) show the agent's live work without breaking the rhythm." }),
    /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { className: "cmp-chat-asb", children: [
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("span", { className: "cmp-chat-asb-dot" }),
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("span", { className: "cmp-chat-asb-label", children: "Investigating \xB7 payments domain trust" }),
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("span", { className: "cmp-chat-asb-meta", children: "step 2 of 3 \xB7 4.2s" }),
      /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { className: "cmp-chat-asb-controls", children: [
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("button", { className: "cmp-chat-ab", children: "Pause" }),
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("button", { className: "cmp-chat-ab", children: "Inject correction" }),
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("button", { className: "cmp-chat-ab cmp-chat-danger", children: "Cancel" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { className: "cmp-chat-stream", children: [
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "cmp-chat-msg cmp-chat-user", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "cmp-chat-bubble", children: "Why did payments trust drop overnight?" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("span", { className: "cmp-chat-ev", children: "tool.completed \xB7 cmdb.query" }),
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "cmp-chat-tcc", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { className: "cmp-chat-tcc-head", children: [
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "cmp-chat-tcc-icon", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("polyline", { points: "20 6 9 17 4 12" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { className: "cmp-chat-tcc-title", children: [
            "Returned ",
            /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("span", { className: "cmp-chat-tool", children: "cmdb.query" }),
            " \xB7 22 rows"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "cmp-chat-tcc-meta", children: "230ms \xB7 22 orphaned CIs \xB7 window 02:00\u201304:00" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { className: "cmp-chat-tcc-status", children: [
          /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("span", { className: "cmp-chat-sd" }),
          "OK"
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { className: "cmp-chat-msg", children: [
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "cmp-chat-av" }),
        /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { className: "cmp-chat-bubble", children: [
            "Between 02:00 and 04:00 the discovery scan flagged",
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
              "span",
              {
                className: "cmp-chat-hl",
                onMouseEnter: () => handleHighlight("orphans"),
                children: "22 new orphaned CIs"
              }
            ),
            " ",
            "in ",
            /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("code", { children: "payments-svc" }),
            ". These pushed domain trust from",
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("strong", { children: "62% \u2192 58%" }),
            ". The upstream app",
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
              "span",
              {
                className: "cmp-chat-hl",
                onMouseEnter: () => handleHighlight("app"),
                children: "checkout-api"
              }
            ),
            " ",
            "is Degraded as a consequence."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
            "div",
            {
              className: `cmp-chat-snap${highlightKey === "orphans" ? " cmp-chat-highlight" : ""}`,
              "data-key": "orphans",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "cmp-chat-ico", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
                  /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("path", { d: "M12 8v4M12 16h.01" })
                ] }) }),
                /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("p", { className: "cmp-chat-snap-t", children: "22 orphaned CIs \xB7 payments-svc" }),
                  /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("p", { className: "cmp-chat-snap-s", children: "First seen 02:14 \xB7 no upstream owner" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("span", { className: "cmp-chat-arr", children: "Inspect \u2192" })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
            "div",
            {
              className: `cmp-chat-snap${highlightKey === "app" ? " cmp-chat-highlight" : ""}`,
              "data-key": "app",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                  "div",
                  {
                    className: "cmp-chat-ico",
                    style: { background: "rgba(41,112,122,.08)", color: "var(--k-spruce-60)" },
                    children: /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
                      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("path", { d: "M9 9h6v6H9z" })
                    ] })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("p", { className: "cmp-chat-snap-t", children: "checkout-api \xB7 Degraded" }),
                  /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("p", { className: "cmp-chat-snap-s", children: "1 of 6 downstream CIs impacted" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("span", { className: "cmp-chat-arr", children: "Open graph \u2192" })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { className: "cmp-chat-actions", children: [
            /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("button", { className: "cmp-chat-ico-btn", children: [
              /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
                /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("path", { d: "M5 15V5a2 2 0 012-2h10" })
              ] }),
              "Copy"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("button", { className: "cmp-chat-ico-btn", "aria-label": "Regenerate", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("polyline", { points: "23 4 23 10 17 10" }),
              /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10" })
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("button", { className: "cmp-chat-ico-btn", "aria-label": "Thumbs up", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("svg", { viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("path", { d: "M5 13h6v14H5a1 1 0 0 1-1-1V14a1 1 0 0 1 1-1Z" }),
              /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("path", { d: "M11 13l4-9a1 1 0 0 1 .9-.5 3 3 0 0 1 3 3v6h7.5a2 2 0 0 1 1.97 2.34l-1.83 11A2 2 0 0 1 24.58 27H11V13Z" })
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("button", { className: "cmp-chat-ico-btn", "aria-label": "Thumbs down", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("svg", { viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("path", { d: "M27 19h-6V5h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1Z" }),
              /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("path", { d: "M21 19l-4 9a1 1 0 0 1-.9.5 3 3 0 0 1-3-3v-6H5.6a2 2 0 0 1-1.97-2.34l1.83-11A2 2 0 0 1 7.42 5H21V19Z" })
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("button", { className: "cmp-chat-ico-btn", children: [
              "Sources used (4)",
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("polyline", { points: "6 9 12 15 18 9" }) })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] }) }) });
};
var Chat_default = Chat;

// storybook/src/composites/DagGraphKit.tsx
var import_react15 = require("react");
var import_jsx_runtime42 = require("react/jsx-runtime");
var TYPES = [
  ["orchestration", "Orchestration", "#29707A", "Session start and workflow initialization"],
  ["governance", "Governance", "#A8001F", "Approval and review lifecycle"],
  ["ingestion", "Data ingestion", "#3E8AC2", "Data fetch and source-collection tasks"],
  ["analysis", "Analysis", "#B45309", "Interpretation and scenario analysis steps"],
  ["recommendation", "Recommendation", "#7A3FB0", "Suggested actions and follow-up generation"],
  ["execution", "Execution", "#FF462D", "Action execution and operational steps"],
  ["monitoring", "Monitoring", "#1F8F4A", "Anomaly and performance monitoring"],
  ["snapshot", "Snapshot", "#0E91C9", "Point-in-time views of system state"],
  ["unmapped", "Unmapped", "#5C5C5C", "Events without a mapped node"]
];
var STATES = [
  ["s-idle", "Idle", "node.queued"],
  ["s-pending", "Pending", "node.pending"],
  ["s-running", "Running", "node.executing"],
  ["s-success", "Succeeded", "node.ok"],
  ["s-failed", "Failed", "node.err"],
  ["s-skipped", "Skipped", "node.skip"],
  ["s-approving", "Approving", "node.gate"],
  ["s-cached", "Cached", "node.replay"]
];
var WORKFLOW = {
  nodes: [
    { id: "n1", type: "orchestration", state: "s-success", x: 140, y: 380, title: "Session start", code: "ORCH_SESSION_START", meta: "7s \xB7 ok" },
    { id: "n2", type: "recommendation", state: "s-success", x: 380, y: 380, title: "Processing your request", code: "FUNC_STEP_PROCESSING_YOUR_REQUEST_LERNDK", meta: "6s \xB7 ok" },
    { id: "n3", type: "analysis", state: "s-success", x: 620, y: 380, title: "Reviewing cross-functional signals", code: "FUNC_STEP_REVIEWING_CROSS_FUNCTIONAL_PERFORMANCE_SIGNALS_NRRSO", meta: "19s \xB7 ok" },
    { id: "n4", type: "recommendation", state: "s-running", x: 860, y: 380, title: "Preparing response", code: "FUNC_STEP_PREPARING_RESPONSE_LYC4A20", meta: "1.4s \xB7 \u2026" },
    { id: "n5", type: "snapshot", state: "s-pending", x: 1100, y: 380, title: "snapshot_dashboard", code: "SNAPSHOT_DASHBOARD", meta: "queued" },
    { id: "n6", type: "governance", state: "s-approving", x: 860, y: 560, title: "Approval gate", code: "GOV_HUMAN_APPROVAL", meta: "awaiting" },
    { id: "n7", type: "execution", state: "s-idle", x: 1100, y: 560, title: "execute_remediation", code: "EXEC_REMEDIATION_PLAN", meta: "blocked" }
  ],
  edges: [
    { from: "n1", to: "n2", state: "traversed" },
    { from: "n2", to: "n3", state: "traversed" },
    { from: "n3", to: "n4", state: "active" },
    { from: "n4", to: "n5", state: "conditional" },
    { from: "n4", to: "n6", state: "active" },
    { from: "n6", to: "n7", state: "conditional" }
  ]
};
var ONTOLOGY = {
  nodes: [
    { id: "o1", type: "ingestion", state: "s-idle", x: 300, y: 200, title: "Application: Checkout", code: "app:checkout", meta: "CI \xB7 application" },
    { id: "o2", type: "execution", state: "s-idle", x: 600, y: 160, title: "Service: payments-api", code: "svc:payments-api", meta: "CI \xB7 service" },
    { id: "o3", type: "snapshot", state: "s-idle", x: 900, y: 240, title: "Server: ip-10-2-4-12", code: "host:ip-10-2-4-12", meta: "CI \xB7 server" },
    { id: "o4", type: "analysis", state: "s-idle", x: 300, y: 480, title: "Database: orders-db", code: "db:orders-db", meta: "CI \xB7 database" },
    { id: "o5", type: "recommendation", state: "s-idle", x: 600, y: 540, title: "Tier: Tier-0 critical", code: "tier:tier-0", meta: "class \xB7 tier" },
    { id: "o6", type: "monitoring", state: "s-idle", x: 1080, y: 560, title: "Owner: Avery Parker", code: "owner:avery@kndryl", meta: "agent \xB7 owner" },
    { id: "o7", type: "governance", state: "s-idle", x: 880, y: 420, title: "Policy: PCI-required", code: "policy:pci", meta: "class \xB7 policy" }
  ],
  edges: [
    { from: "o1", to: "o2", state: "depends-on", label: "depends-on" },
    { from: "o2", to: "o3", state: "runs-on", label: "runs-on" },
    { from: "o1", to: "o4", state: "depends-on", label: "depends-on" },
    { from: "o4", to: "o3", state: "runs-on", label: "runs-on" },
    { from: "o2", to: "o5", state: "is-a", label: "is-a" },
    { from: "o5", to: "o7", state: "part-of", label: "part-of" },
    { from: "o3", to: "o6", state: "is-a", label: "owned-by" }
  ]
};
var EVENTS = [
  { type: "snapshot", title: "Reviewing cross-functional performance signals", code: "FUNC_STEP_REVIEWING_CROSS_FUNCTIONAL_PERFORMANCE_SIGNALS_NRRSO", ts: "4s ago \xB7 6s since prev" },
  { type: "recommendation", title: "Preparing response", code: "FUNC_STEP_PREPARING_RESPONSE_LYC4A20", ts: "Just now \xB7 0s since prev" },
  { type: "snapshot", title: "dashboard", code: "SNAPSHOT_DASHBOARD", ts: "Just now \xB7 0s since prev" },
  { type: "recommendation", title: "Processing your request", code: "FUNC_STEP_PROCESSING_YOUR_REQUEST_LERNDK", ts: "15s ago" }
];
var EDGE_KINDS = [
  ["Active", ".e-active", "Currently traversing \u2014 flowing dash."],
  ["Traversed", ".e-traversed", "Already executed \u2014 solid spruce."],
  ["Conditional", ".e-conditional", "May or may not fire \u2014 dashed."],
  ["Retried", ".e-retried", "Re-run after failure \u2014 double stroke."]
];
function depthMap(data) {
  const d = {};
  data.nodes.forEach((n) => {
    d[n.id] = 0;
  });
  for (let i = 0; i < 6; i++) {
    data.edges.forEach((e) => {
      d[e.to] = Math.max(d[e.to], d[e.from] + 1);
    });
  }
  return d;
}
function layoutNodes(data, layoutType) {
  const nodes = data.nodes.map((n) => ({ ...n }));
  if (layoutType === "dag-h") {
    const depth = depthMap(data);
    const cols = {};
    nodes.forEach((n) => {
      (cols[depth[n.id]] = cols[depth[n.id]] || []).push(n);
    });
    Object.keys(cols).forEach((d) => {
      const col = cols[Number(d)];
      const x = 120 + Number(d) * 240;
      col.forEach((n, i) => {
        n.x = x;
        n.y = 200 + i * 150;
      });
    });
  } else if (layoutType === "dag-v") {
    const depth = depthMap(data);
    const rows3 = {};
    nodes.forEach((n) => {
      (rows3[depth[n.id]] = rows3[depth[n.id]] || []).push(n);
    });
    Object.keys(rows3).forEach((d) => {
      const row = rows3[Number(d)];
      const y = 120 + Number(d) * 180;
      row.forEach((n, i) => {
        n.x = 200 + i * 240;
        n.y = y;
      });
    });
  } else if (layoutType === "radial") {
    const cx = 600, cy = 380, R = 240;
    nodes.forEach((n, i) => {
      const a = i / nodes.length * Math.PI * 2 - Math.PI / 2;
      n.x = cx + Math.cos(a) * R;
      n.y = cy + Math.sin(a) * R;
    });
  } else {
    const cx = 620, cy = 380;
    nodes.forEach((n, i) => {
      const seed = i * 97 % 7 / 7;
      const a = i / nodes.length * Math.PI * 2 + seed;
      const r = 180 + i % 3 * 90;
      n.x = cx + Math.cos(a) * r;
      n.y = cy + Math.sin(a) * r;
    });
  }
  return nodes;
}
function edgePath(a, b, style) {
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
var DagGraphKit = () => {
  const [layoutType, setLayoutType] = (0, import_react15.useState)("dag-h");
  const [density, setDensity] = (0, import_react15.useState)("compact");
  const [edgeStyle, setEdgeStyle] = (0, import_react15.useState)("curved");
  const [dark, setDark] = (0, import_react15.useState)(false);
  const [dataset, setDataset] = (0, import_react15.useState)("workflow");
  const [zoom, setZoom] = (0, import_react15.useState)(85);
  const [pan, setPan] = (0, import_react15.useState)({ x: -30, y: 0 });
  const canvasRef = (0, import_react15.useRef)(null);
  const data = dataset === "workflow" ? WORKFLOW : ONTOLOGY;
  const nodes = layoutNodes(data, layoutType);
  const handleSegClick = (group, value) => {
    if (group === "layout") {
      setLayoutType(value);
    } else if (group === "density") {
      setDensity(value);
    } else if (group === "edges") {
      setEdgeStyle(value);
    } else if (group === "dataset") {
      setDataset(value);
      if (value === "ontology") setLayoutType("force");
      else setLayoutType("dag-h");
    }
  };
  const fitView = (0, import_react15.useCallback)(() => {
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
      y: -minY * k + (H - (maxY - minY) * k) / 2
    });
    setZoom(newZoom);
  }, [nodes]);
  (0, import_react15.useEffect)(() => {
    fitView();
  }, [layoutType, dataset]);
  const renderExpanded = (n) => /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: `cmp-nd cmp-nd-expanded cmp-t-${n.type} cmp-${n.state}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-nd-hd", children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-nd-pip" }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-ttl", children: n.title }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-nd-state", children: n.state.replace("s-", "").toUpperCase() })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-nd-body", children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-id", children: n.code }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("dl", { className: "cmp-kvs", children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("dt", { children: "Inputs" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("dd", { children: "5 sources" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("dt", { children: "Tools" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("dd", { children: "graph.expand \xB7 sql.run" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("dt", { children: "Conf." }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("dd", { children: "0.86" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-nd-redirs", children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-rh", children: "3 \xB7 Redirections" }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-rl", children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-ri", children: [
          "Open trace",
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-arr", children: "\u203A" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-ri", children: [
          "Replay step",
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-arr", children: "\u203A" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-ri", children: [
          "Inspect args",
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-arr", children: "\u203A" })
        ] })
      ] })
    ] })
  ] });
  const renderCard = (n) => /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: `cmp-nd cmp-nd-card cmp-t-${n.type} cmp-${n.state}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-nd-hd", children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-nd-pip" }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-ttl", children: n.title }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-nd-state", children: n.state.replace("s-", "").toUpperCase() })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-nd-bd", children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-id", children: n.code }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-nd-meta", children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { children: n.meta }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("b", { children: n.id }) })
      ] })
    ] })
  ] });
  const isExpanded = (id) => id === "n3" || id === "o2";
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: `cmp-dag-page ${dark ? "cmp-dark" : ""}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-page-hd", children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("h1", { children: "DAG & Knowledge-Graph Kit" }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-crumb", children: "/ ui-kit / graph" }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("span", { className: "cmp-stamp", children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-gl" }),
        " Kyndryl CMDB Design System"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-tweaks", children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-grp", children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-ll", children: "Layout" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-seg", children: [["dag-h", "DAG \xB7 horizontal"], ["dag-v", "DAG \xB7 vertical"], ["radial", "Radial"], ["force", "Force \xB7 ontology"]].map(([v, l]) => /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
          "button",
          {
            className: layoutType === v ? "cmp-active" : "",
            type: "button",
            onClick: () => handleSegClick("layout", v),
            children: l
          },
          v
        )) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-grp", children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-ll", children: "Density" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-seg", children: ["compact", "comfortable"].map((v) => /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
          "button",
          {
            className: density === v ? "cmp-active" : "",
            type: "button",
            onClick: () => handleSegClick("density", v),
            children: v.charAt(0).toUpperCase() + v.slice(1)
          },
          v
        )) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-grp", children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-ll", children: "Edges" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-seg", children: ["curved", "orthogonal", "straight"].map((v) => /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
          "button",
          {
            className: edgeStyle === v ? "cmp-active" : "",
            type: "button",
            onClick: () => handleSegClick("edges", v),
            children: v.charAt(0).toUpperCase() + v.slice(1)
          },
          v
        )) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-grp", children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-ll", children: "Canvas" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
          "div",
          {
            className: `cmp-sw ${dark ? "cmp-on" : ""}`,
            onClick: () => setDark(!dark),
            role: "button",
            tabIndex: 0,
            onKeyDown: (e) => e.key === "Enter" && setDark(!dark)
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-grp", style: { marginLeft: "auto" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-ll", children: "Data" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-seg", children: ["workflow", "ontology"].map((v) => /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
          "button",
          {
            className: dataset === v ? "cmp-active" : "",
            type: "button",
            onClick: () => handleSegClick("dataset", v),
            children: v.charAt(0).toUpperCase() + v.slice(1)
          },
          v
        )) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-section", style: { padding: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-ws", children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-ws-rail", children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("button", { className: "cmp-rb cmp-active", title: "Pan", type: "button", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("path", { d: "M5 9V5h4M19 9V5h-4M5 15v4h4M19 15v4h-4" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("button", { className: "cmp-rb", title: "Select", type: "button", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("path", { d: "M4 4l7 14 2-6 6-2L4 4z" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("button", { className: "cmp-rb", title: "Connect", type: "button", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("circle", { cx: "6", cy: "6", r: "3" }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("circle", { cx: "18", cy: "18", r: "3" }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("path", { d: "M9 9l6 6" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-sep" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("button", { className: "cmp-rb", title: "Add node", type: "button", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("path", { d: "M12 5v14M5 12h14" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("button", { className: "cmp-rb", title: "Comment", type: "button", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("path", { d: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" }) }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-ws-canvas-wrap", ref: canvasRef, children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-ws-canvas", style: { transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom / 100})` }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("svg", { className: "cmp-edges", style: { position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", overflow: "visible" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("defs", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("marker", { id: "cmp-ah", viewBox: "0 0 10 10", refX: "9", refY: "5", markerWidth: "5", markerHeight: "5", orient: "auto-start-reverse", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("path", { d: "M0,0 L10,5 L0,10 z", fill: "#29707A" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("marker", { id: "cmp-ah-warm", viewBox: "0 0 10 10", refX: "9", refY: "5", markerWidth: "5", markerHeight: "5", orient: "auto-start-reverse", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("path", { d: "M0,0 L10,5 L0,10 z", fill: "#FF462D" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("linearGradient", { id: "cmp-g-active", x1: "0", x2: "1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("stop", { offset: "0", stopColor: "#29707A" }),
                /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("stop", { offset: "1", stopColor: "#FF462D" })
              ] })
            ] }),
            data.edges.map((e, i) => {
              const a = nodes.find((n) => n.id === e.from);
              const b = nodes.find((n) => n.id === e.to);
              if (!a || !b) return null;
              const isActive = e.state === "active";
              const isCond = e.state === "conditional" || e.state === "depends-on";
              const isWarm = e.state === "runs-on" || e.state === "retried";
              const stroke = isActive ? "url(#cmp-g-active)" : isWarm ? "#FF462D" : isCond ? "#98A3AB" : "#29707A";
              const dash = isCond ? "5 5" : isActive ? "7 5" : void 0;
              const marker = isWarm ? "url(#cmp-ah-warm)" : "url(#cmp-ah)";
              const d = edgePath(a, b, edgeStyle);
              return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("g", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
                  "path",
                  {
                    d,
                    fill: "none",
                    stroke,
                    strokeWidth: e.state === "retried" ? 3 : 1.6,
                    strokeDasharray: dash,
                    markerEnd: marker,
                    className: isActive ? "cmp-ae" : void 0
                  }
                ),
                e.label && (() => {
                  const lx = (a.x + b.x) / 2;
                  const ly = (a.y + b.y) / 2;
                  return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(import_jsx_runtime42.Fragment, { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("rect", { x: lx - 38, y: ly - 9, width: 76, height: 18, rx: 9, fill: "#fff", stroke: "#E6E6E6" }),
                    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("text", { x: lx, y: ly + 3, fontFamily: "Geist Mono, monospace", fontSize: "9.5", fill: "#5C5C5C", textAnchor: "middle", children: e.label })
                  ] });
                })()
              ] }, `${e.from}-${e.to}-${i}`);
            })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-nodes", children: nodes.map((n) => /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-n", style: { left: n.x, top: n.y }, children: isExpanded(n.id) ? renderExpanded(n) : renderCard(n) }, n.id)) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-ws-overlay cmp-top-left", children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("button", { className: "cmp-ob", title: "Search", type: "button", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("circle", { cx: "11", cy: "11", r: "7" }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("path", { d: "M21 21l-4.3-4.3" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { style: { fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-2)", padding: "0 4px" }, children: "Agentic Workflow Pipeline" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-ws-overlay cmp-top-right", children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("button", { className: "cmp-ob", title: "Auto-arrange", type: "button", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("rect", { x: "3", y: "3", width: "7", height: "7" }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("rect", { x: "14", y: "3", width: "7", height: "7" }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("rect", { x: "3", y: "14", width: "7", height: "7" }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("rect", { x: "14", y: "14", width: "7", height: "7" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("button", { className: "cmp-ob", title: "Lock canvas", type: "button", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("rect", { x: "5", y: "11", width: "14", height: "9", rx: "1" }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("path", { d: "M8 11V7a4 4 0 018 0v4" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-div" }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("button", { className: "cmp-ob cmp-active", title: "Toggle log", type: "button", children: "Log" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { style: { position: "absolute", bottom: 14, left: 14, display: "flex", flexDirection: "column", gap: 8, zIndex: 5 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-ws-overlay", style: { position: "relative", top: 0, left: 0 }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("button", { className: "cmp-ob", title: "Zoom in", type: "button", onClick: () => setZoom((z) => Math.min(240, Math.round(z * 1.15))), children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("path", { d: "M12 5v14M5 12h14" }) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("span", { className: "cmp-zoom-val", children: [
              zoom,
              "%"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("button", { className: "cmp-ob", title: "Zoom out", type: "button", onClick: () => setZoom((z) => Math.max(30, Math.round(z / 1.15))), children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("path", { d: "M5 12h14" }) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-div" }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("button", { className: "cmp-ob", title: "Fit", type: "button", onClick: fitView, children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("path", { d: "M3 9V3h6M21 9V3h-6M3 15v6h6M21 15v6h-6" }) }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-legend", children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-lh", children: "Workflow color key" }),
            TYPES.map(([slug, name, color]) => /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-li", children: [
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-sw", style: { background: color } }),
              name
            ] }, slug))
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { style: { position: "absolute", bottom: 14, right: 14, zIndex: 5 }, children: /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-minimap", children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-mh", children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { children: "Overview" }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("span", { children: [
              nodes.length,
              " nodes \xB7 ",
              data.edges.length,
              " edges"
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("svg", { viewBox: "0 100 1200 600", preserveAspectRatio: "none", children: [
            data.edges.map((e, i) => {
              const a = nodes.find((n) => n.id === e.from);
              const b = nodes.find((n) => n.id === e.to);
              if (!a || !b) return null;
              return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("line", { x1: a.x, y1: a.y, x2: b.x, y2: b.y, stroke: "#C1C8CD", strokeWidth: "2" }, i);
            }),
            nodes.map((n) => {
              const t = TYPES.find((t2) => t2[0] === n.type);
              return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("rect", { x: n.x - 22, y: n.y - 12, width: 44, height: 24, rx: 4, fill: t ? t[2] : "#29707A", opacity: 0.8 }, n.id);
            })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("aside", { className: "cmp-ws-log", children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-lh", children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("h3", { children: "Workflow Event Log" }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-opts", children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("button", { className: "cmp-ob", type: "button", children: "JSON \u25BE" }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("button", { className: "cmp-ob", type: "button", children: [
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" }) }),
              " ",
              "Export"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-session", children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-id", children: "ID: 8cp4c12c\u2011f2\u2026" }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-who", children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-av" }),
            " Avery Parker ",
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-role", children: "DATA ADMIN" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-id", children: "\u23F1 Session 78s" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-stats", children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-s", children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-v", children: "4" }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-l", children: "Events" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-s", children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-v", children: "6" }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-l", children: "Nodes" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-s", children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-v", children: "5" }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-l", children: "Edges" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-feed", children: EVENTS.map((e, i) => {
          const t = TYPES.find((t2) => t2[0] === e.type);
          return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-ev-item", style: { borderLeftColor: t ? t[2] : "#29707A" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-nm", children: e.title }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-eid", children: [
              "Node: ",
              e.code
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-ts", children: [
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { children: e.ts }),
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("a", { href: "#trace", onClick: (ev) => ev.preventDefault(), children: "Open trace" })
            ] })
          ] }, i);
        }) })
      ] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("h2", { children: "Node atoms \xB7 3 levels of detail" }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("p", { className: "cmp-desc", children: [
        "Same model, three sizes. ",
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("b", { children: "Pill" }),
        " for minimap, breadcrumbs, and chips. ",
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("b", { children: "Card" }),
        " is the canvas default. ",
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("b", { children: "Expanded" }),
        " opens on hover or selection and exposes redirections + agent metadata. All three share the same accent + tint variables so the taxonomy color flows through every level."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-lod-grid", children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-lod-cell", children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-lod-lbl", children: ".nd.pill \u2014 24 px" }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-lod-stage cmp-wrap", children: [
            ["t-orchestration", "Session start"],
            ["t-analysis", "Reviewing signals"],
            ["t-recommendation", "Preparing response"],
            ["t-snapshot", "snapshot_dashboard"],
            ["t-execution", "execute_action"],
            ["t-unmapped", "unmapped_event"]
          ].map(([cls, label]) => /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("span", { className: `cmp-nd cmp-nd-pill cmp-${cls}`, children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-dot" }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-lbl", children: label })
          ] }, label)) }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-lod-meta", children: [
            "For the minimap, breadcrumb trails, and node references inside the event log. ",
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("b", { children: "Single-line, mono-spaced label." })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-lod-cell", children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-lod-lbl", children: ".nd.card \u2014 200 px" }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-lod-stage", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-nd cmp-nd-card cmp-t-recommendation cmp-s-running", children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-nd-hd", children: [
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-nd-pip" }),
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-ttl", children: "Preparing response" }),
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-nd-state", children: "RUNNING" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-nd-bd", children: [
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-id", children: "FUNC_STEP_PREPARING_RESPONSE_LYC4A20" }),
              /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-nd-meta", children: [
                /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { children: "tools 2" }),
                /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("span", { children: [
                  "elapsed ",
                  /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("b", { children: "1.4s" })
                ] })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-lod-meta", children: [
            "Default canvas representation. Header carries ",
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("b", { children: "state pip \xB7 title \xB7 state tag" }),
            "; body carries ",
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("b", { children: "node ID + 1 row of metrics" }),
            ". 200 px wide so a 6-step DAG fits comfortably in viewport."
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-lod-cell", children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-lod-lbl", children: ".nd.expanded \u2014 280 px" }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-lod-stage", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-nd cmp-nd-expanded cmp-t-recommendation cmp-s-running", children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-nd-hd", children: [
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-nd-pip" }),
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-ttl", children: "Reviewing cross-functional performance signals" }),
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-nd-state", children: "RUNNING" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-nd-body", children: [
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-id", children: "FUNC_STEP_REVIEWING_CROSS_FUNCTIONAL_PERFORMANCE_SIGNALS" }),
              /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("dl", { className: "cmp-kvs", children: [
                /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("dt", { children: "Inputs" }),
                /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("dd", { children: "5 sources" }),
                /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("dt", { children: "Tools" }),
                /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("dd", { children: "graph.expand \xB7 sql.run" }),
                /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("dt", { children: "Conf." }),
                /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("dd", { children: "0.86" })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-nd-redirs", children: [
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-rh", children: "5 \xB7 Redirections" }),
              /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-rl", children: [
                /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-ri", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("path", { d: "M5 12h14M13 6l6 6-6 6" }) }),
                  " Open trace",
                  /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-arr", children: "\u203A" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-ri", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("path", { d: "M21 11.5a8.4 8.4 0 01-.9 3.8 8.5 8.5 0 01-15.4-1A8.5 8.5 0 0120 8" }),
                    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("polyline", { points: "22 4 22 10 16 10" })
                  ] }),
                  " Replay step",
                  /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-arr", children: "\u203A" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-ri", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
                    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("path", { d: "M12 8v4M12 16h.01" })
                  ] }),
                  " Inspect args",
                  /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-arr", children: "\u203A" })
                ] })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-lod-meta", children: [
            "On hover or selection. Adds ",
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("b", { children: "structured KV block + redirections" }),
            " (jump-to-trace, replay, inspect, snapshot). Replaces tooltip patterns \u2014 never floats."
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("h2", { children: "Node taxonomy \xB7 9 types" }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("p", { className: "cmp-desc", children: [
        "Each node carries a single semantic class that drives accent + tint + glyph. Nine types cover the workflow + ontology surfaces. ",
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("b", { children: "Color is never the only signal" }),
        " \u2014 every node also carries a state pip, a state tag, and an ID."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-tax-grid", children: TYPES.map(([slug, name, color, desc]) => /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-tax-cell", children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-tax-head", children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-tax-sw", style: { background: color } }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-tax-name", children: name }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("span", { className: "cmp-tax-tok", children: [
            ".t-",
            slug
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-tax-desc", children: desc }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("span", { className: `cmp-nd cmp-nd-pill cmp-t-${slug}`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-dot" }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("span", { className: "cmp-lbl", children: [
            name.toLowerCase(),
            "_node"
          ] })
        ] }) })
      ] }, slug)) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("h2", { children: "Lifecycle states \xB7 8 + selected" }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("p", { className: "cmp-desc", children: [
        "State is applied as ",
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("code", { children: ".s-*" }),
        ". The accent stays the taxonomy color; the state changes ",
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("b", { children: "border treatment, fill, opacity, and the pip behavior" }),
        ". A node can only be in one lifecycle state at a time."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-states-grid", children: STATES.map(([cls, name, ev], i) => /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-state-cell", children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: `cmp-nd cmp-nd-card cmp-t-recommendation cmp-${cls}`, style: { width: 160 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-nd-hd", children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-nd-pip" }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("span", { className: "cmp-ttl", children: [
              name,
              " step"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-nd-state", children: name.toUpperCase() })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-nd-bd", children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-id", children: [
              cls.replace("s-", "").toUpperCase(),
              "_NODE_E",
              i
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-nd-meta", children: [
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { children: "tools 2" }),
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("b", { children: [
                i + 1,
                ".",
                i,
                "s"
              ] }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-state-lbl", children: name }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-state-ev", children: ev })
      ] }, cls)) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("h2", { children: "Edge styles & states" }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("p", { className: "cmp-desc", children: [
        "Edges are SVG paths styled via stroke + dasharray + animation. ",
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("b", { children: "Active" }),
        " traces a flowing dash; ",
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("b", { children: "traversed" }),
        " is solid; ",
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("b", { children: "conditional" }),
        " is dashed; ",
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("b", { children: "retried" }),
        " doubles the stroke and tints. ",
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("b", { children: "Knowledge-graph" }),
        " edges add a small label chip for the relation type (",
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("code", { children: "depends-on" }),
        ", ",
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("code", { children: "runs-on" }),
        ", etc.)."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-edge-grid", children: EDGE_KINDS.map(([name, tok, desc]) => {
        const stroke = name === "Active" ? "url(#cmp-eg-g1)" : name === "Traversed" ? "#29707A" : name === "Conditional" ? "#98A3AB" : "#FF462D";
        const sw = name === "Retried" ? 3 : 1.6;
        const dash = name === "Conditional" ? "4 4" : name === "Active" ? "6 6" : void 0;
        return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-edge-cell", children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-edge-head", children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-edge-name", children: name }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-edge-tok", children: tok })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("svg", { viewBox: "0 0 200 48", preserveAspectRatio: "none", children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("linearGradient", { id: "cmp-eg-g1", x1: "0", x2: "1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("stop", { offset: "0", stopColor: "#29707A" }),
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("stop", { offset: "1", stopColor: "#FF462D" })
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("circle", { cx: "14", cy: "24", r: "3.5", fill: "#29707A" }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("circle", { cx: "186", cy: "24", r: "3.5", fill: "#29707A" }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
              "path",
              {
                d: "M14 24 C 70 24, 130 24, 186 24",
                fill: "none",
                stroke,
                strokeWidth: sw,
                strokeDasharray: dash,
                className: name === "Active" ? "cmp-ae" : void 0
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-edge-desc", children: desc })
        ] }, name);
      }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("h2", { children: "Canvas states \xB7 loading / empty / error" }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("p", { className: "cmp-desc", children: "When the canvas itself can't render the graph: a sweeping AI-loader bar, an illustration-free empty state, or an error explaining what failed. Mini-map and chrome stay in place; only the canvas swaps." }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-csv-grid", children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-csv", children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "cmp-csv-label", children: "Resolving topology" }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-csv-grid-layer" }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-csv-grid-layer cmp-csv-tint" }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-csv-grid-layer cmp-csv-spruce" }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-csv-pmeta", children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { children: "graph \xB7 22 nodes" }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { children: "0:04" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-csv cmp-dotted", children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("svg", { className: "cmp-csv-ico", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("circle", { cx: "6", cy: "6", r: "2" }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("circle", { cx: "18", cy: "18", r: "2" }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("circle", { cx: "6", cy: "18", r: "2" }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("circle", { cx: "18", cy: "6", r: "2" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-csv-h", children: "No nodes yet" }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-csv-b", children: "This workflow hasn't run. Trigger a session or import a graph from CMDB to populate." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-csv cmp-dotted", children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("svg", { className: "cmp-csv-ico", viewBox: "0 0 24 24", fill: "none", stroke: "#A1100F", strokeWidth: "1.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("path", { d: "M12 8v4M12 16h.01" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "cmp-csv-h", style: { color: "#A1100F" }, children: "Couldn't render graph" }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-csv-b", children: [
            "3 nodes failed to resolve. Layout falls back to a list view. ",
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("a", { href: "#inspect", style: { color: "var(--k-spruce-60)", borderBottom: "1px dotted" }, onClick: (e) => e.preventDefault(), children: "Inspect failures" }),
            "."
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cmp-ftr", children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { children: "9 types \xB7 8 states \xB7 4 layouts \xB7 4 edge styles \xB7 pill / card / expanded" }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { children: "preview/dag-graph-kit.html" })
    ] })
  ] });
};

// storybook/src/composites/DataTable.tsx
var import_jsx_runtime43 = require("react/jsx-runtime");
var DataTable = () => /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "cmp-table-page", children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "cmp-table-card", children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("table", { children: [
  /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("tr", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("th", { children: "Ticket" }),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("th", { children: "Subcategory" }),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("th", { children: "Priority" }),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("th", { children: "CIs" }),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("th", {})
  ] }) }),
  /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("tbody", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("tr", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("td", { className: "cmp-table-mono", children: "bINC4219003" }),
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("td", { children: "CMDB reconciliation drift" }),
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("span", { className: "cmp-table-pill cmp-table-crit", children: "1- Immediate" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("td", { children: "47" }),
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("span", { className: "cmp-table-link", children: "Investigate \u2192" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("tr", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("td", { className: "cmp-table-mono", children: "bINC4219040" }),
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("td", { children: "Orphaned discovery record" }),
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("span", { className: "cmp-table-pill cmp-table-high", children: "2- Urgent" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("td", { children: "12" }),
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("span", { className: "cmp-table-link", children: "Investigate \u2192" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("tr", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("td", { className: "cmp-table-mono", children: "bINC4219118" }),
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("td", { children: "Stale owner assignment" }),
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("span", { className: "cmp-table-pill cmp-table-high", children: "3- High" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("td", { children: "8" }),
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("span", { className: "cmp-table-link", children: "Investigate \u2192" }) })
    ] })
  ] })
] }) }) });
var DataTable_default = DataTable;

// storybook/src/composites/ExecSummary.tsx
var import_jsx_runtime44 = require("react/jsx-runtime");
var ExecSummary = () => /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "cmp-execsum-page", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "cmp-execsum-doc", children: [
  /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "cmp-execsum-eyebrow", children: "Commercial review \xB7 Q2 2026" }),
  /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("h2", { children: "CMDB data-quality executive summary" }),
  /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "cmp-execsum-takeaways", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("ul", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("li", { children: [
      "Trust score up ",
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("b", { children: "+1.4 pts" }),
      " to 62%; Payments is the primary drag."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("li", { children: [
      "312 stale CIs (",
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("b", { children: "+28 WoW" }),
      "); 47 recommended for retirement with 92% confidence."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("li", { children: "Two reconciliation triggers need human review before Friday." })
  ] }) }),
  /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("h3", { children: "KPI snapshot" }),
  /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("table", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("tr", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("th", { children: "Metric" }),
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("th", { children: "Current" }),
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("th", { children: "Target" }),
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("th", { children: "\u0394 QoQ" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("tbody", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("td", { children: "Trust score" }),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("td", { children: "62%" }),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("td", { children: "95%" }),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("td", { className: "cmp-execsum-u", children: "+1.4 pts" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("td", { children: "Stale CIs" }),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("td", { children: "312" }),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("td", { children: "<150" }),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("td", { className: "cmp-execsum-d", children: "+28" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("td", { children: "Orphans" }),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("td", { children: "47" }),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("td", { children: "0" }),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("td", { className: "cmp-execsum-u", children: "\u22128" })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("h3", { children: "Discussion flags" }),
  /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "cmp-execsum-flags", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "cmp-execsum-flag", children: [
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" }) }),
    "Payments owner email bouncing 2 days \u2014 blocks 47 retirement candidates."
  ] }) }),
  /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("h3", { children: "Recommendations embedded \xB7 2" }),
  /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "cmp-execsum-mini-rec", children: [
    /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("p", { className: "cmp-execsum-rec-t", children: "Retire 47 stale CIs \xB7 payments-svc" }),
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("p", { className: "cmp-execsum-rec-s", children: "92% confidence \xB7 +5.1 pts trust lift" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("button", { children: "Execute \u2192" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "cmp-execsum-mini-rec", children: [
    /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("p", { className: "cmp-execsum-rec-t", children: "Re-assign 8 logistics CI owners" }),
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("p", { className: "cmp-execsum-rec-s", children: "81% confidence \xB7 unblocks Q3 review" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("button", { children: "Review \u2192" })
  ] })
] }) });
var ExecSummary_default = ExecSummary;

// storybook/src/composites/ExecutionTimeline.tsx
var import_jsx_runtime45 = require("react/jsx-runtime");
var ExecutionTimeline = () => /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cmp-exec-page", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "cmp-exec-col", children: [
  /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cmp-exec-eyebrow", children: "live \xB7 agent running" }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "cmp-exec-sub-h", children: "Step-by-step plan as it executes \u2014 pause, edit, branch, or step-through approve." })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "cmp-exec-card cmp-live", children: [
    /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "cmp-exec-head", children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("span", { className: "cmp-badge-live", children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { className: "cmp-dot" }),
        "Running"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("h3", { className: "cmp-exec-h", children: "Retire 47 stale CIs \xB7 payments-svc" }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { className: "cmp-exec-h-meta", children: "step 2 of 4 \xB7 12.4s elapsed" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "cmp-timeline", children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "cmp-step cmp-done", children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cmp-rail", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cmp-step-marker" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cmp-label", children: "Planned retirement batch" }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cmp-sub", children: "cmdb.query \xB7 47 candidates \xB7 threshold \u2264 50" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { className: "cmp-ts", children: "14:02:11" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "cmp-step cmp-active", children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cmp-rail", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cmp-step-marker" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cmp-label", children: "Validating against open incidents" }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cmp-sub", children: "incident.search \xB7 4 of 47 checked \xB7 no blockers yet" }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "cmp-row-actions", children: [
            /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("button", { className: "cmp-btn", children: "Edit step" }),
            /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("button", { className: "cmp-btn", children: "Approve once" }),
            /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("button", { className: "cmp-btn cmp-prim", children: "Approve all" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { className: "cmp-ts", children: "running\u2026" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "cmp-step cmp-pending", children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cmp-rail", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cmp-step-marker" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cmp-label", children: "Retire 47 CIs in ServiceNow CMDB" }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cmp-sub", children: "cmdb.write \xB7 destructive \xB7 approval gate" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { className: "cmp-ts", children: "queued" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "cmp-step cmp-pending", children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cmp-rail", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cmp-step-marker" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cmp-label", children: "Update downstream graph nodes" }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cmp-sub", children: "graph.write \xB7 47 nodes \xB7 18 edges" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { className: "cmp-ts", children: "queued" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "cmp-exec-footer", children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { className: "cmp-pulse" }),
      "Step-through mode on \xB7 pause to edit args",
      /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "cmp-controls", children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("button", { className: "cmp-btn", children: "Pause" }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("button", { className: "cmp-btn", children: "Branch" }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("button", { className: "cmp-btn cmp-danger", children: "Cancel" })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { style: { marginTop: 6 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cmp-exec-eyebrow", style: { color: "#0D5C2E" }, children: "completed \xB7 audit view" }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "cmp-exec-sub-h", children: "Same component, frozen state. Always rendered after the run lands." })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "cmp-exec-card", children: [
    /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "cmp-exec-head", children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { className: "cmp-badge-done", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("polyline", { points: "20 6 9 17 4 12" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("h3", { className: "cmp-exec-h", children: "Executed \xB7 Retire 47 stale CIs" }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { className: "cmp-exec-h-meta", children: "38s \xB7 4 steps \xB7 0 errors" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "cmp-timeline", children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "cmp-step cmp-done", children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cmp-rail", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cmp-step-marker" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cmp-label", children: "Planned retirement batch" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { className: "cmp-ts", children: "14:02:11" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "cmp-step cmp-done", children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cmp-rail", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cmp-step-marker" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cmp-label", children: "Validated against open incidents" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { className: "cmp-ts", children: "14:02:14" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "cmp-step cmp-done", children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cmp-rail", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cmp-step-marker" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cmp-label", children: "Retired 47 CIs in ServiceNow CMDB" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { className: "cmp-ts", children: "14:02:22" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "cmp-step cmp-done", children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cmp-rail", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cmp-step-marker" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cmp-label", children: "Updated downstream graph nodes" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { className: "cmp-ts", children: "14:02:24" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "cmp-exec-footer", children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { className: "cmp-pulse" }),
      "Agent is now monitoring \xB7 next scan in 12 minutes",
      /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "cmp-controls", children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("button", { className: "cmp-btn", children: "View trace" }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("button", { className: "cmp-btn", children: "Branch from end" })
      ] })
    ] })
  ] })
] }) });
var ExecutionTimeline_default = ExecutionTimeline;

// storybook/src/composites/ImpactRollup.tsx
var import_jsx_runtime46 = require("react/jsx-runtime");
var rows2 = [
  { name: "CIs", color: "#29707A", fillColor: "#29707A", width: "88%", count: "47", value: "47" },
  { name: "Applications", color: "#5BA2AE", fillColor: "#5BA2AE", width: "28%", count: "3", value: "3" },
  { name: "Processes", color: "#91C4CC", fillColor: "#91C4CC", width: "18%", count: "2", value: "2" },
  { name: "Business units", color: "#3D8590", fillColor: "#3D8590", width: "10%", count: "1", value: "1" },
  { name: "Domains", color: "#334155", fillColor: "#334155", width: "10%", count: "1", value: "1" }
];
var ImpactRollup = () => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "cmp-impact-page", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "cmp-impact-card", children: [
  /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "cmp-impact-head", children: [
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("h3", { children: "Impact rollup \xB7 before action" }),
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { className: "cmp-impact-lbl", children: "Blast radius" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "cmp-impact-rows", children: rows2.map((row) => /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "cmp-impact-r", children: [
    /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("span", { className: "cmp-impact-name", children: [
      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("i", { style: { background: row.color } }),
      row.name
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "cmp-impact-bar", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
      "div",
      {
        className: "cmp-impact-fill",
        style: { background: row.fillColor, width: row.width },
        children: row.count
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { className: "cmp-impact-v", children: row.value })
  ] }, row.name)) }),
  /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "cmp-impact-tot", children: [
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("b", { children: "Total impact footprint \xB7 54 items" }),
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { children: "Embeddable before every Execute" })
  ] })
] }) });
var ImpactRollup_default = ImpactRollup;

// storybook/src/composites/KpiGrid.tsx
var import_jsx_runtime47 = require("react/jsx-runtime");
var KpiGrid = () => /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "cmp-kpi-page", children: /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "cmp-kpi-grid", children: [
  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "cmp-kpi", children: /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "cmp-kpi-body", children: [
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "cmp-kpi-lbl", children: "Total CIs tracked" }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "cmp-kpi-val", children: "4,812" }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("p", { className: "cmp-kpi-delta cmp-up", children: [
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("path", { d: "M7 17l10-10M17 7v10H7" }) }),
      "+124 WoW"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "cmp-kpi-sub", children: "Discovered across 38 applications" })
  ] }) }),
  /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "cmp-kpi", children: [
    /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "cmp-kpi-warn", children: [
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("path", { d: "M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" }) }),
      "Investigate with AI"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "cmp-kpi-body", children: [
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "cmp-kpi-lbl", children: "Stale CIs" }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "cmp-kpi-val", children: "312" }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("p", { className: "cmp-kpi-delta cmp-down", children: [
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("path", { d: "M7 7l10 10M7 17h10V7" }) }),
        "+28 vs last week"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "cmp-kpi-sub", children: "Not verified in 30d+" })
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "cmp-kpi", children: /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "cmp-kpi-body", children: [
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "cmp-kpi-lbl", children: "Trust score" }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "cmp-kpi-val", children: "62%" }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("p", { className: "cmp-kpi-delta cmp-up", children: [
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("path", { d: "M7 17l10-10M17 7v10H7" }) }),
      "+1.4 pts YoY"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "cmp-kpi-sub", children: "Target 95% \xB7 gap 33 pts" })
  ] }) })
] }) });
var KpiGrid_default = KpiGrid;

// storybook/src/composites/Recommendation.tsx
var import_jsx_runtime48 = require("react/jsx-runtime");
var Recommendation = () => /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "cmp-rec-page", children: /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "cmp-rec-card", children: [
  /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "cmp-rec-head", children: [
    /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "cmp-rec-icon", children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { style: { flex: 1 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("h3", { className: "cmp-rec-title", children: "Retire 47 stale CIs in payments-svc cluster" }),
      /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "cmp-rec-meta", children: [
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("span", { className: "cmp-rec-b cmp-rec-conf", children: "92% confidence" }),
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("span", { className: "cmp-rec-b cmp-rec-lift", children: "+5.1 pts trust lift" })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "cmp-rec-reason", children: [
    /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("strong", { children: "Agent reason \xB7 " }),
    "None of these 47 CIs have appeared in discovery scans for 90+ days and no active incidents reference them. Retiring now lifts Payments domain trust from 58% to 63% and removes 47 orphaned nodes from the graph."
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "cmp-rec-sig-label", children: "Signals" }),
  /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "cmp-rec-sigs", children: [
    /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "cmp-rec-sig-row", children: [
      /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("span", { className: "cmp-rec-dot", style: { background: "#E68A00" } }),
      "No discovery heartbeat 94d avg"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "cmp-rec-sig-row", children: [
      /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("span", { className: "cmp-rec-dot", style: { background: "#64748B" } }),
      "0 open incidents reference these CIs"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "cmp-rec-sig-row", children: [
      /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("span", { className: "cmp-rec-dot", style: { background: "#1F8F4A" } }),
      "Upstream apps show Healthy status"
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "cmp-rec-actions", children: [
    /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("button", { className: "cmp-ex", children: "Execute" }),
    /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("button", { className: "cmp-rev", children: "Send for review" }),
    /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("button", { className: "cmp-dis", children: "Dismiss" }),
    /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("span", { className: "cmp-rec-attrib", children: "Powered by agentic AI \xB7 3m ago" })
  ] })
] }) });
var Recommendation_default = Recommendation;

// storybook/src/composites/ScenarioProjection.tsx
var import_jsx_runtime49 = require("react/jsx-runtime");
var tiles = [
  { k: "Trust", v: "67%", vd: "+5.1 pts" },
  { k: "Stale CIs", v: "265", vd: "\u221247" },
  { k: "Orphans", v: "0", vd: "\u221212" },
  { k: "Graph nodes", v: "4,765", vd: "cleaner" }
];
var ScenarioProjection = () => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "cmp-scenario-page", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "cmp-scenario-card", children: [
  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("h3", { children: "Projected outcome \xB7 retire 47 stale CIs" }),
  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "cmp-scenario-tiles", children: tiles.map((tile) => /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "cmp-scenario-tile", children: [
    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "cmp-scenario-k", children: tile.k }),
    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "cmp-scenario-v", children: tile.v }),
    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "cmp-scenario-vd", children: tile.vd })
  ] }, tile.k)) }),
  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "cmp-scenario-chart", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("svg", { viewBox: "0 0 600 140", preserveAspectRatio: "none", children: [
    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("pattern", { id: "cmp-scn-g", width: "60", height: "28", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("path", { d: "M0 28H60M0 0H60", stroke: "#F1F5F9", strokeWidth: "1" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { width: "600", height: "140", fill: "url(#cmp-scn-g)" }),
    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
      "path",
      {
        d: "M10 90 Q 120 85 220 92 T 420 95 T 590 98",
        fill: "none",
        stroke: "#CBD5E1",
        strokeWidth: "1.5",
        strokeDasharray: "3 3"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
      "path",
      {
        d: "M10 88 Q 120 82 220 85 T 420 82",
        fill: "none",
        stroke: "#64748B",
        strokeWidth: "2"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
      "path",
      {
        d: "M420 82 Q 480 60 530 45 T 590 25",
        fill: "none",
        stroke: "#29707A",
        strokeWidth: "2.5"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "420", cy: "82", r: "3", fill: "#141414" }),
    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("text", { x: "430", y: "76", fontSize: "9", fill: "#141414", fontFamily: "ui-monospace,monospace", children: "now" }),
    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
      "text",
      {
        x: "540",
        y: "20",
        fontSize: "9",
        fill: "#29707A",
        fontFamily: "ui-monospace,monospace",
        fontWeight: "600",
        children: "+30d \xB7 67%"
      }
    )
  ] }) }),
  /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "cmp-scenario-legend", children: [
    /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("span", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("i", { style: { background: "#64748B" } }),
      "Actual"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("span", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("i", { style: { background: "#CBD5E1", borderTop: "1px dashed #CBD5E1", height: 0 } }),
      "Baseline (no action)"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("span", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("i", { style: { background: "#29707A" } }),
      "Scenario (execute)"
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("p", { className: "cmp-scenario-src", children: "Powered by agentic AI \xB7 trained on 12-week CMDB history \xB7 92% confidence" })
] }) });
var ScenarioProjection_default = ScenarioProjection;

// storybook/src/composites/StatusBanner.tsx
var import_jsx_runtime50 = require("react/jsx-runtime");
var StatusBanner = () => /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "cmp-banner-page", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "cmp-banner-card", children: [
  /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "cmp-banner-strip cmp-banner-amber", children: [
    /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("path", { d: "M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" }) }),
    "312 stale CIs detected overnight \xB7 High severity"
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "cmp-banner-body", children: [
    /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("p", { className: "cmp-banner-t", children: "Payments and Logistics domains below trust target" }),
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("p", { className: "cmp-banner-s", children: "Review recommended \u2014 8 batch actions prepared" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("button", { children: [
      "Investigate with AI",
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("path", { d: "M5 12h14M13 5l7 7-7 7" }) })
    ] })
  ] })
] }) });
var StatusBanner_default = StatusBanner;

// storybook/src/composites/TrustGauge.tsx
var import_jsx_runtime51 = require("react/jsx-runtime");
var TrustGauge = () => /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "cmp-gauge-page", children: /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "cmp-gauge-card", children: [
  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "cmp-gauge-eyebrow", children: "CMDB Trust Score" }),
  /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "cmp-gauge-head", children: [
    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("h3", { children: "Current posture \xB7 reconciled CIs" }),
    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("span", { className: "cmp-gauge-target", children: "Target 95% \xB7 gap 33 pts" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "cmp-gauge-pct", children: [
    "62",
    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("span", { style: { fontSize: 16, color: "var(--fg-muted)", fontWeight: 500 }, children: "%" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "cmp-gauge-bar", children: [
    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "cmp-gauge-fill" }),
    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "cmp-gauge-gap" }),
    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "cmp-gauge-marker" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "cmp-gauge-legend", children: [
    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("span", { children: "0%" }),
    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("span", { children: "current 62%" }),
    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("span", { children: "target 95%" })
  ] })
] }) });
var TrustGauge_default = TrustGauge;

// storybook/src/templates/DashboardTemplate.tsx
var import_jsx_runtime52 = require("react/jsx-runtime");
var DashboardTemplate = () => /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "tpl-dashboard", children: [
  /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "tpl-header-row", children: [
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("h2", { children: "DashboardTemplate" }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("span", { className: "tpl-hd", style: { margin: 0 }, children: "AppShell \u203A header \xB7 KpiGrid \xB7 StatusBanner[] \xB7 chart row" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "tpl-grid tpl-kpi-grid", style: { marginBottom: 10 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "tpl-slot tpl-slot-filled", style: { padding: 12 }, children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "tpl-hd", style: { margin: "0 0 2px" }, children: "Trust score" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "tpl-kpi-value", children: "62%" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "tpl-slot tpl-slot-filled", style: { padding: 12 }, children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "tpl-hd", style: { margin: "0 0 2px" }, children: "Stale CIs" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "tpl-kpi-value", children: "312" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "tpl-slot tpl-slot-filled", style: { padding: 12 }, children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "tpl-hd", style: { margin: "0 0 2px" }, children: "Orphans" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "tpl-kpi-value", children: "47" })
    ] }) })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "tpl-slot", style: { marginBottom: 10 }, children: "StatusBannerCard[] \u2014 severity alerts + Investigate CTA" }),
  /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "tpl-grid tpl-row2", style: { marginBottom: 10 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "tpl-slot", style: { height: 110 }, children: "Chart \xB7 Impacted CIs by Domain" }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "tpl-slot", style: { height: 110 }, children: "Chart \xB7 Priority mix donut" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "tpl-slot", style: { height: 80 }, children: "SignalsPanel \xB7 Optimisation + Reconciliation triggers" })
] });

// storybook/src/templates/TriageTemplate.tsx
var import_jsx_runtime53 = require("react/jsx-runtime");
var TriageTemplate = () => /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "tpl-triage", children: [
  /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "tpl-hdr tpl-hdr-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("h2", { children: "TriageTemplate" }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("span", { children: "FilterBar \xB7 FindingCard stack \xB7 InspectorDrawer" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "tpl-col", children: [
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "tpl-slot tpl-slot-solid", style: { padding: "8px 12px" }, children: "FilterBar \xB7 severity \xB7 domain \xB7 age \xB7 owner \xB7 clear" }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "tpl-slot", style: { height: 90 }, children: "FindingCard \xB7 312 stale CIs (KPI row + distribution chart + table)" }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "tpl-slot", style: { height: 60 }, children: "FindingCard \xB7 47 orphans" }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "tpl-slot", style: { height: 60 }, children: "FindingCard \xB7 14 duplicate records" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "tpl-col", children: [
    /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "tpl-slot tpl-slot-solid", style: { padding: "8px 12px", justifyContent: "flex-start" }, children: [
      "InspectorDrawer",
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("span", { style: { fontSize: 9, color: "var(--fg-muted)", marginTop: 4 }, children: "(pinned right)" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "tpl-slot", style: { height: 50 }, children: "metadataGrid" }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "tpl-slot", style: { height: 50 }, children: "signalsList" }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "tpl-slot", style: { height: 40 }, children: "relatedItems" }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "tpl-slot", style: { height: 40 }, children: "actionBar \xB7 Execute \xB7 Review \xB7 Defer" })
  ] })
] });

// storybook/src/templates/InvestigationTemplate.tsx
var import_jsx_runtime54 = require("react/jsx-runtime");
var InvestigationTemplate = () => /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { className: "tpl-investigation", children: [
  /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { className: "tpl-hdr tpl-hdr-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("h2", { children: "InvestigationTemplate" }),
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("span", { children: "GraphControlRail \xB7 GraphCanvas \xB7 GraphInspector" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { className: "tpl-col", children: [
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { className: "tpl-slot", children: "filters \xB7 domain \xB7 BU \xB7 status" }),
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { className: "tpl-slot", children: "lensPicker \xB7 Full \u25BE" }),
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { className: "tpl-slot", children: "searchInput" }),
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { className: "tpl-slot", children: "legend" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { className: "tpl-slot tpl-slot-solid tpl-graph-canvas", children: "GraphCanvas \xB7 ReactFlow" }),
  /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { className: "tpl-col", children: [
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { className: "tpl-slot", children: "lineageBreadcrumb" }),
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { className: "tpl-slot", children: "selection metadata" }),
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { className: "tpl-slot", children: "upstream \xB7 downstream lists" }),
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { className: "tpl-slot", children: "ImpactRollup" }),
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { className: "tpl-slot", children: "actionBar" })
  ] })
] });

// storybook/src/templates/ReviewTemplate.tsx
var import_jsx_runtime55 = require("react/jsx-runtime");
var ReviewTemplate = () => /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { className: "tpl-review", children: [
  /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { className: "tpl-hdr", style: { marginBottom: 10 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("h2", { children: "ReviewQueueTemplate" }),
    /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("span", { children: "Access Review \xB7 Change Requests \xB7 Correction Requests share this" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { className: "tpl-col", children: [
    /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: "tpl-slot", children: "FilterBar \xB7 state \xB7 owner \xB7 age \xB7 risk" }),
    /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { className: "tpl-review-row", children: [
      /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { className: "tpl-col", children: [
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: "tpl-slot tpl-review-queue-row", children: "QueueRow \xB7 Pending \xB7 bCRQ-3102 \xB7 owner \xB7 reason" }),
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: "tpl-slot tpl-review-queue-row", children: "QueueRow \xB7 Approved \xB7 bCRQ-3085 \xB7 audit link" }),
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: "tpl-slot tpl-review-queue-row", children: "QueueRow \xB7 Executed \xB7 bCRQ-3072 \xB7 +2.1 pts" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { className: "tpl-col", children: [
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: "tpl-slot", style: { minHeight: 40 }, children: "InspectorDrawer \xB7 selected row" }),
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: "tpl-slot", style: { minHeight: 50 }, children: "decisionForm \xB7 reason (required) \xB7 approver" }),
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: "tpl-slot", style: { minHeight: 40 }, children: "actionBar \xB7 Approve \xB7 Reject \xB7 Defer" }),
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: "tpl-slot", style: { minHeight: 40 }, children: "auditTrail" })
      ] })
    ] })
  ] })
] });

// storybook/src/templates/ConversationTemplate.tsx
var import_jsx_runtime56 = require("react/jsx-runtime");
var ConversationTemplate = () => /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "tpl-conversation", children: [
  /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "tpl-hdr tpl-hdr-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("h2", { children: "ConversationTemplate" }),
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("span", { children: "Message stream \xB7 composer \xB7 persistent snapshot rail" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "tpl-col", children: [
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "tpl-slot", style: { minHeight: 60, justifyContent: "flex-start" }, children: "ChatMessage \xB7 user" }),
    /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "tpl-slot", style: { minHeight: 120, justifyContent: "flex-start", flexDirection: "column", alignItems: "flex-start" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { children: "ChatMessage \xB7 assistant \xB7 markdown + HighlightLinks" }),
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { style: { marginTop: 8, width: "100%" }, children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "tpl-slot", style: { minHeight: 40 }, children: "SnapshotCard \xB7 highlight-link bound" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "tpl-slot", style: { minHeight: 50 }, children: "composer \xB7 input + attach + send" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "tpl-col", children: [
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "tpl-slot", style: { flexDirection: "column", alignItems: "flex-start" }, children: "Context rail" }),
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "tpl-slot", children: "pinned snapshots" }),
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "tpl-slot", children: "recent queries" }),
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "tpl-slot", children: "SourceAttribution footer" })
  ] })
] });

// storybook/src/states/StatesMatrix.tsx
var import_jsx_runtime57 = require("react/jsx-runtime");
var StatesMatrix = () => /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "stm-wrapper", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "stm-grid", children: [
  /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "stm-card", children: [
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { className: "stm-k", children: "loading" }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "stm-skel", style: { height: 14, width: "60%" } }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "stm-skel", style: { height: 10, width: "85%" } }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "stm-skel", style: { height: 10, width: "70%" } }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
      "div",
      {
        className: "stm-skel",
        style: { height: 26, width: "40%", marginTop: "auto" }
      }
    )
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "stm-card", children: [
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { className: "stm-k", children: "empty" }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "stm-t", style: { textAlign: "center", margin: "auto 0 4px" }, children: "No stale CIs" }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "stm-s", style: { textAlign: "center" }, children: "Scan ran 4m ago \xB7 nothing to triage" }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("button", { className: "stm-btn stm-prim", style: { alignSelf: "center" }, children: "Run scan again" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "stm-card", children: [
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { className: "stm-k", children: "filtered-empty" }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "stm-t", style: { textAlign: "center", margin: "auto 0 4px" }, children: "No results match filters" }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "stm-s", style: { textAlign: "center" }, children: "3 filters active \xB7 312 rows hidden" }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("button", { className: "stm-btn", style: { alignSelf: "center" }, children: "Clear all filters" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)(
    "div",
    {
      className: "stm-card",
      style: { background: "#FFF7ED", borderColor: "#FED7AA" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { className: "stm-k", style: { color: "#9A3412" }, children: "error" }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "stm-t", children: "Couldn't load findings" }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "stm-s", children: "Upstream cmdb_sync returned 502 at 14:04. Agent has retried 2x unsuccessfully." }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { style: { display: "flex", gap: 6 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("button", { className: "stm-btn stm-prim", children: "Retry" }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("button", { className: "stm-btn", children: "Escalate" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "stm-card", children: [
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { className: "stm-k", children: "stale" }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("span", { className: "stm-sev stm-amber", children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)(
        "svg",
        {
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2.5",
          strokeLinecap: "round",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("polyline", { points: "12 6 12 12 16 14" })
          ]
        }
      ),
      "94d old"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "stm-t", children: "Payments domain trust" }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "stm-s", children: "Underlying data not refreshed in 94 days. Treat figures as advisory." })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "stm-card", children: [
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { className: "stm-k", children: "unauthorized" }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "stm-t", children: "Access review is approver-only" }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("p", { className: "stm-s", children: [
      "Your role: ",
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("b", { children: "access.requestor" }),
      ". Ask an admin to grant",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("code", { style: { fontSize: 10 }, children: "access.reviewer" }),
      " to see findings."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("button", { className: "stm-btn", children: "Request access" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "stm-card", children: [
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { className: "stm-k", children: "executing" }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "stm-t", children: "Retiring 47 CIs\u2026" }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("p", { className: "stm-s stm-dots", children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("i", {}),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("i", {}),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("i", {}),
      " Step 2 of 4 \xB7 validating incidents"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
      "div",
      {
        style: {
          background: "#F1F5F9",
          borderRadius: 9999,
          height: 4,
          overflow: "hidden"
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { style: { background: "#29707A", height: "100%", width: "52%" } })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
      "button",
      {
        className: "stm-btn",
        disabled: true,
        style: { opacity: 0.5, cursor: "not-allowed" },
        children: "Execute \xB7 in flight"
      }
    )
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)(
    "div",
    {
      className: "stm-card",
      style: { background: "#E0F2E8", borderColor: "#A8DDBF" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { className: "stm-k", style: { color: "#0D5C2E" }, children: "success-after-action" }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("span", { className: "stm-sev stm-emerald", children: [
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
            "svg",
            {
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "3",
              strokeLinecap: "round",
              children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("polyline", { points: "20 6 9 17 4 12" })
            }
          ),
          "Executed"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "stm-t", children: "47 CIs retired \xB7 +2.1 pts trust" }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "stm-s", children: "Agent is monitoring for regressions" }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { style: { display: "flex", gap: 6 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("button", { className: "stm-btn", children: "View audit" }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("button", { className: "stm-btn", children: "Undo (4:12)" })
        ] })
      ]
    }
  )
] }) });

// storybook/src/kits/CmdbWorkspace.tsx
var import_react16 = require("react");
var import_jsx_runtime58 = require("react/jsx-runtime");
var viewLabels = {
  dashboard: "Dashboard",
  triage: "Access review",
  recommendations: "Recommendations",
  investigation: "Investigation",
  changes: "Change requests",
  chat: "Assistant",
  incidents: "Incidents",
  reports: "Reports"
};
var navItems = [
  { view: "chat", label: "Assistant" },
  { view: "dashboard", label: "Dashboard", badge: "3" },
  { view: "investigation", label: "Investigation" },
  { view: "triage", label: "Access review" },
  { view: "recommendations", label: "Recommendations" },
  { view: "changes", label: "Change requests" },
  { view: "incidents", label: "Incidents" },
  { view: "reports", label: "Reports" }
];
var CmdbWorkspace = () => {
  const [loggedIn, setLoggedIn] = (0, import_react16.useState)(false);
  const [username, setUsername] = (0, import_react16.useState)("anna_access");
  const [password, setPassword] = (0, import_react16.useState)("password");
  const [currentView, setCurrentView] = (0, import_react16.useState)("dashboard");
  const [drawerOpen, setDrawerOpen] = (0, import_react16.useState)(false);
  const [drawerTarget, setDrawerTarget] = (0, import_react16.useState)("ci");
  const [expandedSignals, setExpandedSignals] = (0, import_react16.useState)(/* @__PURE__ */ new Set());
  const [recExecuted, setRecExecuted] = (0, import_react16.useState)(false);
  const [approvedRows, setApprovedRows] = (0, import_react16.useState)(/* @__PURE__ */ new Set());
  const displayName = username.split("_").map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(" ");
  const initials2 = username.slice(0, 2).toUpperCase();
  const doLogin = () => {
    setLoggedIn(true);
  };
  const signout = () => {
    setLoggedIn(false);
  };
  const openDrawer = (target) => {
    setDrawerTarget(target);
    setDrawerOpen(true);
  };
  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  const toggleSignal = (id) => {
    setExpandedSignals((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };
  const approveRow = (idx) => {
    setApprovedRows((prev) => new Set(prev).add(idx));
  };
  if (!loggedIn) {
    return /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-wrapper kit-cmdb", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-login-screen", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-login-box", children: [
      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { style: { fontSize: 24, fontWeight: 700, marginBottom: 20, color: "#29707A" }, children: "Kyndryl" }),
      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("h2", { children: "Sign in" }),
      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { children: "CMDB Data Quality workspace" }),
      /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-field", children: [
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("label", { children: "Username" }),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("input", { value: username, onChange: (e) => setUsername(e.target.value) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-field", children: [
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("label", { children: "Password" }),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("input", { type: "password", value: password, onChange: (e) => setPassword(e.target.value) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("button", { className: "kit-login-btn", onClick: doLogin, children: "Sign in" }),
      /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-demo-accounts", children: [
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("strong", { children: "Demo accounts" }),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("code", { children: "anna_access" }),
        " \xB7 ",
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("code", { children: "raj_security" }),
        " \xB7 ",
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("code", { children: "tom_team" }),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("span", { style: { marginTop: 4, display: "inline-block" }, children: [
          "Password: ",
          /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("code", { children: "password" })
        ] })
      ] })
    ] }) }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-wrapper kit-cmdb", children: [
    /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-cmdb-app", children: [
      /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("aside", { className: "kit-side", children: [
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-side-head", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { style: { fontSize: 20, fontWeight: 700, color: "#29707A" }, children: "Kyndryl" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("nav", { className: "kit-nav", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("ul", { children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(
          "a",
          {
            className: currentView === item.view ? "kit-active" : "",
            onClick: () => setCurrentView(item.view),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                item.view === "chat" && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(import_jsx_runtime58.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }) }),
                item.view === "dashboard" && /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(import_jsx_runtime58.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("rect", { x: "3", y: "3", width: "7", height: "7" }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("rect", { x: "14", y: "3", width: "7", height: "7" }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("rect", { x: "3", y: "14", width: "7", height: "7" }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("rect", { x: "14", y: "14", width: "7", height: "7" })
                ] }),
                item.view === "investigation" && /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(import_jsx_runtime58.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("circle", { cx: "12", cy: "12", r: "9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M12 3v9l6 3" })
                ] }),
                item.view === "triage" && /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(import_jsx_runtime58.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("circle", { cx: "9", cy: "7", r: "4" }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M23 21v-2a4 4 0 0 0-3-3.87" }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
                ] }),
                item.view === "recommendations" && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(import_jsx_runtime58.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M12 2l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" }) }),
                item.view === "changes" && /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(import_jsx_runtime58.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("polyline", { points: "22 4 12 14.01 9 11.01" })
                ] }),
                item.view === "incidents" && /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(import_jsx_runtime58.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M12 8v4M12 16h.01" })
                ] }),
                item.view === "reports" && /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(import_jsx_runtime58.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M14 2v6h6" }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M16 13H8M16 17H8M10 9H8" })
                ] })
              ] }),
              item.label,
              item.badge && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-badge", children: item.badge })
            ]
          }
        ) }, item.view)) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-side-foot", children: [
          /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("button", { className: "kit-explain-btn", children: [
            /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", style: { width: 15, height: 15 }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M12 16v-4M12 8h.01" })
            ] }),
            "Explainability"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { style: { borderTop: "1px solid var(--border-1)", paddingTop: 8 }, children: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-user-info", children: [
            /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-name", children: displayName }),
            /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("button", { className: "kit-signout", onClick: signout, children: "Sign out" })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-main", children: [
        /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("header", { className: "kit-header", children: [
          /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("h1", { children: viewLabels[currentView] }),
          /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-avatar", children: initials2 })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-content", children: [
          currentView === "dashboard" && /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-gauge-card kit-card", children: [
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-eyebrow", style: { marginBottom: 6 }, children: "CMDB Trust Score" }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-gauge-head", children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("h3", { children: "Reconciled & verified CIs \xB7 production domains" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { style: { fontSize: 11, color: "var(--fg-muted)" }, children: "Target 95% \xB7 gap 33 pts" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-gauge-pct", children: [
                "62",
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { style: { fontSize: 20, color: "var(--fg-muted)", fontWeight: 500 }, children: "%" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-gauge-bar", children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-gauge-fill" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-gauge-gap" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-gauge-mark" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--fg-muted)", fontFamily: "var(--font-mono)", marginTop: 6 }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { children: "0%" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { children: "current 62%" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { children: "target 95%" })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-kpi-grid", children: [
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-kpi kit-card", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { style: { padding: "16px 20px" }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { className: "kit-kpi-lbl", children: "Total CIs tracked" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { className: "kit-kpi-val", children: "4,812" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { className: "kit-kpi-delta kit-up", children: "+124 WoW" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { className: "kit-kpi-sub", children: "Discovered across 38 applications" })
              ] }) }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-kpi kit-card", style: { padding: 0 }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-kpi-warn", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("span", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("svg", { viewBox: "0 0 24 24", fill: "currentColor", style: { width: 14, height: 14, color: "#B45309" }, children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2V10h2v4z" }) }),
                    "Unreviewed for 30d+"
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("button", { className: "kit-kpi-warn-btn", onClick: () => setCurrentView("triage"), children: "Investigate with AI \u2192" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { style: { padding: "14px 20px" }, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { className: "kit-kpi-lbl", children: "Stale CIs" }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { className: "kit-kpi-val", children: "312" }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { className: "kit-kpi-delta kit-down", children: "+28 vs last week" }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { className: "kit-kpi-sub", children: "Not verified in 30d+" })
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-kpi kit-card", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { style: { padding: "16px 20px" }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { className: "kit-kpi-lbl", children: "Orphaned CIs" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { className: "kit-kpi-val", children: "47" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { className: "kit-kpi-delta kit-up", children: "\u22128 vs last week" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { className: "kit-kpi-sub", children: "No upstream/downstream edges" })
              ] }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-row-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-chart-card kit-card", children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-chart-head", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("h3", { children: "Impacted CIs by Domain" }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { children: "Rolled up from active impact set \xB7 last 24h" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-chart-body", children: [
                  { h: "85%", v: "142", l: "Payments" },
                  { h: "68%", v: "118", l: "Logistics" },
                  { h: "52%", v: "91", l: "Retail" },
                  { h: "38%", v: "66", l: "HR" },
                  { h: "22%", v: "38", l: "Shared" }
                ].map((b) => /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-bar", style: { height: b.h }, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { children: b.v }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("small", { children: b.l })
                ] }, b.l)) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-chart-card kit-card", children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-chart-head", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("h3", { children: "Correction priority mix" }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { children: "124 open correction requests" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-donut" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-donut-legend", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("span", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("i", { style: { background: "#E11D48" } }),
                    "Immediate \xB7 22%"
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("span", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("i", { style: { background: "#F59E0B" } }),
                    "Urgent \xB7 26%"
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("span", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("i", { style: { background: "#29707A" } }),
                    "High \xB7 30%"
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("span", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("i", { style: { background: "#10B981" } }),
                    "Medium \xB7 22%"
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-sig-panel kit-card", children: [
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-sig-head", children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { style: { fontWeight: 600, color: "var(--fg-1)" }, children: "Live Signals" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { style: { color: "var(--fg-muted)" }, children: "\xB7" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { style: { color: "var(--fg-muted)", fontSize: 11 }, children: "6 active \xB7 1 Critical \xB7 3 High \xB7 2 Medium" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-sig-grid", children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-sig-col", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-sig-col-head", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("i", { style: { background: "#10B981" } }),
                    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-lbl", children: "Optimisation" }),
                    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-cnt", children: "3 signals" })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: `kit-sig-card kit-high ${expandedSignals.has("s1") ? "kit-expanded" : ""}`, onClick: () => toggleSignal("s1"), children: [
                    /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-sig-row-top", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-sev-pill kit-high", children: "High" }),
                      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-sig-title", children: "Retire 47 unused CIs" })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { className: "kit-sig-metric", children: "+5.1 pts domain trust lift" }),
                    /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-sig-detail", children: [
                      "None of these 47 CIs appeared in discovery for 90+ days and no incidents reference them. Safe to retire in batch.",
                      /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-sig-actions", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("button", { className: "kit-btn-xs kit-primary", children: "Ask AI" }),
                        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("button", { className: "kit-btn-xs kit-secondary", children: "View \u2192" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: `kit-sig-card kit-medium ${expandedSignals.has("s2") ? "kit-expanded" : ""}`, onClick: () => toggleSignal("s2"), children: [
                    /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-sig-row-top", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-sev-pill kit-medium", children: "Medium" }),
                      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-sig-title", children: "Consolidate 14 duplicate records" })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { className: "kit-sig-metric", children: "Estimated 2h analyst time saved" })
                  ] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-sig-col", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-sig-col-head", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("i", { style: { background: "#E11D48" } }),
                    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-lbl", children: "Reconciliation triggers" }),
                    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-cnt", children: "3 signals" })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: `kit-sig-card kit-critical ${expandedSignals.has("s3") ? "kit-expanded" : ""}`, onClick: () => toggleSignal("s3"), children: [
                    /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-sig-row-top", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-sev-pill kit-critical", children: "Critical" }),
                      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-sig-title", children: "Payments domain below 60%" })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { className: "kit-sig-metric", children: "Trust dropped 4 pts overnight" }),
                    /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-sig-detail", children: [
                      "22 new orphaned CIs in payments-svc cluster since the 02:00 discovery scan. Upstream app ",
                      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("code", { children: "checkout-api" }),
                      " marked Degraded.",
                      /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-sig-actions", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("button", { className: "kit-btn-xs kit-primary", children: "Investigate" }),
                        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("button", { className: "kit-btn-xs kit-secondary", children: "View \u2192" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: `kit-sig-card kit-high ${expandedSignals.has("s4") ? "kit-expanded" : ""}`, onClick: () => toggleSignal("s4"), children: [
                    /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-sig-row-top", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-sev-pill kit-high", children: "High" }),
                      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-sig-title", children: "Owner missing \xB7 8 CIs" })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { className: "kit-sig-metric", children: "Logistics domain \xB7 since 3d" })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          currentView === "triage" && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-card", style: { marginBottom: 16 }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-triage-header", children: [
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("h3", { children: "Stale CIs \xB7 312 findings" }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-filters", children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("button", { className: "kit-filter", children: "All domains" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("button", { className: "kit-filter", children: "All priorities" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("button", { className: "kit-filter", children: "Clear all" })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("table", { className: "kit-triage-table", children: [
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("tr", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("th", { children: "CI" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("th", { children: "Application" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("th", { children: "Last verified" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("th", { children: "Priority" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("th", { children: "Signals" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("th", {})
              ] }) }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("tbody", { children: [
                { ci: "payments-db-03", app: "checkout-api", age: "94 days ago", sev: "critical", sig: 3 },
                { ci: "logistics-cache-11", app: "shipment-tracker", age: "62 days ago", sev: "high", sig: 2 },
                { ci: "hr-audit-svc-04", app: "people-hub", age: "44 days ago", sev: "medium", sig: 1 },
                { ci: "retail-session-02", app: "pos-gateway", age: "38 days ago", sev: "medium", sig: 2 },
                { ci: "shared-auth-proxy-01", app: "iam-core", age: "33 days ago", sev: "low", sig: 1 }
              ].map((row) => /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("tr", { onClick: () => openDrawer("ci"), children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("td", { className: "kit-mono", children: row.ci }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("td", { children: row.app }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("td", { children: row.age }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: `kit-sev-pill kit-${row.sev}`, children: row.sev.charAt(0).toUpperCase() + row.sev.slice(1) }) }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("td", { children: row.sig }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("button", { className: "kit-link", children: "Investigate \u2192" }) })
              ] }, row.ci)) })
            ] })
          ] }) }),
          currentView === "recommendations" && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-rec-card kit-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-rec-head", children: [
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-rec-icon", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("svg", { viewBox: "0 0 24 24", fill: "currentColor", style: { width: 20, height: 20 }, children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M12 2l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" }) }) }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { style: { flex: 1 }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("h3", { className: "kit-rec-title", children: "Retire 47 stale CIs in payments-svc cluster" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-rec-meta", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-rec-b kit-conf", children: "92% confidence" }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-rec-b kit-lift", children: "+5.1 pts trust lift" }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-rec-b", style: { background: "#F1F5F9", color: "#475569", borderColor: "#E2E8F0" }, children: "Last verified today" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-rec-reason", children: [
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("strong", { children: "Agent reason \xB7 " }),
              "None of these 47 CIs have appeared in discovery scans for 90+ days and no active incidents reference them. Retiring now lifts Payments domain trust from 58% to 63% and removes 47 orphaned nodes from the graph."
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-rec-sig-head", children: "Signals" }),
            /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-rec-sigs", children: [
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-rec-sig", children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("i", { style: { background: "#F59E0B" } }),
                "No discovery heartbeat \xB7 94d average"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-rec-sig", children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("i", { style: { background: "#64748B" } }),
                "0 open incidents reference these CIs"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-rec-sig", children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("i", { style: { background: "#10B981" } }),
                "All upstream apps show Healthy status"
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-rec-sig-head", children: "Impact rollup -- before action" }),
            /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-rollup", style: { marginTop: 8 }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-rollup-tile", children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-rk", children: "Impacted CIs" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-rv", children: "47" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-rollup-tile", children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-rk", children: "Applications" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-rv", children: "3" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-rollup-tile", children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-rk", children: "Processes" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-rv", children: "2" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-rollup-tile", children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-rk", children: "Business units" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-rv", children: "1" })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-rec-actions", children: [
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
                "button",
                {
                  className: "kit-btn-sm kit-primary",
                  onClick: () => setRecExecuted(true),
                  disabled: recExecuted,
                  style: recExecuted ? { background: "#047857" } : void 0,
                  children: recExecuted ? "Executed \u2713" : "Execute"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("button", { className: "kit-btn-sm kit-secondary", children: "Send for review" }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("button", { className: "kit-btn-sm kit-ghost", children: "Dismiss" }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-rec-attrib", children: "Powered by agentic AI \xB7 3m ago" })
            ] })
          ] }) }),
          currentView === "investigation" && /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-graph-layout", children: [
            /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-graph-rail", children: [
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("h4", { children: "Filters" }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-lens", style: { marginBottom: 6 }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("button", { style: { textAlign: "left" }, children: "All domains \u25BE" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("button", { style: { textAlign: "left" }, children: "All business units \u25BE" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("button", { style: { textAlign: "left" }, children: "All statuses \u25BE" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("h4", { children: "Lens" }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-lens", children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("button", { className: "kit-active", children: "Full context" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("button", { children: "Upstream" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("button", { children: "Downstream" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("button", { children: "Business impact" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("h4", { children: "Legend" }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { style: { display: "flex", flexDirection: "column", gap: 6, fontSize: 11 }, children: [
                { color: "#10B981", label: "Healthy" },
                { color: "#F59E0B", label: "Degraded" },
                { color: "#F97316", label: "Impacted" },
                { color: "#94A3B8", label: "Unknown" }
              ].map((item) => /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { style: { display: "flex", gap: 8, alignItems: "center" }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("i", { style: { width: 8, height: 8, borderRadius: "50%", background: item.color, display: "inline-block" } }),
                item.label
              ] }, item.label)) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-graph-canvas", children: [
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-edge", style: { top: 84, left: 170, width: 180 } }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-edge", style: { top: 84, left: 170, width: 180, transform: "rotate(30deg)" } }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-edge kit-impacted", style: { top: 174, left: 370, width: 150, transform: "rotate(20deg)" } }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-edge", style: { top: 244, left: 530, width: 120 } }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-edge", style: { top: 244, left: 530, width: 120, transform: "rotate(-25deg)" } }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-edge kit-impacted", style: { top: 334, left: 680, width: 130 } }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-node kit-domain kit-healthy", style: { top: 60, left: 24 }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("i", {}),
                "Retail"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-node kit-healthy", style: { top: 60, left: 180 }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("i", {}),
                "BU \xB7 Commerce"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-node kit-degraded", style: { top: 160, left: 380 }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("i", {}),
                "Process \xB7 Checkout"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-node kit-impacted kit-selected", style: { top: 230, left: 540 }, onClick: () => openDrawer("app"), children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("i", {}),
                "App \xB7 checkout-api"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-node kit-impacted", style: { top: 320, left: 690 }, onClick: () => openDrawer("ci"), children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("i", {}),
                "CI \xB7 payments-db-03"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-node kit-healthy", style: { top: 400, left: 690 }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("i", {}),
                "CI \xB7 payments-cache-02"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-node kit-healthy", style: { top: 150, left: 180 }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("i", {}),
                "BU \xB7 Support"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-node kit-healthy", style: { top: 250, left: 380 }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("i", {}),
                "Process \xB7 Returns"
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-graph-inspector", children: [
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-breadcrumb", children: "Retail \u203A Commerce \u203A Checkout \u203A checkout-api" }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("h3", { children: "checkout-api" }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { style: { fontSize: 11, color: "var(--fg-muted)", margin: "0 0 12px" }, children: "Application \xB7 Impacted" }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-prop", children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-pk", children: "Status" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-pv", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-sev-pill", style: { background: "#FFEDD5", color: "#C2410C", border: "1px solid #FED7AA" }, children: "Impacted" }) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-prop", children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-pk", children: "Owner" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-pv", children: "payments-platform@kyndryl" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-prop", children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-pk", children: "Last verified" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-pv", children: "14-04-2026 14:02" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-prop", children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-pk", children: "Downstream CIs" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-pv", children: "6 \xB7 1 impacted" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-drawer-section", children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("h4", { children: "Impact rollup" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-rollup", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-rollup-tile", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-rk", children: "CIs" }),
                    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-rv", children: "6" })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-rollup-tile", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-rk", children: "Apps" }),
                    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-rv", children: "1" })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-rollup-tile", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-rk", children: "Processes" }),
                    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-rv", children: "1" })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-rollup-tile", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-rk", children: "BUs" }),
                    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-rv", children: "1" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-drawer-section", children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("h4", { children: "Actions" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: 6 }, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("button", { className: "kit-btn-sm kit-primary", style: { justifyContent: "center" }, children: "Investigate with AI" }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("button", { className: "kit-btn-sm kit-secondary", style: { justifyContent: "center" }, children: "Open in chat" })
                ] })
              ] })
            ] })
          ] }),
          currentView === "changes" && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-triage-header", children: [
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("h3", { children: "Correction requests \xB7 12 pending review" }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-filters", children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("button", { className: "kit-filter", children: "All states" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("button", { className: "kit-filter", children: "All owners" })
              ] })
            ] }),
            [
              { state: "pending", title: "Retire 47 stale CIs in payments-svc cluster", meta: 'Submitted by agentic-remediation \xB7 bCRQ-3102 \xB7 12m ago \xB7 reason "No discovery heartbeat 90d+"', idx: 0 },
              { state: "pending", title: "Re-assign owner \xB7 8 logistics CIs", meta: "Submitted by anna_access \xB7 bCRQ-3098 \xB7 42m ago", idx: 1 },
              { state: "approved", title: "Merge 14 duplicate CI records \xB7 hr-audit-svc", meta: "Approved by raj_security \xB7 bCRQ-3085 \xB7 2h ago \xB7 execution queued", idx: 2 },
              { state: "executed", title: "Retire 11 orphaned CIs \xB7 retail-session cluster", meta: "Executed \xB7 bCRQ-3072 \xB7 5h ago \xB7 +2.1 pts domain trust", idx: 3 }
            ].map((row) => {
              const isApproved = approvedRows.has(row.idx);
              const effectiveState = row.state === "pending" && isApproved ? "approved" : row.state;
              return /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-queue-row", children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: `kit-queue-state kit-${effectiveState}`, children: effectiveState.charAt(0).toUpperCase() + effectiveState.slice(1) }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { className: "kit-queue-title", children: row.title }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { className: "kit-queue-meta", children: row.meta })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-queue-actions", children: effectiveState === "pending" ? /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(import_jsx_runtime58.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("button", { className: "kit-btn-sm kit-primary", onClick: () => approveRow(row.idx), children: "Approve" }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("button", { className: "kit-btn-sm kit-secondary", children: "Defer" }),
                  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("button", { className: "kit-btn-sm kit-ghost", children: "Reject" })
                ] }) : /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("button", { className: "kit-btn-sm kit-secondary", children: "View audit trail" }) })
              ] }, row.idx);
            })
          ] }) }),
          currentView === "chat" && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-card", style: { padding: 32, textAlign: "center", color: "var(--fg-muted)" }, children: "Assistant surface \xB7 see dashboard Signals panel for the primary agent entry point." }),
          currentView === "incidents" && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-card", style: { padding: 32, textAlign: "center", color: "var(--fg-muted)" }, children: "Incidents queue (stub) \xB7 shares table + drawer pattern with Access review." }),
          currentView === "reports" && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-card", style: { padding: 32, textAlign: "center", color: "var(--fg-muted)" }, children: "Reports (stub) \xB7 uses the Dashboard's chart components." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: `kit-scrim ${drawerOpen ? "kit-open" : ""}`, onClick: closeDrawer }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: `kit-drawer ${drawerOpen ? "kit-open" : ""}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-drawer-head", children: [
        /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("h2", { children: drawerTarget === "app" ? "checkout-api" : "payments-db-03" }),
          /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { children: drawerTarget === "app" ? "Application \xB7 Impacted" : "CI \xB7 Database \xB7 Impacted" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("button", { className: "kit-drawer-close", onClick: closeDrawer, children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("svg", { viewBox: "0 0 16 16", style: { width: 16, height: 16 }, children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M 3.22 3.22 L 12.78 12.78 M 12.78 3.22 L 3.22 12.78", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", fill: "none" }) }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-drawer-body", children: [
        /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-prop", children: [
          /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-pk", children: "Status" }),
          /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-pv", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-sev-pill", style: { background: "#FFEDD5", color: "#C2410C", border: "1px solid #FED7AA" }, children: "Impacted" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-prop", children: [
          /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-pk", children: "Last verified" }),
          /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-pv", children: "94 days ago \xB7 20-01-2026 02:14" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-prop", children: [
          /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-pk", children: "Owner" }),
          /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-pv", children: "payments-platform@kyndryl" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-prop", children: [
          /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-pk", children: "Application" }),
          /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-pv", children: "checkout-api" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-prop", children: [
          /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-pk", children: "Ticket" }),
          /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-pv", style: { fontFamily: "var(--font-mono)", fontSize: 11 }, children: "bINC4219003" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-prop", children: [
          /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-pk", children: "Priority" }),
          /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-pv", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "kit-sev-pill kit-critical", children: "1- Immediate" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-drawer-section", children: [
          /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("h4", { children: "Signals" }),
          /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-rec-sigs", children: [
            /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-rec-sig", children: [
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("i", { style: { background: "#F59E0B" } }),
              "No discovery heartbeat \xB7 94d"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-rec-sig", children: [
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("i", { style: { background: "#E11D48" } }),
              "Referenced by 3 open incidents"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-rec-sig", children: [
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("i", { style: { background: "#F59E0B" } }),
              "Owner email bounced 2d ago"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-drawer-section", children: [
          /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("h4", { children: "Impact rollup" }),
          /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-rollup", children: [
            /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-rollup-tile", children: [
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-rk", children: "CIs" }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-rv", children: "1" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-rollup-tile", children: [
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-rk", children: "Apps" }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-rv", children: "3" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-rollup-tile", children: [
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-rk", children: "Processes" }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-rv", children: "2" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-rollup-tile", children: [
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-rk", children: "BUs" }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "kit-rv", children: "1" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-drawer-section", children: [
          /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("h4", { children: "Provenance" }),
          /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { style: { fontSize: 11, color: "var(--fg-muted)", lineHeight: 1.55, margin: 0 }, children: "Source: ServiceNow CMDB \xB7 table cmdb_ci_db_mssql \xB7 last discovery sync 20-01-2026 02:14. Agent reviewed against incident feed and knowledge-graph on 23-04-2026." })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "kit-drawer-actions", children: [
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("button", { className: "kit-btn-sm kit-primary", style: { flex: 1, justifyContent: "center" }, children: "Investigate with AI" }),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("button", { className: "kit-btn-sm kit-secondary", children: "Retire" }),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("button", { className: "kit-btn-sm kit-ghost", children: "Defer" })
      ] })
    ] })
  ] });
};

// storybook/src/kits/ShidokaShell.tsx
var import_react17 = require("react");
var import_jsx_runtime59 = require("react/jsx-runtime");
var ShidokaShell = () => {
  const [navOpen, setNavOpen] = (0, import_react17.useState)(true);
  const [screen, setScreen] = (0, import_react17.useState)("dashboard");
  const [appsFlyout, setAppsFlyout] = (0, import_react17.useState)(false);
  const [wsFlyout, setWsFlyout] = (0, import_react17.useState)(false);
  const closeFlyouts = () => {
    setAppsFlyout(false);
    setWsFlyout(false);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "kit-wrapper kit-shell-wrapper", onClick: closeFlyouts, children: [
    /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("header", { className: "kit-sh-header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "kit-sh-header__logo", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--fg-1)" }, children: "Kyndryl" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "kit-sh-header__title", children: "Agentic Framework" }),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("nav", { className: "kit-sh-nav", "aria-label": "Primary", children: [
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("a", { className: `kit-sh-nav-link ${screen === "dashboard" ? "kit-active" : ""}`, onClick: () => setScreen("dashboard"), style: { cursor: "pointer" }, children: "Dashboard" }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)(
          "button",
          {
            className: "kit-sh-nav-link",
            "aria-haspopup": "true",
            "aria-expanded": appsFlyout ? "true" : "false",
            onClick: (e) => {
              e.stopPropagation();
              setWsFlyout(false);
              setAppsFlyout(!appsFlyout);
            },
            children: [
              "Products",
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "kit-chev", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("path", { d: "M7 10l5 5 5-5z" }) }) })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("a", { className: `kit-sh-nav-link ${screen === "triage" ? "kit-active" : ""}`, onClick: () => setScreen("triage"), style: { cursor: "pointer" }, children: "Triage" }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "kit-sh-nav-link", style: { cursor: "pointer" }, children: "Docs" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "kit-sh-header__right", children: [
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("button", { className: "kit-sh-icon-btn", "aria-label": "Search", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("circle", { cx: "11", cy: "11", r: "7" }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("path", { d: "m21 21-4.3-4.3" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("button", { className: "kit-sh-icon-btn", "aria-label": "Notifications", children: [
          /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" }),
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "kit-dot" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
          "button",
          {
            className: "kit-sh-icon-btn",
            "aria-label": "Apps",
            onClick: (e) => {
              e.stopPropagation();
              setWsFlyout(false);
              setAppsFlyout(!appsFlyout);
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("path", { d: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" }) })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
          "button",
          {
            className: "kit-sh-avatar",
            title: "Workspace: Kyndryl Payments",
            onClick: (e) => {
              e.stopPropagation();
              setAppsFlyout(false);
              setWsFlyout(!wsFlyout);
            },
            children: "KP"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { style: { position: "relative" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: `kit-flyout kit-flyout--apps ${appsFlyout ? "kit-open" : ""}`, onClick: (e) => e.stopPropagation(), children: [
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("h5", { children: "Kyndryl platforms" }),
        [
          { label: "CMDB Data Quality", desc: "Trust posture \xB7 triage \xB7 reconciliation", icon: /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)(import_jsx_runtime59.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("rect", { x: "3", y: "3", width: "7", height: "7" }),
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("rect", { x: "14", y: "3", width: "7", height: "7" }),
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("rect", { x: "3", y: "14", width: "7", height: "7" }),
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("rect", { x: "14", y: "14", width: "7", height: "7" })
          ] }) },
          { label: "Incident Intelligence", desc: "Correlate alerts \xB7 accelerate MTTR", icon: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("path", { d: "M3 12h4l3-9 4 18 3-9h4" }) },
          { label: "Change Risk", desc: "Predict & review proposed changes", icon: /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)(import_jsx_runtime59.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("circle", { cx: "12", cy: "12", r: "9" }),
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("path", { d: "M12 3v9l6 3" })
          ] }) },
          { label: "Observability Graph", desc: "Service dependency & blast radius", icon: /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)(import_jsx_runtime59.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("path", { d: "M12 2l9 5-9 5-9-5z" }),
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("path", { d: "M3 17l9 5 9-5" }),
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("path", { d: "M3 12l9 5 9-5" })
          ] }) }
        ].map((item) => /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("a", { href: "#", onClick: (e) => e.preventDefault(), children: [
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "kit-ico", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: item.icon }) }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("span", { children: [
            item.label,
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("small", { children: item.desc })
          ] })
        ] }, item.label)),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("h5", { style: { marginTop: 8 }, children: "Tools" }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("a", { href: "#", onClick: (e) => e.preventDefault(), children: [
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "kit-ico", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("path", { d: "M12 20h9" }),
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("path", { d: "M16.5 3.5a2.12 2.12 0 1 1 3 3L7 19l-4 1 1-4z" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { children: "Admin console" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("a", { href: "#", onClick: (e) => e.preventDefault(), children: [
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "kit-ico", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("path", { d: "M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" }),
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("path", { d: "M12 17h.01" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { children: "Help & docs" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: `kit-flyout kit-flyout--workspace ${wsFlyout ? "kit-open" : ""}`, onClick: (e) => e.stopPropagation(), children: [
        /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "kit-ws__left", children: [
          /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "kit-ws__meta", children: [
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("path", { d: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1 14-4-4 1.4-1.4L11 13.2l5.6-5.6L18 9l-7 7z" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { className: "kit-name", children: "Dana Aaron" }),
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { className: "kit-sub", children: "dana.aaron@kyndryl.com" }),
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { className: "kit-sub", children: "Admin \xB7 Payments" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { className: "kit-ws__title", children: "Workspaces" }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("a", { className: "kit-ws-item kit-active", children: [
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "kit-ico kit-ws-k", children: "KP" }),
            "Kyndryl \xB7 Payments"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("a", { className: "kit-ws-item", children: [
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "kit-ico kit-ws-s", children: "SN" }),
            "ServiceNow sandbox"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("a", { className: "kit-ws-item", children: [
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "kit-ico kit-ws-g", children: "GL" }),
            "Global ops"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { className: "kit-ws__title", style: { marginTop: 8 }, children: "Account" }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("a", { className: "kit-ws-item", children: [
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "kit-ico", children: "\\u2699" }),
            "Settings"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("a", { className: "kit-ws-item", children: [
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "kit-ico", children: "\\u238B" }),
            "Sign out"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "kit-ws__right", children: [
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("h4", { children: "Recent workspaces" }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "kit-ws__card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "kit-ico", children: "KP" }),
            /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { className: "kit-name", children: "Kyndryl \xB7 Payments" }),
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { className: "kit-sub", children: "1,284 CIs \xB7 last active 4 min ago" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "kit-ws__card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "kit-ico", style: { background: "#DBEAFE", color: "#1D4ED8" }, children: "SN" }),
            /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { className: "kit-name", children: "ServiceNow sandbox" }),
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { className: "kit-sub", children: "342 CIs \xB7 read-only \xB7 last visited yesterday" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "kit-ws__card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "kit-ico", style: { background: "#DCFCE7", color: "#047857" }, children: "GL" }),
            /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { className: "kit-name", children: "Global ops" }),
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { className: "kit-sub", children: "18,902 CIs \xB7 member of 4 teams" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "kit-shell", children: [
      /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("aside", { className: `kit-localnav ${navOpen ? "kit-open" : ""}`, children: [
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("button", { className: "kit-localnav__toggle", onClick: () => setNavOpen(!navOpen), "aria-label": "Toggle navigation", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("path", { d: "M3 6h18M3 12h18M3 18h18" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("a", { className: `kit-localnav__item ${screen === "dashboard" ? "kit-active" : ""}`, onClick: () => setScreen("dashboard"), children: [
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "kit-ico", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("path", { d: "M3 12h4l3-9 4 18 3-9h4" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "kit-label", children: "Overview" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("a", { className: `kit-localnav__item ${screen === "triage" ? "kit-active" : ""}`, onClick: () => setScreen("triage"), children: [
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "kit-ico", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("path", { d: "M10.3 3.3a2 2 0 0 1 3.4 0l7 11.7a2 2 0 0 1-1.7 3H5a2 2 0 0 1-1.7-3z" }),
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("path", { d: "M12 9v4M12 17h.01" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "kit-label", children: "Triage" }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "kit-nav-badge", children: "17" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("a", { className: "kit-localnav__item", children: [
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "kit-ico", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("circle", { cx: "12", cy: "12", r: "9" }),
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("path", { d: "M12 3v9l6 3" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "kit-label", children: "Freshness" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("a", { className: "kit-localnav__item", children: [
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "kit-ico", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("path", { d: "M12 2l9 5-9 5-9-5z" }),
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("path", { d: "M3 17l9 5 9-5" }),
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("path", { d: "M3 12l9 5 9-5" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "kit-label", children: "Knowledge graph" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("a", { className: "kit-localnav__item", children: [
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "kit-ico", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("path", { d: "M4 4h16v16H4z" }),
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("path", { d: "M4 10h16M10 4v16" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "kit-label", children: "Requests" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { className: "kit-localnav__spacer" }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("a", { className: "kit-localnav__item", children: [
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "kit-ico", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("circle", { cx: "12", cy: "12", r: "3" }),
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("path", { d: "M19.4 15a1.7 1.7 0 0 0 .4 1.9l.1.1a2 2 0 1 1-2.9 2.9l-.1-.1a1.7 1.7 0 0 0-1.9-.4 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.9.4l-.1.1a2 2 0 1 1-2.9-2.9l.1-.1a1.7 1.7 0 0 0 .4-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.4-1.9l-.1-.1a2 2 0 1 1 2.9-2.9l.1.1a1.7 1.7 0 0 0 1.9.4h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.4l.1-.1a2 2 0 1 1 2.9 2.9l-.1.1a1.7 1.7 0 0 0-.4 1.9v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "kit-label", children: "Settings" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("main", { className: "kit-sh-main", children: [
        screen === "dashboard" && /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("section", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "kit-page-head", children: [
            /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("ul", { className: "kit-crumbs", children: [
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("a", { href: "#", children: "Kyndryl \xB7 Payments" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("strong", { children: "Overview" }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "kit-page-actions", children: [
              /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("button", { className: "kit-sh-btn kit-sh-btn--tertiary", children: [
                /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("path", { d: "M21 12a9 9 0 1 1-3-6.7L21 8" }),
                  /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("path", { d: "M21 3v5h-5" })
                ] }),
                "Refresh"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("button", { className: "kit-sh-btn kit-sh-btn--ai", children: [
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("path", { d: "M12 2l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" }) }),
                "Ask the agent"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("h1", { className: "kit-page-title", children: "CMDB posture" }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { style: { color: "var(--fg-muted)", margin: "0 0 24px" }, children: "1,284 configuration items \xB7 last sync 4 minutes ago" }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "kit-dash-grid", children: [
            /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "kit-sh-card kit-sh-kpi", children: [
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { className: "kit-sh-eyebrow", children: "Trust score" }),
              /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("p", { className: "kit-num", children: [
                "78.4",
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { style: { fontSize: 18, color: "var(--fg-muted)", fontWeight: 300 }, children: " / 100" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { className: "kit-delta", children: "+2.1 vs last week" }),
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { className: "kit-sh-sub", children: "Weighted across freshness, ownership, reconciliation." })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "kit-sh-card kit-sh-kpi", children: [
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { className: "kit-sh-eyebrow", children: "Stale Prod CIs" }),
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { className: "kit-num", children: "17" }),
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { className: "kit-delta kit-down", children: "+4 vs last week" }),
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { className: "kit-sh-sub", children: "Older than 14-day threshold." })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "kit-sh-card kit-sh-kpi", children: [
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { className: "kit-sh-eyebrow", children: "Open correction requests" }),
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { className: "kit-num", children: "6" }),
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { className: "kit-delta", children: "2 awaiting approval" }),
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { className: "kit-sh-sub", children: "Avg time to approve \xB7 42m" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "kit-dash-row", children: [
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { className: "kit-sh-card", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "kit-notif-panel", children: [
              /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "kit-notif kit-notif--ai", children: [
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "kit-notif-icon", style: { color: "#29707A" }, children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("path", { d: "M12 2l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" }) }) }),
                /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { style: { flex: 1 }, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { className: "kit-notif-title", children: "Agent recommendation \xB7 92% confidence" }),
                  /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("p", { className: "kit-notif-msg", children: [
                    "11 of the 17 stale Prod CIs share owner ",
                    /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("strong", { children: "payments-team" }),
                    " and region ",
                    /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("strong", { children: "us-east-1" }),
                    ". Batching them into one correction request cuts approval overhead by 91% and MTTR by ~4 h."
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { style: { display: "flex", gap: 8, marginTop: 10 }, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("button", { className: "kit-sh-btn kit-sh-btn--primary kit-sh-btn--sm", children: "Review plan" }),
                    /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("button", { className: "kit-sh-btn kit-sh-btn--ghost kit-sh-btn--sm", children: "Show evidence" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "kit-notif kit-notif--warn", children: [
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "kit-notif-icon", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("path", { d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2V10h2v4z" }) }) }),
                /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { className: "kit-notif-title", children: "Stale threshold reached" }),
                  /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { className: "kit-notif-msg", children: "17 Prod CIs have not reported inventory for 14+ days. Investigate before Friday's audit." })
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "kit-notif kit-notif--success", children: [
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "kit-notif-icon", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("path", { d: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1 14-4-4 1.4-1.4L11 13.2l5.6-5.6L18 9l-7 7z" }) }) }),
                /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { className: "kit-notif-title", children: "Reconciliation complete" }),
                  /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { className: "kit-notif-msg", children: "48 CIs re-synced overnight. 2 required manual review." })
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "kit-sh-card kit-activity", children: [
              /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("header", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("h3", { children: "Recent activity" }),
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("a", { href: "#", style: { color: "#29707A", fontSize: 12, textDecoration: "none" }, children: "View all" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("ul", { children: [
                { init: "AM", name: "Amara Mwangi", time: "12 min", body: /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)(import_jsx_runtime59.Fragment, { children: [
                  "Approved correction request ",
                  /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("a", { href: "#", style: { color: "#29707A", textDecoration: "none" }, children: "CR-2847" }),
                  "."
                ] }) },
                { init: "AI", name: "Agent", time: "38 min", body: /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)(import_jsx_runtime59.Fragment, { children: [
                  "Flagged 4 new stale CIs in ",
                  /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("strong", { children: "payments-prod" }),
                  "."
                ] }), ai: true },
                { init: "OL", name: "Owen Lee", time: "1 h", body: /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)(import_jsx_runtime59.Fragment, { children: [
                  "Reconciled ",
                  /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("strong", { children: "checkout-gateway-stage" }),
                  "."
                ] }) },
                { init: "DA", name: "Dana Aaron", time: "3 h", body: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_jsx_runtime59.Fragment, { children: "Updated owner on 6 CIs." }) }
              ].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("li", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { className: "kit-av", style: item.ai ? { background: "#FFEDE8", color: "#FF462D" } : void 0, children: item.init }),
                /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { style: { flex: 1 }, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "kit-who", children: [
                    item.name,
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("span", { className: "kit-time", children: [
                      "\xB7 ",
                      item.time
                    ] })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { className: "kit-body", children: item.body })
                ] })
              ] }, i)) })
            ] })
          ] })
        ] }),
        screen === "triage" && /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("section", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "kit-page-head", children: [
            /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("ul", { className: "kit-crumbs", children: [
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("a", { href: "#", children: "Kyndryl \xB7 Payments" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("a", { href: "#", onClick: () => setScreen("dashboard"), children: "CMDB" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("strong", { children: "Triage" }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "kit-page-actions", children: [
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("button", { className: "kit-sh-btn kit-sh-btn--tertiary", children: "Export" }),
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("button", { className: "kit-sh-btn kit-sh-btn--primary", children: "Bulk reconcile" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("h1", { className: "kit-page-title", children: "Triage \xB7 stale & orphaned" }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("p", { style: { color: "var(--fg-muted)", margin: "0 0 20px" }, children: "17 items need attention \xB7 filtered to Prod, last 30 days" }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "kit-sh-card", style: { overflow: "hidden" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "kit-sh-toolbar", children: [
              /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "kit-search", children: [
                /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("circle", { cx: "11", cy: "11", r: "7" }),
                  /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("path", { d: "m21 21-4.3-4.3" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("input", { placeholder: "Search by CI ID, name, owner..." })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("span", { className: "kit-sh-tag", children: [
                "Env: Prod ",
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("button", { style: { background: "none", border: 0, cursor: "pointer", color: "var(--fg-2)" }, children: "\xD7" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("span", { className: "kit-sh-tag", children: [
                "Status: Stale, Orphaned ",
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("button", { style: { background: "none", border: 0, cursor: "pointer", color: "var(--fg-2)" }, children: "\xD7" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("span", { className: "kit-sh-tag", children: [
                "Last seen < 30d ",
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("button", { style: { background: "none", border: 0, cursor: "pointer", color: "var(--fg-2)" }, children: "\xD7" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("button", { className: "kit-sh-btn kit-sh-btn--ghost kit-sh-btn--sm", style: { marginLeft: "auto" }, children: "+ Add filter" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("table", { className: "kit-sh-table", children: [
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("tr", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("th", { children: "CI ID" }),
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("th", { children: "Name" }),
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("th", { children: "Owner" }),
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("th", { children: "Status" }),
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("th", { style: { textAlign: "right" }, children: "Last seen" }),
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("th", { style: { textAlign: "right" }, children: "Blast radius" }),
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("th", {})
              ] }) }),
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("tbody", { children: [
                { id: "CI-0019837", name: "payments-api-prod-01", owner: "Dana Aaron", status: "Stale 17d", badge: "warn", seen: "2025-11-03 14:02", radius: "14 dependents" },
                { id: "CI-0019841", name: "ledger-worker-prod-04", owner: "Mia Quin", status: "Orphaned", badge: "err", seen: "2025-10-18 09:14", radius: "3 dependents" },
                { id: "CI-0019902", name: "notif-queue-prod-02", owner: "\u2014", status: "In review", badge: "info", seen: "2025-11-21 03:51", radius: "7 dependents" },
                { id: "CI-0019955", name: "auth-edge-prod-03", owner: "Dana Aaron", status: "Stale 22d", badge: "warn", seen: "2025-10-29 08:40", radius: "22 dependents" },
                { id: "CI-0019967", name: "fraud-scoring-prod-01", owner: "Owen Lee", status: "Orphaned", badge: "err", seen: "2025-09-30 16:22", radius: "5 dependents" }
              ].map((row) => /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("tr", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("td", { className: "kit-mono", children: row.id }),
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("td", { children: row.name }),
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("td", { children: row.owner }),
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: `kit-sh-badge kit-sh-badge--${row.badge}`, children: row.status }) }),
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("td", { style: { textAlign: "right" }, children: row.seen }),
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("td", { style: { textAlign: "right" }, children: row.radius }),
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("button", { className: "kit-sh-btn kit-sh-btn--ghost kit-sh-btn--sm", children: "Open" }) })
              ] }, row.id)) })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("footer", { className: "kit-sh-footer", children: [
      /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "kit-sh-footer__links", children: [
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("a", { href: "#", children: "Terms of use" }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("a", { href: "#", children: "Privacy" }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("a", { href: "#", children: "Cookie preferences" }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("a", { href: "#", children: "Accessibility" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "kit-sh-footer__copy", children: "\xA9 2026 Kyndryl Holdings, Inc." })
    ] })
  ] });
};

// storybook/src/kits/ShidokaComponents.tsx
var import_react18 = require("react");
var import_jsx_runtime60 = require("react/jsx-runtime");
var ShidokaComponents = () => {
  const [ddOpen, setDdOpen] = (0, import_react18.useState)(null);
  const indeterminateRef = (0, import_react18.useRef)(null);
  (0, import_react18.useEffect)(() => {
    if (indeterminateRef.current) {
      indeterminateRef.current.indeterminate = true;
    }
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "kit-wrapper kit-comp-wrapper", children: [
    /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("header", { className: "kit-sh-header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("span", { className: "kit-sh-header__logo", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--fg-1)" }, children: "Kyndryl" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("span", { className: "kit-sh-header__title", children: "Shidoka -- Component Kit" }),
      /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("nav", { className: "kit-sh-nav", "aria-label": "Primary", children: [
        /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("span", { className: "kit-sh-nav-link kit-active", style: { cursor: "pointer" }, children: "Primitives" }),
        /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("span", { className: "kit-sh-nav-link", style: { cursor: "pointer" }, children: "AI" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "kit-sh-header__right", children: [
        /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("button", { className: "kit-sh-icon-btn", "aria-label": "Search", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("circle", { cx: "11", cy: "11", r: "7" }),
          /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("path", { d: "m21 21-4.3-4.3" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("button", { className: "kit-sh-icon-btn", "aria-label": "Notifications", style: { position: "relative" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" }),
            /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("span", { style: { position: "absolute", top: 6, right: 8, width: 8, height: 8, borderRadius: "50%", background: "#FF462D", border: "2px solid #fff" } })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("button", { className: "kit-sh-icon-btn", "aria-label": "Help", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
          /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("path", { d: "M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" }),
          /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("path", { d: "M12 17h.01" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: "kit-sh-avatar", title: "Dana Aaron", children: "DA" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "kit-comp-layout", children: [
      /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("aside", { className: "kit-comp-sidenav", children: [
        /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("h4", { children: "Foundations" }),
        /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("a", { href: "#kit-typography", children: "Typography" }),
        /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("a", { href: "#kit-buttons", children: "Buttons" }),
        /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("h4", { children: "Forms" }),
        /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("a", { href: "#kit-inputs", children: "Text input" }),
        /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("a", { href: "#kit-dropdown", children: "Dropdown" }),
        /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("a", { href: "#kit-selection", children: "Checkbox / Radio / Toggle" }),
        /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("h4", { children: "Data display" }),
        /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("a", { href: "#kit-badges", children: "Badges & Tags" }),
        /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("a", { href: "#kit-table", children: "Table" }),
        /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("h4", { children: "AI" }),
        /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("a", { href: "#kit-ai", children: "AI primitives" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("main", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("section", { id: "kit-typography", className: "kit-comp-section", children: [
          /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("header", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("h2", { children: "Typography" }),
            /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("p", { children: "TWK Everett for headings & display \xB7 Roboto for body UI \xB7 Geist Mono for code/IDs." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "kit-cols-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: "kit-demo-label", children: "Display / Heading" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { style: { fontFamily: "'TWK Everett',sans-serif", fontWeight: 300, fontSize: 44, lineHeight: 1.1, letterSpacing: "-.01em" }, children: "Display \xB7 44/52" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { style: { fontFamily: "'TWK Everett',sans-serif", fontWeight: 300, fontSize: 32, lineHeight: 1.2, marginTop: 12 }, children: "Heading 1 \xB7 32/38" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { style: { fontFamily: "'TWK Everett',sans-serif", fontWeight: 400, fontSize: 24, lineHeight: 1.25, marginTop: 12 }, children: "Heading 2 \xB7 24/30" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { style: { fontFamily: "'TWK Everett',sans-serif", fontWeight: 500, fontSize: 18, lineHeight: 1.35, marginTop: 12 }, children: "Heading 3 \xB7 18/24" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: "kit-demo-label", children: "Body / UI" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { style: { fontSize: 16, lineHeight: "24px" }, children: "Body L \xB7 16/24 -- Default paragraph text. The quick brown fox jumps over the lazy dog." }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { style: { fontSize: 14, lineHeight: "20px", marginTop: 8 }, children: "Body M \xB7 14/20 -- Dense UI. The quick brown fox jumps over the lazy dog." }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { style: { fontSize: 12, lineHeight: "16px", marginTop: 8, color: "var(--fg-2)" }, children: "Caption \xB7 12/16 -- meta & helper text." }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { style: { fontFamily: "var(--font-mono)", fontSize: 13, marginTop: 12 }, children: "Mono \xB7 CI-0019837 \xB7 v4.2.1 \xB7 tabular-nums 1 234 567.89" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("section", { id: "kit-buttons", className: "kit-comp-section", children: [
          /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("header", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("h2", { children: "Buttons" }),
            /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("p", { children: "Primary (Spruce), Secondary (Stone), Tertiary (outline), Ghost, Destructive, AI -- sm / md / lg." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "kit-comp-subsec", children: [
            /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("h3", { children: "Variants" }),
            /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "kit-demo-row", children: [
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("button", { className: "kit-kyn-btn kit-kyn-btn--primary", children: "Primary" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("button", { className: "kit-kyn-btn kit-kyn-btn--secondary", children: "Secondary" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("button", { className: "kit-kyn-btn kit-kyn-btn--tertiary", children: "Tertiary" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("button", { className: "kit-kyn-btn kit-kyn-btn--ghost", children: "Ghost" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("button", { className: "kit-kyn-btn kit-kyn-btn--destructive", children: "Destructive" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("button", { className: "kit-kyn-btn kit-kyn-btn--outline-destructive", children: "Outline destructive" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("button", { className: "kit-kyn-btn kit-kyn-btn--ai", children: [
                /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("svg", { viewBox: "0 0 24 24", width: "16", height: "16", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("path", { d: "M12 2l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" }) }),
                "Ask the agent"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "kit-comp-subsec", children: [
            /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("h3", { children: "Sizes" }),
            /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "kit-demo-row", children: [
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("button", { className: "kit-kyn-btn kit-kyn-btn--primary kit-kyn-btn--sm", children: "Small" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("button", { className: "kit-kyn-btn kit-kyn-btn--primary kit-kyn-btn--md", children: "Medium" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("button", { className: "kit-kyn-btn kit-kyn-btn--primary kit-kyn-btn--lg", children: "Large" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("button", { className: "kit-kyn-btn kit-kyn-btn--primary", disabled: true, children: "Disabled" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "kit-comp-subsec", children: [
            /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("h3", { children: "With icon" }),
            /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "kit-demo-row", children: [
              /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("button", { className: "kit-kyn-btn kit-kyn-btn--primary", children: [
                /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("path", { d: "M5 12h14M12 5l7 7-7 7" }) }),
                "Run reconciliation"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("button", { className: "kit-kyn-btn kit-kyn-btn--tertiary", children: [
                /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("path", { d: "M21 12a9 9 0 1 1-3-6.7L21 8" }),
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("path", { d: "M21 3v5h-5" })
                ] }),
                "Refresh"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("button", { className: "kit-kyn-btn kit-kyn-btn--tertiary kit-kyn-btn--icon-only kit-kyn-btn--sm", "aria-label": "More", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: [
                /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("circle", { cx: "5", cy: "12", r: "2" }),
                /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("circle", { cx: "12", cy: "12", r: "2" }),
                /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("circle", { cx: "19", cy: "12", r: "2" })
              ] }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("section", { id: "kit-inputs", className: "kit-comp-section", children: [
          /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("header", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("h2", { children: "Text input" }),
            /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("p", { children: "Sizes (sm / md / lg), icon slots, readonly, disabled, invalid." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "kit-cols-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "kit-kyn-field", children: [
              /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("label", { className: "kit-kyn-label", children: [
                "CI name ",
                /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("span", { className: "kit-req", children: "*" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("input", { className: "kit-kyn-input", placeholder: "e.g. web-prod-12", defaultValue: "web-prod-12" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: "kit-kyn-caption", children: "Must match an existing asset in the CMDB." })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "kit-kyn-field", children: [
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("label", { className: "kit-kyn-label", children: "Search" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "kit-kyn-input-wrap", children: [
                /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("span", { className: "kit-icon", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("circle", { cx: "11", cy: "11", r: "7" }),
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("path", { d: "m21 21-4.3-4.3" })
                ] }) }),
                /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("input", { className: "kit-kyn-input kit-has-icon", placeholder: "Search CIs, tickets, owners..." })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "kit-kyn-field", children: [
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("label", { className: "kit-kyn-label", children: "Small" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("input", { className: "kit-kyn-input kit-kyn-input--sm", defaultValue: "32px height" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "kit-kyn-field", children: [
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("label", { className: "kit-kyn-label", children: "Large" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("input", { className: "kit-kyn-input kit-kyn-input--lg", defaultValue: "56px height" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "kit-kyn-field", children: [
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("label", { className: "kit-kyn-label", children: "Disabled" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("input", { className: "kit-kyn-input", defaultValue: "Read-only value", disabled: true })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "kit-kyn-field", children: [
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("label", { className: "kit-kyn-label", children: "Invalid" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("input", { className: "kit-kyn-input kit-kyn-input--invalid", defaultValue: "not-a-real-ci" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "kit-kyn-error", children: [
                /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("circle", { cx: "12", cy: "12", r: "10" }) }),
                "CI not found in the registry."
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "kit-kyn-field", style: { gridColumn: "1/-1" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("label", { className: "kit-kyn-label", children: "Message" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("textarea", { className: "kit-kyn-input", placeholder: "Describe the change..." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("section", { id: "kit-dropdown", className: "kit-comp-section", children: [
          /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("header", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("h2", { children: "Dropdown" }),
            /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("p", { children: "Single-select select control with listbox, hover and selected states." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "kit-cols-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "kit-kyn-field", children: [
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("label", { className: "kit-kyn-label", children: "Environment" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "kit-kyn-dropdown", children: [
                /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)(
                  "button",
                  {
                    className: "kit-kyn-select",
                    onClick: () => setDdOpen(ddOpen === "dd1" ? null : "dd1"),
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("span", { children: "Production" }),
                      /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("span", { style: { transition: "transform 150ms", transform: ddOpen === "dd1" ? "rotate(180deg)" : "none" }, children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("path", { d: "M7 10l5 5 5-5z" }) }) })
                    ]
                  }
                ),
                ddOpen === "dd1" && /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("ul", { className: "kit-kyn-options", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("li", { className: "kit-selected", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("path", { d: "M20 6 9 17l-5-5" }) }),
                    "Production"
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("li", { children: "Staging" }),
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("li", { children: "Development" }),
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("li", { children: "Sandbox" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "kit-kyn-field", children: [
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("label", { className: "kit-kyn-label", children: "Status (multi)" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "kit-kyn-dropdown", children: [
                /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)(
                  "button",
                  {
                    className: "kit-kyn-select",
                    onClick: () => setDdOpen(ddOpen === "dd2" ? null : "dd2"),
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("span", { children: "2 selected" }),
                      /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("span", { style: { transition: "transform 150ms", transform: ddOpen === "dd2" ? "rotate(180deg)" : "none" }, children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("path", { d: "M7 10l5 5 5-5z" }) }) })
                    ]
                  }
                ),
                ddOpen === "dd2" && /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("ul", { className: "kit-kyn-options", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("li", { className: "kit-selected", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("path", { d: "M20 6 9 17l-5-5" }) }),
                    "Stale"
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("li", { className: "kit-selected", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("path", { d: "M20 6 9 17l-5-5" }) }),
                    "Orphaned"
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("li", { children: "Reconciled" }),
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("li", { children: "Under review" })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("section", { id: "kit-selection", className: "kit-comp-section", children: [
          /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("h2", { children: "Checkbox \xB7 Radio \xB7 Toggle" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "kit-cols-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: "kit-demo-label", children: "Checkbox" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "kit-demo-col", children: [
                /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("label", { className: "kit-kyn-check", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("input", { type: "checkbox", defaultChecked: true }),
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("span", { children: "Include reconciled CIs" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("label", { className: "kit-kyn-check", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("input", { type: "checkbox" }),
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("span", { children: "Exclude orphans" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("label", { className: "kit-kyn-check", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("input", { type: "checkbox", ref: indeterminateRef }),
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("span", { children: "All environments" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("label", { className: "kit-kyn-check", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("input", { type: "checkbox", disabled: true, defaultChecked: true }),
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("span", { children: "Disabled checked" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: "kit-demo-label", children: "Radio" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "kit-demo-col", children: [
                /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("label", { className: "kit-kyn-radio", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("input", { type: "radio", name: "kit-r1", defaultChecked: true }),
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("span", { children: "All teams" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("label", { className: "kit-kyn-radio", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("input", { type: "radio", name: "kit-r1" }),
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("span", { children: "My team only" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("label", { className: "kit-kyn-radio", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("input", { type: "radio", name: "kit-r1" }),
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("span", { children: "Specific owner..." })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("label", { className: "kit-kyn-radio", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("input", { type: "radio", name: "kit-r1", disabled: true }),
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("span", { children: "Disabled" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: "kit-demo-label", children: "Toggle" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "kit-demo-col", children: [
                /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("label", { className: "kit-kyn-toggle", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("input", { type: "checkbox", defaultChecked: true }),
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("span", { children: "Auto-reconcile low-risk CIs" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("label", { className: "kit-kyn-toggle", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("input", { type: "checkbox" }),
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("span", { children: "Send Slack notification" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("label", { className: "kit-kyn-toggle", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("input", { type: "checkbox", defaultChecked: true }),
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("span", { children: "Require approval > 50 CIs" })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("section", { id: "kit-badges", className: "kit-comp-section", children: [
          /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("h2", { children: "Badges & Tags" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "kit-comp-subsec", children: [
            /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("h3", { children: "Status badges" }),
            /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "kit-demo-row", children: [
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("span", { className: "kit-kyn-badge kit-kyn-badge--success", children: "Reconciled" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("span", { className: "kit-kyn-badge kit-kyn-badge--warn", children: "Stale 17d" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("span", { className: "kit-kyn-badge kit-kyn-badge--err", children: "Orphaned" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("span", { className: "kit-kyn-badge kit-kyn-badge--info", children: "In review" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("span", { className: "kit-kyn-badge kit-kyn-badge--subtle", children: "Draft" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("span", { className: "kit-kyn-badge kit-kyn-badge--ai", children: "AI suggested" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("section", { id: "kit-table", className: "kit-comp-section", children: [
          /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("header", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("h2", { children: "Table" }),
            /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("p", { children: "Dense CI list -- tabular-nums, zebra-free, hover row." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("table", { className: "kit-kyn-table", children: [
            /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("tr", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("th", { children: "CI ID" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("th", { children: "Name" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("th", { children: "Env" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("th", { children: "Owner" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("th", { children: "Status" }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("th", { className: "kit-kyn-table__num", children: "Last seen" })
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("tbody", { children: [
              { id: "CI-0019837", name: "payments-api-prod-01", env: "Prod", owner: "Dana Aaron", status: "Stale 17d", badge: "warn", seen: "2025-11-03 14:02" },
              { id: "CI-0019841", name: "ledger-worker-prod-04", env: "Prod", owner: "Mia Quin", status: "Orphaned", badge: "err", seen: "2025-10-18 09:14" },
              { id: "CI-0019855", name: "checkout-gateway-stage", env: "Stage", owner: "Owen Lee", status: "Reconciled", badge: "success", seen: "2025-11-19 11:28" },
              { id: "CI-0019902", name: "notif-queue-prod-02", env: "Prod", owner: "\u2014", status: "In review", badge: "info", seen: "2025-11-21 03:51" }
            ].map((row) => /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("tr", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("td", { style: { fontFamily: "var(--font-mono)" }, children: row.id }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("td", { children: row.name }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("td", { children: row.env }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("td", { children: row.owner }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("span", { className: `kit-kyn-badge kit-kyn-badge--${row.badge}`, children: row.status }) }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("td", { className: "kit-kyn-table__num", children: row.seen })
            ] }, row.id)) })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("section", { id: "kit-ai", className: "kit-comp-section", children: [
          /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("header", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("h2", { children: "AI primitives" }),
            /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("p", { children: "The agent's surface signature -- gradient border (Spruce to Warm Red), never raw purple." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "kit-comp-subsec", children: [
            /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("h3", { children: "Launch button" }),
            /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "kit-demo-row", children: [
              /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("button", { className: "kit-ai-launch", children: [
                /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("span", { className: "kit-ai-dot", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("path", { d: "M12 2l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" }) }) }),
                "Ask the agent"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("button", { className: "kit-kyn-btn kit-kyn-btn--ai", children: [
                /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("svg", { viewBox: "0 0 24 24", width: "16", height: "16", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("path", { d: "M12 2l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" }) }),
                "Generate correction plan"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("footer", { style: { textAlign: "center", padding: "24px 0 8px", fontSize: 12, color: "var(--fg-muted)" }, children: "Shidoka component kit \xB7 Kyndryl CMDB DS" })
      ] })
    ] })
  ] });
};

// storybook/src/kits/ShidokaCharts.tsx
var import_jsx_runtime61 = require("react/jsx-runtime");
var CAT = ["#29707A", "#FF462D", "#3E8AC2", "#8A4FBF", "#E68A00", "#5C6A73", "#5BA2AE", "#FF8766", "#1F5580", "#B82915"];
var RAG3 = ["#16A34A", "#F59E0B", "#DC2626"];
var SEQ = ["#E8F2F4", "#BEDDE2", "#91C4CC", "#5BA2AE", "#3D8590", "#29707A", "#1F5A63", "#17444B", "#0F2E33", "#07191C"];
var DIV = ["#B82915", "#FF462D", "#FF8766", "#E2E8F0", "#91C4CC", "#3D8590", "#17444B"];
var RAG5 = ["#16A34A", "#F59E0B", "#DC2626", "#2563EB", "#7F1D1D"];
var matrixRows = ["payments", "checkout", "ledger", "fraud", "auth", "infra"];
var matrixCols = ["W27", "W28", "W29", "W30", "W31", "W32", "W33", "W34", "W35", "W36", "W37", "W38"];
var palette7 = ["#F1F5F9", "#BEDDE2", "#91C4CC", "#5BA2AE", "#3D8590", "#29707A", "#17444B"];
function matrixVal(ri, ci) {
  return Math.max(0, Math.round(Math.sin(ri * 0.9 + ci * 0.4) * 3 + 2));
}
var ShidokaCharts = () => /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "kit-wrapper kit-charts-wrapper", children: [
  /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("header", { className: "kit-sh-header", children: [
    /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("span", { style: { fontSize: 16, fontWeight: 700, color: "var(--fg-1)" }, children: "Kyndryl" }),
    /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("span", { className: "kit-sh-header__title", children: "Shidoka -- Charts Kit" }),
    /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("nav", { className: "kit-sh-nav", children: [
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("span", { className: "kit-sh-nav-link", children: "Components" }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("span", { className: "kit-sh-nav-link", children: "Shell" }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("span", { className: "kit-sh-nav-link kit-active", children: "Charts" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "kit-sh-header__right", children: [
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("span", { style: { display: "inline-flex", alignItems: "center", padding: "2px 8px", background: "#F1F5F9", color: "var(--fg-2)", fontSize: 11, borderRadius: 4 }, children: "Chart.js 4 \xB7 Shidoka palette" }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "kit-sh-avatar", children: "DA" })
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "kit-charts-layout", children: [
    /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("aside", { className: "kit-charts-sidenav", children: [
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("h4", { children: "Palette" }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("a", { href: "#kit-palettes", children: "Categorical \xB7 Sequential \xB7 Divergent" }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("h4", { children: "Rectilinear" }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("a", { href: "#kit-bar", children: "Bar (grouped, stacked, 100%)" }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("a", { href: "#kit-line", children: "Line & area" }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("a", { href: "#kit-scatter", children: "Scatter & bubble" }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("h4", { children: "Radial" }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("a", { href: "#kit-doughnut", children: "Doughnut & pie" }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("a", { href: "#kit-polar", children: "Polar & radar" }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("a", { href: "#kit-meter", children: "Meter-gauge & KPI" }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("h4", { children: "Flow & relation" }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("a", { href: "#kit-sankey", children: "Sankey" }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("a", { href: "#kit-tree", children: "Tree / dendrogram" }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("h4", { children: "Matrix & map" }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("a", { href: "#kit-matrix", children: "Heatmap / matrix" }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("a", { href: "#kit-choropleth", children: "Choropleth (concept)" }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("h4", { children: "Distribution" }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("a", { href: "#kit-box", children: "Boxplot" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("section", { id: "kit-palettes", className: "kit-chart-section", children: [
        /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("header", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("h2", { children: "Palette" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { children: "Categorical slots (10, order-locked) \xB7 sequential (single hue, 10 steps) \xB7 divergent (negative - neutral - positive) \xB7 RAG." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("span", { className: "kit-meta", children: "colorPalettes.js" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("p", { className: "kit-chart-title", children: [
          "Categorical (",
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("code", { children: "categorical" }),
          ")"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "kit-chart-sub", children: "Start at slot 1; repeat in order. Don't sort by hue affinity." }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "kit-swatches", children: CAT.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { style: { background: c }, children: String(i + 1).padStart(2, "0") }, i)) }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "kit-two-col", style: { marginTop: 20 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("p", { className: "kit-chart-title", children: [
              "Sequential 01 (",
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("code", { children: "sequential01" }),
              ")"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "kit-chart-sub", children: "Spruce. For ordinal magnitude -- heatmaps, choropleth." }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "kit-swatches", children: SEQ.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { style: { background: c, color: i < 3 ? "var(--fg-1)" : "#fff" }, children: (i + 1) * 10 }, i)) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("p", { className: "kit-chart-title", children: [
              "Divergent 01 (",
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("code", { children: "divergent01" }),
              ")"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "kit-chart-sub", children: "Warm Red - neutral - Spruce. For signed deltas." }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "kit-swatches kit-swatches--7", children: DIV.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { style: { background: c, color: i === 3 ? "var(--fg-1)" : "#fff" }, children: i < 3 ? -(3 - i) : i === 3 ? "0" : `+${i - 3}` }, i)) })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "kit-two-col", style: { marginTop: 20 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "kit-chart-title", children: "RAG-3 / RAG-8" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "kit-chart-sub", children: "Status-coded series. Pair with icon + label." }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "kit-swatches kit-swatches--5", children: ["OK", "Warn", "Err", "Info", "Crit"].map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { style: { background: RAG5[i], color: i === 1 ? "var(--fg-1)" : "#fff" }, children: label }, label)) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { style: { fontSize: 13, color: "var(--fg-2)" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "kit-chart-title", children: "When to pick which" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("p", { style: { margin: 0 }, children: [
              "\u2022 ",
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("strong", { children: "Categorical" }),
              " when series are mutually exclusive & unordered (products, teams)."
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("p", { style: { margin: 0 }, children: [
              "\u2022 ",
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("strong", { children: "Sequential" }),
              " for a single dimension of magnitude (counts, density)."
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("p", { style: { margin: 0 }, children: [
              "\u2022 ",
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("strong", { children: "Divergent" }),
              " when values cross a meaningful mid (variance vs target, sentiment)."
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("p", { style: { margin: 0 }, children: [
              "\u2022 ",
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("strong", { children: "RAG" }),
              " only to encode operational status -- never for neutral categories."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("section", { id: "kit-bar", className: "kit-chart-section", children: [
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("h2", { children: "Bar charts" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { children: "Grouped \xB7 stacked \xB7 100% stacked \xB7 horizontal." })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "kit-two-col", children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "kit-chart-title", children: "CIs by environment & status" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "kit-chart-sub", children: "Grouped vertical bars \xB7 categorical slots 1-3." }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "kit-css-bar-chart", style: { marginBottom: 28 }, children: ["Prod", "Stage", "Dev", "Sandbox"].map((env, gi) => {
              const data = [[612, 142, 204, 118], [184, 62, 38, 22], [48, 18, 8, 4]];
              return /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "kit-css-bar-group", children: [
                data.map((series, si) => /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "kit-css-bar", style: { height: `${series[gi] / 612 * 100}%`, background: CAT[si] }, children: gi === 0 && si === 0 && /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("span", { className: "kit-css-bar-val", children: series[gi] }) }, si)),
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("span", { className: "kit-css-bar-label", children: env })
              ] }, env);
            }) }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "kit-legend", children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("span", { className: "kit-sw", children: [
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("i", { style: { background: CAT[0] } }),
                "Reconciled"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("span", { className: "kit-sw", children: [
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("i", { style: { background: CAT[1] } }),
                "Stale"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("span", { className: "kit-sw", children: [
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("i", { style: { background: CAT[2] } }),
                "Orphaned"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "kit-chart-title", children: "Stale vs reconciled vs orphaned" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "kit-chart-sub", children: "Stacked \xB7 RAG-3 palette." }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "kit-css-bar-chart", style: { marginBottom: 28 }, children: ["Oct 27", "Nov 3", "Nov 10", "Nov 17", "Nov 24"].map((w, i) => {
              const rec = [620, 640, 665, 684, 728];
              const stale = [210, 205, 198, 220, 214];
              const orph = [410, 388, 362, 350, 342];
              const total = rec[i] + stale[i] + orph[i];
              return /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { style: { flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%", position: "relative" }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { style: { background: RAG3[2], height: `${orph[i] / total * 100}%`, borderRadius: "2px 2px 0 0" } }),
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { style: { background: RAG3[1], height: `${stale[i] / total * 100}%` } }),
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { style: { background: RAG3[0], height: `${rec[i] / total * 100}%` } }),
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("span", { className: "kit-css-bar-label", children: w })
              ] }, w);
            }) }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "kit-legend", children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("span", { className: "kit-sw", children: [
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("i", { style: { background: RAG3[0] } }),
                "Reconciled"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("span", { className: "kit-sw", children: [
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("i", { style: { background: RAG3[1] } }),
                "Stale"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("span", { className: "kit-sw", children: [
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("i", { style: { background: RAG3[2] } }),
                "Orphaned"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "kit-chart-title", children: "Top 8 owners by open findings" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "kit-chart-sub", children: "Horizontal \xB7 sorted desc." }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { style: { display: "flex", flexDirection: "column", gap: 4, marginTop: 8 }, children: [
              { name: "payments-team", v: 48 },
              { name: "data-platform", v: 41 },
              { name: "fraud-eng", v: 33 },
              { name: "checkout", v: 28 },
              { name: "auth", v: 24 },
              { name: "infra-ops", v: 18 },
              { name: "web", v: 14 },
              { name: "mobile", v: 9 }
            ].map((row) => /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: 8, fontSize: 11 }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("span", { style: { width: 90, textAlign: "right", color: "var(--fg-muted)", flexShrink: 0 }, children: row.name }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { style: { height: 14, background: CAT[0], borderRadius: 2, width: `${row.v / 48 * 100}%`, maxWidth: "100%", flex: 1 } }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("span", { style: { fontSize: 10, fontWeight: 600, color: "var(--fg-2)", width: 24 }, children: row.v })
            ] }, row.name)) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "kit-chart-title", children: "Data-source contribution" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "kit-chart-sub", children: "100%-stacked \xB7 sequential spruce." }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "kit-css-bar-chart", style: { marginBottom: 28 }, children: ["Week 1", "Week 2", "Week 3", "Week 4"].map((w, i) => {
              const d = [[52, 48, 50, 54], [28, 32, 30, 28], [20, 20, 20, 18]];
              const colors = [SEQ[5], SEQ[3], SEQ[1]];
              return /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { style: { flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%", position: "relative" }, children: [
                d.map((series, si) => /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { style: { background: colors[si], height: `${series[i]}%` } }, si)),
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("span", { className: "kit-css-bar-label", children: w })
              ] }, w);
            }) }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "kit-legend", children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("span", { className: "kit-sw", children: [
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("i", { style: { background: SEQ[5] } }),
                "ServiceNow"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("span", { className: "kit-sw", children: [
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("i", { style: { background: SEQ[3] } }),
                "Cloud inventory"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("span", { className: "kit-sw", children: [
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("i", { style: { background: SEQ[1] } }),
                "Manual"
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("section", { id: "kit-line", className: "kit-chart-section", children: [
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("h2", { children: "Line & area" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { children: "Time series \xB7 smoothed \xB7 filled area \xB7 stacked area." })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "kit-two-col", children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "kit-chart-title", children: "Trust score -- last 90 days" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "kit-chart-sub", children: "Line with target marker. Fill below." }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("svg", { viewBox: "0 0 500 200", style: { width: "100%", height: 200 }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("line", { x1: "40", y1: "170", x2: "480", y2: "170", stroke: "#E2E8F0" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("line", { x1: "40", y1: "10", x2: "40", y2: "170", stroke: "#E2E8F0" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("line", { x1: "40", y1: "42", x2: "480", y2: "42", stroke: "#94A3B8", strokeDasharray: "4 4" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { x: "485", y: "46", fontSize: "9", fill: "#94A3B8", children: "85" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("polygon", { points: "40,130 80,122 120,130 160,114 200,106 240,98 280,98 320,90 360,82 400,90 440,82 480,78 480,170 40,170", fill: "rgba(41,112,122,.12)" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("polyline", { points: "40,130 80,122 120,130 160,114 200,106 240,98 280,98 320,90 360,82 400,90 440,82 480,78", fill: "none", stroke: CAT[0], strokeWidth: "2" }),
              [40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480].map((x, i) => {
                const y = [130, 122, 130, 114, 106, 98, 98, 90, 82, 90, 82, 78];
                return /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("circle", { cx: x, cy: y[i], r: "3", fill: CAT[0] }, i);
              }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { x: "40", y: "185", fontSize: "9", fill: "#64748B", children: "S1" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { x: "480", y: "185", fontSize: "9", fill: "#64748B", textAnchor: "end", children: "S12" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "kit-legend", children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("span", { className: "kit-sw", children: [
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("i", { style: { background: CAT[0] } }),
                "Trust score"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("span", { className: "kit-sw", children: [
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("i", { style: { background: "#94A3B8" } }),
                "Target 85"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "kit-chart-title", children: "Reconciliation throughput" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "kit-chart-sub", children: "Stacked area across 3 sources." }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("svg", { viewBox: "0 0 500 200", style: { width: "100%", height: 200 }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("line", { x1: "40", y1: "170", x2: "480", y2: "170", stroke: "#E2E8F0" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("line", { x1: "40", y1: "10", x2: "40", y2: "170", stroke: "#E2E8F0" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("polygon", { points: "40,110 120,90 200,95 280,80 360,60 440,120 480,130 480,170 40,170", fill: "rgba(41,112,122,.35)" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("polygon", { points: "40,130 120,115 200,120 280,105 360,85 440,140 480,145 480,170 40,170", fill: "rgba(62,138,194,.32)" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("polygon", { points: "40,150 120,148 200,146 280,140 360,130 440,155 480,158 480,170 40,170", fill: "rgba(91,162,174,.32)" }),
              ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { x: 40 + i * 73, y: "185", fontSize: "9", fill: "#64748B", children: d }, d))
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "kit-legend", children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("span", { className: "kit-sw", children: [
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("i", { style: { background: CAT[0] } }),
                "ServiceNow"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("span", { className: "kit-sw", children: [
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("i", { style: { background: CAT[2] } }),
                "Cloud inventory"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("span", { className: "kit-sw", children: [
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("i", { style: { background: CAT[6] } }),
                "Manual"
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("section", { id: "kit-scatter", className: "kit-chart-section", children: [
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("h2", { children: "Scatter & bubble" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { children: "Two-axis primitive for risk / confidence plots." })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "kit-two-col", children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "kit-chart-title", children: "Confidence x blast radius" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "kit-chart-sub", children: "Each dot = one agent recommendation. Size = # affected CIs." }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("svg", { viewBox: "0 0 400 280", style: { width: "100%", height: 280 }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("line", { x1: "50", y1: "250", x2: "380", y2: "250", stroke: "#E2E8F0" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("line", { x1: "50", y1: "20", x2: "50", y2: "250", stroke: "#E2E8F0" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { x: "215", y: "270", fontSize: "9", fill: "#64748B", textAnchor: "middle", children: "Confidence %" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { x: "10", y: "135", fontSize: "9", fill: "#64748B", transform: "rotate(-90,10,135)", children: "Blast radius" }),
              [{ x: 300, y: 130, r: 14 }, { x: 280, y: 70, r: 9 }, { x: 320, y: 160, r: 18 }, { x: 260, y: 110, r: 6 }, { x: 290, y: 150, r: 12 }].map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("circle", { cx: d.x, cy: d.y, r: d.r, fill: "rgba(41,112,122,.55)", stroke: CAT[0] }, `h${i}`)),
              [{ x: 140, y: 50, r: 15 }, { x: 120, y: 35, r: 10 }, { x: 160, y: 65, r: 8 }, { x: 100, y: 25, r: 18 }, { x: 180, y: 55, r: 12 }].map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("circle", { cx: d.x, cy: d.y, r: d.r, fill: "rgba(255,70,45,.5)", stroke: CAT[1] }, `l${i}`))
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "kit-legend", children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("span", { className: "kit-sw", children: [
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("i", { style: { background: "rgba(41,112,122,.55)" } }),
                "High confidence"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("span", { className: "kit-sw", children: [
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("i", { style: { background: "rgba(255,70,45,.5)" } }),
                "Low confidence"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "kit-chart-title", children: "Freshness x CI count" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "kit-chart-sub", children: "Scatter, two series (Prod / Non-Prod)." }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("svg", { viewBox: "0 0 400 280", style: { width: "100%", height: 280 }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("line", { x1: "50", y1: "250", x2: "380", y2: "250", stroke: "#E2E8F0" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("line", { x1: "50", y1: "20", x2: "50", y2: "250", stroke: "#E2E8F0" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { x: "215", y: "270", fontSize: "9", fill: "#64748B", textAnchor: "middle", children: "Days since last seen" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { x: "10", y: "135", fontSize: "9", fill: "#64748B", transform: "rotate(-90,10,135)", children: "CIs" }),
              Array.from({ length: 20 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("circle", { cx: 60 + Math.sin(i * 1.3) * 100 + i * 15, cy: 30 + Math.cos(i * 0.7) * 80 + i * 8, r: "4", fill: CAT[1], opacity: "0.6" }, `p${i}`)),
              Array.from({ length: 20 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("circle", { cx: 70 + Math.cos(i * 0.9) * 120 + i * 14, cy: 50 + Math.sin(i * 1.1) * 60 + i * 7, r: "4", fill: CAT[0], opacity: "0.6" }, `n${i}`))
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "kit-legend", children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("span", { className: "kit-sw", children: [
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("i", { style: { background: CAT[1] } }),
                "Prod"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("span", { className: "kit-sw", children: [
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("i", { style: { background: CAT[0] } }),
                "Non-Prod"
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("section", { id: "kit-doughnut", className: "kit-chart-section", children: [
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("h2", { children: "Doughnut & pie" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { children: "Part-to-whole. Doughnut allows a centered label." })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "kit-three-col", children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "kit-chart-title", children: "CI status distribution" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "kit-chart-sub", children: "Doughnut \xB7 RAG-3." }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "kit-css-doughnut kit-css-doughnut--md", style: { background: `conic-gradient(${RAG3[0]} 0 57%, ${RAG3[1]} 57% 73%, ${RAG3[2]} 73% 100%)` } }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "kit-legend", style: { justifyContent: "center" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("span", { className: "kit-sw", children: [
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("i", { style: { background: RAG3[0] } }),
                "Reconciled 728"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("span", { className: "kit-sw", children: [
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("i", { style: { background: RAG3[1] } }),
                "Stale 214"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("span", { className: "kit-sw", children: [
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("i", { style: { background: RAG3[2] } }),
                "Orphaned 342"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "kit-chart-title", children: "Ownership coverage" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "kit-chart-sub", children: "Pie \xB7 categorical." }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { style: { width: 160, height: 160, borderRadius: "50%", margin: "0 auto", background: `conic-gradient(${CAT[0]} 0 32%, ${CAT[1]} 32% 53%, ${CAT[2]} 53% 69%, ${CAT[3]} 69% 83%, ${CAT[4]} 83% 94%, ${CAT[5]} 94% 100%)` } }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "kit-legend", style: { justifyContent: "center", marginTop: 10 }, children: ["Payments", "Data platform", "Fraud", "Checkout", "Auth", "Other"].map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("span", { className: "kit-sw", children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("i", { style: { background: CAT[i] } }),
              l
            ] }, l)) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "kit-chart-title", children: "Change requests by risk" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "kit-chart-sub", children: "Doughnut \xB7 divergent (neg - pos)." }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "kit-css-doughnut kit-css-doughnut--sm", style: { background: `conic-gradient(${DIV[0]} 0 12%, ${DIV[1]} 12% 36%, ${DIV[2]} 36% 76%, ${DIV[4]} 76% 91%, ${DIV[5]} 91% 100%)` } }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "kit-legend", style: { justifyContent: "center" }, children: ["High risk", "Med risk", "Low risk", "Benign", "Improvement"].map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("span", { className: "kit-sw", children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("i", { style: { background: [DIV[0], DIV[1], DIV[2], DIV[4], DIV[5]][i] } }),
              l
            ] }, l)) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("section", { id: "kit-polar", className: "kit-chart-section", children: [
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("h2", { children: "Polar & radar" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { children: "Radar for multi-dim assessments (SLO coverage, trust dimensions)." })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "kit-two-col", children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "kit-chart-title", children: "Trust posture by dimension" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "kit-chart-sub", children: "Radar \xB7 this month vs last." }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("svg", { viewBox: "0 0 300 300", style: { width: "100%", height: 260 }, children: [
              [80, 60, 40, 20].map((r) => /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("polygon", { points: [0, 1, 2, 3, 4, 5].map((i) => {
                const angle = Math.PI * 2 / 6 * i - Math.PI / 2;
                return `${150 + Math.cos(angle) * r * 1.2},${150 + Math.sin(angle) * r * 1.2}`;
              }).join(" "), fill: "none", stroke: "#F1F5F9" }, r)),
              ["Freshness", "Ownership", "Reconciliation", "Automation", "Coverage", "Accuracy"].map((l, i) => {
                const angle = Math.PI * 2 / 6 * i - Math.PI / 2;
                const x = 150 + Math.cos(angle) * 110;
                const y = 150 + Math.sin(angle) * 110;
                return /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { x, y, fontSize: "9", fill: "#334155", textAnchor: "middle", dominantBaseline: "middle", children: l }, l);
              }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("polygon", { points: [78, 82, 68, 41, 74, 86].map((v, i) => {
                const angle = Math.PI * 2 / 6 * i - Math.PI / 2;
                return `${150 + Math.cos(angle) * v},${150 + Math.sin(angle) * v}`;
              }).join(" "), fill: "rgba(41,112,122,.22)", stroke: CAT[0], strokeWidth: "1.5" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("polygon", { points: [72, 80, 62, 35, 72, 84].map((v, i) => {
                const angle = Math.PI * 2 / 6 * i - Math.PI / 2;
                return `${150 + Math.cos(angle) * v},${150 + Math.sin(angle) * v}`;
              }).join(" "), fill: "rgba(255,70,45,.18)", stroke: CAT[1], strokeWidth: "1.5" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "kit-legend", children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("span", { className: "kit-sw", children: [
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("i", { style: { background: CAT[0] } }),
                "This month"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("span", { className: "kit-sw", children: [
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("i", { style: { background: CAT[1] } }),
                "Last month"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "kit-chart-title", children: "Volume by region" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "kit-chart-sub", children: "Polar area \xB7 categorical." }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("svg", { viewBox: "0 0 300 300", style: { width: "100%", height: 260 }, children: [612, 284, 342, 218, 184, 122].map((v, i) => {
              const maxR = 120;
              const r = v / 612 * maxR;
              const startAngle = Math.PI * 2 / 6 * i - Math.PI / 2;
              const endAngle = Math.PI * 2 / 6 * (i + 1) - Math.PI / 2;
              const x1 = 150 + Math.cos(startAngle) * r;
              const y1 = 150 + Math.sin(startAngle) * r;
              const x2 = 150 + Math.cos(endAngle) * r;
              const y2 = 150 + Math.sin(endAngle) * r;
              return /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("path", { d: `M150,150 L${x1},${y1} A${r},${r} 0 0,1 ${x2},${y2} Z`, fill: CAT[i], opacity: "0.7", stroke: "#fff", strokeWidth: "1" }, i);
            }) }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "kit-legend", children: ["us-east-1", "us-west-2", "eu-west-1", "eu-central-1", "ap-south-1", "ap-ne-1"].map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("span", { className: "kit-sw", children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("i", { style: { background: CAT[i] } }),
              l
            ] }, l)) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("section", { id: "kit-meter", className: "kit-chart-section", children: [
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("h2", { children: "Meter-gauge & KPI" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { children: "Single-value dials paired with target markers and status pills." })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "kit-meter-grid", children: [
          { lab: "Trust score", val: "78.4", unit: " / 100", pct: 78, color: CAT[0], sub: /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(import_jsx_runtime61.Fragment, { children: [
            "Target 85 \xB7 ",
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("span", { className: "kit-ch-delta kit-up", children: "+2.1" })
          ] }) },
          { lab: "Freshness", val: "92", unit: "%", pct: 92, color: CAT[0], sub: /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(import_jsx_runtime61.Fragment, { children: [
            "Target 95 \xB7 ",
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("span", { className: "kit-pill kit-pill--warn", children: "Below" })
          ] }) },
          { lab: "Reconciliation rate", val: "68", unit: "%", pct: 68, color: "#F59E0B", sub: /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(import_jsx_runtime61.Fragment, { children: [
            "Target 80 \xB7 ",
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("span", { className: "kit-pill kit-pill--err", children: "Gap" })
          ] }) },
          { lab: "Automation coverage", val: "41", unit: "%", pct: 41, color: "#DC2626", sub: /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(import_jsx_runtime61.Fragment, { children: [
            "Target 60 \xB7 ",
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("span", { className: "kit-pill kit-pill--err", children: "Gap" })
          ] }) }
        ].map((m) => /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "kit-meter", children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "kit-lab", children: m.lab }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "kit-trust-gauge", children: /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("svg", { viewBox: "0 0 200 120", style: { width: "100%", height: "100%" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("path", { d: "M10,110 A90,90 0 0,1 190,110", fill: "none", stroke: "#E2E8F0", strokeWidth: "16", strokeLinecap: "round" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("path", { d: "M10,110 A90,90 0 0,1 190,110", fill: "none", stroke: m.color, strokeWidth: "16", strokeLinecap: "round", strokeDasharray: `${m.pct / 100 * 283} 283` })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("p", { className: "kit-trust-label", children: [
            m.val,
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("small", { children: m.unit })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "kit-trust-sub", children: m.sub })
        ] }, m.lab)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("section", { id: "kit-sankey", className: "kit-chart-section", children: [
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("h2", { children: "Sankey" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { children: "Flow from data source - CI state - disposition. Widths = CI counts." })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("svg", { className: "kit-sankey-svg", viewBox: "0 0 900 320", "aria-label": "Sankey", children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("defs", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("linearGradient", { id: "kitlk1", x1: "0", x2: "1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("stop", { offset: "0", stopColor: "#29707A" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("stop", { offset: "1", stopColor: "#FF462D" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("linearGradient", { id: "kitlk2", x1: "0", x2: "1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("stop", { offset: "0", stopColor: "#3E8AC2" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("stop", { offset: "1", stopColor: "#29707A" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("linearGradient", { id: "kitlk3", x1: "0", x2: "1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("stop", { offset: "0", stopColor: "#5BA2AE" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("stop", { offset: "1", stopColor: "#B82915" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("rect", { x: "60", y: "30", width: "20", height: "70", fill: "#29707A", rx: "2" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { className: "kit-sankey-label", x: "20", y: "50", children: "ServiceNow" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { className: "kit-sankey-sub", x: "20", y: "66", children: "612 CIs" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("rect", { x: "60", y: "120", width: "20", height: "100", fill: "#3E8AC2", rx: "2" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { className: "kit-sankey-label", x: "20", y: "140", children: "Cloud inventory" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { className: "kit-sankey-sub", x: "20", y: "156", children: "442 CIs" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("rect", { x: "60", y: "240", width: "20", height: "50", fill: "#5BA2AE", rx: "2" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { className: "kit-sankey-label", x: "20", y: "260", children: "Manual" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { className: "kit-sankey-sub", x: "20", y: "276", children: "230 CIs" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("path", { className: "kit-sankey-link", d: "M80 30 C 260 30 260 30 440 20 L 440 90 C 260 100 260 100 80 100 Z", fill: "url(#kitlk1)" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("path", { className: "kit-sankey-link", d: "M80 120 C 260 120 260 140 440 130 L 440 200 C 260 210 260 210 80 220 Z", fill: "url(#kitlk2)" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("path", { className: "kit-sankey-link", d: "M80 240 C 260 240 260 260 440 230 L 440 290 C 260 300 260 300 80 290 Z", fill: "url(#kitlk3)" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("rect", { x: "440", y: "20", width: "20", height: "70", fill: "#16A34A", rx: "2" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { className: "kit-sankey-label", x: "470", y: "40", children: "Reconciled" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { className: "kit-sankey-sub", x: "470", y: "56", children: "728 CIs" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("rect", { x: "440", y: "130", width: "20", height: "70", fill: "#F59E0B", rx: "2" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { className: "kit-sankey-label", x: "470", y: "150", children: "Stale" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { className: "kit-sankey-sub", x: "470", y: "166", children: "214 CIs" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("rect", { x: "440", y: "230", width: "20", height: "60", fill: "#DC2626", rx: "2" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { className: "kit-sankey-label", x: "470", y: "250", children: "Orphaned" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { className: "kit-sankey-sub", x: "470", y: "266", children: "342 CIs" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("path", { className: "kit-sankey-link", d: "M460 20 C 640 20 640 30 820 25 L 820 90 C 640 95 640 90 460 90 Z", fill: "#16A34A" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("path", { className: "kit-sankey-link", d: "M460 130 C 640 130 640 115 820 110 L 820 150 C 640 160 640 200 460 200 Z", fill: "#F59E0B" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("path", { className: "kit-sankey-link", d: "M460 230 C 640 230 640 195 820 175 L 820 260 C 640 285 640 290 460 290 Z", fill: "#DC2626" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("rect", { x: "820", y: "25", width: "20", height: "65", fill: "#29707A", rx: "2" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { className: "kit-sankey-label", x: "848", y: "45", children: "Automated" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("rect", { x: "820", y: "110", width: "20", height: "40", fill: "#5BA2AE", rx: "2" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { className: "kit-sankey-label", x: "848", y: "130", children: "Agent queue" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("rect", { x: "820", y: "175", width: "20", height: "85", fill: "#B82915", rx: "2" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { className: "kit-sankey-label", x: "848", y: "200", children: "Manual review" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("p", { className: "kit-hint", children: [
          "SVG reference -- the real component uses chartjs-chart-sankey with ",
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("code", { children: "sankey" }),
          " chart type."
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("section", { id: "kit-tree", className: "kit-chart-section", children: [
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("h2", { children: "Tree / dendrogram" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { children: "Hierarchical relationships -- service - BU - app - CI." })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("svg", { className: "kit-tree-svg", viewBox: "0 0 900 320", "aria-label": "Service tree", children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("g", { className: "kit-tree-link", children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("path", { d: "M80 160 C 200 160 200 60  320 60" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("path", { d: "M80 160 C 200 160 200 160 320 160" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("path", { d: "M80 160 C 200 160 200 260 320 260" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("path", { d: "M320 60  C 440 60  440 30  560 30" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("path", { d: "M320 60  C 440 60  440 90  560 90" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("path", { d: "M320 160 C 440 160 440 130 560 130" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("path", { d: "M320 160 C 440 160 440 190 560 190" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("path", { d: "M320 260 C 440 260 440 240 560 240" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("path", { d: "M320 260 C 440 260 440 290 560 290" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("path", { d: "M560 30  C 680 30  680 20  800 20" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("path", { d: "M560 30  C 680 30  680 50  800 50" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("path", { d: "M560 130 C 680 130 680 130 800 130" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("path", { d: "M560 190 C 680 190 680 190 800 190" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("path", { d: "M560 240 C 680 240 680 240 800 240" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("path", { d: "M560 290 C 680 290 680 290 800 290" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("g", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("g", { className: "kit-tree-node", children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("circle", { cx: "80", cy: "160", r: "6" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { x: "60", y: "145", textAnchor: "end", children: "Payments" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("g", { className: "kit-tree-node", children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("circle", { cx: "320", cy: "60", r: "5" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { x: "310", y: "52", textAnchor: "end", children: "Checkout" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("g", { className: "kit-tree-node", children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("circle", { cx: "320", cy: "160", r: "5" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { x: "310", y: "152", textAnchor: "end", children: "Ledger" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("g", { className: "kit-tree-node", children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("circle", { cx: "320", cy: "260", r: "5" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { x: "310", y: "252", textAnchor: "end", children: "Fraud" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("g", { className: "kit-tree-node", children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("circle", { cx: "560", cy: "30", r: "4" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { x: "572", y: "34", children: "checkout-api" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("g", { className: "kit-tree-node kit-warn", children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("circle", { cx: "560", cy: "90", r: "4" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { x: "572", y: "94", children: "checkout-worker" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("g", { className: "kit-tree-node", children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("circle", { cx: "560", cy: "130", r: "4" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { x: "572", y: "134", children: "ledger-db" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("g", { className: "kit-tree-node kit-err", children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("circle", { cx: "560", cy: "190", r: "4" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { x: "572", y: "194", children: "ledger-worker" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("g", { className: "kit-tree-node", children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("circle", { cx: "560", cy: "240", r: "4" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { x: "572", y: "244", children: "fraud-score" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("g", { className: "kit-tree-node", children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("circle", { cx: "560", cy: "290", r: "4" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { x: "572", y: "294", children: "fraud-rules" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("g", { className: "kit-tree-node kit-leaf", children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("circle", { cx: "800", cy: "20", r: "3" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { x: "810", y: "23", children: "CI-0019837" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("g", { className: "kit-tree-node kit-leaf", children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("circle", { cx: "800", cy: "50", r: "3" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { x: "810", y: "53", children: "CI-0019841" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("g", { className: "kit-tree-node kit-leaf", children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("circle", { cx: "800", cy: "130", r: "3" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { x: "810", y: "133", children: "CI-0019855" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("g", { className: "kit-tree-node kit-leaf", children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("circle", { cx: "800", cy: "190", r: "3" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { x: "810", y: "193", children: "CI-0019902" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("g", { className: "kit-tree-node kit-leaf", children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("circle", { cx: "800", cy: "240", r: "3" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { x: "810", y: "243", children: "CI-0019911" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("g", { className: "kit-tree-node kit-leaf", children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("circle", { cx: "800", cy: "290", r: "3" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { x: "810", y: "293", children: "CI-0019955" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("p", { className: "kit-hint", children: [
          "SVG reference. The real component uses ",
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("code", { children: "tree" }),
          " / ",
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("code", { children: "dendrogram" }),
          " / ",
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("code", { children: "forceDirectedGraph" }),
          " chart types."
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("section", { id: "kit-matrix", className: "kit-chart-section", children: [
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("h2", { children: "Heatmap / matrix" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { children: "Stale CIs by service & week. Sequential01 scale." })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { style: { display: "grid", gridTemplateColumns: "120px 1fr", gap: 4 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", {}),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "kit-matrix", style: { gridTemplateColumns: `repeat(${matrixCols.length},1fr)` }, children: matrixCols.map((c) => /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "kit-axisX", children: c }, c)) }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { style: { display: "grid", gridTemplateRows: `repeat(${matrixRows.length},32px)`, gap: 2 }, children: matrixRows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "kit-axisY", style: { height: 32, display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: 6, fontSize: 11, color: "var(--fg-muted)" }, children: r }, r)) }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "kit-matrix", style: { gridTemplateColumns: `repeat(${matrixCols.length},1fr)`, gridTemplateRows: `repeat(${matrixRows.length},32px)` }, children: matrixRows.map(
            (_, ri) => matrixCols.map((_2, ci) => {
              const v = matrixVal(ri, ci);
              const idx = Math.min(palette7.length - 1, v);
              return /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "kit-cell", style: { background: palette7[idx], color: idx > 3 ? "#fff" : "#334155" }, title: `${matrixRows[ri]} \xB7 ${matrixCols[ci]} \xB7 ${v} stale CIs`, children: v }, `${ri}-${ci}`);
            })
          ) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "kit-legend", style: { marginTop: 16 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("span", { children: "Low" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("span", { style: { display: "inline-flex", gap: 2 }, children: [SEQ[1], SEQ[3], SEQ[5], SEQ[7], SEQ[9]].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("i", { style: { width: 16, height: 10, background: c, display: "inline-block" } }, i)) }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("span", { children: "High" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("section", { id: "kit-choropleth", className: "kit-chart-section", children: [
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("h2", { children: "Choropleth (concept)" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { children: "Region-coded density. Sequential01 with bubble markers for outliers." })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "kit-choropleth", children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "kit-marker", style: { left: "22%", top: "38%" } }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "kit-marker", style: { left: "68%", top: "52%" } }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "kit-marker", style: { left: "80%", top: "64%" } }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "kit-caption", children: [
            "Placeholder visual -- real component renders as ",
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("code", { children: "choropleth" }),
            " or ",
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("code", { children: "bubbleMap" }),
            " with GeoJSON."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("section", { id: "kit-box", className: "kit-chart-section", children: [
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("h2", { children: "Boxplot" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { children: "Reconciliation latency (min) \xB7 by source." })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "kit-two-col", children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "kit-chart-title", children: "Latency distribution" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("svg", { viewBox: "0 0 600 300", style: { width: "100%", height: 300, display: "block" }, "aria-label": "Boxplot", children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("line", { x1: "60", x2: "60", y1: "30", y2: "260", stroke: "#CBD5E1" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("line", { x1: "60", x2: "580", y1: "260", y2: "260", stroke: "#CBD5E1" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("g", { fontSize: "10", fill: "#64748B", children: [
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { x: "56", y: "264", textAnchor: "end", children: "0" }),
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { x: "56", y: "204", textAnchor: "end", children: "30" }),
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { x: "56", y: "144", textAnchor: "end", children: "60" }),
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { x: "56", y: "84", textAnchor: "end", children: "90" }),
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { x: "56", y: "34", textAnchor: "end", children: "120" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("line", { x1: "140", x2: "140", y1: "90", y2: "240", stroke: "#29707A", strokeWidth: "1.5" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("rect", { x: "110", y: "130", width: "60", height: "70", fill: "#BEDDE2", stroke: "#29707A" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("line", { x1: "110", x2: "170", y1: "170", y2: "170", stroke: "#29707A", strokeWidth: "2" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { x: "140", y: "278", textAnchor: "middle", fill: "#64748B", fontSize: "11", children: "ServiceNow" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("line", { x1: "300", x2: "300", y1: "60", y2: "230", stroke: "#FF462D", strokeWidth: "1.5" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("rect", { x: "270", y: "110", width: "60", height: "100", fill: "#FFE8E0", stroke: "#FF462D" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("line", { x1: "270", x2: "330", y1: "150", y2: "150", stroke: "#FF462D", strokeWidth: "2" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { x: "300", y: "278", textAnchor: "middle", fill: "#64748B", fontSize: "11", children: "Cloud inv." }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("line", { x1: "460", x2: "460", y1: "40", y2: "250", stroke: "#3E8AC2", strokeWidth: "1.5" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("rect", { x: "430", y: "90", width: "60", height: "120", fill: "#DBEAFE", stroke: "#3E8AC2" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("line", { x1: "430", x2: "490", y1: "130", y2: "130", stroke: "#3E8AC2", strokeWidth: "2" }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("text", { x: "460", y: "278", textAnchor: "middle", fill: "#64748B", fontSize: "11", children: "Manual" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "kit-chart-title", children: "When to reach for this" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("p", { style: { color: "var(--fg-2)", fontSize: 13, margin: "0 0 12px" }, children: [
              "Distributions, outliers, SLO tails. Pair with p50/p95 annotation. Shidoka provides ",
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("code", { children: "boxplot" }),
              " and ",
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("code", { children: "violin" }),
              " chart types for this."
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { style: { color: "var(--fg-muted)", fontSize: 12 }, children: "Pattern reference -- chart.js-chart-boxplot in the real component." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("footer", { style: { textAlign: "center", padding: "24px 0 8px", fontSize: 12, color: "var(--fg-muted)" }, children: "Shidoka charts kit \xB7 recreated for Kyndryl CMDB DS" })
    ] })
  ] })
] });
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AgentStatusBar,
  AgenticFlow,
  AgenticInbox,
  AgenticMenu,
  AgenticStates,
  AiChatHistory,
  AiFeedbackSources,
  AiLaunchButton,
  AiLoader,
  AiModalChat,
  Badges,
  BrandIcons,
  BrandLogo,
  Buttons,
  Chat,
  CmdbWorkspace,
  ColorsBrand,
  ColorsChart,
  ColorsSeverity,
  ColorsSlate,
  ColorsStatus,
  ConfidenceBadge,
  ConversationTemplate,
  DagGraphKit,
  DashboardTemplate,
  DataTable,
  DeltaIndicator,
  ExecSummary,
  ExecutionTimeline,
  FreshnessBadge,
  HandoffCard,
  HumanInputRequest,
  ImpactRollup,
  InvestigationTemplate,
  KpiGrid,
  PrimitivesConfidence,
  PrimitivesDelta,
  PrimitivesFreshness,
  PrimitivesSource,
  PrimitivesStatus,
  Recommendation,
  ReviewTemplate,
  ScenarioProjection,
  SeverityPill,
  ShidokaCharts,
  ShidokaComponents,
  ShidokaShell,
  SourceAttribution,
  SpacingElevation,
  SpacingRadii,
  SpacingScale,
  StateDeltaToast,
  StatesMatrix,
  StatusBadge,
  StatusBanner,
  StepTimeline,
  ToolCallCard,
  TriageTemplate,
  TrustGauge,
  TypeBody,
  TypeDisplay
});
//# sourceMappingURL=index.cjs.map