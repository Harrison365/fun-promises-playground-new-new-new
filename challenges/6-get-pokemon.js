//npm install axios@1.1.3
const axios = require("axios");

const getPokemon = () => {
  return axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
    console.log(response.data.results);
  });
};

getPokemon();
