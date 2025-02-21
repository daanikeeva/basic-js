const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2 ) {
  let count = 0;
  let arr2 = s2.split('');
  for (let char of s1) {
    if (arr2.indexOf(char) >= 0) {
          count ++;
          arr2.splice(arr2.indexOf(char), 1)
    }
  }
  return count
}


module.exports = {
  getCommonCharacterCount
};
