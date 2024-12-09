const fs = require("fs");

setImmediate(() => console.log("set Immediate"));

setTimeout(() => console.log("Timer expires"), 0);

Promise.resolve().then(() => {
  console.log("resolved");
})

fs.readFile("../data/sample.txt", "utf-8", () => {
  setTimeout(() => console.log("Timer expires inside fs"), 0);

  process.nextTick(() => console.log("next tick inside FS"));

  setImmediate(() => console.log("Set Immediate"));

  console.log("File read.");
});

process.nextTick(() => console.log("next tick 1"));
console.log("last line of the file");
