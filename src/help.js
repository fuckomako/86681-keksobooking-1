const version = require(`./commands/version`);
const author = require(`./commands/author`);
const license = require(`./commands/license`);
const description = require(`./commands/description`);

module.exports = {
  name: `help`,
  description: `Помощь по программе`,
  execute() {
    console.log(`Доступные команды:
--${this.name} ${this.description}
--${license.name} ${license.description}
--${version.name} ${version.description}
--${description.name} ${description.description}
--${author.name} ${author.description}
    `);
  }
};
