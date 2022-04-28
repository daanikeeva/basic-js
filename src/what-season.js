const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const seasons = ['winter','winter','spring','spring','spring','summer','summer','summer','autumn','autumn','autumn','winter']
  if (date === undefined) {
    return 'Unable to determine the time of year!'
  }
  else if (isNaN(Date.parse(date)) || Object.getOwnPropertyNames(date).length > 0 && arguments.length > 0) {
    throw new Error('Invalid date!');
  }
  else {
    return seasons[date.getMonth()]
  }
  // remove line with error and write your code here
}
// console.log(getSeason())


module.exports = {
  getSeason
};

