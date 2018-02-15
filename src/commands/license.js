const colors = require(`colors`);
const packageInfo = require(`../../package.json`);

module.exports = {
  name: `license`,
  description: `Показать лицензию программы`,
  execute() {
    console.log(`лицензия: ${colors.bgCyan(packageInfo.license)}`);
  }
};
