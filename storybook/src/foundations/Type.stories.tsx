import type { Meta, StoryObj } from "@storybook/react";
import { TypeSurface } from "../_shared/DynamicSurfaces";

const meta: Meta<typeof TypeSurface> = {
  title: "Foundations/Type",
  component: TypeSurface,
  tags: ["autodocs"],
  argTypes: { mode: { control: "radio", options: ["display", "body"] } }
};
export default meta;
type Story = StoryObj<typeof TypeSurface>;

export const Display: Story = { args: { mode: "display" } };
export const Body: Story = { args: { mode: "body" } };
