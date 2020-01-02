import { typography } from 'src/utils/styledHelpers';

export const defaultControlColorProps = {
  captionColor: 'inherit',
  dayHoverBgColor: 'brandLinkHover',
  dayHoverColor: 'white.light',
  disabledColor: 'gray.light',
  menuBgColor: 'white.light',
  outsideColor: 'gray.dark',
  selectedBetweenBgColor: 'brandLink.light',
  selectedBetweenColor: 'black',
  selectedBgColor: 'brandLink',
  selectedColor: 'white.light',
  todayBorderColor: 'black',
  weekdayColor: 'gray.light',
  weekNumberBorderColor: 'gray.light',
  weekNumberColor: 'gray',
};

export const defaultDayPickerProps = {
  numberOfMonths: 1,
  weekdaysShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
};

export const plaintextPropsToTrim = [
  'assistiveText',
  'assistiveTextProps',
  'calendarOnly',
  'controlColorProps',
  'controlGroupProps',
  'controlLabelProps',
  'controlId',
  'dayPickerProps',
  'formStyle',
  'inputProps',
  'isRequired',
  'menuAlignment',
  'menuDirection',
  'menuDirectionViewportBreakpoint',
  'menuElevation',
  'validationError',
  'valueFormat',
];

export const propsToTrim = [
  'assistiveText',
  'color',
  'controlId',
  'isRequired',
  'plainText',
];

export const styledWrapperPropsToTrim = [
  ...Object.keys(propsToTrim),
  ...Object.keys(typography.propTypes),
  'disabled',
  'format',
  'value',
];
