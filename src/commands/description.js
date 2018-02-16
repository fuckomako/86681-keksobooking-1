const colors = require(`colors`);
const packageInfo = require(`../../package.json`);

module.exports = {
  name: `description`,
  description: `Показать описание программы`,
  execute() {
    console.log(`описание: ${colors.yellow(packageInfo.description)}`);
  }
};
