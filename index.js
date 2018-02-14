const start = require(`./src/default`);
const commonCommands = require(`./src/common-commands`);

const args = process.argv.slice(2);

const currentCommand = commonCommands[args] || start;

if (currentCommand().execute(args[0]) === false) {
  process.exit(1);
}
