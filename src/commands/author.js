const colors = require(`colors`);
const packageInfo = require(`../../package.json`);

module.exports = {
  name: `author`,
  description: `Показать автора программы`,
  execute() {
    console.log(`Автор модуля ${colors.red(packageInfo.author)}.`);
  }
};
