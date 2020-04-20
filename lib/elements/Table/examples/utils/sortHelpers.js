import "core-js/modules/es.number.constructor";
export var makeSanitizeString = function makeSanitizeString() {
  var isCaseSensitive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return function (a) {
    return isCaseSensitive ? String(a) : String(a).toLowerCase();
  };
};
export var makeSanitizeNumber = function makeSanitizeNumber() {
  return function (a) {
    return Number(a);
  };
};

var sanitizeItem = function sanitizeItem(sanitizer, a, propName) {
  return sanitizer(propName ? a[propName] : a);
};

export var sortComparison = function sortComparison(sanitizer) {
  var isDescending = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var propName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return function (a, b) {
    var aValue = sanitizeItem(sanitizer, a, propName);
    var bValue = sanitizeItem(sanitizer, b, propName);
    var result = 0;

    if (aValue > bValue) {
      result = 1;
    }

    if (aValue < bValue) {
      result = -1;
    }

    return isDescending ? result * -1 : result;
  };
};
export var sortAsString = function sortAsString() {
  var isDescending = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var propName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var isCaseSensitive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return sortComparison(makeSanitizeString(isCaseSensitive), isDescending, propName);
};
export var sortAsNumber = function sortAsNumber() {
  var isDescending = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var propName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return sortComparison(makeSanitizeNumber(), isDescending, propName);
};