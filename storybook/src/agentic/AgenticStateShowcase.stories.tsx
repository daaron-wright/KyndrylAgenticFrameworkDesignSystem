import type { Meta, StoryObj } from "@storybook/react";
import { AgenticStateShowcase } from "./AgenticStateShowcase";

const meta: Meta<typeof AgenticStateShowcase> = {
  title: "Agentic/States",
  component: AgenticStateShowcase,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Dynamic React implementation of the static agentic states reference: status bar, tool calls, human input, timeline, handoff, and state delta toasts."
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof AgenticStateShowcase>;

export const DynamicSurface: Story = {
  name: "Dynamic surface"
};
