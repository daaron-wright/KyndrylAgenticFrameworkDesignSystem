import React from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

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

declare function PrimitivesConfidence(): react_jsx_runtime.JSX.Element;

declare function PrimitivesDelta(): react_jsx_runtime.JSX.Element;

declare function PrimitivesFreshness(): react_jsx_runtime.JSX.Element;

declare function PrimitivesSource(): react_jsx_runtime.JSX.Element;

declare function PrimitivesStatus(): react_jsx_runtime.JSX.Element;

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

declare const AgenticStates: React.FC;

declare const AgenticFlow: React.FC;

declare const AgenticInbox: React.FC;

declare const ColorsBrand: React.FC;

declare const ColorsSlate: React.FC;

declare const ColorsSeverity: React.FC;

declare const ColorsStatus: React.FC;

declare const ColorsChart: React.FC;

declare const TypeDisplay: () => react_jsx_runtime.JSX.Element;

declare const TypeBody: () => react_jsx_runtime.JSX.Element;

declare const SpacingScale: () => react_jsx_runtime.JSX.Element;

declare const SpacingRadii: () => react_jsx_runtime.JSX.Element;

declare const SpacingElevation: () => react_jsx_runtime.JSX.Element;

declare const BrandLogo: () => react_jsx_runtime.JSX.Element;

declare const BrandIcons: () => react_jsx_runtime.JSX.Element;

declare const AiChatHistory: React.FC;

declare const AiFeedbackSources: React.FC;

declare const AiLaunchButton: React.FC;

declare const AiLoader: React.FC;

declare const AiModalChat: React.FC;

declare const Badges: React.FC;

declare const Buttons: React.FC;

declare const Chat: React.FC;

declare const DagGraphKit: React.FC;

declare const DataTable: React.FC;

declare const ExecSummary: React.FC;

declare const ExecutionTimeline: React.FC;

declare const ImpactRollup: React.FC;

declare const KpiGrid: React.FC;

declare const Recommendation: React.FC;

declare const ScenarioProjection: React.FC;

declare const StatusBanner: React.FC;

declare const TrustGauge: React.FC;

declare const DashboardTemplate: React.FC;

declare const TriageTemplate: React.FC;

declare const InvestigationTemplate: React.FC;

declare const ReviewTemplate: React.FC;

declare const ConversationTemplate: React.FC;

declare const StatesMatrix: React.FC;

declare const CmdbWorkspace: React.FC;

declare const ShidokaShell: React.FC;

declare const ShidokaComponents: React.FC;

declare const ShidokaCharts: React.FC;

export { AgentStatusBar, type AgentStatusBarProps, AgenticFlow, AgenticInbox, AgenticMenu, type AgenticMenuAction, AgenticStates, AiChatHistory, AiFeedbackSources, AiLaunchButton, AiLoader, AiModalChat, Badges, BrandIcons, BrandLogo, Buttons, Chat, CmdbWorkspace, ColorsBrand, ColorsChart, ColorsSeverity, ColorsSlate, ColorsStatus, ConfidenceBadge, type ConfidenceBadgeProps, ConversationTemplate, DagGraphKit, DashboardTemplate, DataTable, DeltaIndicator, type DeltaIndicatorProps, ExecSummary, ExecutionTimeline, FreshnessBadge, type FreshnessBadgeProps, HandoffCard, type HandoffCardProps, HumanInputRequest, type HumanInputRequestProps, ImpactRollup, InvestigationTemplate, KpiGrid, PrimitivesConfidence, PrimitivesDelta, PrimitivesFreshness, PrimitivesSource, PrimitivesStatus, Recommendation, ReviewTemplate, ScenarioProjection, type Severity, SeverityPill, type SeverityPillProps, ShidokaCharts, ShidokaComponents, ShidokaShell, SourceAttribution, type SourceAttributionProps, SpacingElevation, SpacingRadii, SpacingScale, StateDeltaToast, type StateDeltaToastProps, StatesMatrix, StatusBadge, StatusBanner, type StatusValue, StepTimeline, type StepTimelineProps, ToolCallCard, type ToolCallCardProps, TriageTemplate, TrustGauge, TypeBody, TypeDisplay };
