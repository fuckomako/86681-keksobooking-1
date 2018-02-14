const version = require(`./version`);
const author = require(`./author`);
const license = require(`./license`);
const description = require(`./description`);
const help = require(`./help`);

module.exports = {
  [`--${help.name}`]: () => help.execute(),
  [`--${license.name}`]: () => license.execute(),
  [`--${description.name}`]: () => description.execute(),
  [`--${author.name}`]: () => author.execute(),
  [`--${version.name}`]: () => version.execute()
};
