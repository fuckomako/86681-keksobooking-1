const version = require(`./version`);
const author = require(`./author`);
const license = require(`./license`);
const description = require(`./description`);

module.exports = {
  name: `help`,
  description: `Помощь по программе`,
  execute() {
    console.log(`Доступные команды:
--${this.name.padEnd(12)} ${this.description}
--${license.name.padEnd(12)} ${license.description}
--${version.name.padEnd(12)} ${version.description}
--${description.name.padEnd(12)} ${description.description}
--${author.name.padEnd(12)} ${author.description}
    `);
  }
};
