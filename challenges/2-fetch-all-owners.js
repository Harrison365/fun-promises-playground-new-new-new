const request = require("../utils/request");

const fetchAllOwners = () => {
  return request("/owners").then((owners) => {
    return owners.map((owner) => owner.toLowerCase());
  });
};

module.exports = fetchAllOwners;
