/**
 * Create object from array
 * @param {Array} array
 * @param {Name} name the name which will be key in the creating object
 * @returns {Object}
 */
const createDataMap = (array, name) => array.reduce((acc, item) => ({
  ...acc,
  [`${item[name]}`]: item,
}), {});

export default createDataMap;
