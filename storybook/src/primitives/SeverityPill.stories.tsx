import type { Meta, StoryObj } from "@storybook/react";
import { SeverityPill } from "./SeverityPill";

const meta: Meta<typeof SeverityPill> = {
  title: "Primitives/SeverityPill",
  component: SeverityPill,
  tags: ["autodocs"],
  argTypes: {
    severity: { control: "radio", options: ["CRITICAL", "HIGH", "MEDIUM", "LOW"] },
    label: { control: "text" }
  },
  parameters: { layout: "centered" }
};
export default meta;
type Story = StoryObj<typeof SeverityPill>;

export const Critical: Story = { args: { severity: "CRITICAL" } };
export const High: Story = { args: { severity: "HIGH" } };
export const Medium: Story = { args: { severity: "MEDIUM" } };
export const Low: Story = { args: { severity: "LOW" } };
export const WithLabel: Story = { args: { severity: "HIGH", label: "12 findings" } };
