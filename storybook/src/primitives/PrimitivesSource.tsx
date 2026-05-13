import React, { useState, useEffect } from "react";
import "./primitives-showcase.css";

interface SourceConfig {
  badgeContent: React.ReactNode;
  badgeCls: string;
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

const cells: SourceConfig[] = [
  {
    badgeContent: (
      <>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        </svg>
        {"from "}
        <b>ServiceNow CMDB</b>
      </>
    ),
    badgeCls: "psc-src",
    popTitle: "Source of record",
    popMeta: "sync 12m ago",
    actions: [
      {
        toast: "Opened ServiceNow record",
        label: "Open in ServiceNow",
        sub: "svc.123 \u00b7 asset management",
        icon: (
          <svg className="ap-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        ),
      },
      {
        toast: "Provenance trace opened",
        label: "View provenance trace",
        sub: "Who wrote, when, via which pipeline",
        icon: (
          <svg className="ap-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="6" cy="6" r="3" />
            <circle cx="18" cy="18" r="3" />
            <path d="M6 9v6a3 3 0 0 0 3 3h6" />
          </svg>
        ),
      },
      {
        dividerBefore: true,
        act: "dispute",
        destructive: true,
        label: "Dispute this source",
      },
    ],
    confirm: {
      forAct: "dispute",
      message:
        "Dispute flags the source for owner review and removes its data from live dashboards until resolved.",
      cancelLabel: "Cancel",
      confirmLabel: "File dispute",
      confirmToast: "Source disputed \u00b7 flagged to owner",
    },
    footLabel: "system of record",
  },
  {
    badgeContent: (
      <>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l2.4 5.2L20 8l-4 4 1 5.6L12 15l-5 2.6L8 12l-4-4 5.6-.8z" />
        </svg>
        {"derived by "}
        <b>Reconciliation Agent</b>
      </>
    ),
    badgeCls: "psc-src psc-ai",
    popTitle: "Agentic source",
    popMeta: "confidence 0.84",
    actions: [
      {
        toast: "Derivation chain opened",
        label: "Show derivation chain",
        sub: "6 inputs \u00b7 2 rules \u00b7 1 LLM call",
        icon: (
          <svg className="ap-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="6" cy="6" r="3" />
            <circle cx="18" cy="18" r="3" />
            <path d="M6 9v6a3 3 0 0 0 3 3h6" />
          </svg>
        ),
      },
      {
        toast: "Re-derivation queued \u00b7 ETA 45s",
        label: "Request re-derivation",
        sub: "With current inputs, fresh pass",
        icon: (
          <svg className="ap-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 2v6h-6" />
            <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
            <path d="M3 22v-6h6" />
            <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
          </svg>
        ),
      },
      { toast: "Alternative hypotheses shown", label: "Show alternatives" },
      {
        dividerBefore: true,
        act: "dispute",
        destructive: true,
        label: "Dispute & teach the agent",
      },
    ],
    confirm: {
      forAct: "dispute",
      message:
        "Marks this derivation as incorrect. The agent updates its priors for similar cases.",
      cancelLabel: "Cancel",
      confirmLabel: "Dispute & teach",
      confirmToast: "Disputed \u00b7 agent priors updated \u00b7 added to inbox",
    },
    footLabel: "agentic \u00b7 inspectable",
  },
  {
    badgeContent: (
      <>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-8 0v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
        {"entered by "}
        <b>A. Kim</b>
      </>
    ),
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
        label: "Dispute this value",
      },
    ],
    confirm: {
      forAct: "dispute",
      message: "Owner will be notified and the value flagged for re-entry.",
      cancelLabel: "Cancel",
      confirmLabel: "File dispute",
    },
    footLabel: "human \u00b7 attributable",
  },
];

export function PrimitivesSource() {
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

  const handleAction = (action: ActionConfig, cellKey: string) => {
    if (action.destructive && action.act) {
      setConfirmFor(`${cellKey}:${action.act}`);
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
        <span className="psc-t">SourceAttribution &middot; agentic</span>
        <span className="psc-hint">
          Click to <b>open source</b>, <b>dispute</b>, or <b>request re-derivation</b>
        </span>
      </div>

      <div className="psc-row">
        {cells.map((c, i) => {
          const key = `src-${i}`;
          const isOpen = openPop === key;
          const showConfirm = c.confirm && confirmFor === `${key}:${c.confirm.forAct}`;

          return (
            <div className="psc-cell" key={key}>
              <span
                className="agentic"
                tabIndex={0}
                aria-haspopup="true"
                aria-expanded={isOpen}
                role="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleTrigger(key);
                }}
              >
                <span className={c.badgeCls}>
                  {c.badgeContent}
                  <span className="agentic-label" style={{ display: "none" }} />
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
                    <span className="ap-title">{c.popTitle}</span>
                    <span className="ap-meta">{c.popMeta}</span>
                  </header>

                  {!showConfirm && (
                    <div className="ap-actions">
                      {c.actions.map((a, ai) => (
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

                  {showConfirm && c.confirm && (
                    <div className="ap-confirm">
                      <p>{c.confirm.message}</p>
                      <div className="ap-confirm-row">
                        <button type="button" onClick={handleCancel}>
                          {c.confirm.cancelLabel}
                        </button>
                        <button
                          type="button"
                          className="ap-primary"
                          onClick={() => handleConfirm(c.confirm!.confirmToast)}
                        >
                          {c.confirm.confirmLabel}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <span className="psc-lbl">{c.footLabel}</span>
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
