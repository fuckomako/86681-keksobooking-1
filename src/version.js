require(`colors`);
const packageInfo = require(`../package.json`);

module.exports = {
  name: `version`,
  description: `Shows program version`,
  execute() {
    console.log(`v${packageInfo.version[0].red}.${packageInfo.version[2].green}.${packageInfo.version[4].blue}`);
  }
};
