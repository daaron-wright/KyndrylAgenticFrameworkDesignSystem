import type { Meta, StoryObj } from "@storybook/react";
import {
  AgenticFlowSurface,
  AgenticInboxSurface,
  AgenticStatesReference,
  ChatSurface,
  RecommendationCard,
} from "../_shared/DynamicSurfaces";

const meta: Meta = { title: "Agentic/Reference flows", tags: ["autodocs"] };
export default meta;

export const AllStates: StoryObj = { render: () => <AgenticStatesReference /> };
export const FullRun: StoryObj = { render: () => <AgenticFlowSurface /> };
export const Inbox: StoryObj = { render: () => <AgenticInboxSurface /> };
export const RecommendationFlow: StoryObj = { render: () => <RecommendationCard /> };
export const ConversationFlow: StoryObj = { render: () => <ChatSurface /> };
