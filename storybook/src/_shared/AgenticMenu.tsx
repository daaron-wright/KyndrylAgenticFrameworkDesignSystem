import React, { useEffect, useRef, useState } from "react";

export interface AgenticMenuAction {
  id: string;
  label: string;
  description?: string;
  toast?: string;
  destructive?: boolean;
  confirmText?: string;
  confirmLabel?: string;
  onSelect?: () => void;
}

interface AgenticMenuProps {
  title: string;
  meta?: string;
  actions: AgenticMenuAction[];
  disabled?: boolean;
  accent?: string;
  children: React.ReactNode;
}

export const AgenticMenu: React.FC<AgenticMenuProps> = ({ title, meta, actions, disabled, accent, children }) => {
  const rootRef = useRef<HTMLSpanElement>(null);
  const [open, setOpen] = useState(false);
  const [confirming, setConfirming] = useState<AgenticMenuAction | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
        setConfirming(null);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
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

  useEffect(() => {
    if (!toast) return undefined;
    const timeout = window.setTimeout(() => setToast(null), 3600);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  const runAction = (action: AgenticMenuAction) => {
    action.onSelect?.();
    setToast(action.toast ?? action.label);
    setOpen(false);
    setConfirming(null);
  };

  if (disabled) {
    return <>{children}</>;
  }

  return (
    <span className="kds-agentic-wrap" ref={rootRef} style={accent ? { "--agentic-accent": accent } as React.CSSProperties : undefined}>
      <span
        className="agentic"
        tabIndex={0}
        role="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => {
          setOpen((value) => !value);
          setConfirming(null);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setOpen((value) => !value);
            setConfirming(null);
          }
        }}
      >
        {children}
      </span>
      <span className="agentic-pop" role="menu" data-open={open ? "true" : undefined}>
        <header>
          <span className="ap-title">{title}</span>
          {meta && <span className="ap-meta">{meta}</span>}
        </header>
        {!confirming ? (
          <span className="ap-actions">
            {actions.map((action, index) => (
              <React.Fragment key={action.id}>
                {index === actions.length - 1 && action.destructive && <span className="ap-divider" />}
                <button
                  type="button"
                  className={`ap-action ${action.destructive ? "is-destructive" : ""}`}
                  onClick={() => {
                    if (action.destructive) {
                      setConfirming(action);
                      return;
                    }
                    runAction(action);
                  }}
                >
                  <span>
                    {action.label}
                    {action.description && <span className="ap-sub">{action.description}</span>}
                  </span>
                </button>
              </React.Fragment>
            ))}
          </span>
        ) : (
          <span className="ap-confirm">
            <p>{confirming.confirmText ?? "This teaches the agent and may affect future similar items. Continue?"}</p>
            <span className="ap-confirm-row">
              <button type="button" onClick={() => setConfirming(null)}>Cancel</button>
              <button type="button" className="ap-primary" onClick={() => runAction(confirming)}>
                {confirming.confirmLabel ?? "Yes, continue"}
              </button>
            </span>
          </span>
        )}
      </span>
      <span className="agentic-toast" data-show={toast ? "true" : undefined} role="status" aria-live="polite">
        <span className="at-dot" />
        <span>{toast}</span>
        <button type="button" onClick={() => setToast(null)}>Undo</button>
        <button type="button" onClick={() => setToast(null)}>View inbox</button>
      </span>
    </span>
  );
};
