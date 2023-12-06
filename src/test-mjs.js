/**
 *
 * @param {string} str
 * @returns
 */
export const getAddress = (str) => {
  return str;
};
/**
 * @template T
 * @param {Array<T>} arr
 * @returns {T}
 */
export function getFirst(arr) {
  return arr[0];
}
/**
 *@template T
 * @param {T} data
 * @param {number} delay
 * @return {Promise<T>}
 */
async function sleep(delay, data) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(data);
    }, delay);
  });
}
/**
 * @template T
 * @typedef {(param:T)=>Promise<T>} myFunc
 *
 */
/**
 *
 * @type {myFunc<string>}
 */
export const func1 = async (p) => {
  const res = await sleep(1000, p);
  return res;
};
