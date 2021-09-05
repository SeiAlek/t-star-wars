/**
 * Format string to date in Star Wars type
 * @param {String} string
 * @returns {String}
 */
const formatYear = (string) => {
  const uppercase = string.toUpperCase();
  const year = uppercase.replace(/[^\d]/gi, '');
  const era = uppercase.replace(/[^ABY]/gi, '');

  return `${year}${era ? ` ${era}` : ''}`;
};

export default formatYear;
