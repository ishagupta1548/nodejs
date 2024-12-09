/*
 * Task 1: Create a file with path: /Node/data/sample.txt and create a function which reads the content of the file.
 *
 * Task 2: Create an route which reads the content of the file
 */
const fs = require("fs");
const path = require("path");
const http = require("http");

// const dataDir = path.join(__dirname, "data");
// console.log(dataDir);
const PORT = 3000;

const server = http.createServer((req, res) => {});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
