import type { Meta, StoryObj } from "@storybook/react";
import { StaticHtmlSurface } from "../_shared/StaticHtmlSurface";

const meta: Meta = { title: "Agentic/Reference flows", tags: ["autodocs"], parameters: { layout: "fullscreen" } };
export default meta;

export const AllStates: StoryObj = { render: () => <StaticHtmlSurface id="agentic-states--all" /> };
export const FullRun: StoryObj = { render: () => <StaticHtmlSurface id="agentic-flow--full-run" /> };
export const Inbox: StoryObj = { render: () => <StaticHtmlSurface id="agentic-inbox--learned" /> };
export const ReferenceDeck: StoryObj = { render: () => <StaticHtmlSurface id="agentic-states-deck--reference" /> };
