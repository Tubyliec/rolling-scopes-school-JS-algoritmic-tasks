const { NotImplementedError } = require("../extensions/index.js");

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
  const ERR = Error("Invalid date!");

  if (!date) return "Unable to determine the time of year!";
  if (date.hasOwnProperty("toString") || isNaN(Date.parse(date))) {
    throw ERR;
  }

  const MONTH = date.getMonth();

  if (MONTH < 2 || MONTH === 11) {
    return "winter";
  }
  if (MONTH >= 2 && MONTH < 5) {
    return "spring";
  }
  if (MONTH >= 5 && MONTH < 8) {
    return "summer";
  }
  if (MONTH >= 8 && MONTH < 11) {
    return "autumn";
  }
}

module.exports = {
  getSeason,
};
