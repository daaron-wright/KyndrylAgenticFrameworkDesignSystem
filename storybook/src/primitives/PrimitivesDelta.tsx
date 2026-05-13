import React, { useState, useEffect } from "react";
import "./primitives-showcase.css";

interface DeltaCellConfig {
  value: string;
  deltaLabel: string;
  deltaCls: string;
  arrowSvg?: React.ReactNode;
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
  message: string;
  cancelLabel: string;
  confirmLabel: string;
  confirmToast?: string;
}

const cells: DeltaCellConfig[] = [
  {
    value: "92.4%",
    deltaLabel: "+2.1 pp vs last wk",
    deltaCls: "psc-up",
    arrowSvg: (
      <svg
        width="10"
        height="10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    ),
    popTitle: "Change driver",
    popMeta: "7d window",
    actions: [
      {
        toast: "Opened change explanation",
        label: "Explain this change",
        sub: "Agent will surface top contributing CIs",
        icon: (
          <svg className="ap-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 17v.01M12 7a2.5 2.5 0 1 1 2.5 2.5c-1 .5-2 1.5-2 3" />
          </svg>
        ),
      },
      {
        toast: "Alert created \u00b7 > \u00b13 pp",
        label: "Set alert threshold",
        sub: "Notify me when change exceeds \u00b1X pp",
        icon: (
          <svg className="ap-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.7 21a2 2 0 0 1-3.4 0" />
          </svg>
        ),
      },
      {
        toast: "Compare sidebar opened",
        label: "Compare periods",
        sub: "7d vs 30d vs QoQ",
        icon: (
          <svg className="ap-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 3v18h18" />
            <path d="M7 14l4-4 4 4 5-5" />
          </svg>
        ),
      },
      {
        dividerBefore: true,
        act: "teach",
        destructive: true,
        label: "Teach the agent what caused this",
      },
    ],
    confirm: {
      forAct: "teach",
      message:
        "Labels this change with a cause the agent will use to detect similar patterns. Continue?",
      cancelLabel: "Cancel",
      confirmLabel: "Label & teach",
      confirmToast: "Labeled \u00b7 pattern added to detection model",
    },
    footLabel: "up \u00b7 good",
  },
  {
    value: "418",
    deltaLabel: "\u221214 vs yesterday",
    deltaCls: "psc-dn",
    arrowSvg: (
      <svg
        width="10"
        height="10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    ),
    popTitle: "Change driver",
    popMeta: "24h window",
    actions: [
      { toast: "Opened change explanation", label: "Explain this change" },
      { toast: "Alert created", label: "Set alert threshold" },
      { toast: "Compare sidebar opened", label: "Compare periods" },
    ],
    footLabel: "down \u00b7 attention",
  },
  {
    value: "1,204",
    deltaLabel: "\u00b10.0% \u00b7 stable",
    deltaCls: "psc-flat",
    popTitle: "Change driver",
    popMeta: "30d window",
    actions: [
      { toast: "Stability rationale shown", label: "Why so stable?" },
      { toast: "Alert created", label: "Alert me on any movement" },
      { toast: "Compare sidebar opened", label: "Compare periods" },
    ],
    footLabel: "flat",
  },
];

export function PrimitivesDelta() {
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
      <div className="psc-hdr psc-hdr--wide">
        <span className="psc-t">DeltaIndicator &middot; agentic</span>
        <span className="psc-hint">
          Click to <b>explain change</b>, <b>set alert</b>, or <b>compare periods</b>
        </span>
      </div>

      <div className="psc-row psc-row--wide">
        {cells.map((c, i) => {
          const key = `delta-${i}`;
          const isOpen = openPop === key;
          const showConfirm = c.confirm && confirmFor === `${key}:${c.confirm.forAct}`;

          return (
            <div className="psc-cell" key={key}>
              <span className="psc-num">{c.value}</span>
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
                <span className={`psc-delta ${c.deltaCls}`}>
                  {c.arrowSvg}
                  <span className="agentic-label">{c.deltaLabel}</span>
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
