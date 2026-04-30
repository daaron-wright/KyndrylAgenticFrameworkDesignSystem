import type { Meta, StoryObj } from "@storybook/react";
import {
  AiChatHistory as AiChatHistorySurface,
  AiFeedbackSources as AiFeedbackSourcesSurface,
  AiLaunchButton as AiLaunchButtonSurface,
  AiLoader as AiLoaderSurface,
  AiModalChat as AiModalChatSurface,
  BadgesSurface,
  BarChart,
  ButtonsSurface,
  ChatSurface,
  DataTable,
  DagGraph,
  DonutChart,
  ExecutionTimelineCard,
  ExecutiveSummary as ExecutiveSummarySurface,
  ImpactRollup as ImpactRollupSurface,
  KpiGrid as KpiGridSurface,
  RecommendationCard,
  ScenarioPanel,
  StatusBannerCard,
  TrustGauge as TrustGaugeSurface
} from "../_shared/DynamicSurfaces";

const meta: Meta = { title: "Composites", tags: ["autodocs"] };
export default meta;

export const KpiGrid: StoryObj = { name: "Kpi Grid", render: () => <KpiGridSurface /> };
export const TrustGauge: StoryObj = { name: "Trust Gauge", render: () => <TrustGaugeSurface /> };
export const StatusBanner: StoryObj = { render: () => <StatusBannerCard /> };
export const Recommendation: StoryObj = { render: () => <RecommendationCard /> };
export const ExecutionTimeline: StoryObj = { render: () => <ExecutionTimelineCard /> };
export const ExecutiveSummary: StoryObj = { name: "Executive Summary", render: () => <ExecutiveSummarySurface /> };
export const ImpactRollup: StoryObj = { name: "Impact Rollup", render: () => <ImpactRollupSurface /> };
export const Scenario: StoryObj = { render: () => <ScenarioPanel /> };
export const Chat: StoryObj = { render: () => <ChatSurface /> };
export const AiModalChat: StoryObj = { name: "AI modal chat", render: () => <AiModalChatSurface /> };
export const AiChatHistory: StoryObj = { name: "AI chat history", render: () => <AiChatHistorySurface /> };
export const AiFeedbackSources: StoryObj = { name: "AI feedback / sources", render: () => <AiFeedbackSourcesSurface /> };
export const AiLaunchButton: StoryObj = { name: "AI launch button", render: () => <AiLaunchButtonSurface /> };
export const AiLoader: StoryObj = { name: "AI loader", render: () => <AiLoaderSurface /> };
export const DAGGraph: StoryObj = { name: "DAG Graph", render: () => <DagGraph /> };
export const Table: StoryObj = { render: () => <DataTable /> };
export const Buttons: StoryObj = { render: () => <ButtonsSurface /> };
export const Badges: StoryObj = { render: () => <BadgesSurface /> };
export const Charts: StoryObj = { render: () => <div className="kds-grid kds-grid-2"><BarChart /><DonutChart /></div> };
