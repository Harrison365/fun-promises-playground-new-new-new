const fs = require("fs/promises");

//WITOUT PROMISE.ALL()
// let strsecret = "";
// let strsuper = "";

// fs.readFile("./secret-message.txt", "utf-8")
//   .then((result) => {
//     strsecret = result;
//     return fs.readFile("./super-secret-message.txt", "utf-8");
//   })
//   .then((result2) => {
//     strsuper = result2;
//     if (strsecret.length > strsuper.length) {
//       console.log(
//         `secret-message.txt is longer by ${
//           strsecret.length - strsuper.length
//         } characters`
//       );
//     } else if (strsecret.length < strsuper.length) {
//       console.log(
//         `super-secret-message.txt is longer by ${
//           strsuper.length - strsecret.length
//         } characters`
//       );
//     } else {
//       console.log("them files be the same length");
//     }
//     let joinedStrings = strsecret + " " + strsuper;
//     return fs.writeFile("./joined-message.txt", joinedStrings, "utf8");
//   })
//   .then(() => {
//     console.log("it is written");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// vvvvvvvv USING PROMISE.ALL() vvvvvvvv (no need for global variables as we can do multiple async funcs at once)

let promises = [
  fs.readFile(`${__dirname}/secret-message.txt`, "utf-8"),
  fs.readFile(`${__dirname}/super-secret-message.txt`, "utf-8"),
];

Promise.all(promises)
  .then((resultArr) => {
    console.log(resultArr[0].length, resultArr[1].length);
    if (resultArr[0].length > resultArr[1].length) {
      console.log(
        `secret-message.txt is longer by ${
          resultArr[0].length - resultArr[1].length
        } characters`
      );
    } else if (resultArr[0].length < resultArr[1].length) {
      console.log(
        `super-secret-message.txt is longer by ${
          resultArr[1].length - resultArr[0].length
        } characters`
      );
    } else {
      console.log("both messages are the same length");
    }

    let joinedStrings = resultArr[0] + " " + resultArr[1];
    return fs.writeFile(
      `${__dirname}/joined-message-promise-all.txt`,
      joinedStrings,
      "utf8"
    );
  })
  .then(() => {
    console.log("written using promise.all()");
  })
  .catch((err) => {
    console.log(err);
  });
