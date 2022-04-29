const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let allDNS = []
  let arr = domains.map(el => el.split('.'))
  arr.forEach(el => {
    let str = ''
    for (let i = el.length - 1; i >= 0; i--) {
      str += `.${el[i]}`;
      allDNS.push(str);
    }
  })
  let resObg = {}
  allDNS.forEach(el => {
    if (!(el in resObg)) {
      resObg[el] = 1;
    }
    else {
      resObg[el] += 1;
    }
  })
  return resObg

}

module.exports = {
  getDNSStats
};
