"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.formatForSelectedDay = exports.formatForOnChange = exports.dayPickerInputClassNames = void 0;

var _reduce = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/reduce"));

var _moment = _interopRequireDefault(require("moment"));

var _constants = require("./constants");

const dayPickerInputClassNames = (0, _reduce.default)(_constants.dayPickerClassTypes).call(_constants.dayPickerClassTypes, (dayPickerClassNames, classType) => ({ ...dayPickerClassNames,
  [classType]: `grape-ui-day-picker-${classType}`
}), {});
/**
 *  Converts the Date from react-day-picker to a string value based on the valueFormat for saving to form controls, etc.
*/

exports.dayPickerInputClassNames = dayPickerInputClassNames;

const formatForOnChange = (value, format, locale) => {
  if (value && value instanceof Date) {
    return (0, _moment.default)(`${value.getMonth() + 1}/${value.getDate()}/${value.getFullYear()}}`, _constants.DEFAULT_DATE_FORMAT).local().locale(locale || 'en').format(format || _constants.DEFAULT_DATE_VALUE_FORMAT);
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