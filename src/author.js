const packageInfo = require(`../package.json`);

module.exports = {
  name: `author`,
  description: `Show programm author`,
  execute() {
    console.log(`автор: ${packageInfo.author}`);
  }
};
