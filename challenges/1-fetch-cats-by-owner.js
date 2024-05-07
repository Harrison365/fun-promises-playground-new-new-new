const request = require("../utils/request");

const fetchCatsByOwner = (owner) => {
  return request(`/owners/${owner}/cats`);
};

module.exports = fetchCatsByOwner;
