const { log } = require("console");
const fs = require("fs");

const a = 10;

setImmediate(() => console.log("set Immediate"));

Promise.resolve(() => console.log("promise"));

