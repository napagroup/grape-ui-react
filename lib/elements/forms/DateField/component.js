import _extends from "@babel/runtime-corejs3/helpers/extends";
import PropTypes from 'prop-types';
import React from 'react';
import DayPicker from 'react-day-picker';
import MomentLocaleUtils, { formatDate, parseDate } from 'react-day-picker/moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { formatForOnChange } from './utils';
import { DEFAULT_DATE_FORMAT, DEFAULT_DATE_VALUE_FORMAT } from './constants';
var propsToTrim = null;
var dayPickerInputStyle = {
  container: {
    input: {
      padding: '1rem'
    }
  }
};
export var DateFieldComponent = function DateFieldComponent(props) {
  var calendarOnly = props.calendarOnly,
      format = props.format,
      locale = props.locale,
      onChange = props.onChange,
      value = props.value,
      valueFormat = props.valueFormat;

  var handleDayPickerClick = function handleDayPickerClick(selectedDay) {
    var formattedDay = formatForOnChange(selectedDay, valueFormat, locale);

    if (onChange) {
      onChange({
        formattedDay: formattedDay,
        selectedDay: selectedDay
      });
    }
  };

  var handleOnChange = function handleOnChange(selectedDay, modifiers, dayPickerInput) {
    var formattedDay = formatForOnChange(selectedDay, valueFormat, locale);

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
    return /*#__PURE__*/React.createElement(DayPicker, _extends({
      locale: locale,
      localeUtils: MomentLocaleUtils,
      onDayClick: handleDayPickerClick
    }, removeSomeProps(props, propsToTrim)));
  }

  return /*#__PURE__*/React.createElement(DayPickerInput, _extends({
    format: format,
    formatDate: formatDate,
    locale: locale,
    localeUtils: MomentLocaleUtils,
    onDayChange: handleOnChange,
    parseDate: parseDate,
    style: dayPickerInputStyle,
    value: value
  }, removeSomeProps(props, propsToTrim)));
};
DateFieldComponent.propTypes = {
  calendarOnly: PropTypes.bool,
  format: PropTypes.string,
  locale: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
  valueFormat: PropTypes.string
};
DateFieldComponent.defaultProps = {
  calendarOnly: false,
  format: DEFAULT_DATE_FORMAT,
  locale: 'en',
  onChange: function onChange() {},
  // moment-day-picker prefers undefined as the value for no date
  value: undefined,
  valueFormat: DEFAULT_DATE_VALUE_FORMAT
};