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
  let arr = [];
  for (i = 0; i < str.length; i++) {
      if (str[i] === str[i-1]) {
          arr[arr.length-1][0] += 1
      }
      else {
          arr.push([1, str[i]])
      }
  }
  return arr.reduce((accum, el) => {
    if (el[0] === 1) {
      return accum + el[1]
    }
    else return accum+el.join('')
  }, '')
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
// console.log(encodeLine('aabbccc'))

module.exports = {
  encodeLine
};
