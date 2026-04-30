import type { Meta, StoryObj } from "@storybook/react";
import {
  AgenticStatesReference,
  AiChatHistory,
  ChatSurface,
  RecommendationCard,
  ReviewQueueTemplate
} from "../_shared/DynamicSurfaces";

const meta: Meta = { title: "Agentic/Reference flows", tags: ["autodocs"] };
export default meta;

export const AllStates: StoryObj = { render: () => <AgenticStatesReference /> };
export const FullRun: StoryObj = { render: () => <ReviewQueueTemplate /> };
export const Inbox: StoryObj = { render: () => <AiChatHistory /> };
export const RecommendationFlow: StoryObj = { render: () => <RecommendationCard /> };
export const ConversationFlow: StoryObj = { render: () => <ChatSurface /> };
