/**
 * Get page from search params string with url
 * @param {String} urlString
 * @returns {Number|null}
 */
const getPageNumber = (urlString) => {
  if (!urlString) {
    return null;
  }

  const url = new URL(urlString);
  const params = new URLSearchParams(url.search);

  return params.get('page') || null;
};

export default getPageNumber;
