/**
 * Convert dates in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format
 * to Brazil (dd/mm/yyyy) format.
 *
 * Example:
 * ```
 *  convertIsoToBrLocale('2019-11-08T11:00:00Z') -> '08/11/2019'
 * ```
 *
 * @param {string} isoDate the date to be converted
 * @returns {string} the converted date
 */
function convertIsoToBrLocale(isoDate) {
  const date = isoDate.split('T')[0];

  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);

  return `${day}/${month}/${year}`;
}

export default {
  convertIsoToBrLocale,
};
