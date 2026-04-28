import type { Meta, StoryObj } from "@storybook/react";
import { HumanInputRequest } from "./HumanInputRequest";

const meta: Meta<typeof HumanInputRequest> = { title: "Agentic/HumanInputRequest", component: HumanInputRequest, tags: ["autodocs"] };
export default meta;

export const TieBreak: StoryObj<typeof HumanInputRequest> = {
  args: {
    question: "Two owners are equally likely for bINC4429181. Which should I attribute the stale record to?",
    options: ["Aaron Wright (Platform)", "Priya Shah (Network)", "Skip and flag for review"]
  }
};
