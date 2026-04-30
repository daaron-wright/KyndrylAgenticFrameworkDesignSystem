import type { Meta, StoryObj } from "@storybook/react";
import { ConfidenceBadge } from "./ConfidenceBadge";
import "../_shared/dynamic.css";

const meta: Meta<typeof ConfidenceBadge> = {
  title: "Primitives/ConfidenceBadge",
  component: ConfidenceBadge,
  tags: ["autodocs"],
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100, step: 1 } },
    role: { control: "radio", options: ["full", "review", "readonly"] },
    showCheck: { control: "boolean" }
  },
  parameters: {
    docs: {
      description: {
        component: "Dynamic confidence badge with static-parity visual states, agentic actions, confirm flow, and toast feedback."
      }
    }
  }
};
export default meta;
type Story = StoryObj<typeof ConfidenceBadge>;

export const Default: Story = { args: { value: 92, role: "full" } };
export const Low: Story = { args: { value: 58, role: "full", showCheck: false } };
export const Readonly: Story = { args: { value: 92, role: "readonly", showCheck: false } };
export const NoScore: Story = { args: { value: null, role: "full", showCheck: false } };

export const DynamicSurface: Story = {
  name: "Dynamic surface",
  render: () => (
    <div className="kds-story-surface is-white">
      <h2 className="kds-title" style={{ marginBottom: 18 }}>ConfidenceBadge</h2>
      <div className="kds-surface-card">
        <div className="kds-frame">
          <div className="kds-row kds-confidence-row">
            {[
              { value: 98, note: "value >= 0.9 - high confidence", showCheck: true },
              { value: 82, note: "value 0.7-0.9", showCheck: false },
              { value: 64, note: "value 0.5-0.7 - caution", showCheck: false },
              { value: 41, note: "value < 0.5 - advisory", showCheck: false },
              { value: null, note: "value null", showCheck: false }
            ].map((item) => (
              <div className="kds-cell" key={item.note}>
                <ConfidenceBadge value={item.value} showCheck={item.showCheck} />
                <span className="kds-mono">{item.note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
};
