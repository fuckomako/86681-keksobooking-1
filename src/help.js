const version = require(`./version`);
const author = require(`./author`);
const license = require(`./license`);
const description = require(`./description`);

module.exports = {
  name: `help`,
  description: `Помошь по программе`,
  execute() {
    console.log(`Доступные команды:
--${this.name}\t ${this.description}
--${license.name}\t ${license.description}
 --${version.name}\t ${version.description}
 --${description.name}\t ${description.description}
--${author.name}\t ${author.description}
    `);
  }
};
