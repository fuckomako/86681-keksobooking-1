const commonCommands = require(`./commands/common-commands`);

module.exports = {
  name: `help`,
  description: `Помощь по программе`,
  execute() {
    const commands = [this, ...commonCommands];
    console.log(`Доступные команды:
${commands.map((it) => `--${it.name.padEnd(12)} ${it.description}`).join(`\n`)}`);
  }
};
