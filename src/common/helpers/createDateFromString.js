/**
 * Create object from string with date in Star Wars format
 * @param {String} string string with date
 * @returns {Object} object with year and era properties
 */
const createDateFromString = (string) => ({
  year: +string.replace(/[^\d]/gi, ''),
  era: string.replace(/[^ABY]/gi, ''),
});

export default createDateFromString;
