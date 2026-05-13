import React, { useState, useEffect } from "react";
import "./primitives-showcase.css";

interface BadgeConfig {
  label: string;
  cls: string;
  accent?: string;
  hasSvg?: boolean;
  popTitle: string;
  popMeta: string;
  actions: ActionConfig[];
  confirm?: ConfirmConfig;
  footLabel: string;
}

interface ActionConfig {
  act?: string;
  toast?: string;
  label: string;
  sub?: string;
  destructive?: boolean;
  dividerBefore?: boolean;
  icon?: React.ReactNode;
}

interface ConfirmConfig {
  forAct: string;
  message: React.ReactNode;
  cancelLabel: string;
  confirmLabel: string;
  confirmToast?: string;
}

const badges: BadgeConfig[] = [
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
        toast: "Override queued \u00b7 agent re-scoring now",
        label: "Override confidence",
        sub: "Set your own value for this item",
        icon: (
          <svg className="ap-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        ),
      },
      {
        act: "evidence",
        toast: "Asked agent for additional evidence",
        label: "Ask for more evidence",
        sub: "Agent will re-derive with extra sources",
        icon: (
          <svg className="ap-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 17v.01M12 7a2.5 2.5 0 1 1 2.5 2.5c-1 .5-2 1.5-2 3" />
          </svg>
        ),
      },
      {
        act: "snooze",
        toast: "Snoozed for 24h",
        label: "Snooze for 24h",
        sub: "Hide from triage, keep score",
        icon: (
          <svg className="ap-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
          </svg>
        ),
      },
      {
        dividerBefore: true,
        act: "teach",
        destructive: true,
        label: "Teach the agent",
        sub: "Adjusts future scoring for similar items",
        icon: (
          <svg className="ap-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v16" />
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          </svg>
        ),
      },
    ],
    confirm: {
      forAct: "teach",
      message: (
        <>
          Teaching the agent will affect how <b>all</b> similar items are scored going forward. Continue?
        </>
      ),
      cancelLabel: "Cancel",
      confirmLabel: "Yes, teach",
      confirmToast: "Taught the agent \u00b7 added to inbox",
    },
    footLabel: "value \u2265 0.9 \u00b7 high confidence",
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
      { dividerBefore: true, act: "teach", destructive: true, label: "Teach the agent" },
    ],
    confirm: {
      forAct: "teach",
      message: "Future scoring for similar items will shift. Continue?",
      cancelLabel: "Cancel",
      confirmLabel: "Yes, teach",
    },
    footLabel: "value 0.7\u20130.9",
  },
  {
    label: "64% confidence",
    cls: "psc-c-3",
    accent: "#B45309",
    popTitle: "Agent decision",
    popMeta: "score 0.64 \u00b7 caution",
    actions: [
      { toast: "Override applied", label: "Override confidence" },
      { toast: "Evidence requested \u00b7 3 sources queued", label: "Ask for more evidence" },
      { toast: "Snoozed", label: "Snooze for 24h" },
      { dividerBefore: true, act: "teach", destructive: true, label: "Teach the agent" },
    ],
    confirm: {
      forAct: "teach",
      message: "This will adjust future scoring for items with similar traits. Continue?",
      cancelLabel: "Cancel",
      confirmLabel: "Yes, teach",
    },
    footLabel: "value 0.5\u20130.7 \u00b7 caution",
  },
  {
    label: "41% confidence",
    cls: "psc-c-2",
    popTitle: "Agent decision",
    popMeta: "score 0.41 \u00b7 advisory",
    actions: [
      { toast: "Override applied", label: "Override confidence" },
      { toast: "Evidence requested", label: "Ask for more evidence" },
      { toast: "Snoozed", label: "Snooze for 24h" },
      { dividerBefore: true, act: "teach", destructive: true, label: "Teach the agent" },
    ],
    confirm: {
      forAct: "teach",
      message: "Future scoring will shift. Continue?",
      cancelLabel: "Cancel",
      confirmLabel: "Yes, teach",
    },
    footLabel: "value < 0.5 \u00b7 advisory",
  },
  {
    label: "\u2014 no confidence",
    cls: "psc-c-2",
    popTitle: "No score yet",
    popMeta: "value null",
    actions: [
      {
        toast: "Agent triggered \u00b7 scoring now",
        label: "Run agent scoring",
        sub: "Derive a confidence value now",
        icon: (
          <svg className="ap-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 2v6h-6" />
            <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
            <path d="M3 22v-6h6" />
            <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
          </svg>
        ),
      },
      { toast: "Set to manual tracking", label: "Mark as manually tracked" },
    ],
    footLabel: "value null",
  },
];

export function PrimitivesConfidence() {
  const [openPop, setOpenPop] = useState<string | null>(null);
  const [confirmFor, setConfirmFor] = useState<string | null>(null);
  const [toast, setToast] = useState<{ text: string } | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenPop(null);
        setConfirmFor(null);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3800);
    return () => clearTimeout(t);
  }, [toast]);

  const handleTrigger = (key: string) => {
    if (openPop === key) {
      setOpenPop(null);
      setConfirmFor(null);
    } else {
      setOpenPop(key);
      setConfirmFor(null);
    }
  };

  const handleAction = (action: ActionConfig, badgeKey: string) => {
    if (action.destructive && action.act) {
      setConfirmFor(`${badgeKey}:${action.act}`);
      return;
    }
    const msg = action.toast || action.label;
    setOpenPop(null);
    setConfirmFor(null);
    setToast({ text: msg });
  };

  const handleConfirm = (confirmToast?: string) => {
    setOpenPop(null);
    setConfirmFor(null);
    if (confirmToast) {
      setToast({ text: confirmToast });
    } else {
      setToast({ text: "Taught the agent \u00b7 added to inbox" });
    }
  };

  const handleCancel = () => {
    setOpenPop(null);
    setConfirmFor(null);
  };

  const handleOutsideClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest(".agentic") && !target.closest(".agentic-pop")) {
      setOpenPop(null);
      setConfirmFor(null);
    }
  };

  return (
    <div className="psc-body" onClick={handleOutsideClick}>
      <div className="psc-hdr">
        <span className="psc-t">ConfidenceBadge &middot; agentic</span>
        <span className="psc-hint">
          Click a badge &middot; <b>override</b>, <b>ask for evidence</b>, <b>snooze</b>, or{" "}
          <b>teach the agent</b>
        </span>
      </div>

      <div className="psc-row">
        {badges.map((b, i) => {
          const key = `conf-${i}`;
          const isOpen = openPop === key;
          const showConfirm = b.confirm && confirmFor === `${key}:${b.confirm.forAct}`;

          return (
            <div className="psc-cell" key={key}>
              <span
                className="agentic"
                tabIndex={0}
                aria-haspopup="true"
                aria-expanded={isOpen}
                role="button"
                style={b.accent ? ({ "--agentic-accent": b.accent } as React.CSSProperties) : undefined}
                onClick={(e) => {
                  e.stopPropagation();
                  handleTrigger(key);
                }}
              >
                <span className={`psc-badge ${b.cls}`}>
                  {b.hasSvg && (
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                  <span className="agentic-label">{b.label}</span>
                  <span className="agentic-chev" aria-hidden="true">
                    &bull;&bull;&bull;
                  </span>
                </span>
              </span>

              {isOpen && (
                <div
                  className="agentic-pop"
                  role="menu"
                  data-open="true"
                  onClick={(e) => e.stopPropagation()}
                >
                  <header>
                    <span className="ap-title">{b.popTitle}</span>
                    <span className="ap-meta">{b.popMeta}</span>
                  </header>

                  {!showConfirm && (
                    <div className="ap-actions">
                      {b.actions.map((a, ai) => (
                        <React.Fragment key={ai}>
                          {a.dividerBefore && <div className="ap-divider" />}
                          <button
                            type="button"
                            className={`ap-action${a.destructive ? " is-destructive" : ""}`}
                            onClick={() => handleAction(a, key)}
                          >
                            {a.icon}
                            {a.label}
                            {a.sub && <span className="ap-sub">{a.sub}</span>}
                          </button>
                        </React.Fragment>
                      ))}
                    </div>
                  )}

                  {showConfirm && b.confirm && (
                    <div className="ap-confirm">
                      <p>{b.confirm.message}</p>
                      <div className="ap-confirm-row">
                        <button type="button" onClick={handleCancel}>
                          {b.confirm.cancelLabel}
                        </button>
                        <button
                          type="button"
                          className="ap-primary"
                          onClick={() => handleConfirm(b.confirm!.confirmToast)}
                        >
                          {b.confirm.confirmLabel}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <span className="psc-lbl">{b.footLabel}</span>
            </div>
          );
        })}
      </div>

      {toast && (
        <div className="agentic-toast" data-show="true">
          <span className="at-dot" />
          <span className="at-msg">{toast.text}</span>
          <button type="button" onClick={() => setToast(null)}>
            Undo
          </button>
          <button type="button" onClick={() => setToast(null)}>
            View inbox
          </button>
        </div>
      )}
    </div>
  );
}
