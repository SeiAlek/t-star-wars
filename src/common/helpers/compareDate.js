import createDateFromString from './createDateFromString';

/**
 * Compare dates in Star War formats
 * @param {String} a first date in Star Wars format
 * @param {String} b second date in Star Wars format
 * @returns {Boolean} it's 1 if a > b, -1 if a < b, 0 if a = b
 */
const compareDate = (a, b) => {
  const firstDate = createDateFromString(a);
  const secondDate = createDateFromString(b);

  if (firstDate.era === secondDate.era && firstDate.year === secondDate.year) {
    return 0;
  }

  if (firstDate.era === 'BBY' && secondDate.era === 'ABY') {
    return -1;
  }

  if (firstDate.era === 'BBY' && secondDate.era === 'BBY') {
    if (firstDate.year > secondDate.year) {
      return -1;
    }

    return 1;
  }

  if (firstDate.era === 'ABY' && secondDate.era === 'ABY') {
    if (firstDate.year > secondDate.year) {
      return 1;
    }

    return -1;
  }

  return null;
};

export default compareDate;
