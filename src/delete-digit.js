const { NotImplementedError } = require('../extensions/index.js');

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
  const nString = n.toString();
  let maxNumber = 0;

  for (let i = 0; i < nString.length; i++) {
    const number = parseInt(nString.slice(0, i) + nString.slice(i + 1), 10);
    maxNumber = Math.max(maxNumber, number);
  }

  return maxNumber;
}

module.exports = {
  deleteDigit
};
