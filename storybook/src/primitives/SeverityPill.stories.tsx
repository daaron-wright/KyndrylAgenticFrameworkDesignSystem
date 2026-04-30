import type { Meta, StoryObj } from "@storybook/react";
import { HtmlEmbed } from "../_shared/HtmlEmbed";

const meta: Meta<typeof HtmlEmbed> = {
  title: "Primitives/SeverityPill",
  component: HtmlEmbed,
  tags: ["autodocs"],
  argTypes: {
    severity: { control: "radio", options: ["CRITICAL", "HIGH", "MEDIUM", "LOW"] },
    label:    { control: "text" }
  },
  parameters: {
    docs: {
      description: {
        component:
          "Canonical triage taxonomy. The taxonomy is fixed: CRITICAL · HIGH · MEDIUM · LOW. " +
          "Severity is never color-only — the value is always paired with the label."
      }
    }
  }
};
export default meta;

type Story = StoryObj<typeof HtmlEmbed>;

export const Critical: Story = { args: { src: "/storybook-static/stories/primitive-severity-pill.html", height: 220, severity: "CRITICAL" } };
export const High: Story     = { args: { src: "/storybook-static/stories/primitive-severity-pill.html", height: 220, severity: "HIGH" } };
export const Medium: Story   = { args: { src: "/storybook-static/stories/primitive-severity-pill.html", height: 220, severity: "MEDIUM" } };
export const Low: Story      = { args: { src: "/storybook-static/stories/primitive-severity-pill.html", height: 220, severity: "LOW" } };
export const WithLabel: Story = { args: { src: "/storybook-static/stories/primitive-severity-pill.html", height: 220, severity: "HIGH", label: "12 findings" } };
