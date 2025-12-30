const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const MEMBERS_NAMES = [];
  if (typeof members !== "object" || members === null) {
    return false;
  }
  for (let i = 0; i < members.length; i += 1) {
    if (typeof members[i] === "string") {
      MEMBERS_NAMES.push(members[i]);
    }
  }
  return MEMBERS_NAMES.map((item) => item.replace(/\s+/g, "")[0])
    .sort((a, b) => a.localeCompare(b))
    .join("")
    .toUpperCase();
}

module.exports = {
  createDreamTeam,
};
