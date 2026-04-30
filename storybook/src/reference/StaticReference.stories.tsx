import type { Meta, StoryObj } from "@storybook/react";
import { HtmlEmbed } from "./HtmlEmbed";

const meta: Meta<typeof HtmlEmbed> = {
  title: "Reference/Static library",
  component: HtmlEmbed,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" }
};

export default meta;
type Story = StoryObj<typeof HtmlEmbed>;

export const Welcome: Story = { args: { src: "/storybook-static/stories/welcome.html", height: 1200 } };
export const DesignSystemDeck: Story = { args: { src: "/preview/design-system-deck.html", height: 900 }, name: "Design system deck" };

export const StaticPrimitiveConfidence: Story = { args: { src: "/preview/primitives-confidence.html", height: 620 }, name: "Primitive - Confidence" };
export const StaticPrimitiveDelta: Story = { args: { src: "/preview/primitives-delta.html", height: 520 }, name: "Primitive - Delta" };
export const StaticPrimitiveFreshness: Story = { args: { src: "/preview/primitives-freshness.html", height: 560 }, name: "Primitive - Freshness" };
export const StaticPrimitiveStatus: Story = { args: { src: "/preview/primitives-status.html", height: 560 }, name: "Primitive - Status" };
export const StaticPrimitiveSource: Story = { args: { src: "/preview/primitives-source.html", height: 420 }, name: "Primitive - Source" };
export const StaticPrimitiveConfidenceBadgeSingle: Story = { args: { src: "/storybook-static/stories/primitive-confidence-badge.html", height: 260, value: 92, role: "full" }, name: "Primitive single - ConfidenceBadge" };
export const StaticPrimitiveDeltaSingle: Story = { args: { src: "/storybook-static/stories/primitive-delta-indicator.html", height: 240, delta: 3.4, unit: "%", direction: "up" }, name: "Primitive single - DeltaIndicator" };
export const StaticPrimitiveFreshnessSingle: Story = { args: { src: "/storybook-static/stories/primitive-freshness-badge.html", height: 260, ageDays: 3, threshold: 7 }, name: "Primitive single - FreshnessBadge" };
export const StaticPrimitiveSeveritySingle: Story = { args: { src: "/storybook-static/stories/primitive-severity-pill.html", height: 240, severity: "HIGH" }, name: "Primitive single - SeverityPill" };
export const StaticPrimitiveStatusSingle: Story = { args: { src: "/storybook-static/stories/primitive-status-badge.html", height: 260, status: "Pending" }, name: "Primitive single - StatusBadge" };

export const StaticAgenticStates: Story = { args: { src: "/preview/agentic-states.html", height: 1100 }, name: "Agentic - States" };
export const StaticAgenticFlow: Story = { args: { src: "/preview/agentic-flow.html", height: 900 }, name: "Agentic - Flow" };
export const StaticAgenticInbox: Story = { args: { src: "/preview/agentic-inbox.html", height: 800 }, name: "Agentic - Inbox" };
export const StaticAgenticStatesDeck: Story = { args: { src: "/preview/agentic-states-deck.html", height: 900 }, name: "Agentic - States deck" };

export const StaticBrandLogo: Story = { args: { src: "/preview/brand-logo.html", height: 360 }, name: "Brand - Logo" };
export const StaticBrandIcons: Story = { args: { src: "/preview/brand-icons.html", height: 600 }, name: "Brand - Icons" };
export const StaticColorsBrand: Story = { args: { src: "/preview/colors-brand.html", height: 600 }, name: "Colors - Brand" };
export const StaticColorsSlate: Story = { args: { src: "/preview/colors-slate.html", height: 600 }, name: "Colors - Slate" };
export const StaticColorsSeverity: Story = { args: { src: "/preview/colors-severity.html", height: 500 }, name: "Colors - Severity" };
export const StaticColorsStatus: Story = { args: { src: "/preview/colors-status.html", height: 500 }, name: "Colors - Status" };
export const StaticColorsChart: Story = { args: { src: "/preview/colors-chart.html", height: 600 }, name: "Colors - Chart" };
export const StaticTypeDisplay: Story = { args: { src: "/preview/type-display.html", height: 500 }, name: "Type - Display" };
export const StaticTypeBody: Story = { args: { src: "/preview/type-body.html", height: 500 }, name: "Type - Body" };
export const StaticSpacingScale: Story = { args: { src: "/preview/spacing-scale.html", height: 400 }, name: "Spacing - Scale" };
export const StaticSpacingRadii: Story = { args: { src: "/preview/spacing-radii.html", height: 320 }, name: "Spacing - Radii" };
export const StaticSpacingElevation: Story = { args: { src: "/preview/spacing-elevation.html", height: 320 }, name: "Spacing - Elevation" };

export const StaticKpiGrid: Story = { args: { src: "/preview/components-kpi.html", height: 380 }, name: "Composite - KPI grid" };
export const StaticTrustGauge: Story = { args: { src: "/preview/components-gauge.html", height: 360 }, name: "Composite - Trust gauge" };
export const StaticStatusBanner: Story = { args: { src: "/preview/components-status-banner.html", height: 320 }, name: "Composite - Status banner" };
export const StaticRecommendation: Story = { args: { src: "/preview/components-recommendation.html", height: 600 }, name: "Composite - Recommendation" };
export const StaticExecutionTimeline: Story = { args: { src: "/preview/components-execution.html", height: 700 }, name: "Composite - Execution" };
export const StaticExecutiveSummary: Story = { args: { src: "/preview/composite-exec-summary.html", height: 600 }, name: "Composite - Executive summary" };
export const StaticImpactRollup: Story = { args: { src: "/preview/composite-impact-rollup.html", height: 600 }, name: "Composite - Impact rollup" };
export const StaticScenario: Story = { args: { src: "/preview/composite-scenario.html", height: 600 }, name: "Composite - Scenario" };
export const StaticChat: Story = { args: { src: "/preview/composite-chat.html", height: 800 }, name: "Composite - Chat" };
export const StaticAiModalChat: Story = { args: { src: "/preview/ai-modal-chat.html", height: 800 }, name: "AI - Modal chat" };
export const StaticAiChatHistory: Story = { args: { src: "/preview/ai-chat-history.html", height: 600 }, name: "AI - Chat history" };
export const StaticAiFeedbackSources: Story = { args: { src: "/preview/ai-feedback-sources.html", height: 600 }, name: "AI - Feedback sources" };
export const StaticAiLaunchButton: Story = { args: { src: "/preview/ai-launch-button.html", height: 240 }, name: "AI - Launch button" };
export const StaticAiLoader: Story = { args: { src: "/preview/ai-loader.html", height: 240 }, name: "AI - Loader" };
export const StaticDagGraph: Story = { args: { src: "/preview/dag-graph-kit.html", height: 700 }, name: "Composite - DAG graph" };
export const StaticTable: Story = { args: { src: "/preview/components-table.html", height: 600 }, name: "Composite - Table" };
export const StaticButtons: Story = { args: { src: "/preview/components-buttons.html", height: 200 }, name: "Composite - Buttons" };
export const StaticBadges: Story = { args: { src: "/preview/components-badges.html", height: 240 }, name: "Composite - Badges" };

export const StaticDashboardTemplate: Story = { args: { src: "/preview/template-dashboard.html", height: 1100 }, name: "Template - Dashboard" };
export const StaticTriageTemplate: Story = { args: { src: "/preview/template-triage.html", height: 1100 }, name: "Template - Triage" };
export const StaticInvestigationTemplate: Story = { args: { src: "/preview/template-investigation.html", height: 1100 }, name: "Template - Investigation" };
export const StaticReviewTemplate: Story = { args: { src: "/preview/template-review.html", height: 1100 }, name: "Template - Review" };
export const StaticConversationTemplate: Story = { args: { src: "/preview/template-conversation.html", height: 1100 }, name: "Template - Conversation" };
export const StaticStatesMatrix: Story = { args: { src: "/preview/states-matrix.html", height: 1400 }, name: "States - Matrix" };

export const StaticCmdbUiKit: Story = { args: { src: "/ui_kits/cmdb/index.html", height: 1200 }, name: "UI kit - CMDB" };
export const StaticShidokaComponentsKit: Story = { args: { src: "/ui_kits/shidoka-components/index.html", height: 1200 }, name: "UI kit - Shidoka components" };
export const StaticShidokaShellKit: Story = { args: { src: "/ui_kits/shidoka-shell/index.html", height: 1200 }, name: "UI kit - Shidoka shell" };
export const StaticShidokaChartsKit: Story = { args: { src: "/ui_kits/shidoka-charts/index.html", height: 1200 }, name: "UI kit - Shidoka charts" };
