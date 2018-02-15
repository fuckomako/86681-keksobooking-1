const version = require(`./version`);
const author = require(`./author`);
const license = require(`./license`);
const description = require(`./description`);
const help = require(`./help`);

module.exports = {
  [`--${help.name}`]: help,
  [`--${license.name}`]: license,
  [`--${description.name}`]: description,
  [`--${author.name}`]: author,
  [`--${version.name}`]: version
};
