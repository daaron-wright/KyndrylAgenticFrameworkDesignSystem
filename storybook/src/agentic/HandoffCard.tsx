import React from "react";
import "./agentic.css";

type PartyKind = "agent" | "specialist" | "human";

export interface HandoffCardProps {
  from: string;
  to: string;
  kind?: "agent" | "human";
  fromRole?: string;
  toRole?: string;
  fromKind?: PartyKind;
  toKind?: PartyKind;
  fromInitials?: string;
  toInitials?: string;
  reason?: string;
  context?: string;
  showActions?: boolean;
  onTrace?: () => void;
  onAck?: () => void;
}

const initials = (name: string) => name.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase();

export const HandoffCard: React.FC<HandoffCardProps> = ({
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

  return (
    <div>
      <div className="ka-handoff ka-edge">
        <Party name={from} role={fromRole} kind={fromKind} initials={fromInitials} />
        <div className="ka-handoff-arrow">
          <span className="ka-handoff-reason">{reason}</span>
          <svg className="ka-handoff-line" viewBox="0 0 200 10" preserveAspectRatio="none" aria-hidden="true">
            <line x1="0" y1="5" x2="194" y2="5" stroke="#475569" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            <polyline points="189,1 194,5 189,9" fill="none" stroke="#475569" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
          </svg>
          <span className="ka-handoff-context">{context}</span>
        </div>
        <Party name={to} role={toRole ?? (resolvedToKind === "human" ? "CMDB owner" : "specialist agent")} kind={resolvedToKind} initials={toInitials} />
      </div>
      {(showActions || onTrace || onAck) && (
        <div className="ka-handoff-actions">
          <button className="ka-button" type="button" onClick={onTrace}>View handoff trace</button>
          <button className="ka-button ka-button-primary" type="button" onClick={onAck}>Accept and continue</button>
        </div>
      )}
    </div>
  );
};

const Party: React.FC<{ name: string; role: string; kind: PartyKind; initials?: string }> = ({ name, role, kind, initials: providedInitials }) => (
  <div className="ka-handoff-party">
    <div className={`ka-handoff-avatar ka-handoff-avatar--${kind}`}>
      {kind === "agent" ? <span className="ka-glyph" /> : providedInitials ?? initials(name)}
    </div>
    <div className="ka-handoff-name">{name}</div>
    <div className="ka-handoff-role">{role}</div>
  </div>
);
