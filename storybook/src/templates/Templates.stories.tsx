import type { Meta, StoryObj } from "@storybook/react";
import {
  ConversationTemplate,
  DashboardTemplate,
  InvestigationTemplate,
  ReviewQueueTemplate,
  TriageTemplate
} from "../_shared/DynamicSurfaces";

const meta: Meta = { title: "Templates", tags: ["autodocs"], parameters: { layout: "fullscreen" } };
export default meta;

export const Dashboard: StoryObj = { render: () => <DashboardTemplate /> };
export const Triage: StoryObj = { render: () => <TriageTemplate /> };
export const Investigation: StoryObj = { render: () => <InvestigationTemplate /> };
export const ReviewQueue: StoryObj = { render: () => <ReviewQueueTemplate /> };
export const Conversation: StoryObj = { render: () => <ConversationTemplate /> };
