#!/usr/bin/env node

import chalk from "chalk";
import figlet from "figlet";
import gradient from "gradient-string";
import runCommands from "./commands";
import { whatTool } from "./questions";

// Fancy Gradient Stuff
const coolGradient = gradient([
  { color: "#9A8BFF", pos: 0.1 },
  { color: "#5EC3FC", pos: 1 },
]);

const welcome = () =>
  figlet(`Huddle01`, (err, data) => {
    console.log(chalk.bold(coolGradient.multiline(data)) + "\n");
  });
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

const main = async () => {
  const options = runCommands();

  welcome();

  await sleep(1000);

  console.log(
    // chalk.bold.white("Welcome to ") +
    chalk.bold(
      coolGradient.multiline("Huddle01 - Web3 Powered Video Conferencing \n")
    )
  );

  await whatTool(options);

  console.log(gradient.pastel("\nHappy Hacking!"));
};

main();
