const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newString = '';
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    count = 1;
    if (str[i] !== str[i + 1]) {
      newString += str[i];
    }
    else {
      while (str[i] === str[i + count]) {
        count += 1;
      }
      i = i + count - 1;
      newString += (count) + str[i];
    }
  }
  return newString;
}

module.exports = {
  encodeLine
};
