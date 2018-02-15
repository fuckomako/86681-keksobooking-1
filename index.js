const start = require(`./src/default`);
const commonCommands = require(`./src/commands/common-commands`);
const help = require(`./src/help`);

const args = process.argv.slice(2);

const currentCommand = [...commonCommands, help].find((it) => `--${it.name}` === args[0]) || start;

if (currentCommand.execute(args[0]) === false) {
  process.exit(1);
}
