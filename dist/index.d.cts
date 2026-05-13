import React from 'react';

type Severity = "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
interface SeverityPillProps {
    /** Canonical severity. Never invent new values. */
    severity: Severity;
    /** Optional trailing label, e.g. a count. */
    label?: string;
}
declare const SeverityPill: React.FC<SeverityPillProps>;

interface AgenticMenuAction {
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
declare const AgenticMenu: React.FC<AgenticMenuProps>;

interface ConfidenceBadgeProps {
    /** 0-100, or null when the agent has not derived a score yet. */
    value: number | null;
    /** Permission role — 'readonly' downgrades to a static badge with no popover. */
    role?: "full" | "review" | "readonly";
    showCheck?: boolean;
    actions?: AgenticMenuAction[];
    onOverride?: () => void;
    onTeach?: () => void;
}
declare const ConfidenceBadge: React.FC<ConfidenceBadgeProps>;

interface FreshnessBadgeProps {
    /** Age of the underlying data, in days. */
    ageDays: number;
    /** When ageDays > threshold, the badge crosses into a warning state. */
    threshold?: number;
    /** Optional override label (e.g. "Today", "Last verified 3d ago"). */
    label?: string;
    actions?: AgenticMenuAction[];
}
declare const FreshnessBadge: React.FC<FreshnessBadgeProps>;

type WorkflowStatus = "Pending" | "Approved" | "Executed" | "Rejected";
type GraphStatus = "Healthy" | "Degraded" | "Impacted" | "Unknown";
type StatusValue = WorkflowStatus | GraphStatus;
declare const StatusBadge: React.FC<{
    status: StatusValue;
    actions?: AgenticMenuAction[];
}>;

interface DeltaIndicatorProps {
    /** Signed numeric delta vs the reference period. */
    delta: number;
    /** Unit suffix. */
    unit?: "%" | "pts" | "CIs" | "" | string;
    /** Override direction (otherwise inferred from sign of delta). */
    direction?: "up" | "down";
    /** "+1.2% up means good" by default. Flip to invert color semantics. */
    invertSemantics?: boolean;
    /** Reference label (e.g. "vs last week"). */
    referenceLabel?: string;
    actions?: AgenticMenuAction[];
}
declare const DeltaIndicator: React.FC<DeltaIndicatorProps>;

interface SourceAttributionProps {
    /** Dataset or source identifier. */
    dataset: string;
    /** Last-derived timestamp (display string). */
    timestamp: string;
    /** 0–100 confidence the agent has in this output. */
    confidence?: number;
    /** Optional short rationale or audit-trail link. */
    rationale?: string;
    actions?: AgenticMenuAction[];
}
declare const SourceAttribution: React.FC<SourceAttributionProps>;

interface AgentStatusBarProps {
    state: "started" | "thinking" | "streaming" | "waiting" | "paused" | "done";
    agent?: string;
    label?: string;
    meta?: string;
    step?: string;
    stepThrough?: boolean;
    showStepThrough?: boolean;
    primaryAction?: string;
    secondaryAction?: string;
    onPrimary?: () => void;
    onSecondary?: () => void;
    onPauseResume?: () => void;
    onBranch?: () => void;
    onStepThroughChange?: (value: boolean) => void;
}
declare const AgentStatusBar: React.FC<AgentStatusBarProps>;

type ToolState = "requested" | "executing" | "completed" | "failed" | "pending" | "running" | "ok" | "err";
interface ToolCallCardProps {
    toolName: string;
    args: Record<string, unknown>;
    state?: ToolState;
    destructive?: boolean;
    stepLabel?: string;
    meta?: string;
    resultSummary?: string;
    gateLabel?: string;
    editableKeys?: string[];
    onApprove?: () => void;
    onApproveAll?: () => void;
    onEditArgs?: () => void;
    onReject?: () => void;
    onRetry?: () => void;
    onHandoff?: () => void;
}
declare const ToolCallCard: React.FC<ToolCallCardProps>;

interface HumanInputRequestProps {
    question: string;
    options: string[];
    agent?: string;
    timestamp?: string;
    context?: string;
    blockingLabel?: string;
    primaryOption?: string;
    onChoose?: (option: string) => void;
}
declare const HumanInputRequest: React.FC<HumanInputRequestProps>;

type PartyKind = "agent" | "specialist" | "human";
interface HandoffCardProps {
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
declare const HandoffCard: React.FC<HandoffCardProps>;

interface StateDeltaToastProps {
    field: string;
    oldValue: string | number;
    newValue: string | number;
    subject?: string;
    context?: string;
    tone?: "positive" | "warm";
    actions?: string[];
    onUndo?: () => void;
    onView?: () => void;
}
declare const StateDeltaToast: React.FC<StateDeltaToastProps>;

interface StepTimelineProps {
    steps: Array<{
        title: string;
        state: "pending" | "active" | "done" | "failed";
        note?: string;
        timestamp?: string;
    }>;
    showActiveControls?: boolean;
    onEditStep?: (index: number) => void;
    onApproveOnce?: (index: number) => void;
    onApproveAll?: () => void;
}
declare const StepTimeline: React.FC<StepTimelineProps>;

export { AgentStatusBar, type AgentStatusBarProps, AgenticMenu, type AgenticMenuAction, ConfidenceBadge, type ConfidenceBadgeProps, DeltaIndicator, type DeltaIndicatorProps, FreshnessBadge, type FreshnessBadgeProps, HandoffCard, type HandoffCardProps, HumanInputRequest, type HumanInputRequestProps, type Severity, SeverityPill, type SeverityPillProps, SourceAttribution, type SourceAttributionProps, StateDeltaToast, type StateDeltaToastProps, StatusBadge, type StatusValue, StepTimeline, type StepTimelineProps, ToolCallCard, type ToolCallCardProps };
