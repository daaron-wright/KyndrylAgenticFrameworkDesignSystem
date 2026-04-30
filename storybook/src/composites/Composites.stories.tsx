import type { Meta, StoryObj } from "@storybook/react";
import { StaticHtmlSurface } from "../_shared/StaticHtmlSurface";

const meta: Meta = { title: "Composites", tags: ["autodocs"], parameters: { layout: "fullscreen" } };
export default meta;

export const KpiGrid: StoryObj = { name: "Kpi Grid", render: () => <StaticHtmlSurface id="composites-kpi--grid" /> };
export const TrustGauge: StoryObj = { name: "Trust Gauge", render: () => <StaticHtmlSurface id="composites-gauge--trustscore" /> };
export const StatusBanner: StoryObj = { render: () => <StaticHtmlSurface id="composites-statusbanner--default" /> };
export const Recommendation: StoryObj = { render: () => <StaticHtmlSurface id="composites-recommendation--default" /> };
export const ExecutionTimeline: StoryObj = { render: () => <StaticHtmlSurface id="composites-execution--timeline" /> };
export const ExecutiveSummary: StoryObj = { name: "Executive Summary", render: () => <StaticHtmlSurface id="composites-execsummary--card" /> };
export const ImpactRollup: StoryObj = { name: "Impact Rollup", render: () => <StaticHtmlSurface id="composites-impact--rollup" /> };
export const Scenario: StoryObj = { render: () => <StaticHtmlSurface id="composites-scenario--projection" /> };
export const Chat: StoryObj = { render: () => <StaticHtmlSurface id="composites-chat--default" /> };
export const AiModalChat: StoryObj = { name: "AI modal chat", render: () => <StaticHtmlSurface id="composites-chat--ai-modal" /> };
export const AiChatHistory: StoryObj = { name: "AI chat history", render: () => <StaticHtmlSurface id="composites-chat--history" /> };
export const AiFeedbackSources: StoryObj = { name: "AI feedback / sources", render: () => <StaticHtmlSurface id="composites-chat--feedback" /> };
export const AiLaunchButton: StoryObj = { name: "AI launch button", render: () => <StaticHtmlSurface id="composites-chat--launch-button" /> };
export const AiLoader: StoryObj = { name: "AI loader", render: () => <StaticHtmlSurface id="composites-chat--ai-loader" /> };
export const DAGGraph: StoryObj = { name: "DAG Graph", render: () => <StaticHtmlSurface id="composites-graph--dag" /> };
export const Table: StoryObj = { render: () => <StaticHtmlSurface id="composites-table--default" /> };
export const Buttons: StoryObj = { render: () => <StaticHtmlSurface id="composites-buttons--default" /> };
export const Badges: StoryObj = { render: () => <StaticHtmlSurface id="composites-badges--default" /> };
