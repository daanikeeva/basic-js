const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  return arr.sort((a,b) => {
    console.log('a:', a, 'b:', b,)
    if (a < 0 || b < 0) {
      return 0
    }
    else {
      return a - b
    }
  })
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))
/*[   -1, 150, 160, 170,  190,  -1,  -1, 180 ]*/
module.exports = {
  sortByHeight
};
