// 👇️ if using ES6 Imports uncomment line below
// import { readFileSync } from "fs";

const { readFileSync } = require("fs");

function syncReadFile(filename) {
  const contents = readFileSync(filename, "utf-8");
  const arr = contents.split(/\r?\n/);

  return arr;
}
data = syncReadFile("./input.txt");
// console.log(`Input data: ${data}`);
// console.log(`array length: ${data.length}`);
console.log(
  "********************************************************************************************************"
);

const program = () => {
  const answer = data
    .map((round) => {
      switch (round) {
        case "A X":
          return 1 + 3;
        case "A Y":
          return 2 + 6;
        case "A Z":
          return 3 + 0;
        case "B X":
          return 1 + 0;
        case "B Y":
          return 2 + 3;
        case "B Z":
          return 3 + 6;
        case "C X":
          return 1 + 6;
        case "C Y":
          return 2 + 0;
        case "C Z":
          return 3 + 3;
      }
    })
    .reduce((acc, score) => acc + score, 0);

  console.log(`Your score is: ${answer}!`);
  console.log(
    "********************************************************************************************************"
  );
};

program(data);
