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
  let newArr = arr.filter(el => el>=0).sort((a,b) => a - b);
  let i = 0;
  let resArr = [];
  arr.forEach((el, ind) => {
    if (el <= 0) {
      resArr.push(-1);
    }
    else {
      resArr.push(newArr[i]);
      i++
    }
  })
  return resArr
}
// console.log(sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]))
module.exports = {
  sortByHeight
};
