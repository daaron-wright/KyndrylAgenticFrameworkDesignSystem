import type { Meta, StoryObj } from "@storybook/react";
import { StaticHtmlSurface } from "../_shared/StaticHtmlSurface";

const meta: Meta = {
  title: "States/Matrix",
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" }
};
export default meta;

export const AllStates: StoryObj = { render: () => <StaticHtmlSurface id="states-matrix--all" /> };
