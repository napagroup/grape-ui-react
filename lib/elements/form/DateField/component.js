"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateFieldComponent = undefined;

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDayPicker = require("react-day-picker");

var _reactDayPicker2 = _interopRequireDefault(_reactDayPicker);

var _moment = require("react-day-picker/moment");

var _moment2 = _interopRequireDefault(_moment);

var _DayPickerInput = require("react-day-picker/DayPickerInput");

var _DayPickerInput2 = _interopRequireDefault(_DayPickerInput);

var _componentHelpers = require("../../../utils/componentHelpers");

var _utils = require("./utils");

var _constants = require("./constants");

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

var DateFieldComponent = exports.DateFieldComponent = function DateFieldComponent(props) {
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
    return /*#__PURE__*/_react2["default"].createElement(_reactDayPicker2["default"], _extends({
      locale: locale,
      localeUtils: _moment2["default"],
      onDayClick: handleDayPickerClick
    }, (0, _componentHelpers.removeSomeProps)(props, propsToTrim)));
  }

  return /*#__PURE__*/_react2["default"].createElement(_DayPickerInput2["default"], _extends({
    format: format,
    formatDate: _moment.formatDate,
    locale: locale,
    localeUtils: _moment2["default"],
    onDayChange: handleOnChange,
    parseDate: _moment.parseDate,
    style: dayPickerInputStyle,
    value: value
  }, (0, _componentHelpers.removeSomeProps)(props, propsToTrim)));
};

DateFieldComponent.propTypes = {
  calendarOnly: _propTypes2["default"].bool,
  format: _propTypes2["default"].string,
  locale: _propTypes2["default"].string,
  onChange: _propTypes2["default"].func,
  value: _propTypes2["default"].any,
  valueFormat: _propTypes2["default"].string
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