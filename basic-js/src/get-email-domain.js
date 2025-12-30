const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const SPLIT_STRING = email.split("@");
  return SPLIT_STRING[SPLIT_STRING.length - 1];
}

module.exports = {
  getEmailDomain,
};
