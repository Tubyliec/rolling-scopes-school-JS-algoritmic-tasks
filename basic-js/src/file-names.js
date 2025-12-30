const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const RENAMED_ARRAY = [];
  const ITEMS_COUNT = {};

  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (ITEMS_COUNT[name]) {
      const RENAMED = `${name}(${ITEMS_COUNT[name]})`;
      RENAMED_ARRAY.push(RENAMED);
      ITEMS_COUNT[RENAMED] = 1;
      ITEMS_COUNT[name] += 1;
    } else {
      RENAMED_ARRAY.push(name);
      ITEMS_COUNT[name] = 1;
    }
  }

  return RENAMED_ARRAY;
}

module.exports = {
  renameFiles,
};
