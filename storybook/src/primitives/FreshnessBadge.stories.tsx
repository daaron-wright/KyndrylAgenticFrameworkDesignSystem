import type { Meta, StoryObj } from "@storybook/react";
import { FreshnessBadge } from "./FreshnessBadge";
import "../_shared/dynamic.css";

const meta: Meta<typeof FreshnessBadge> = {
  title: "Primitives/FreshnessBadge",
  component: FreshnessBadge,
  tags: ["autodocs"],
  argTypes: {
    ageDays: { control: { type: "range", min: 0, max: 60, step: 1 } },
    threshold: { control: { type: "range", min: 1, max: 30, step: 1 } },
    label: { control: "text" }
  }
};
export default meta;
type Story = StoryObj<typeof FreshnessBadge>;

export const Today: Story = { args: { ageDays: 0, threshold: 7 } };
export const Fresh: Story = { args: { ageDays: 3, threshold: 7 } };
export const Stale: Story = { args: { ageDays: 34, threshold: 7 } };
export const DynamicSurface: Story = {
  render: () => (
    <div className="kds-story-surface is-white">
      <div className="kds-surface-card">
        <div className="kds-row">
          <div className="kds-primitive-cell"><FreshnessBadge ageDays={0} /><span className="kds-mono">fresh - updated 12 min ago</span></div>
          <div className="kds-primitive-cell"><FreshnessBadge ageDays={3} /><span className="kds-mono">within threshold</span></div>
          <div className="kds-primitive-cell"><FreshnessBadge ageDays={34} /><span className="kds-mono">stale - owner action available</span></div>
        </div>
      </div>
    </div>
  )
};
