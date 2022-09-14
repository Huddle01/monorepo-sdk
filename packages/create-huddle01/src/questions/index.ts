import { OptionValues } from "commander";
import inquirer from "inquirer";
import { downloadRepo } from "../repos";
import { ERepo, ETool } from "../types";

interface IRepos {
  [key: string]: string;
}

const repos: IRepos = {
  iframe: "iframe-example-app",
  client: "sdk-vite-example-app",
};

const prompts = [
  {
    name: "name",
    type: "input",
    message: "What is the name of your project?",
    default() {
      return "huddle01-example-app";
    },
  },
  {
    name: "tool",
    type: "list",
    message: "What Huddle01 tool do you wanna use?",
    choices: ["iframe", "client"],
    default() {
      return "iframe";
    },
  },
  {
    name: "typescript",
    type: "confirm",
    message: "Do you wanna use typescript?",
    default() {
      return true;
    },
  },
];

export const whatTool = async (options: OptionValues) => {
  const isToolValid = ["iframe", "client"].includes(options.tool);

  const optionKeys = Object.keys(options).filter(
    (key) => !(key === "tool" && !isToolValid)
  );

  const answers = await inquirer.prompt(
    prompts.filter(({ name }) => !optionKeys.includes(name))
  );

  await downloadRepo(
    repos[isToolValid ? options.tool : answers.tool],
    options.name || answers.name,
    options.typescript || answers.typescript
  );

  console.log("Your project has been created successfully!");
};
