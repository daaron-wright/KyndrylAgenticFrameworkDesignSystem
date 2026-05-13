import type { Meta, StoryObj } from "@storybook/react";
import { StatesMatrix } from "./StatesMatrix";

const meta: Meta = { title: "States/Matrix", tags: ["autodocs"], parameters: { layout: "fullscreen" } };
export default meta;

export const AllStates: StoryObj = { render: () => <StatesMatrix /> };
