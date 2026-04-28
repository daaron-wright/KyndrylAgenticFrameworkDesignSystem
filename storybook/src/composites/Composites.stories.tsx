import type { Meta, StoryObj } from "@storybook/react";
import { HtmlEmbed } from "../_shared/HtmlEmbed";

const meta: Meta<typeof HtmlEmbed> = { title: "Composites", component: HtmlEmbed, tags: ["autodocs"] };
export default meta;
type Story = StoryObj<typeof HtmlEmbed>;

export const KpiGrid: Story          = { args: { src: "/components-kpi.html",            height: 380 } };
export const TrustGauge: Story       = { args: { src: "/components-gauge.html",          height: 360 } };
export const StatusBanner: Story     = { args: { src: "/components-status-banner.html",  height: 320 } };
export const Recommendation: Story   = { args: { src: "/components-recommendation.html", height: 600 } };
export const ExecutionTimeline: Story= { args: { src: "/components-execution.html",      height: 700 } };
export const ExecutiveSummary: Story = { args: { src: "/composite-exec-summary.html",    height: 600 } };
export const ImpactRollup: Story     = { args: { src: "/composite-impact-rollup.html",   height: 600 } };
export const Scenario: Story         = { args: { src: "/composite-scenario.html",        height: 600 } };
export const Chat: Story             = { args: { src: "/composite-chat.html",            height: 800 } };
export const DAGGraph: Story         = { args: { src: "/dag-graph-kit.html",             height: 700 } };
export const Table: Story            = { args: { src: "/components-table.html",          height: 600 } };
export const Buttons: Story          = { args: { src: "/components-buttons.html",        height: 200 } };
export const Badges: Story           = { args: { src: "/components-badges.html",         height: 240 } };
