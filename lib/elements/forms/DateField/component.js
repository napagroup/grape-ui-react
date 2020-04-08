"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.object.assign");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateFieldComponent = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactDayPicker = _interopRequireDefault(require("react-day-picker"));

var _moment = _interopRequireWildcard(require("react-day-picker/moment"));

var _DayPickerInput = _interopRequireDefault(require("react-day-picker/DayPickerInput"));

var _componentHelpers = require("../../../utils/componentHelpers");

var _utils = require("./utils");

var _constants = require("./constants");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var propsToTrim = null;
var dayPickerInputStyle = {
  container: {
    input: {
      padding: '1rem'
    }
  }
};

var DateFieldComponent = function DateFieldComponent(props) {
  var calendarOnly = props.calendarOnly,
      format = props.format,
      locale = props.locale,
      onChange = props.onChange,
      value = props.value,
      valueFormat = props.valueFormat;

  var handleDayPickerClick = function handleDayPickerClick(selectedDay) {
    var formattedDay = (0, _utils.formatForOnChange)(selectedDay, valueFormat, locale);

    if (onChange) {
      onChange({
        formattedDay: formattedDay,
        selectedDay: selectedDay
      });
    }
  };

  var handleOnChange = function handleOnChange(selectedDay, modifiers, dayPickerInput) {
    var formattedDay = (0, _utils.formatForOnChange)(selectedDay, valueFormat, locale);

    if (onChange) {
      onChange({
        dayPickerInput: dayPickerInput,
        formattedDay: formattedDay,
        modifiers: modifiers,
        selectedDay: selectedDay
      });
    }
  };

  if (calendarOnly) {
    return /*#__PURE__*/_react["default"].createElement(_reactDayPicker["default"], _extends({
      locale: locale,
      localeUtils: _moment["default"],
      onDayClick: handleDayPickerClick
    }, (0, _componentHelpers.removeSomeProps)(props, propsToTrim)));
  }

  return /*#__PURE__*/_react["default"].createElement(_DayPickerInput["default"], _extends({
    format: format,
    formatDate: _moment.formatDate,
    locale: locale,
    localeUtils: _moment["default"],
    onDayChange: handleOnChange,
    parseDate: _moment.parseDate,
    style: dayPickerInputStyle,
    value: value
  }, (0, _componentHelpers.removeSomeProps)(props, propsToTrim)));
};

exports.DateFieldComponent = DateFieldComponent;
DateFieldComponent.propTypes = {
  calendarOnly: _propTypes["default"].bool,
  format: _propTypes["default"].string,
  locale: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  value: _propTypes["default"].any,
  valueFormat: _propTypes["default"].string
};
DateFieldComponent.defaultProps = {
  calendarOnly: false,
  format: _constants.DEFAULT_DATE_FORMAT,
  locale: 'en',
  onChange: function onChange() {},
  // moment-day-picker prefers undefined as the value for no date
  value: undefined,
  valueFormat: _constants.DEFAULT_DATE_VALUE_FORMAT
};