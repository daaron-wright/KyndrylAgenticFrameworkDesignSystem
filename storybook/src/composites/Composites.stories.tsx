import type { Meta, StoryObj } from "@storybook/react";
import { HtmlEmbed } from "../_shared/HtmlEmbed";

const meta: Meta<typeof HtmlEmbed> = { title: "Composites", component: HtmlEmbed, tags: ["autodocs"] };
export default meta;
type Story = StoryObj<typeof HtmlEmbed>;

export const KpiGrid: Story          = { args: { src: "/preview/components-kpi.html",            height: 380 } };
export const TrustGauge: Story       = { args: { src: "/preview/components-gauge.html",          height: 360 } };
export const StatusBanner: Story     = { args: { src: "/preview/components-status-banner.html",  height: 320 } };
export const Recommendation: Story   = { args: { src: "/preview/components-recommendation.html", height: 600 } };
export const ExecutionTimeline: Story= { args: { src: "/preview/components-execution.html",      height: 700 } };
export const ExecutiveSummary: Story = { args: { src: "/preview/composite-exec-summary.html",    height: 600 } };
export const ImpactRollup: Story     = { args: { src: "/preview/composite-impact-rollup.html",   height: 600 } };
export const Scenario: Story         = { args: { src: "/preview/composite-scenario.html",        height: 600 } };
export const Chat: Story             = { args: { src: "/preview/composite-chat.html",            height: 800 } };
export const AiModalChat: Story      = { args: { src: "/preview/ai-modal-chat.html",             height: 800 }, name: "AI modal chat" };
export const AiChatHistory: Story    = { args: { src: "/preview/ai-chat-history.html",           height: 600 }, name: "AI chat history" };
export const AiFeedbackSources: Story= { args: { src: "/preview/ai-feedback-sources.html",       height: 600 }, name: "AI feedback / sources" };
export const AiLaunchButton: Story   = { args: { src: "/preview/ai-launch-button.html",          height: 240 }, name: "AI launch button" };
export const AiLoader: Story         = { args: { src: "/preview/ai-loader.html",                 height: 240 }, name: "AI loader" };
export const DAGGraph: Story         = { args: { src: "/preview/dag-graph-kit.html",             height: 700 } };
export const Table: Story            = { args: { src: "/preview/components-table.html",          height: 600 } };
export const Buttons: Story          = { args: { src: "/preview/components-buttons.html",        height: 200 } };
export const Badges: Story           = { args: { src: "/preview/components-badges.html",         height: 240 } };
