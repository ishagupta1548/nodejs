const fs = require("fs");

const a = 10;

setImmediate(() => console.log("set Immediate"));

Promise.resolve(() => {
  console.log("promise");
});

fs.readFile("../data/sample.txt", "utf-8", () => {
  console.log("File read.");
});

process.nextTick(() => console.log("process.nexttick"));
function printA() {
  console.log("value of a = ", a);
}
printA();
console.log("last line of the file");
