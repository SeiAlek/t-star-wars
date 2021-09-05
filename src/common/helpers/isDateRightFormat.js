import createDateFromString from './createDateFromString';

/**
 * Check if incoming string has right date Star Wars format
 * @param {String} string date in SW format
 * @returns {Boolean}
 */
const isDateRightFormat = (string) => {
  const date = createDateFromString(string);

  if (date.era !== 'BBY' && date.era !== 'ABY') {
    return false;
  }

  if (date.year < 0) {
    return false;
  }

  return true;
};

export default isDateRightFormat;
