const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

//  --discard-next исключает следующий за ней элемент исходного массива из преобразованного массива.
//  --discard-prev исключает предшествующий ей элемент исходного массива из преобразованного массива.
//  --double-next дублирует следующий за ней элемент исходного массива в преобразованном массиве.
//  --double-prev дублирует предшествующий ей элемент исходного массива в преобразованном массиве.
function transform(arr) {
  let newArr = [];
    if (Array.isArray(arr)) {
    arr.forEach((el, ind) => {
      if (ind === 0 && (el === '--discard-prev' || (el === '--double-prev'))) {
        newArr.push('');
      }
      else if ((el === '--double-prev' || el === '--discard-prev') & arr[ind-2] === '--discard-next') {
        newArr.push('');
      }

      else if (el === '--discard-prev') {
        newArr.pop();
        newArr.push('');
      }
      else if (el === '--double-prev') {
        newArr.push(arr[ind - 1]);
      }
      else if (ind === (arr.length - 1) && (el === '--discard-next' || el === '--double-next')) {
        newArr.push('');
      }
      else if (el === '--double-next') {
        newArr.push(arr[ind + 1]);
        
      }
      else if (el === '--discard-next') {
        newArr.push('');
      }
      else if (arr[ind-1] === '--discard-next') {
      }
      
      else {
        newArr.push(el);
      }
    })
    return newArr.filter(el => el !== '')
  }
  else {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
}

module.exports = {
  transform
};
