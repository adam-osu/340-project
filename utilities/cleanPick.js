const { pickBy } = require("lodash");

/**
 * cleanPick
 *
 * Removes undefined properties from obj
 * and selects only properties invluding
 * in keys arg.
 *
 * @param  {object} obj
 * @param  {Array} keys
 */
const cleanPick = (obj, keys) =>
  pickBy(obj, (val, k) => val !== undefined && keys.includes(k));

module.exports = { cleanPick };
