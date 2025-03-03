const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let res = matrix.map(el => el.map(e => 0))
  matrix.forEach((row, indexRow) => {
    row.forEach((cell, indexCell) => {
      let count = 0;
      if (indexRow === 0) {
        if (indexCell === 0) {
          matrix[indexRow][indexCell+1] === true ? count ++ : count;
          matrix[indexRow+1][indexCell] === true ? count ++ : count;
          matrix[indexRow+1][indexCell+1] === true ? count ++ : count;
        }
        else 
        if (indexCell === row.length - 1) {
          matrix[indexRow][indexCell-1] === true ? count ++ : count;
          matrix[indexRow+1][indexCell-1] === true ? count += 1 : count;
          matrix[indexRow+1][indexCell] === true ? count += 1 : count;
        }
        else {
          matrix[indexRow][indexCell+1] === true ? count += 1 : count += 0;
          matrix[indexRow][indexCell-1] === true ? count += 1 : count += 0;
          matrix[indexRow+1][indexCell-1] === true ? count += 1 : count += 0;
          matrix[indexRow+1][indexCell] === true ? count += 1 : count += 0;
          matrix[indexRow+1][indexCell+1] === true ? count += 1 : count += 0;
        }
      }
      else if (indexRow === matrix.length - 1) {
        if (indexCell === 0) {
          matrix[indexRow][indexCell+1] === true ? count += 1 : count += 0;
          matrix[indexRow-1][indexCell] === true ? count += 1 : count += 0;
          matrix[indexRow-1][indexCell+1] === true ? count += 1 : count += 0;
        }
        else 
        if (indexCell === row.length - 1) {
          matrix[indexRow][indexCell-1] === true ? count += 1 : count += 0;
          matrix[indexRow-1][indexCell-1] === true ? count += 1 : count += 0;
          matrix[indexRow-1][indexCell] === true ? count += 1 : count += 0;
        }
        else {
          matrix[indexRow][indexCell+1] === true ? count += 1 : count += 0;
          matrix[indexRow][indexCell-1] === true ? count += 1 : count += 0;
          matrix[indexRow-1][indexCell-1] === true ? count += 1 : count += 0;
          matrix[indexRow-1][indexCell] === true ? count += 1 : count += 0;
          matrix[indexRow-1][indexCell+1] === true ? count += 1 : count += 0;
        }
      }
      else {
        if (indexCell === 0) {
          matrix[indexRow][indexCell+1] === true ? count += 1 : count += 0;
          matrix[indexRow-1][indexCell] === true ? count += 1 : count += 0;
          matrix[indexRow-1][indexCell+1] === true ? count += 1 : count += 0;
          matrix[indexRow+1][indexCell] === true ? count += 1 : count += 0;
          matrix[indexRow+1][indexCell+1] === true ? count += 1 : count += 0;
        }
        else 
        if (indexCell === row.length - 1) {
          matrix[indexRow][indexCell-1] === true ? count += 1 : count += 0;
          matrix[indexRow-1][indexCell-1] === true ? count += 1 : count += 0;
          matrix[indexRow-1][indexCell] === true ? count += 1 : count += 0;
          matrix[indexRow+1][indexCell-1] === true ? count += 1 : count += 0;
          matrix[indexRow+1][indexCell] === true ? count += 1 : count += 0;
        }
        else {
          matrix[indexRow][indexCell+1] === true ? count += 1 : count += 0;
          matrix[indexRow][indexCell-1] === true ? count += 1 : count += 0;
          matrix[indexRow-1][indexCell-1] === true ? count += 1 : count += 0;
          matrix[indexRow-1][indexCell] === true ? count += 1 : count += 0;
          matrix[indexRow-1][indexCell+1] === true ? count += 1 : count += 0;
          matrix[indexRow+1][indexCell-1] === true ? count += 1 : count += 0;
          matrix[indexRow+1][indexCell] === true ? count += 1 : count += 0;
          matrix[indexRow+1][indexCell+1] === true ? count += 1 : count += 0;
        }

      }
      res[indexRow][indexCell] = count
      })
    })
    return res
}
let matr = [
  [true, false, false],
  [false, true, false],
  [false, false, false],
]
console.log(minesweeper( matr ))

module.exports = {
  minesweeper
};
