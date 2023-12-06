// import test from "./test";
import { getAddress, func1 } from "./test-mjs";
// const { getAddress } = require("./test-mjs");
/**
 * @param {number} a  参数aaa
 * @param {number} b  参数bbb
 */
function add2(a, b) {
  return a + b;
}
// console.log(getAddress("xx"));
/** @type {Promise<string>} */
// let obj;
let obj;
obj = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("1");
  }, 1000);
});
obj.then((data) => {
  console.log(data);
});
(async () => {
  console.log(await func1("nina"));
})();
