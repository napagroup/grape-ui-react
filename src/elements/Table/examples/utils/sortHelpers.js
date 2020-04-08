
export const makeSanitizeString = (isCaseSensitive = false) => a => (isCaseSensitive ? String(a) : String(a).toLowerCase());
export const makeSanitizeNumber = () => a => Number(a);

const sanitizeItem = (sanitizer, a, propName) => sanitizer(propName ? a[propName] : a);

export const sortComparison = (sanitizer, isDescending = false, propName = '') => (a, b) => {
  const aValue = sanitizeItem(sanitizer, a, propName);
  const bValue = sanitizeItem(sanitizer, b, propName);
  let result = 0;
  if (aValue > bValue) {
    result = 1;
  }
  if (aValue < bValue) {
    result = -1;
  }
  return isDescending ? result * -1 : result;
};

export const sortAsString = (isDescending = false, propName = '', isCaseSensitive = false) => sortComparison(makeSanitizeString(isCaseSensitive), isDescending, propName);

export const sortAsNumber = (isDescending = false, propName = '') => sortComparison(makeSanitizeNumber(), isDescending, propName);
