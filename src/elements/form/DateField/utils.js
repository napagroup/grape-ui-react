import moment from 'moment';
import { dayPickerClassTypes, DEFAULT_DATE_FORMAT, DEFAULT_DATE_VALUE_FORMAT } from './constants';

export const dayPickerInputClassNames = dayPickerClassTypes.reduce((dayPickerClassNames, classType) => ({
  ...dayPickerClassNames,
  [classType]: `grape-ui-day-picker-${classType}`,
}), {});

/**
 *  Converts the Date from react-day-picker to a string value based on the valueFormat for saving to form controls, etc.
*/
export const formatForOnChange = (value, format, locale) => {
  if (value && value instanceof Date) {
    return moment(`${(value.getMonth() + 1)}/${value.getDate()}/${value.getFullYear()}}`, DEFAULT_DATE_FORMAT)
      .local()
      .locale(locale || 'en')
      .format(format || DEFAULT_DATE_VALUE_FORMAT);
  }
  return '';
};

/**
 *  Converts the Date from react-day-picker to a string value based on the formate for display on the input controls, etc.
 *  Not Used for now as we are using the default parseDate and formatDate
*/
export const formatForSelectedDay = (value, valueFormat, format, locale) => {
  if (value && typeof value === 'string') {
    const result = moment(value, valueFormat)
      .local()
      .locale(locale || 'en')
      .format(format);
    return result === 'Invalid date' ? undefined : result;
  }
  return undefined;
};
