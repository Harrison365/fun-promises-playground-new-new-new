const fetchCatsByOwner = require("./1-fetch-cats-by-owner");
const fetchAllOwners = require("./2-fetch-all-owners");

const fetchAllCats = () => {
  return fetchAllOwners()
    .then((owners) => {
      return Promise.all(owners.map((owner) => fetchCatsByOwner(owner)));
    })
    .then((cats) => {
      return cats.flat().sort();
    });
};

module.exports = fetchAllCats;
