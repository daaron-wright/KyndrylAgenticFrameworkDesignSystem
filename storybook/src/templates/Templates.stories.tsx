import type { Meta, StoryObj } from "@storybook/react";
import { DashboardTemplate } from "./DashboardTemplate";
import { InvestigationTemplate } from "./InvestigationTemplate";
import { ReviewTemplate } from "./ReviewTemplate";
import { TriageTemplate } from "./TriageTemplate";
import { ConversationTemplate } from "./ConversationTemplate";

const meta: Meta = { title: "Templates", tags: ["autodocs"], parameters: { layout: "fullscreen" } };
export default meta;

export const Dashboard: StoryObj = { render: () => <DashboardTemplate /> };
export const Triage: StoryObj = { render: () => <TriageTemplate /> };
export const Investigation: StoryObj = { render: () => <InvestigationTemplate /> };
export const ReviewQueue: StoryObj = { render: () => <ReviewTemplate /> };
export const Conversation: StoryObj = { render: () => <ConversationTemplate /> };
