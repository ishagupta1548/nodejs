// Problem
// setTimeout(() => console.log("1"), 1000);

// setTimeout(() => console.log("2"), 500);

// setTimeout(() => console.log("3"), 1500);

// setTimeout(() => console.log("4"), 0);

// console.log("5");

// Problem
// async function test() {
//   try {
//     console.log("1");
//     // let data = await p2;
//     // console.log(data);

//     let data1 = await p1;
//     throw new Error("Rejected");
//     console.log(data1);
//   } catch (err) {
//     console.log(err);
//   }
// }

// test();

// Problem
// async function resolvePromise() {
//   let val = await p1;

//   console.log("Hello world");
//   console.log(val);
// }
// resolvePromise();
// async function resolvePromise() {
//   let val = await p1;
//   console.log("Hello world");
//   console.log(val);

//   // let val1 = await p1;
//   // console.log("Hello world");
//   // console.log(val1);
// }
// resolvePromise();

//Problem
// async function getUserDetail() {
//   let data = await fetch("https://api.github.com/users/ishagupta1548");
//   // console.log(data);

//   let jsonData = await data.json();

//   console.log(jsonData);
// }

// getUserDetail();

// Problem:
// let p = new Promise((resolve, reject) => {
//   resolve("Resolved");
// });

// p.then((res) => {
//   console.log(res);
//   return new Promise((resolve, reject) => {
//     reject("Rejected");
//   });
// })
//   .then((res) => {
//     console.log("Second then:", res);
//   })
//   .catch((err) => {
//     console.log("Caught:", err);
//   })
//   .finally(() => {
//     console.log("Finally");
//   });
