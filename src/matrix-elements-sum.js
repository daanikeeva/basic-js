const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  for (let row = 0; row < (matrix.length); row++) {

    matrix[row].forEach((el,index) => {
      if (row === 0 || matrix[row-1][index] !== 0) {
        sum += el
      }
    })
  }
  return sum
}
module.exports = {
  getMatrixElementsSum
};
