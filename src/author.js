const packageInfo = require(`../package.json`);

module.exports = {
  name: `author`,
  description: `Показать автора программы`,
  execute() {
    console.log(`автор: ${packageInfo.author}`);
  }
};
