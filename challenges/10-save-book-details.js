const fs = require("fs/promises");
const inquirer = require("inquirer");
const axios = require("axios");

const bookApi = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes?q=+inauthor:",
});

let author = "";

inquirer
  .prompt([
    {
      type: "input",
      message: "What author would you like?",
      name: "author",
    },
  ])
  .then((choice) => {
    author = choice.author;
    return bookApi.get(choice.author);
  })
  .then((bookData) => {
    let titlesString = `${author} wrote:\n`;
    bookData.data.items.forEach((book) => {
      titlesString += book.volumeInfo.title + "\n";
    });

    fs.writeFile("./details.txt", titlesString);
  });
