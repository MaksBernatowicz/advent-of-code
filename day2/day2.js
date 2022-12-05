// 👇️ if using ES6 Imports uncomment line below
// import { readFileSync } from "fs";

const { readFileSync } = require("fs");

function syncReadFile(filename) {
  const contents = readFileSync(filename, "utf-8");
  const arr = contents.split(/\r?\n/);

  return arr;
}
data = syncReadFile("./sample.txt");
console.log(`Input data: ${data}`);
console.log(`array length: ${data.length}`);
console.log(
  "********************************************************************************************************"
);

const program = () => {
  const arr = data;
};

program(data);
