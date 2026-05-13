import React, { useState, useEffect } from "react";
import "./primitives-showcase.css";

interface FreshnessConfig {
  badgeLabel: string;
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

const cells: FreshnessConfig[] = [
  {
    badgeLabel: "Fresh \u00b7 updated 12 min ago",
    badgeCls: "psc-f-fresh",
    popTitle: "Data freshness",
    popMeta: "source \u00b7 svc-discovery",
    actions: [
      {
        toast: "Refresh queued \u00b7 ETA 30s",
        label: "Force refresh",
        sub: "Re-pull from source of record",
        icon: (
          <svg className="ap-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 2v6h-6" />
            <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
            <path d="M3 22v-6h6" />
            <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
          </svg>
        ),
      },
      {
        toast: "Threshold editor opened",
        label: "Change stale threshold",
        sub: "Currently > 24h \u00b7 per-source",
        icon: (
          <svg className="ap-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" />
          </svg>
        ),
      },
      {
        dividerBefore: true,
        act: "pin",
        destructive: true,
        label: "Pin as trusted source",
        sub: "Bypass freshness checks for this CI",
        icon: (
          <svg className="ap-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 17v5M5 3l14 14M9 3h10v10" />
          </svg>
        ),
      },
    ],
    confirm: {
      forAct: "pin",
      message:
        "Pinning will let this CI pass validation even when stale. Safe for golden sources only.",
      cancelLabel: "Cancel",
      confirmLabel: "Pin as trusted",
      confirmToast: "Pinned \u00b7 freshness checks bypassed for this CI",
    },
    footLabel: "< 1h",
  },
  {
    badgeLabel: "3d 4h ago",
    badgeCls: "psc-f-ok",
    popTitle: "Data freshness",
    popMeta: "within threshold",
    actions: [
      { toast: "Refresh queued", label: "Force refresh" },
      { toast: "Threshold editor opened", label: "Change stale threshold" },
      { dividerBefore: true, act: "pin", destructive: true, label: "Pin as trusted source" },
    ],
    confirm: {
      forAct: "pin",
      message: "Pinning bypasses freshness checks. Continue?",
      cancelLabel: "Cancel",
      confirmLabel: "Pin as trusted",
    },
    footLabel: "1h \u2013 7d",
  },
  {
    badgeLabel: "Stale \u00b7 34 days",
    badgeCls: "psc-f-stale",
    popTitle: "Stale \u2014 action suggested",
    popMeta: "threshold 14d",
    actions: [
      { toast: "Refresh queued \u00b7 ETA 2m", label: "Force refresh" },
      { toast: "Threshold editor opened", label: "Change stale threshold" },
      {
        toast: "Owner notified \u00b7 slack + email",
        label: "Notify owner",
        sub: "Alex Kim (svc-inventory)",
        icon: (
          <svg className="ap-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.7 21a2 2 0 0 1-3.4 0" />
          </svg>
        ),
      },
      { dividerBefore: true, act: "pin", destructive: true, label: "Pin as trusted source" },
    ],
    confirm: {
      forAct: "pin",
      message: (
        <>
          This source is <b>34 days</b> stale. Pinning is rarely correct here. Confirm?
        </>
      ),
      cancelLabel: "Cancel",
      confirmLabel: "Pin anyway",
    },
    footLabel: "past threshold",
  },
  {
    badgeLabel: "Never synced",
    badgeCls: "psc-f-dead",
    popTitle: "No data",
    popMeta: "source inactive",
    actions: [
      { toast: "Sync triggered", label: "Run initial sync" },
      { toast: "Opened connector settings", label: "Open connector" },
    ],
    footLabel: "value null",
  },
];

export function PrimitivesFreshness() {
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
        <span className="psc-t">FreshnessBadge &middot; agentic</span>
        <span className="psc-hint">
          Click to <b>force refresh</b>, <b>change threshold</b>, or <b>pin as trusted</b>
        </span>
      </div>

      <div className="psc-row">
        {cells.map((c, i) => {
          const key = `fresh-${i}`;
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
                <span className={`psc-badge ${c.badgeCls}`}>
                  <span className="psc-dot" />
                  <span className="agentic-label">{c.badgeLabel}</span>
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
