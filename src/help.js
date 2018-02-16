const colors = require(`colors/safe`);
const commonCommands = require(`./commands/common-commands`);

module.exports = {
  name: `help`,
  description: `Помощь по программе`,
  execute() {
    const commands = [this, ...commonCommands];
    console.log(`Доступные команды:
${commands.map((it) => `--${colors.grey(it.name.padEnd(12))} ${colors.green(it.description)}`).join(`\n`)}`);
  }
};
