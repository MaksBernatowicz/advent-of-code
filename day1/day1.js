// 👇️ if using ES6 Imports uncomment line below
// import { readFileSync } from "fs";

const { readFileSync } = require("fs");

// PART 1

function syncReadFile(filename) {
  const contents = readFileSync(filename, "utf-8");
  const arr = contents.split(/\r?\n/);

  return arr;
}
data = syncReadFile("./input.txt");
console.log(`Input data: ${data}`);
console.log(`array length: ${data.length}`);
console.log(
  "********************************************************************************************************"
);

const program = () => {
  const arr = data;
  const elfs = [];
  const elf = [];
  let elfItem = [];
  let elfSum = 0;
  let elfTotal = 0;
  let mostTotal = 0;
  let i = 0;

  arr.push("");

  arr.forEach((element, idx) => {
    const calories = parseInt(element);
    elf.push(elfSum);
    elfSum += calories;
    elfItem.push(calories);

    if (isNaN(calories)) {
      i++;
      elfTotal = elf.pop();
      elfItem.pop();
      console.log(
        `Elf no. ${i} carries: [ ${elfItem} ] with ${elfTotal} total calories.`
      );
      elfs.push(elfTotal);
      elfSum = 0;

      elfItem.length = 0;
    }

    mostTotal = Math.max(...elfs);
  });

  console.log(
    "********************************************************************************************************"
  );
  console.log("Total calories carried by all Elfs");
  console.log(elfs);
  console.log(`Most total calories carried per Elf: ${mostTotal}`);

  // PART 2
  let top3Total = 0;
  elfs.sort((a, b) => b - a);
  for (i = 0; i < 3; i++) {
    top3Total += elfs[i];
  }
  console.log(`Top 3 Elfs carries: ${top3Total} calories`);
};

program(data);
