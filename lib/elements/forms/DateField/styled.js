"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.DateField = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledSystem = require("styled-system");

var _componentHelpers = require("../../../utils/componentHelpers");

var _styledHelpers = require("../../../utils/styledHelpers");

var _utils = require("../../../elements/forms/utils");

var _component = require("./component");

var _constants = require("./constants");

var _props = require("./props");

var _styledHelpers2 = require("./styledHelpers");

const controlStylesDateField = props => {
  if (props.validationError) {
    return (0, _styledHelpers.controlStyles)({ ...props,
      activeColor: 'brandDanger',
      borderColor: 'brandDanger'
    });
  }

  return (0, _styledHelpers.controlStyles)(props);
};

const disabledStyleDateField = props => {
  if (props.isDisabled) {
    return _styledHelpers.disabledStyle;
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

  return (0, _styledComponents.css)`
    ${controlStylesDateField}
    ${disabledStyleDateField}
    &:focus-within { ${_styledHelpers.focusStyles} };
  `;
};

const StyledWrapper = (0, _styledComponents.default)('div')`
  ${_styledHelpers.controlColor}
  ${_styledHelpers.fontFamilyCore}
  ${_styledHelpers.fontSizeCore}
  ${_styledSystem.fontWeight}
  ${_styledHelpers.letterSpacingCore}
  ${_styledHelpers.lineHeightCore}
  ${_styledHelpers.fontStyleCore}
  ${_styledHelpers.textAlignCore}
  ${_styledHelpers.textDecorationCore}
  ${_constants.DayPickerControlStyles}
  box-sizing: border-box;
  width: 100%;
  &&& {
    .DayPickerInput {
      box-sizing: border-box;
      width: 100%;
    }
  }
  ${getControlStyles}
  ${_styledHelpers2.menuStyledHelper}
`;
StyledWrapper.propTypes = {
  bg: _propTypes.default.string,
  calendarOnly: _propTypes.default.bool,
  formStyle: _propTypes.default.string,
  isDisabled: _propTypes.default.bool,
  isFocused: _propTypes.default.bool,
  menuSelectedBg: _propTypes.default.string,
  menuSelectedColor: _propTypes.default.string,
  multiple: _propTypes.default.bool,
  validationError: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string])
};
StyledWrapper.defaultProps = {
  bg: null,
  calendarOnly: false,
  formStyle: '',
  isDisabled: false,
  isFocused: false,
  multiple: false,
  validationError: ''
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
    validationError
  } = dateFieldProps;
  const controlProps = { ...inputProps,
    disabled,
    ref: inputRef
  };
  const stylingProps = {
    bg,
    formStyle,
    labelText,
    validationError,
    ...(0, _componentHelpers.removeSomeProps)(dateFieldProps, _props.styledWrapperPropsToTrim)
  };
  return /*#__PURE__*/_react.default.createElement(StyledWrapper, stylingProps, /*#__PURE__*/_react.default.createElement(_component.DateFieldComponent, (0, _extends2.default)({}, dateFieldProps, {
    inputProps: controlProps,
    placeholder: placeholder || format
  })));
};

const renderValueOrComponent = propsFromComponent => {
  const {
    controlId,
    disabled,
    name,
    plainText
  } = propsFromComponent;

  if (plainText) {
    const plainTextProps = (0, _componentHelpers.removeSomeProps)(propsFromComponent, _styledHelpers.plaintextPropsToTrim);
    return /*#__PURE__*/_react.default.createElement(_utils.PlainText, plainTextProps);
  }

  const childProps = {
    id: controlId || name,
    isDisabled: disabled,
    ...(0, _componentHelpers.removeSomeProps)(propsFromComponent, _props.propsToTrim)
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
    validationError
  } = props;
  const assistiveProps = {
    assistiveText,
    isRequired
  };
  const newLabel = isRequired && labelText ? `${labelText}*` : labelText;
  const newControlColorProps = { ..._props.defaultControlColorProps,
    ...controlColorProps
  };
  const newDayPickerProps = { ..._props.defaultDayPickerProps,
    weekdaysShort: locale !== 'en' ? '' : _props.defaultDayPickerProps.weekdaysShort,
    ...dayPickerProps
  };
  const componentProps = { ...props,
    controlColorProps: newControlColorProps,
    dayPickerProps: newDayPickerProps
  };
  return /*#__PURE__*/_react.default.createElement(_utils.ControlGroup, (0, _extends2.default)({
    activeColor: activeColor,
    assistiveText: (0, _utils.getAssistiveText)(assistiveProps),
    assistiveTextProps: assistiveTextProps,
    bg: bg,
    controlId: controlId,
    controlLabelProps: controlLabelProps,
    disabled: disabled,
    labelText: newLabel,
    name: name,
    validationError: validationError
  }, controlGroupProps), renderValueOrComponent({ ...componentProps
  }));
};

exports.DateField = DateField;
DateField.propTypes = {
  /** Defines the color for the label and border color when the focus is in the control. */
  activeColor: _propTypes.default.string,

  /** Provides helper text for the control.  When provided with no `assistiveText`, `isRequired` will add a default '*Required` helper text.  When provided with `validationError`, `assistiveText`'s value will not be displayed on the UI. */
  assistiveText: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string]),

  /** Allows for custom props to be passed down to the `AssistiveText` component. */
  assistiveTextProps: _propTypes.default.object,

  /** Binds the DayPicker with an input field, displaying the calendar in an overlay by default. Selecting calendarOnly
   * shows the full calendar inline.
   * @see [react-day-picker/Input Field](https://react-day-picker.js.org/examples/input) */
  calendarOnly: _propTypes.default.bool,

  /** Define the colors for the control.  Uses grape-ui's color variables.  Important note, if a value is not provided explicitly for a specific color, it will fallback to the default color. */
  controlColorProps: _propTypes.default.object,

  /** Allows for custom props to be passed down to the `ControlGroup` component. */
  controlGroupProps: _propTypes.default.object,

  /** Define the height of the component.  Useful for definining the menu placement offset. */
  controlHeight: _propTypes.default.string,

  /** Will pass its value to the control's `id` as well as the label's `htmlFor`.
   * @deprecated Do not use! Use `name` instead!
   */
  controlId: _propTypes.default.string,

  /** Allows for custom props to be passed down to the `ControlLabel` component. */
  controlLabelProps: _propTypes.default.object,

  /** The DayPicker props to customize the calendar rendered in the overlay.
   * @see See [React-Day-Picker DayPicker API](https://react-day-picker.js.org/api/DayPicker/) for more */
  dayPickerProps: _propTypes.default.object,

  /** Basic HTML attribute, needed for styling. */
  disabled: _propTypes.default.bool,

  /** Date format that is acceptable for user to enter, as well as the format of the value that is returned upon selection. Defaults to M/D/YYYY.
   * @see See [Moment.js | Docs > Parsing > String + Format](https://momentjs.com/docs/#/parsing/string-format/) for more format options */
  format: _propTypes.default.string,

  /**
   * Use 'filled' or 'outlined'
   * @see See [Material Design](https://material.io/components/text-fields/#usage) for options */
  formStyle: _propTypes.default.string,

  /** Additional props to add to the input component. The value key is ignored: use the value prop instead.
   * @see See [React-Day-Picker DayPicker API](https://react-day-picker.js.org/api/DayPickerInput#inputProps) for more */
  inputProps: _propTypes.default.object,

  /** Allows for a ref to be defined to the DOM input */
  inputRef: _styledHelpers.refType,

  /** This will add an asterisk (*) to the `labelText` and provided `assistiveText` if none is provided. */
  isRequired: _propTypes.default.bool,

  /** The string value displayed on top of the control in the `ControlLabel` component. */
  labelText: _propTypes.default.string,

  /** Locale defaults to English (en) */
  locale: _propTypes.default.string,

  /** Define where to align the dropdown menu.
   * Please use either `left` or `right`.
   * Uses styled-system's responsive styling to specify via specic breakpoints. */
  menuAlignment: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.string]),

  /** Define the flex-direction of the menu.  Uses styled-system's responsive styling.  Should only be used for menus that have more than one month. */
  menuDirection: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.string]),

  /** Override `menuDirection`'s specific breakpoints for when to use column/row view.
   * Please use `column` or `row`.
   * Enter a value for `maxWidth` for `column`.
   * Enter a value for `minWidth` for `row`.
   * Should only be used for menus that have more than one month. */
  menuDirectionViewportBreakpoint: _propTypes.default.object,

  /** `'01'`, `'02'`, `'03'`, `'04'`, `'05'`, `'06'`.  Use these to define the boxShadow and zIndex styles. */
  menuElevation: _propTypes.default.string,

  /** Defines the bottom CSS property of the menu's overlay */
  menuOverlayBottom: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.number, _propTypes.default.string]),

  /** Defines the left CSS property of the menu's overlay */
  menuOverlayLeft: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.number, _propTypes.default.string]),

  /** Defines the right CSS property of the menu's overlay */
  menuOverlayRight: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.number, _propTypes.default.string]),

  /** Defines the top CSS property of the menu's overlay */
  menuOverlayTop: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.number, _propTypes.default.string]),

  /** Defines the placement of the dropdown menu */
  menuPlacement: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.string]),

  /** Should be used on each form control.  When no `id` or `controlId` are provided, `name` will populate both fields. */
  name: _propTypes.default.string,

  /** Used to render a dropdown control as a `PlainText` element. */
  plainText: _propTypes.default.bool,

  /** Error text that will appear below the control when validation fires. */
  validationError: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string]),

  /** The value of the input field.  It can either be a string or a Date object.
   * @see See [React-Day-Picker API](https://react-day-picker.js.org/api/DayPickerInput#value) for more about the prop.
   * @see See [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) for more about Date objects.
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.instanceOf(Date)]),

  /** Define the format for the value sent to the database.  Default value is "YYYY-MM-DD".
   * When user call OnChange, onChange function is expected to be called with 4 parameters: selectedDay, modifiers, input, formattedDay
   * selectedDay: the date object of the selected date
   * modifiers: matching day for the given modifiers
   * input: the inner input which you get the the input.value
   * formattedDay: string format output that using the valueFormat
   */
  valueFormat: _propTypes.default.any,
  ..._styledSystem.borderRadius.propTypes,
  ..._styledHelpers.spaceProps.propTypes,
  ..._styledHelpers.control.propTypes,
  ..._styledHelpers.typography.propTypes
};
DateField.defaultProps = {
  activeColor: _styledHelpers.defaultControlStyles.activeColor,
  assistiveText: '',
  assistiveTextProps: {},
  calendarOnly: false,
  controlColorProps: _props.defaultControlColorProps,
  controlGroupProps: {},
  controlHeight: '58px',
  controlId: '',
  controlLabelProps: {},
  dayPickerProps: _props.defaultDayPickerProps,
  disabled: false,
  format: _constants.DEFAULT_DATE_FORMAT,
  formStyle: '',
  inputProps: {},
  inputRef: () => {},
  isRequired: false,
  labelText: '',
  locale: 'en',
  menuAlignment: 'left',
  menuDirection: 'column',
  menuDirectionViewportBreakpoint: {},
  menuElevation: '01',
  menuOverlayBottom: '',
  menuOverlayLeft: '',
  menuOverlayRight: '',
  menuOverlayTop: '',
  menuPlacement: 'bottom',
  name: '',
  plainText: false,
  validationError: '',
  value: undefined,
  valueFormat: _constants.DEFAULT_DATE_VALUE_FORMAT
};
/** @component */