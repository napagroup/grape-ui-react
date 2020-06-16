"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.formatForSelectedDay = exports.formatForOnChange = exports.dayPickerInputClassNames = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _reduce = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/reduce"));

var _moment = _interopRequireDefault(require("moment"));

var _constants = require("./constants");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context3; (0, _forEach.default)(_context3 = ownKeys(Object(source), true)).call(_context3, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context4; (0, _forEach.default)(_context4 = ownKeys(Object(source))).call(_context4, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

const dayPickerInputClassNames = (0, _reduce.default)(_constants.dayPickerClassTypes).call(_constants.dayPickerClassTypes, (dayPickerClassNames, classType) => _objectSpread({}, dayPickerClassNames, {
  [classType]: "grape-ui-day-picker-".concat(classType)
}), {});
/**
 *  Converts the Date from react-day-picker to a string value based on the valueFormat for saving to form controls, etc.
*/

exports.dayPickerInputClassNames = dayPickerInputClassNames;

const formatForOnChange = (value, format, locale) => {
  if (value && value instanceof Date) {
    var _context, _context2;

    return (0, _moment.default)((0, _concat.default)(_context = (0, _concat.default)(_context2 = "".concat(value.getMonth() + 1, "/")).call(_context2, value.getDate(), "/")).call(_context, value.getFullYear(), "}"), _constants.DEFAULT_DATE_FORMAT).local().locale(locale || 'en').format(format || _constants.DEFAULT_DATE_VALUE_FORMAT);
  }

  return '';
};
/**
 *  Converts the Date from react-day-picker to a string value based on the formate for display on the input controls, etc.
 *  Not Used for now as we are using the default parseDate and formatDate
*/


exports.formatForOnChange = formatForOnChange;

const formatForSelectedDay = (value, valueFormat, format, locale) => {
  if (value && typeof value === 'string') {
    const result = (0, _moment.default)(value, valueFormat).local().locale(locale || 'en').format(format);
    return result === 'Invalid date' ? undefined : result;
  }

  return undefined;
};

exports.formatForSelectedDay = formatForSelectedDay;