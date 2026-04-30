import type { Meta, StoryObj } from "@storybook/react";
import { SpacingSurface } from "../_shared/DynamicSurfaces";

const meta: Meta<typeof SpacingSurface> = {
  title: "Foundations/Spacing & Radii",
  component: SpacingSurface,
  tags: ["autodocs"],
  argTypes: { mode: { control: "radio", options: ["scale", "radii", "elevation"] } }
};
export default meta;
type Story = StoryObj<typeof SpacingSurface>;

export const Scale: Story = { args: { mode: "scale" } };
export const Radii: Story = { args: { mode: "radii" } };
export const Elevation: Story = { args: { mode: "elevation" } };
