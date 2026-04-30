import type { Meta, StoryObj } from "@storybook/react";
import { StatesMatrix } from "../_shared/DynamicSurfaces";

const meta: Meta<typeof StatesMatrix> = {
  title: "States/Matrix",
  component: StatesMatrix,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" }
};
export default meta;

export const AllStates: StoryObj<typeof StatesMatrix> = {};
