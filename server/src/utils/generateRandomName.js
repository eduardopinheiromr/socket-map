const {
  uniqueNamesGenerator,
  languages,
  animals,
} = require("unique-names-generator");

module.exports = generateRandomName = () =>
  uniqueNamesGenerator({ dictionaries: [languages, animals] }); // big_red_donkey
