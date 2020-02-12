"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateField = undefined;

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require("styled-system");

var _componentHelpers = require("../../../utils/componentHelpers");

var _styledHelpers = require("../../../utils/styledHelpers");

var _utils = require("../../../elements/form/utils");

var _component = require("./component");

var _constants = require("./constants");

var _props = require("./props");

var _styledHelpers2 = require("./styledHelpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  box-sizing: border-box;\n  width: 100%;\n  &&& {\n    .DayPickerInput {\n      box-sizing: border-box;\n      width: 100%;\n    }\n  }\n  ", "\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    ", "\n    &:focus-within { ", " };\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var controlStylesDateField = function controlStylesDateField(props) {
  if (props.validationError) {
    return (0, _styledHelpers.controlStyles)(_objectSpread({}, props, {
      activeColor: 'brandDanger',
      borderColor: 'brandDanger'
    }));
  }

  return (0, _styledHelpers.controlStyles)(props);
};

var disabledStyleDateField = function disabledStyleDateField(props) {
  if (props.isDisabled) {
    return _styledHelpers.disabledStyle;
  }

  return '';
};

var getControlStyles = function getControlStyles(props) {
  if (props.calendarOnly) {
    return "\n    background: transparent;\n    margin-top: 1rem;\n    + label {\n      position: absolute;\n      top: 0;\n    }\n  ";
  }

  return (0, _styledComponents.css)(_templateObject(), controlStylesDateField, disabledStyleDateField, _styledHelpers.focusStyles);
};

var StyledWrapper = (0, _styledComponents2["default"])('div')(_templateObject2(), _styledHelpers.controlColor, _styledHelpers.fontFamilyCore, _styledHelpers.fontSizeCore, _styledSystem.fontWeight, _styledHelpers.letterSpacingCore, _styledHelpers.lineHeightCore, _styledHelpers.fontStyleCore, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore, _constants.DayPickerControlStyles, getControlStyles, _styledHelpers2.menuStyledHelper);
StyledWrapper.propTypes = {
  bg: _propTypes2["default"].string,
  calendarOnly: _propTypes2["default"].bool,
  formStyle: _propTypes2["default"].string,
  isDisabled: _propTypes2["default"].bool,
  isFocused: _propTypes2["default"].bool,
  menuSelectedBg: _propTypes2["default"].string,
  menuSelectedColor: _propTypes2["default"].string,
  multiple: _propTypes2["default"].bool,
  validationError: _propTypes2["default"].string
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

var renderDateFieldComponent = function renderDateFieldComponent(dateFieldProps) {
  var bg = dateFieldProps.bg,
      disabled = dateFieldProps.disabled,
      format = dateFieldProps.format,
      formStyle = dateFieldProps.formStyle,
      inputProps = dateFieldProps.inputProps,
      inputRef = dateFieldProps.inputRef,
      labelText = dateFieldProps.labelText,
      placeholder = dateFieldProps.placeholder,
      validationError = dateFieldProps.validationError;

  var controlProps = _objectSpread({}, inputProps, {
    disabled: disabled,
    ref: inputRef
  });

  var stylingProps = _objectSpread({
    bg: bg,
    formStyle: formStyle,
    labelText: labelText,
    validationError: validationError
  }, (0, _componentHelpers.removeSomeProps)(dateFieldProps, _props.styledWrapperPropsToTrim));

  return _react2["default"].createElement(StyledWrapper, stylingProps, _react2["default"].createElement(_component.DateFieldComponent, _extends({}, dateFieldProps, {
    inputProps: controlProps,
    placeholder: placeholder || format
  })));
};

var renderValueOrComponent = function renderValueOrComponent(propsFromComponent) {
  var controlId = propsFromComponent.controlId,
      disabled = propsFromComponent.disabled,
      name = propsFromComponent.name,
      plainText = propsFromComponent.plainText;

  if (plainText) {
    var plainTextProps = (0, _componentHelpers.removeSomeProps)(propsFromComponent, _styledHelpers.plaintextPropsToTrim);
    return _react2["default"].createElement(_utils.PlainText, plainTextProps);
  }

  var childProps = _objectSpread({
    id: controlId || name,
    isDisabled: disabled
  }, (0, _componentHelpers.removeSomeProps)(propsFromComponent, _props.propsToTrim));

  return renderDateFieldComponent(childProps);
};

var DateField = function DateField(props) {
  var activeColor = props.activeColor,
      assistiveText = props.assistiveText,
      assistiveTextProps = props.assistiveTextProps,
      bg = props.bg,
      controlColorProps = props.controlColorProps,
      controlGroupProps = props.controlGroupProps,
      controlId = props.controlId,
      controlLabelProps = props.controlLabelProps,
      dayPickerProps = props.dayPickerProps,
      disabled = props.disabled,
      isRequired = props.isRequired,
      labelText = props.labelText,
      locale = props.locale,
      name = props.name,
      validationError = props.validationError;
  var assistiveProps = {
    assistiveText: assistiveText,
    isRequired: isRequired
  };
  var newLabel = isRequired && labelText ? "".concat(labelText, "*") : labelText;

  var newControlColorProps = _objectSpread({}, _props.defaultControlColorProps, {}, controlColorProps);

  var newDayPickerProps = _objectSpread({}, _props.defaultDayPickerProps, {
    weekdaysShort: locale !== 'en' ? '' : _props.defaultDayPickerProps.weekdaysShort
  }, dayPickerProps);

  var componentProps = _objectSpread({}, props, {
    controlColorProps: newControlColorProps,
    dayPickerProps: newDayPickerProps
  });

  return _react2["default"].createElement(_utils.ControlGroup, _extends({
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
  }, controlGroupProps), renderValueOrComponent(_objectSpread({}, componentProps)));
};

DateField.propTypes = _objectSpread({
  /** Defines the color for the label and border color when the focus is in the control. */
  activeColor: _propTypes2["default"].string,

  /** Provides helper text for the control.  When provided with no `assistiveText`, `isRequired` will add a default '*Required` helper text.  When provided with `validationError`, `assistiveText`'s value will not be displayed on the UI. */
  assistiveText: _propTypes2["default"].oneOfType([_propTypes2["default"].object, _propTypes2["default"].string]),

  /** Allows for custom props to be passed down to the `AssistiveText` component. */
  assistiveTextProps: _propTypes2["default"].object,

  /** Binds the DayPicker with an input field, displaying the calendar in an overlay by default. Selecting calendarOnly
   * shows the full calendar inline.
   * @see [react-day-picker/Input Field](https://react-day-picker.js.org/examples/input) */
  calendarOnly: _propTypes2["default"].bool,

  /** Define the colors for the control.  Uses 🍇UI's color variables.  Important note, if a value is not provided explicitly for a specific color, it will fallback to the default color. */
  controlColorProps: _propTypes2["default"].object,

  /** Allows for custom props to be passed down to the `ControlGroup` component. */
  controlGroupProps: _propTypes2["default"].object,

  /** Define the height of the component.  Useful for definining the menu placement offset. */
  controlHeight: _propTypes2["default"].string,

  /** Will pass its value to the control's `id` as well as the label's `htmlFor`.
   * @deprecated Do not use! Use `name` instead!
   */
  controlId: _propTypes2["default"].string,

  /** Allows for custom props to be passed down to the `ControlLabel` component. */
  controlLabelProps: _propTypes2["default"].object,

  /** The DayPicker props to customize the calendar rendered in the overlay.
   * @see See [React-Day-Picker DayPicker API](https://react-day-picker.js.org/api/DayPicker/) for more */
  dayPickerProps: _propTypes2["default"].object,

  /** Basic HTML attribute, needed for styling. */
  disabled: _propTypes2["default"].bool,

  /** Date format that is acceptable for user to enter, as well as the format of the value that is returned upon selection. Defaults to M/D/YYYY.
   * @see See [Moment.js | Docs > Parsing > String + Format](https://momentjs.com/docs/#/parsing/string-format/) for more format options */
  format: _propTypes2["default"].string,

  /**
   * Use 'filled' or 'outlined'
   * @see See [Material Design](https://material.io/components/text-fields/#usage) for options */
  formStyle: _propTypes2["default"].string,

  /** Additional props to add to the input component. The value key is ignored: use the value prop instead.
   * @see See [React-Day-Picker DayPicker API](https://react-day-picker.js.org/api/DayPickerInput#inputProps) for more */
  inputProps: _propTypes2["default"].object,

  /** Allows for a ref to be defined to the DOM input */
  inputRef: _styledHelpers.refType,

  /** This will add an asterisk (*) to the `labelText` and provided `assistiveText` if none is provided. */
  isRequired: _propTypes2["default"].bool,

  /** The string value displayed on top of the control in the `ControlLabel` component. */
  labelText: _propTypes2["default"].string,

  /** Locale defaults to English (en) */
  locale: _propTypes2["default"].string,

  /** Define where to align the dropdown menu.
   * Please use either `left` or `right`.
   * Uses styled-system's responsive styling to specify via specic breakpoints. */
  menuAlignment: _propTypes2["default"].oneOfType([_propTypes2["default"].array, _propTypes2["default"].string]),

  /** Define the flex-direction of the menu.  Uses styled-system's responsive styling.  Should only be used for menus that have more than one month. */
  menuDirection: _propTypes2["default"].oneOfType([_propTypes2["default"].array, _propTypes2["default"].string]),

  /** Override `menuDirection`'s specific breakpoints for when to use column/row view.
   * Please use `column` or `row`.
   * Enter a value for `maxWidth` for `column`.
   * Enter a value for `minWidth` for `row`.
   * Should only be used for menus that have more than one month. */
  menuDirectionViewportBreakpoint: _propTypes2["default"].object,

  /** `'01'`, `'02'`, `'03'`, `'04'`, `'05'`, `'06'`.  Use these to define the boxShadow and zIndex styles. */
  menuElevation: _propTypes2["default"].string,

  /** Defines the bottom CSS property of the menu's overlay */
  menuOverlayBottom: _propTypes2["default"].oneOfType([_propTypes2["default"].array, _propTypes2["default"].number, _propTypes2["default"].string]),

  /** Defines the left CSS property of the menu's overlay */
  menuOverlayLeft: _propTypes2["default"].oneOfType([_propTypes2["default"].array, _propTypes2["default"].number, _propTypes2["default"].string]),

  /** Defines the right CSS property of the menu's overlay */
  menuOverlayRight: _propTypes2["default"].oneOfType([_propTypes2["default"].array, _propTypes2["default"].number, _propTypes2["default"].string]),

  /** Defines the top CSS property of the menu's overlay */
  menuOverlayTop: _propTypes2["default"].oneOfType([_propTypes2["default"].array, _propTypes2["default"].number, _propTypes2["default"].string]),

  /** Defines the placement of the dropdown menu */
  menuPlacement: _propTypes2["default"].oneOfType([_propTypes2["default"].array, _propTypes2["default"].string]),

  /** Should be used on each form control.  When no `id` or `controlId` are provided, `name` will populate both fields. */
  name: _propTypes2["default"].string,

  /** Used to render a dropdown control as a `PlainText` element. */
  plainText: _propTypes2["default"].bool,

  /** Error text that will appear below the control when validation fires. */
  validationError: _propTypes2["default"].string,

  /** The value of the input field.  It can either be a string or a Date object.
   * @see See [React-Day-Picker API](https://react-day-picker.js.org/api/DayPickerInput#value) for more about the prop.
   * @see See [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) for more about Date objects.
   */
  value: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].instanceOf(Date)]),

  /** Define the format for the value sent to the database.  Default value is "YYYY-MM-DD".
   * When user call OnChange, onChange function is expected to be called with 4 parameters: selectedDay, modifiers, input, formattedDay
   * selectedDay: the date object of the selected date
   * modifiers: matching day for the given modifiers
   * input: the inner input which you get the the input.value
   * formattedDay: string format output that using the valueFormat
   */
  valueFormat: _propTypes2["default"].any
}, _styledSystem.borderRadius.propTypes, {}, _styledHelpers.spaceProps.propTypes, {}, _styledHelpers.control.propTypes, {}, _styledHelpers.typography.propTypes);
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
  inputRef: function inputRef() {},
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

exports.DateField = DateField;