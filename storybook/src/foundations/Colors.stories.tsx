import type { Meta, StoryObj } from "@storybook/react";
import { ColorSurface } from "../_shared/DynamicSurfaces";

const meta: Meta<typeof ColorSurface> = {
  title: "Foundations/Colors",
  component: ColorSurface,
  tags: ["autodocs"],
  argTypes: { palette: { control: "radio", options: ["brand", "neutrals", "severity", "status", "chart"] } }
};
export default meta;
type Story = StoryObj<typeof ColorSurface>;

export const Brand: Story = { args: { palette: "brand" } };
export const Neutrals: Story = { args: { palette: "neutrals" } };
export const Severity: Story = { args: { palette: "severity" } };
export const StatusRAG: Story = { args: { palette: "status" } };
export const Chart: Story = { args: { palette: "chart" } };
