const version = require(`./version`);
const author = require(`./author`);
const license = require(`./license`);
const description = require(`./description`);

const otherCommands = [version, author, license, description];

module.exports = {
  name: `help`,
  description: `Shows help`,
  execute() {
    console.log(`Это приложение ничего не делает. Доступные команды:
    \n${[this, ...otherCommands]
      .map((command) => `--${command.name}:\t\t${command.description}`)
      .join(`\n`)}
    `);
  },
};
