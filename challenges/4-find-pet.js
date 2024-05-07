const fs = require("fs/promises");

const findPet = (name) => {
  return fs
    .readFile(`./data/${name}.json`, "utf8")
    .then((data) => {
      return JSON.parse(data);
    })
    .catch(() => {
      return `soz couldnt find ${name} :(`;
    });
};

module.exports = findPet;
