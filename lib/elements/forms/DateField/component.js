"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.DateFieldComponent = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactDayPicker = _interopRequireDefault(require("react-day-picker"));

var MomentLocaleUtils = _interopRequireWildcard(require("../../../utils/momentHelpers"));

var _DayPickerInput = _interopRequireDefault(require("react-day-picker/DayPickerInput"));

var _componentHelpers = require("../../../utils/componentHelpers");

var _utils = require("./utils");

var _constants = require("./constants");

const formatDate = MomentLocaleUtils.formatDate,
      parseDate = MomentLocaleUtils.parseDate;
const propsToTrim = null;
const dayPickerInputStyle = {
  container: {
    input: {
      padding: '1rem'
    }
  }
};

const DateFieldComponent = props => {
  const calendarOnly = props.calendarOnly,
        format = props.format,
        locale = props.locale,
        onChange = props.onChange,
        value = props.value,
        valueFormat = props.valueFormat;

  const handleDayPickerClick = selectedDay => {
    const formattedDay = (0, _utils.formatForOnChange)(selectedDay, valueFormat, locale);

    if (onChange) {
      onChange({
        formattedDay,
        selectedDay
      });
    }
  };

  const handleOnChange = (selectedDay, modifiers, dayPickerInput) => {
    const formattedDay = (0, _utils.formatForOnChange)(selectedDay, valueFormat, locale);

    if (onChange) {
      onChange({
        dayPickerInput,
        formattedDay,
        modifiers,
        selectedDay
      });
    }
  };

  if (calendarOnly) {
    return /*#__PURE__*/_react.default.createElement(_reactDayPicker.default, (0, _extends2.default)({
      locale: locale,
      localeUtils: MomentLocaleUtils,
      onDayClick: handleDayPickerClick
    }, (0, _componentHelpers.removeSomeProps)(props, propsToTrim)));
  }

  return /*#__PURE__*/_react.default.createElement(_DayPickerInput.default, (0, _extends2.default)({
    format: format,
    formatDate: formatDate,
    locale: locale,
    localeUtils: MomentLocaleUtils,
    onDayChange: handleOnChange,
    parseDate: parseDate,
    style: dayPickerInputStyle,
    value: value
  }, (0, _componentHelpers.removeSomeProps)(props, propsToTrim)));
};

exports.DateFieldComponent = DateFieldComponent;
DateFieldComponent.propTypes = {
  calendarOnly: _propTypes.default.bool,
  format: _propTypes.default.string,
  locale: _propTypes.default.string,
  onChange: _propTypes.default.func,
  value: _propTypes.default.any,
  valueFormat: _propTypes.default.string
};
DateFieldComponent.defaultProps = {
  calendarOnly: false,
  format: _constants.DEFAULT_DATE_FORMAT,
  locale: 'en',
  onChange: () => {},
  // moment-day-picker prefers undefined as the value for no date
  value: undefined,
  valueFormat: _constants.DEFAULT_DATE_VALUE_FORMAT
};