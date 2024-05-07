const inquirer = require("inquirer");
const axios = require("axios");

const pokeApi = axios.create({ baseURL: "https://pokeapi.co/api/v2/" });

inquirer
  .prompt([
    {
      type: "input",
      message: "I choose who? (give a number)",
      name: "user_pokemon_id",
    },
  ])
  .then((response) => {
    return response.user_pokemon_id;
  })
  .then((id) => {
    return pokeApi.get(`pokemon/${id}`);
  })
  .then((pokemonInfo) => {
    console.log(pokemonInfo.data.name);
  })
  .catch((err) => {
    console.log("Soz hun, try another number, loser");
  });
