import React, { useState, useEffect } from "react";
import "./primitives-showcase.css";

interface StatusConfig {
  pillLabel: string;
  pillCls: string;
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

const cells: StatusConfig[] = [
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
        icon: (
          <svg className="ap-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ),
      },
      {
        toast: "Reassigned to A. Ortiz",
        label: "Reassign reviewer",
        sub: "Pick from team \u00b7 routes notification",
        icon: (
          <svg className="ap-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 21v-2a4 4 0 0 0-8 0v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        ),
      },
      {
        toast: "Note added to audit trail",
        label: "Add note",
        sub: "Visible on the audit trail",
        icon: (
          <svg className="ap-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v16" />
          </svg>
        ),
      },
      {
        dividerBefore: true,
        act: "reject",
        destructive: true,
        label: "Reject & close",
      },
    ],
    confirm: {
      forAct: "reject",
      message:
        "Rejection is logged permanently. Owner will be notified with your reason.",
      cancelLabel: "Cancel",
      confirmLabel: "Reject",
      confirmToast: "Rejected \u00b7 owner notified",
    },
    footLabel: "awaiting human",
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
        label: "Revert approval",
      },
    ],
    confirm: {
      forAct: "revert",
      message:
        "This will move the item back to Pending and notify the previous reviewer.",
      cancelLabel: "Cancel",
      confirmLabel: "Revert",
    },
    footLabel: "ready to run",
  },
  {
    pillLabel: "Executed \u00b7 2h ago",
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
        label: "Rollback change",
      },
    ],
    confirm: {
      forAct: "rollback",
      message:
        "Rollback will undo 14 downstream writes. This is audit-logged and notifies the CAB.",
      cancelLabel: "Cancel",
      confirmLabel: "Roll back",
      confirmToast: "Rollback started \u00b7 CAB notified",
    },
    footLabel: "done \u00b7 reversible",
  },
  {
    pillLabel: "Rejected",
    pillCls: "psc-p-rejected",
    popTitle: "Closed",
    popMeta: "final",
    actions: [
      { toast: "Reopened \u00b7 Pending", label: "Reopen" },
      { toast: "Audit trail opened", label: "View audit trail" },
    ],
    footLabel: "closed",
  },
  {
    pillLabel: "Monitoring",
    pillCls: "psc-p-monitoring",
    popTitle: "Agent watching",
    popMeta: "auto-escalate in 48h",
    actions: [
      { toast: "Escalated now", label: "Escalate now" },
      { toast: "Monitoring stopped", label: "Stop monitoring" },
    ],
    footLabel: "agent-owned",
  },
];

export function PrimitivesStatus() {
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
        <span className="psc-t">StatusBadge (workflow) &middot; agentic</span>
        <span className="psc-hint">
          Click to <b>advance</b>, <b>reject</b>, <b>reassign</b>, or <b>add note</b>
        </span>
      </div>

      <div className="psc-row">
        {cells.map((c, i) => {
          const key = `status-${i}`;
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
                <span className={`psc-pill ${c.pillCls}`}>
                  <span className="psc-status-dot" />
                  <span className="agentic-label">{c.pillLabel}</span>
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
