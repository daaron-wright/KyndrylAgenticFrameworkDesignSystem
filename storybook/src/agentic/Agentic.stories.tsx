import type { Meta, StoryObj } from "@storybook/react";
import { AgenticStates } from "./AgenticStates";
import { AgenticFlow } from "./AgenticFlow";
import { AgenticInbox } from "./AgenticInbox";

const meta: Meta = { title: "Agentic/Reference flows", tags: ["autodocs"], parameters: { layout: "fullscreen" } };
export default meta;

export const AllStates: StoryObj = { render: () => <AgenticStates /> };
export const FullRun: StoryObj = { render: () => <AgenticFlow /> };
export const Inbox: StoryObj = { render: () => <AgenticInbox /> };
