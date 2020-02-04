import PropTypes from 'prop-types';
import React from 'react';
import DayPicker from 'react-day-picker';
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { formatForOnChange } from './utils';
import { DEFAULT_DATE_FORMAT, DEFAULT_DATE_VALUE_FORMAT } from './constants';

const propsToTrim = null;
const dayPickerInputStyle = {
  container: {
    input: {
      padding: '1rem',
    },
  },
};

export const DateFieldComponent = props => {
  const {
    calendarOnly,
    format,
    locale,
    onChange,
    value,
    valueFormat,
  } = props;
  const handleDayPickerClick = selectedDay => {
    const formattedDay = formatForOnChange(selectedDay, valueFormat, locale);
    if (onChange) {
      onChange({
        formattedDay,
        selectedDay,
      });
    }
  };
  const handleOnChange = (selectedDay, modifiers, dayPickerInput) => {
    const formattedDay = formatForOnChange(selectedDay, valueFormat, locale);
    if (onChange) {
      onChange({
        dayPickerInput, formattedDay, modifiers, selectedDay,
      });
    }
  };
  if (calendarOnly) {
    return (
      <DayPicker
        locale={locale}
        localeUtils={MomentLocaleUtils}
        onDayClick={handleDayPickerClick}
        {...removeSomeProps(props, propsToTrim)}
      />
    );
  }
  return (
    <DayPickerInput
      format={format}
      formatDate={formatDate}
      locale={locale}
      localeUtils={MomentLocaleUtils}
      onDayChange={handleOnChange}
      parseDate={parseDate}
      style={dayPickerInputStyle}
      value={value}
      {...removeSomeProps(props, propsToTrim)}
    />
  );
};

DateFieldComponent.propTypes = {
  calendarOnly: PropTypes.bool,
  format: PropTypes.string,
  locale: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
  valueFormat: PropTypes.string,
};

DateFieldComponent.defaultProps = {
  calendarOnly: false,
  format: DEFAULT_DATE_FORMAT,
  locale: 'en',
  onChange: () => {},
  // moment-day-picker prefers undefined as the value for no date
  value: undefined,
  valueFormat: DEFAULT_DATE_VALUE_FORMAT,
};
