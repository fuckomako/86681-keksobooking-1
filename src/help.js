<<<<<<< HEAD
require(`colors`);
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
      .map((command) => `--${command.name.grey}:\t\t-${command.description.green}`)
      .join(`\n`)}
    `);
  },
=======
const commonCommands = require(`./commands/common-commands`);

module.exports = {
  name: `help`,
  description: `Помощь по программе`,
  execute() {
    const commands = [this, ...commonCommands];
    console.log(`Доступные команды:
${commands.map((it) => `--${it.name.padEnd(12)} ${it.description}`).join(`\n`)}`);
  }
>>>>>>> origin/module2-task2
};
