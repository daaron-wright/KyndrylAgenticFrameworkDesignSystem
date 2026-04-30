import type { Meta, StoryObj } from "@storybook/react";
import { BrandIconsSurface, BrandLogoSurface } from "../_shared/DynamicSurfaces";

const meta: Meta = { title: "Foundations/Brand", tags: ["autodocs"] };
export default meta;

export const Logo: StoryObj = { render: () => <BrandLogoSurface /> };
export const Icons: StoryObj = { render: () => <BrandIconsSurface /> };
