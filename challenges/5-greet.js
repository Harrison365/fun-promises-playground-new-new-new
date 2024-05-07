const inquirer = require("inquirer");

const greet = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What's your name?",
      },
    ])
    .then((answers) => {
      console.log(`Hello, ${answers.name}!`);
    });
};

greet();
