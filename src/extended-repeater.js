const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  options = options || {};
  options.repeatTimes = options.repeatTimes || 1;
  options.separator = options.separator || '+';
  options.addition = options.addition === undefined ? '' : options.addition;
  options.additionRepeatTimes = options.additionRepeatTimes || 1;
  options.additionSeparator = options.additionSeparator || '|';

  let addition = '';
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    if (i + 1 === options.additionRepeatTimes) {
      addition += options.addition;
    } else {
      addition += options.addition + options.additionSeparator;
    }
  }

  let result = '';
  for (let i = 0; i < options.repeatTimes; i++) {
    if (i + 1 === options.repeatTimes) {
      result += str + addition;
    } else {
      result += str + addition + options.separator;
    }
  }

  return result;
}

module.exports = {
  repeater
};
