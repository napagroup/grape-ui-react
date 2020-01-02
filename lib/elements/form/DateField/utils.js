"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatForSelectedDay = exports.formatForOnChange = exports.dayPickerInputClassNames = undefined;

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var dayPickerInputClassNames = exports.dayPickerInputClassNames = _constants.dayPickerClassTypes.reduce(function (dayPickerClassNames, classType) {
  return _objectSpread({}, dayPickerClassNames, _defineProperty({}, classType, "grape-ui-day-picker-".concat(classType)));
}, {});
/**
 *  Converts the Date from react-day-picker to a string value based on the valueFormat for saving to form controls, etc.
*/


var formatForOnChange = exports.formatForOnChange = function formatForOnChange(value, format, locale) {
  if (value && value instanceof Date) {
    return (0, _moment2["default"])("".concat(value.getMonth() + 1, "/").concat(value.getDate(), "/").concat(value.getFullYear(), "}"), _constants.DEFAULT_DATE_FORMAT).local().locale(locale || 'en').format(format || _constants.DEFAULT_DATE_VALUE_FORMAT);
  }

  return '';
};
/**
 *  Converts the Date from react-day-picker to a string value based on the formate for display on the input controls, etc.
 *  Not Used for now as we are using the default parseDate and formatDate
*/


var formatForSelectedDay = exports.formatForSelectedDay = function formatForSelectedDay(value, valueFormat, format, locale) {
  if (value && typeof value === 'string') {
    var result = (0, _moment2["default"])(value, valueFormat).local().locale(locale || 'en').format(format);
    return result === 'Invalid date' ? undefined : result;
  }

  return undefined;
};