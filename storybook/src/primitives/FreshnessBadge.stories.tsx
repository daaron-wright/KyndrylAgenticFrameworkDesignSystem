import type { Meta, StoryObj } from "@storybook/react";
import { FreshnessBadge } from "./FreshnessBadge";

const meta: Meta<typeof FreshnessBadge> = {
  title: "Primitives/FreshnessBadge",
  component: FreshnessBadge,
  tags: ["autodocs"],
  argTypes: {
    ageDays:   { control: { type: "range", min: 0, max: 60, step: 1 } },
    threshold: { control: { type: "range", min: 1, max: 30, step: 1 } },
    label:     { control: "text" }
  },
  parameters: {
    docs: {
      description: {
        component:
          "Data freshness indicator. Crosses to a warning state when `ageDays > threshold`. " +
          "Pair with a `FreshnessBadge` on every card backed by data — never approximate (\"recent\")."
      }
    }
  }
};
export default meta;
type Story = StoryObj<typeof FreshnessBadge>;

export const Today: Story = { args: { ageDays: 0, threshold: 7 } };
export const Fresh: Story = { args: { ageDays: 3, threshold: 7 } };
export const Stale: Story = { args: { ageDays: 14, threshold: 7 } };
