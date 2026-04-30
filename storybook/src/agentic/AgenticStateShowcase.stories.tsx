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
        component: "Source-derived React rendering of the correct static agentic states HTML, preserving the exact static state matrix and interactions."
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof AgenticStateShowcase>;

export const DynamicSurface: Story = {
  name: "Dynamic surface"
};
