import type { Meta, StoryObj } from "@storybook/react";
import { StaticHtmlSurface } from "../_shared/StaticHtmlSurface";

const meta: Meta = { title: "Templates", tags: ["autodocs"], parameters: { layout: "fullscreen" } };
export default meta;

export const Dashboard: StoryObj = { render: () => <StaticHtmlSurface id="templates--dashboard" /> };
export const Triage: StoryObj = { render: () => <StaticHtmlSurface id="templates--triage" /> };
export const Investigation: StoryObj = { render: () => <StaticHtmlSurface id="templates--investigation" /> };
export const ReviewQueue: StoryObj = { render: () => <StaticHtmlSurface id="templates--review" /> };
export const Conversation: StoryObj = { render: () => <StaticHtmlSurface id="templates--conversation" /> };
