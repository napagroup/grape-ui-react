import "core-js/modules/es.date.to-string";
import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _reduceInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/reduce";

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context3; _forEachInstanceProperty(_context3 = ownKeys(Object(source), true)).call(_context3, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context4; _forEachInstanceProperty(_context4 = ownKeys(Object(source))).call(_context4, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

import moment from 'moment';
import { dayPickerClassTypes, DEFAULT_DATE_FORMAT, DEFAULT_DATE_VALUE_FORMAT } from './constants';
export var dayPickerInputClassNames = _reduceInstanceProperty(dayPickerClassTypes).call(dayPickerClassTypes, function (dayPickerClassNames, classType) {
  return _objectSpread({}, dayPickerClassNames, _defineProperty({}, classType, "grape-ui-day-picker-".concat(classType)));
}, {});
/**
 *  Converts the Date from react-day-picker to a string value based on the valueFormat for saving to form controls, etc.
*/

export var formatForOnChange = function formatForOnChange(value, format, locale) {
  if (value && value instanceof Date) {
    var _context, _context2;

    return moment(_concatInstanceProperty(_context = _concatInstanceProperty(_context2 = "".concat(value.getMonth() + 1, "/")).call(_context2, value.getDate(), "/")).call(_context, value.getFullYear(), "}"), DEFAULT_DATE_FORMAT).local().locale(locale || 'en').format(format || DEFAULT_DATE_VALUE_FORMAT);
  }

  return '';
};
/**
 *  Converts the Date from react-day-picker to a string value based on the formate for display on the input controls, etc.
 *  Not Used for now as we are using the default parseDate and formatDate
*/

export var formatForSelectedDay = function formatForSelectedDay(value, valueFormat, format, locale) {
  if (value && typeof value === 'string') {
    var result = moment(value, valueFormat).local().locale(locale || 'en').format(format);
    return result === 'Invalid date' ? undefined : result;
  }

  return undefined;
};