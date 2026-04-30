import type { Meta, StoryObj } from "@storybook/react";
import { StaticHtmlSurface } from "../_shared/StaticHtmlSurface";

interface SeverityArgs {
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  label?: string;
}

const meta: Meta<SeverityArgs> = {
  title: "Primitives/SeverityPill",
  tags: ["autodocs"],
  argTypes: {
    severity: { control: "radio", options: ["CRITICAL", "HIGH", "MEDIUM", "LOW"] },
    label: { control: "text" }
  },
  parameters: { layout: "fullscreen" }
};
export default meta;
type Story = StoryObj<SeverityArgs>;

const renderSingle = (args: SeverityArgs) => <StaticHtmlSurface id="primitives-severitypill--default" args={args} />;

export const Critical: Story = { args: { severity: "CRITICAL" }, render: renderSingle };
export const High: Story = { args: { severity: "HIGH" }, render: renderSingle };
export const Medium: Story = { args: { severity: "MEDIUM" }, render: renderSingle };
export const Low: Story = { args: { severity: "LOW" }, render: renderSingle };
export const WithLabel: Story = { args: { severity: "HIGH", label: "12 findings" }, render: renderSingle };
export const DynamicSurface: Story = {
  render: () => <StaticHtmlSurface id="primitives-severitypill--default" args={{ severity: "HIGH", label: "12 findings" }} />
};
