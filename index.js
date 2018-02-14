const start = require(`./src/default`);
const version = require(`./src/version`);
const help = require(`./src/help`);
const author = require(`./src/author`);
const license = require(`./src/license`);
const description = require(`./src/description`);

const args = process.argv.slice(2);

const commands = [version, help, author, license, description];

const currentCommand = commands.find((command)=>`--${command.name}` === args[0]) || start;

if (currentCommand.execute(args[0]) === false) {
  process.exit(1);
}
