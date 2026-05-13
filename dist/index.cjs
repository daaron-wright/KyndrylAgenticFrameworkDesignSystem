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
  AgenticMenu: () => AgenticMenu,
  ConfidenceBadge: () => ConfidenceBadge,
  DeltaIndicator: () => DeltaIndicator,
  FreshnessBadge: () => FreshnessBadge,
  HandoffCard: () => HandoffCard,
  HumanInputRequest: () => HumanInputRequest,
  SeverityPill: () => SeverityPill,
  SourceAttribution: () => SourceAttribution,
  StateDeltaToast: () => StateDeltaToast,
  StatusBadge: () => StatusBadge,
  StepTimeline: () => StepTimeline,
  ToolCallCard: () => ToolCallCard
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

// storybook/src/agentic/AgentStatusBar.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: `ka-status ka-status--${stateClass} ${stateClass === "thinking" || stateClass === "streaming" ? "ka-edge" : ""}`, role: "status", "aria-live": "polite", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "ka-status-dot" }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "ka-status-label", children: label ?? copy.label }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "ka-status-meta", children: meta ?? step ?? copy.meta }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "ka-status-controls", children: [
      (showStepThrough || onStepThroughChange) && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("label", { className: "ka-status-step", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("input", { type: "checkbox", checked: !!stepThrough, onChange: (event) => onStepThroughChange?.(event.target.checked) }),
        "Step-through"
      ] }),
      supportingAction && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("button", { className: `ka-button ${state === "done" ? "" : "ka-button-danger"}`, type: "button", onClick: onSecondary ?? onBranch, children: supportingAction }),
      mainAction && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
var import_react2 = __toESM(require("react"));
var import_jsx_runtime9 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: `ka-tool ka-tool--${normalized} ka-edge ${destructive ? "ka-tool--destructive" : ""}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "ka-tool-head", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "ka-tool-icon", "aria-hidden": "true", children: normalized === "ok" ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(CheckIcon, {}) : normalized === "err" ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(AlertIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(CodeIcon, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "ka-tool-title", children: [
          copy.title,
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "ka-tool-name", children: toolName }),
          normalized === "ok" && resultSummary ? ` - ${resultSummary}` : ""
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "ka-tool-meta", children: bodyMeta })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "ka-tool-status", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "ka-tool-status-dot" }),
        copy.status
      ] })
    ] }),
    (isPending || normalized === "err") && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "ka-tool-body", children: [
      isPending && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("pre", { className: "ka-tool-args", "aria-label": `${toolName} arguments`, children: Object.entries(args).map(([key, value], index) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_react2.default.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "ka-tool-key", children: key }),
        ":",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: `${valueClass(value)} ${editableKeys.includes(key) ? "ka-tool-editable" : ""}`, children: formatValue(value) }),
        index < Object.keys(args).length - 1 ? "\n" : ""
      ] }, key)) }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "ka-tool-actions", children: [
        isPending ? /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("button", { className: "ka-button ka-button-primary", type: "button", onClick: onApprove, children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(CheckIcon, {}),
            "Approve and run"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { className: "ka-button", type: "button", onClick: onEditArgs, children: "Edit args" }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { className: "ka-button", type: "button", onClick: onReject, children: "Skip" })
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { className: "ka-button", type: "button", onClick: onRetry, children: "Retry as reviewer" }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { className: "ka-button", type: "button", onClick: onHandoff, children: "Hand off to admin" }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { className: "ka-button", type: "button", onClick: onReject, children: "Branch - readonly" })
        ] }),
        onApproveAll && isPending && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { className: "ka-button", type: "button", onClick: onApproveAll, children: "Approve all" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "ka-tool-gate", children: gateLabel })
      ] })
    ] })
  ] });
};
var CodeIcon = () => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", { d: "M16 18l6-6-6-6M8 6l-6 6 6 6" }) });
var CheckIcon = () => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("polyline", { points: "20 6 9 17 4 12" }) });
var AlertIcon = () => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", "aria-hidden": "true", children: [
  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
] });

// storybook/src/agentic/HumanInputRequest.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var HumanInputRequest = ({
  question,
  options,
  agent = "Reconciliation Agent - needs your call",
  timestamp = "14:08:22",
  context = "CI web-gateway-02 has two plausible owners. The deploy edit is structural, the config edit is cosmetic, but the recency rule would pick the later config owner.",
  blockingLabel = "blocking - agent paused",
  primaryOption,
  onChoose
}) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "ka-hir", role: "group", "aria-label": "Human input required", children: [
  /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "ka-hir-head", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "ka-hir-glyph", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(QuestionIcon, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "ka-hir-agent", children: agent }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "ka-hir-time", children: timestamp })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "ka-hir-question", children: question }),
  context && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "ka-hir-context", children: context }),
  /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "ka-hir-actions", children: [
    options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "button",
      {
        className: `ka-button ${option === primaryOption ? "ka-button-primary" : ""}`,
        type: "button",
        onClick: () => onChoose?.(option),
        children: option
      },
      option
    )),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "ka-hir-blocking", children: blockingLabel })
  ] })
] });
var QuestionIcon = () => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", "aria-hidden": "true", children: [
  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
] });

// storybook/src/agentic/HandoffCard.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "ka-handoff ka-edge", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Party, { name: from, role: fromRole, kind: fromKind, initials: fromInitials }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "ka-handoff-arrow", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "ka-handoff-reason", children: reason }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("svg", { className: "ka-handoff-line", viewBox: "0 0 200 10", preserveAspectRatio: "none", "aria-hidden": "true", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("line", { x1: "0", y1: "5", x2: "194", y2: "5", stroke: "#475569", strokeWidth: "1", vectorEffect: "non-scaling-stroke" }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("polyline", { points: "189,1 194,5 189,9", fill: "none", stroke: "#475569", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", vectorEffect: "non-scaling-stroke" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "ka-handoff-context", children: context })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Party, { name: to, role: toRole ?? (resolvedToKind === "human" ? "CMDB owner" : "specialist agent"), kind: resolvedToKind, initials: toInitials })
    ] }),
    (showActions || onTrace || onAck) && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "ka-handoff-actions", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("button", { className: "ka-button", type: "button", onClick: onTrace, children: "View handoff trace" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("button", { className: "ka-button ka-button-primary", type: "button", onClick: onAck, children: "Accept and continue" })
    ] })
  ] });
};
var Party = ({ name, role, kind, initials: providedInitials }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "ka-handoff-party", children: [
  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: `ka-handoff-avatar ka-handoff-avatar--${kind}`, children: kind === "agent" ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "ka-glyph" }) : providedInitials ?? initials(name) }),
  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "ka-handoff-name", children: name }),
  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "ka-handoff-role", children: role })
] });

// storybook/src/agentic/StateDeltaToast.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: `ka-toast ${tone === "warm" ? "ka-toast--warm" : ""}`, role: "status", "aria-live": "polite", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "ka-toast-glyph", "aria-hidden": "true", children: tone === "warm" ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(CheckIcon2, {}) : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(PlusIcon, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "ka-toast-body", children: [
      "Agent updated ",
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("strong", { children: subject ?? field }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "ka-toast-diff", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "ka-toast-from", children: String(oldValue) }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "ka-toast-arrow", children: "->" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "ka-toast-to", children: String(newValue) }),
        context && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("span", { className: "ka-toast-context", children: [
          "- ",
          context
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "ka-toast-actions", children: actionLabels.map((action) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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
var PlusIcon = () => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("path", { d: "M12 5v14M5 12h14" }) });
var CheckIcon2 = () => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("polyline", { points: "6 12 10 16 18 8" }) });

// storybook/src/agentic/StepTimeline.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
var StepTimeline = ({
  steps,
  showActiveControls = true,
  onEditStep,
  onApproveOnce,
  onApproveAll
}) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "ka-timeline", children: steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: `ka-step ka-step--${step.state}`, children: [
  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "ka-step-rail", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "ka-step-marker" }) }),
  /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "ka-step-label", children: step.title }),
    step.note && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "ka-step-note", children: step.note }),
    step.state === "active" && showActiveControls && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "ka-step-actions", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("button", { className: "ka-button", type: "button", onClick: () => onEditStep?.(index), children: "Edit step" }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("button", { className: "ka-button", type: "button", onClick: () => onApproveOnce?.(index), children: "Approve once" }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("button", { className: "ka-button ka-button-primary", type: "button", onClick: onApproveAll, children: "Approve all" })
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "ka-step-time", children: step.timestamp ?? (step.state === "active" ? "running..." : step.state === "pending" ? "queued" : "") })
] }, `${step.title}-${index}`)) });
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AgentStatusBar,
  AgenticMenu,
  ConfidenceBadge,
  DeltaIndicator,
  FreshnessBadge,
  HandoffCard,
  HumanInputRequest,
  SeverityPill,
  SourceAttribution,
  StateDeltaToast,
  StatusBadge,
  StepTimeline,
  ToolCallCard
});
//# sourceMappingURL=index.cjs.map