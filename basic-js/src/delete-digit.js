const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const ARR = n.toString().split("");

  let maxValue = 0;

  for (let i = 0; i < ARR.length; i += 1) {
    const TEMP_ARR = [...ARR];
    TEMP_ARR.splice(i, 1);
    const VALUE = TEMP_ARR.join("");
    if (Number(VALUE) > maxValue) {
      maxValue = VALUE;
    }
  }

  return Number(maxValue);
}

module.exports = {
  deleteDigit,
};
