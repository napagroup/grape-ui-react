import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import { borderRadius, fontWeight } from 'styled-system';
import { removeSomeProps } from 'src/utils/componentHelpers';
import {
  control,
  controlColor,
  controlStyles,
  defaultControlStyles,
  disabledStyle,
  focusStyles,
  fontFamilyCore,
  fontSizeCore,
  fontStyleCore,
  letterSpacingCore,
  lineHeightCore,
  refType,
  spaceProps,
  textAlignCore,
  textDecorationCore,
  typography,
} from 'src/utils/styledHelpers';
import { getAssistiveText } from 'src/elements/form/AssistiveText';
import { ControlGroup } from 'src/elements/form/ControlGroup';
import { PlainText } from 'src/elements/form/PlainText';
import { DateFieldComponent } from './component';
import {
  DayPickerControlStyles,
  DEFAULT_DATE_FORMAT,
  DEFAULT_DATE_VALUE_FORMAT,
} from './constants';
import {
  defaultControlColorProps,
  defaultDayPickerProps,
  plaintextPropsToTrim,
  propsToTrim,
  styledWrapperPropsToTrim,
} from './props';
import { menuStyledHelper } from './styledHelpers';

const controlStylesDateField = props => {
  if (props.validationError) {
    return controlStyles({ ...props, activeColor: 'brandDanger', borderColor: 'brandDanger' });
  }
  return controlStyles(props);
};

const disabledStyleDateField = props => {
  if (props.isDisabled) {
    return disabledStyle;
  }
  return '';
};

const getControlStyles = props => {
  if (props.calendarOnly) {
    return `
    background: transparent;
    margin-top: 1rem;
    + label {
      position: absolute;
      top: 0;
    }
  `;
  }
  return css`
    ${controlStylesDateField}
    ${disabledStyleDateField}
    &:focus-within { ${focusStyles} };
  `;
};

const StyledWrapper = styled('div')`
  ${controlColor}
  ${fontFamilyCore}
  ${fontSizeCore}
  ${fontWeight}
  ${letterSpacingCore}
  ${lineHeightCore}
  ${fontStyleCore}
  ${textAlignCore}
  ${textDecorationCore}
  ${DayPickerControlStyles}
  box-sizing: border-box;
  width: 100%;
  &&& {
    .DayPickerInput {
      box-sizing: border-box;
      width: 100%;
    }
  }
  ${getControlStyles}
  ${menuStyledHelper}
`;

StyledWrapper.propTypes = {
  bg: PropTypes.string,
  calendarOnly: PropTypes.bool,
  formStyle: PropTypes.string,
  isDisabled: PropTypes.bool,
  isFocused: PropTypes.bool,
  menuSelectedBg: PropTypes.string,
  menuSelectedColor: PropTypes.string,
  multiple: PropTypes.bool,
  validationError: PropTypes.string,
};

StyledWrapper.defaultProps = {
  bg: null,
  calendarOnly: false,
  formStyle: '',
  isDisabled: false,
  isFocused: false,
  multiple: false,
  validationError: '',
};

const renderDateFieldComponent = dateFieldProps => {
  const {
    bg,
    disabled,
    format,
    formStyle,
    inputProps,
    inputRef,
    labelText,
    placeholder,
    validationError,
  } = dateFieldProps;
  const controlProps = {
    ...inputProps,
    disabled,
    ref: inputRef,
  };
  const stylingProps = {
    bg,
    formStyle,
    labelText,
    validationError,
    ...removeSomeProps(dateFieldProps, styledWrapperPropsToTrim),
  };
  return (
    <StyledWrapper {...stylingProps}>
      <DateFieldComponent
        {...dateFieldProps}
        inputProps={controlProps}
        placeholder={placeholder || format}
      />
    </StyledWrapper>
  );
};

const renderValueOrComponent = propsFromComponent => {
  const {
    controlId,
    disabled,
    name,
    plainText,
  } = propsFromComponent;
  if (plainText) {
    const plainTextProps = removeSomeProps(propsFromComponent, plaintextPropsToTrim);
    return <PlainText {...plainTextProps} />;
  }
  const childProps = {
    id: controlId || name,
    isDisabled: disabled,
    ...removeSomeProps(propsFromComponent, propsToTrim),
  };
  return renderDateFieldComponent(childProps);
};
const DateField = props => {
  const {
    activeColor,
    assistiveText,
    assistiveTextProps,
    bg,
    controlColorProps,
    controlGroupProps,
    controlId,
    controlLabelProps,
    dayPickerProps,
    disabled,
    isRequired,
    labelText,
    locale,
    name,
    validationError,
  } = props;
  const assistiveProps = { assistiveText, isRequired };
  const newLabel = isRequired && labelText ? `${labelText}*` : labelText;
  const newControlColorProps = { ...defaultControlColorProps, ...controlColorProps };
  const newDayPickerProps = {
    ...defaultDayPickerProps,
    weekdaysShort: locale !== 'en' ? '' : defaultDayPickerProps.weekdaysShort,
    ...dayPickerProps,
  };
  const componentProps = {
    ...props,
    controlColorProps: newControlColorProps,
    dayPickerProps: newDayPickerProps,
  };
  return (
    <ControlGroup
      activeColor={activeColor}
      assistiveText={getAssistiveText(assistiveProps)}
      assistiveTextProps={assistiveTextProps}
      bg={bg}
      controlId={controlId}
      controlLabelProps={controlLabelProps}
      disabled={disabled}
      labelText={newLabel}
      name={name}
      validationError={validationError}
      {...controlGroupProps}
    >
      {renderValueOrComponent({ ...componentProps })}
    </ControlGroup>
  );
};

DateField.propTypes = {
  /** Defines the color for the label and border color when the focus is in the control. */
  activeColor: PropTypes.string,
  /** Provides helper text for the control.  When provided with no `assistiveText`, `isRequired` will add a default '*Required` helper text.  When provided with `validationError`, `assistiveText`'s value will not be displayed on the UI. */
  assistiveText: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  /** Allows for custom props to be passed down to the `AssistiveText` component. */
  assistiveTextProps: PropTypes.object,
  /** Binds the DayPicker with an input field, displaying the calendar in an overlay by default. Selecting calendarOnly
   * shows the full calendar inline.
   * @see [react-day-picker/Input Field](https://react-day-picker.js.org/examples/input) */
  calendarOnly: PropTypes.bool,
  /** Define the colors for the control.  Uses 🍇UI's color variables.  Important note, if a value is not provided explicitly for a specific color, it will fallback to the default color. */
  controlColorProps: PropTypes.object,
  /** Allows for custom props to be passed down to the `ControlGroup` component. */
  controlGroupProps: PropTypes.object,
  /** Will pass its value to the control's `id` as well as the label's `htmlFor`.
   * @deprecated Do not use! Use `name` instead!
   */
  controlId: PropTypes.string,
  /** Allows for custom props to be passed down to the `ControlLabel` component. */
  controlLabelProps: PropTypes.object,
  /** The DayPicker props to customize the calendar rendered in the overlay.
   * @see See [React-Day-Picker DayPicker API](https://react-day-picker.js.org/api/DayPicker/) for more */
  dayPickerProps: PropTypes.object,
  /** Basic HTML attribute, needed for styling. */
  disabled: PropTypes.bool,
  /** Date format that is acceptable for user to enter, as well as the format of the value that is returned upon selection. Defaults to M/D/YYYY.
   * @see See [Moment.js | Docs > Parsing > String + Format](https://momentjs.com/docs/#/parsing/string-format/) for more format options */
  format: PropTypes.string,
  /**
   * Use 'filled' or 'outlined'
   * @see See [Material Design](https://material.io/components/text-fields/#usage) for options */
  formStyle: PropTypes.string,
  /** Additional props to add to the input component. The value key is ignored: use the value prop instead.
   * @see See [React-Day-Picker DayPicker API](https://react-day-picker.js.org/api/DayPickerInput#inputProps) for more */
  inputProps: PropTypes.object,
  /** Allows for a ref to be defined to the DOM input */
  inputRef: refType,
  /** This will add an asterisk (*) to the `labelText` and provided `assistiveText` if none is provided. */
  isRequired: PropTypes.bool,
  /** The string value displayed on top of the control in the `ControlLabel` component. */
  labelText: PropTypes.string,
  /** Locale defaults to English (en) */
  locale: PropTypes.string,
  /** Define where to align the dropdown menu.
   * Please use either `left` or `right`.
   * Uses styled-system's responsive styling to specify via specic breakpoints. */
  menuAlignment: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ]),
  /** Define the flex-direction of the menu.  Uses styled-system's responsive styling.  Should only be used for menus that have more than one month. */
  menuDirection: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ]),
  /** Override `menuDirection`'s specific breakpoints for when to use column/row view.
   * Please use `column` or `row`.
   * Enter a value for `maxWidth` for `column`.
   * Enter a value for `minWidth` for `row`.
   * Should only be used for menus that have more than one month. */
  menuDirectionViewportBreakpoint: PropTypes.object,
  /** `'01'`, `'02'`, `'03'`, `'04'`, `'05'`, `'06'`.  Use these to define the boxShadow and zIndex styles. */
  menuElevation: PropTypes.string,
  /** Should be used on each form control.  When no `id` or `controlId` are provided, `name` will populate both fields. */
  name: PropTypes.string,
  /** Used to render a dropdown control as a `PlainText` element. */
  plainText: PropTypes.bool,
  /** Error text that will appear below the control when validation fires. */
  validationError: PropTypes.string,
  /** The value of the input field.  It can either be a string or a Date object.
   * @see See [React-Day-Picker API](https://react-day-picker.js.org/api/DayPickerInput#value) for more about the prop.
   * @see See [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) for more about Date objects.
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
  ]),
  /** Define the format for the value sent to the database.  Default value is "YYYY-MM-DD".
   * When user call OnChange, onChange function is expected to be called with 4 parameters: selectedDay, modifiers, input, formattedDay
   * selectedDay: the date object of the selected date
   * modifiers: matching day for the given modifiers
   * input: the inner input which you get the the input.value
   * formattedDay: string format output that using the valueFormat
   */
  valueFormat: PropTypes.any,
  ...borderRadius.propTypes,
  ...spaceProps.propTypes,
  ...control.propTypes,
  ...typography.propTypes,
};

DateField.defaultProps = {
  activeColor: defaultControlStyles.activeColor,
  assistiveText: '',
  assistiveTextProps: {},
  calendarOnly: false,
  controlColorProps: defaultControlColorProps,
  controlGroupProps: {},
  controlId: '',
  controlLabelProps: {},
  dayPickerProps: defaultDayPickerProps,
  disabled: false,
  format: DEFAULT_DATE_FORMAT,
  formStyle: 'outlined',
  inputProps: {},
  inputRef: () => {},
  isRequired: false,
  labelText: '',
  locale: 'en',
  menuAlignment: 'left',
  menuDirection: 'column',
  menuDirectionViewportBreakpoint: {},
  menuElevation: '01',
  name: '',
  plainText: false,
  validationError: '',
  value: undefined,
  valueFormat: DEFAULT_DATE_VALUE_FORMAT,
};

/** @component */
export { DateField };
