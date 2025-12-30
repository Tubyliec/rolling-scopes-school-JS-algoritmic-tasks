const { NotImplementedError } = require("../extensions/index.js");

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
  const DNS_STATS = {};

  domains.forEach((domain) => {
    const DOMAIN_ARRAY = domain.split(".").reverse();
    let key = "";
    DOMAIN_ARRAY.forEach((part) => {
      key += "." + part;
      if (!DNS_STATS[key]) {
        DNS_STATS[key] = 1;
      } else {
        DNS_STATS[key] += 1;
      }
    });
  });
  return DNS_STATS;
}

module.exports = {
  getDNSStats,
};
