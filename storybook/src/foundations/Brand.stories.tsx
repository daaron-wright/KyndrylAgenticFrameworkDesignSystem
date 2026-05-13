import type { Meta, StoryObj } from "@storybook/react";
import { BrandLogo } from "./BrandLogo";

const meta: Meta = {
  title: "Foundations/Brand",
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" }
};
export default meta;

export const Logo: StoryObj = { render: () => <BrandLogo /> };
