const fs = require("fs/promises");

const findPet = (name) => {
  console.log(__dirname, "HEHEHEHEHE");
  return fs
    .readFile(`${__dirname}/../data/${name}.json`, "utf8")
    .then((data) => {
      return JSON.parse(data);
    })
    .catch(() => {
      return `soz couldnt find ${name} :(`;
    });
};

module.exports = findPet;
