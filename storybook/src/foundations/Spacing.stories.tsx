import type { Meta, StoryObj } from "@storybook/react";
import { SpacingScale } from "./SpacingScale";
import { SpacingRadii } from "./SpacingRadii";
import { SpacingElevation } from "./SpacingElevation";

const meta: Meta = {
  title: "Foundations/Spacing",
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" }
};
export default meta;

export const Scale: StoryObj = { render: () => <SpacingScale /> };
export const Radii: StoryObj = { render: () => <SpacingRadii /> };
export const Elevation: StoryObj = { render: () => <SpacingElevation /> };
