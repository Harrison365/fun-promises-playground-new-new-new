const fs = require("fs/promises");
const inquirer = require("inquirer");

const globalArr = [];
let globalChoice = "";

fs.readFile(`${__dirname}/vip-list.txt`, "utf8")
  .then((contents) => {
    return contents.split("\n");
  })
  .then((arr) => {
    arr.forEach((person) => {
      globalArr.push(person);
    });
    return inquirer.prompt([
      {
        type: "list",
        name: "selection",
        message: "choose person to remove from VIP",
        choices: arr,
      },
    ]);
  })
  .then((answer) => {
    globalChoice = answer.selection;
    const shorterArr = globalArr.filter((person) => {
      return person !== answer.selection;
    });
    const shorterStr = shorterArr.join("\n");
    return fs.writeFile(`${__dirname}/vip-list.txt`, shorterStr, "utf8");
  })
  .then(() => {
    console.log(`${globalChoice} was successfully deleted from vip-list.txt`);
  })
  .catch((err) => {
    console.log(err);
  });
