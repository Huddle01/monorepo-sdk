import { Command } from "commander";

const runCommands = () => {
  const program = new Command();
  program
    .option("-n, --name <name>", "Name of your project")
    .option("-ts, --typescript", "Use typescript for project")
    .option("-t, --tool <type>", "Types of tools: iframe | client");

  program.parse(process.argv);

  const options = program.opts();

  return options;
};

export default runCommands;
